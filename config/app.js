'use strict';

/**
 * Module dependencies.
 */
const chalk = require('chalk');

const config = require('./config');
const express = require('./express');

module.exports.init = function init(callback) {

  // Initialize express
  const app = express.init();

  if (callback) {
    callback(app, config);
  }
};

module.exports.start = function start(callback) {
  const _this = this;

  _this.init(function (app, config) {

    // Start the app by listening on <port> at <host>
    app.listen(config.port, config.host, function () {
      // Create server URL
      const server = (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + config.host + ':' + config.port;

      // Logging initialization
      console.log('--');
      console.log(chalk.green(config.app.title));
      console.log();
      console.log(chalk.green(`Environment:     ${process.env.NODE_ENV}`));
      console.log(chalk.green(`Server:          ${server}`));
      console.log(chalk.green(`App version:     ${config.pkg.version}`));
      console.log('--');

      if (callback) {
        callback(app, config);
      }
    });

  });

};
