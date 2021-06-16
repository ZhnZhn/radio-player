import { StyleSheet } from "./types";

type StyleKeys = 'ARROW_OPEN'
 | 'LINK'
 | 'TITLE'
 | 'CATEGORY'

const S: StyleSheet<StyleKeys> = {
    ARROW_OPEN: {
      transform: 'rotate(90deg) scale(1.3, 1.3) translate(14px, -10px)'
    },
    LINK: {
      color: '#04477b',
      fontSize: '17px',
      display: 'inline-block',
      maxWidth: 340,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    },
    TITLE: {
      color: 'darkgray'
    },
    CATEGORY: {
      color: '#1b2836'
    }
  };

  export default S