import React from 'react';

import Header from '~/components/Header';
import FilmCard from '~/components/FilmCard';

import { basePosterUrl } from '~/services/image';

import { useSelector } from 'react-redux';

import { Container, Films } from './styles';

export default function Liked() {

  const { films = [] } = useSelector(state => state.FavoriteFilms);

  return (
    <Container>
      <Header
        title={`Seus filmes\nfavoritos`}
      />

      <Films>
        {
          Array.isArray(films) && films.map(film => (
            <FilmCard
              key={film?.id}
              film={film}
              uri={`${basePosterUrl}${film?.poster_path}`}
            />
          ))
        }
      </Films>
    </Container>
  )
}
