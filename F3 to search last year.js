// ==UserScript==
// @name         F3 to search last year
// @version      1.0
// @description  search only recent year on F3
// @match        *www.google.com/search*
// @run-at       document-start
// ==/UserScript==

var currentUrl = window.location.href
window.addEventListener
  (
  'keydown', function (a) 
   { 
    if (a.which == 114)
    {
      window.location.replace(currentUrl + '&source=lnt&tbs=qdr:y');
    }
   }
  )
