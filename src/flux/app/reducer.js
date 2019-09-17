import initialState from '../initialState'
import { ACTION } from './actions'


const reducer = function(state=initialState.app, action) {
  switch(action.type){
    case ACTION.SET_UI_THEME: {
      const { uiTheme } = action;
      return state.uiTheme !== uiTheme ? {
         ...state, uiTheme
      } : state;
    }
    default:
      return state;
  }
}

export default reducer
