export type TJustifyContent =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-between'
  | 'space-evenly'
  | 'space-around';

export type TAlignItems = 'center' | 'flex-end' | 'flex-start';

export interface IFlex {
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
}

export interface IMargin {
  margin?: string;
  marginVertical?: string;
  marginTop?: string;
  marginBottom?: string;
  marginHorizontal?: string;
  marginLeft?: string;
  marginRight?: string;
}

export interface IPadding {
  padding?: string;
  paddingVertical?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingHorizontal?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export interface IColor {
  backgroundColor?: string;
  color?: string;
}

export interface ISize {
  width?: string;
  height?: string;
}

export interface ITextProps {
  fontSize?: string;
  textAlign?: string;
}
