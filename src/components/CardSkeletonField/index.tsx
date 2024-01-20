import SkeletonField from '@/components/SkeletonField';
import Grid from '@mui/material/Grid';
import { memo } from 'react';

const CardSkeletonField = () => {
    return (
        <Grid container spacing={3}>
            {Array.from(new Array(3)).map((_, index) => (
                <Grid item md={4} sm={6} xs={12} key={index}>
                    <SkeletonField height={220} width={370} />
                    <SkeletonField height={50} sx={{ my: 1 }} />
                    <SkeletonField width={'70%'} />
                </Grid>
            ))}
        </Grid>
    );
};

export default memo(CardSkeletonField);
