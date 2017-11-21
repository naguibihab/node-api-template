'use strict';
module.exports = function(app) {
  var token = require('../controllers/tokenController');

  // Routes
  app.route('/token')
    .get(token.generate_token)
    .post(token.generate_token);
};