import { ActionType } from '../types';

import initialState from '../initialState';
import { ACTION as SA } from '../stations/actions';

const reducer = (
  state=initialState.categories, 
  action: ActionType
) => {
  switch(action.type){
    case SA.ADD_CATEGORY: {
      const { category } = action;
      if (category) {
        state[category] = true
      }
      return { ...state};
    }
    case SA.REMOVE_CATEGORY: {
      const { category } = action;
      if (category){
        state[category] = false;
      }
      return { ...state};
    }    
    default: return state;
  }
}

export default reducer
