import { ACTION } from '../stations/actions'

import { MiddlewareApiType, ActionType, MiddlewareNextType } from '../types';
import utils from '../../sound/utils'

const { crFilterBy, getCategory } = utils;

const addCategories = ({ getState }: MiddlewareApiType) => 
  (next: MiddlewareNextType) => 
  (action: ActionType) => {
  if (action.type === ACTION.ADD_CATEGORY) {
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
