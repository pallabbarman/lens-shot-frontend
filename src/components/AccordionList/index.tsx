import ExpandMoreIcon from '@/icons/ExpandMoreIcon';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material';
import { ReactNode } from 'react';

interface AccordionListProps {
    title: ReactNode;
    children: ReactNode;
}

const AccordionList = ({ title, children }: AccordionListProps) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{children}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionList;
