'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  TITLE: {
    color: '#64e346',
    marginLeft: 8,
    fontWeight: 600
  },
  MSG_ERR: {
    color: '#673ab7'
  }
};

var Title = function Title(_ref) {
  var station = _ref.station,
      msgErr = _ref.msgErr,
      title = _ref.title;

  var _title = station && station.title || '',
      _msgErrOrTitle = msgErr ? msgErr + ' ' + _title : _title || title,
      _style = !msgErr ? S.TITLE : (0, _extends3.default)({}, S.TITLE, S.MSG_ERR);
  return _react2.default.createElement(
    'div',
    { style: _style },
    _msgErrOrTitle
  );
};

exports.default = Title;
//# sourceMappingURL=Title.js.map