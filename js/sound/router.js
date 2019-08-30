'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classical = require('./classical');

var _classical2 = _interopRequireDefault(_classical);

var _country = require('./country');

var _country2 = _interopRequireDefault(_country);

var _talks = require('./talks');

var _talks2 = _interopRequireDefault(_talks);

var _sport = require('./sport');

var _sport2 = _interopRequireDefault(_sport);

var _jazz = require('./jazz');

var _jazz2 = _interopRequireDefault(_jazz);

var _chillout = require('./chillout');

var _chillout2 = _interopRequireDefault(_chillout);

var _lounge = require('./lounge');

var _lounge2 = _interopRequireDefault(_lounge);

var _rock = require('./rock');

var _rock2 = _interopRequireDefault(_rock);

var _pop = require('./pop');

var _pop2 = _interopRequireDefault(_pop);

var _piano = require('./piano');

var _piano2 = _interopRequireDefault(_piano);

var _instrumental = require('./instrumental');

var _instrumental2 = _interopRequireDefault(_instrumental);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _hm = {
  classical: _classical2.default,
  country: _country2.default,
  talks: _talks2.default,
  sport: _sport2.default,
  jazz: _jazz2.default,
  chillout: _chillout2.default,
  lounge: _lounge2.default,
  rock: _rock2.default,
  pop: _pop2.default,
  piano: _piano2.default,
  instrumental: _instrumental2.default
};

var router = {
  getCategory: function getCategory(category) {
    return _hm[category] || [];
  }
};

exports.default = router;
//# sourceMappingURL=router.js.map