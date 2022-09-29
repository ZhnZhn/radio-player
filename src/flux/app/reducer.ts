import { ActionType, StateAppSlice } from '../types';

import initialState from '../initialState';
import { ACTION } from './actions';
import { ACTION as SA } from '../stations/actions';

const { 
  uiTheme: DF_UI_THEME
} = initialState.app;

const reducer = function(state=initialState.app, action: ActionType): StateAppSlice {
  switch(action.type){
    case ACTION.SET_UI_THEME: {
      const { uiTheme=DF_UI_THEME } = action;
      return state.uiTheme !== uiTheme ? {
         ...state, uiTheme
      } : state;
    }
    case ACTION.TOGGLE_DRAWER:
      return {
        ...state,
        isDrawer: !state.isDrawer
      };    
    case SA.SET_CURRENT_STATION: {
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
