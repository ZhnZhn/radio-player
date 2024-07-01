import type { CategoriesType } from '../../sound/types';

import {
  isNotEmptyStr,
  toFirstUpperCase
} from '../uiApi';

import { S_CATEGORY } from './StationDescrStyle';

interface CategoryProps {
  category?: CategoriesType;
  br?: number;
}

const Category = ({ 
  category, 
  br 
}: CategoryProps) => {      
   return isNotEmptyStr(category) ? (
     <div style={S_CATEGORY}>              
        {toFirstUpperCase(category)}{br ? ` (${br} Kbps)` : ''}       
     </div>
   ) : null;
}

export default Category