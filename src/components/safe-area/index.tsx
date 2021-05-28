import React, { FC } from 'react';
import { Box, DivProps } from 'react-native-magnus';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeArea: FC<DivProps> = ({ children, bg = '#fff', ...restProps }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bg }}>
      <Box flex={1} bg={bg} {...restProps}>
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default SafeArea;
