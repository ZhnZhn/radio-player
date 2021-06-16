import { StationFilterType, ProtocolType } from './types';

import categories from './categories';
import router from './router';

const utils = {
  isHttp: (src='') => src.split('://')[0] === 'http',

  filterCategoriesBy: (filterBy: StationFilterType) => categories
    .filter(category => router
      .getCategory(category)
      .some(filterBy)
    ),

  crCategories: () => [...categories],
  getCategory: router.getCategory,

  crFilterBy: (filter: ProtocolType): StationFilterType => {
    switch(filter){
      case 'http': return station => utils.isHttp(station.src);
      case 'https': return station => !utils.isHttp(station.src);
      default: return () => true;
    }
  }
};

export default utils
