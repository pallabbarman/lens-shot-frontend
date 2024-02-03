'use client';

import abc from '@/assets/1.jpg';
import CategoryItems from '@/components/CategoryItems';
import Fancybox from '@/components/Fancybox';
import PhotoGallery from '@/components/PhotoGallery';
import SectionTitle from '@/components/SectionTitle';
import { Box, Grid, Theme, useMediaQuery } from '@mui/material';

const Gallery = () => {
    const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <SectionTitle label="Portfolio">Gallery</SectionTitle>
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
                                    src={abc}
                                    alt="hi"
                                    height={smUp ? 495 : 230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PhotoGallery
                                    src={abc}
                                    alt="hi"
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
                                    src={abc}
                                    alt="hi"
                                    height={230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PhotoGallery
                                    src={abc}
                                    alt="hi"
                                    height={230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PhotoGallery
                                    src={abc}
                                    alt="hi"
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
                                    src={abc}
                                    alt="hi"
                                    height={230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PhotoGallery
                                    src={abc}
                                    alt="hi"
                                    height={smUp ? 495 : 230}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Fancybox>
            <CategoryItems href="/gallery">All Gallery</CategoryItems>
        </Box>
    );
};

export default Gallery;
