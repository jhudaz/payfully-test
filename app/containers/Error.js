import React, { Component } from 'react';
import { connect } from 'react-redux'

class Error extends Component {

  render() {
    return (
      <div className="error text-center">
        <h2>An Error Occured</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Error)