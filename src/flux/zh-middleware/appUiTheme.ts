import { Middleware } from '../types'

import { ACTION } from '../app/actions'

const _hm = {
  'grey': 'grey',
  'light': '#e1e1e1',
  'sand': '#e8e0cb'
};

const appUiTheme: Middleware = (
  _
) => (next) => (action) => {
  if (action.type === ACTION.SET_UI_THEME) {
    const { uiTheme } = action
    , _bgColor = _hm[uiTheme!];
    if (_bgColor) {
      document.body.style.backgroundColor = _bgColor
    }  
  }
  return next(action);
};

export default appUiTheme
