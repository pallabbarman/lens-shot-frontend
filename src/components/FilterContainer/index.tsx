import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

interface FilterContainerProps extends BoxProps {
    label: string;
    children?: ReactNode;
}

const FilterContainer = ({ children }: FilterContainerProps) => {
    return (
        <Box display="flex" alignItems="center">
            {children && <Box>{children}</Box>}
        </Box>
    );
};

export default FilterContainer;
