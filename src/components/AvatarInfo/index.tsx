import { Box, BoxProps, Typography } from '@mui/material';
import Avatar from '../Avatar';

interface AvatarInfoProps extends BoxProps {
    name: string;
}

const AvatarInfo = ({ name, ...props }: AvatarInfoProps) => {
    return (
        <Box display="flex" alignItems="center" gap={1} {...props}>
            <Avatar name={name} />
            <Typography variant="text3">{name}</Typography>
        </Box>
    );
};

export default AvatarInfo;
