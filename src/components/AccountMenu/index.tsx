import AccountIcon from '@/icons/AccountIcon';
import HomeIcon from '@/icons/HomeIcon';
import LogoutIcon from '@/icons/LogoutIcon';
import { userLoggedOut } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import Avatar from '../Avatar';

export interface AccountMenuProps {
    name: string;
}

const AccountMenu = ({ name }: AccountMenuProps) => {
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

    const handleHome = () => {
        router.push('/');
        handleClose();
    };

    const handleProfile = () => {
        router.push('/profile');
        handleClose();
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <Avatar name={name} />
            </IconButton>
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
                MenuListProps={{
                    sx: {
                        p: 1,
                    },
                }}
            >
                <MenuItem onClick={handleHome}>
                    <ListItemIcon>
                        <HomeIcon fontSize="small" />
                    </ListItemIcon>
                    Home
                </MenuItem>
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
