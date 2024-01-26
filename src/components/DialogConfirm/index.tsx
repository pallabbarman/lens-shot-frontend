import { Button, Grid } from '@mui/material';
import { ReactNode } from 'react';
import Dialog, { DialogProps } from '../Dialog';

export interface DialogConfirmProps extends DialogProps {
    closeLabel?: ReactNode;
    confirmLabel?: ReactNode;
    disabled?: boolean;
    onClose?: VoidFunction;
    onConfirm?: VoidFunction;
}

const DialogConfirm = ({
    children,
    confirmLabel,
    closeLabel,
    disabled = false,
    onClose,
    onConfirm,
    ...props
}: DialogConfirmProps) => {
    const actions = (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Button
                    fullWidth
                    type="button"
                    onClick={onClose}
                    disabled={disabled}
                >
                    {closeLabel || 'Close'}
                </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button
                    fullWidth
                    type="button"
                    onClick={onConfirm}
                    disabled={disabled}
                >
                    {confirmLabel || 'Confirm'}
                </Button>
            </Grid>
        </Grid>
    );

    return (
        <Dialog actions={actions} onClose={onClose} {...props}>
            {children}
        </Dialog>
    );
};

export default DialogConfirm;
