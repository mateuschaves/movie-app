export const Types = {
  SET_LOGIN: 'auth/SET_LOGIN',
}

export const INITIAL_STATE = {
  alreadyAuthenticated: false
};

export default function Auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_LOGIN:
      return { ...state, alreadyAuthenticated: true };
    default:
      return state;
  }
}

export const Creators = {
  setLogin: () => ({
    type: Types.SET_LOGIN,
    payload: {}
  })
}
