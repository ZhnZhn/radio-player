'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import withTheme from '../hoc/withTheme'
//import styleConfig from '../style/Comp.Style'

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
    top: 4,
    right: 16
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

var Drawer = function (_Component) {
  (0, _inherits3.default)(Drawer, _Component);

  function Drawer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Drawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isOpen: false }, _this._setBodyOverflowY = function () {
      var isOpen = _this.state.isOpen;

      if (isOpen) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    }, _this._hToggle = function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      }, _this._setBodyOverflowY);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Drawer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btStyle = _props.btStyle,
          children = _props.children,
          isOpen = this.state.isOpen,
          _drawerStyle = isOpen ? S.DRAWER_ON : S.DRAWER_OFF,
          _drawerModalStyle = isOpen ? S.MODAL_ON : S.MODAL_OFF,
          _onClickWrapper = isOpen ? this._hToggle : undefined;
      //, TS = theme.createStyle(styleConfig);    


      return [_react2.default.createElement(
        'button',
        {
          key: 'bt-drawer',
          className: CL.DRAWER_BT,
          style: (0, _extends3.default)({}, S.BT_DRAWER, btStyle),
          'aria-label': 'Open Drawer',
          onClick: this._hToggle
        },
        _react2.default.createElement(
          'span',
          { className: CL.DRAWER_SPAN },
          _react2.default.createElement(
            'svg',
            {
              className: CL.DRAWER_SVG,
              focusable: 'false',
              viewBox: '0 0 24 24',
              'aria-hidden': 'true'
            },
            _react2.default.createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
            _react2.default.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
          )
        )
      ), _react2.default.createElement('div', {
        key: 'wrapper',
        'aria-hidden': !isOpen,
        className: CL.DRAWER_MODAL,
        style: _drawerModalStyle,
        onClick: _onClickWrapper
      }), _react2.default.createElement(
        'aside',
        {
          key: 'aside',
          className: CL.DRAWER
          //style={{ ..._drawerStyle, ...TS.COMP }}
          , style: _drawerStyle
        },
        _react2.default.cloneElement(children, {
          onCloseDrawer: this._hToggle
        })
      )];
    }
  }]);
  return Drawer;
}(_react.Component);

exports.default = Drawer;
//export default withTheme(Drawer)
//# sourceMappingURL=Drawer.js.map