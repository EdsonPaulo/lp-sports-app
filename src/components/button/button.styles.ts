import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { Text } from '../styled-components';
import { ButtonProps } from './button.types';

export const StyledText = styled(Text)<{ primary?: boolean }>`
  color: ${props =>
    props.primary ? props.theme.colors.white : props.theme.colors.accent};
  font-size: ${props => props.theme.fonts.size.lg};
  font-family: ${props => props.theme.fonts.family.RobotoSlabMedium};
  letter-spacing: 1px;
  margin: 0 10px;
`;

export const StyledButton = styled(RectButton)<ButtonProps>`
  background-color: ${props =>
    props.primary ? props.theme.colors.accent : 'transparent'};
  border-radius: ${props => props.theme.borderRadius.md};
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
