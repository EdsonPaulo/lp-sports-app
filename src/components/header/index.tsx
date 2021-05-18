import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';

import { Container, StyledText } from './header.styles';
import COLORS from '../../constants/colors';

const Header: FC<StackHeaderProps> = ({ ...restProps }) => {
  const { goBack } = useNavigation();
  const {
    scene: {
      descriptor: {
        options: { title },
      },
    },
  } = restProps;
  const {
    metrics: { iconSize },
  } = useTheme();

  return (
    <Container>
      <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
        <Icon name="chevron-back" size={iconSize.xxl} color={COLORS.textDark} />
      </TouchableOpacity>
      {title && <StyledText>{title}</StyledText>}
    </Container>
  );
};

export default Header;
