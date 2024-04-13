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
            <DialogTitle>Refund payment</DialogTitle>
            <DialogDescription>
                The refund will be reflected in the customer’s bank account 2 to
                3 business days after processing.
            </DialogDescription>
            <DialogBody>
                <Field>
                    <Label>Amount</Label>
                    <span>{data}</span>
                </Field>
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsOpen(false)}>
                    Cancel
                </Button>
                <Button onClick={() => setIsOpen(false)}>Refund</Button>
            </DialogActions>
        </Dialog>
    );
};
