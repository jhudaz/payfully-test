import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setTokens, setUserData, setSearchedTracks } from '../actions/index';
import Spotify from 'spotify-web-api-node';
import { Table } from 'react-bootstrap';

import styles from './styles/Share.css';

const spotifyApi = new Spotify();

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchterm: this.props.searchedTracks.searchterm,
      tracks: this.props.searchedTracks.tracks
    }
  }

  componentDidMount() {
    const { accessToken, refreshToken } = this.props.match.params;
    this.props.setTokens(accessToken, refreshToken)
    this.props.setUserData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userData.error === true) {
      this.props.history.push('/login')
    }
  }

  search() {
    if (this.props.userData.accessToken && this.state.searchterm.length > 0) {
      spotifyApi.setAccessToken(this.props.userData.accessToken);
      spotifyApi.searchTracks(this.state.searchterm, { limit: 10 })
        .then((data) => {
          console.log(`Search by "${this.state.searchterm}"`, data.body);
          this.setState({ tracks: data.body.tracks.items })
          this.props.setSearchedTracks(this.state.searchterm, data.body.tracks.items)
        }, function (err) {
          console.error(err);
        })
    } else {
      this.setState({ tracks: [] })
      this.props.setSearchedTracks('', [])
    }
  }

  handleInput(event) {
    this.setState({ searchterm: event.target.value }, () => {
      this.search()
    })
  }

  render() {
    return (
      <div>
        <div className="row">
          <label>Spotify Search:</label>
          <input
            type="text"
            placeholder="Keyword"
            className="form-control"
            value={this.state.searchterm}
            onChange={this.handleInput.bind(this)} />
        </div>
        <div className={styles.topBuffer}></div>
        <div className="row">
          {this.state.tracks.length === 0 ? (
            <div className="col-md-4 col-md-offset-4 text-center font-weight-bold">No results</div>
          ) : (
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Track</th>
                    <th>Artist</th>
                    <th>Album</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tracks.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.artists[0].name}</td>
                        <td>{item.album.name}</td>
                      </tr>
                    )
                  })}

                </tbody>
              </Table>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    searchedTracks: state.searchedTracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTokens,
    setUserData,
    setSearchedTracks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
