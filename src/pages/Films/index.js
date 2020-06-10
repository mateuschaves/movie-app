import React from 'react';


import FilmList from '~/components/FilmList';

import { Container, Header, HeaderTitle, Avatar, Category } from './styles';

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

      <Category>
        Drama
      </Category>

      <FilmList />

      <Category>
        Suspense
      </Category>

      <FilmList />

    </Container>
  )
}
