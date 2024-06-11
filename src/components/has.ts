
const _isTransition = () => document
  && document.body.style.transition !== void 0;

const _isTouchEvent = () => document
  && 'ontouchstart' in document.documentElement;

const _isMediaSession = () => navigator
  && 'mediaSession' in navigator;

export const HAS_TRANSITION = _isTransition()
export const HAS_TOUCH_EVENT = _isTouchEvent()
export const HAS_MEDIA_SESSION = _isMediaSession()

const getWindowInnerWidth = () => window
  && window.innerWidth
const DF_WIDE_WIDTH = 700;
export const isWideWidth = (
  wideWidth=DF_WIDE_WIDTH
) => (getWindowInnerWidth() || wideWidth+1) > wideWidth
const HAS_WIDE_SCREEN = isWideWidth();

export const HAS_KEYBOARD_FOCUS = !HAS_TOUCH_EVENT
  || HAS_WIDE_SCREEN
