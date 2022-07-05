import type { CategoriesType } from '../../sound/types';

import {
  S_TITLE,
  S_CATEGORY
} from './StationDescrStyle';

interface CategoryProps {
  category?: CategoriesType;
  br?: number;
}

const _isStrNotEmpty = (str?: string) => str
  && typeof str === 'string';
const _toFirstUpperCase = (str: string) => str[0].toUpperCase()
  + str.substring(1);

const Category = ({ 
  category, 
  br 
}: CategoryProps) => {
   if (!_isStrNotEmpty(category)) return null;
   const _kbps = br ? ` (${br} Kbps)` : '';
   return (
     <div>
       <span style={S_TITLE}>
         Category:
       </span>&nbsp;
       <span style={S_CATEGORY}>
        {_toFirstUpperCase(category as string)}{_kbps}
       </span>
     </div>
   );
}

export default Category