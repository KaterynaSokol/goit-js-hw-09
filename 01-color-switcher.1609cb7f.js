!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled",""),a=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));r.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",""),t.removeAttribute("disabled",""),clearInterval(a)}));var a=null}();
//# sourceMappingURL=01-color-switcher.1609cb7f.js.map