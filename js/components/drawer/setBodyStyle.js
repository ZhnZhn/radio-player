'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BG = {
  '1': 'grey',
  '2': '#e1e1e1',
  '3': '#e8e0cb'
};

var setBodyStyle = function setBodyStyle(value) {
  var _color = BG['' + value];
  if (_color) {
    document.body.style.backgroundColor = _color;
  }
};

exports.default = setBodyStyle;
//# sourceMappingURL=setBodyStyle.js.map