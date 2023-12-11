import { 
  legacy_createStore as createStore, 
  applyMiddleware, 
  compose 
} from 'redux';

import rootReducer from './rootReducer';
import initialState from './initialState';
import middlewares from './zh-middleware/middlewares';

const _middlewares = [
  ...middlewares
];

let _composeEnhancer = compose;
/*eslint-disable no-undef, no-console*/
if (process.env.NODE_ENV === 'development'){
    // @ts-expect-error window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    _composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
       || compose
    // @ts-expect-error store => next => action
    const logger = store => next => action => {
      let result;
      try {
        console.group('dispatching', action)
        console.log('before', store.getState())
        result = next(action)
        console.log('after', store.getState());
        console.groupEnd();
        return result;
      } catch (err){
        console.log(err);
        return result;
      }
    }
    _middlewares.push(logger)
 }
 /*eslint-enable no-undef, no-console*/

const store = createStore(
  rootReducer,
  initialState,
  _composeEnhancer(
    applyMiddleware(..._middlewares)
  )
);

export default store
