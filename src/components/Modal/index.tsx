'use client';

import { Button } from '@/components/catalyst/button';
import {
    Dialog,
    DialogActions,
    DialogBody,
    DialogDescription,
    DialogTitle,
} from '@/components/catalyst/dialog';
import { Field, Label } from '@/components/catalyst/fieldset';
import { useState } from 'react';
import { systemPrompt } from '@/const/prompts';
import { Badge } from '../catalyst/badge';
import { Text, Code } from '../catalyst/text';

export const Modal = ({ isOpen, setIsOpen, data }: any) => {
    const [response, setResponse] = useState('{}');

    const handleOpenaiAnalysis = async () => {
        if (!data) return;

        const body = JSON.stringify({
            systemPrompt,
            userPrompt: data,
        });

        console.log(body);

        await fetch('/api/analyze-link', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        })
            .then(async (response) => {
                const content = await response.json();
                setResponse(content.text);
            })
            .catch((error) => {
                alert(error);
            });
    };

    console.log(response);
    const parsedJson = JSON.parse(response);

    const getClasses = (
        probability: string
    ): 'red' | 'green' | 'amber' | 'emerald' => {
        switch (probability) {
            case 'none':
                return 'green';
            case 'low':
                return 'emerald';
            case 'medium':
                return 'amber';
            case 'high':
                return 'red';
            default:
                return 'green';
        }
    };

    const receivedResponse = Object.keys(response).length === 0;

    return (
        <Dialog open={isOpen} onClose={setIsOpen}>
            <DialogTitle>Scanning results</DialogTitle>
            <DialogDescription>
                Below, you&apos;ll find the link obtained from the QR code along
                with its safety status, letting you know whether it&apos;s safe
                to access.
            </DialogDescription>
            <DialogBody>
                <Field>
                    <Label>Link: </Label>
                    <Text>
                        <Code>{data}</Code>
                    </Text>
                </Field>
                {!!parsedJson.probability ? (
                    <Field>
                        <Label>Safety risk: </Label>
                        <Badge color={`${getClasses(parsedJson.probability)}`}>
                            {parsedJson.probability}
                        </Badge>
                    </Field>
                ) : null}
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsOpen(false)}>
                    Cancel
                </Button>
                {!!parsedJson.probability ? (
                    <Button plain href={data}>
                        Proceed
                    </Button>
                ) : (
                    <Button plain onClick={handleOpenaiAnalysis}>
                        Analyze
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};
