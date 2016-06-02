import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
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
  children: PropTypes.node,
  isAuthenticated: PropTypes.bool.isRequired
};

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { user } = state;
  const { authToken, isAuthenticated } = user;
  return {
    authToken,
    isAuthenticated
  };
}

export default connect(mapStateToProps)(App);
