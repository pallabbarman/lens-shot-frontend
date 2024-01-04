import { Box } from '@mui/material';
import ImageGallery from './components/ImageGallery';
import VideoGallery from './components/VideoGallery';

const Gallery = () => {
    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <ImageGallery />
            <VideoGallery />
        </Box>
    );
};

export default Gallery;
