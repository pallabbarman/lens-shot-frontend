import { CssBaseline, Theme } from '@mui/material';
import {
    ThemeProvider as MuiThemeProvider,
    createTheme as createMuiTheme,
    responsiveFontSizes as muiResponsiveFontSizes,
} from '@mui/material/styles';
import { merge } from 'lodash';
import { ReactNode } from 'react';
import { THEMES, ThemeMode, getTheme } from '../theme';

interface ThemeConfig {
    responsiveFontSizes?: boolean;
    themeMode?: ThemeMode;
}

export interface ThemeProviderProps extends ThemeConfig {
    children?: ReactNode | ReactNode[];
}

const createTheme = (config: ThemeConfig = {}, themeData: Theme) => {
    let theme = createMuiTheme(
        merge(
            {},
            {
                shape: {
                    borderRadius: 8,
                },
            },
            themeData
        )
    );

    if (config.responsiveFontSizes) {
        theme = muiResponsiveFontSizes(theme);
    }

    return theme;
};

const ThemeProvider = ({
    children = null,
    responsiveFontSizes = false,
    themeMode = THEMES.LIGHT as ThemeMode,
}: ThemeProviderProps) => {
    const theme = createTheme(
        {
            responsiveFontSizes,
            themeMode,
        },
        getTheme(themeMode)
    );

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
