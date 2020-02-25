import utils from '../../sound/utils'

export const ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  SET_CURRENT_STATION: 'SET_CURRENT_STATION'
};

const { crFilterBy, getCategory } = utils;

export const addCategory = (category, filter) => {
  const _filterBy = crFilterBy(filter)
  , categories = getCategory(category)
    .map(station => {
      station.category = category
      return station;
    })
    .filter(_filterBy);
  return {
    type: ACTION.ADD_CATEGORY,
    categories,
    category
  };
};

export const removeCategory = (category) => ({
  type: ACTION.REMOVE_CATEGORY,
  category
})

export const setCurrentStation = (station) => ({
  type: ACTION.SET_CURRENT_STATION,
  station
})
