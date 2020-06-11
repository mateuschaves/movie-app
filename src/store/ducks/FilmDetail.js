export const Types = {
  SET_DETAIL_FILM: 'films/SET_DETAIL_FILM',
  REMOVE_DETAIL_FILM: 'films/REMOVE_DETAIL_FILM'
}

export const INITIAL_STATE = {
  film: {}
};

export default function DetailFilms(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_DETAIL_FILM:
      return { ...state, film: action.payload.film };
    case Types.REMOVE_DETAIL_FILM:
      return { ...state, film: {} };
    default:
      return state;
  }
}

export const Creators = {
  setDetailFilm: film => ({
    type: Types.SET_DETAIL_FILM,
    payload: { film }
  }),
  removeDetailFilm: id => ({
    type: Types.REMOVE_DETAIL_FILM,
    payload: { id }
  })
}
