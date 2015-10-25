'use strict';

var bunyan = require('bunyan');
var logger = bunyan.createLogger({
  name: '<%= name %>',
  streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    },
    {
      level: 'error',
      stream: process.stdout
    }
  ]
});

logger.log = logger.info;

module.exports = logger;
