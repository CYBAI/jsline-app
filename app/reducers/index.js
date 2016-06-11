import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import user from './user';
import navDrawer from './navDrawer';

const rootReducer = combineReducers({
  user,
  navDrawer,
  routing
});

export default rootReducer;
