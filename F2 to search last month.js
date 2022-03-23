// ==UserScript==
// @name         F2 to search last month
// @version      1.0
// @description  search only recent month on F2
// @match        *www.google.com/search*
// @exclude      *&source=lnt&tbs=qdr:*
// @run-at       document-start
// ==/UserScript==

var currentUrl = window.location.href
window.addEventListener('keydown', function (a) { if (a.which == 113) {
window.location.replace(currentUrl + '&source=lnt&tbs=qdr:m');
}})

