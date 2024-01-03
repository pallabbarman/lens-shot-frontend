'use client';

import abc from '@/assets/1.jpg';
import Fancybox from '@/components/Fancybox';
import PhotoGallery from '@/components/PhotoGallery';
import SectionTitle from '@/components/SectionTitle';
import { ArrowRightAlt } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const Gallery = () => {
    return (
        <Box mt={3}>
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
                                    img={abc}
                                    alt="hi"
                                    width="100%"
                                    height={{ sm: 495, xs: 230 }}
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
                                    height={{ sm: 495, xs: 230 }}
                                    data-fancybox="gallery"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Fancybox>
            <Box mt={2}>
                <Typography
                    variant="text5"
                    color="textSecondary"
                    display="flex"
                    alignItems="center"
                    justifyContent="end"
                    component={Link}
                    href="/gallery"
                    sx={{
                        textDecoration: 'none',
                    }}
                >
                    All Gallery <ArrowRightAlt />
                </Typography>
            </Box>
        </Box>
    );
};

export default Gallery;
