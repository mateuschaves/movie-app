import React, { useEffect } from 'react';

import FilmList from '~/components/FilmList';
import Header from '~/components/Header';

import { Types as AdventureGenreTypes } from "~/store/ducks/AdventureGenre";
import { Types as ActionGenreTypes } from "~/store/ducks/ActionGenre";
import { Types as SuspenseGenreTypes } from "~/store/ducks/SuspenseGenre";
import { Types as AnimationGenreTypes } from "~/store/ducks/AnimationGenre";

import { useDispatch, useSelector } from 'react-redux';

import { Container, Title, FilmsCategory } from './styles';

export default function Films() {

  const dispatch = useDispatch();

  const { ActionGenre, AdventureGenre, SuspenseGenre, AnimationGenre } = useSelector(state => state);

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
      <Header
        title={`Escolha um \ntítulo`}
      />

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
