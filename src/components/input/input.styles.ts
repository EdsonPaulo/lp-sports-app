import styled from 'styled-components/native';

export const Container = styled.View<{ borderColor?: string }>`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.colors.grayLight};
  border-color: ${props => props.borderColor || props.theme.colors.borderColor};
  border-radius: ${props => props.theme.borderRadius.md};
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
  border-width: 1px;
  margin: 7px 0;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  color: ${props => props.theme.colors.textDark};
  font-size: 18px;
  text-align: center;
  margin: 0 5px;
  letter-spacing: 1.1px;
  font-family: ${props => props.theme.fonts.family.RobotoSlabRegular};
`;
