import { blurDataURL } from '@/constants/Image';
import { ITeam } from '@/types/team';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface TeamImageProps {
    team: ITeam;
}

const TeamImage = ({ team }: TeamImageProps) => {
    return (
        <Box
            component={Image}
            src={`/${team.img}`}
            alt={team.name}
            fill
            placeholder="blur"
            blurDataURL={blurDataURL}
            sx={{
                objectFit: 'cover',
                '&:hover': {
                    transition: 'all 1s ease',
                    transform: 'scale(1.09, 1.09)',
                },
            }}
        />
    );
};

export default TeamImage;
