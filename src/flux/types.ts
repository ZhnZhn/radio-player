export { Middleware, MiddlewareAPI, Dispatch } from 'redux';

import { UiThemeType } from '../components/ui-theme/types';
import { CategoriesType, StationType } from '../sound/types';

export type StateAppSlice = {
  isDrawer: boolean,
  filter: string,
  currentStation?: StationType,
  uiTheme: UiThemeType
}
 

export type CategoriesSlice = {
  [PropName in CategoriesType]?: boolean  
}

  
export type StateRoot = {
  app: StateAppSlice
  topics: CategoriesType[],
  categories: CategoriesSlice,
  stations: StationType[]
}


export type ActionHmType<T extends string> = {
  [Key in T] : Key
}

export type ActionType = {
  type: string,
  uiTheme?: UiThemeType,
  filter?: string,
  station?: StationType,

  currentStation?: StationType,
  category?: CategoriesType,  
  categories?: StationType[]
}