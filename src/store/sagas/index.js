import { all, takeLatest } from 'redux-saga/effects';
import { Types as FilmsTypes } from '~/store/ducks/films';
import { getActionsFilms, getAdventureFilms } from './films'

export default function* rootSaga() {
  yield all([
    takeLatest(FilmsTypes.GET_ACTION_REQUEST, getActionsFilms),
    takeLatest(FilmsTypes.GET_ADVENTURE_REQUEST, getAdventureFilms)
  ]);
}
