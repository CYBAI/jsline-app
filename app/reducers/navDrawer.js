import {
  DOCKED_OPEN,
  DOCKED_CLOSE,
  NAV_DRAWER_OPEN,
  NAV_DRAWER_CLOSE
} from '../actions/navDrawer';

export default function user(state = {
  navDrawerOpen: true,
  docked: false
}, action) {
  switch (action.type) {
    case DOCKED_OPEN:
    case DOCKED_CLOSE:
      return {
        ...state,
        docked: action.docked
      };
    case NAV_DRAWER_OPEN:
    case NAV_DRAWER_CLOSE:
      return {
        ...state,
        navDrawerOpen: action.navDrawerOpen
      };
    default:
      return state;
  }
}
