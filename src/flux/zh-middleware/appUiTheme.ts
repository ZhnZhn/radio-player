import type { Middleware } from '../types';
import { isSetUiThemeAction } from '../app/actions';

const _hm = {
  'grey': 'grey',
  'light': '#e1e1e1',
  'sand': '#e8e0cb'
};

const appUiTheme: Middleware = () => (next) => (action) => {
  if (isSetUiThemeAction(action)) {
    const { uiTheme } = action
    , _bgColor = uiTheme && _hm[uiTheme];
    if (_bgColor) {
      document.body.style.backgroundColor = _bgColor
    }  
  }
  return next(action);
};

export default appUiTheme
