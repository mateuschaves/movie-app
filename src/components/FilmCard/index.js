import React from 'react'

import { useNavigation } from '@react-navigation/native';

import { Types as FilmDetailTypes } from '~/store/ducks/FilmDetail';

import { useDispatch } from 'react-redux';

import { Film, Link } from './styles';

export default function FilmCard({ uri, film }) {
  const navigation = useNavigation();
  const disptach = useDispatch();

  return (
    <Link
      onPress={() => {
        disptach({
          type: FilmDetailTypes.SET_DETAIL_FILM,
          payload: { film }
        });
        navigation.navigate('Film');
      }}
    >
      <Film
        source={{ uri }}
      >
      </Film>
    </Link>
  )
}
