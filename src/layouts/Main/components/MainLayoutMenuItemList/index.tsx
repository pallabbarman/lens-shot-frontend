import CallIcon from '@/icons/CallIcon';
import CameraIcon from '@/icons/CameraIcon';
import CollectionsIcon from '@/icons/CollectionsIcon';
import FeedbackIcon from '@/icons/FeedbackIcon';
import HomeIcon from '@/icons/HomeIcon';
import InfoIcon from '@/icons/InfoIcon';
import NoteIcon from '@/icons/NoteIcon';

export const mainLayoutMenuItemList = [
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
