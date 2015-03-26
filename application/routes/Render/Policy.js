/**
 * @file Policy
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron-web
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

var Router = require('express').Router();
/**
 * Policy statement routes
 * @module Policy
 */

module.exports = function(app) {

  Router.get('/privacy', function(req, res, next){
    res.render('policies/privacy', {title: 'Privacy Policy'})
  });

  app.use('/policies', Router);
  return Router
};