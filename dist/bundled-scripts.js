/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/custom-elements/Carousel/Carousel.js":
/*!**************************************************!*\
  !*** ./src/custom-elements/Carousel/Carousel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory */ \"./src/custom-elements/factory.js\");\n\r\n\r\nconst Carousel = _factory__WEBPACK_IMPORTED_MODULE_0__.CustomElementFactory.createElement(`\r\n  <div class=\"card\">\r\n    <img  loading=\"lazy\" id=\"soul\" src=\"../assets/images/album-cover.jpg\" alt=\"Album Cover\">\r\n    <div class=\"content\">\r\n      <h4>Trapsoul</h4>\r\n      <h6>BRYSON TILLER</h6>\r\n      <p>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n  <img  loading=\"lazy\" id=\"soul\" src=\"../assets/images/album-cover.jpg\" alt=\"Album Cover\">\r\n  <div class=\"content\">\r\n    <h4>Trapsoul</h4>\r\n    <h6>BRYSON TILLER</h6>\r\n    <p>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.\r\n    </p>\r\n  </div>\r\n</div>\r\n<div class=\"card\" data-active>\r\n<img  loading=\"lazy\" id=\"soul\" src=\"../assets/images/album-cover.jpg\" alt=\"Album Cover\">\r\n<div class=\"content\">\r\n  <h4>Trapsoul</h4>\r\n  <h6>BRYSON TILLER</h6>\r\n  <p>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.\r\n  </p>\r\n</div>\r\n</div>\r\n<div class=\"card\">\r\n<img  loading=\"lazy\" id=\"soul\" src=\"../assets/images/album-cover.jpg\" alt=\"Album Cover\">\r\n<div class=\"content\">\r\n  <h4>Trapsoul</h4>\r\n  <h6>BRYSON TILLER</h6>\r\n  <p>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.\r\n  </p>\r\n</div>\r\n</div>\r\n<div class=\"card\">\r\n<img  loading=\"lazy\" id=\"soul\" src=\"../assets/images/album-cover.jpg\" alt=\"Album Cover\">\r\n<div class=\"content\">\r\n  <h4>Trapsoul</h4>\r\n  <h6>BRYSON TILLER</h6>\r\n  <p>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.\r\n  </p>\r\n</div>\r\n</div>\r\n`);\r\n\r\ncustomElements.define(\"carousel-row\", Carousel);\r\n\r\nconst buttons = document.querySelectorAll(\"[data-carousel]\");\r\nconst carousel = document.getElementById(\"carousel\");\r\nconst cards = [...document.querySelectorAll(\"#carousel .card\")];\r\n\r\nbuttons.forEach((button) => {\r\n  button.addEventListener(\"click\", () => {\r\n    const motion = button.getAttribute(\"data-carousel\");\r\n    const offset = (motion === \"next\" ? 1 : -1);\r\n    const active = document.querySelector(\"[data-active]\");\r\n    const currentIndex = cards.indexOf(active);\r\n    let newIndex = currentIndex + offset;\r\n\r\n    if(newIndex < 0){\r\n      newIndex = cards.length-1;\r\n    }\r\n    else if(newIndex >= cards.length){\r\n      newIndex = 0;\r\n    }\r\n\r\n    cards[currentIndex].removeAttribute(\"data-active\");\r\n    cards[newIndex].setAttribute(\"data-active\", \"\");\r\n\r\n    const relativePositionOffset = 2;\r\n    const relativePositionValue = -(newIndex - relativePositionOffset);\r\n    carousel.setAttribute(\"data-position\", relativePositionValue);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/Carousel/Carousel.js?");

/***/ }),

/***/ "./src/custom-elements/Form/Form.js":
/*!******************************************!*\
  !*** ./src/custom-elements/Form/Form.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory */ \"./src/custom-elements/factory.js\");\n\r\n\r\nconst Form = _factory__WEBPACK_IMPORTED_MODULE_0__.CustomElementFactory.createElement(`\r\n<ul>\r\n  <li>\r\n    <label for=\"first-name\">\r\n      <span>First Name</span>\r\n      <input type=\"text\" id=\"first-name\" name=\"first-name\" \r\n            placeholder=\"First Name\" required/>\r\n    </label>\r\n  </li>\r\n  <li>\r\n    <label for=\"last-name\">\r\n      <span>Last Name</span>\r\n      <input type=\"text\" id=\"last-name\" name=\"last-name\" \r\n            placeholder=\"Last Name\" required/>\r\n    </label>\r\n  </li>\r\n  <li>\r\n    <label for=\"email\">\r\n      <span>Email Address</span>\r\n      <input type=\"email\" id=\"email\" name=\"email\" \r\n            placeholder=\"Email Address\" required/>\r\n    </label>\r\n  </li>\r\n  <li>\r\n    <label for=\"contacting\">\r\n      <span>Reason for Contacting</span>\r\n      <select name=\"contacting\" id=\"contacting-select\">\r\n        <option value=\"\">Select One</option>\r\n        <option value=\"Employment\">Employment</option>\r\n        <option value=\"Future-Project\">Future Project</option>\r\n        <option value=\"Learn-More\">Learn More</option>\r\n      </select>                 \r\n    </label>\r\n  </li>\r\n  </ul>\r\n  <div>\r\n    <label for=\"message\">\r\n      Message (Optional)\r\n      <textarea id=\"optional-message\" name=\"message\">Write a brief message...\r\n      </textarea>\r\n    </label>\r\n  </div>\r\n<button class=\"action-button\" class=\"learn-more\">Learn More</button>\r\n`);\r\n\r\ncustomElements.define(\"contact-form\", Form);\r\n\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/Form/Form.js?");

