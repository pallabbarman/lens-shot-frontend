'use client';

import { alpha } from '@mui/material/styles';
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';
import { merge } from 'lodash';

export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
};

const theme = {
    typography: {
        fontFamily: 'var(--font-family-cutive-mono)',
        h1: {
            fontWeight: 900,
            fontSize: 32,
            lineHeight: 48 / 32,
        },
        h2: {
            fontWeight: 900,
            fontSize: 24,
            lineHeight: 32 / 24,
        },
        h3: {
            fontWeight: 700,
            fontSize: 18,
            lineHeight: 24 / 18,
        },
        h4: {
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 24 / 16,
        },
        h5: {
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 24 / 14,
        },
        h6: {
            fontWeight: 700,
            fontSize: 12,
            lineHeight: 24 / 12,
        },
        text1: {
            fontWeight: 800,
            fontSize: 18,
            lineHeight: 24 / 18,
        },
        text2: {
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 24 / 16,
        },
        text3: {
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 24 / 16,
        },
        text4: {
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 24 / 14,
        },
        text5: {
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 21 / 14,
        },
        text6: {
            fontWeight: 700,
            fontSize: 12,
            lineHeight: 24 / 12,
        },
        text7: {
            fontWeight: 700,
            fontSize: 10,
            lineHeight: 21 / 10,
        },
    },
    palette: {
        richblack: '#050F10',
        white: '#FFFFFF',
        stormgrey: '#777777',
        lightgrey: '#f6f6f6',
    },
};

const themesOptions = {
    [THEMES.LIGHT]: {
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        boxShadow: 1,
                    },
                },
            },
            MuiCardHeader: {
                styleOverrides: {
                    root: {
                        textTransform: 'uppercase',
                        paddingBottom: '12px',
                    },
                },
                defaultProps: {
                    titleTypographyProps: {
                        variant: 'h2',
                    },
                },
            },
            MuiButton: {
                defaultProps: {
                    variant: 'outlined',
                    disableElevation: false,
                    disableFocusRipple: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        fontFamily: 'var(--font-family-cutive-mono)',
                        fontSize: 14,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        border: `1px solid #cbcbcb`,
                        boxShadow: 'none',
                        borderRadius: 32,
                        padding: '8px 24px',
                        '&:hover, &:focus': {
                            boxShadow: '0px 2px 2px 0px #00000029 inset',
                        },
                    },
                    sizeLarge: {
                        padding: '10px 32px',
                    },
                    sizeSmall: {
                        padding: '6px 14px',
                    },
                    containedWhite: {
                        boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.16)',
                    },
                },
            },
            MuiTooltip: {
                defaultProps: {
                    arrow: true,
                },
                styleOverrides: {
                    arrow: {
                        color: theme.palette.richblack,
                    },
                    tooltip: {
                        backgroundColor: theme.palette.richblack,
                        fontSize: 16,
                        color: 'white',
                        fontFamily: 'var(--font-family-cutive-mono)',
                        fontWeight: 600,
                    },
                },
            },
        },
        palette: {
            text: {
                primary: theme.palette.richblack,
                secondary: theme.palette.stormgrey,
            },
            richblack: theme.palette.richblack,
            white: theme.palette.white,
            stormgrey: theme.palette.stormgrey,
            lightgrey: theme.palette.lightgrey,
        },
        shadows: [
            'none',
            `0px 4px 2px 0px ${alpha(theme.palette.richblack, 0.1)}`,
            ...[...Array(23).keys()].map(
                () => `0px 4px 4px 0px ${alpha(theme.palette.richblack, 0.08)}`
            ),
        ],
    },
    [THEMES.DARK]: {},
};

interface CustomColors {
    richblack: SimplePaletteColorOptions;
    white: SimplePaletteColorOptions;
    stormgrey: SimplePaletteColorOptions;
    lightgrey: SimplePaletteColorOptions;
}

export interface CustomColorNames {
    richblack: true;
    white: true;
    stormgrey: true;
    lightgrey: true;
}

interface CustomVariants {
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
    text1: true;
    text2: true;
    text3: true;
    text4: true;
    text5: true;
    text6: true;
    text7: true;
}

declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions extends CustomColors {}
}

declare module '@mui/material/styles/createPalette' {
    interface Palette extends CustomColors {}
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides extends CustomVariants {}
}

export type ThemeMode = keyof typeof THEMES;

export const getTheme = (themeMode: ThemeMode): any =>
    merge(themesOptions[themeMode], theme);

export const isDark = (themeData: { palette: { mode: string } }) =>
    themeData.palette.mode === THEMES.DARK;

export default theme;
