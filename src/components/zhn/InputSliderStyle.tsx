import { StyleSheet  } from "./types";

type StyleKeys = 'ROOT' 
 | 'ROOT_LINE'
 | 'LINE_BEFORE'
 | 'LINE_AFTER'
 | 'LINE_HOVERED'
 | 'ROOT_CIRCLE'
 | 'CIRCLE_DRAGGED'
 | 'CIRCLE_INNER'
 | 'CIRCLE_INNER_EL'
 | 'EMBER'

const S: StyleSheet<StyleKeys> = {
    ROOT: {
      position: 'relative',
      width: '100%',
      height: 18,
      marginTop: 8,
      marginBottom: 8,
      userSelect : 'none',
      cursor: 'default'
    },
    ROOT_LINE : {
      position: 'absolute',
      top: 8,
      left: 0,
      width: '100%',
      height: 2
    },
    LINE_BEFORE : {
      position: 'absolute',
      left: 0,
      width: 'calc(15%)',
      height: '100%',
      marginRight: 6,
      backgroundColor: 'rgb(0, 188, 212)',
      transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    },
    LINE_AFTER : {
      position: 'absolute',
      right: 0,
      width: 'calc(85%)',
      height: '100%',
      marginLeft: 6,
      backgroundColor: 'rgb(189, 189, 189)',
      transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
    },
    LINE_HOVERED : {
      backgroundColor: 'rgb(158, 158, 158)',
    },
    ROOT_CIRCLE : {
      //boxSizing: 'borderBox',      
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: '15%',
      width: 12,
      height: 12,
      cursor: 'pointer',
      pointerEvents: 'inherit',
      margin: '1px 0px 0px',
      backgroundColor: 'rgb(0, 188, 212)',
      backgroundClip: 'padding-box',
      border: '0px solid transparent',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'visible',
      outline: 'none',
      transition: 'background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
    },
    CIRCLE_DRAGGED : {
      width: 20,
      height: 20
    },
    CIRCLE_INNER : {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 12,
      height: 12,
      overflow: 'visible'
    },
    CIRCLE_INNER_EL : {
      position: 'absolute',
      top: -12,
      left: -12,
      width: '300%',
      height: 36,
      borderRadius: '50%',
      //opacity: '0.16',
      backgroundColor: 'rgba(0, 188, 212, 0.16)',
      transform: 'scale(1)'
    },
    EMBER : {
      top: -12,
      left: -12,
      width: '220%',
      height: 44,
      border: '1px solid #4caf50'
    }
  };

  export default S