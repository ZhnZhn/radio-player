import { ACTION } from '../stations/actions'
import { sApp } from '../selectors'

const appCurrentStation = ({ getState }) => next => action => {
  if (action.type === ACTION.SET_CURRENT_STATION ||
      action.type === ACTION.ADD_CATEGORY) {
    action.currentStation = sApp.currentStation(getState())
  }
  return next(action);
}

export default appCurrentStation
