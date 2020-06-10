import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Buttons from '~/components/HeaderButtons';

import { Button } from 'react-native';

import Films from '../pages/Films';
import Film from '../pages/Film';

export default function AuthNavigator() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Films"
        component={Films}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Film"
        component={Film}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            color: '#FFFFFF'
          },
          headerRight: () => <Buttons />
        }}
      />
    </Stack.Navigator>
  );
}
