export type TJustifyContent =
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-evenly'
  | 'space-around';

export interface IMargin {
  marginVertical?: string;
  marginTop?: string;
  marginBottom?: string;
  marginHorizontal?: string;
  marginLeft?: string;
  marginRight?: string;
}

export interface IColor {
  backgroundColor?: string;
  color?: string;
}

export interface ITextProps {
  fontSize?: string;
  textAlign?: string;
}
