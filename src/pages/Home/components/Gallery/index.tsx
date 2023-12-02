'use client';

import abc from '@/assets/1.jpg';
import PhotoGallery from '@/components/PhotoGallery';
import SectionTitle from '@/components/SectionTitle';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Gallery = () => {
    const theme = useTheme();
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box mt={3}>
            <SectionTitle label="Portfolio">Gallery</SectionTitle>
            <Grid container spacing={4} justifyContent="center">
                <Grid item md={4} sm={6}>
                    <Grid container spacing={4} flexDirection="column">
                        <Grid item>
                            <PhotoGallery
                                img={abc}
                                alt="hi"
                                width="100%"
                                height={mdUp ? 495 : 230}
                            />
                        </Grid>
                        <Grid item>
                            <PhotoGallery
                                img={abc}
                                alt="hi"
                                width="100%"
                                height={230}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6}>
                    <Grid container spacing={4} flexDirection="column">
                        <Grid item>
                            <PhotoGallery
                                img={abc}
                                alt="hi"
                                width="100%"
                                height={230}
                            />
                        </Grid>
                        <Grid item>
                            <PhotoGallery
                                img={abc}
                                alt="hi"
                                width="100%"
                                height={230}
                            />
                        </Grid>
                        <Grid item>
                            <PhotoGallery
                                img={abc}
                                alt="hi"
                                width="100%"
                                height={230}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6}>
                    <Grid container spacing={4} flexDirection="column">
                        <Grid item>
                            <PhotoGallery
                                img={abc}
                                alt="hi"
                                width="100%"
                                height={230}
                            />
                        </Grid>
                        <Grid item>
                            <PhotoGallery
                                img={abc}
                                alt="hi"
                                width="100%"
                                height={mdUp ? 495 : 230}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Gallery;
