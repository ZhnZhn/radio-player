import type { CSSProperties } from "../types";

export const S_ROW: CSSProperties = {
  height: 35,
  transition: 'height 0.3s ease-out'
}
export const S_SLIDER: CSSProperties = {
  display: 'inline-block',
  width: 200,
  maxWidth: 'calc(100vw - 210px)',
  marginRight: 16
}
export const S_VOLUME: CSSProperties = {
  position: 'relative',
  top: -10,
  display: 'inline-block',
  color: '#00bcd4',
  width: 46,
  paddingLeft: 5,
  fontSize: 22,
  fontWeight: 400
}
export const S_GAP: CSSProperties = {
  display: 'inline-block',
  width: 12
}  
  