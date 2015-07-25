/**
 * @file Sundry
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron-web
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

var Router = require('express').Router();

/**
 * Renders sundry
 * @module Sundry
 */

module.exports = function(app) {

  Router.get('/', function(req, res, next){
    res.render('policies/privacy', {title: 'Privacy Policy'})
  });

  app.use('/sundry', Router);
  return Router
};