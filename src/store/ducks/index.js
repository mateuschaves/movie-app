import { combineReducers } from 'redux';

import ActionGenre from './ActionGenre';
import AdventureGenre from './AdventureGenre';
import SuspenseGenre from './SuspenseGenre';

const reducers = combineReducers({
  AdventureGenre,
  ActionGenre,
  SuspenseGenre
});

export default reducers;
