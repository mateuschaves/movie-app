import React from 'react';

import FilmCard from '../FilmCard';


import { List, L } from './styles';

export default function FilmList() {
  return (
    <List
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <FilmCard
        uri={'https://picsum.photos/200/300'}
      />
      <FilmCard
        uri={'https://picsum.photos/200/300'}
      />
      <FilmCard
        uri={'https://picsum.photos/200/300'}
      />
      <FilmCard
        uri={'https://picsum.photos/200/300'}
      />
    </List>
  )
}
