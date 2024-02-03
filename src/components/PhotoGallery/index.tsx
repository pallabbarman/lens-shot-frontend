import { blurDataURL } from '@/constants/Image';
import Image, { ImageProps, StaticImageData } from 'next/image';

interface PhotoGalleryProps extends ImageProps {
    src: string | StaticImageData;
    alt: string;
}

const PhotoGallery = ({ src, alt, ...props }: PhotoGalleryProps) => {
    return (
        <Image
            {...props}
            src={src}
            alt={alt}
            width={0}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
            style={{
                width: '100%',
                cursor: 'pointer',
                objectFit: 'cover',
            }}
        />
    );
};

export default PhotoGallery;