/***/ }),

/***/ "./src/custom-elements/Hero/Hero.js":
/*!******************************************!*\
  !*** ./src/custom-elements/Hero/Hero.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory */ \"./src/custom-elements/factory.js\");\n\r\n\r\nconst HeroBanner = _factory__WEBPACK_IMPORTED_MODULE_0__.CustomElementFactory.createElement(`\r\n  <div id=\"background-zoom-wrapper\" class=\"scroll-spy\"></div>\r\n  <div class=\"content\">\r\n    <h1>A.M. Paradox</h1>\r\n    <p>Christopher Brent Wood, better known by his stage name Brent Faiyaz, is\r\n        an American singer and record producer. He released his debut project, an extended play entitled A.M. Paradox, in 2016.\r\n    </p>\r\n    <button id=\"play\" aria-label=\"Play Video\">\r\n      <span class=\"background\">\r\n        <span class=\"icon\" data-icon=\"play\"></span>\r\n      </span>\r\n      <span>Watch Video</span>\r\n    </button>\r\n  </div>\r\n`);\r\n\r\ncustomElements.define(\"hero-banner\", HeroBanner);\r\n\r\nconst selected = document.querySelectorAll(\".scroll-spy\")[0];\r\nconst observer = new IntersectionObserver((elements) => {\r\n  elements.forEach((el) => {\r\n    if(el.isIntersecting){\r\n      el.target.classList.add(\"zoom\");\r\n    }\r\n    else{\r\n      el.target.classList.remove(\"zoom\");\r\n    }\r\n  });\r\n}, {threshold: [0.25]});\r\n\r\nobserver.observe(selected);\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/Hero/Hero.js?");

/***/ }),

/***/ "./src/custom-elements/NavBar/MobileNavBar.js":
/*!****************************************************!*\
  !*** ./src/custom-elements/NavBar/MobileNavBar.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory */ \"./src/custom-elements/factory.js\");\n\r\n\r\nconst MobileNavBar = _factory__WEBPACK_IMPORTED_MODULE_0__.CustomElementFactory.createElement(`\r\n  <nav-bar id=\"mobile-nav-bar\" \r\n           role=\"navigation\" \r\n           aria-expanded=\"false\">\r\n    <button id=\"bar-toggle\" \r\n            aria-controls=\"mobile-nav-bar\"\r\n            aria-expanded=\"false\">\r\n      <span class=\"line\"></span>\r\n    </button>\r\n  </nav-bar>\r\n`);\r\n\r\ncustomElements.define(\"mobile-nav-bar\", MobileNavBar);\r\n\r\nconst toggle = document.querySelector(\"#bar-toggle\");\r\nconst navLinks = document.querySelector(\"#mobile-nav-bar .link-group\");\r\nconst content = document.querySelector(\"#mobile-nav-bar\");\r\n\r\ntoggle.addEventListener(\"click\", () => {\r\n  toggle.ariaExpanded = (toggle.ariaExpanded !== \"true\");\r\n  navLinks.ariaExpanded = (navLinks.ariaExpanded !== \"true\");\r\n  content.ariaExpanded = (content.ariaExpanded !== \"true\");\r\n});\r\n\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/NavBar/MobileNavBar.js?");

/***/ }),

