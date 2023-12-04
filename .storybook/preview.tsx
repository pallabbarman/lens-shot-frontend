import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/app/globals.css';
import ThemeProvider from '../src/theme/ThemeProvider';
import { THEMES, ThemeMode } from '../src/theme/theme';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [
        (Story) => (
            <ThemeProvider themeMode={THEMES.LIGHT as ThemeMode}>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
