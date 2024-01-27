'use client';

import CardSkeletonField from '@/components/CardSkeletonField';
import CategoryItems from '@/components/CategoryItems';
import SectionTitle from '@/components/SectionTitle';
import ServiceItem from '@/components/ServiceItem';
import { useGetServicesQuery } from '@/redux/features/serviceApi';
import { Box, Grid } from '@mui/material';
import { toast } from 'react-toastify';

const Services = () => {
    const { data, isLoading, isError, isSuccess, error } =
        useGetServicesQuery(undefined);

    let content = null;

    if (isLoading) {
        content = <CardSkeletonField />;
    } else if (isError && error) {
        toast.error('Something went wrong! Please try again!');
        content = null;
    } else if (isSuccess && data?.data) {
        content = (
            <Grid container spacing={3}>
                {data.data?.map((service) => (
                    <Grid item md={4} sm={6} xs={12} key={service.id}>
                        <ServiceItem service={service} />
                    </Grid>
                ))}
            </Grid>
        );
    }

    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <SectionTitle label="What we do">Our Services</SectionTitle>
            {content}
            <CategoryItems href="/services">All Service</CategoryItems>
        </Box>
    );
};

export default Services;
