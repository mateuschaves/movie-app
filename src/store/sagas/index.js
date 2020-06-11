import { all, takeLatest } from 'redux-saga/effects';
import { Types as FilmsTypes } from '~/store/ducks/films';
import { getActionsFilms } from './films'

export default function* rootSaga() {
  yield all([
    takeLatest(FilmsTypes.GET_ACTION_REQUEST, getActionsFilms)
  ]);
}
