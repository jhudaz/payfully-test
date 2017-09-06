import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'

import AppContainer from './containers/App'
import Login from './containers/Login'
import Search from './containers/Search';
import CurrentTrack from './containers/CurrentTrack'
import Error from './containers/Error'

class App extends Component {
  render() {
    { /* ConnectedRouter will use the store from Provider automatically */ }
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Route path="/" component={AppContainer} />
          <div className="container">
            <Route path="/search/:accessToken/:refreshToken" component={Search} />
            {this.props.userData.loggedin === true ? (
              <Route path="/current" component={CurrentTrack} />
            ) : (
                <Route path="/login" component={Login} />
              )}
            <Route path="/error" component={Error} />
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)