import type { CategoriesType } from '../../sound/types';

import { isNotEmptyStr } from '../../utils/isTypeFn';
import { toFirstUpperCase } from '../../utils/strFn';

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