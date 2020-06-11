import React from 'react';

import { baseBackdropUrl } from '~/services/image';

import ViewMoreText from 'react-native-view-more-text';

import { Image, Title, Year, Description, Gradient, Icon, MoreText } from './styles';

export default function Film({ route }) {
  const params = route.params;

  const { film } = params;

  function renderViewMore(onPress) {
    return (
      <MoreText onPress={onPress}>Ver mais</MoreText>
    )
  }
  function renderViewLess(onPress) {
    return (
      <MoreText onPress={onPress}>Ver menos</MoreText>
    )
  }

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
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
          textStyle={{ textAlign: 'left' }}
        >
          <Description>
            {film.overview}
          </Description>
        </ViewMoreText>
      </Gradient>
    </Image>
  )
}

