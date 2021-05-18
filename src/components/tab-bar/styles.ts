import styled from 'styled-components/native';

import { Box, Touchable } from '../styled-components';

export const TabBarContainer = styled(Box)`
  padding: '8px';
  height: '50px';
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.foreground};
`;

export const TabOption = styled(Touchable)`
  flex: 1;
  margin: 0 8px;
  height: '100%';
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius.sm};
`;
