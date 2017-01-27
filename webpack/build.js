/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var http = __webpack_require__(1);
	var url = __webpack_require__(2);
	var fs = __webpack_require__(3);


	var server = http.createServer(function(req, res) {
	    var pathname = url.parse(req.url).pathname;
	    if ('/' == pathname) {
	        if (req.method === 'GET') {

	            //require('public/login.js');
	            //html表示
	            fs.readFile('index.html', 'UTF-8', function(err, data){
	                res.writeHead(200, {'Content-Type': 'text/html'});
	                res.end(data);
	            });
	        }
	    }
	});

	server.listen(5000, function () {
	    console.log('listening on port 5000');
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ]);