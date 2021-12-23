import CircleButton from './CircleButton';

import { HK_PLAY, HK_MUTE } from '../hotkeys/hotkeys';

export interface BtPlayProps {
  isPlaying: boolean,
  onPlay: () => void,
  onStop: () => void 
}

type CrPropsType = (props: BtPlayProps) => [
  string,
  string,
  () => void,
  JSX.Element
]

const IconPlay = (
  <path d="M12.458 22.667l10-6.5-10-6.5z" />
);
const IconStop = (
  <>
    <path d="M11.5 10h3v13h-3v-13z" />
    <path d="M17.5 10h3v13h-3v-13z" />
  </>
);

const _crProps: CrPropsType = ({ 
  isPlaying, 
  onPlay, 
  onStop 
}) => isPlaying
  ? [HK_MUTE, 'Mute', onStop, IconStop]
  : [HK_PLAY, 'Play', onPlay, IconPlay];
  
const BtPlay = (props: BtPlayProps) => {
  const [hotKey, ariaLabel, onClick, svgIcon] = _crProps(props);
    
  return (
    <CircleButton       
      hotKey={hotKey} 
      ariaLabel={ariaLabel}
      onClick={onClick}       
    >
      {svgIcon}
    </CircleButton>
  );
}

export default BtPlay
