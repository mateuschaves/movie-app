import React, { useState } from 'react';

import { baseBackdropUrl } from '~/services/image';

import { Image, Title, Year, Description, Gradient, Icon } from './styles';

export default function Film({ route }) {
  const params = route.params;

  const { film } = params;

  return (
    <Image
      source={{ uri: `${baseBackdropUrl}${film.backdrop_path}` }}
    >
      <Gradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}>
        <Icon
          name="play"
          size={100}
        />
        <Title>
          {film.title}
        </Title>
        <Year>
          {new Date(film?.release_date).getFullYear()}
        </Year>
        <Description>
          {film.overview}
        </Description>
      </Gradient>
    </Image>
  )
}

