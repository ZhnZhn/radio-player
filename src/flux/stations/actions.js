import router from '../../sound/router'

export const ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  SET_CURRENT_STATION: 'SET_CURRENT_STATION'
};

export const addCategory = (category) => {
  const categories = router.getCategory(category)
    .map(station => {
      station.category = category
      return station;
    })
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
