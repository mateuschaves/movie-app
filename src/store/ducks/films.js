import Immutable from "seamless-immutable";

export const Types = {
  GET_ACTION_REQUEST: 'films/GET_ACTIONS_REQUEST',
  GET_ACTION_SUCCESS: 'films/GET_ACTION_SUCCESS',
  GET_ACTION_ERROR: 'films/GET_ACTION_ERROR'
}

export const INITIAL_STATE = Immutable({
  action: {
    loading: false,
    error: null,
    page: 1,
    films: []
  },
  adventure: {
    loading: false,
    error: null,
    page: 1,
    films: []
  },
  terror: {
    loading: false,
    error: null,
    page: 1,
    films: []
  },
  drama: {
    loading: false,
    error: null,
    page: 1,
    films: []
  },
  animation: {
    loading: false,
    error: null,
    page: 1,
    films: []
  },
  science: {
    loading: false,
    error: null,
    page: 1,
    films: []
  },
  crime: {
    loading: false,
    error: null,
    page: 1,
    films: []
  }
});

export default function films(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ACTION_REQUEST:
      return state.update("action", data => ({ ...data, loading: true }));
    case Types.GET_ACTION_SUCCESS:
      return state.update("action", data => ({ ...data, films: action.payload.films, loading: false }));
    case Types.GET_ACTION_ERROR:
      return state.update("action", data => ({ ...data, error: action.payload.error, loading: false }));
    default:
      return state;
  }
}

export const Creators = {
  getActionRequest: () => ({
    type: Types.GET_ACTION_REQUEST,
    payload: {}
  }),
  getActionSuccess: films => ({
    type: Types.GET_ACTION_SUCCESS,
    payload: { films }
  }),
  getActionError: error => ({
    type: Types.GET_ACTION_ERROR,
    payload: { error }
  })
}
