import { cssColor } from '@/utils/color';
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemProps,
    ListItemText,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface MainLayoutMenuItemProps extends ListItemProps {
    href: string;
    icon: ReactNode;
    children: ReactNode;
    onClose: VoidFunction;
}

const MainLayoutMenuItem = ({
    href,
    icon,
    children,
    onClose,
    ...props
}: MainLayoutMenuItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <ListItem
            disablePadding
            component={Link}
            href={href}
            onClick={onClose}
            sx={{
                color: cssColor(isActive ? 'richblack' : 'stormgrey'),
                bgcolor: cssColor(isActive ? 'lightgrey' : 'white'),
            }}
            {...props}
        >
            <ListItemButton>
                <ListItemIcon
                    sx={{
                        minWidth: 30,
                        color: cssColor(isActive ? 'richblack' : 'stormgrey'),
                    }}
                >
                    {icon}
                </ListItemIcon>
                <ListItemText primary={children} />
            </ListItemButton>
        </ListItem>
    );
};

export default MainLayoutMenuItem;
