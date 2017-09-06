import React, { Component } from 'react';
import { connect } from 'react-redux'

import styles from './styles/Share.css';

class Login extends Component {
  render() {
    return (
      <div>
        <div id="login" className="row">
          <div className="col-lg-4 col-lg-offset-4 btn btn-lg">
            <a className={styles.btnSpotify} href="/spotify_login">Login with Spotify!</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login)
