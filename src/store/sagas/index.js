import { all, takeLatest } from 'redux-saga/effects';
import { Types as AdventureGenreTypes } from '~/store/ducks/AdventureGenre';
import { Types as ActionGenreTypes } from '~/store/ducks/ActionGenre';
import { Types as SuspenseGenreTypes } from '~/store/ducks/SuspenseGenre';
import { getActionsFilms, getAdventureFilms, getSuspenseFilms } from './films'

export default function* rootSaga() {
  yield all([
    takeLatest(ActionGenreTypes.GET_ACTION_REQUEST, getActionsFilms),
    takeLatest(AdventureGenreTypes.GET_ADVENTURE_REQUEST, getAdventureFilms),
    takeLatest(SuspenseGenreTypes.GET_SUSPENSE_REQUEST, getSuspenseFilms)
  ]);
}
