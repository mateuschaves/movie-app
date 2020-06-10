import React from 'react'

import { Film } from './styles';

export default function FilmCard({ uri, title }) {
  return (
    <Film
      source={{ uri }}
    >
    </Film>
  )
}
