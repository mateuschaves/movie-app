import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AuthNavigator from './AuthNavigator';

import Films from '../pages/Films';
import Liked from '../pages/Liked';

export function RootAuthenticated() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Films"
      barStyle={{
        backgroundColor: '#343434'
      }}

    >
      <Tab.Screen
        name="Films"
        component={Films}
        options={{
          tabBarLabel: 'Filmes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="filmstrip"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cards-heart"
              color={color}
              size={26}

            />
          ),
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
          headerShown: false,
          headerStyle: {
            backgroundColor: 'white',
            shadowOpacity: 0
          }
        }}

        component={AuthNavigator}
      />
    </Stack.Navigator>
  );
}
