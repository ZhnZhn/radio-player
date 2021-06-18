import crAppContextValue from './crAppContextValue';

import { createContext } from './uiApi';

const AppContext = createContext<ReturnType<typeof crAppContextValue>>({} as any)

export default AppContext
