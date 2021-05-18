import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import { StyledButton, StyledText } from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps & RectButtonProps> = ({
  primary,
  label,
  icon,
  isLoading,
  ...rest
}) => {
  const { colors } = useTheme();
  return (
    <StyledButton primary={primary} {...rest}>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={primary ? colors.white : colors.accent}
        />
      ) : (
        <StyledText primary={primary}>{label}</StyledText>
      )}

      {icon}
    </StyledButton>
  );
};

export default Button;
