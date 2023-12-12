import { ActionType } from '../types';

import initialState from '../initialState';
import { 
  ADD_CATEGORY,
  REMOVE_CATEGORY 
} from '../stations/actions';

const reducer = (
  state=initialState.categories, 
  action: ActionType
) => {
  switch(action.type){
    case ADD_CATEGORY: {
      const { category } = action;
      if (category) {
        state[category] = true
      }
      return { ...state};
    }
    case REMOVE_CATEGORY: {
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
