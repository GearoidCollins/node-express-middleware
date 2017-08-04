'use strict';

module.exports = function (app) {
  // Root routing
  const availRequest = require('../controllers/core.controller');
  const avail = require('../parse/locations.parse');

  // Define error pages
  app.route('/all').get(availRequest.all, avail.parse);


};
