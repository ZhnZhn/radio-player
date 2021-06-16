import appCurrentStation from './appCurrentStation';
import appUiTheme from './appUiTheme';
import addCategories from './addCategories';

const middlewares = [
  appUiTheme,
  appCurrentStation,
  addCategories
];

export default middlewares
