import React from 'react'

const CL = {
  EQUALIZER: 'equalizer',
  EQUALIZER_NOT_PLAYING: 'equalizer--not-playing'
};

/*
const S = {
  EQUALIZER_PLAYING: {
    width: 24,
    height: 24,
    marginLeft: 16,
    background: 'url(./css/ani_equalizer_green.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transform: 'rotateZ(90deg)'
  },
  EQUALIZER_NOT_PLAYING: {
    width: 24,
    height: 24,
    marginLeft: 16
  }
};
*/

const Equalizer = ({
  isPlaying,
  isUnloaded,
  unload
}) => isPlaying
  ? <div className={CL.EQUALIZER} />
  : isUnloaded
     ? <div className={CL.EQUALIZER_NOT_PLAYING} />
     : <button className={CL.EQUALIZER_NOT_PLAYING}
         data-loader="circle"
         onClick={unload}
       />



export default Equalizer
