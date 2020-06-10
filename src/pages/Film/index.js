import React from 'react';

import { Image, Title, Year, Description, Gradient, Icon } from './styles';

export default function Film() {
  return (
    <Image
      source={{ uri: 'https://abrilveja.files.wordpress.com/2019/07/blogib_o-rei-leao-2019_feat.jpg?quality=70&strip=info&w=1024' }}
    >
      <Gradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}>
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

