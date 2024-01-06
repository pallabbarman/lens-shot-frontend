import AccordionList from '@/components/AccordionList';
import SectionTitle from '@/components/SectionTitle';
import { faqList } from '@/constants/Faq';
import { Box } from '@mui/material';

const Faq = () => {
    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <SectionTitle label="F.A.QS">
                Frequently Asked Questions
            </SectionTitle>
            {faqList.map((faq) => (
                <AccordionList key={faq.id} title={faq.question}>
                    {faq.response}
                </AccordionList>
            ))}
        </Box>
    );
};

export default Faq;
