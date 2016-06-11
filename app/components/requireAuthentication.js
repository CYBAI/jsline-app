import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { loginUser } from '../actions/user';

export default function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth(isAuthenticated) {
      if (!isAuthenticated) {
        this.props.dispatch(push('/login'));
      } else {
        const {
          user,
          dispatch
        } = this.props;

        if (!user.contacts) {
          const id = 'LOGIN_DIRECTLY';
          const password = 'LOGIN_DIRECTLY';
          const authToken = localStorage.getItem('authToken');
          const certificate = localStorage.getItem('certificate');
          dispatch(loginUser({
            id,
            password,
            authToken,
            certificate
          }));
        }
      }
    }

    render() {
      return (
        <div>
          {
            this.props.isAuthenticated ?
              <Component {...this.props} /> : null
          }
        </div>
      );
    }
  }

  AuthenticatedComponent.propTypes = {
    user: PropTypes.object,
    location: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired
  };

  const mapStateToProps = (state) => ({
    user: state.user,
    isAuthenticated: state.user.isAuthenticated
  });

  const mapDispatchToProps = (dispatch) => ({
    dispatch,
    loginUser
  });

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}
