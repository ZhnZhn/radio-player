"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

/*
 Mostly from
 https://github.com/callemall/material-ui/blob/master/src/Slider/Slider.js
*/
var S = {
  ROOT: {
    position: 'relative',
    width: '100%',
    height: 18,
    marginTop: 8,
    marginBottom: 8,
    cursor: 'default',
    userSelect: 'none'
  },
  ROOT_LINE: {
    position: 'absolute',
    top: 8,
    left: 0,
    width: '100%',
    height: 2
  },
  LINE_BEFORE: {
    position: 'absolute',
    left: 0,
    width: 'calc(15%)',
    height: '100%',
    marginRight: 6,
    backgroundColor: 'rgb(0, 188, 212)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  LINE_AFTER: {
    position: 'absolute',
    right: 0,
    width: 'calc(85%)',
    height: '100%',
    marginLeft: 6,
    backgroundColor: 'rgb(189, 189, 189)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  LINE_HOVERED: {
    backgroundColor: 'rgb(158, 158, 158)'
  },
  ROOT_CIRCLE: {
    boxSizing: 'borderBox',
    position: 'absolute',
    top: 0,
    left: '15%',
    zIndex: 1,
    width: 12,
    height: 12,
    margin: '1px 0px 0px',
    backgroundColor: 'rgb(0, 188, 212)',
    backgroundClip: 'padding-box',
    border: '0px solid transparent',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'visible',
    outline: 'none',
    transition: 'background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    pointerEvents: 'inherit',
    cursor: 'pointer'
  },
  CIRCLE_DRAGGED: {
    width: 20,
    height: 20
  },
  CIRCLE_INNER: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 12,
    height: 12,
    overflow: 'visible'
  },
  CIRCLE_INNER_EL: {
    position: 'absolute',
    top: -12,
    left: -12,
    width: '300%',
    height: 36,
    borderRadius: '50%',
    //opacity: '0.16',
    backgroundColor: 'rgba(0, 188, 212, 0.16)',
    transform: 'scale(1)'
  },
  EMBER: {
    top: -12,
    left: -12,
    width: '220%',
    height: 44,
    border: '1px solid #4caf50'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _round10 = function _round10(value, exp) {
  value = +value;
  exp = +exp; // If the value is not a number or the exp is not an integer...

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  } // Shift


  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp))); // Shift back

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
    width: "calc(" + percent + "%)"
  };
};

var _crLeftStyle = function _crLeftStyle(percent) {
  return {
    left: percent + "%"
  };
};

var InputSlider = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputSlider, _Component);

  /*
  static propTypes = {
    initValue: PropTypes.number,
    step : PropTypes.number,
    min : PropTypes.number,
    max : PropTypes.number,
    onChange : PropTypes.func
  }
  */
  function InputSlider(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hMouseEnter = function () {
      _this.setState({
        isHovered: true
      });
    };

    _this._hMouseLeave = function () {
      _this.setState({
        isHovered: false
      });
    };

    _this._hMouseDown = function (event) {
      // Cancel text selection
      event.preventDefault();
      document.addEventListener('mousemove', _this._hDragMouseMove);
      document.addEventListener('mouseup', _this._hDragMouseUp);

      _this.setState({
        isDragged: true
      });
    };

    _this._hDragMouseMove = function (event) {
      _this._onDragUpdate(event);
    };

    _this._hDragMouseUp = function () {
      document.removeEventListener('mousemove', _this._hDragMouseMove);
      document.removeEventListener('mouseup', _this._hDragMouseUp);

      _this.setState({
        isDragged: false
      });
    };

    _this._hFocusTrack = function () {
      _this.setState({
        isHovered: true
      });
    };

    _this._hBlurTrack = function () {
      _this.setState({
        isHovered: false
      });
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
                _step2 = _this$props2.step,
                _value2 = _this.state.value;

            if (_value2 < max) {
              var _value3 = _addStep(_value2, _step2, _this.stepExp);

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
      _this.setState({
        value: value
      });

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
      var value;
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

    var onChange = props.onChange,
        _step = props.step,
        initValue = props.initValue;
    _this.isOnChange = _isFn(onChange);

    var arr = ('' + _step).split('.');

    _this.stepExp = arr[1] ? -1 * arr[1].length : 0;
    _this.state = {
      isHovered: false,
      isDragged: false,
      value: initValue
    };
    return _this;
  }

  var _proto = InputSlider.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        value: nextProps.initValue
      });
    }
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        step = _this$props4.step,
        min = _this$props4.min,
        max = _this$props4.max,
        style = _this$props4.style,
        _this$state = this.state,
        isHovered = _this$state.isHovered,
        isDragged = _this$state.isDragged,
        value = _this$state.value,
        _lineAfterStyle = isHovered ? (0, _extends2["default"])({}, S.LINE_AFTER, S.LINE_HOVERED) : S.LINE_AFTER,
        _circleStyle = isDragged ? S.CIRCLE_DRAGGED : null,
        _emberStyle = isDragged ? S.EMBER : null,
        _circleInnerEl = isHovered || isDragged ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: (0, _extends2["default"])({}, S.CIRCLE_INNER_EL, _emberStyle)
    }) : null,
        _percent = _toPercent(value, min, max),
        _widthBeforeStyle = _calcWidth(_percent),
        _widthAfterStyle = _calcWidth(100 - _percent),
        _leftStyle = _crLeftStyle(_percent);

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: (0, _extends2["default"])({}, S.ROOT, style),
      role: "slider",
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": value,
      tabIndex: "0",
      onMouseDown: this._hMouseDown,
      onMouseEnter: this._hMouseEnter,
      onMouseLeave: this._hMouseLeave,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        ref: this._refTrackComp,
        tabIndex: "0",
        role: "button",
        style: S.ROOT_LINE,
        onKeyDown: this._hKeyDownTrack,
        onFocus: this._hFocusTrack,
        onBlur: this._hBlurTrack,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: (0, _extends2["default"])({}, S.LINE_BEFORE, _widthBeforeStyle)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: (0, _extends2["default"])({}, _lineAfterStyle, _widthAfterStyle)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: (0, _extends2["default"])({}, S.ROOT_CIRCLE, _circleStyle, _leftStyle),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: (0, _extends2["default"])({}, S.CIRCLE_INNER, _circleStyle),
            children: _circleInnerEl
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "hidden",
          step: step,
          min: min,
          max: max,
          value: value,
          required: true
        })]
      })
    });
  };

  _proto.setValue = function setValue(value) {
    this.setState({
      value: value
    });
  };

  return InputSlider;
}(_react.Component);

InputSlider.defaultProps = {
  initValue: 1,
  min: 0,
  max: 1,
  step: 0.05
};
var _default = InputSlider;
exports["default"] = _default;
//# sourceMappingURL=InputSlider.js.map