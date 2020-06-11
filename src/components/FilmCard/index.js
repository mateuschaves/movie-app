import React from 'react'

import { useNavigation } from '@react-navigation/native';

import { Film, Link } from './styles';

export default function FilmCard({ uri, film }) {
  const navigation = useNavigation();

  return (
    <Link
      onPress={() => navigation.navigate('Film', { film })}
    >
      <Film
        source={{ uri }}
      >
      </Film>
    </Link>
  )
}
