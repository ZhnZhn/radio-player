import type { CircleButtonProps } from './types';
import CicrleButton from './CircleButton';

const BtMinus = (props: CircleButtonProps) => (
  <CicrleButton {...props}>
    <path d="M8 16 H24" strokeWidth="3" />
  </CicrleButton>
);

export default BtMinus
