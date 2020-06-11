import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as ActionsGenre } from '~/store/ducks/ActionGenre';
import { Creators as AdventureGenre } from '~/store/ducks/AdventureGenre';

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
    console.log('aventura');
    const { data } = yield call(api.get, `discover/movie?api_key=c2d9f7b4820307867e946fc0ac1d1255&language=pt-BR&sort_by=popularity.desc&with_genres=12`);
    yield put(AdventureGenre.getAdventureSuccess(data.results));
  } catch (err) {
    yield put(AdventureGenre.getAdventureError('Erro buscar filmes de aventura'));
  }
}
