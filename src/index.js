import '~/config/ReactotronConfig';
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar
        backgroundColor="#343434"
      />
      <Routes />
    </NavigationContainer>
  </Provider>
);

export default App;
