import AvatarInfo from '@/components/AvatarInfo';
import SectionTitle from '@/components/SectionTitle';
import { Box } from '@mui/material';

const Feedback = () => {
    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <SectionTitle label="REVIEWS">Feedback</SectionTitle>
            <AvatarInfo
                name="Walter White"
                comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa eius ab sed optio magni asperiores deserunt, quis facilis impedit!"
            />
        </Box>
    );
};

export default Feedback;
