import initialState from '../initialState';
import { ACTION as AP } from '../app/actions';

import utils from '../../sound/utils';
import { ActionType } from '../types';
import { StationType } from '../../sound/types';

const {
  isHttp,
  filterCategoriesBy,
  crCategories
} = utils;

const _crTopicsBy = (filter='') => {
  const _filterBy = filter === 'https'
    ? (item: StationType) => !isHttp(item.src)
    : filter === 'http'
        ? (item: StationType) => isHttp(item.src)
        : void 0;
  return _filterBy
    ? filterCategoriesBy(_filterBy)
    : crCategories();
};

const reducer = (state=initialState.topics, action: ActionType) => {
  switch(action.type){
    case AP.SET_SRC_FILTER: {
      return _crTopicsBy(action.filter)
    }
    default: return state;
  }
}

export default reducer
