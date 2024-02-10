import AccountIcon from '@/icons/AccountIcon';
import LogoutIcon from '@/icons/LogoutIcon';
import { userLoggedOut } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import {
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { MouseEvent, ReactNode, useState } from 'react';
import Avatar from '../Avatar';

export interface AccountMenuProps {
    title?: ReactNode;
    name: string;
}

const AccountMenu = ({ title, name }: AccountMenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(userLoggedOut());
        handleClose();
    };

    const handleProfile = () => {
        router.push('/profile');
        handleClose();
    };

    return (
        <>
            <Tooltip title={title}>
                <IconButton size="small" onClick={handleClick}>
                    <Avatar name={name} />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleProfile}>
                    <ListItemIcon>
                        <AccountIcon fontSize="small" />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default AccountMenu;
