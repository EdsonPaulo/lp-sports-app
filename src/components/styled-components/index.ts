import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import {
  IColor,
  IMargin,
  IPadding,
  ISize,
  ITextProps,
  IFlex,
} from './styled-components.types';

export const Box = styled.View<IMargin & IPadding & IColor & ISize & IFlex>`
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};

  margin-top: ${props =>
    props.marginTop || props.marginVertical || props.margin || '0px'};
  margin-bottom: ${props =>
    props.marginBottom || props.marginVertical || props.margin || '0px'};
  margin-right: ${props =>
    props.marginRight || props.marginHorizontal || props.margin || '0px'};
  margin-left: ${props =>
    props.marginLeft || props.marginHorizontal || props.margin || '0px'};

  padding-top: ${props =>
    props.paddingTop || props.paddingVertical || props.padding || '0px'};
  padding-bottom: ${props =>
    props.paddingBottom || props.paddingVertical || props.padding || '0px'};
  padding-right: ${props =>
    props.paddingRight || props.paddingHorizontal || props.padding || '0px'};
  padding-left: ${props =>
    props.paddingLeft || props.paddingHorizontal || props.padding || '0px'};
`;

export const Text = styled.Text<IMargin & IColor & ITextProps>`
  margin-top: ${props => props.marginTop || props.marginVertical || '2px'};
  margin-bottom: ${props =>
    props.marginBottom || props.marginVertical || '2px'};
  margin-right: ${props =>
    props.marginRight || props.marginHorizontal || '0px'};
  margin-left: ${props => props.marginLeft || props.marginHorizontal || '0px'};
  color: ${props => props.color || props.theme.colors.textDark};
  font-size: ${props => props.fontSize || props.theme.metrics.fontSize.md};
  text-align: ${props => props.textAlign || 'center'};
  font-family: ${props => props.theme.fontFamily.MontserratRegular};
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

export const H1 = styled(Text)`
  font-size: ${props => props.fontSize || props.theme.metrics.fontSize.xxl};
  font-family: ${props => props.theme.fontFamily.MontserratSemiBold};
`;

export const SafeArea = styled(SafeAreaView)<IColor>`
  flex: 1;
  background-color: ${props =>
    props.backgroundColor || props.theme.colors.backgroundPrimary};
`;

export const Container = styled(Box)`
  flex: 1;
`;

export const Divider = styled(Box)`
  flex: 1;
  height: 1px;
  margin: 0 5px;
  background-color: ${props =>
    props.backgroundColor || props.theme.colors.grayLight};
`;

export const RowView = styled(Box)`
  flex-direction: row;
  align-items: center;
`;

export const ModalView = styled(Box)`
  width: 70%;
  height: 70%;
  border-radius: 10px;
  align-self: center;
  background-color: ${props =>
    props.backgroundColor || props.theme.colors.backgroundPrimary};
  justify-content: center;
  align-items: center;
`;

export const SocialButton = styled.TouchableOpacity`
  background: ${props => props.theme.colors.backgroundPrimary};
  width: 50px;
  height: 50px;
  border-radius: 20px;
  margin: 5px 15px;
  justify-content: center;
  align-items: center;
`;

export const Touchable = styled.TouchableOpacity<
  IMargin & IPadding & IColor & ISize
>`
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor || 'transparent'};
  margin-top: ${props =>
    props.marginTop || props.marginVertical || props.margin || '0px'};
  margin-bottom: ${props =>
    props.marginBottom || props.marginVertical || props.margin || '0px'};
  margin-right: ${props =>
    props.marginRight || props.marginHorizontal || props.margin || '0px'};
  margin-left: ${props =>
    props.marginLeft || props.marginHorizontal || props.margin || '0px'};
  padding-top: ${props =>
    props.paddingTop || props.paddingVertical || props.padding || '0px'};
  padding-bottom: ${props =>
    props.paddingBottom || props.paddingVertical || props.padding || '0px'};
  padding-right: ${props =>
    props.paddingRight || props.paddingHorizontal || props.padding || '0px'};
  padding-left: ${props =>
    props.paddingBottom || props.paddingHorizontal || props.padding || '0px'};
`;
