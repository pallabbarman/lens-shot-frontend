import { cssColor } from '@/utils/color';
import { getNameInitials } from '@/utils/string';
import {
    Avatar as MuiAvatar,
    AvatarProps as MuiAvatarProps,
    Typography,
} from '@mui/material';

interface AvatarProps extends MuiAvatarProps {
    name: string;
}

const Avatar = ({ name, ...props }: AvatarProps) => {
    return (
        <MuiAvatar
            sx={{
                color: cssColor('white'),
                bgcolor: cssColor('stormgrey'),
            }}
            {...props}
        >
            <Typography variant="text1">{getNameInitials(name)}</Typography>
        </MuiAvatar>
    );
};

export default Avatar;
