import { useState, useCallback } from 'react'

const CL = {
  BT: 'bt-triple',
  BT_ONE: 'bt-triple__one',
  BT_TWO: 'bt-triple__two',
  BT_THREE: 'bt-triple__three',
};

const S = {
  SELECTED: {
    backgroundColor: '#1b2836'
  }
};

const _crBtStyle = (nowValue, btValue) => nowValue === btValue
  ? S.SELECTED
  : void 0;

const BtTriple = ({
  style,
  tabIndex,
  initialValue,
  oneC, twoC, threeC,
  onClick
}) => {
  const [value, setValue] = useState(initialValue)
  , _oneStyle = _crBtStyle(value, 1)
  , _twoStyle = _crBtStyle(value, 2)
  , _threeStyle = _crBtStyle(value, 3)
  , _onClick = useCallback((value) => {
      onClick(value)
      setValue(value)
    }, [onClick]);

  return (
  <div className={CL.BT} style={style}>
    <button
      className={CL.BT_ONE}
      style={_oneStyle}
      tabIndex={tabIndex}
      onClick={_onClick.bind(null, 1)}
    >
      {oneC}
    </button>
    <button
      className={CL.BT_TWO}
      style={_twoStyle}
      tabIndex={tabIndex}
      onClick={_onClick.bind(null, 2)}
    >
      {twoC}
    </button>
    <button
      className={CL.BT_THREE}
      style={_threeStyle}
      tabIndex={tabIndex}
      onClick={_onClick.bind(null, 3)}
    >
      {threeC}
    </button>
  </div>
 )
};

BtTriple.defaultProps = {
  tabIndex: -1,
  initialValue: 1,
  oneC: 'One',
  twoC: 'Two',
  threeC: 'Three'
}

export default BtTriple
