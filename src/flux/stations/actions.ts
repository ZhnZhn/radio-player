import { isAction  } from "redux";

import { 
  CategoriesType, 
  StationType 
} from "../../sound/types";

export const ADD_CATEGORY = 'ADD_CATEGORY'
type ADD_CATEGORY_TYPE = typeof ADD_CATEGORY

export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'

export const SET_CURRENT_STATION = 'SET_CURRENT_STATION'
type SET_CURRENT_STATION_TYPE = typeof SET_CURRENT_STATION


const addCategory = (category: CategoriesType) => ({
  type: ADD_CATEGORY,
  category
})

type ADD_CATEGORY_ACTION_TYPE = object & { 
  type: ADD_CATEGORY_TYPE
  category: CategoriesType
  categories: void | StationType[] 
}

export const isAddCategortyAction = (action: unknown): action is ADD_CATEGORY_ACTION_TYPE => isAction(action)  
  && action.type === ADD_CATEGORY
  && 'category' in action
  
type SET_CURRENT_STATION_ACTIONS_TYPE = object & {
  type: ADD_CATEGORY_TYPE | SET_CURRENT_STATION_TYPE
  currentStation: void | StationType
}

export const isSetCurrentStationActions = (action: unknown): action is SET_CURRENT_STATION_ACTIONS_TYPE => isAction(action)
  && (action.type === ADD_CATEGORY || action.type === SET_CURRENT_STATION)

const removeCategory = (category: CategoriesType) => ({
  type: REMOVE_CATEGORY,
  category
})

const setCurrentStation = (station: StationType) => ({
  type: SET_CURRENT_STATION,
  station
})

const actions = {
  addCategory,
  removeCategory,
  setCurrentStation
};

export default actions
