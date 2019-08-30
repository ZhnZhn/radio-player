import router from '../../sound/router'

export const ACTION = {
  MOVE_TO_TOP: 'MOVE_TO_TOP',
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY'
};

export const moveToTop = (station, index) => ({
  type: ACTION.MOVE_TO_TOP,
  station,
  index
})

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
  }
};

export const removeCategory = (category) => ({
  type: ACTION.REMOVE_CATEGORY,
  category
})
