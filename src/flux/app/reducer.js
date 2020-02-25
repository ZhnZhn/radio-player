import initialState from '../initialState'
import { ACTION } from './actions'
import { ACTION as SA } from '../stations/actions'


const reducer = function(state=initialState.app, action) {
  switch(action.type){
    case ACTION.SET_UI_THEME: {
      const { uiTheme } = action;
      return state.uiTheme !== uiTheme ? {
         ...state, uiTheme
      } : state;
    }
    case ACTION.TOGGLE_DRAWER:
      return {
        ...state,
        isDrawer: !state.isDrawer
      };
    case ACTION.SET_SRC_FILTER: {
      return {
        ...state,        
        filter: action.filter
      };
    }
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
