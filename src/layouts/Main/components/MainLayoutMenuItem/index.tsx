import { cssColor } from '@/utils/color';
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemProps,
    ListItemText,
} from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface MainLayoutMenuItemProps extends ListItemProps {
    href: string;
    icon: ReactNode;
    children: ReactNode;
}

const MainLayoutMenuItem = ({
    href,
    icon,
    children,
    ...props
}: MainLayoutMenuItemProps) => {
    return (
        <ListItem
            disablePadding
            component={Link}
            href={href}
            sx={{ color: cssColor('stormgrey') }}
            {...props}
        >
            <ListItemButton>
                <ListItemIcon sx={{ minWidth: 30 }}>{icon}</ListItemIcon>
                <ListItemText primary={children} />
            </ListItemButton>
        </ListItem>
    );
};

export default MainLayoutMenuItem;
