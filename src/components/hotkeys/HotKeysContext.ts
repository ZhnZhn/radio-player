import { createContext } from '../uiApi';

import crHotKeysValue from './crHotKeysValue';

const HotKeysContext = createContext<ReturnType<typeof crHotKeysValue>>({})

export default HotKeysContext