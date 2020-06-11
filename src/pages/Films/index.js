import React, { useEffect } from 'react';

import api from '~/services/api';

import FilmList from '~/components/FilmList';

import { Types } from "~/store/ducks/films";

import { useDispatch } from 'react-redux';

import { Container, Header, HeaderTitle, Avatar, Title, FilmsCategory } from './styles';

export default function Films() {

  const dispatch = useDispatch();

  useEffect(() => {
    // api.get('movie/popular?api_key=c2d9f7b4820307867e946fc0ac1d1255&language=en-US')
    //   .then(({ data }) => console.log(data))
    //   .catch(error => console.log(error));

    dispatch({
      type: Types.GET_ACTION_REQUEST,
      payload: 'teste'
    });

  }, []);
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
