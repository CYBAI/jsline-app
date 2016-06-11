import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class ChatView extends Component {
  render() {
    const {
      userId
    } = this.props;

    return (
      <div>{userId || 'Welcome to LINE'}</div>
    );
  }
}

ChatView.propTypes = {
  userId: PropTypes.any
};

function mapStateToProps(state, ownProps) {
  return {
    ...state,
    userId: ownProps.params.userId
  };
}

export default connect(mapStateToProps)(ChatView);
