import { ActionHmType } from "../types";

type AppActionType = 'SET_UI_THEME'
 | 'SET_SRC_FILTER'
 | 'TOGGLE_DRAWER'

export const ACTION: ActionHmType<AppActionType> = {
  SET_UI_THEME: 'SET_UI_THEME',
  SET_SRC_FILTER: 'SET_SRC_FILTER',
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

type FilterIndexType = keyof typeof _hmSrcFilter
const _hmSrcFilter = {
  '1': 'none',
  '2': 'https',
  '3': 'http'
};

const setSrcFilter = (filterIndex: FilterIndexType) => ({
  type: ACTION.SET_SRC_FILTER,
  filter: _hmSrcFilter[filterIndex]
});

const actions = {
  setUiTheme,
  setSrcFilter,
  toggleDrawer
};

export default actions
