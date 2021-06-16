import { StateRoot } from "./types";

export const sApp = {
  app: (state: StateRoot) => state.app || {},
  isDrawer: (state: StateRoot) => sApp.app(state).isDrawer,
  currentStation: (state: StateRoot) => sApp.app(state).currentStation,
  uiTheme: (state: StateRoot) => sApp.app(state).uiTheme,

  topics: (state: StateRoot) => state.topics || [],
  categories: (state: StateRoot) => state.categories || [],
  stations: (state: StateRoot) => state.stations || []
};

const selectors = {
  sApp
};

export default selectors
