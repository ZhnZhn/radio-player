import { ACTION as AP } from '../app/actions'

import utils from '../../sound/utils'

const {
  isHttp,
  filterCategoriesBy,
  crCategories
} = utils;

const _crTopicsBy = filter => {
  const _filterBy = filter === 'https'
    ? item => !isHttp(item.src)
    : filter === 'http'
        ? item => isHttp(item.src)
        : void 0;
  return _filterBy
    ? filterCategoriesBy(_filterBy)
    : crCategories();
};

const reducer = (state={}, action) => {
  switch(action.type){
    case AP.SET_SRC_FILTER: {
      return _crTopicsBy(action.filter)
    }
    default: return state;
  }
}

export default reducer
