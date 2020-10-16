import { useContext } from 'react'

import AppContext from '../AppContext'
import useSwipeGesture from '../hooks/useSwipeGesture'

import SvgClose from '../zhn/SvgClose'
import BtTriple from '../zhn/BtTriple'
import CategoriesList from './CategoriesList'
import S from './style'

const DrawerMenu = () => {
  const {
    setUiTheme,
    toggleDrawer,
    setSrcFilter
  } = useContext(AppContext)
  , _handlers = useSwipeGesture({
       onSwipeGesture: toggleDrawer, dir: 'R'
    });
  return (
    <div className={S.CL_ROOT} {..._handlers}>
      <div className={S.CL_HEADER}>
        <BtTriple
          style={S.BT_TRIPLE}
          oneC="GREY"
          twoC="LIGHT"
          threeC="SAND"
          onClick={setUiTheme}
        />
        <SvgClose
          className={S.CL_BT_CLOSE}
          onClick={toggleDrawer}
        />
      </div>
      <CategoriesList />
      <div className={S.CL_HEADER}>
        <BtTriple
          style={S.BT_TRIPLE}
          initialValue={2}
          oneC="ALL"
          twoC="HTTPS"
          threeC="HTTP"
          onClick={setSrcFilter}
        />
      </div>
    </div>
  );
}

export default DrawerMenu
