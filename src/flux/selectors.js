
export const sApp = {
  app: state => state.app || {},
  isDrawer: state => sApp.app(state).isDrawer,
  currentStation: state => sApp.app(state).currentStation,
  uiTheme: state => sApp.app(state).uiTheme,

  stations: state => state.stations || []
};

const selectors = {
  sApp
};

export default selectors
