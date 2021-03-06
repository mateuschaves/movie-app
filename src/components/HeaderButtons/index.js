import React, { useState } from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector, useDispatch } from 'react-redux';

import { Types as FavoriteFilmsTypes } from '~/store/ducks/FavoriteFilms';

import { Buttons } from './styles';

export default function HeaderButtons() {

  const dispatch = useDispatch();
  const { film } = useSelector(state => state.FilmDetail);
  const { films = [] } = useSelector(state => state.FavoriteFilms);

  const [liked, setLiked] = useState(isFilmAlreadyLiked());
  const [disliked, setDisliked] = useState(false);

  function isFilmAlreadyLiked() {
    const found = films?.find(item => item.id == film.id);
    if (found)
      return true;
    else
      return false;
  }

  return (
    <Buttons>
      <MaterialCommunityIcons
        name={disliked ? 'heart-broken' : 'heart-broken-outline'}
        color="white"
        size={30}
        onPress={() => {
          dispatch({
            type: FavoriteFilmsTypes.REMOVE_FAVORITE_FILM,
            payload: { id: film.id }
          });
          setDisliked(!disliked);
          setLiked(disliked);
        }}
      />
      <MaterialCommunityIcons
        name={liked ? 'heart' : 'heart-outline'}
        color={liked ? '#8D0000' : '#FFFFFFFF'}
        size={30}
        onPress={() => {
          dispatch({
            type: FavoriteFilmsTypes.SET_FAVORITE_FILM,
            payload: { film }
          });
          setLiked(!liked);
          setDisliked(liked);
        }}
      />
    </Buttons>
  )
}
