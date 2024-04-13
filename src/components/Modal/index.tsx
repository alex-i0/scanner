import { Button } from '@/components/catalyst/button';
import {
    Dialog,
    DialogActions,
    DialogBody,
    DialogDescription,
    DialogTitle,
} from '@/components/catalyst/dialog';
import { Field, Label } from '@/components/catalyst/fieldset';

export const Modal = ({ isOpen, setIsOpen, data }: any) => {
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
                    <span>{data}</span>
                </Field>
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsOpen(false)}>
                    Cancel
                </Button>
                <Button onClick={() => setIsOpen(false)}>Access link</Button>
            </DialogActions>
        </Dialog>
    );
};
