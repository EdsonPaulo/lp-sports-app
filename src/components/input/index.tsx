import React, { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, TextInput } from './input.styles';
import { getInputType, InputProps } from './input.types';

const Input: FC<InputProps> = ({ type, ...rest }) => {
  const {
    colors,
    metrics: { iconSize },
  } = useTheme();
  const [secureText, setSecureText] = useState(type === 'password');
  const [borderColor, setBorderColor] = useState(colors.grayLight);
  const { keyboardType, iconName } = getInputType(type);

  return (
    <Container borderColor={borderColor}>
      {iconName && (
        <Feather
          name={iconName as never}
          size={iconSize.md}
          color={colors.textDark}
        />
      )}
      <TextInput
        secureTextEntry={secureText}
        onFocus={() => setBorderColor(colors.grayMedium)}
        onBlur={() => setBorderColor(colors.grayLight)}
        keyboardType={keyboardType as never}
        placeholderTextColor={colors.grayMedium}
        {...rest}
      />
      {type === 'password' && (
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          {secureText ? (
            <Feather size={iconSize.md} name="eye" color={colors.textDark} />
          ) : (
            <Feather
              size={iconSize.md}
              name="eye-off"
              color={colors.textDark}
            />
          )}
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default Input;
