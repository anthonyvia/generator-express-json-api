'use strict';

var env = process.env.NODE_ENV || 'development';
var hostname = process.env.HOSTNAME || '0.0.0.0';
var port = process.env.PORT || 8080;

module.exports = {
  env: env,
  hostname: hostname,
  port: port
};
