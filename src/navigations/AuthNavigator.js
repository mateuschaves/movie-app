import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from '../pages/Auth';

export default function AuthNavigator() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
