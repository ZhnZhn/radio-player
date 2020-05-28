"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _alternative = _interopRequireDefault(require("./alternative"));

var _classical = _interopRequireDefault(require("./classical"));

var _country = _interopRequireDefault(require("./country"));

var _talks = _interopRequireDefault(require("./talks"));

var _sport = _interopRequireDefault(require("./sport"));

var _jazz = _interopRequireDefault(require("./jazz"));

var _chillout = _interopRequireDefault(require("./chillout"));

var _lounge = _interopRequireDefault(require("./lounge"));

var _rock = _interopRequireDefault(require("./rock"));

var _pop = _interopRequireDefault(require("./pop"));

var _piano = _interopRequireDefault(require("./piano"));

var _instrumental = _interopRequireDefault(require("./instrumental"));

var _hm = {
  alternative: _alternative["default"],
  classical: _classical["default"],
  country: _country["default"],
  talks: _talks["default"],
  sport: _sport["default"],
  jazz: _jazz["default"],
  chillout: _chillout["default"],
  lounge: _lounge["default"],
  rock: _rock["default"],
  pop: _pop["default"],
  piano: _piano["default"],
  instrumental: _instrumental["default"]
};
var router = {
  getCategory: function getCategory(category) {
    return _hm[category] || [];
  }
};
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=router.js.map