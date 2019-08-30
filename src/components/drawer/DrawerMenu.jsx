import React from 'react'

import { connect } from 'react-redux'
import {
  addCategory,
  removeCategory
} from '../../flux/stations/actions'

import SvgClose from '../zhn/SvgClose'
import BtTriple from '../zhn/BtTriple'
import SvgChecked from '../zhn/SvgChecked'
import FlatButton  from '../zhn-m/FlatButton'
import setBodyStyle from './setBodyStyle'


const CL = {
  HEADER: 'drawer__title',
  ROOT: 'drawer__list',
  BT: 'drawer__list-bt'
};

const S = {
  HEADER: {
    paddingTop: 12,
    paddingBottom: 8
  },
  BT_TRIPLE: {
    marginRight: 8
  },
  BT_CLOSE: {
    position: 'relative',
    top: 4
  },
  UL: {
    listStyleType: 'none'
  }
};

const DrawerMenu = ({  
  onCloseDrawer,
  categories,
  isCategories,
  addCategory,
  removeCategory
}) => (
  <div className={CL.ROOT}>
    <div
      className={CL.HEADER}
      style={S.HEADER}
    >
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
    <ul style={S.UL}>
      {
        categories.map(category => {
          const _is = isCategories[category];
          return (
            <li key={category}>
              <FlatButton
                className={CL.BT}
                caption={category}
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
  </div>
)


const mapStateToProps = state => ({
  isCategories: state.categories
})

const mapDispatchToProps = {
  addCategory,
  removeCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerMenu)
