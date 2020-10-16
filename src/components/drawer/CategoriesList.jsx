import { useContext } from 'react'

import AppContext from '../AppContext'

import SvgChecked from '../zhn/SvgChecked'
import FlatButton  from '../zhn-m/FlatButton'
import S from './style'

const CategoriesList = () => {
  const {
    sApp,
    addCategory,
    removeCategory,
    useSelector
  } = useContext(AppContext)
  , topics = useSelector(sApp.topics)
  , isCategories = useSelector(sApp.categories);
  return(
  <ul style={S.UL}>
    {
      topics.map(category => {
        const _is = isCategories[category];
        return (
          <li key={category}>
            <FlatButton
              className={S.CL_BT}
              caption={category}
              timeout={0}
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