/***/ "./src/custom-elements/NavBar/NavBar.js":
/*!**********************************************!*\
  !*** ./src/custom-elements/NavBar/NavBar.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory */ \"./src/custom-elements/factory.js\");\n\r\n\r\nconst NavBar = _factory__WEBPACK_IMPORTED_MODULE_0__.CustomElementFactory.createElement(`\r\n  <div class=\"link-group\">\r\n    <ul class=\"link-list\">\r\n      <li>\r\n        <a href=\"#home\">\r\n          <span class=\"icon\" role=\"presentation\" data-icon=\"home\"></span>\r\n          Home\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#records\">\r\n          <span class=\"icon\" role=\"presentation\" data-icon=\"records\"></span>\r\n          Records\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#music\">\r\n          <span class=\"icon\" role=\"presentation\" data-icon=\"music\"></span>\r\n          Music\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#artists\">\r\n          <span class=\"icon\" role=\"presentation\" data-icon=\"artists\"></span>\r\n          Artists\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#concerts\">\r\n          <span class=\"icon\" role=\"presentation\" data-icon=\"concerts\"></span>\r\n          Concerts\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <button class=\"sign-up action-button mobile-only\">Sign Up</button>\r\n  </div>\r\n`);\r\n    \r\ncustomElements.define(\"nav-bar\", NavBar);\r\n\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/NavBar/NavBar.js?");

/***/ }),

/***/ "./src/custom-elements/Sitemap/Address.js":
/*!************************************************!*\
  !*** ./src/custom-elements/Sitemap/Address.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory */ \"./src/custom-elements/factory.js\");\n\r\n\r\nconst Address = _factory__WEBPACK_IMPORTED_MODULE_0__.CustomElementFactory.createElement(`\r\n  <address>\r\n    <div>\r\n      <span>8521 W Fairfax Rd</span>\r\n      <span>Los Angeles, CA</span>\r\n    </div>\r\n    <div>\r\n      <span>990210</span>\r\n      <a href=\"tel:+19095054302\">(909) 505 4302</a>\r\n    </div>\r\n  </address>\r\n`);\r\n    \r\ncustomElements.define(\"business-address\", Address);\r\n\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/Sitemap/Address.js?");

/***/ }),

/***/ "./src/custom-elements/Sitemap/Columns/Artists.js":
/*!********************************************************!*\
  !*** ./src/custom-elements/Sitemap/Columns/Artists.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factory */ \"./src/custom-elements/factory.js\");\n\r\n\r\nconst Artists = _factory__WEBPACK_IMPORTED_MODULE_0__.CustomElementFactory.createElement(`\r\n  <h6>ARTISTS</h6>\r\n  <ul>\r\n    <li>\r\n      <a href=\"#artists/brent-faiyaz\">Brent Faiyaz</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#artists/drake\">Drake</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#artists/bryson-ford\">Bryson Ford</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#artists/young-ford\">Young Ford</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#artists/roy-fresco\">Roy Fresco</a>\r\n    </li>\r\n  </ul>\r\n`);\r\n\r\ncustomElements.define(\"artists-column\", Artists);\r\n\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/Sitemap/Columns/Artists.js?");

/***/ }),

/***/ "./src/custom-elements/Sitemap/Columns/Explore.js":
/*!********************************************************!*\
  !*** ./src/custom-elements/Sitemap/Columns/Explore.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factory */ \"./src/custom-elements/factory.js\");\n\r\n\r\nconst Explore = _factory__WEBPACK_IMPORTED_MODULE_0__.CustomElementFactory.createElement(`\r\n  <h6>EXPLORE</h6>\r\n  <ul>\r\n    <li>\r\n      <a href=\"#explore/about-us\">About us</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#explore/our-story\">Our Story</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#explore/team\">Team</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#explore/careers\">Careers</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#explore/faq\">FAQ</a>\r\n    </li>\r\n  </ul>\r\n`);\r\n\r\ncustomElements.define(\"explore-column\", Explore);\r\n\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/Sitemap/Columns/Explore.js?");

/***/ }),

/***/ "./src/custom-elements/Sitemap/Columns/Music.js":
/*!******************************************************!*\
  !*** ./src/custom-elements/Sitemap/Columns/Music.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factory */ \"./src/custom-elements/factory.js\");\n\r\n\r\nconst Music = _factory__WEBPACK_IMPORTED_MODULE_0__.CustomElementFactory.createElement(`\r\n  <h6>MUSIC</h6>\r\n  <ul>\r\n    <li>\r\n      <a href=\"#music/missing-out\">Missing Out</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#music/trapsoul\">Trapsoul</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#music/sonder-sons\">Sonder Sons</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#music/paradise-today\">Paradise Today</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#music/needed\">Needed</a>\r\n    </li>\r\n  </ul>\r\n`);\r\n\r\ncustomElements.define(\"music-column\", Music);\r\n\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/Sitemap/Columns/Music.js?");

/***/ }),

