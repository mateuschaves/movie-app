import { all, takeLatest } from 'redux-saga/effects';
import { Types as AdventureGenreTypes } from '~/store/ducks/AdventureGenre';
import { Types as ActionGenreTypes } from '~/store/ducks/ActionGenre';
import { Types as SuspenseGenreTypes } from '~/store/ducks/SuspenseGenre';
import { Types as AnimationGenreTypes } from '~/store/ducks/AnimationGenre';
import { getActionsFilms, getAdventureFilms, getSuspenseFilms, getAnimationFilms } from './films'

export default function* rootSaga() {
  yield all([
    takeLatest(ActionGenreTypes.GET_ACTION_REQUEST, getActionsFilms),
    takeLatest(AdventureGenreTypes.GET_ADVENTURE_REQUEST, getAdventureFilms),
    takeLatest(SuspenseGenreTypes.GET_SUSPENSE_REQUEST, getSuspenseFilms),
    takeLatest(AnimationGenreTypes.GET_ANIMATION_REQUEST, getAnimationFilms)
  ]);
}
