/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron-web
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 * Exports a configured express server.
 * @module index
 */
var app = require('express')();
var config = require('./expressConfig')(app);
var routes = require('../routes')(app);
var errors = require('./errorHandlers')(app);

module.exports = app;