/***/ "./src/custom-elements/Sitemap/Columns/Records.js":
/*!********************************************************!*\
  !*** ./src/custom-elements/Sitemap/Columns/Records.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factory */ \"./src/custom-elements/factory.js\");\n\r\n\r\nconst Records = _factory__WEBPACK_IMPORTED_MODULE_0__.CustomElementFactory.createElement(`\r\n  <h6>RECORDS</h6>\r\n  <ul>\r\n    <li>\r\n      <a href=\"#records/what-a-time\">What a Time</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#records/coming-home\">Coming Home</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#records/always-first\">Always First</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#records/so-far-gone\">So Far Gone</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#records/big-bluez\">Big Bluez</a>\r\n    </li>\r\n  </ul>\r\n`);\r\n\r\ncustomElements.define(\"records-column\", Records);\r\n\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/Sitemap/Columns/Records.js?");

/***/ }),

/***/ "./src/custom-elements/Sitemap/SocialBar.js":
/*!**************************************************!*\
  !*** ./src/custom-elements/Sitemap/SocialBar.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory */ \"./src/custom-elements/factory.js\");\n\r\n\r\nconst SocialBar = _factory__WEBPACK_IMPORTED_MODULE_0__.CustomElementFactory.createElement(`\r\n  <address id=\"social-links\">\r\n    <ul>\r\n      <li>\r\n        <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.instagram.com/\">\r\n          <span class=\"icon social\" role=\"presentation\" data-icon=\"instagram\"></span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.youtube.com/\">\r\n          <span class=\"icon social\" role=\"presentation\" data-icon=\"youtube\"></span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://twitter.com/\">\r\n          <span class=\"icon social\" role=\"presentation\" data-icon=\"twitter\"></span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.facebook.com/\">\r\n          <span class=\"icon social\" role=\"presentation\" data-icon=\"facebook\"></span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </address>\r\n`);\r\n    \r\ncustomElements.define(\"social-bar\", SocialBar);\r\n\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/Sitemap/SocialBar.js?");

/***/ }),

/***/ "./src/custom-elements/factory.js":
/*!****************************************!*\
  !*** ./src/custom-elements/factory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CustomElementFactory: () => (/* binding */ CustomElementFactory)\n/* harmony export */ });\nconst CustomElementFactory = {\r\n\r\n  createElement(html){\r\n    const template = document.createElement(\"template\");\r\n    template.innerHTML = html;\r\n\r\n    return(\r\n      class CustomElement extends HTMLElement{\r\n        constructor(){\r\n          super();\r\n          const content = template.content.cloneNode(true);\r\n          this.append(content);\r\n        }\r\n      }\r\n    );\r\n  }\r\n};\n\n//# sourceURL=webpack://coding-challenge/./src/custom-elements/factory.js?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _custom_elements_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-elements/factory.js */ \"./src/custom-elements/factory.js\");\n/* harmony import */ var _custom_elements_NavBar_NavBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-elements/NavBar/NavBar.js */ \"./src/custom-elements/NavBar/NavBar.js\");\n/* harmony import */ var _custom_elements_NavBar_MobileNavBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-elements/NavBar/MobileNavBar.js */ \"./src/custom-elements/NavBar/MobileNavBar.js\");\n/* harmony import */ var _custom_elements_Sitemap_SocialBar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-elements/Sitemap/SocialBar.js */ \"./src/custom-elements/Sitemap/SocialBar.js\");\n/* harmony import */ var _custom_elements_Sitemap_Address_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-elements/Sitemap/Address.js */ \"./src/custom-elements/Sitemap/Address.js\");\n/* harmony import */ var _custom_elements_Sitemap_Columns_Artists_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-elements/Sitemap/Columns/Artists.js */ \"./src/custom-elements/Sitemap/Columns/Artists.js\");\n/* harmony import */ var _custom_elements_Sitemap_Columns_Explore_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-elements/Sitemap/Columns/Explore.js */ \"./src/custom-elements/Sitemap/Columns/Explore.js\");\n/* harmony import */ var _custom_elements_Sitemap_Columns_Records_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-elements/Sitemap/Columns/Records.js */ \"./src/custom-elements/Sitemap/Columns/Records.js\");\n/* harmony import */ var _custom_elements_Sitemap_Columns_Music_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-elements/Sitemap/Columns/Music.js */ \"./src/custom-elements/Sitemap/Columns/Music.js\");\n/* harmony import */ var _custom_elements_Hero_Hero_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-elements/Hero/Hero.js */ \"./src/custom-elements/Hero/Hero.js\");\n/* harmony import */ var _custom_elements_Carousel_Carousel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-elements/Carousel/Carousel.js */ \"./src/custom-elements/Carousel/Carousel.js\");\n/* harmony import */ var _custom_elements_Form_Form_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-elements/Form/Form.js */ \"./src/custom-elements/Form/Form.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://coding-challenge/./src/entry.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entry.js");
/******/ 	
/******/ })()
;