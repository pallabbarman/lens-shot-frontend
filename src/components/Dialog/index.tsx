import CloseIcon from '@/icons/CloseIcon';
import { isBrowser } from '@/utils/window';
import {
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Dialog as MuiDialog,
    DialogProps as MuiDialogProps,
    Typography,
} from '@mui/material';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface DialogProps extends MuiDialogProps {
    actions?: ReactNode;
    onClose?: VoidFunction;
}

const Dialog = ({
    open,
    title,
    children,
    actions,
    onClose,
    ...props
}: DialogProps) => {
    return isBrowser
        ? createPortal(
              <MuiDialog fullWidth open={open} onClose={onClose} {...props}>
                  {title && (
                      <DialogTitle
                          sx={{
                              pt: 3,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                          }}
                          component="div"
                      >
                          <Typography variant="h2" fontWeight={400}>
                              {title}
                          </Typography>
                          <IconButton onClick={onClose}>
                              <CloseIcon />
                          </IconButton>
                      </DialogTitle>
                  )}
                  <DialogContent sx={{ pt: `8px!important` }}>
                      {children}
                  </DialogContent>
                  {actions && (
                      <DialogActions sx={{ pb: 3, px: 3 }}>
                          {actions}
                      </DialogActions>
                  )}
              </MuiDialog>,
              document.body
          )
        : null;
};

export default Dialog;
