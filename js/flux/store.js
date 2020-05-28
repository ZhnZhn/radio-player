"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _redux = require("redux");

var _rootReducer = _interopRequireDefault(require("./rootReducer"));

var _initialState2 = _interopRequireDefault(require("./initialState"));

var _middlewares2 = _interopRequireDefault(require("./zh-middleware/middlewares"));

//import CONF from './appConf'
var _middlewares = [].concat(_middlewares2["default"]);

var _composeEnhancer = _redux.compose;
/*eslint-disable no-undef, no-console*/

if (process.env.NODE_ENV === 'development') {
  _composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

  var logger = function logger(store) {
    return function (next) {
      return function (action) {
        var result;

        try {
          console.group('dispatching', action);
          console.log('before', store.getState());
          result = next(action);
          console.log('after', store.getState());
          console.groupEnd();
          return result;
        } catch (err) {
          console.log(err);
          return result;
        }
      };
    };
  };

  _middlewares.push(logger);
}
/*eslint-enable no-undef, no-console*/


var _getInitialState = function _getInitialState() {
  var _initialState;
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


  return _initialState || _initialState2["default"];
};

var store = (0, _redux.createStore)(_rootReducer["default"], _getInitialState(), _composeEnhancer(_redux.applyMiddleware.apply(void 0, _middlewares)));
var _default = store;
exports["default"] = _default;
//# sourceMappingURL=store.js.map