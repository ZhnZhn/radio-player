import React from 'react'

import selectors from '../flux/selectors'
import uiThemeImpl from './ui-theme/uiTheme'

const DiContext = React.createContext();

DiContext.value = {
  ...selectors,
  uiThemeImpl
}

export default DiContext
