'use client';

import abc from '@/assets/1.jpg';
import Fancybox from '@/components/Fancybox';
import PhotoGallery from '@/components/PhotoGallery';
import SectionTitle from '@/components/SectionTitle';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Gallery = () => {
    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box mt={3}>
            <SectionTitle label="Portfolio" mb={5}>
                Gallery
            </SectionTitle>
            <Fancybox
                options={{
                    Carousel: { infinite: false },
                }}
            >
                <Grid container spacing={3}>
                    <Grid item sm={4} xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <PhotoGallery
                                    img={abc}
                                    alt="hi"
                                    width="100%"
                                    height={smUp ? 495 : 230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PhotoGallery
                                    img={abc}
                                    alt="hi"
                                    width="100%"
                                    height={230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <PhotoGallery
                                    img={abc}
                                    alt="hi"
                                    width="100%"
                                    height={230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PhotoGallery
                                    img={abc}
                                    alt="hi"
                                    width="100%"
                                    height={230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PhotoGallery
                                    img={abc}
                                    alt="hi"
                                    width="100%"
                                    height={230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <PhotoGallery
                                    img={abc}
                                    alt="hi"
                                    width="100%"
                                    height={230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PhotoGallery
                                    img={abc}
                                    alt="hi"
                                    width="100%"
                                    height={smUp ? 495 : 230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Fancybox>
        </Box>
    );
};

export default Gallery;
