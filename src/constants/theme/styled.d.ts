import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };

    metrics: {
      iconSize: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
      };

      fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
    };

    fontFamily: {
      MontserratLight: string;
      MontserratRegular: string;
      MontserratMedium: string;
      MontserratSemiBold: string;
      MontserratBold: string;
    };

    colors: {
      primary: string;
      secondary: string;
      accent: string;

      backgroundPrimary: string;
      backgroundSecondary: string;
      foreground: string;

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
