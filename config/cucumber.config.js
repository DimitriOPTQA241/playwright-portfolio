const path = require('path');

module.exports = {
  default: {

    // Où trouver les fichiers features
    paths: ['features/**/*.feature'],

    // Où trouver les steps et les hooks
    require: ['hooks.js',
  'steps/*.steps.js',
    ],

    // Format des rapports
    format: [
      'progress-bar',
  'html:reports/cucumber-report.html',
  'json:reports/cucumber-report.json',
    ],

    // Timeout par step
    timeout: 40000,
  },
};