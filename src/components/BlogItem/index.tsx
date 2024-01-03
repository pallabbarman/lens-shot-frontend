import abc from '@/assets/1.jpg';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import SectionTitle from '../SectionTitle';

const BlogItem = () => {
    return (
        <Box my={{ xs: 2, sm: 5 }}>
            <Box
                position="relative"
                width="100%"
                height={{ xs: 300, sm: 500, md: 700 }}
            >
                <Image src={abc} alt="abc" fill objectFit="cover" />
            </Box>
            <Box mt={3} textAlign="justify">
                <SectionTitle label="FASHION" textAlign="start">
                    Wedding nulla sapien
                </SectionTitle>
                <Typography
                    variant="text3"
                    color="textSecondary"
                    fontWeight={400}
                >
                    Luroin non lorem ac erat suscipit bibendum. Nulla facilisi.
                    Sedeuter nunc volutpat, mollis sapien vel, conseyer
                    turpeutionyer masin libero semper. Fusceler mollis augue sit
                    amet hendrerit vestibulum. Duisteyerionyer evenena lacus.
                    Fusce mollis augue sit amet hendrerit vestibulum.
                    Duisteyerionyer venenatis lacus. Quisque gravida eros ut
                    turpis interdum ornare. Interdum et malesu they adamale
                    fames ac ante ipsum primis inno faucibus. Curabitur arcu
                    erosite feugiat in tortor in, volutpat sollicitudin libero.
                    Maecenas nisl est conselur rhoncus loremir consequat et,
                    finibus nec purus. Yuroin non lorem ac erat suscipit
                    bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis
                    sapien veli conseyer turpeutionyer massa in libero semper
                    sedeuter nunc volutpat, mollis sapien veletion.
                </Typography>
            </Box>
        </Box>
    );
};

export default BlogItem;
