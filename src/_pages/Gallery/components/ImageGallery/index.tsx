'use client';

import abc from '@/assets/1.jpg';
import Fancybox from '@/components/Fancybox';
import PhotoGallery from '@/components/PhotoGallery';
import SectionTitle from '@/components/SectionTitle';
import Grid from '@mui/material/Grid';

const ImageGallery = () => {
    return (
        <>
            <SectionTitle label="Portfolio">Photo Gallery</SectionTitle>
            <Fancybox
                options={{
                    Carousel: { infinite: false },
                }}
            >
                <Grid container spacing={3}>
                    <Grid item sm={4} xs={12}>
                        <PhotoGallery
                            img={abc}
                            alt="hi"
                            width="100%"
                            height={230}
                            data-fancybox="gallery"
                        />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <PhotoGallery
                            img={abc}
                            alt="hi"
                            width="100%"
                            height={230}
                            data-fancybox="gallery"
                        />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <PhotoGallery
                            img={abc}
                            alt="hi"
                            width="100%"
                            height={230}
                            data-fancybox="gallery"
                        />
                    </Grid>
                </Grid>
            </Fancybox>
        </>
    );
};

export default ImageGallery;
