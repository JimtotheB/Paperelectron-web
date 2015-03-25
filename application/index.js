/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron-web
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

var http = require('http');
var app = require('./server');
var server = http.createServer(app);

server.listen(8080, function(){
  console.log('Application started on port 8080');
});