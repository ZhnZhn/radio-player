import { CategoriesType, StationType } from "../../sound/types";
import { ActionHmType } from "../types";

const ADD_CATEGORY = 'ADD_CATEGORY'
type ADD_CATEGORY_TYPE = typeof ADD_CATEGORY

type StationActionType = ADD_CATEGORY_TYPE
 | 'REMOVE_CATEGORY'
 | 'SET_CURRENT_STATION'

export const ACTION: ActionHmType<StationActionType> = {
  ADD_CATEGORY: ADD_CATEGORY,
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  SET_CURRENT_STATION: 'SET_CURRENT_STATION'
};

const addCategory = (category: CategoriesType) => ({
  type: ACTION.ADD_CATEGORY,
  category
})

type ADD_CATEGORY_ACTION = object & { 
  type: ADD_CATEGORY_TYPE
  category: CategoriesType
  categories: void | StationType[] 
}

export const isAddCategortyAction = (action: unknown): action is ADD_CATEGORY_ACTION => action !== null
  && typeof action === "object"
  && 'type' in action
  && action.type === ADD_CATEGORY
  && 'category' in action
  

const removeCategory = (category: CategoriesType) => ({
  type: ACTION.REMOVE_CATEGORY,
  category
})

const setCurrentStation = (station: StationType) => ({
  type: ACTION.SET_CURRENT_STATION,
  station
})

const actions = {
  addCategory,
  removeCategory,
  setCurrentStation
};

export default actions
