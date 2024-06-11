
const _isTransition = () => document
  && document.body.style.transition !== void 0;

const _isTouchEvent = () => document
  && 'ontouchstart' in document.documentElement;

const _isMediaSession = () => navigator
  && 'mediaSession' in navigator;

export const HAS_TRANSITION = _isTransition()
export const HAS_TOUCH_EVENT = _isTouchEvent()
export const HAS_MEDIA_SESSION = _isMediaSession()
