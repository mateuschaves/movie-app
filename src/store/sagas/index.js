import { all, takeLatest } from 'redux-saga/effects';
import { Types as AdventureGenreTypes } from '~/store/ducks/AdventureGenre';
import { Types as ActionGenreTypes } from '~/store/ducks/ActionGenre';
import { getActionsFilms, getAdventureFilms } from './films'

export default function* rootSaga() {
  yield all([
    takeLatest(ActionGenreTypes.GET_ACTION_REQUEST, getActionsFilms),
    takeLatest(AdventureGenreTypes.GET_ADVENTURE_REQUEST, getAdventureFilms)
  ]);
}
