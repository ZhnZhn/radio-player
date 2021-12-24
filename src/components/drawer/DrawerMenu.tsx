import { useContext } from '../uiApi';

import AppContext from '../AppContext';
import useSwipeGesture from '../hooks/useSwipeGesture';

import SvgClose from '../zhn/SvgClose';
import BtTriple from '../zhn/BtTriple';
import CategoriesList from './CategoriesList';
import { 
  CL_ROOT, 
  CL_HEADER, 
  CL_BT_TRIPLE, 
  CL_BT_CLOSE 
} from './style';

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
    <div className={CL_ROOT} {..._handlers}>
      <div className={CL_HEADER}>
        <BtTriple
          className={CL_BT_TRIPLE}
          oneC="GREY"
          twoC="LIGHT"
          threeC="SAND"
          onClick={setUiTheme}
        />
        <SvgClose
          className={CL_BT_CLOSE}
          onClick={toggleDrawer}
        />
      </div>
      <CategoriesList />
      <div className={CL_HEADER}>
        <BtTriple
          className={CL_BT_TRIPLE}
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
