import { ACTION } from '../stations/actions'

import utils from '../../sound/utils'

const { crFilterBy, getCategory } = utils;

const addCategories = ({ getState }) => next => action => {
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
