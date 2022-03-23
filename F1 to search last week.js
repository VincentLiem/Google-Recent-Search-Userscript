// ==UserScript==
// @name         F1 to search last week
// @version      1.0
// @description  search only recent week on F1
// @match        *www.google.com/search*
// @exclude      *&source=lnt&tbs=qdr:*
// @run-at       document-start
// ==/UserScript==

var currentUrl = window.location.href
window.addEventListener('keydown', function (a) { if (a.which == 112) {
window.location.replace(currentUrl + '&source=lnt&tbs=qdr:w');
}})
