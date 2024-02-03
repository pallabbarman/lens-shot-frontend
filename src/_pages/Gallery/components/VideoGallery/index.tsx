import abc from '@/assets/1.jpg';
import PhotoGallery from '@/components/PhotoGallery';
import SectionTitle from '@/components/SectionTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const VideoGallery = () => {
    return (
        <Box mt={5}>
            <SectionTitle label="Portfolio">Video Gallery</SectionTitle>
            <Grid container spacing={3}>
                <Grid item sm={4} xs={12}>
                    <PhotoGallery
                        src={abc}
                        alt="hi"
                        height={230}
                        data-fancybox="gallery"
                    />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <PhotoGallery
                        src={abc}
                        alt="hi"
                        height={230}
                        data-fancybox="gallery"
                    />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <PhotoGallery
                        src={abc}
                        alt="hi"
                        height={230}
                        data-fancybox="gallery"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default VideoGallery;
