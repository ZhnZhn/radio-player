import { StateRoot } from './types';

import categories from '../sound/categories';

const initialState: StateRoot = {
  app: {
    isDrawer: false,
    filter: 'none',
    currentStation: void 0,
    uiTheme: 'grey'
  },
  topics: [...categories],
  categories: {},
  stations: []
};

export default initialState
