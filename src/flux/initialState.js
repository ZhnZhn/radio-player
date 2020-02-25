import categories from '../sound/categories'

const initialState = {
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
