import React, { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

import { COLORS } from '../../constants';
import { Container, TextInput } from './input.styles';
import { getInputType, InputProps } from './input.types';

const Input: FC<InputProps> = ({ type, ...rest }) => {
  const [secureText, setSecureText] = useState(type === 'password');
  const [borderColor, setBorderColor] = useState(COLORS.grayLight);
  const { keyboardType, iconName } = getInputType(type);

  return (
    <Container borderColor={borderColor}>
      {iconName && (
        <AntDesign name={iconName as any} size={22} color={COLORS.textDark} />
      )}
      <TextInput
        {...rest}
        secureTextEntry={secureText}
        onFocus={() => setBorderColor(COLORS.grayMedium)}
        onBlur={() => setBorderColor(COLORS.grayLight)}
        keyboardType={keyboardType as any}
        placeholderTextColor={COLORS.grayMedium}
      />
      {type === 'password' && (
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          {secureText ? (
            <Feather size={18} name="eye" color={COLORS.textDark} />
          ) : (
            <Feather size={18} name="eye-off" color={COLORS.textDark} />
          )}
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default Input;
