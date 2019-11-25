<!-- TITLE/ -->

<h1>get-projectz-readme-section-regex</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/get-projectz-readme-section-regex" title="View this project on NPM"><img src="https://img.shields.io/npm/v/get-projectz-readme-section-regex.svg" alt="NPM version" /></a></span>
<span class="badge-travisci"><a href="http://travis-ci.org/dword-design/get-projectz-readme-section-regex" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/dword-design/get-projectz-readme-section-regex/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-coveralls"><a href="https://coveralls.io/r/dword-design/get-projectz-readme-section-regex" title="View this project's coverage on Coveralls"><img src="https://img.shields.io/coveralls/dword-design/get-projectz-readme-section-regex.svg" alt="Coveralls Coverage Status" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/dword-design/get-projectz-readme-section-regex" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/dword-design/get-projectz-readme-section-regex.svg" alt="Dependency Status" /></a></span>
<span class="badge-shields"><a href="https://img.shields.io/badge/renovate-enabled-brightgreen.svg"><img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Returns a regex for Projectz readme sections depending on the section name.

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save get-projectz-readme-section-regex</code></li>
<li>Require: <code>require('get-projectz-readme-section-regex')</code></li>
</ul>

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

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; Sebastian Landwehr</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
