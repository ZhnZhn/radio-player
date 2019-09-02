'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isTransition = function _isTransition() {
  return document && document.body.style.transition !== void 0;
};

var _isTouchable = function _isTouchable() {
  return document && 'ontouchstart' in document.documentElement;
};

var _isMediaSession = function _isMediaSession() {
  return navigator && 'mediaSession' in navigator;
};

var HAS = {
  TRANSITION: _isTransition(),
  TOUCH: _isTouchable(),
  MEDIA_SESSION: _isMediaSession()
};

exports.default = HAS;
//# sourceMappingURL=has.js.map