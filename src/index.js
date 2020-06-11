import '~/config/ReactotronConfig';
import React from 'react';
import { StatusBar } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native';

import { store, persistor, sagaMiddleware } from '~/store';
import rootSaga from '~/store/sagas';

import { Provider } from 'react-redux';

import Routes from '~/routes';

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <StatusBar
          backgroundColor="#343434"
        />
        <Routes />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
