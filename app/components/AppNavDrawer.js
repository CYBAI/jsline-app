import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import { spacing } from 'material-ui/styles';

import ContactList from '../containers/ContactList';

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 24,
    color: '#fff',
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: 'bold',
    backgroundColor: '#00c300', // LINE Green: #00c300
    paddingLeft: spacing.desktopGutter,
    marginBottom: 8,
  }
};

class AppNavDrawer extends Component {
  constructor() {
    super();
    this.handleTouchTapHeader = this.handleTouchTapHeader.bind(this);
  }

  handleTouchTapHeader() {
    this.context.router.push('/');
  }

  render() {
    const {
      docked,
      navDrawerOpen,
      style,
      contacts,
    } = this.props;

    return (
      <Drawer
        style={style}
        docked={docked}
        open={navDrawerOpen}
        containerStyle={{ zIndex: 1 }}
      >
        <div style={styles.logo} onTouchTap={this.handleTouchTapHeader}>
          LINE
        </div>
        {contacts ? (
          <ContactList
            contacts={contacts}
          />
        ) : (
          <List>
            <ListItem>
              You still have no friends now.
            </ListItem>
          </List>
        )}
      </Drawer>
    );
  }
}

AppNavDrawer.propTypes = {
  user: PropTypes.object.isRequired,
  contacts: PropTypes.array,
  docked: PropTypes.bool,
  navDrawerOpen: PropTypes.bool,
  style: PropTypes.object
};

AppNavDrawer.contextTypes = {
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

export default connect(mapStateToProps)(AppNavDrawer);
