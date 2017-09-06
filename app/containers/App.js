import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends Component {
  render() {

    return (
      <div>
        <Navbar>
          <div className="container">
            {this.props.userData.loggedin === true ? (
              <div>
                <Nav>
                  <NavItem onClick={() => this.props.history.push(`/search/${this.props.userData.accessToken}/${this.props.userData.refreshToken}`)}>Search</NavItem>
                  <NavItem onClick={() => this.props.history.push('/current')}>Current</NavItem>
                </Nav>
                <Nav pullRight>
                  <NavItem>{this.props.userData.user.id}</NavItem>
                  <NavItem>Logout</NavItem>
                </Nav>
              </div>
            ) : (
                <Nav>
                  <NavItem onClick={() => this.props.history.push('/login')}>Login</NavItem>
                </Nav>
              )}
          </div>
        </Navbar>
      </div>
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