import { combineReducers } from 'redux'

import app from './app/reducer'
import stations from './stations/reducer'
import categories from './categories/reducer'

const rootReducer = combineReducers({
  app,
  stations,
  categories
});

export default rootReducer
