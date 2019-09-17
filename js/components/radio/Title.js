'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  TITLE: 'audio__title',
  ERR: 'audio__title audio__title--err'
};

var Title = function Title(_ref) {
  var station = _ref.station,
      msgErr = _ref.msgErr,
      title = _ref.title;

  var _title = station && station.title || '',
      _msgErrOrTitle = msgErr ? msgErr + ' ' + _title : _title || title,
      _cl = msgErr ? CL.ERR : CL.TITLE;
  return _react2.default.createElement(
    'div',
    { className: _cl },
    _msgErrOrTitle
  );
};

exports.default = Title;
//# sourceMappingURL=Title.js.map