import DeleteIcon from '@/icons/DeleteIcon';
import EditIcon from '@/icons/EditIcon';
import { cssColor } from '@/utils/color';
import { formatTimeAgo } from '@/utils/datetime';
import { Box, BoxProps, IconButton, Typography } from '@mui/material';
import AvatarInfo from '../AvatarInfo';

interface CommentInfoProps extends BoxProps {
    name: string;
    comment?: string;
    date?: Date;
    isUpdate?: boolean;
    disabled?: boolean;
    onEdit?: any;
    onDelete?: any;
}

const CommentInfo = ({
    name,
    comment,
    date,
    isUpdate = false,
    disabled = false,
    onEdit,
    onDelete,
    ...props
}: CommentInfoProps) => {
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
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap={1}
            >
                <AvatarInfo name={name} />
                {isUpdate && (
                    <Box display="flex" alignItems="center">
                        <IconButton onClick={onEdit} disabled={disabled}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={onDelete} disabled={disabled}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                )}
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

export default CommentInfo;
