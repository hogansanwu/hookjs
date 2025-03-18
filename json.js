// ==UserScript==
// @name        hook_json
// @version     2025-03-18
// @description try to take over the world!
// @author      Hogan Pei
// @match       https://*/*
// @grant       none
// @homepageURL https://github.com/hogansanwu
// @run-at      document-start
// ==/UserScript==

// JSON.stringify   ------------------------------------------
(function() {
    var stringify = JSON.stringify;
    JSON.stringify = function(params) {
        console.log("Hook JSON.stringify ——> ", params);
        debugger;
        return stringify(params);
    }
})();

// JSON.parse   ------------------------------------------
(function() {
    var parse = JSON.parse;
    JSON.parse = function(params) {
        console.log("Hook JSON.parse ——> ", params);
        debugger;
        return parse(params);
    }
})();