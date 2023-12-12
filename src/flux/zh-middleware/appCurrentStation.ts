import type { Middleware } from '../types';

import { isSetCurrentStationActions } from '../stations/actions';
import { sApp } from '../selectors';

const appCurrentStation: Middleware = (
  { getState }
  ) => (next) => (action) => {
  if (isSetCurrentStationActions(action)) {
    action.currentStation = sApp.currentStation(getState())
  }
  return next(action);
}

export default appCurrentStation
