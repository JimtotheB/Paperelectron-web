/**
 * @file expressConfig
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron-web
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

var path = require('path');
var compress = require('compression');
var favicon = require('serve-favicon');
var responseTime = require('response-time');
var expressLogger = require('morgan');
var serveStatic = require('serve-static');

/**
 * Exports the express configuration
 * @module expressConfig
 */

module.exports = function(app){
  app.set('views', path.join( __dirname, '../', 'views'));
  app.set('view engine', 'jade');
  app.use(favicon( path.join( __dirname, '../', 'public/favicon.ico')));
  app.use(serveStatic(path.join(__dirname, '../', 'public')));
  app.use(compress());
  app.use(expressLogger('common'));
  app.use(responseTime());
};