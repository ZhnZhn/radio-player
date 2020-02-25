import React from 'react'

import { connect } from 'react-redux'
import {
  addCategory,
  removeCategory
} from '../../flux/stations/actions'

import SvgChecked from '../zhn/SvgChecked'
import FlatButton  from '../zhn-m/FlatButton'
import S from './style'

const CategoriesList = ({
  filter,
  topics,
  isCategories,
  addCategory,
  removeCategory
}) => (
  <ul style={S.UL}>
    {
      topics.map(category => {
        const _is = isCategories[category];
        return (
          <li key={category}>
            <FlatButton
              className={S.CL_BT}
              caption={category}
              onClick={_is
                ? () => removeCategory(category)
                : () => addCategory(category, filter)
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

const mapStateToProps = state => ({
  filter: state.app.filter,
  topics: state.topics,
  isCategories: state.categories
})

const mapDispatchToProps = {
  addCategory,
  removeCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesList)
