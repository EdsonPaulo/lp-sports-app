import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/AntDesign';

import { Container, StyledText } from './header.styles';
import COLORS from '../../constants/colors';

const Header: FC<{ label: string }> = ({ label }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Icon name="swapleft" size={30} color={COLORS.white} />
      </TouchableOpacity>
      <StyledText>{label}</StyledText>
    </Container>
  );
};

export default Header;
