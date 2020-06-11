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
      let films = state?.films || [];
      const alreadyExist = films?.find(film => film.id == action.payload.film.id);
      if (alreadyExist) {
        return state;
      } else {
        films.push(action.payload.film);
        return { ...state, films };
      }
    case Types.REMOVE_FAVORITE_FILM:
      const filmsFiltered = state?.films?.filter(film => film.id != action.payload.id) || [];
      return { ...state, films: filmsFiltered };
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
