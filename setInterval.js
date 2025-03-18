// ==UserScript==
// @name        hook_setInterval
// @version     2025-03-18
// @description try to take over the world!
// @author      Hogan Pei
// @match       https://*/*
// @grant       none
// @homepageURL https://github.com/hogansanwu
// @run-at      document-start
// ==/UserScript==

let setInterval_back = window.setInterval;
window.setInterval = function (a, b) {
    if (a.toString().includes('debugger')) {
        return null;
    } else {
        return setInterval_back(a, b);
    }
};
