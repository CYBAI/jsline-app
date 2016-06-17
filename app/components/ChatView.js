import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class ChatView extends Component {
  render() {
    const {
      selectedContactId
    } = this.props;

    return (
      <div>{
        selectedContactId || 'Welcome to LINE'
      }</div>
    );
  }
}

ChatView.propTypes = {
  selectedContactId: PropTypes.string
};

function mapStateToProps(state) {
  const { user } = state;
  return user ? {
    ...state,
    selectedContactId: user.selectedContactId
  } : state;
}

export default connect(mapStateToProps)(ChatView);
