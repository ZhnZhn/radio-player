
export const ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  SET_UI_THEME: 'SET_UI_THEME'
};


export const addCategory = (category) => ({
  type: ACTION.SAVE_BOARD,
  category
});


const _hmUiTheme = {
  '1': 'grey',
  '2': 'light',
  '3': 'sand'
};

export const setUiTheme = (uiThemeIndex) => ({
  type: ACTION.SET_UI_THEME,
  uiTheme: _hmUiTheme[uiThemeIndex]
});
