import CallIcon from '@/icons/CallIcon';
import CancelIcon from '@/icons/CancelIcon';
import CollectionsIcon from '@/icons/CollectionsIcon';
import InfoIcon from '@/icons/InfoIcon';
import LoginIcon from '@/icons/LoginIcon';
import NoteIcon from '@/icons/NoteIcon';
import RegistrationIcon from '@/icons/RegistrationIcon';
import { Box, Drawer, IconButton, List } from '@mui/material';
import MainLayoutMenuItem from '../MainLayoutMenuItem';
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
                <MainLayoutMenuItem href="/login" icon={<LoginIcon />}>
                    Login
                </MainLayoutMenuItem>
                <MainLayoutMenuItem
                    href="/register"
                    icon={<RegistrationIcon />}
                >
                    Registration
                </MainLayoutMenuItem>
                <MainLayoutMenuItem href="/gallery" icon={<CollectionsIcon />}>
                    Portfolio
                </MainLayoutMenuItem>
                <MainLayoutMenuItem href="/blog" icon={<NoteIcon />}>
                    Blog
                </MainLayoutMenuItem>
                <MainLayoutMenuItem href="/about" icon={<InfoIcon />}>
                    About
                </MainLayoutMenuItem>
                <MainLayoutMenuItem href="/contact" icon={<CallIcon />}>
                    Contact
                </MainLayoutMenuItem>
            </List>
        </Drawer>
    );
};

export default MainLayoutMenu;
