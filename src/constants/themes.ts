import { DefaultTheme } from 'styled-components';

import COLORS from './colors';
import FONT_FAMILY from './fonts';

const LPTheme: DefaultTheme = {
  borderRadius: {
    xs: '4px',
    sm: '6px',
    md: '10px',
    lg: '14px',
  },

  fonts: {
    family: FONT_FAMILY,
    size: {
      xs: '10px',
      sm: '12px',
      md: '14px',
      lg: '17px',
      xl: '22px',
      xxl: '26px',
    },
  },

  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    accent: COLORS.accent,

    borderColor: COLORS.grayLight,
    backgroundPrimary: COLORS.backgroundPrimary,
    backgroundSecondary: COLORS.backgroundSecondary,

    textLight: COLORS.white,
    textDark: COLORS.black,

    grayLight: COLORS.grayLight,
    grayMedium: COLORS.grayMedium,
    grayDark: COLORS.grayDark,

    white: COLORS.white,
    black: COLORS.black,
  },
};

export { LPTheme };
