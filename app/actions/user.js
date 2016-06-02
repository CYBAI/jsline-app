import { LineClient } from 'jsline-api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function loginRequest(options) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    options
  };
}

function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function loginUser(options) {
  return (dispatch) => {
    dispatch(loginRequest(options));

    if (!options.id || !options.password) {
      return dispatch(loginError('Please type your email and password'));
    }

    return new LineClient({
      id: options.id,
      password: options.password,
      authToken: options.authToken,
      certificate: options.certificate
    }).login().then((result) => {
      const [revision, profile, contacts, groups, rooms] = result;

      if (
        (options.authToken && options.certificate) &&
        (profile._client.authToken !== options.authToken ||
        profile._client.certificate !== options.certificate)
      ) {
        return dispatch(loginError('Login error: Please check your email and password'));
      }

      localStorage.setItem('authToken', profile._client.authToken);
      localStorage.setItem('certificate', profile._client.certificate);
      dispatch(
        loginSuccess({
          authToken: profile._client.authToken,
          certificate: profile._client.certificate,
          revision, profile, contacts, groups, rooms
        })
      );
      return [revision, profile, contacts, groups, rooms];
    }).catch((err) => {
      console.log('Error: ', err); // eslint-disable-line no-console
      dispatch(loginError(err.reason));
      return Promise.reject(err);
    });
  };
}
