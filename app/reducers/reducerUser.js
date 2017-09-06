const initialState = {
  error: false,
  loggedin: false,
  accessToken: null,
  refreshToken: null,
  user: {
    country: null,
    display_name: null,
    email: null,
    external_urls: {},
    followers: {},
    href: null,
    id: null,
    images: [],
    product: null,
    type: null,
    uri: null,
  }
}

export function userData(state = initialState, action) {
  switch (action.type) {
    case 'SPOTIFY_TOKENS':
      const { accessToken, refreshToken } = action;
      return Object.assign({}, state, { accessToken, refreshToken });
    case 'SPOTIFY_USER_INFO':
      return Object.assign({}, state, {
        loggedin: true,
        user: Object.assign({}, state.user, action.data)
      });
    case 'SPOTIFY_USER_INFO_FAILURE':
      return Object.assign({}, state, { error: true });
    default:
      return state;
  }
}
