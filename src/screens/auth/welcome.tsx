import React from 'react';

import {
  SafeArea,
  Container,
  H1,
  Text,
  Button,
  RowView,
} from '../../components';

const Welcome: React.FC = () => {
  return (
    <SafeArea>
      <Container>
        <H1 fontSize="40px">LP SPORTS</H1>
        <H1>Open up App.tsx!</H1>
        <Text>Open up App.tsx to start working on your app!</Text>
        <RowView>
          <Button primary label="Login" />
          <Button label="Criar conta" />
        </RowView>
      </Container>
    </SafeArea>
  );
};

export default Welcome;
