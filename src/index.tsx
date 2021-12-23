import { render } from 'preact';
import { Provider } from 'react-redux';

import store from './flux/store';
import crAppContextValue from './components/crAppContextValue';

import AppContext from './components/AppContext';
import HotKeysContext from './components/hotkeys/HotKeysContext';
import crHotKeysValue from './components/hotkeys/crHotKeysValue';
import App from './components/App';

const value = crAppContextValue(store);
const hmHotKeys = crHotKeysValue();

render(
  (
    <Provider store={store}>
      <HotKeysContext.Provider value={hmHotKeys}>
        <AppContext.Provider value={value}>
          <App />
        </AppContext.Provider> 
      </HotKeysContext.Provider>
    </Provider>
  ),
  document.getElementById("app") as HTMLElement
);
