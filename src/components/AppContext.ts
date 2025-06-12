import crAppContextValue from './crAppContextValue';

import { createContext } from './uiApi';

type AppContextType = ReturnType<typeof crAppContextValue>
const AppContext = createContext<AppContextType>({} as AppContextType)

export default AppContext
