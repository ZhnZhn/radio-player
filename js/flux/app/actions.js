'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION = exports.ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY'
};

var addCategory = exports.addCategory = function addCategory(category) {
  return {
    type: ACTION.SAVE_BOARD,
    category: category
  };
};
//# sourceMappingURL=actions.js.map