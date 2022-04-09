/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function turnToHtml(str){\n    let temp_div=document.createElement(\"div\")\n    temp_div.innerHTML=str\n    return temp_div.querySelector(\"*:nth-child(1)\")\n}\n\nfunction addDropDownBtn(){\n    const btn=turnToHtml(`<button class=\"drop-down-btn\">bruh</button>`)\n    btn.style.height=\"30px\"\n    btn.style.position=\"relative\"\n    btn.addEventListener(\"mouseenter\",addDropdown)\n    btn.addEventListener(\"mouseleave\",deleteDropdown)\n    document.body.appendChild(btn)\n}\n\nfunction addDropDownLinks(dropdownElem,linksObj){\n    console.log(linksObj)\n    linksObj={\"yo\":\"https://google.com\"}\n    for(const [name,link] of Object.entries(linksObj)){\n        dropdownElem.appendChild(turnToHtml(`\n        <li class=\"dropdown-link\"><a href=\"${link}\">${name}</a></li>\n        `))\n    }\n}\n\n\nfunction addDropdown(evt){\n    dropdownElem=turnToHtml(`<ul class=\"dropdown\"></ul>`)\n    addDropDownLinks(dropdownElem)\n    dropdownElem.style.position=\"absolute\"\n    dropdownElem.style.right=0\n    dropdownElem.style.bottom=10\n    evt.target.appendChild(dropdownElem)\n    addDropDownLinks(dropdownElem,{\"yo\":\"https://google.com\"})\n}\n\nfunction deleteDropdown(){\n    // document.querySelector(\".dropdown\").remove()\n}\n\n\naddDropDownBtn()\n\n//# sourceURL=webpack://dropdown-menu/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;