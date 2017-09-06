const initialState = {
  is_playing: false,
  item: {
    album: {
      images: [
        {
          url: ''
        }
      ]
    },
    artists: [
      {
        name: ''
      }
    ],
    duration_ms: 0,
    id: '',
    name: ''
  }
}

export function userPlayback(state = initialState, action) {
  switch (action.type) {
    case 'SPOTIFY_USER_CURRENT_PLAYBACK':
      return Object.assign({}, state, { is_playing: action.data.is_playing, item: action.data.item })
    default:
      return state;
  }
}