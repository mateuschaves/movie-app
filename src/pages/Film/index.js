import React, { useEffect } from 'react';

import { baseBackdropUrl } from '~/services/image';

import ViewMoreText from 'react-native-view-more-text';

import { Types as FilmDetailTypes } from '~/store/ducks/FilmDetail';

import { useSelector, useDispatch } from 'react-redux';

import { Image, Title, Year, Description, Gradient, Icon, MoreText } from './styles';

export default function Film() {

  const { film } = useSelector(state => state.FilmDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    return function removeFilmDetail() {
      dispatch({
        type: FilmDetailTypes.REMOVE_DETAIL_FILM
      })
    }
  }, []);

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

