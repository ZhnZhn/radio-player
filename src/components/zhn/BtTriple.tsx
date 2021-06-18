import { CSSProperties, TabIndexType } from './types';

import { useState, useCallback } from '../uiApi';
import crCn from '../crCn';

type BtValueType = '1' | '2' | '3'

interface BtTripleProps {
  style?: CSSProperties,
  className?: string, 
  tabIndex?: TabIndexType,
  initialValue?: BtValueType,
  oneC?: string, 
  twoC?: string, 
  threeC?: string,
  onClick: (v: BtValueType) => void
}

const CL_BT = 'bt-triple'
, CL_BT_ONE = 'bt-triple__one'
, CL_BT_TWO = 'bt-triple__two'
, CL_BT_THREE = 'bt-triple__three';

const S_SELECTED: CSSProperties = { 
  backgroundColor: '#1b2836'  
};

const _crBtStyle = (
  nowValue: BtValueType, 
  btValue: BtValueType
  ) => nowValue === btValue
    ? S_SELECTED
    : void 0;


const BtTriple = ({
  style,
  className,
  tabIndex=-1,
  initialValue='1',
  oneC='One', 
  twoC='Two', 
  threeC='Three',
  onClick
}: BtTripleProps) => {
  const [value, setValue] = useState(initialValue)
  , _cn = crCn(CL_BT, className)
  , _oneStyle = _crBtStyle(value, '1')
  , _twoStyle = _crBtStyle(value, '2')
  , _threeStyle = _crBtStyle(value, '3')
  , _onClick = useCallback((value) => {
      onClick(value)
      setValue(value)
    }, [onClick]);

  return (
  <div className={_cn} style={style}>
    <button
      className={CL_BT_ONE}
      style={_oneStyle}
      tabIndex={tabIndex}
      onClick={_onClick.bind(null, '1')}
    >
      {oneC}
    </button>
    <button
      className={CL_BT_TWO}
      style={_twoStyle}
      tabIndex={tabIndex}
      onClick={_onClick.bind(null, '2')}
    >
      {twoC}
    </button>
    <button
      className={CL_BT_THREE}
      style={_threeStyle}
      tabIndex={tabIndex}
      onClick={_onClick.bind(null, '3')}
    >
      {threeC}
    </button>
  </div>
 )
};

export default BtTriple
