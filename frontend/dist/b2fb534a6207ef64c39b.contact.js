/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"contact": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/Entries/Contact.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/Footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/Components/Footer/Footer.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _Uri = __webpack_require__(/*! Utils/Uri */ \"./src/Utils/Uri.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Footer = function (_React$Component) {\n    (0, _inherits3.default)(Footer, _React$Component);\n\n    function Footer() {\n        (0, _classCallCheck3.default)(this, Footer);\n        return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(Footer, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _reactBootstrap.Container,\n                { className: 'mt-3 mb-3' },\n                _react2.default.createElement(\n                    _reactBootstrap.Row,\n                    null,\n                    _react2.default.createElement(\n                        _reactBootstrap.Col,\n                        { className: 'text-left' },\n                        _react2.default.createElement(\n                            'p',\n                            null,\n                            'Do you questions? ',\n                            _react2.default.createElement(\n                                'a',\n                                { href: (0, _Uri.getUrl)('/contact') },\n                                'Contact us'\n                            )\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _reactBootstrap.Col,\n                        { className: 'text-right' },\n                        _react2.default.createElement(\n                            'p',\n                            null,\n                            'Copyright \\xA9 2019'\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n    return Footer;\n}(_react2.default.Component);\n\nexports.default = Footer;\n\n//# sourceURL=webpack:///./src/Components/Footer/Footer.jsx?");

/***/ }),

/***/ "./src/Components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/Components/Header/Header.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _Uri = __webpack_require__(/*! Utils/Uri */ \"./src/Utils/Uri.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function (_React$Component) {\n    (0, _inherits3.default)(Header, _React$Component);\n\n    function Header() {\n        (0, _classCallCheck3.default)(this, Header);\n        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(Header, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                _react2.default.createElement(\n                    _reactBootstrap.Navbar,\n                    { bg: 'light', fixed: 'top', expand: 'lg' },\n                    _react2.default.createElement(\n                        _reactBootstrap.Navbar.Brand,\n                        { href: '#home' },\n                        'React-Bootstrap'\n                    ),\n                    _react2.default.createElement(_reactBootstrap.Navbar.Toggle, { 'aria-controls': 'basic-navbar-nav' }),\n                    _react2.default.createElement(\n                        _reactBootstrap.Navbar.Collapse,\n                        { id: 'basic-navbar-nav' },\n                        _react2.default.createElement(\n                            _reactBootstrap.Nav,\n                            { className: 'mr-auto' },\n                            _react2.default.createElement(\n                                _reactBootstrap.Nav.Link,\n                                { href: (0, _Uri.getUrl)('/') },\n                                'Home'\n                            ),\n                            _react2.default.createElement(\n                                _reactBootstrap.Nav.Link,\n                                { href: (0, _Uri.getUrl)('/contact') },\n                                'Contact'\n                            ),\n                            _react2.default.createElement(\n                                _reactBootstrap.NavDropdown,\n                                { title: 'Dropdown', id: 'basic-nav-dropdown' },\n                                _react2.default.createElement(\n                                    _reactBootstrap.NavDropdown.Item,\n                                    { href: '#action/3.1' },\n                                    'Action'\n                                ),\n                                _react2.default.createElement(\n                                    _reactBootstrap.NavDropdown.Item,\n                                    { href: '#action/3.2' },\n                                    'Another action'\n                                ),\n                                _react2.default.createElement(\n                                    _reactBootstrap.NavDropdown.Item,\n                                    { href: '#action/3.3' },\n                                    'Something'\n                                ),\n                                _react2.default.createElement(_reactBootstrap.NavDropdown.Divider, null),\n                                _react2.default.createElement(\n                                    _reactBootstrap.NavDropdown.Item,\n                                    { href: '#action/3.4' },\n                                    'Separated link'\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            _reactBootstrap.Form,\n                            { inline: true },\n                            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'Search', className: 'mr-sm-2' }),\n                            _react2.default.createElement(\n                                _reactBootstrap.Button,\n                                { variant: 'outline-success' },\n                                'Search'\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement('div', { style: { height: 56 } })\n            );\n        }\n    }]);\n    return Header;\n}(_react2.default.Component);\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/Components/Header/Header.jsx?");

/***/ }),

/***/ "./src/Components/Page/Page.jsx":
/*!**************************************!*\
  !*** ./src/Components/Page/Page.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! Components/Header/Header */ \"./src/Components/Header/Header.jsx\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Footer = __webpack_require__(/*! Components/Footer/Footer */ \"./src/Components/Footer/Footer.jsx\");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Page = function (_React$Component) {\n    (0, _inherits3.default)(Page, _React$Component);\n\n    function Page() {\n        (0, _classCallCheck3.default)(this, Page);\n        return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(Page, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                _react2.default.createElement(_Header2.default, null),\n                this.props.children,\n                _react2.default.createElement(_Footer2.default, null)\n            );\n        }\n    }]);\n    return Page;\n}(_react2.default.Component); /* eslint-disable */\n\n\nexports.default = Page;\n\n//# sourceURL=webpack:///./src/Components/Page/Page.jsx?");

/***/ }),

/***/ "./src/Entries/Contact.jsx":
/*!*********************************!*\
  !*** ./src/Entries/Contact.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _Contact = __webpack_require__(/*! Pages/Contact/Contact */ \"./src/Pages/Contact/Contact.jsx\");\n\nvar _Contact2 = _interopRequireDefault(_Contact);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _reactDom.render)(_react2.default.createElement(_Contact2.default, null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/Entries/Contact.jsx?");

/***/ }),

/***/ "./src/Pages/Contact/Contact.jsx":
/*!***************************************!*\
  !*** ./src/Pages/Contact/Contact.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Page = __webpack_require__(/*! Components/Page/Page */ \"./src/Components/Page/Page.jsx\");\n\nvar _Page2 = _interopRequireDefault(_Page);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable */\nvar Contact = function (_React$Component) {\n    (0, _inherits3.default)(Contact, _React$Component);\n\n    function Contact() {\n        (0, _classCallCheck3.default)(this, Contact);\n        return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(Contact, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                _react2.default.createElement(\n                    _Page2.default,\n                    null,\n                    '1'\n                )\n            );\n        }\n    }]);\n    return Contact;\n}(_react2.default.Component);\n\nexports.default = Contact;\n\n//# sourceURL=webpack:///./src/Pages/Contact/Contact.jsx?");

/***/ }),

/***/ "./src/Utils/Uri.js":
/*!**************************!*\
  !*** ./src/Utils/Uri.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getUrl = getUrl;\nexports.getS3Url = getS3Url;\nfunction getUrl(path) {\n    return (\"/php-and-react\" + path).replace(/\\/\\//g, '/');\n}\n\nfunction getS3Url(path) {\n    return (\"https://php-and-react.s3.eu-central-1.amazonaws.com/\" + path).replace(/\\/\\//g, '/');\n}\n\n//# sourceURL=webpack:///./src/Utils/Uri.js?");

/***/ })

/******/ });