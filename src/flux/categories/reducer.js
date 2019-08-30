import { ACTION as SA } from '../stations/actions'

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
    default: return state;
  }
}

export default reducer
