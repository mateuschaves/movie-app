import React, { useEffect } from 'react';

import FilmList from '~/components/FilmList';

import { Types } from "~/store/ducks/films";

import { useDispatch, useSelector } from 'react-redux';

import { Container, Header, HeaderTitle, Avatar, Title, FilmsCategory } from './styles';

export default function Films() {

  const dispatch = useDispatch();

  const { action } = useSelector(state => state.films);

  console.tron.log(action);

  useEffect(() => {

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
          Ação
        </Title>

        <FilmList
          films={action.films}
        />
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
