import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
} from '../actions/user';

export default function user(state = {
  isFetching: false,
  isAuthenticated: !!(
    localStorage.getItem('authToken') &&
    localStorage.getItem('certificate')
  )
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        userOps: action.options
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.user,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      };
    default:
      return state;
  }
}
