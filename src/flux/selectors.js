
export const sApp = {
  app: state => state.app || {},
  uiTheme: state => sApp.app(state).uiTheme,
};

const selectors = {
  sApp
};

export default selectors
