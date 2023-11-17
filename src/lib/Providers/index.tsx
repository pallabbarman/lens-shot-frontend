'use client';

import store from '@/redux/app';
import ThemeProvider from '@/theme/ThemeProvider';
import { THEMES, ThemeMode } from '@/theme/theme';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <Provider store={store}>
            <ThemeProvider
                responsiveFontSizes
                themeMode={THEMES.LIGHT as ThemeMode}
            >
                {children}
            </ThemeProvider>
        </Provider>
    );
};

export default Providers;
