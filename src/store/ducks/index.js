import { combineReducers } from 'redux';

import ActionGenre from './ActionGenre';
import AdventureGenre from './AdventureGenre';
import SuspenseGenre from './SuspenseGenre';
import AnimationGenre from './AnimationGenre';
import FavoriteFilms from './FavoriteFilms';
import FilmDetail from './FilmDetail';
import Auth from './Auth';

const reducers = combineReducers({
  FavoriteFilms,
  AdventureGenre,
  ActionGenre,
  SuspenseGenre,
  AnimationGenre,
  FilmDetail,
  Auth
});

export default reducers;
