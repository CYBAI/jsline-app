import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NotFound extends Component {
  render() {
    return (
      <div>
        Page Not Found
        <Link to="/">to Home</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(NotFound);
