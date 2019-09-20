import React from 'react'

import selectors from '../flux/selectors'
import uiThemeImpl from './ui-theme/uiTheme'

const AppContext = React.createContext();

AppContext.value = {
  ...selectors,
  uiThemeImpl
}

export default AppContext
