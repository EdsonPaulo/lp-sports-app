import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import {
  IMargin,
  IColor,
  ITextProps,
  TJustifyContent,
} from './styled-components.types';

export const Text = styled.Text<IMargin & IColor & ITextProps>`
  margin-top: ${props => props.marginTop || props.marginVertical || '2px'};
  margin-bottom: ${props =>
    props.marginBottom || props.marginVertical || '2px'};
  margin-right: ${props => props.marginRight || props.marginHorizontal};
  margin-left: ${props => props.marginBottom || props.marginHorizontal};
  color: ${props => props.color || props.theme.colors.textDark};
  font-size: ${props => props.fontSize || props.theme.fonts.size.md};
  text-align: ${props => props.textAlign || 'center'};
  font-family: ${props => props.theme.fonts.family.RobotoSlabRegular};
`;

export const H1 = styled(Text)`
  font-size: ${props => props.fontSize || props.theme.fonts.size.xxl};
  font-family: ${props => props.theme.fonts.family.RobotoSlabRegular};
`;

export const SafeArea = styled(SafeAreaView)<IColor>`
  flex: 1;
  background-color: ${props =>
    props.backgroundColor || props.theme.colors.backgroundPrimary};
`;

export const Container = styled.View<{ justifyContent?: TJustifyContent }>`
  flex: 1;
  padding: 20px;
  justify-content: ${props => props.justifyContent || 'center'};
`;

export const Divider = styled.View`
  flex: 1;
  height: 1px;
  margin: 0 5px;
  background-color: ${props => props.theme.colors.grayLight};
`;

export const RowView = styled.View`
  flex-direction: row;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  width: 70%;
  height: 70%;
  border-radius: 10px;
  align-self: center;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  justify-content: center;
  align-items: center;
`;

export const SocialButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.backgroundPrimary};
  width: 50px;
  height: 50px;
  border-radius: 20px;
  margin: 5px 15px;
  justify-content: center;
  align-items: center;
`;
