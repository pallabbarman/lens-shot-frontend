import CallIcon from '@/icons/CallIcon';
import CancelIcon from '@/icons/CancelIcon';
import CollectionsIcon from '@/icons/CollectionsIcon';
import LoginIcon from '@/icons/LoginIcon';
import NoteIcon from '@/icons/NoteIcon';
import RegistrationIcon from '@/icons/RegistrationIcon';
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
import Link from 'next/link';
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
                <ListItem disablePadding component={Link} href="/login">
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                            <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} href="/register">
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                            <RegistrationIcon />
                        </ListItemIcon>
                        <ListItemText primary="Registration" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} href="/gallery">
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                            <CollectionsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Portfolio" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} href="/blog">
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                            <NoteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Blog" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} href="/contact">
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                            <CallIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default MainLayoutMenu;
