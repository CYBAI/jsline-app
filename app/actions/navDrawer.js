export const NAV_DRAWER_OPEN = 'NAV_DRAWER_OPEN';
export const NAV_DRAWER_CLOSE = 'NAV_DRAWER_CLOSE';
export const DOCKED_OPEN = 'DOCKED_OPEN';
export const DOCKED_CLOSE = 'DOCKED_CLOSE';

function navDrawerOpen() {
  return {
    type: NAV_DRAWER_OPEN,
    navDrawerOpen: true
  };
}

function navDrawerClose() {
  return {
    type: NAV_DRAWER_CLOSE,
    navDrawerOpen: false
  };
}

function dockedOpen() {
  return {
    type: DOCKED_OPEN,
    docked: true
  };
}

function dockedClose() {
  return {
    type: DOCKED_CLOSE,
    docked: false
  };
}

export function navDrawerToggle(navDrawerNow) {
  return (dispatch) => (
    navDrawerNow ? dispatch(navDrawerClose()) : dispatch(navDrawerOpen())
  );
}

export function dockedToggle(docked) {
  return (dispatch) => (
    docked ? dispatch(dockedClose()) : dispatch(dockedOpen())
  );
}
