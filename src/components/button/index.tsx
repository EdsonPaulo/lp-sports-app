import React, { FC } from 'react';

import { StyledButton, StyledText } from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({ primary, label, icon, ...rest }) => {
  return (
    <StyledButton primary={primary} {...rest}>
      <StyledText primary={primary}>{label}</StyledText>
      {icon}
    </StyledButton>
  );
};

export default Button;
