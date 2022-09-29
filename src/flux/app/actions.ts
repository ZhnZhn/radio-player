import { ActionHmType } from "../types";

type AppActionType = 'SET_UI_THEME'
 | 'TOGGLE_DRAWER'

export const ACTION: ActionHmType<AppActionType> = {
  SET_UI_THEME: 'SET_UI_THEME',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER'
};

type UiThemeIndexType = keyof typeof _hmUiTheme
const _hmUiTheme = {
  '1': 'grey',
  '2': 'light',
  '3': 'sand'
};

const setUiTheme = (uiThemeIndex: UiThemeIndexType) => ({
  type: ACTION.SET_UI_THEME,
  uiTheme: _hmUiTheme[uiThemeIndex]
});

const toggleDrawer = () => ({
  type: ACTION.TOGGLE_DRAWER
});

const actions = {
  setUiTheme,
  toggleDrawer
};

export default actions
