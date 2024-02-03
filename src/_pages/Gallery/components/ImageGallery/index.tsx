'use client';

import Fancybox from '@/components/Fancybox';
import MessageCard from '@/components/MessageCard';
import PhotoGallery from '@/components/PhotoGallery';
import Progress from '@/components/Progress';
import SectionTitle from '@/components/SectionTitle';
import { useGetPortfoliosQuery } from '@/redux/features/portfolioApi';
import Grid from '@mui/material/Grid';
import shuffle from 'lodash/shuffle';
import size from 'lodash/size';
import { toast } from 'react-toastify';

const ImageGallery = () => {
    const { data, isError, isLoading, isSuccess, error } =
        useGetPortfoliosQuery(undefined);

    let content = null;

    if (isLoading) {
        content = <Progress />;
    } else if (isError && error) {
        toast.error('Something went wrong! Please try again!');
        content = <MessageCard />;
    } else if (isSuccess && size(data?.data) === 0) {
        content = <MessageCard />;
    } else if (isSuccess && size(data?.data) > 0) {
        content = (
            <Fancybox
                options={{
                    Carousel: { infinite: false },
                }}
            >
                <Grid container spacing={3}>
                    {shuffle(data.data)?.map((photo, index) => (
                        <Grid item sm={4} xs={12} key={index}>
                            <PhotoGallery
                                src={photo}
                                alt={`${photo} ${index}`}
                                height={230}
                                data-fancybox="gallery"
                            />
                        </Grid>
                    ))}
                </Grid>
            </Fancybox>
        );
    }

    return (
        <>
            <SectionTitle label="Portfolio">Photo Gallery</SectionTitle>
            {content}
        </>
    );
};

export default ImageGallery;
