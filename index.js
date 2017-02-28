var versions = require('./versions.json');
var path = require('path');

module.exports = {
  jar: path.resolve(__dirname, 'jar/selenium-server-standalone-' + versions.jar.latest + '.jar'),
  chrome: {
    mac32: path.resolve(__dirname, 'drivers/mac32_chromedriver_' + versions.drivers.chrome.mac32.latest),
  }
};
