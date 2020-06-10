import React from 'react'

import { useNavigation } from '@react-navigation/native';

import { Film, Link } from './styles';

export default function FilmCard({ uri }) {
  const navigation = useNavigation();

  return (
    <Link
      onPress={() => navigation.navigate('Film')}
    >
      <Film
        source={{ uri }}
      >
      </Film>
    </Link>
  )
}
