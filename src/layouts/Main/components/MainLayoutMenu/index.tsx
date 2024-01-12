import CancelIcon from '@/icons/CancelIcon';
import { Box, Drawer, IconButton, List } from '@mui/material';
import MainLayoutMenuItem from '../MainLayoutMenuItem';
import { mainLayoutMenuItemList } from '../MainLayoutMenuItemList';
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
