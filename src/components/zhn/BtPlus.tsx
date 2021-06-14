import { CircleButtonProps } from './types';
import CircleButton from './CircleButton';

const BtMinus = (props: CircleButtonProps) => (
  <CircleButton {...props}>
    <path d="M8 16 H24" strokeWidth="3" />
    <path d="M16 8 V24" strokeWidth="3" />
  </CircleButton>
);

export default BtMinus
