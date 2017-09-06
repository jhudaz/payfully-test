const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi();

export function setTokens(accessToken, refreshToken) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return {
    type: 'SPOTIFY_TOKENS',
    accessToken,
    refreshToken
  };
}

export function setUserData() {
  return dispatch => {
    dispatch({ type: 'SPOTIFY_USER_INFO_BEGIN' })
    spotifyApi.getMe().then(data => {
      dispatch({ type: 'SPOTIFY_USER_INFO', data: data.body })
    }).catch(e => {
      dispatch({ type: 'SPOTIFY_USER_INFO_FAILURE', error: e })
    })
  }
}

export function getUserCurrentPlayback() {
  return dispatch => {
    dispatch({ type: 'SPOTIFY_USER_CURRENT_PLAYBACK_BEGIN' })
    spotifyApi.getMyCurrentPlayingTrack().then(data => {
      dispatch({ type: 'SPOTIFY_USER_CURRENT_PLAYBACK', data: data.body })
    }).catch(e => {
      dispatch({ type: 'SPOTIFY_USER_CURRENT_PLAYBACK', error: e })
    })
  }
}

export function setSearchedTracks(searchterm, tracks) {
  const data = {
    searchterm,
    tracks
  }
  return {
    type: 'SEARCHED_TRACKS',
    data
  };
}
