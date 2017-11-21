'use strict';

exports.generate_token = function(req, res) {
  res.json(Math.random());
};