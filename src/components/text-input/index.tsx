import React, { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Input } from 'react-native-magnus';
import { getInputType, TextInputProps } from './text-input.types';

const TextInput: FC<TextInputProps> = ({ type, ...rest }) => {
  const [secureText, setSecureText] = useState(type === 'password');
  const { keyboardType, iconName } = getInputType(type);

  const PasswordSecureIcon: FC = () => (
    <TouchableOpacity onPress={() => setSecureText(!secureText)}>
      {secureText ? (
        <Icon name="eye" fontFamily="Feather" color="gray700" fontSize="3xl" />
      ) : (
        <Icon
          name="eye-off"
          fontFamily="Feather"
          color="gray700"
          fontSize="3xl"
        />
      )}
    </TouchableOpacity>
  );

  return (
    <Input
      p="lg"
      bg="gray100"
      rounded="lg"
      focusBorderColor="blue700"
      secureTextEntry={secureText}
      keyboardType={keyboardType as never}
      placeholderTextColor="gray500"
      prefix={
        iconName ? (
          <Icon
            name={iconName}
            fontFamily="Feather"
            color="gray700"
            fontSize="4xl"
          />
        ) : undefined
      }
      suffix={type === 'password' ? <PasswordSecureIcon /> : undefined}
      {...rest}
    />
  );
};

export default TextInput;
