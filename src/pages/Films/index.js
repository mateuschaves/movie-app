import React from 'react';

import FilmList from '~/components/FilmList';

import { Container, Header, HeaderTitle, Avatar, Title, FilmsCategory } from './styles';

export default function Films() {
  return (
    <Container
      showsVerticalScrollIndicator={false}
    >
      <Header>
        <HeaderTitle>
          Escolha um {'\n'}título
        </HeaderTitle>

        <Avatar
          source={{ uri: 'https://api.adorable.io/avatars/50/abott@adorable.png' }}
        />
      </Header>

      <FilmsCategory>
        <Title>
          Drama
        </Title>

        <FilmList />
      </FilmsCategory>

      <FilmsCategory>
        <Title>
          Suspense
        </Title>

        <FilmList />
      </FilmsCategory>

    </Container>
  )
}
