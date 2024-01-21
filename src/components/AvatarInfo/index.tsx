import { cssColor } from '@/utils/color';
import { formatTimeAgo } from '@/utils/datetime';
import { Box, BoxProps, Typography } from '@mui/material';
import Avatar from '../Avatar';

interface AvatarInfoProps extends BoxProps {
    name: string;
    comment?: string;
    date?: Date;
}

const AvatarInfo = ({ name, comment, date, ...props }: AvatarInfoProps) => {
    return (
        <Box
            p={2}
            mt={3}
            gap={1}
            display="flex"
            borderRadius={1}
            flexDirection="column"
            bgcolor={cssColor('lightgrey')}
            {...props}
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
            {date && (
                <Typography ml={6} variant="text6">
                    {formatTimeAgo(date)}
                </Typography>
            )}
        </Box>
    );
};

export default AvatarInfo;
