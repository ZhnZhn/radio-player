export const ACTION = {
  SET_UI_THEME: 'SET_UI_THEME',
  SET_SRC_FILTER: 'SET_SRC_FILTER',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER'
};

const _hmUiTheme = {
  '1': 'grey',
  '2': 'light',
  '3': 'sand'
};

const setUiTheme = (uiThemeIndex) => ({
  type: ACTION.SET_UI_THEME,
  uiTheme: _hmUiTheme[uiThemeIndex]
});

const toggleDrawer = () => ({
  type: ACTION.TOGGLE_DRAWER
});

const _hmSrcFilter = {
  '1': 'none',
  '2': 'https',
  '3': 'http'
};

const setSrcFilter = (filterIndex) => ({
  type: ACTION.SET_SRC_FILTER,
  filter: _hmSrcFilter[filterIndex]
});

const actions = {
  setUiTheme,
  setSrcFilter,
  toggleDrawer
};

export default actions
