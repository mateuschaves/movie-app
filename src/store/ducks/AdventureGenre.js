import Immutable from "seamless-immutable";

export const Types = {
  GET_ADVENTURE_REQUEST: 'films/GET_ADVENTURE_REQUEST',
  GET_ADVENTURE_SUCCESS: 'films/GET_ADVENTURE_SUCCESS',
  GET_ADVENTURE_ERROR: 'films/GET_ADVENTURE_ERROR'
}

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  films: []
});

export default function AdventureGenre(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ADVENTURE_REQUEST:
      return { ...state, loading: true };
    case Types.GET_ADVENTURE_SUCCESS:
      return { ...state, films: action.payload.films, loading: false }
    case Types.GET_ADVENTURE_ERROR:
      return { ...state, error: action.payload.error, loading: false };

    default:
      return state;
  }
}

export const Creators = {
  getAdventureRequest: () => ({
    type: Types.GET_ADVENTURE_REQUEST,
    payload: {}
  }),
  getAdventureSuccess: films => ({
    type: Types.GET_ADVENTURE_SUCCESS,
    payload: { films }
  }),
  getAdventureError: error => ({
    type: Types.GET_ADVENTURE_ERROR,
    payload: { error }
  })
}
