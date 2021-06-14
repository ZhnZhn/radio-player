import { CSSProperties } from "../types";

type DrawerStyleType = {
  BT_DRAWER: CSSProperties,
  DRAWER_OFF: CSSProperties,
  DRAWER_ON: CSSProperties,
  MODAL_OFF: CSSProperties,
  MODAL_ON: CSSProperties
}

const S: DrawerStyleType = {
    BT_DRAWER: {
      position: 'absolute',
      top: 8,
      right: 18
    },
    DRAWER_OFF: {
      transform: 'translateX(264px)'
    },
    DRAWER_ON: {
      transform: 'translate(0px, 0px)',
    },
    MODAL_OFF: {
      display: 'none',
      opacity: 0,
      zIndex: -1,
      transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    },
    MODAL_ON: {
      display: 'block',
      opacity: 1,
      zIndex: 1000,
      transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    }
  };

  export default S