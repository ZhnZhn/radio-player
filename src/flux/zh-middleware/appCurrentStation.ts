import { MiddlewareApiType, MiddlewareNextType, ActionType } from '../types'

import { ACTION } from '../stations/actions'
import { sApp } from '../selectors'

const appCurrentStation = ({ getState }: MiddlewareApiType) => 
  (next: MiddlewareNextType) => 
  (action: ActionType) => {
  if (action.type === ACTION.SET_CURRENT_STATION ||
      action.type === ACTION.ADD_CATEGORY) {
    action.currentStation = sApp.currentStation(getState())
  }
  return next(action);
}

export default appCurrentStation
