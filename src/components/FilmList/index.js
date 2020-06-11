import React from 'react';

import FilmCard from '../FilmCard';

import { basePosterUrl } from '~/services/image';

import { List } from './styles';

export default function FilmList({ films = [] }) {
  return (
    <List
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {
        films && films.map(film => (
          <FilmCard
            key={film.id}
            film={film}
            uri={`${basePosterUrl}${film.poster_path}`}
          />
        ))
      }
    </List>
  )
}
