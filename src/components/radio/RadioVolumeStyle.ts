import { StyleSheet } from "./types";

type StyleKeys = 'ROW'
 | 'SLIDER'
 | 'VOLUME'
 | 'GAP'

const S: StyleSheet<StyleKeys> = {
    ROW: {
      height: 35,
      transition: 'height 0.3s ease-out'
    },
    SLIDER: {
      display: 'inline-block',
      width: 200,
      maxWidth: 'calc(100vw - 210px)',
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
  };

  export default S