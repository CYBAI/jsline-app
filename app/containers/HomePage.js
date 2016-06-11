import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppNavDrawer from '../components/AppNavDrawer';
import { navDrawerToggle, dockedToggle } from '../actions/navDrawer';

class HomePage extends Component {
  constructor() {
    super();
    this.handleChangeRequestNavDrawer = this.handleChangeRequestNavDrawer.bind(this);
  }

  handleChangeRequestNavDrawer() {
    const {
      navDrawerOpen
    } = this.props;

    this.props.navDrawerToggle(navDrawerOpen);
  }

  render() {
    const {
      user,
    } = this.props;

    const {
      contacts
    } = user;

    return (
      <div>
        <AppNavDrawer
          contacts={contacts}
          onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
        />
        {this.props.children}
        <Link to="/login">to Login</Link>
      </div>
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object.isRequired,
  docked: PropTypes.bool,
  navDrawerOpen: PropTypes.bool,
  dockedToggle: PropTypes.func.isRequired,
  navDrawerToggle: PropTypes.func.isRequired
};

HomePage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const {
    user,
    docked,
    navDrawerOpen
  } = state;

  return {
    user,
    docked,
    navDrawerOpen
  };
}

export default connect(mapStateToProps, {
  dockedToggle,
  navDrawerToggle
})(HomePage);
