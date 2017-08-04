'use strict';

const ip = require('ip');

module.exports = {
  app: {
    title: 'Node Express App'
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || ip.address(),
  favicon: './assets/img/favicon.ico',
  domain: process.env.DOMAIN,
  csrf: {
    csrf: false,
    csp: false,
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    xssProtection: true
  },
  log: {
    // logging with Morgan - https://github.com/expressjs/morgan
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: 'dev',
    fileLogger: {
      directoryPath: process.cwd(),
      fileName: 'app.log',
      maxsize: 10485760,
      maxFiles: 2,
      json: false
    }
  }
};
