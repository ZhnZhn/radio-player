
const _isTransition = () => document
  && document.body.style.transition !== void 0;

const _isTouchable = () => document
  && 'ontouchstart' in document.documentElement;

const _isMediaSession = () => navigator
  && 'mediaSession' in navigator;

const HAS = {
  TRANSITION: _isTransition(),
  TOUCH: _isTouchable(),
  MEDIA_SESSION: _isMediaSession()
};

export default HAS
