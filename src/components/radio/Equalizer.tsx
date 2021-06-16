interface EqualizerProps {
  isPlaying: boolean
  isUnloaded: boolean
  unload: () => void
}

const CL_EQUALIZER = 'equalizer'
, CL_EQUALIZER_NOT_PLAYING = 'equalizer--not-playing';

const Equalizer = ({
  isPlaying,
  isUnloaded,
  unload
}: EqualizerProps) => isPlaying
  ? <div className={CL_EQUALIZER} />
  : isUnloaded
     ? <div className={CL_EQUALIZER_NOT_PLAYING} />
     : <button className={CL_EQUALIZER_NOT_PLAYING}
         data-loader="circle"
         onClick={unload}
       />

export default Equalizer
