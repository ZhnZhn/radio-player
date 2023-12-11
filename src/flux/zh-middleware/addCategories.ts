import { isAddCategortyAction } from '../stations/actions';

import { Middleware } from '../types';
import utils from '../../sound/utils';

const { crFilterBy, getCategory } = utils;

const addCategories: Middleware = (
  { getState }
) => (next) => (action) => {
  if (isAddCategortyAction(action)) {
    const state = getState()
    , { category } = action
    , _filterBy = crFilterBy(state.app.filter);
    action.categories = getCategory(category)    
      .map(station => {
        station.category = category
        return station;
      })
      .filter(_filterBy);
  }
  return next(action);
}

export default addCategories
