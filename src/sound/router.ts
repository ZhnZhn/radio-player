import type { 
  CategoriesRouterType, 
  CategoriesType, 
  StationType 
} from './types';

import alternative from './alternative';
import classical from './classical';
import country from './country';
import talks from './talks';
import sport from './sport';
import chillout from './chillout';
import pop from './pop';
import piano from './piano';
import instrumental from './instrumental';

const _hm: CategoriesRouterType = {
  alternative,
  classical,
  country,
  talks,
  sport,
  chillout,
  pop,
  piano,
  instrumental
};

export const getByCategory = (
  category?: CategoriesType
): StationType[] => category && _hm[category] || []

