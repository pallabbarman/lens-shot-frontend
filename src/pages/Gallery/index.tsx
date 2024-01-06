import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

const ImageGallery = dynamic(() => import('./components/ImageGallery'));
const VideoGallery = dynamic(() => import('./components/VideoGallery'));

const Gallery = () => {
    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <ImageGallery />
            <VideoGallery />
        </Box>
    );
};

export default Gallery;
