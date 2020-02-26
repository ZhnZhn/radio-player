"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));

var CL = {
  BT: 'bt-flat',
  BT_DIV: 'bt-flat__div',
  BT_SPAN: 'bt-flat__span'
};
var S = {
  PRIMARY: {
    color: '#607d8b'
  }
};
var POINTER_EVENTS = 'pointer-events';

var FlatButton = function FlatButton(_ref) {
  var innerRef = _ref.innerRef,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 500 : _ref$timeout,
      className = _ref.className,
      rootStyle = _ref.rootStyle,
      _ref$clDiv = _ref.clDiv,
      clDiv = _ref$clDiv === void 0 ? CL.BT_DIV : _ref$clDiv,
      clCaption = _ref.clCaption,
      isPrimary = _ref.isPrimary,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      onClick = _ref.onClick,
      children = _ref.children;

  var _refBt = (0, _react.useRef)(),
      _setPointerEvents = (0, _react.useCallback)(function (value) {
    if (value === void 0) {
      value = 'auto';
    }

    if (_refBt.current) {
      _refBt.current.style[POINTER_EVENTS] = value;
    }
  }, []),
      _hClick = (0, _react.useCallback)(function (event) {
    if (timeout !== 0) {
      _setPointerEvents('none');

      setTimeout(_setPointerEvents, timeout);
    }

    onClick(event);
  }, [timeout, onClick]);

  (0, _react.useImperativeHandle)(innerRef, function () {
    return {
      focus: function focus() {
        if (_refBt.current) {
          _refBt.current.focus();
        }
      }
    };
  });

  var _style = isPrimary ? (0, _extends2["default"])({}, rootStyle, {}, S.PRIMARY) : rootStyle,
      _className = className ? CL.BT + " " + className : CL.BT,
      _clCaption = clCaption ? CL.BT_SPAN + " " + clCaption : CL.BT_SPAN,
      _title = accessKey ? title + " [" + accessKey + "]" : title;

  return _react["default"].createElement("button", {
    ref: _refBt,
    className: _className,
    style: _style,
    accessKey: accessKey,
    tabIndex: 0,
    title: _title,
    onClick: _hClick
  }, _react["default"].createElement("div", {
    className: clDiv
  }, _react["default"].createElement(_CaptionInput["default"], {
    className: _clCaption,
    caption: caption,
    accessKey: accessKey
  }), children));
};

var _default = FlatButton;
exports["default"] = _default;
//# sourceMappingURL=FlatButton.js.map