import team from '@/assets/team.jpg';
import BlogItem from '@/components/BlogItem';
import SectionTitle from '@/components/SectionTitle';
import Box from '@mui/material/Box';

const AboutUs = () => {
    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <SectionTitle label="Welcome">About Us</SectionTitle>
            <BlogItem img={team} title="LensShot Team" label="PHOTOGRAPHER">
                Luroin non lorem ac erat suscipit bibendum. Nulla facilisi.
                Sedeuter nunc volutpat, mollis sapien vel, conseyer
                turpeutionyer masin libero semper. Fusceler mollis augue sit
                amet hendrerit vestibulum. Duisteyerionyer evenena lacus. Fusce
                mollis augue sit amet hendrerit vestibulum. Duisteyerionyer
                venenatis lacus. Quisque gravida eros ut turpis interdum ornare.
                <br />
                <br />
                Interdum et malesu they adamale fames ac ante ipsum primis inno
                faucibus. Curabitur arcu erosite feugiat in tortor in, volutpat
                sollicitudin libero. Maecenas nisl est conselur rhoncus loremir
                consequat et, finibus nec purus. Yuroin non lorem ac erat
                suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat,
                mollis sapien veli conseyer turpeutionyer massa in libero semper
                sedeuter nunc volutpat, mollis sapien veletion.
            </BlogItem>
        </Box>
    );
};

export default AboutUs;
