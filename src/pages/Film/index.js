import React from 'react';

import { baseBackdropUrl } from '~/services/image';

import { Image, Title, Year, Description, Gradient, Icon } from './styles';

export default function Film() {
  return (
    <Image
      source={{ uri: `${baseBackdropUrl}f496cm9enuEsZkSPzCwnTESEK5s.jpg` }}
    >
      <Gradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}>
        <Icon
          name="play"
          size={100}
        />
        <Title>
          Rei Leão
       </Title>
        <Year>
          2019
       </Year>
        <Description>
          Em O Rei Leão, Simba (Donald Glover) é um jovem leão cujo destino é se tornar o rei da selva. Entretanto, uma armadilha.
       </Description>
      </Gradient>
    </Image>
  )
}

