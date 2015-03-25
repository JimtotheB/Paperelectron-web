/**
 * @file FrontPage
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron-web
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 * Main Page of Paperelectron.com
 * @module FrontPage
 */

var Router = require('express').Router();

module.exports = function(app) {

  Router.get('/', function(req, res, next){
    res.render('Frontpage')
  });

  app.use('/', Router);
  return Router
};