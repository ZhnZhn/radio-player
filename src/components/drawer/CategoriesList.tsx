import { CSSProperties } from "../types";
import { useContext } from 'react';

import AppContext from '../AppContext';

import SvgChecked from '../zhn/SvgChecked';
import FlatButton  from '../zhn-m/FlatButton';
import CL from './style';

const S_UL: CSSProperties = {
  listStyleType: 'none'
};

const CategoriesList = () => {
  const {    
    sApp,
    addCategory,
    removeCategory,
    useSelector
  } = useContext(AppContext)
  , topics = useSelector(sApp.topics)
  , isCategories = useSelector(sApp.categories)
  , isOpen = useSelector(sApp.isDrawer)
  , btTabIndex = isOpen ? 0 : -1;
  return(
  <ul style={S_UL}>
    {
      topics.map(category => {
        const _is = isCategories[category];
        return (
          <li key={category}>
            <FlatButton
              className={CL.BT}
              caption={category}
              timeout={0}
              tabIndex={btTabIndex}
              onClick={_is
                ? () => removeCategory(category)
                : () => addCategory(category)
              }
            >
              { _is && <SvgChecked /> }
            </FlatButton>
          </li>
        )
      })
    }
  </ul>
  );
}


export default CategoriesList
