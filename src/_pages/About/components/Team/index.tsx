import SectionTitle from '@/components/SectionTitle';
import { teamData } from '@/constants/Team';
import { cssColor } from '@/utils/color';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const Team = () => {
    return (
        <Box mt={{ xs: 3, sm: 10 }}>
            <SectionTitle label="Photographer">Creative Team</SectionTitle>
            <Grid container spacing={3}>
                {teamData.map((team) => (
                    <Grid item sm={6} xs={12} key={team.name}>
                        <Box
                            height={360}
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                component={Image}
                                src={`/${team.img}`}
                                alt={team.name}
                                fill
                                sx={{
                                    objectFit: 'cover',
                                    '&:hover': {
                                        transition: 'all 1s ease',
                                        transform: 'scale(1.09, 1.09)',
                                    },
                                }}
                            />
                            <Box
                                p="16px 32px"
                                display="flex"
                                justifyContent="space-between"
                                position="absolute"
                                textAlign="center"
                                bottom={0}
                                left={0}
                                right={0}
                                color={cssColor('white')}
                                sx={{
                                    background: 'rgba(0, 0, 0, 0.7)',
                                }}
                            >
                                <Box>
                                    <Typography variant="text1" component="div">
                                        {team.name}
                                    </Typography>
                                    <Typography variant="text5">
                                        Photographer
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Team;
