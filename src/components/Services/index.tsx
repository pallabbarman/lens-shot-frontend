import { Box, Grid, Typography } from '@mui/material';
import ServiceCard from '../ServiceCard';

const Services = () => {
    return (
        <Box>
            <Box textAlign="center">
                <Typography variant="h1">My Services</Typography>
                <Grid container>
                    <Grid item>
                        <ServiceCard />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Services;
