import React, { useState } from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Buttons } from './styles';

export default function HeaderButtons() {

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  return (
    <Buttons>
      <MaterialCommunityIcons
        name={disliked ? 'heart-broken' : 'heart-broken-outline'}
        color="white"
        size={30}
        onPress={() => {
          setDisliked(!disliked);
          setLiked(disliked);
        }}
      />
      <MaterialCommunityIcons
        name={liked ? 'heart' : 'heart-outline'}
        color={liked ? '#8D0000' : '#FFFFFFFF'}
        size={30}
        onPress={() => {
          setLiked(!liked);
          setDisliked(liked);
        }}
      />
    </Buttons>
  )
}
