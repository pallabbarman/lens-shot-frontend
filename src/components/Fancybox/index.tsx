import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { OptionsType } from '@fancyapps/ui/types/Fancybox/options';
import { Box } from '@mui/material';
import { ReactNode, useEffect, useRef } from 'react';

interface FancyboxProps {
    options?: Partial<OptionsType>;
    delegate?: string;
    children?: ReactNode;
}

const Fancybox = ({ options, delegate, children }: FancyboxProps) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const fancyboxDelegate = delegate || '[data-fancybox]';
        const fancyboxOptions = options || {};

        NativeFancybox.bind(container, fancyboxDelegate, fancyboxOptions);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return (
        <Box ref={containerRef} zIndex={1120} data-testid="pallab">
            {children}
        </Box>
    );
};

export default Fancybox;
