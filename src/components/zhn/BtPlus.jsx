import Button from './CircleButton'

const BtMinus = (props) => (
  <Button {...props}>
    <path d="M8 16 H24" strokeWidth="3" />
    <path d="M16 8 V24" strokeWidth="3" />
  </Button>
);

export default BtMinus
