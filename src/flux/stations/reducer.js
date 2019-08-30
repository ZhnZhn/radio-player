import { ACTION } from './actions'

const reducer = function(state={}, action){
  switch(action.type){
    case ACTION.MOVE_TO_TOP: {
      const { index, station } = action;
      state.splice(index, 1)
      state.unshift(station)
      return [...state];
    }
    case ACTION.ADD_CATEGORY: {
      const { categories } = action;
      return [ ...categories, ...state ];
    }
    case ACTION.REMOVE_CATEGORY: {
      const { category } = action;
      return state.filter(
        station => station.category !== category
      );
    }
    default:
      return state;
  }
}

export default reducer
