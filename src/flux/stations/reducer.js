import { ACTION } from './actions'

const fByTitle = title =>
  item => item.title !== title;
const fByCategory = category =>
  item => item.category !== category;

const _findByCategory = (arr, category) => {
  const _max = arr.length;
  for (let i=0; i<_max; i++) {
    if (arr[i].category === category) {
      return arr[i];
    }
  }
};

const reducer = function(state={}, action){
  switch(action.type){
    case ACTION.ADD_CATEGORY: {
      const { categories, category, currentStation } = action
      , { title } = currentStation || {}
      , _stationsWithoutCurrent = categories.filter(fByTitle(title))
      , _station = _findByCategory(state, category)
      , _categories = _station
           ? _stationsWithoutCurrent.filter(fByTitle(_station.title))
           : _stationsWithoutCurrent;
      return [ ..._categories, ...state ];
    }
    case ACTION.REMOVE_CATEGORY: {
      const { category } = action;
      return state.filter(fByCategory(category));
    }
    case ACTION.SET_CURRENT_STATION: {
      const { station, currentStation } = action
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
