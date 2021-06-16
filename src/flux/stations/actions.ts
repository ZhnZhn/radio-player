import { CategoriesType, StationType } from "../../sound/types";
import { ActionHmType } from "../types";

type StationActionType = 'ADD_CATEGORY'
| 'REMOVE_CATEGORY'
| 'SET_CURRENT_STATION'

export const ACTION: ActionHmType<StationActionType> = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  SET_CURRENT_STATION: 'SET_CURRENT_STATION'
};

const addCategory = (category: CategoriesType) => ({
  type: ACTION.ADD_CATEGORY,
  category
})

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
