import CallIcon from '@/icons/CallIcon';
import CameraIcon from '@/icons/CameraIcon';
import CollectionsIcon from '@/icons/CollectionsIcon';
import FeedbackIcon from '@/icons/FeedbackIcon';
import HomeIcon from '@/icons/HomeIcon';
import InfoIcon from '@/icons/InfoIcon';
import LoginIcon from '@/icons/LoginIcon';
import NoteIcon from '@/icons/NoteIcon';
import RegistrationIcon from '@/icons/RegistrationIcon';

export const mainLayoutMenuItemList = [
    {
        href: '/login',
        icon: <LoginIcon />,
        title: 'Login',
    },
    {
        href: '/register',
        icon: <RegistrationIcon />,
        title: 'Registration',
    },
    {
        href: '/',
        icon: <HomeIcon />,
        title: 'Home',
    },
    {
        href: '/services',
        icon: <CameraIcon />,
        title: 'Service',
    },
    {
        href: '/gallery',
        icon: <CollectionsIcon />,
        title: 'Portfolio',
    },
    {
        href: '/blog',
        icon: <NoteIcon />,
        title: 'Blog',
    },
    {
        href: '/feedback',
        icon: <FeedbackIcon />,
        title: 'Feedback',
    },
    {
        href: '/about',
        icon: <InfoIcon />,
        title: 'About',
    },
    {
        href: '/contact',
        icon: <CallIcon />,
        title: 'Contact',
    },
];
