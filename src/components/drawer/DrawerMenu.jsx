import React from 'react'

import SvgClose from '../zhn/SvgClose'
import BtTriple from '../zhn/BtTriple'
import CategoriesList from './CategoriesList'
import setBodyStyle from './setBodyStyle'
import S from './style'

const DrawerMenu = ({
  onCloseDrawer,
  categories
}) => (
  <div className={S.CL_ROOT}>
    <div className={S.CL_HEADER}>
      <BtTriple
        style={S.BT_TRIPLE}
        oneC="GREY"
        twoC="LIGHT"
        threeC="SAND"
        onClick={setBodyStyle}
      />
      <SvgClose
        style={S.BT_CLOSE}
        onClick={onCloseDrawer}
      />
    </div>
    <CategoriesList categories={categories} />
  </div>
);

export default DrawerMenu
