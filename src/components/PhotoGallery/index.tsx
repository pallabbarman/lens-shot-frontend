import { Box, BoxProps } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

interface PhotoGalleryProps extends BoxProps {
    img: string | StaticImageData;
    alt: string;
}

const PhotoGallery = ({ img, alt, ...props }: PhotoGalleryProps) => {
    return (
        <Box
            component={Image}
            src={img}
            alt={alt}
            sx={{
                cursor: 'pointer',
                objectFit: 'cover',
            }}
            {...props}
        />
    );
};

export default PhotoGallery;
