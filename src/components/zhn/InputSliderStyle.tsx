import type { CSSProperties } from "../types";

export const S_ROOT: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 18,
  marginTop: 8,
  marginBottom: 8,
  userSelect: 'none',
  cursor: 'default'
}

export const S_ROOT_LINE : CSSProperties = {
  position: 'absolute',
  top: 8,
  left: 0,
  width: '100%',
  height: 2
}

export const S_LINE_BEFORE : CSSProperties = {
  position: 'absolute',
  left: 0,
  width: 'calc(15%)',
  height: '100%',
  marginRight: 6,
  backgroundColor: 'rgb(0, 188, 212)',
  transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
}

export const S_LINE_AFTER : CSSProperties = {
  position: 'absolute',
  right: 0,
  width: 'calc(85%)',
  height: '100%',
  marginLeft: 6,
  backgroundColor: 'rgb(189, 189, 189)',
  transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
}

export const S_LINE_HOVERED : CSSProperties = {
  backgroundColor: 'rgb(158, 158, 158)',
}

export const S_ROOT_CIRCLE : CSSProperties = {
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
}

export const S_CIRCLE_DRAGGED : CSSProperties = {
  width: 20,
  height: 20
}

export const S_CIRCLE_INNER : CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 12,
  height: 12,
  overflow: 'visible'
}

export const S_CIRCLE_INNER_EL : CSSProperties = {
  position: 'absolute',
  top: -12,
  left: -12,
  width: '300%',
  height: 36,
  borderRadius: '50%',
  //opacity: '0.16',
  backgroundColor: 'rgba(0, 188, 212, 0.16)',
  transform: 'scale(1)'
}

export const S_EMBER : CSSProperties = {
  top: -12,
  left: -12,
  width: '220%',
  height: 44,
  border: '1px solid #4caf50'
}