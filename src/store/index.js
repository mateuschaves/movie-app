import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '~/store/ducks';
import AsyncStorage from '@react-native-community/async-storage';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };
