export const Types = {
  SET_FAVORITE_FILM: 'films/SET_FAVORITE_FILM',
  REMOVE_FAVORITE_FILM: 'films/REMOVE_FAVORITE_FILM'
}

export const INITIAL_STATE = {
  films: []
};

export default function FavoriteFilms(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_FAVORITE_FILM:
      return [...state, action.payload.film];
    case Types.REMOVE_FAVORITE_FILM:
      return state.films.filter(film => film.id !== action.payload.id);
    default:
      return state;
  }
}

export const Creators = {
  setFavoriteFilm: film => ({
    type: Types.SET_FAVORITE_FILM,
    payload: { film }
  }),
  removeFavoriteFilm: id => ({
    type: Types.REMOVE_FAVORITE_FILM,
    payload: { id }
  })
}
