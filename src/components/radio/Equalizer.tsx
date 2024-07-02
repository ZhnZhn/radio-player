import SvgMelody from "../zhn/SvgMelody";

interface EqualizerProps {
  isPlaying: boolean
  isUnloaded: boolean
  unload: () => void
}

const CL_MELODY = 'melody';

const Equalizer = ({
  isPlaying,
  isUnloaded,
  unload
}: EqualizerProps) => isPlaying  
  ? <div className={CL_MELODY}><SvgMelody /></div>  
  : isUnloaded
     ? <div className={CL_MELODY} />
     : <button className={CL_MELODY}
          data-loader="circle"
          onClick={unload}
       />
              
export default Equalizer
