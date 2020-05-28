import React, { Component } from 'react';

/*
 Mostly from
 https://github.com/callemall/material-ui/blob/master/src/Slider/Slider.js
*/

const S = {
  ROOT : {
    position: 'relative',
    width: '100%',
    height: 18,
    marginTop: 8,
    marginBottom: 8,
    cursor: 'default',
    userSelect : 'none'
  },
  ROOT_LINE : {
    position: 'absolute',
    top: 8,
    left: 0,
    width: '100%',
    height: 2
  },
  LINE_BEFORE : {
    position: 'absolute',
    left: 0,
    width: 'calc(15%)',
    height: '100%',
    marginRight: 6,
    backgroundColor: 'rgb(0, 188, 212)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
  LINE_AFTER : {
    position: 'absolute',
    right: 0,
    width: 'calc(85%)',
    height: '100%',
    marginLeft: 6,
    backgroundColor: 'rgb(189, 189, 189)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
  LINE_HOVERED : {
    backgroundColor: 'rgb(158, 158, 158)',
  },
  ROOT_CIRCLE : {
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
  CIRCLE_DRAGGED : {
    width: 20,
    height: 20
  },
  CIRCLE_INNER : {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 12,
    height: 12,
    overflow: 'visible'
  },
  CIRCLE_INNER_EL : {
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
  EMBER : {
    top: -12,
    left: -12,
    width: '220%',
    height: 44,
    border: '1px solid #4caf50'
  }
}

const _isFn = fn => typeof fn === 'function';

const _round10 = (value, exp) => {
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');

    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

const _addStep = (value, step, exp ) => exp
  ? _round10(value + step, exp)
  : (value + step);

const _toPercent = (value, min, max) => {
  const _percent = (value - min ) / (max - min);
  return Number.isNaN(_percent)
    ? 0 : _percent*100;
}
const _calcWidth = percent => ({
  width: `calc(${percent}%)`
})
const _crLeftStyle = percent => ({
  left: `${percent}%`
})

class InputSlider extends Component {
  /*
  static propTypes = {
    initValue: PropTypes.number,
    step : PropTypes.number,
    min : PropTypes.number,
    max : PropTypes.number,
    onChange : PropTypes.func
  }
  */

  static defaultProps = {
    initValue: 1,
    min : 0,
    max : 1,
    step : 0.05
  }

  constructor(props){
    super(props)
    const { onChange, step, initValue } = props
    this.isOnChange = _isFn(onChange)
    const arr = (''+step).split('.')
    this.stepExp = (arr[1]) ? -1 * arr[1].length : 0

    this.state = {
      isHovered: false,
      isDragged: false,
      value: initValue
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if (nextProps !== this.props){
      this.setState({ value : nextProps.initValue })
    }
  }

  _hMouseEnter = () => {
    this.setState({ isHovered: true })
  }
  _hMouseLeave = () => {
    this.setState({ isHovered: false })
  }
  _hMouseDown = (event) => {
    // Cancel text selection
    event.preventDefault()
    document.addEventListener('mousemove', this._hDragMouseMove)
    document.addEventListener('mouseup', this._hDragMouseUp)
    this.setState({
      isDragged: true
    })
  }

  _hDragMouseMove = (event) => {
    this._onDragUpdate(event)
  }
  _hDragMouseUp = () => {
     document.removeEventListener('mousemove', this._hDragMouseMove)
     document.removeEventListener('mouseup', this._hDragMouseUp)
     this.setState({
       isDragged: false
     })
  }

  _hFocusTrack = () => {
    this.setState({ isHovered: true })
  }
  _hBlurTrack = () => {
    this.setState({ isHovered: false })
  }
  _hKeyDownTrack = (event) => {
     switch(event.keyCode){
       case 37: {
         const  { min, step } = this.props
              , { value } = this.state;
         if ( value > min) {
           const _value = _addStep(value, -step, this.stepExp)
           this._setValue(event, _value)
         }
         break;
       }
       case 39: {
         const  { max, step } = this.props
              , { value } = this.state;
         if ( value < max) {
           const _value = _addStep(value, step, this.stepExp)
           this._setValue(event, _value)
         }
         break;
       }
       default: return;
     }
  }

  _onDragUpdate = (event) => {
    if (this.dragRunning) {
      return;
    }
    this.dragRunning = true;
    requestAnimationFrame(() => {
      this.dragRunning = false;
      const position = event.clientX - this._calcTrackOffset()
      this._setValueFromPosition(event, position)
    })
  }

  _setValue = (event, value) => {
    this.setState({ value })
    if (this.isOnChange){
      this.props.onChange(value)
    }
  }

  _calcTrackOffset = () => {
    return this.trackComp.getBoundingClientRect()['left'];
  }

  _setValueFromPosition = (event, position) => {
    const positionMax = this.trackComp['clientWidth']
    if (position < 0) {
      position = 0;
    } else if (position > positionMax) {
      position = positionMax
    }

    const { step, min, max } = this.props
    let value
    value = position/positionMax * (max - min)
    value = Math.round(value / step) * step + min
    value = parseFloat(value.toFixed(5))

    if (value > max) {
      value = max
    } else if (value < min ) {
      value = min
    }

    if (this.state.value !== value) {
      this._setValue(event, value)
    }
  }

  _refTrackComp = comp => this.trackComp = comp

  render(){
    const { step, min , max, style } = this.props
    , { isHovered, isDragged, value } = this.state
    , _lineAfterStyle = isHovered
          ? {...S.LINE_AFTER, ...S.LINE_HOVERED}
          : S.LINE_AFTER
    , _circleStyle = isDragged ? S.CIRCLE_DRAGGED : null
    , _emberStyle = isDragged ? S.EMBER : null
    , _circleInnerEl = (isHovered || isDragged)
          ? ( <div style={{ ...S.CIRCLE_INNER_EL, ..._emberStyle }}/> )
          : null
    , _percent = _toPercent(value, min, max)
    , _widthBeforeStyle = _calcWidth(_percent)
    , _widthAfterStyle = _calcWidth(100 - _percent)
    , _leftStyle = _crLeftStyle(_percent)

    return (
      <div style={{...S.ROOT, ...style}}
        role="slider"
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        tabIndex="0"
        onMouseDown={this._hMouseDown}
        onMouseEnter={this._hMouseEnter}
        onMouseLeave={this._hMouseLeave}
      >
        <div
           ref={this._refTrackComp}
           tabIndex="0"
           role="button"
           style={S.ROOT_LINE}
           onKeyDown={this._hKeyDownTrack}
           onFocus={this._hFocusTrack}
           onBlur={this._hBlurTrack}
        >
          <div style={{...S.LINE_BEFORE, ..._widthBeforeStyle }} />
          <div style={{..._lineAfterStyle, ..._widthAfterStyle }} />
          <div
             style={{...S.ROOT_CIRCLE, ..._circleStyle, ..._leftStyle }}
          >
            <div style={{ ...S.CIRCLE_INNER, ..._circleStyle}} >
              {_circleInnerEl}
            </div>
          </div>
          <input
            type="hidden"
            step={step}
            min={min}
            max={max}
            value={value}
            required={true}
          />
        </div>
      </div>
    );
  }

  setValue(value){
    this.setState({ value })
  }

}

export default InputSlider
