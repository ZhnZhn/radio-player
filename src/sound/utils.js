
import categories from './categories'
import router from './router'

const utils = {
  isHttp: (src='') => src.split('://')[0] === 'http',

  filterCategoriesBy: (filterBy) => categories
    .filter(category => router
      .getCategory(category)
      .some(filterBy)
    ),

  crCategories: () => [...categories],
  getCategory: router.getCategory,

  crFilterBy: filter => {
    switch(filter){
      case 'http': return item => utils.isHttp(item.src);
      case 'https': return item => !utils.isHttp(item.src);
      default: return () => true;
    }
  }
}

export default utils
