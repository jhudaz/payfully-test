const initialState = {
  searchterm: '',
  tracks: []
}

export function searchedTracks(state = initialState, action) {
  switch (action.type) {
    case 'SEARCHED_TRACKS':
      return Object.assign({}, action.data)
    default:
      return state;
  }
}
