import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Loading from '../components/Loading';
import { spacing } from 'material-ui/styles';
import { navDrawerToggle, dockedToggle } from '../actions/navDrawer';

class App extends Component {
  constructor() {
    super();
    this.handleTouchTapLeftIconButton = this.handleTouchTapLeftIconButton.bind(this);
  }

  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        zIndex: 1,
        top: 0,
        backgroundColor: '#00c300'
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
      },
      content: {
        margin: spacing.desktopGutter,
      },
    };

    return styles;
  }

  handleTouchTapLeftIconButton() {
    const {
      navDrawerOpen
    } = this.props;

    this.props.navDrawerToggle(navDrawerOpen);
  }

  render() {
    const {
      location
    } = this.props;

    const styles = this.getStyles();


    if (window.innerWidth > 250 && location.pathname !== '/login') {
      // this.props.dockedToggle(docked);
      // this.props.navDrawerToggle(navDrawerOpen);
      styles.root.paddingLeft = 256;
    }

    return (
      <div>
        <Loading />
        <AppBar
          title="LINE"
          zDepth={0}
          style={styles.appBar}
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
        />
        <div style={styles.root}>
          <div style={styles.content}>
            {this.props.children}
          </div>
        </div>
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools'); // eslint-disable-line global-require
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
  docked: PropTypes.bool,
  navDrawerOpen: PropTypes.bool,
  dockedToggle: PropTypes.func.isRequired,
  navDrawerToggle: PropTypes.func.isRequired
};

App.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  dockedToggle,
  navDrawerToggle
})(App);
