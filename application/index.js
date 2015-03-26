/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron-web
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

var http = require('http');
var app = require('./server');
var assetCompress = require('node-minify');
var fs
var server = http.createServer(app);

var startUp = function(){
  server.listen(8080, function(){
    console.log('Application started on port 8080');
  });
};

/**
 * Compress our css file for production.
 */
(function() {
  var env = process.env.NODE_ENV || 'production';
  if(env === 'development'){
    app.locals.cssPath = '/css/main.css';
    return new assetCompress.minify({
      type: 'yui-css',
      fileIn: 'application/public/css/main.css',
      fileOut: 'application/public/css/main.min.css',
      callback: startUp
    });
  }
  else {
    app.locals.cssPath = '/css/main.min.css';
    startUp()
  }
})();


