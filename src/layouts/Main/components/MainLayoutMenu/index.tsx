import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CancelIcon from '@mui/icons-material/Cancel';
import LoginIcon from '@mui/icons-material/Login';
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
interface MainLayoutMenuProps {
    open: boolean;
    onClose: VoidFunction;
}

const MainLayoutMenu = ({ open, onClose }: MainLayoutMenuProps) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            variant="temporary"
            PaperProps={{
                sx: {
                    p: 2,
                    width: 250,
                },
            }}
        >
            <Box display="flex" justifyContent="flex-end">
                <IconButton onClick={onClose}>
                    <CancelIcon />
                </IconButton>
            </Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                            <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                            <AppRegistrationIcon />
                        </ListItemIcon>
                        <ListItemText primary="Registration" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default MainLayoutMenu;