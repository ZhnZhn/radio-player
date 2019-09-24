import React from 'react'

import actions from '../flux/app/actions'
import selectors from '../flux/selectors'
import uiThemeImpl from './ui-theme/uiTheme'

const AppContext = React.createContext();

AppContext.value = {
  ...actions,
  ...selectors,
  uiThemeImpl
}

export default AppContext
