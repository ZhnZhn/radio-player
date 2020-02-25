import { combineReducers } from 'redux'

import app from './app/reducer'
import stations from './stations/reducer'
import categories from './categories/reducer'
import topics from './topics/reducer'

const rootReducer = combineReducers({
  app,
  stations,
  categories,
  topics
});

export default rootReducer
