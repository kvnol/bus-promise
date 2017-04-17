'use strict';

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _find = require('./find');

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  auth: _auth2.default,
  find: _find2.default
};