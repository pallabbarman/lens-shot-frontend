import { Button, Grid } from '@mui/material';
import { ReactNode } from 'react';
import Dialog, { DialogProps } from '../Dialog';

export interface DialogConfirmProps extends DialogProps {
    closeLabel?: ReactNode;
    confirmLabel?: ReactNode;
    onClose?: VoidFunction;
    onConfirm?: VoidFunction;
}

const DialogConfirm = ({
    children,
    confirmLabel,
    closeLabel,
    onClose,
    onConfirm,
    ...props
}: DialogConfirmProps) => {
    const actions = (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Button fullWidth type="button" onClick={onClose}>
                    {closeLabel || 'Close'}
                </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button fullWidth type="button" onClick={onConfirm}>
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
