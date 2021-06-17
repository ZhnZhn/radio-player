import { CSSProperties } from "../types";
import { useContext } from 'react';

import AppContext from '../AppContext';
import useSwipeGesture from '../hooks/useSwipeGesture';

import SvgClose from '../zhn/SvgClose';
import BtTriple from '../zhn/BtTriple';
import CategoriesList from './CategoriesList';
import CL from './style';

const S_BT_TRIPLE: CSSProperties = {
  marginRight: 8
};

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
          style={S_BT_TRIPLE}
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
          style={S_BT_TRIPLE}
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
