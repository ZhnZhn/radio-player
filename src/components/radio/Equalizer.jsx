const CL = {
  EQUALIZER: 'equalizer',
  EQUALIZER_NOT_PLAYING: 'equalizer--not-playing'
};

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
