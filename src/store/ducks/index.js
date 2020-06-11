import { combineReducers } from 'redux';

import ActionGenre from './ActionGenre';
import AdventureGenre from './AdventureGenre';

const reducers = combineReducers({
  AdventureGenre,
  ActionGenre,
});

export default reducers;
