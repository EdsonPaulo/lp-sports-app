import COLORS from './colors';
import FONT_FAMILY from './fonts';

const LPTheme = {
  fontFamily: FONT_FAMILY.Lato,
  fontSize: {
    xs: 13,
    sm: 14,
    md: 15,
    lg: 16,
  },
  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    accent: COLORS.accent,

    borderColor: COLORS.grayLight,
    backgroundPrimary: COLORS.backgroundPrimary,
    backgroundSecondary: COLORS.backgroundSecondary,
    foreground: COLORS.white,

    textLight: COLORS.white,
    textDark: COLORS.black,

    grayLight: COLORS.grayLight,
    grayMedium: COLORS.grayMedium,
    grayDark: COLORS.grayDark,

    white: COLORS.white,
    black: COLORS.black,
  },
};

export default LPTheme;
