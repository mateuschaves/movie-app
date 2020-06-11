import { combineReducers } from 'redux';

import ActionGenre from './ActionGenre';
import AdventureGenre from './AdventureGenre';
import SuspenseGenre from './SuspenseGenre';
import AnimationGenre from './AnimationGenre';

const reducers = combineReducers({
  AdventureGenre,
  ActionGenre,
  SuspenseGenre,
  AnimationGenre
});

export default reducers;
