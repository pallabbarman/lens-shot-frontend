'use client';

import useAuth from '@/hooks/useAuth';
import CancelIcon from '@/icons/CancelIcon';
import LoginIcon from '@/icons/LoginIcon';
import RegistrationIcon from '@/icons/RegistrationIcon';
import { userLoggedOut } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
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
import MainLayoutMenuItem from '../MainLayoutMenuItem';
import { mainLayoutMenuItemList } from '../MainLayoutMenuItemList';
interface MainLayoutMenuProps {
    open: boolean;
    onClose: VoidFunction;
}

const MainLayoutMenu = ({ open, onClose }: MainLayoutMenuProps) => {
    const auth = useAuth();
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(userLoggedOut());
        onClose();
    };

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
                {auth ? (
                    <ListItem disablePadding onClick={handleLogout}>
                        <ListItemButton>
                            <ListItemIcon
                                sx={{
                                    minWidth: 30,
                                }}
                            >
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                ) : (
                    <>
                        <MainLayoutMenuItem
                            href="/login"
                            icon={<LoginIcon />}
                            onClose={onClose}
                        >
                            Login
                        </MainLayoutMenuItem>
                        <MainLayoutMenuItem
                            href="/register"
                            icon={<RegistrationIcon />}
                            onClose={onClose}
                        >
                            Registration
                        </MainLayoutMenuItem>
                    </>
                )}
                {mainLayoutMenuItemList.map((item) => (
                    <MainLayoutMenuItem
                        key={item.href}
                        href={item.href}
                        icon={item.icon}
                        onClose={onClose}
                    >
                        {item.title}
                    </MainLayoutMenuItem>
                ))}
            </List>
        </Drawer>
    );
};

export default MainLayoutMenu;
