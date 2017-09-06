import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUserCurrentPlayback } from '../actions/index';

class CurrentTrack extends Component {
  constructor(props) {
    super(props)
    this.props.getUserCurrentPlayback()
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <img className="img-responsive img-thumbnail" src={this.props.userPlayback.item.album.images[0].url} />
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h1>
            {this.props.userPlayback.item.name}
            {' '}
            <small>{this.props.userPlayback.item.artists[0].name}</small>
          </h1>
          <ul className="list-group">
            <li className="list-group-item"><strong>Is playing right now:</strong> {this.props.userPlayback.is_playing ? 'YES' : 'NO'}</li>
          </ul>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userPlayback: state.userPlayback
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserCurrentPlayback: getUserCurrentPlayback,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrack)