# tm-test
Tampermonkey test script

# Installation

If using Chrome Browser install [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=hr) extension or if preffering FireFox then [GreaseMonkey](https://addons.mozilla.org/hr/firefox/addon/greasemonkey/) addon.

Enable TamperMonkey/GreaseMonkey via extension/addon console, create new script and paste in it the code bellow and save it:

```javascript
// ==UserScript==
// @name         Test github served TM script
// @namespace    https://ihusnja4.github.io/tm-test
// @version      0.1
// @description  Mic check, mic check
// @author       ihusnja4
// @match        http://*/*
// @require      https://ihusnja4.github.io/tm-test/main.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     console.log('TMTestScript installed', undefined !== TMTestScript);
})();
```

To verify that script is installed, visit any website and open developers console.  
There should be log entry written:  
`TMTestScript installed true`

# Usage

Open developer console and type in following:
```javascript
TMTestScript.sayHi('Your name');
```
