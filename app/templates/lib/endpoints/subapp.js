'use strict';

var bodyParser = require('body-parser')
var express = require('express');

function getBaseSubApp() {
  var subApp = express();
  subApp.use(bodyParser.json());

  return subApp;
}

module.exports = {
  getBaseSubApp: getBaseSubApp
};
