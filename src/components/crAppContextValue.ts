import { bindActionCreators, Store } from 'redux'
import { useSelector } from 'react-redux'

import { appActions } from '../flux/app/actions'
import { stationActions } from '../flux/stations/actions'
import selectors from '../flux/selectors'
import uiThemeImpl from './ui-theme/uiTheme'

const crAppContextValue = ({ dispatch }: Store) => ({
    ...bindActionCreators(appActions, dispatch),
    ...bindActionCreators(stationActions, dispatch),
    ...selectors,
    useSelector,
    uiThemeImpl
})

export default crAppContextValue