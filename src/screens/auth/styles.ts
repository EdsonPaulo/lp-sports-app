import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const StyledScrollView = styled(ScrollView)`
  padding: 20px;
  border-width: 1px;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.backgroundSecondary};
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
`;
