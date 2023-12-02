import SectionTitle from '@/components/SectionTitle';
import { Box, Grid } from '@mui/material';
import ServiceItem from './components/ServiceItem';

const Services = () => {
    return (
        <Box>
            <SectionTitle label="What I do">Our Services</SectionTitle>
            <Grid container>
                <Grid item>
                    <ServiceItem />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Services;
