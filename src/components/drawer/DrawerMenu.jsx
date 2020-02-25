import React, { useContext, useCallback } from 'react'

import { useDispatch } from 'react-redux'

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
  , dispatch = useDispatch()
  , _setUiTheme = useCallback((uiThemeIndex) => dispatch(setUiTheme(uiThemeIndex)), [])
  , _onCloseDrawer = useCallback(() => dispatch(toggleDrawer()), [])
  , _setFilter = useCallback((srcFilterIndex) => dispatch(setSrcFilter(srcFilterIndex)), [])
  , _handlers = useSwipeGesture({ onSwipeGesture: _onCloseDrawer, dir: 'R' });
  return (
    <div className={S.CL_ROOT} {..._handlers}>
      <div className={S.CL_HEADER}>
        <BtTriple
          style={S.BT_TRIPLE}
          oneC="GREY"
          twoC="LIGHT"
          threeC="SAND"
          onClick={_setUiTheme}
        />
        <SvgClose
          className={S.CL_BT_CLOSE}
          onClick={_onCloseDrawer}
        />
      </div>
      <CategoriesList />
      <div className={S.CL_HEADER}>
        <BtTriple
          style={S.BT_TRIPLE}
          oneC="ALL"
          twoC="HTTPS"
          threeC="HTTP"
          onClick={_setFilter}
        />
      </div>
    </div>
  );
}

export default DrawerMenu
