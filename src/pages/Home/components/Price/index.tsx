import SectionTitle from '@/components/SectionTitle';
import { priceList } from '@/constants/Price';
import { cssColor } from '@/utils/color';
import { Box, Grid, Typography } from '@mui/material';

const Price = () => {
    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <SectionTitle label="Packages">Pricing Plan</SectionTitle>
            <Grid container spacing={3}>
                {priceList.map((data) => (
                    <Grid item md={4} sm={6} xs={12} key={data.price}>
                        <Box
                            p={5}
                            textAlign="center"
                            bgcolor={cssColor('lightgrey')}
                        >
                            <Typography variant="h3" fontWeight={500}>
                                {data.name}
                            </Typography>
                            <Typography variant="h1" my={2}>
                                {data.price}
                            </Typography>
                            <Typography
                                mb={1}
                                variant="text3"
                                component="div"
                                color="textSecondary"
                            >
                                {data.duration}
                            </Typography>
                            {data.services.map((service, index) => (
                                <Typography
                                    mb={1}
                                    key={`${service} ${index}`}
                                    variant="text3"
                                    component="div"
                                    color="textSecondary"
                                >
                                    {service}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Price;
