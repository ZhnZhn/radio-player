import { createStore, applyMiddleware, compose } from 'redux'

//import CONF from './appConf'
import rootReducer from './rootReducer'
import initialState from './initialState'
//import middlewares from './zh-middleware/middlewares'

const _middlewares = [
  //...middlewares
];

let _composeEnhancer = compose;
/*eslint-disable no-undef, no-console*/
if (process.env.NODE_ENV === 'development'){
    _composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
       || compose

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


const _getInitialState = () => {
  let _initialState;
  /*
  try {
    const _str = window.localStorage
      .getItem(CONF.STORAGE_KEY);
    if (_str) {
      _initialState = JSON.parse(_str)
    }
  } catch(e) {
     console.log(e.msg)
  }
  */
  return _initialState || initialState;
}

const store = createStore(
  rootReducer,
  _getInitialState(),
  _composeEnhancer(
    applyMiddleware(..._middlewares)
  )
);

export default store
