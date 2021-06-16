import { CategoriesType } from '../../sound/types';

import S from './StationDescrStyle';

interface CategoryProps {
  category?: CategoriesType;
  br?: number;
}

const _isStrNotEmpty = (str?: string) => str
  && typeof str === 'string';
const _toFirstUpperCase = (str: string) => str[0].toUpperCase()
  + str.substring(1);

const Category = ({ category, br }: CategoryProps) => {
   if (!_isStrNotEmpty(category)) return null;
   const _kbps = br ? ` (${br} Kbps)` : '';
   return (
     <div>
       <span style={S.TITLE}>
         Category:
       </span>&nbsp;
       <span style={S.CATEGORY}>
        {_toFirstUpperCase(category as string)}{_kbps}
       </span>
     </div>
   );
}

export default Category