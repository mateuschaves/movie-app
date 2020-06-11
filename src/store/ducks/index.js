import { combineReducers } from 'redux';

import ActionGenre from './ActionGenre';
import AdventureGenre from './AdventureGenre';
import SuspenseGenre from './SuspenseGenre';
import AnimationGenre from './AnimationGenre';
import FavoriteFilms from './FavoriteFilms';

const reducers = combineReducers({
  FavoriteFilms,
  AdventureGenre,
  ActionGenre,
  SuspenseGenre,
  AnimationGenre,
});

export default reducers;
