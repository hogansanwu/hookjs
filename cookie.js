// ==UserScript==
// @name        hook_cookie
// @version     2025-03-18
// @description try to take over the world!
// @author      Hogan Pei
// @match       https://*/*
// @grant       none
// @homepageURL https://github.com/hogansanwu
// @run-at      document-start
// ==/UserScript==

var ckstr = 'v=';

(function () {
  'use strict';
  var cookieTemp = '';
  Object.defineProperty(document, 'cookie', {
    set: function (val) {
      if (val.indexOf(ckstr) != -1) {
        debugger;
      }
      console.log('cookie set->', val);
      cookieTemp = val;
      return val;
    },
    get: function () {
      return cookieTemp;
    },
  });
})();

(function () {
    'use strict';
    var org = document.cookie.__lookupSetter__('cookie');
    document.__defineSetter__('cookie', function (cookie) {
        if (cookie.indexOf(ckstr) != -1) {
            debugger;
        }
        org = cookie;
    });
    document.__defineGetter__('cookie', function () {
        return org;
    });
})();
