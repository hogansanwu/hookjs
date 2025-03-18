// ==UserScript==
// @name        hook_window_size
// @version     2025-03-18
// @description try to take over the world!
// @author      Hogan Pei
// @match       https://*/*
// @grant       none
// @homepageURL https://github.com/hogansanwu
// @run-at      document-start
// ==/UserScript==

(function () {
    'use strict';

    let height = 900;
    let width = 1440;

    let innerHeight_property_accessor = Object.getOwnPropertyDescriptor(window, "innerHeight");
    let innerHeight_set_accessor = innerHeight_property_accessor.set;

    Object.defineProperty(window, "innerHeight", {
        get: function () {
            return height;
        },
        set: function () {
            innerHeight_set_accessor.call(window, height);
        }
    });

    let innerWidth_property_accessor = Object.getOwnPropertyDescriptor(window, "innerWidth");
    let innerWidth_set_accessor = innerWidth_property_accessor.set;

    Object.defineProperty(window, "innerWidth", {
        get: function () {
            return width;
        },
        set: function () {
            innerWidth_set_accessor.call(window, width);
        }
    });
})();