import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './flux/store';
import crAppContextValue from './components/crAppContextValue';
import AppContext from './components/AppContext';
import App from './components/App';

const value = crAppContextValue(store)

render(
  (
    <Provider store={store}>
      <AppContext.Provider value={value}>
        <App />
      </AppContext.Provider> 
    </Provider>
  ),
  document.getElementById("app")
);
