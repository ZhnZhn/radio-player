import { CategoriesType, StationType } from '../../sound/types';
import { ActionType } from '../types';

import initialState from '../initialState';
import { 
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SET_CURRENT_STATION
} from './actions';

const fByTitle = (title='') =>
  (item: StationType) => item.title !== title;
const fByCategory = (category?: CategoriesType) =>
  (item: StationType) => item.category !== category;

const _findByCategory = (
  arr: StationType[], 
  category?: CategoriesType
  ) => {
  const _max = arr.length;
  for (let i=0; i<_max; i++) {
    if (arr[i].category === category) {
      return arr[i];
    }
  }
};

const reducer = (
  state=initialState.stations, 
  action: ActionType
) => {
  switch(action.type){
    case ADD_CATEGORY: {
      const { 
        categories, 
        category, 
        currentStation 
      } = action
      , { title } = currentStation || {}
      , _stationsWithoutCurrent = (categories || []).filter(fByTitle(title))
      , _station = _findByCategory(state, category)
      , _categories = _station
           ? _stationsWithoutCurrent.filter(fByTitle(_station.title))
           : _stationsWithoutCurrent;      
      return [..._categories, ...state];
    }
    case REMOVE_CATEGORY: {
      const { 
        category 
      } = action;
      return state.filter(fByCategory(category));
    }
    case SET_CURRENT_STATION: {
      const { 
        station, 
        currentStation 
      } = action
      , { title } = station || {}
      , _stations = state.filter(fByTitle(title));

      if (currentStation) {
        _stations.unshift(currentStation)
      }
      return _stations;
    }    
    default:
      return state;
  }
}

export default reducer
