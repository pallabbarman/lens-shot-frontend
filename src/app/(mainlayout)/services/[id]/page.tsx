'use client';

import bc from '@/assets/photo1.jpg';
import Fancybox from '@/components/Fancybox';
import SectionTitle from '@/components/SectionTitle';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const Service = () => {
    return (
        <Box my={{ xs: 2, sm: 5 }}>
            <SectionTitle label="EXAMPLE PAGE">
                Portrait Photography
            </SectionTitle>
            <Box>
                <Typography variant="text5" color="textSecondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus nesciunt illo omnis mollitia aspernatur earum!
                    Excepturi quia aperiam quae nam eius fuga incidunt! Veniam
                    autem inventore rem nihil? Quibusdam quo deserunt officiis
                    suscipit. Ratione quae, id architecto at, hic numquam eos
                    laudantium, iure saepe consequuntur similique quod et
                    repudiandae reprehenderit!
                </Typography>
            </Box>
            <Fancybox
                options={{
                    Carousel: { infinite: false },
                }}
            >
                <Grid container spacing={3} mt={3}>
                    <Grid item sm={6} xs={12}>
                        <Box
                            component={Image}
                            src={bc}
                            alt="abc"
                            width={0}
                            placeholder="blur"
                            data-fancybox="gallery"
                            height={{ xs: 300, sm: 350 }}
                            sx={{ width: '100%', objectFit: 'cover' }}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Box
                            component={Image}
                            src={bc}
                            alt="abc"
                            width={0}
                            placeholder="blur"
                            data-fancybox="gallery"
                            height={{ xs: 300, sm: 350 }}
                            sx={{ width: '100%', objectFit: 'cover' }}
                        />
                    </Grid>
                </Grid>
            </Fancybox>
        </Box>
    );
};

export default Service;
