import React, { useEffect } from 'react';

import FilmList from '~/components/FilmList';

import { Types as AdventureGenreTypes } from "~/store/ducks/AdventureGenre";
import { Types as ActionGenreTypes } from "~/store/ducks/ActionGenre";
import { Types as SuspenseGenreTypes } from "~/store/ducks/SuspenseGenre";
import { Types as AnimationGenreTypes } from "~/store/ducks/AnimationGenre";

import { useDispatch, useSelector } from 'react-redux';

import { Container, Header, HeaderTitle, Avatar, Title, FilmsCategory } from './styles';

export default function Films() {

  const dispatch = useDispatch();

  const { ActionGenre, AdventureGenre, SuspenseGenre, AnimationGenre, FavoriteFilms } = useSelector(state => state);

  useEffect(() => {

    dispatch({
      type: ActionGenreTypes.GET_ACTION_REQUEST,
      payload: {}
    });

    dispatch({
      type: AdventureGenreTypes.GET_ADVENTURE_REQUEST,
      payload: {}
    });

    dispatch({
      type: SuspenseGenreTypes.GET_SUSPENSE_REQUEST,
      payload: {}
    });

    dispatch({
      type: AnimationGenreTypes.GET_ANIMATION_REQUEST,
      payload: {}
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
          films={ActionGenre?.films}
        />
      </FilmsCategory>

      <FilmsCategory>
        <Title>
          Aventura
        </Title>

        <FilmList
          films={AdventureGenre?.films}
        />
      </FilmsCategory>


      <FilmsCategory>
        <Title>
          Suspense
        </Title>

        <FilmList
          films={SuspenseGenre?.films}
        />
      </FilmsCategory>

      <FilmsCategory>
        <Title>
          Animação
        </Title>

        <FilmList
          films={AnimationGenre?.films}
        />
      </FilmsCategory>




    </Container>
  )
}
