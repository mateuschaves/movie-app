import React from 'react';

import { Container, HeaderTitle, Avatar } from './styles';

export default function Header({ title }) {
  return (
    <Container>
      <HeaderTitle>
        {title}
      </HeaderTitle>

      <Avatar
        source={{ uri: 'https://api.adorable.io/avatars/50/abott@adorable.png' }}
      />
    </Container>
  )
}
