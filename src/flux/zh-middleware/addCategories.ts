import { isAddCategortyAction } from '../stations/actions';

import { Middleware } from '../types';
import { getByCategory } from '../../sound/router';

const addCategories: Middleware = (
  //{ getState }
) => (next) => (action) => {
  if (isAddCategortyAction(action)) {    
    const { category } = action;    
    action.categories = getByCategory(category)    
      .map(station => {
        station.category = category
        return station;
      })      
  }
  return next(action);
}

export default addCategories
