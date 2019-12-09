"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _selectors = require("../../flux/selectors");

var _actions = require("../../flux/app/actions");

var _uiTheme = _interopRequireDefault(require("../ui-theme/uiTheme"));

var _has = _interopRequireDefault(require("../has"));

var CL = {
  DRAWER_BT: 'drawer-bt',
  DRAWER_SPAN: 'drawer-span',
  DRAWER_SVG: 'drawer-svg',
  DRAWER: 'drawer',
  DRAWER_MODAL: 'drawer-modal'
};
var S = {
  BT_DRAWER: {
    position: 'absolute',
    top: 8,
    right: 18
  },
  DRAWER_OFF: {
    //transform: 'translateX(-264px)',
    transform: 'translateX(264px)',
    pointerEvents: 'none'
  },
  DRAWER_ON: {
    transform: 'translate(0px, 0px)'
  },
  MODAL_OFF: {
    display: 'none',
    opacity: 0,
    zIndex: -1,
    transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  MODAL_ON: {
    display: 'block',
    opacity: 1,
    zIndex: 1000,
    transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  }
};

var Drawer =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(Drawer, _Component);

  function Drawer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._hTransitionEnd = function () {
      if (!_this.props.isOpen) {
        _this._wrapperNode.style.display = 'none';
      }
    };

    _this._setBodyOverflowY = function () {
      var isOpen = _this.props.isOpen;

      if (isOpen) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    };

    _this._setWrapperStyleToBlock = function () {
      if (_this.props.isOpen && _this._wrapperNode) {
        _this._wrapperNode.style.display = 'block';
      }
    };

    _this._refAside = function (node) {
      return _this._asideNode = node;
    };

    _this._refWrapper = function (node) {
      return _this._wrapperNode = node;
    };

    return _this;
  }

  var _proto = Drawer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (_has["default"].TRANSITION) {
      this._asideNode.addEventListener('transitionend', this._hTransitionEnd);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (_has["default"].TRANSITION) {
      this._asideNode.removeEventListener('transitionend', this._hTransitionEnd);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this._setBodyOverflowY();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        uiTheme = _this$props.uiTheme,
        btStyle = _this$props.btStyle,
        toggleDrawer = _this$props.toggleDrawer,
        children = _this$props.children,
        _asideStyle = (0, _extends2["default"])({}, isOpen ? S.DRAWER_ON : S.DRAWER_OFF, {}, _uiTheme["default"].toBg(uiTheme)),
        _drawerModalStyle = isOpen ? S.MODAL_ON : S.MODAL_OFF,
        _onClickWrapper = isOpen ? toggleDrawer : void 0;

    this._setWrapperStyleToBlock();

    return [_react["default"].createElement("button", {
      key: "bt-drawer",
      className: CL.DRAWER_BT,
      style: (0, _extends2["default"])({}, S.BT_DRAWER, {}, btStyle),
      "aria-label": "Open Drawer",
      onClick: toggleDrawer
    }, _react["default"].createElement("span", {
      className: CL.DRAWER_SPAN
    }, _react["default"].createElement("svg", {
      className: CL.DRAWER_SVG,
      focusable: "false",
      viewBox: "0 0 24 24",
      "aria-hidden": "true"
    }, _react["default"].createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), _react["default"].createElement("path", {
      d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    })))), _react["default"].createElement("div", {
      key: "wrapper",
      "aria-hidden": !isOpen,
      className: CL.DRAWER_MODAL,
      style: _drawerModalStyle,
      onClick: _onClickWrapper
    }), _react["default"].createElement("aside", {
      ref: this._refAside,
      key: "aside",
      className: CL.DRAWER,
      style: _asideStyle
    }, _react["default"].createElement("div", {
      ref: this._refWrapper
    }, children))];
  };

  return Drawer;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: _selectors.sApp.isDrawer(state),
    uiTheme: _selectors.sApp.uiTheme(state)
  };
};

var mapDispatchToProps = {
  toggleDrawer: _actions.toggleDrawer
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Drawer);

exports["default"] = _default;
//# sourceMappingURL=Drawer.js.map