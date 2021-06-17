import crAppContextValue from './crAppContextValue';

import { createContext } from 'react';

const AppContext = createContext<ReturnType<typeof crAppContextValue>>({} as any)

export default AppContext
