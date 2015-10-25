'use strict';

var subApp = require('./subapp');

function getSubApp() {
  var fooSubApp = subApp.getBaseSubApp();

  fooSubApp.get('/', function (req, res, next) {
    return res.status(200).send();
  });

  return fooSubApp;
}

module.exports = {
  getSubApp: getSubApp
};
