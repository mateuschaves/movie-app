import Immutable from "seamless-immutable";

export const Types = {
  GET_ANIMATION_REQUEST: 'films/GET_ANIMATION_REQUEST',
  GET_ANIMATION_SUCCESS: 'films/GET_ANIMATION_SUCCESS',
  GET_ANIMATION_ERROR: 'films/GET_ANIMATION_ERROR'
}

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  films: []
});

export default function AnimationGenre(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ANIMATION_REQUEST:
      return { ...state, loading: true };
    case Types.GET_ANIMATION_SUCCESS:
      return { ...state, films: action.payload.films, loading: false }
    case Types.GET_ANIMATION_ERROR:
      return { ...state, error: action.payload.error, loading: false };

    default:
      return state;
  }
}

export const Creators = {
  getAnimationRequest: () => ({
    type: Types.GET_ANIMATION_REQUEST,
    payload: {}
  }),
  getAnimationSuccess: films => ({
    type: Types.GET_ANIMATION_SUCCESS,
    payload: { films }
  }),
  getAnimationError: error => ({
    type: Types.GET_ANIMATION_ERROR,
    payload: { error }
  })
}
