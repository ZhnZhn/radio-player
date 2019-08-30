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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 Mostly from
 https://github.com/callemall/material-ui/blob/master/src/Slider/Slider.js
*/

var S = {
  ROOT: {
    userSelect: 'none',
    cursor: 'default',
    height: '18px',
    width: '100%',
    position: 'relative',
    marginTop: '8px',
    marginBottom: '8px'
  },
  ROOT_LINE: {
    position: 'absolute',
    top: '8px',
    left: '0px',
    width: '100%',
    height: '2px'
  },
  LINE_BEFORE: {
    position: 'absolute',
    height: '100%',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    left: '0px',
    backgroundColor: 'rgb(0, 188, 212)',
    marginRight: '6px',
    width: 'calc(15%)'
  },
  LINE_AFTER: {
    position: 'absolute',
    height: '100%',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    right: '0px',
    backgroundColor: 'rgb(189, 189, 189)',
    marginLeft: '6px',
    width: 'calc(85%)'
  },
  LINE_HOVERED: {
    backgroundColor: 'rgb(158, 158, 158)'
  },
  ROOT_CIRCLE: {
    boxSizing: 'borderBox',
    position: 'absolute',
    cursor: 'pointer',
    pointerEvents: 'inherit',
    top: '0px',
    left: '15%',
    zIndex: '1',
    margin: '1px 0px 0px',
    width: '12px',
    height: '12px',
    backgroundColor: 'rgb(0, 188, 212)',
    backgroundClip: 'padding-box',
    border: '0px solid transparent',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'visible',
    outline: 'none',
    transition: 'background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  CIRCLE_DRAGGED: {
    width: '20px',
    height: '20px '
  },
  CIRCLE_INNER: {
    position: 'absolute',
    overflow: 'visible',
    height: '12px',
    width: '12px',
    top: '0px',
    left: '0px'
  },
  CIRCLE_INNER_EL: {
    position: 'absolute',
    height: '36px',
    width: '300%',
    borderRadius: '50%',
    //opacity: '0.16',
    backgroundColor: 'rgba(0, 188, 212, 0.16)',
    top: '-12px',
    left: '-12px',
    transform: 'scale(1)'
  },
  EMBER: {
    top: '-12px',
    left: '-12px',
    height: '44px',
    width: '220%',
    border: '1px solid #4caf50'
  }
};

var _round10 = function _round10(value, exp) {
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
  // Shift back
  value = value.toString().split('e');

  return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
};

var _addStep = function _addStep(value, step, exp) {
  return exp ? _round10(value + step, exp) : value + step;
};

var _toPercent = function _toPercent(value, min, max) {
  var _percent = (value - min) / (max - min);
  return Number.isNaN(_percent) ? 0 : _percent * 100;
};
var _calcWidth = function _calcWidth(percent) {
  return {
    width: 'calc(' + percent + '%)'
  };
};
var _crLeftStyle = function _crLeftStyle(percent) {
  return {
    left: percent + '%'
  };
};

