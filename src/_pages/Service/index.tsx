'use client';

import Fancybox from '@/components/Fancybox';
import MessageCard from '@/components/MessageCard';
import Progress from '@/components/Progress';
import SectionTitle from '@/components/SectionTitle';
import { blurDataURL } from '@/constants/Image';
import { useGetServiceQuery } from '@/redux/features/serviceApi';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { toast } from 'react-toastify';

interface ServiceProps {
    id: string;
}

const Service = ({ id }: ServiceProps) => {
    const { data, isError, isLoading, isSuccess, error } =
        useGetServiceQuery(id);

    let content = null;

    if (isLoading) {
        content = <Progress />;
    } else if (isError && error) {
        toast.error('Something went wrong! Please try again!');
        content = <MessageCard fullHeight />;
    } else if (isSuccess && data?.data) {
        content = (
            <Box mt={{ xs: 3, sm: 5 }}>
                <SectionTitle label={data.data.category?.name}>
                    {data.data.title}
                </SectionTitle>
                <Box>
                    <Typography variant="text5" color="textSecondary">
                        {data.data.description}
                    </Typography>
                </Box>
                <Fancybox
                    options={{
                        Carousel: { infinite: false },
                    }}
                >
                    <Grid container spacing={3} mt={3}>
                        {data.data.photo.map((image, index) => (
                            <Grid item sm={6} xs={12} key={index}>
                                <Image
                                    width={0}
                                    height={300}
                                    src={image}
                                    alt={data?.data?.title || 'service'}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        objectFit: 'cover',
                                    }}
                                    data-fancybox="gallery"
                                    placeholder="blur"
                                    blurDataURL={blurDataURL}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Fancybox>
            </Box>
        );
    }

    return content;
};

export default Service;
