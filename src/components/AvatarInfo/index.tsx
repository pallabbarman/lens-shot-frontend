import { cssColor } from '@/utils/color';
import { Box, Typography } from '@mui/material';
import Avatar from '../Avatar';

interface AvatarInfoProps {
    name: string;
    comment?: string;
}

const AvatarInfo = ({ name, comment }: AvatarInfoProps) => {
    return (
        <Box
            p={2}
            gap={1}
            display="flex"
            borderRadius={1}
            flexDirection="column"
            bgcolor={cssColor('lightgrey')}
        >
            <Box display="flex" alignItems="center" gap={1}>
                <Avatar name={name} />
                <Typography variant="text3">{name}</Typography>
            </Box>
            {comment && (
                <Typography ml={6} variant="text5" color="textSecondary">
                    {comment}
                </Typography>
            )}
        </Box>
    );
};

export default AvatarInfo;
