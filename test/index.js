const expect = require('chai').expect;
const path = require('path');
const fs = require('fs');
const md5File = require('md5-file');

const versions = require('../versions.json');
const jarfile = require('../index').jar;

describe('selenium-standalone-server-jar', () => {
  describe('path', () => {
    it('points to a jar', () => {
      expect(jarfile).to.exist;
      expect(path.extname(jarfile)).to.equal('.jar');
    });

    it('is an absolute path', () => {
      expect(path.resolve(jarfile)).to.equal(jarfile);
    });

    it('exists', (done) => {
      fs.exists(jarfile, (exists) => {
        expect(exists).to.be.true;
        done();
      });
    });
  });
});


const testMD5 = (file, expectedHash) => {
  return new Promise((resolve, reject) => {
    md5File(file, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        if (hash !== expectedHash) {
          reject(new Error('Hashes do not match'));
        } else {
          resolve();
        }
      }
    });
  });
};

describe('Versions', () => {
  describe('ETags', () => {
    describe('selenium', () => {
      it('matches jar', (done) => {
        testMD5(jarfile, versions.jar[versions.jar.latest])
        .then(done)
        .catch(done);
      });
    });
    describe('drivers', () => {
      const testDriver = (browser, os) => {
        it(`matches ${os} zip`, (done) => {
          const file = path.resolve(__dirname, `../drivers/${os}_${browser}driver_${versions.drivers[browser][os].latest}.zip`);
          testMD5(file, versions.drivers.chrome.mac32[versions.drivers.chrome.mac32.latest])
          .then(done)
          .catch(done);
        });
      }

      // Loop through driver keys and test the latest versions
      Object.keys(versions.drivers).forEach((browser) => {
        describe(browser, () => {
          Object.keys(versions.drivers[browser]).forEach(testDriver.bind(testDriver, browser));
        });
      });
    });
  });
});
