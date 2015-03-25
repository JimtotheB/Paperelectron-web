/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron-web
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 * Mounts all of the application routes.
 * @module index
 */

var fs = require('fs');
var path = require('path');


module.exports = function(app){
  var routesPath = __dirname;
  fs.readdirSync(routesPath)
    .filter(function(file) {
      var pendingIncludePath = path.join(routesPath, file);

      /** Non hidden directories. */
      var isDir = fs.statSync(pendingIncludePath).isDirectory();
      var notHidden = pendingIncludePath.indexOf('.') !== 0
      return (isDir && notHidden)

    })
    .map(function(pI) {
      return path.join(routesPath, pI)
    })
    .forEach(function(include) {
      var validPath = fs.readdirSync(include);

      /** Bare directory with an index.js file include as is. */
      if(validPath.length === 1 && validPath[0] === 'index.js'){
        require(include)(app)
      }
      /** Directory contains named files, include them. */
      else {
        validPath
          .filter(function(file) {
            var notHidden = file.indexOf('.') !== 0;
            var notIndex = file !== 'index.js';
            var notMap = !!file.indexOf('.map')
            return (notHidden && notIndex  &&  notMap)
          })
          .map(function(nI){
            return path.join(include, nI)
          })
          .forEach(function(namedInclude) {
            require(namedInclude)(app)
          })
      }
    });
};