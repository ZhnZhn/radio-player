import React, { useEffect } from 'react'
import useInterval from '../hooks/useInterval'

import CATEGORIES from '../../sound/categories'

import InputSlider from '../zhn/InputSlider'
import BtMinus from '../zhn/BtMinus'
import BtPlus from '../zhn/BtPlus'
import HeaderDrawer from '../drawer/HeaderDrawer'

const S = {
  ROW: {
    //display: 'flex',
    //alignItems: 'center',
    //overflow: 'hidden',
    height: 35,
    transition: 'height 0.3s ease-out',
  },
  SLIDER: {
    display: 'inline-block',
    width: 200,
    marginRight: 16
  },

  VOLUME: {
    position: 'relative',
    top: -10,
    display: 'inline-block',
    color: '#00bcd4',
    width: 46,
    paddingLeft: 5,
    fontSize: 22,
    fontWeight: 400
  },
  GAP: {
    display: 'inline-block',
    width: 12
  }
}

const _isNumber = n => typeof n === 'number'
 && Number.isFinite(n);

const _toVolume = v => _isNumber(v)
 ? Math.round(v*100)
 : '';

const RadioVolume = ({ volume, setVolume, onIncrease, onDecrease }) => {
  const [ runIncrease, stopIncrease ] = useInterval(onIncrease, 100)
  const [ runDecrease, stopDecrease ] = useInterval(onDecrease, 100)
  , _runDecrease = () => {
    if (volume !== 0) { runDecrease() }
  }
  , _runIncrease = () => {
    if (volume !== 100) { runIncrease() }
  }
  useEffect(()=> {
      if (volume === 0) { stopDecrease() }
      if (volume === 100) { stopIncrease() }
  })

  return (
    <div id="volume" style={S.ROW} >
      <div style={S.VOLUME}>
        {_toVolume(volume)}
      </div>
      <InputSlider
        style={S.SLIDER}
        initValue={volume}
        onChange={setVolume}
      />
      <BtMinus
        accessKey="-"
        onMouseDown={_runDecrease}
        onMouseUp={stopDecrease}
        onClick={onDecrease}
      />
      <div style={S.GAP} />
      <BtPlus
        accessKey="+"
        onMouseDown={_runIncrease}
        onMouseUp={stopIncrease}
        onClick={onIncrease}
      />
      <HeaderDrawer
        categories={CATEGORIES}
      />
    </div>
  );
}

export default RadioVolume
