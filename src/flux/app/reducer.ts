import { ActionType, StateAppSlice } from '../types';

import initialState from '../initialState';
import { 
  SET_UI_THEME,
  TOGGLE_DRAWER 
} from './actions';
import { SET_CURRENT_STATION } from '../stations/actions';

const { 
  uiTheme: DF_UI_THEME
} = initialState.app;

const reducer = function(state=initialState.app, action: ActionType): StateAppSlice {
  switch(action.type){
    case SET_UI_THEME: {
      const { uiTheme=DF_UI_THEME } = action;
      return state.uiTheme !== uiTheme ? {
         ...state, uiTheme
      } : state;
    }
    case TOGGLE_DRAWER:
      return {
        ...state,
        isDrawer: !state.isDrawer
      };    
    case SET_CURRENT_STATION: {
      const { station } = action;
      return {
        ...state,
        currentStation: station
      };
    }
    default:
      return state;
  }
}

export default reducer
