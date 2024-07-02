import { useContext } from '../uiApi';

import AppContext from '../AppContext';

import SvgChecked from '../zhn/SvgChecked';
import FlatButton  from '../zhn-m/FlatButton';
import { CL_BT } from './style';

const SVG_CHECKED_COLOR = '#00bcd4';

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
  <ul>
    {
      topics.map(category => {
        const _is = isCategories[category];
        return (
          <li key={category}>
            <FlatButton
              className={CL_BT}
              caption={category}
              timeout={0}
              tabIndex={btTabIndex}
              onClick={_is
                ? () => removeCategory(category)
                : () => addCategory(category)
              }
            >
              { _is && <SvgChecked color={SVG_CHECKED_COLOR} /> }
            </FlatButton>
          </li>
        )
      })
    }
  </ul>
  );
}


export default CategoriesList
