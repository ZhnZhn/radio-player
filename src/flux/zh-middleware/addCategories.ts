import { isAddCategortyAction } from '../stations/actions';

import { Middleware } from '../types';
import { getCategory } from '../../sound/utils';


const addCategories: Middleware = (
  //{ getState }
) => (next) => (action) => {
  if (isAddCategortyAction(action)) {    
    const { category } = action;    
    action.categories = getCategory(category)    
      .map(station => {
        station.category = category
        return station;
      })      
  }
  return next(action);
}

export default addCategories
