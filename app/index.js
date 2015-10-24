'use strict';

var generators = require('yeoman-generator');

var myGenerator = generators.Base.extend({
  getProps: function () {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'your project name',
      default: this.appname
    }, function (answers) {
      this.log(answers.name);
      done();
    }.bind(this));
  },
  setupAppFiles: function () {
    this.log('setting up app');
  },
  installDependencies: function () {
    this.log('installing dependencies');
  }
});

module.exports = myGenerator;
