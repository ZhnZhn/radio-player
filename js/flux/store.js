'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _redux = require('redux');

var _rootReducer = require('./rootReducer');

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _initialState2 = require('./initialState');

var _initialState3 = _interopRequireDefault(_initialState2);

var _middlewares2 = require('./zh-middleware/middlewares');

var _middlewares3 = _interopRequireDefault(_middlewares2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _middlewares = [].concat((0, _toConsumableArray3.default)(_middlewares3.default));

//import CONF from './appConf'


var _composeEnhancer = _redux.compose;
/*eslint-disable no-undef, no-console*/
if (process.env.NODE_ENV === 'development') {
  _composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

  var logger = function logger(store) {
    return function (next) {
      return function (action) {
        var result = void 0;
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
  var _initialState = void 0;
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
  return _initialState || _initialState3.default;
};

var store = (0, _redux.createStore)(_rootReducer2.default, _getInitialState(), _composeEnhancer(_redux.applyMiddleware.apply(undefined, (0, _toConsumableArray3.default)(_middlewares))));

exports.default = store;
//# sourceMappingURL=store.js.map