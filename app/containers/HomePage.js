import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Loading from '../components/Loading';
import ContactList from './ContactList';

class HomePage extends Component {
  render() {
    const {
      user
    } = this.props;

    const {
      contacts
    } = user;

    return (
      <div>
        <Loading />
        <AppBar
          title="LINE"
        />
        <ContactList contacts={contacts} />
        <Link to="/login">to Login</Link>
      </div>
    );
  }
}

HomePage.propTypes = {
  user: PropTypes.object.isRequired
};

HomePage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(HomePage);
