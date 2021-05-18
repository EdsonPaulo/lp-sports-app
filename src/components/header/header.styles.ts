import styled from 'styled-components/native';

import { H1 } from '../styled-components';

export const Container = styled.View`
  width: 100%;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.xs};
  border-right-width: 5px;
  border-right-color: ${props => props.theme.colors.grayDark};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 15px;
  margin-top: 30px;
`;

export const StyledText = styled(H1)`
  margin-right: 10px;
`;