var InputSlider = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(InputSlider, _Component);

  function InputSlider(props) {
    (0, _classCallCheck3.default)(this, InputSlider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputSlider.__proto__ || Object.getPrototypeOf(InputSlider)).call(this));

    _this._hMouseEnter = function () {
      _this.setState({ hovered: true });
    };

    _this._hMouseLeave = function () {
      _this.setState({ hovered: false });
    };

    _this._hMouseDown = function (event) {
      // Cancel text selection
      event.preventDefault();
      document.addEventListener('mousemove', _this._hDragMouseMove);
      document.addEventListener('mouseup', _this._hDragMouseUp);
      _this.setState({
        dragged: true
      });
    };

    _this._hDragMouseMove = function (event) {
      _this._onDragUpdate(event);
    };

    _this._hDragMouseUp = function () {
      document.removeEventListener('mousemove', _this._hDragMouseMove);
      document.removeEventListener('mouseup', _this._hDragMouseUp);
      _this.setState({
        dragged: false
      });
    };

    _this._hFocusTrack = function () {
      _this.setState({ hovered: true });
    };

    _this._hBlurTrack = function () {
      _this.setState({ hovered: false });
    };

    _this._hKeyDownTrack = function (event) {
      switch (event.keyCode) {
        case 37:
          {
            var _this$props = _this.props,
                min = _this$props.min,
                step = _this$props.step,
                value = _this.state.value;

            if (value > min) {
              var _value = _addStep(value, -step, _this.stepExp);
              _this._setValue(event, _value);
            }
            break;
          }
        case 39:
          {
            var _this$props2 = _this.props,
                max = _this$props2.max,
                _step = _this$props2.step,
                _value2 = _this.state.value;

            if (_value2 < max) {
              var _value3 = _addStep(_value2, _step, _this.stepExp);
              _this._setValue(event, _value3);
            }
            break;
          }
        default:
          return;
      }
    };

    _this._onDragUpdate = function (event) {
      if (_this.dragRunning) {
        return;
      }
      _this.dragRunning = true;
      requestAnimationFrame(function () {
        _this.dragRunning = false;
        var position = event.clientX - _this._calcTrackOffset();
        _this._setValueFromPosition(event, position);
      });
    };

    _this._setValue = function (event, value) {
      _this.setState({ value: value });
      if (_this.isOnChange) {
        _this.props.onChange(value);
      }
    };

    _this._calcTrackOffset = function () {
      return _this.trackComp.getBoundingClientRect()['left'];
    };

    _this._setValueFromPosition = function (event, position) {
      var positionMax = _this.trackComp['clientWidth'];
      if (position < 0) {
        position = 0;
      } else if (position > positionMax) {
        position = positionMax;
      }

      var _this$props3 = _this.props,
          step = _this$props3.step,
          min = _this$props3.min,
          max = _this$props3.max;

      var value = void 0;
      value = position / positionMax * (max - min);
      value = Math.round(value / step) * step + min;
      value = parseFloat(value.toFixed(5));

      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }

      if (_this.state.value !== value) {
        _this._setValue(event, value);
      }
    };

    _this._refTrackComp = function (comp) {
      return _this.trackComp = comp;
    };

    _this.isOnChange = typeof props.onChange === 'function' ? true : false;
    var arr = ('' + props.step).split('.');
    _this.stepExp = arr[1] ? -1 * arr[1].length : 0;

    _this.state = {
      hovered: false,
      dragged: false,
      value: props.initValue
    };
    return _this;
  }
  /*
  static propTypes = {
    initValue: PropTypes.number,
    step : PropTypes.number,
    min : PropTypes.number,
    max : PropTypes.number,
    onChange : PropTypes.func
  }
  */

  (0, _createClass3.default)(InputSlider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setState({ value: nextProps.initValue });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          step = _props.step,
          min = _props.min,
          max = _props.max,
          style = _props.style,
          _state = this.state,
          hovered = _state.hovered,
          dragged = _state.dragged,
          value = _state.value,
          _lineAfterStyle = hovered ? (0, _extends3.default)({}, S.LINE_AFTER, S.LINE_HOVERED) : S.LINE_AFTER,
          _circleStyle = dragged ? S.CIRCLE_DRAGGED : null,
          _emberStyle = dragged ? S.EMBER : null,
          _circleInnerEl = hovered || dragged ? _react2.default.createElement('div', { style: (0, _extends3.default)({}, S.CIRCLE_INNER_EL, _emberStyle) }) : null,
          _percent = _toPercent(value, min, max),
          _widthBeforeStyle = _calcWidth(_percent),
          _widthAfterStyle = _calcWidth(100 - _percent),
          _leftStyle = _crLeftStyle(_percent);

      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, S.ROOT, style),
          role: 'slider',
          'aria-valuemax': max,
          'aria-valuemin': min,
          'aria-valuenow': value,
          tabIndex: '0',
          onMouseDown: this._hMouseDown,
          onMouseEnter: this._hMouseEnter,
          onMouseLeave: this._hMouseLeave
        },
        _react2.default.createElement(
          'div',
          {
            ref: this._refTrackComp,
            tabIndex: '0',
            role: 'button',
            style: S.ROOT_LINE,
            onKeyDown: this._hKeyDownTrack,
            onFocus: this._hFocusTrack,
            onBlur: this._hBlurTrack
          },
          _react2.default.createElement('div', { style: (0, _extends3.default)({}, S.LINE_BEFORE, _widthBeforeStyle) }),
          _react2.default.createElement('div', { style: (0, _extends3.default)({}, _lineAfterStyle, _widthAfterStyle) }),
          _react2.default.createElement(
            'div',
            {
              style: (0, _extends3.default)({}, S.ROOT_CIRCLE, _circleStyle, _leftStyle)
            },
            _react2.default.createElement(
              'div',
              { style: (0, _extends3.default)({}, S.CIRCLE_INNER, _circleStyle) },
              _circleInnerEl
            )
          ),
          _react2.default.createElement('input', {
            type: 'hidden',
            step: step,
            min: min,
            max: max,
            value: value,
            required: true
          })
        )
      );
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }]);
  return InputSlider;
}(_react.Component), _class.defaultProps = {
  initValue: 1,
  min: 0,
  max: 1,
  step: 0.05
}, _temp);
exports.default = InputSlider;
//# sourceMappingURL=InputSlider.js.map