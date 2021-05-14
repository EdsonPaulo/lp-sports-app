import * as styledComponents from 'styled-components/native';

import { LPTheme } from './src/constants/themes';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  typeof LPTheme
>;

export { css, ThemeProvider };
export default styled;
