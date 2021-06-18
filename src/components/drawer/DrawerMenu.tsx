import { useContext } from '../uiApi';

import AppContext from '../AppContext';
import useSwipeGesture from '../hooks/useSwipeGesture';

import SvgClose from '../zhn/SvgClose';
import BtTriple from '../zhn/BtTriple';
import CategoriesList from './CategoriesList';
import CL from './style';

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
    <div className={CL.ROOT} {..._handlers}>
      <div className={CL.HEADER}>
        <BtTriple
          className={CL.BT_TRIPLE}
          oneC="GREY"
          twoC="LIGHT"
          threeC="SAND"
          onClick={setUiTheme}
        />
        <SvgClose
          className={CL.BT_CLOSE}
          onClick={toggleDrawer}
        />
      </div>
      <CategoriesList />
      <div className={CL.HEADER}>
        <BtTriple
          className={CL.BT_TRIPLE}
          initialValue="2"
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
