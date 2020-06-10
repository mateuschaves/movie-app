import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Buttons from '~/components/HeaderButtons';

import LinearGradient from 'react-native-linear-gradient';

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
          animationEnabled: true,
          headerBackground: () => <LinearGradient colors={['#343434', 'rgba(0, 0, 0, 0)']} style={{ flex: 1 }} />,
          headerRight: () => <Buttons />
        }}
      />
    </Stack.Navigator>
  );
}
