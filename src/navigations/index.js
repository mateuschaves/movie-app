import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthNavigator from './AuthNavigator';

import Films from '../pages/Films';

export function RootAuthenticated() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Films"
        component={Films}
        options={{
          tabBarLabel: 'Filmes',
          title: 'Filmes',
        }}
      />
    </Tab.Navigator>
  );
}

export function RootNotAuthenticated() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        options={{
          headerShown: false
        }}
        component={AuthNavigator}
      />
    </Stack.Navigator>
  );
}
