import { CustomColorNames } from '@/theme/theme';

export const cssColor = (name: keyof CustomColorNames) => `var(--${name})`;
