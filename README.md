<!-- TITLE/ -->
# get-projectz-readme-section-regex
<!-- /TITLE -->

<!-- BADGES/ -->
[![NPM version](https://img.shields.io/npm/v/get-projectz-readme-section-regex.svg)](https://npmjs.org/package/get-projectz-readme-section-regex)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)
[![Build status](https://img.shields.io/github/workflow/status/dword-design/get-projectz-readme-section-regex/build)](https://github.com/dword-design/get-projectz-readme-section-regex/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/get-projectz-readme-section-regex)](https://coveralls.io/github/dword-design/get-projectz-readme-section-regex)
[![Dependency status](https://img.shields.io/david/dword-design/get-projectz-readme-section-regex)](https://david-dm.org/dword-design/get-projectz-readme-section-regex)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

<a href="https://www.buymeacoffee.com/dword">
  <img
    src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
    alt="Buy Me a Coffee"
    height="32"
  >
</a><a href="https://gitpod.io/#https://github.com/dword-design/get-projectz-readme-section-regex">
  <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod">
</a>
<a href="https://paypal.me/SebastianLandwehr">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
    alt="PayPal"
    height="30"
  >
</a>
<!-- /BADGES -->


<!-- DESCRIPTION/ -->
Returns a regex for Projectz readme sections depending on the section name.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# NPM
$ npm install get-projectz-readme-section-regex

# Yarn
$ yarn add get-projectz-readme-section-regex
```
<!-- /INSTALL -->

## Usage
```js
const getProjectzReadmeSectionRegex = require('get-projectz-readme-section-regex')

getProjectzReadmeSectionRegex('BADGES').test('<!-- BADGES -->')
// |> true

getProjectzReadmeSectionRegex('BADGES').test('<!-- BADGES/ -->\nfoo bar baz<!-- /BADGES -->')
// |> true

getProjectzReadmeSectionRegex('BADGES').test('<!-- INSTALL -->')
// |> false
```

<!-- LICENSE/ -->
## License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->
