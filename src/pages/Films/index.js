import React from 'react';

import { Container, Header, HeaderTitle, Avatar } from './styles';

export default function Films() {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Escolha um {'\n'}título
      </HeaderTitle>

        <Avatar
          source={{ uri: 'https://api.adorable.io/avatars/50/abott@adorable.png' }}
        />
      </Header>

    </Container>
  )
}
