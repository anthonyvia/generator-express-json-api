'use strict';

var generators = require('yeoman-generator');

var myGenerator = generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'your project name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'project description',
        default: ''
      }
    ], function (answers) {
      this.props = answers;
      done();
    }.bind(this));
  },
  writing: function () {
    var copyTpl = function copyTpl(tplPath, destPath) {
      this.fs.copyTpl(
        this.templatePath(tplPath),
        this.destinationPath(destPath),
        this.props
      );
    }.bind(this);
    copyTpl('bin/server', 'bin/server');
    copyTpl('lib/config.js', 'lib/config.js');
    copyTpl('package.json', 'package.json');
  },
  install: function () {
    this.log('installing dependencies');
    this.npmInstall();
  }
});

module.exports = myGenerator;
