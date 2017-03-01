var versions = require('./versions.json');
var path = require('path');

module.exports = {
  jar: path.resolve(__dirname, 'jar/selenium-server-standalone-' + versions.jar.latest + '.jar'),
  chrome: {
    mac64: path.resolve(__dirname, 'drivers/chromedriver_mac64_' + versions.drivers.chrome.mac64.latest),
  }
};
