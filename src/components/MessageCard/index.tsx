import noData from '@/assets/no-data.svg';
import { Box, BoxProps, Button, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface MessageCardProps extends BoxProps {
    img?: string | StaticImageData;
    children?: string;
    fullHeight?: boolean;
}

const MessageCard = ({
    img,
    children,
    fullHeight = false,
    ...props
}: MessageCardProps) => {
    return (
        <Box
            height={fullHeight ? '100vh' : 'auto'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            {...props}
        >
            <Box width={300} height={350} position="relative">
                <Image src={img || noData} alt={children || 'no-data'} fill />
            </Box>
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                gap={3}
            >
                <Typography variant="text3" color="textSecondary">
                    {children || 'No data found! Please try again.'}
                </Typography>
                <Button LinkComponent={Link} href="/">
                    Back home
                </Button>
            </Box>
        </Box>
    );
};

export default MessageCard;
