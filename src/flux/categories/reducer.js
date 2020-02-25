import { ACTION as SA } from '../stations/actions'
import { ACTION as AP } from '../app/actions'

const reducer = function(state={}, action) {
  switch(action.type){
    case SA.ADD_CATEGORY: {
      const { category } = action
      state[category] = true
      return { ...state};
    }
    case SA.REMOVE_CATEGORY: {
      const { category } = action
      state[category] = false;
      return { ...state};
    }
    case AP.SET_SRC_FILTER: {
      return {};
    }
    default: return state;
  }
}

export default reducer
