'use strict';

module.exports = function (app) {
  // Root routing
  const core = require('../controllers/core.controller');

  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  // app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

};
