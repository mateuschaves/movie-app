import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as ActionsGenre } from '~/store/ducks/ActionGenre';
import { Creators as AdventureGenre } from '~/store/ducks/AdventureGenre';
import { Creators as SuspenseGenre } from '~/store/ducks/SuspenseGenre';
import { Creators as AnimationGenre } from '~/store/ducks/AnimationGenre';

export function* getActionsFilms() {
  try {
    const { data } = yield call(api.get, `discover/movie?api_key=c2d9f7b4820307867e946fc0ac1d1255&language=pt-BR&sort_by=popularity.desc&with_genres=28`);
    yield put(ActionsGenre.getActionSuccess(data.results));
  } catch (err) {
    yield put(ActionsGenre.getActionError('Erro buscar filmes de ação'));
  }
}

export function* getAdventureFilms() {
  try {
    const { data } = yield call(api.get, `discover/movie?api_key=c2d9f7b4820307867e946fc0ac1d1255&language=pt-BR&sort_by=popularity.desc&with_genres=12`);
    yield put(AdventureGenre.getAdventureSuccess(data.results));
  } catch (err) {
    yield put(AdventureGenre.getAdventureError('Erro buscar filmes de aventura'));
  }
}


export function* getSuspenseFilms() {
  try {
    const { data } = yield call(api.get, `discover/movie?api_key=c2d9f7b4820307867e946fc0ac1d1255&language=pt-BR&sort_by=popularity.desc&with_genres=27`);
    yield put(SuspenseGenre.getSuspenseSuccess(data.results));
  } catch (err) {
    yield put(SuspenseGenre.getSuspenseError('Erro buscar filmes de suspense'));
  }
}

export function* getAnimationFilms() {
  try {
    const { data } = yield call(api.get, `discover/movie?api_key=c2d9f7b4820307867e946fc0ac1d1255&language=pt-BR&sort_by=popularity.desc&with_genres=16`);
    yield put(AnimationGenre.getAnimationSuccess(data.results));
  } catch (err) {
    yield put(AnimationGenre.getAnimationError('Erro buscar animações'));
  }
}
