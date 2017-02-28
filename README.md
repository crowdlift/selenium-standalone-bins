Jarfile and browser drivers for selenium-server-standalone.

Include this package for use with Nightwatch.js.

## Installation

```bash
yarn add --dev github:crowdlift/selenium-server-standalone-jar#v3.1.0
```

## Upgrading

To upgrade the contents of this repo:

1. Download [latest jar](https://selenium-release.storage.googleapis.com/index.html) into jar/
1. Download [latest chrome drivers](https://chromedriver.storage.googleapis.com/index.html) into drivers/
1. Update [versions.json](versions.json) with the version numbers and ETags
1. Run `yarn test` to confirm binaries match ETag hashes
1. Bump version in [package.json](package.json)
1. Commit and tag a new release

```bash
# Create a new tag
git tag v3.1.0
# Push to github
git push origin v3.1.0
# OR push all tags
git push origin --tags
```
