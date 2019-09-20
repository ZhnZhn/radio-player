import React from 'react'

import { connect } from 'react-redux'
import { setUiTheme } from '../../flux/app/actions'

import SvgClose from '../zhn/SvgClose'
import BtTriple from '../zhn/BtTriple'
import CategoriesList from './CategoriesList'
import S from './style'

const DrawerMenu = ({
  setUiTheme,
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
        onClick={setUiTheme}
      />
      <SvgClose
        className={S.CL_BT_CLOSE}  
        onClick={onCloseDrawer}
      />
    </div>
    <CategoriesList categories={categories} />
  </div>
);

const mapDispatchToProps = {
  setUiTheme
};

export default connect(
  null,
  mapDispatchToProps
)(DrawerMenu)
