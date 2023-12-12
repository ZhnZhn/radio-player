import { isAction } from "redux";

export const SET_UI_THEME = 'SET_UI_THEME'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

const _hmUiTheme = {
  '1': 'grey',
  '2': 'light',
  '3': 'sand'
};
type UiThemeIndexType = keyof typeof _hmUiTheme
type UiThemeType = 'grey' | 'light' | 'sand'

const setUiTheme = (uiThemeIndex: UiThemeIndexType) => ({
  type: SET_UI_THEME,
  uiTheme: _hmUiTheme[uiThemeIndex]
});

type SET_UI_THEME_ACTION_TYPE = object & {
  uiTheme: void | UiThemeType
}

export const isSetUiThemeAction = (action: unknown): action is SET_UI_THEME_ACTION_TYPE => isAction(action)
  && 'uiTheme' in action

const toggleDrawer = () => ({
  type: TOGGLE_DRAWER
});

export const appActions = {
  setUiTheme,
  toggleDrawer
};

