import abc from '@/assets/1.jpg';
import CategoryItems from '@/components/CategoryItems';
import SectionTitle from '@/components/SectionTitle';
import ServiceItem from '@/components/ServiceItem';
import { Box, Grid } from '@mui/material';

const Services = () => {
    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <SectionTitle label="What we do">Our Services</SectionTitle>
            <Grid container spacing={3}>
                <Grid item md={3} sm={6} xs={12}>
                    <ServiceItem img={abc}>Weeding Photography</ServiceItem>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <ServiceItem img={abc}>Weeding Photography</ServiceItem>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <ServiceItem img={abc}>Weeding Photography</ServiceItem>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <ServiceItem img={abc}>Weeding Photography</ServiceItem>
                </Grid>
            </Grid>
            <CategoryItems href="/services">All Service</CategoryItems>
        </Box>
    );
};

export default Services;
