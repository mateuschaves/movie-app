import Immutable from "seamless-immutable";

export const Types = {
  GET_SUSPENSE_REQUEST: 'films/GET_SUSPENSE_REQUEST',
  GET_SUSPENSE_SUCCESS: 'films/GET_SUSPENSE_SUCCESS',
  GET_SUSPENSE_ERROR: 'films/GET_SUSPENSE_ERROR'
}

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  films: []
});

export default function SuspenseGenre(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_SUSPENSE_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUSPENSE_SUCCESS:
      return { ...state, films: action.payload.films, loading: false }
    case Types.GET_SUSPENSE_ERROR:
      return { ...state, error: action.payload.error, loading: false };

    default:
      return state;
  }
}

export const Creators = {
  getSuspenseRequest: () => ({
    type: Types.GET_SUSPENSE_REQUEST,
    payload: {}
  }),
  getSuspenseSuccess: films => ({
    type: Types.GET_SUSPENSE_SUCCESS,
    payload: { films }
  }),
  getSuspenseError: error => ({
    type: Types.GET_SUSPENSE_ERROR,
    payload: { error }
  })
}
