export const ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  SET_CURRENT_STATION: 'SET_CURRENT_STATION'
};

const addCategory = (category) => ({
  type: ACTION.ADD_CATEGORY,
  category
})

const removeCategory = (category) => ({
  type: ACTION.REMOVE_CATEGORY,
  category
})

const setCurrentStation = (station) => ({
  type: ACTION.SET_CURRENT_STATION,
  station
})

const actions = {
  addCategory,
  removeCategory,
  setCurrentStation
};

export default actions
