import React from 'react'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux'

import actions from '../flux/app/actions'
import stationActions from '../flux/stations/actions'
import selectors from '../flux/selectors'
import uiThemeImpl from './ui-theme/uiTheme'

const AppContext = React.createContext();

let _value;
AppContext.getValue = (dispatch) => {
  return _value || (_value = {
    ...bindActionCreators(actions, dispatch),
    ...bindActionCreators(stationActions, dispatch),
    ...selectors,
    useSelector,
    uiThemeImpl
  })
}

export default AppContext
