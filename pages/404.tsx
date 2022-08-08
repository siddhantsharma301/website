import React from 'react';
import { Container, Title, Text } from '@components';

const NotFound = (): JSX.Element => (
  <Container alignItems="center">
    <Title color='rgba(116, 161, 248, 1)'>404 - Not found</Title>
    <Text>This page does not exist.</Text>
  </Container>
);

export default NotFound;