import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };

    fonts: {
      family: {
        RobotoSlabLight: string;
        RobotoSlabRegular: string;
        RobotoSlabMedium: string;
        RobotoSlabSemiBold: string;
        RobotoSlabBold: string;
      };

      size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
    };

    colors: {
      primary: string;
      secondary: string;
      accent: string;

      backgroundPrimary: string;
      backgroundSecondary: string;

      borderColor: string;

      textLight: string;
      textDark: string;

      grayLight: string;
      grayMedium: string;
      grayDark: string;

      white: string;
      black: string;
    };
  }
}
