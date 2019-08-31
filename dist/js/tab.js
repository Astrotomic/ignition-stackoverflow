/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(2);
var isBuffer = __webpack_require__(24);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(30);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(6);
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(6);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(31);
var buildURL = __webpack_require__(3);
var parseHeaders = __webpack_require__(33);
var isURLSameOrigin = __webpack_require__(34);
var createError = __webpack_require__(7);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(35);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(32);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

Ignition.registerTab(function (Vue) {
    Vue.use(__webpack_require__(12));
    Vue.component('ignition-stackoverflow', __webpack_require__(14));
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.vueMoment = {})));
}(this, (function (exports) { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var moment = createCommonjsModule(function (module, exports) {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//! moment.js
//! version : 2.19.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (global, factory) {
    (_typeof(exports)) === 'object' && 'object' !== 'undefined' ? module.exports = factory() :  false ? undefined(factory) : global.moment = factory();
})(commonjsGlobal, function () {
    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function some(fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

            if (m._strict) {
                isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (_typeof(arguments[i]) === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function keys(obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({ unit: u, priority: priorities[u] });
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function func() {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1 = /\d/; //       0 - 9
    var match2 = /\d\d/; //      00 - 99
    var match3 = /\d{3}/; //     000 - 999
    var match4 = /\d{4}/; //    0000 - 9999
    var match6 = /[+-]?\d{6}/; // -999999 - 999999
    var match1to2 = /\d\d?/; //       0 - 99
    var match3to4 = /\d\d\d\d?/; //     999 - 9999
    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3 = /\d{1,3}/; //       0 - 999
    var match1to4 = /\d{1,4}/; //       0 - 9999
    var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

    var matchUnsigned = /\d+/; //       0 - inf
    var matchSigned = /[+-]?\d+/; //    -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

    var regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
        };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function func(input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year())) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if ((typeof units === 'undefined' ? 'undefined' : _typeof(units)) === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return (n % x + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function indexOf(o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months) ? this._months : this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date = new Date(y, m, d, h, M, s, ms);

        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,

        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays(m, format) {
        if (!m) {
            return isArray(this._weekdays) ? this._weekdays : this._weekdays['standalone'];
        }
        return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort(m) {
        return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin(m) {
        return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    // months
    // week
    // weekdays
    // meridiem
    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && 'object' !== 'undefined' && module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = commonjsRequire;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                    }
                    localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config
                    });
                    return null;
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                parentConfig = baseConfig;
            // MERGE
            if (locales[name] != null) {
                parentConfig = locales[name]._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== config._d.getDay()) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]];

    // iso time formats and regexes
    var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    });

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || format === undefined && input === '') {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    });

    var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    });

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function now() {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,

        // matching against regexp is expensive, do it on demand
        match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : match[1] === '+' ? 1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if ((typeof duration === 'undefined' ? 'undefined' : _typeof(duration)) === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = { milliseconds: 0, months: 0 };

        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val;val = period;period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1(time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) && (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, delta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;break;
            case 'month':
                output = monthDiff(this, that);break;
            case 'quarter':
                output = monthDiff(this, that) / 3;break;
            case 'second':
                output = (this - that) / 1e3;break; // 1000
            case 'minute':
                output = (this - that) / 6e4;break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),

        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString() {
        if (!this.isValid()) {
            return null;
        }
        var m = this.clone().utc();
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        }
        return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    });

    function localeData() {
        return this._locale;
    }

    function startOf(units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
            /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
            /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                this.hours(0);
            /* falls through */
            case 'hour':
                this.minutes(0);
            /* falls through */
            case 'minute':
                this.seconds(0);
            /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf(units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units).add(1, units === 'isoWeek' ? 'week' : units).subtract(1, 'ms');
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIOROITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;

    // Year
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;

    // Week Year
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    proto.quarter = proto.quarters = getSetQuarter;

    // Month
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;

    // Week
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;

    // Hour
    proto.hour = proto.hours = getSetHour;

    // Minute
    proto.minute = proto.minutes = getSetMinute;

    // Second
    proto.second = proto.seconds = getSetSecond;

    // Millisecond
    proto.millisecond = proto.milliseconds = getSetMillisecond;

    // Offset
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;

    // Timezone
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;

    // Deprecations
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;

    // Month
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;

    // Week
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    // Hours
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function ordinal(number) {
            var b = number % 10,
                output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44, // a few seconds to seconds
        s: 45, // seconds to minute
        m: 45, // minutes to hour
        h: 22, // hours to day
        d: 26, // days to month
        M: 11 // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds = round(duration.as('s'));
        var minutes = round(duration.as('m'));
        var hours = round(duration.as('h'));
        var days = round(duration.as('d'));
        var months = round(duration.as('M'));
        var years = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days = abs$1(this._days);
        var months = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    // Deprecations
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.19.1';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    return hooks;
});
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

var vueMoment = {
  install: function install(Vue, options) {
    var moment$$1 = options && options.moment ? options.moment : moment;

    Object.defineProperties(Vue.prototype, {
      $moment: {
        get: function get() {
          return moment$$1;
        }
      }
    });

    Vue.moment = moment$$1;

    Vue.filter('moment', function () {
      var arguments$1 = arguments;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments$1[_key];
      }

      args = Array.prototype.slice.call(args);
      var input = args.shift();
      var date = void 0;

      if (Array.isArray(input) && typeof input[0] === 'string') {
        // If input is array, assume we're being passed a format pattern to parse against.
        // Format pattern will accept an array of potential formats to parse against.
        // Date string should be at [0], format pattern(s) should be at [1]
        date = moment$$1(input[0], input[1], true);
      } else if (typeof input === 'number') {
        if (input.toString().length < 12) {
          // If input is an integer with fewer than 12 digits, assume Unix seconds...
          date = moment$$1.unix(input);
        } else {
          // ..otherwise, assume milliseconds.
          date = moment$$1(input);
        }
      } else {
        // Otherwise, throw the input at moment and see what happens...
        date = moment$$1(input);
      }

      if (!input || !date.isValid()) {
        // Log a warning if moment couldn't reconcile the input. Better than throwing an error?
        console.warn('Could not build a valid `moment` object from input.');
        return input;
      }

      function parse() {
        var arguments$1 = arguments;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments$1[_key2];
        }

        args = Array.prototype.slice.call(args);
        var method = args.shift();

        switch (method) {
          case 'add':
            {
              /*
              * Mutates the original moment by adding time.
              * http://momentjs.com/docs/#/manipulating/add/
              */

              var addends = args.shift().split(',').map(Function.prototype.call, String.prototype.trim);
              var obj = {};

              for (var n = 0; n < addends.length; n++) {
                var addend = addends[n].split(' ');
                obj[addend[1]] = addend[0];
              }
              date.add(obj);
              break;
            }

          case 'subtract':
            {
              /*
              * Mutates the original moment by subtracting time.
              * http://momentjs.com/docs/#/manipulating/subtract/
              */

              var subtrahends = args.shift().split(',').map(Function.prototype.call, String.prototype.trim);
              var _obj = {};

              for (var _n = 0; _n < subtrahends.length; _n++) {
                var subtrahend = subtrahends[_n].split(' ');
                _obj[subtrahend[1]] = subtrahend[0];
              }
              date.subtract(_obj);
              break;
            }

          case 'from':
            {
              /*
              * Display a moment in relative time, either from now or from a specified date.
              * http://momentjs.com/docs/#/displaying/fromnow/
              */

              var from = 'now';
              var removeSuffix = false;

              if (args[0] === 'now') { args.shift(); }
              // If valid, assume it is a date we want the output computed against.
              if (moment$$1(args[0]).isValid()) { from = moment$$1(args.shift()); }

              if (args[0] === true) {
                args.shift();
                removeSuffix = true;
              }

              if (from !== 'now') {
                date = date.from(from, removeSuffix);
              } else {
                date = date.fromNow(removeSuffix);
              }
              break;
            }

          case 'diff':
            {
              /*
              * Mutates the original moment by doing a difference with another date.
              * http://momentjs.com/docs/#/displaying/difference/
              */

              var referenceTime = moment$$1();
              var units = '';
              var float = false;

              if (moment$$1(args[0]).isValid()) {
                // If valid, assume it is a date we want the output computed against.
                referenceTime = moment$$1(args.shift());
              } else if (args[0] === null || args[0] === 'now') {
                // If null or 'now', remove argument and proceed with default referenceTime.
                args.shift();
              }

              if (args[0]) { units = args.shift(); }

              if (args[0] === true) { float = args.shift(); }

              date = date.diff(referenceTime, units, float);
              break;
            }

          case 'calendar':
            {
              /*
              * Formats a date with different strings depending on how close
              * to a certain date (today by default) the date is.
              * http://momentjs.com/docs/#/displaying/calendar-time/
              */

              var _referenceTime = moment$$1();
              var formats = {};

              if (moment$$1(args[0]).isValid()) {
                // If valid, assume it is a date we want the output computed against.
                _referenceTime = moment$$1(args.shift());
              } else if (args[0] === null || args[0] === 'now') {
                // If null or 'now', remove argument and proceed with default referenceTime.
                args.shift();
              }

              if (_typeof(args[0]) === 'object') { formats = args.shift(); }

              date = date.calendar(_referenceTime, formats);
              break;
            }

          case 'utc':
            {
              /*
              * Mutates the original moment by converting to UTC
              * https://momentjs.com/docs/#/manipulating/utc/
              */
              date.utc();
              break;
            }

          case 'timezone':
            {
              /*
              * Mutates the original moment by converting to a new timezone.
              * https://momentjs.com/timezone/docs/#/using-timezones/converting-to-zone/
              */
              date.tz(args.shift());
              break;
            }

          default:
            {
              /*
              * Formats a date by taking a string of tokens and replacing
              * them with their corresponding values.
              * http://momentjs.com/docs/#/displaying/format/
              */

              var format = method;
              date = date.format(format);
            }
        }

        if (args.length) { parse.apply(parse, args); }
      }

      parse.apply(parse, args);

      return date;
    });

    Vue.filter('duration', function () {
      var arguments$1 = arguments;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments$1[_key3];
      }

      /*
      * Basic pass-through filter for leveraging moment.js's ability
      * to manipulate and display durations.
      * https://momentjs.com/docs/#/durations/
      */
      args = Array.prototype.slice.call(args);
      var input = args.shift();
      var method = args.shift();

      function createDuration(time) {
        if (!Array.isArray(time)) { time = [time]; }
        var result = moment$$1.duration.apply(moment$$1, _toConsumableArray(time));
        if (!result.isValid()) { console.warn('Could not build a valid `duration` object from input.'); }
        return result;
      }
      var duration = createDuration(input);

      if (method === 'add' || method === 'subtract') {
        // Generates a duration object and either adds or subtracts it
        // from our original duration.
        var durationChange = createDuration(args);
        duration[method](durationChange);
      } else if (duration && duration[method]) {
        var _duration;

        // This gives a full proxy to moment.duration functions.
        duration = (_duration = duration)[method].apply(_duration, _toConsumableArray(args));
      }

      return duration;
    });
  }
};

var vueMoment_1 = vueMoment.install;

exports['default'] = vueMoment;
exports.install = vueMoment_1;

Object.defineProperty(exports, '__esModule', { value: true });

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
}
var normalizeComponent = __webpack_require__(20)
/* script */
var __vue_script__ = __webpack_require__(21)
/* template */
var __vue_template__ = __webpack_require__(40)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8dbef60c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tab.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8dbef60c", Component.options)
  } else {
    hotAPI.reload("data-v-8dbef60c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("9ffa12f6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8dbef60c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tab.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8dbef60c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tab.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.i(__webpack_require__(17), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0\n}\n\n.not-sr-only {\n  position: static;\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n  white-space: normal\n}\n\n.focus\\:sr-only:focus {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0\n}\n\n.focus\\:not-sr-only:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n  white-space: normal\n}\n\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none\n}\n\n.bg-fixed {\n  background-attachment: fixed\n}\n\n.bg-local {\n  background-attachment: local\n}\n\n.bg-scroll {\n  background-attachment: scroll\n}\n\n.bg-transparent {\n  background-color: transparent\n}\n\n.bg-black {\n  background-color: #000\n}\n\n.bg-white {\n  background-color: #fff\n}\n\n.bg-gray-100 {\n  background-color: #f7fafc\n}\n\n.bg-gray-200 {\n  background-color: #edf2f7\n}\n\n.bg-gray-300 {\n  background-color: #e2e8f0\n}\n\n.bg-gray-400 {\n  background-color: #cbd5e0\n}\n\n.bg-gray-500 {\n  background-color: #a0aec0\n}\n\n.bg-gray-600 {\n  background-color: #718096\n}\n\n.bg-gray-700 {\n  background-color: #4a5568\n}\n\n.bg-gray-800 {\n  background-color: #2d3748\n}\n\n.bg-gray-900 {\n  background-color: #1a202c\n}\n\n.bg-red-100 {\n  background-color: #fff5f5\n}\n\n.bg-red-200 {\n  background-color: #fed7d7\n}\n\n.bg-red-300 {\n  background-color: #feb2b2\n}\n\n.bg-red-400 {\n  background-color: #fc8181\n}\n\n.bg-red-500 {\n  background-color: #f56565\n}\n\n.bg-red-600 {\n  background-color: #e53e3e\n}\n\n.bg-red-700 {\n  background-color: #c53030\n}\n\n.bg-red-800 {\n  background-color: #9b2c2c\n}\n\n.bg-red-900 {\n  background-color: #742a2a\n}\n\n.bg-orange-100 {\n  background-color: #fffaf0\n}\n\n.bg-orange-200 {\n  background-color: #feebc8\n}\n\n.bg-orange-300 {\n  background-color: #fbd38d\n}\n\n.bg-orange-400 {\n  background-color: #f6ad55\n}\n\n.bg-orange-500 {\n  background-color: #ed8936\n}\n\n.bg-orange-600 {\n  background-color: #dd6b20\n}\n\n.bg-orange-700 {\n  background-color: #c05621\n}\n\n.bg-orange-800 {\n  background-color: #9c4221\n}\n\n.bg-orange-900 {\n  background-color: #7b341e\n}\n\n.bg-yellow-100 {\n  background-color: #fffff0\n}\n\n.bg-yellow-200 {\n  background-color: #fefcbf\n}\n\n.bg-yellow-300 {\n  background-color: #faf089\n}\n\n.bg-yellow-400 {\n  background-color: #f6e05e\n}\n\n.bg-yellow-500 {\n  background-color: #ecc94b\n}\n\n.bg-yellow-600 {\n  background-color: #d69e2e\n}\n\n.bg-yellow-700 {\n  background-color: #b7791f\n}\n\n.bg-yellow-800 {\n  background-color: #975a16\n}\n\n.bg-yellow-900 {\n  background-color: #744210\n}\n\n.bg-green-100 {\n  background-color: #f0fff4\n}\n\n.bg-green-200 {\n  background-color: #c6f6d5\n}\n\n.bg-green-300 {\n  background-color: #9ae6b4\n}\n\n.bg-green-400 {\n  background-color: #68d391\n}\n\n.bg-green-500 {\n  background-color: #48bb78\n}\n\n.bg-green-600 {\n  background-color: #38a169\n}\n\n.bg-green-700 {\n  background-color: #2f855a\n}\n\n.bg-green-800 {\n  background-color: #276749\n}\n\n.bg-green-900 {\n  background-color: #22543d\n}\n\n.bg-teal-100 {\n  background-color: #e6fffa\n}\n\n.bg-teal-200 {\n  background-color: #b2f5ea\n}\n\n.bg-teal-300 {\n  background-color: #81e6d9\n}\n\n.bg-teal-400 {\n  background-color: #4fd1c5\n}\n\n.bg-teal-500 {\n  background-color: #38b2ac\n}\n\n.bg-teal-600 {\n  background-color: #319795\n}\n\n.bg-teal-700 {\n  background-color: #2c7a7b\n}\n\n.bg-teal-800 {\n  background-color: #285e61\n}\n\n.bg-teal-900 {\n  background-color: #234e52\n}\n\n.bg-blue-100 {\n  background-color: #ebf8ff\n}\n\n.bg-blue-200 {\n  background-color: #bee3f8\n}\n\n.bg-blue-300 {\n  background-color: #90cdf4\n}\n\n.bg-blue-400 {\n  background-color: #63b3ed\n}\n\n.bg-blue-500 {\n  background-color: #4299e1\n}\n\n.bg-blue-600 {\n  background-color: #3182ce\n}\n\n.bg-blue-700 {\n  background-color: #2b6cb0\n}\n\n.bg-blue-800 {\n  background-color: #2c5282\n}\n\n.bg-blue-900 {\n  background-color: #2a4365\n}\n\n.bg-indigo-100 {\n  background-color: #ebf4ff\n}\n\n.bg-indigo-200 {\n  background-color: #c3dafe\n}\n\n.bg-indigo-300 {\n  background-color: #a3bffa\n}\n\n.bg-indigo-400 {\n  background-color: #7f9cf5\n}\n\n.bg-indigo-500 {\n  background-color: #667eea\n}\n\n.bg-indigo-600 {\n  background-color: #5a67d8\n}\n\n.bg-indigo-700 {\n  background-color: #4c51bf\n}\n\n.bg-indigo-800 {\n  background-color: #434190\n}\n\n.bg-indigo-900 {\n  background-color: #3c366b\n}\n\n.bg-purple-100 {\n  background-color: #faf5ff\n}\n\n.bg-purple-200 {\n  background-color: #e9d8fd\n}\n\n.bg-purple-300 {\n  background-color: #d6bcfa\n}\n\n.bg-purple-400 {\n  background-color: #b794f4\n}\n\n.bg-purple-500 {\n  background-color: #9f7aea\n}\n\n.bg-purple-600 {\n  background-color: #805ad5\n}\n\n.bg-purple-700 {\n  background-color: #6b46c1\n}\n\n.bg-purple-800 {\n  background-color: #553c9a\n}\n\n.bg-purple-900 {\n  background-color: #44337a\n}\n\n.bg-pink-100 {\n  background-color: #fff5f7\n}\n\n.bg-pink-200 {\n  background-color: #fed7e2\n}\n\n.bg-pink-300 {\n  background-color: #fbb6ce\n}\n\n.bg-pink-400 {\n  background-color: #f687b3\n}\n\n.bg-pink-500 {\n  background-color: #ed64a6\n}\n\n.bg-pink-600 {\n  background-color: #d53f8c\n}\n\n.bg-pink-700 {\n  background-color: #b83280\n}\n\n.bg-pink-800 {\n  background-color: #97266d\n}\n\n.bg-pink-900 {\n  background-color: #702459\n}\n\n.hover\\:bg-transparent:hover {\n  background-color: transparent\n}\n\n.hover\\:bg-black:hover {\n  background-color: #000\n}\n\n.hover\\:bg-white:hover {\n  background-color: #fff\n}\n\n.hover\\:bg-gray-100:hover {\n  background-color: #f7fafc\n}\n\n.hover\\:bg-gray-200:hover {\n  background-color: #edf2f7\n}\n\n.hover\\:bg-gray-300:hover {\n  background-color: #e2e8f0\n}\n\n.hover\\:bg-gray-400:hover {\n  background-color: #cbd5e0\n}\n\n.hover\\:bg-gray-500:hover {\n  background-color: #a0aec0\n}\n\n.hover\\:bg-gray-600:hover {\n  background-color: #718096\n}\n\n.hover\\:bg-gray-700:hover {\n  background-color: #4a5568\n}\n\n.hover\\:bg-gray-800:hover {\n  background-color: #2d3748\n}\n\n.hover\\:bg-gray-900:hover {\n  background-color: #1a202c\n}\n\n.hover\\:bg-red-100:hover {\n  background-color: #fff5f5\n}\n\n.hover\\:bg-red-200:hover {\n  background-color: #fed7d7\n}\n\n.hover\\:bg-red-300:hover {\n  background-color: #feb2b2\n}\n\n.hover\\:bg-red-400:hover {\n  background-color: #fc8181\n}\n\n.hover\\:bg-red-500:hover {\n  background-color: #f56565\n}\n\n.hover\\:bg-red-600:hover {\n  background-color: #e53e3e\n}\n\n.hover\\:bg-red-700:hover {\n  background-color: #c53030\n}\n\n.hover\\:bg-red-800:hover {\n  background-color: #9b2c2c\n}\n\n.hover\\:bg-red-900:hover {\n  background-color: #742a2a\n}\n\n.hover\\:bg-orange-100:hover {\n  background-color: #fffaf0\n}\n\n.hover\\:bg-orange-200:hover {\n  background-color: #feebc8\n}\n\n.hover\\:bg-orange-300:hover {\n  background-color: #fbd38d\n}\n\n.hover\\:bg-orange-400:hover {\n  background-color: #f6ad55\n}\n\n.hover\\:bg-orange-500:hover {\n  background-color: #ed8936\n}\n\n.hover\\:bg-orange-600:hover {\n  background-color: #dd6b20\n}\n\n.hover\\:bg-orange-700:hover {\n  background-color: #c05621\n}\n\n.hover\\:bg-orange-800:hover {\n  background-color: #9c4221\n}\n\n.hover\\:bg-orange-900:hover {\n  background-color: #7b341e\n}\n\n.hover\\:bg-yellow-100:hover {\n  background-color: #fffff0\n}\n\n.hover\\:bg-yellow-200:hover {\n  background-color: #fefcbf\n}\n\n.hover\\:bg-yellow-300:hover {\n  background-color: #faf089\n}\n\n.hover\\:bg-yellow-400:hover {\n  background-color: #f6e05e\n}\n\n.hover\\:bg-yellow-500:hover {\n  background-color: #ecc94b\n}\n\n.hover\\:bg-yellow-600:hover {\n  background-color: #d69e2e\n}\n\n.hover\\:bg-yellow-700:hover {\n  background-color: #b7791f\n}\n\n.hover\\:bg-yellow-800:hover {\n  background-color: #975a16\n}\n\n.hover\\:bg-yellow-900:hover {\n  background-color: #744210\n}\n\n.hover\\:bg-green-100:hover {\n  background-color: #f0fff4\n}\n\n.hover\\:bg-green-200:hover {\n  background-color: #c6f6d5\n}\n\n.hover\\:bg-green-300:hover {\n  background-color: #9ae6b4\n}\n\n.hover\\:bg-green-400:hover {\n  background-color: #68d391\n}\n\n.hover\\:bg-green-500:hover {\n  background-color: #48bb78\n}\n\n.hover\\:bg-green-600:hover {\n  background-color: #38a169\n}\n\n.hover\\:bg-green-700:hover {\n  background-color: #2f855a\n}\n\n.hover\\:bg-green-800:hover {\n  background-color: #276749\n}\n\n.hover\\:bg-green-900:hover {\n  background-color: #22543d\n}\n\n.hover\\:bg-teal-100:hover {\n  background-color: #e6fffa\n}\n\n.hover\\:bg-teal-200:hover {\n  background-color: #b2f5ea\n}\n\n.hover\\:bg-teal-300:hover {\n  background-color: #81e6d9\n}\n\n.hover\\:bg-teal-400:hover {\n  background-color: #4fd1c5\n}\n\n.hover\\:bg-teal-500:hover {\n  background-color: #38b2ac\n}\n\n.hover\\:bg-teal-600:hover {\n  background-color: #319795\n}\n\n.hover\\:bg-teal-700:hover {\n  background-color: #2c7a7b\n}\n\n.hover\\:bg-teal-800:hover {\n  background-color: #285e61\n}\n\n.hover\\:bg-teal-900:hover {\n  background-color: #234e52\n}\n\n.hover\\:bg-blue-100:hover {\n  background-color: #ebf8ff\n}\n\n.hover\\:bg-blue-200:hover {\n  background-color: #bee3f8\n}\n\n.hover\\:bg-blue-300:hover {\n  background-color: #90cdf4\n}\n\n.hover\\:bg-blue-400:hover {\n  background-color: #63b3ed\n}\n\n.hover\\:bg-blue-500:hover {\n  background-color: #4299e1\n}\n\n.hover\\:bg-blue-600:hover {\n  background-color: #3182ce\n}\n\n.hover\\:bg-blue-700:hover {\n  background-color: #2b6cb0\n}\n\n.hover\\:bg-blue-800:hover {\n  background-color: #2c5282\n}\n\n.hover\\:bg-blue-900:hover {\n  background-color: #2a4365\n}\n\n.hover\\:bg-indigo-100:hover {\n  background-color: #ebf4ff\n}\n\n.hover\\:bg-indigo-200:hover {\n  background-color: #c3dafe\n}\n\n.hover\\:bg-indigo-300:hover {\n  background-color: #a3bffa\n}\n\n.hover\\:bg-indigo-400:hover {\n  background-color: #7f9cf5\n}\n\n.hover\\:bg-indigo-500:hover {\n  background-color: #667eea\n}\n\n.hover\\:bg-indigo-600:hover {\n  background-color: #5a67d8\n}\n\n.hover\\:bg-indigo-700:hover {\n  background-color: #4c51bf\n}\n\n.hover\\:bg-indigo-800:hover {\n  background-color: #434190\n}\n\n.hover\\:bg-indigo-900:hover {\n  background-color: #3c366b\n}\n\n.hover\\:bg-purple-100:hover {\n  background-color: #faf5ff\n}\n\n.hover\\:bg-purple-200:hover {\n  background-color: #e9d8fd\n}\n\n.hover\\:bg-purple-300:hover {\n  background-color: #d6bcfa\n}\n\n.hover\\:bg-purple-400:hover {\n  background-color: #b794f4\n}\n\n.hover\\:bg-purple-500:hover {\n  background-color: #9f7aea\n}\n\n.hover\\:bg-purple-600:hover {\n  background-color: #805ad5\n}\n\n.hover\\:bg-purple-700:hover {\n  background-color: #6b46c1\n}\n\n.hover\\:bg-purple-800:hover {\n  background-color: #553c9a\n}\n\n.hover\\:bg-purple-900:hover {\n  background-color: #44337a\n}\n\n.hover\\:bg-pink-100:hover {\n  background-color: #fff5f7\n}\n\n.hover\\:bg-pink-200:hover {\n  background-color: #fed7e2\n}\n\n.hover\\:bg-pink-300:hover {\n  background-color: #fbb6ce\n}\n\n.hover\\:bg-pink-400:hover {\n  background-color: #f687b3\n}\n\n.hover\\:bg-pink-500:hover {\n  background-color: #ed64a6\n}\n\n.hover\\:bg-pink-600:hover {\n  background-color: #d53f8c\n}\n\n.hover\\:bg-pink-700:hover {\n  background-color: #b83280\n}\n\n.hover\\:bg-pink-800:hover {\n  background-color: #97266d\n}\n\n.hover\\:bg-pink-900:hover {\n  background-color: #702459\n}\n\n.focus\\:bg-transparent:focus {\n  background-color: transparent\n}\n\n.focus\\:bg-black:focus {\n  background-color: #000\n}\n\n.focus\\:bg-white:focus {\n  background-color: #fff\n}\n\n.focus\\:bg-gray-100:focus {\n  background-color: #f7fafc\n}\n\n.focus\\:bg-gray-200:focus {\n  background-color: #edf2f7\n}\n\n.focus\\:bg-gray-300:focus {\n  background-color: #e2e8f0\n}\n\n.focus\\:bg-gray-400:focus {\n  background-color: #cbd5e0\n}\n\n.focus\\:bg-gray-500:focus {\n  background-color: #a0aec0\n}\n\n.focus\\:bg-gray-600:focus {\n  background-color: #718096\n}\n\n.focus\\:bg-gray-700:focus {\n  background-color: #4a5568\n}\n\n.focus\\:bg-gray-800:focus {\n  background-color: #2d3748\n}\n\n.focus\\:bg-gray-900:focus {\n  background-color: #1a202c\n}\n\n.focus\\:bg-red-100:focus {\n  background-color: #fff5f5\n}\n\n.focus\\:bg-red-200:focus {\n  background-color: #fed7d7\n}\n\n.focus\\:bg-red-300:focus {\n  background-color: #feb2b2\n}\n\n.focus\\:bg-red-400:focus {\n  background-color: #fc8181\n}\n\n.focus\\:bg-red-500:focus {\n  background-color: #f56565\n}\n\n.focus\\:bg-red-600:focus {\n  background-color: #e53e3e\n}\n\n.focus\\:bg-red-700:focus {\n  background-color: #c53030\n}\n\n.focus\\:bg-red-800:focus {\n  background-color: #9b2c2c\n}\n\n.focus\\:bg-red-900:focus {\n  background-color: #742a2a\n}\n\n.focus\\:bg-orange-100:focus {\n  background-color: #fffaf0\n}\n\n.focus\\:bg-orange-200:focus {\n  background-color: #feebc8\n}\n\n.focus\\:bg-orange-300:focus {\n  background-color: #fbd38d\n}\n\n.focus\\:bg-orange-400:focus {\n  background-color: #f6ad55\n}\n\n.focus\\:bg-orange-500:focus {\n  background-color: #ed8936\n}\n\n.focus\\:bg-orange-600:focus {\n  background-color: #dd6b20\n}\n\n.focus\\:bg-orange-700:focus {\n  background-color: #c05621\n}\n\n.focus\\:bg-orange-800:focus {\n  background-color: #9c4221\n}\n\n.focus\\:bg-orange-900:focus {\n  background-color: #7b341e\n}\n\n.focus\\:bg-yellow-100:focus {\n  background-color: #fffff0\n}\n\n.focus\\:bg-yellow-200:focus {\n  background-color: #fefcbf\n}\n\n.focus\\:bg-yellow-300:focus {\n  background-color: #faf089\n}\n\n.focus\\:bg-yellow-400:focus {\n  background-color: #f6e05e\n}\n\n.focus\\:bg-yellow-500:focus {\n  background-color: #ecc94b\n}\n\n.focus\\:bg-yellow-600:focus {\n  background-color: #d69e2e\n}\n\n.focus\\:bg-yellow-700:focus {\n  background-color: #b7791f\n}\n\n.focus\\:bg-yellow-800:focus {\n  background-color: #975a16\n}\n\n.focus\\:bg-yellow-900:focus {\n  background-color: #744210\n}\n\n.focus\\:bg-green-100:focus {\n  background-color: #f0fff4\n}\n\n.focus\\:bg-green-200:focus {\n  background-color: #c6f6d5\n}\n\n.focus\\:bg-green-300:focus {\n  background-color: #9ae6b4\n}\n\n.focus\\:bg-green-400:focus {\n  background-color: #68d391\n}\n\n.focus\\:bg-green-500:focus {\n  background-color: #48bb78\n}\n\n.focus\\:bg-green-600:focus {\n  background-color: #38a169\n}\n\n.focus\\:bg-green-700:focus {\n  background-color: #2f855a\n}\n\n.focus\\:bg-green-800:focus {\n  background-color: #276749\n}\n\n.focus\\:bg-green-900:focus {\n  background-color: #22543d\n}\n\n.focus\\:bg-teal-100:focus {\n  background-color: #e6fffa\n}\n\n.focus\\:bg-teal-200:focus {\n  background-color: #b2f5ea\n}\n\n.focus\\:bg-teal-300:focus {\n  background-color: #81e6d9\n}\n\n.focus\\:bg-teal-400:focus {\n  background-color: #4fd1c5\n}\n\n.focus\\:bg-teal-500:focus {\n  background-color: #38b2ac\n}\n\n.focus\\:bg-teal-600:focus {\n  background-color: #319795\n}\n\n.focus\\:bg-teal-700:focus {\n  background-color: #2c7a7b\n}\n\n.focus\\:bg-teal-800:focus {\n  background-color: #285e61\n}\n\n.focus\\:bg-teal-900:focus {\n  background-color: #234e52\n}\n\n.focus\\:bg-blue-100:focus {\n  background-color: #ebf8ff\n}\n\n.focus\\:bg-blue-200:focus {\n  background-color: #bee3f8\n}\n\n.focus\\:bg-blue-300:focus {\n  background-color: #90cdf4\n}\n\n.focus\\:bg-blue-400:focus {\n  background-color: #63b3ed\n}\n\n.focus\\:bg-blue-500:focus {\n  background-color: #4299e1\n}\n\n.focus\\:bg-blue-600:focus {\n  background-color: #3182ce\n}\n\n.focus\\:bg-blue-700:focus {\n  background-color: #2b6cb0\n}\n\n.focus\\:bg-blue-800:focus {\n  background-color: #2c5282\n}\n\n.focus\\:bg-blue-900:focus {\n  background-color: #2a4365\n}\n\n.focus\\:bg-indigo-100:focus {\n  background-color: #ebf4ff\n}\n\n.focus\\:bg-indigo-200:focus {\n  background-color: #c3dafe\n}\n\n.focus\\:bg-indigo-300:focus {\n  background-color: #a3bffa\n}\n\n.focus\\:bg-indigo-400:focus {\n  background-color: #7f9cf5\n}\n\n.focus\\:bg-indigo-500:focus {\n  background-color: #667eea\n}\n\n.focus\\:bg-indigo-600:focus {\n  background-color: #5a67d8\n}\n\n.focus\\:bg-indigo-700:focus {\n  background-color: #4c51bf\n}\n\n.focus\\:bg-indigo-800:focus {\n  background-color: #434190\n}\n\n.focus\\:bg-indigo-900:focus {\n  background-color: #3c366b\n}\n\n.focus\\:bg-purple-100:focus {\n  background-color: #faf5ff\n}\n\n.focus\\:bg-purple-200:focus {\n  background-color: #e9d8fd\n}\n\n.focus\\:bg-purple-300:focus {\n  background-color: #d6bcfa\n}\n\n.focus\\:bg-purple-400:focus {\n  background-color: #b794f4\n}\n\n.focus\\:bg-purple-500:focus {\n  background-color: #9f7aea\n}\n\n.focus\\:bg-purple-600:focus {\n  background-color: #805ad5\n}\n\n.focus\\:bg-purple-700:focus {\n  background-color: #6b46c1\n}\n\n.focus\\:bg-purple-800:focus {\n  background-color: #553c9a\n}\n\n.focus\\:bg-purple-900:focus {\n  background-color: #44337a\n}\n\n.focus\\:bg-pink-100:focus {\n  background-color: #fff5f7\n}\n\n.focus\\:bg-pink-200:focus {\n  background-color: #fed7e2\n}\n\n.focus\\:bg-pink-300:focus {\n  background-color: #fbb6ce\n}\n\n.focus\\:bg-pink-400:focus {\n  background-color: #f687b3\n}\n\n.focus\\:bg-pink-500:focus {\n  background-color: #ed64a6\n}\n\n.focus\\:bg-pink-600:focus {\n  background-color: #d53f8c\n}\n\n.focus\\:bg-pink-700:focus {\n  background-color: #b83280\n}\n\n.focus\\:bg-pink-800:focus {\n  background-color: #97266d\n}\n\n.focus\\:bg-pink-900:focus {\n  background-color: #702459\n}\n\n.bg-bottom {\n  background-position: bottom\n}\n\n.bg-center {\n  background-position: center\n}\n\n.bg-left {\n  background-position: left\n}\n\n.bg-left-bottom {\n  background-position: left bottom\n}\n\n.bg-left-top {\n  background-position: left top\n}\n\n.bg-right {\n  background-position: right\n}\n\n.bg-right-bottom {\n  background-position: right bottom\n}\n\n.bg-right-top {\n  background-position: right top\n}\n\n.bg-top {\n  background-position: top\n}\n\n.bg-repeat {\n  background-repeat: repeat\n}\n\n.bg-no-repeat {\n  background-repeat: no-repeat\n}\n\n.bg-repeat-x {\n  background-repeat: repeat-x\n}\n\n.bg-repeat-y {\n  background-repeat: repeat-y\n}\n\n.bg-repeat-round {\n  background-repeat: round\n}\n\n.bg-repeat-space {\n  background-repeat: space\n}\n\n.bg-auto {\n  background-size: auto\n}\n\n.bg-cover {\n  background-size: cover\n}\n\n.bg-contain {\n  background-size: contain\n}\n\n.border-collapse {\n  border-collapse: collapse\n}\n\n.border-separate {\n  border-collapse: separate\n}\n\n.border-transparent {\n  border-color: transparent\n}\n\n.border-black {\n  border-color: #000\n}\n\n.border-white {\n  border-color: #fff\n}\n\n.border-gray-100 {\n  border-color: #f7fafc\n}\n\n.border-gray-200 {\n  border-color: #edf2f7\n}\n\n.border-gray-300 {\n  border-color: #e2e8f0\n}\n\n.border-gray-400 {\n  border-color: #cbd5e0\n}\n\n.border-gray-500 {\n  border-color: #a0aec0\n}\n\n.border-gray-600 {\n  border-color: #718096\n}\n\n.border-gray-700 {\n  border-color: #4a5568\n}\n\n.border-gray-800 {\n  border-color: #2d3748\n}\n\n.border-gray-900 {\n  border-color: #1a202c\n}\n\n.border-red-100 {\n  border-color: #fff5f5\n}\n\n.border-red-200 {\n  border-color: #fed7d7\n}\n\n.border-red-300 {\n  border-color: #feb2b2\n}\n\n.border-red-400 {\n  border-color: #fc8181\n}\n\n.border-red-500 {\n  border-color: #f56565\n}\n\n.border-red-600 {\n  border-color: #e53e3e\n}\n\n.border-red-700 {\n  border-color: #c53030\n}\n\n.border-red-800 {\n  border-color: #9b2c2c\n}\n\n.border-red-900 {\n  border-color: #742a2a\n}\n\n.border-orange-100 {\n  border-color: #fffaf0\n}\n\n.border-orange-200 {\n  border-color: #feebc8\n}\n\n.border-orange-300 {\n  border-color: #fbd38d\n}\n\n.border-orange-400 {\n  border-color: #f6ad55\n}\n\n.border-orange-500 {\n  border-color: #ed8936\n}\n\n.border-orange-600 {\n  border-color: #dd6b20\n}\n\n.border-orange-700 {\n  border-color: #c05621\n}\n\n.border-orange-800 {\n  border-color: #9c4221\n}\n\n.border-orange-900 {\n  border-color: #7b341e\n}\n\n.border-yellow-100 {\n  border-color: #fffff0\n}\n\n.border-yellow-200 {\n  border-color: #fefcbf\n}\n\n.border-yellow-300 {\n  border-color: #faf089\n}\n\n.border-yellow-400 {\n  border-color: #f6e05e\n}\n\n.border-yellow-500 {\n  border-color: #ecc94b\n}\n\n.border-yellow-600 {\n  border-color: #d69e2e\n}\n\n.border-yellow-700 {\n  border-color: #b7791f\n}\n\n.border-yellow-800 {\n  border-color: #975a16\n}\n\n.border-yellow-900 {\n  border-color: #744210\n}\n\n.border-green-100 {\n  border-color: #f0fff4\n}\n\n.border-green-200 {\n  border-color: #c6f6d5\n}\n\n.border-green-300 {\n  border-color: #9ae6b4\n}\n\n.border-green-400 {\n  border-color: #68d391\n}\n\n.border-green-500 {\n  border-color: #48bb78\n}\n\n.border-green-600 {\n  border-color: #38a169\n}\n\n.border-green-700 {\n  border-color: #2f855a\n}\n\n.border-green-800 {\n  border-color: #276749\n}\n\n.border-green-900 {\n  border-color: #22543d\n}\n\n.border-teal-100 {\n  border-color: #e6fffa\n}\n\n.border-teal-200 {\n  border-color: #b2f5ea\n}\n\n.border-teal-300 {\n  border-color: #81e6d9\n}\n\n.border-teal-400 {\n  border-color: #4fd1c5\n}\n\n.border-teal-500 {\n  border-color: #38b2ac\n}\n\n.border-teal-600 {\n  border-color: #319795\n}\n\n.border-teal-700 {\n  border-color: #2c7a7b\n}\n\n.border-teal-800 {\n  border-color: #285e61\n}\n\n.border-teal-900 {\n  border-color: #234e52\n}\n\n.border-blue-100 {\n  border-color: #ebf8ff\n}\n\n.border-blue-200 {\n  border-color: #bee3f8\n}\n\n.border-blue-300 {\n  border-color: #90cdf4\n}\n\n.border-blue-400 {\n  border-color: #63b3ed\n}\n\n.border-blue-500 {\n  border-color: #4299e1\n}\n\n.border-blue-600 {\n  border-color: #3182ce\n}\n\n.border-blue-700 {\n  border-color: #2b6cb0\n}\n\n.border-blue-800 {\n  border-color: #2c5282\n}\n\n.border-blue-900 {\n  border-color: #2a4365\n}\n\n.border-indigo-100 {\n  border-color: #ebf4ff\n}\n\n.border-indigo-200 {\n  border-color: #c3dafe\n}\n\n.border-indigo-300 {\n  border-color: #a3bffa\n}\n\n.border-indigo-400 {\n  border-color: #7f9cf5\n}\n\n.border-indigo-500 {\n  border-color: #667eea\n}\n\n.border-indigo-600 {\n  border-color: #5a67d8\n}\n\n.border-indigo-700 {\n  border-color: #4c51bf\n}\n\n.border-indigo-800 {\n  border-color: #434190\n}\n\n.border-indigo-900 {\n  border-color: #3c366b\n}\n\n.border-purple-100 {\n  border-color: #faf5ff\n}\n\n.border-purple-200 {\n  border-color: #e9d8fd\n}\n\n.border-purple-300 {\n  border-color: #d6bcfa\n}\n\n.border-purple-400 {\n  border-color: #b794f4\n}\n\n.border-purple-500 {\n  border-color: #9f7aea\n}\n\n.border-purple-600 {\n  border-color: #805ad5\n}\n\n.border-purple-700 {\n  border-color: #6b46c1\n}\n\n.border-purple-800 {\n  border-color: #553c9a\n}\n\n.border-purple-900 {\n  border-color: #44337a\n}\n\n.border-pink-100 {\n  border-color: #fff5f7\n}\n\n.border-pink-200 {\n  border-color: #fed7e2\n}\n\n.border-pink-300 {\n  border-color: #fbb6ce\n}\n\n.border-pink-400 {\n  border-color: #f687b3\n}\n\n.border-pink-500 {\n  border-color: #ed64a6\n}\n\n.border-pink-600 {\n  border-color: #d53f8c\n}\n\n.border-pink-700 {\n  border-color: #b83280\n}\n\n.border-pink-800 {\n  border-color: #97266d\n}\n\n.border-pink-900 {\n  border-color: #702459\n}\n\n.hover\\:border-transparent:hover {\n  border-color: transparent\n}\n\n.hover\\:border-black:hover {\n  border-color: #000\n}\n\n.hover\\:border-white:hover {\n  border-color: #fff\n}\n\n.hover\\:border-gray-100:hover {\n  border-color: #f7fafc\n}\n\n.hover\\:border-gray-200:hover {\n  border-color: #edf2f7\n}\n\n.hover\\:border-gray-300:hover {\n  border-color: #e2e8f0\n}\n\n.hover\\:border-gray-400:hover {\n  border-color: #cbd5e0\n}\n\n.hover\\:border-gray-500:hover {\n  border-color: #a0aec0\n}\n\n.hover\\:border-gray-600:hover {\n  border-color: #718096\n}\n\n.hover\\:border-gray-700:hover {\n  border-color: #4a5568\n}\n\n.hover\\:border-gray-800:hover {\n  border-color: #2d3748\n}\n\n.hover\\:border-gray-900:hover {\n  border-color: #1a202c\n}\n\n.hover\\:border-red-100:hover {\n  border-color: #fff5f5\n}\n\n.hover\\:border-red-200:hover {\n  border-color: #fed7d7\n}\n\n.hover\\:border-red-300:hover {\n  border-color: #feb2b2\n}\n\n.hover\\:border-red-400:hover {\n  border-color: #fc8181\n}\n\n.hover\\:border-red-500:hover {\n  border-color: #f56565\n}\n\n.hover\\:border-red-600:hover {\n  border-color: #e53e3e\n}\n\n.hover\\:border-red-700:hover {\n  border-color: #c53030\n}\n\n.hover\\:border-red-800:hover {\n  border-color: #9b2c2c\n}\n\n.hover\\:border-red-900:hover {\n  border-color: #742a2a\n}\n\n.hover\\:border-orange-100:hover {\n  border-color: #fffaf0\n}\n\n.hover\\:border-orange-200:hover {\n  border-color: #feebc8\n}\n\n.hover\\:border-orange-300:hover {\n  border-color: #fbd38d\n}\n\n.hover\\:border-orange-400:hover {\n  border-color: #f6ad55\n}\n\n.hover\\:border-orange-500:hover {\n  border-color: #ed8936\n}\n\n.hover\\:border-orange-600:hover {\n  border-color: #dd6b20\n}\n\n.hover\\:border-orange-700:hover {\n  border-color: #c05621\n}\n\n.hover\\:border-orange-800:hover {\n  border-color: #9c4221\n}\n\n.hover\\:border-orange-900:hover {\n  border-color: #7b341e\n}\n\n.hover\\:border-yellow-100:hover {\n  border-color: #fffff0\n}\n\n.hover\\:border-yellow-200:hover {\n  border-color: #fefcbf\n}\n\n.hover\\:border-yellow-300:hover {\n  border-color: #faf089\n}\n\n.hover\\:border-yellow-400:hover {\n  border-color: #f6e05e\n}\n\n.hover\\:border-yellow-500:hover {\n  border-color: #ecc94b\n}\n\n.hover\\:border-yellow-600:hover {\n  border-color: #d69e2e\n}\n\n.hover\\:border-yellow-700:hover {\n  border-color: #b7791f\n}\n\n.hover\\:border-yellow-800:hover {\n  border-color: #975a16\n}\n\n.hover\\:border-yellow-900:hover {\n  border-color: #744210\n}\n\n.hover\\:border-green-100:hover {\n  border-color: #f0fff4\n}\n\n.hover\\:border-green-200:hover {\n  border-color: #c6f6d5\n}\n\n.hover\\:border-green-300:hover {\n  border-color: #9ae6b4\n}\n\n.hover\\:border-green-400:hover {\n  border-color: #68d391\n}\n\n.hover\\:border-green-500:hover {\n  border-color: #48bb78\n}\n\n.hover\\:border-green-600:hover {\n  border-color: #38a169\n}\n\n.hover\\:border-green-700:hover {\n  border-color: #2f855a\n}\n\n.hover\\:border-green-800:hover {\n  border-color: #276749\n}\n\n.hover\\:border-green-900:hover {\n  border-color: #22543d\n}\n\n.hover\\:border-teal-100:hover {\n  border-color: #e6fffa\n}\n\n.hover\\:border-teal-200:hover {\n  border-color: #b2f5ea\n}\n\n.hover\\:border-teal-300:hover {\n  border-color: #81e6d9\n}\n\n.hover\\:border-teal-400:hover {\n  border-color: #4fd1c5\n}\n\n.hover\\:border-teal-500:hover {\n  border-color: #38b2ac\n}\n\n.hover\\:border-teal-600:hover {\n  border-color: #319795\n}\n\n.hover\\:border-teal-700:hover {\n  border-color: #2c7a7b\n}\n\n.hover\\:border-teal-800:hover {\n  border-color: #285e61\n}\n\n.hover\\:border-teal-900:hover {\n  border-color: #234e52\n}\n\n.hover\\:border-blue-100:hover {\n  border-color: #ebf8ff\n}\n\n.hover\\:border-blue-200:hover {\n  border-color: #bee3f8\n}\n\n.hover\\:border-blue-300:hover {\n  border-color: #90cdf4\n}\n\n.hover\\:border-blue-400:hover {\n  border-color: #63b3ed\n}\n\n.hover\\:border-blue-500:hover {\n  border-color: #4299e1\n}\n\n.hover\\:border-blue-600:hover {\n  border-color: #3182ce\n}\n\n.hover\\:border-blue-700:hover {\n  border-color: #2b6cb0\n}\n\n.hover\\:border-blue-800:hover {\n  border-color: #2c5282\n}\n\n.hover\\:border-blue-900:hover {\n  border-color: #2a4365\n}\n\n.hover\\:border-indigo-100:hover {\n  border-color: #ebf4ff\n}\n\n.hover\\:border-indigo-200:hover {\n  border-color: #c3dafe\n}\n\n.hover\\:border-indigo-300:hover {\n  border-color: #a3bffa\n}\n\n.hover\\:border-indigo-400:hover {\n  border-color: #7f9cf5\n}\n\n.hover\\:border-indigo-500:hover {\n  border-color: #667eea\n}\n\n.hover\\:border-indigo-600:hover {\n  border-color: #5a67d8\n}\n\n.hover\\:border-indigo-700:hover {\n  border-color: #4c51bf\n}\n\n.hover\\:border-indigo-800:hover {\n  border-color: #434190\n}\n\n.hover\\:border-indigo-900:hover {\n  border-color: #3c366b\n}\n\n.hover\\:border-purple-100:hover {\n  border-color: #faf5ff\n}\n\n.hover\\:border-purple-200:hover {\n  border-color: #e9d8fd\n}\n\n.hover\\:border-purple-300:hover {\n  border-color: #d6bcfa\n}\n\n.hover\\:border-purple-400:hover {\n  border-color: #b794f4\n}\n\n.hover\\:border-purple-500:hover {\n  border-color: #9f7aea\n}\n\n.hover\\:border-purple-600:hover {\n  border-color: #805ad5\n}\n\n.hover\\:border-purple-700:hover {\n  border-color: #6b46c1\n}\n\n.hover\\:border-purple-800:hover {\n  border-color: #553c9a\n}\n\n.hover\\:border-purple-900:hover {\n  border-color: #44337a\n}\n\n.hover\\:border-pink-100:hover {\n  border-color: #fff5f7\n}\n\n.hover\\:border-pink-200:hover {\n  border-color: #fed7e2\n}\n\n.hover\\:border-pink-300:hover {\n  border-color: #fbb6ce\n}\n\n.hover\\:border-pink-400:hover {\n  border-color: #f687b3\n}\n\n.hover\\:border-pink-500:hover {\n  border-color: #ed64a6\n}\n\n.hover\\:border-pink-600:hover {\n  border-color: #d53f8c\n}\n\n.hover\\:border-pink-700:hover {\n  border-color: #b83280\n}\n\n.hover\\:border-pink-800:hover {\n  border-color: #97266d\n}\n\n.hover\\:border-pink-900:hover {\n  border-color: #702459\n}\n\n.focus\\:border-transparent:focus {\n  border-color: transparent\n}\n\n.focus\\:border-black:focus {\n  border-color: #000\n}\n\n.focus\\:border-white:focus {\n  border-color: #fff\n}\n\n.focus\\:border-gray-100:focus {\n  border-color: #f7fafc\n}\n\n.focus\\:border-gray-200:focus {\n  border-color: #edf2f7\n}\n\n.focus\\:border-gray-300:focus {\n  border-color: #e2e8f0\n}\n\n.focus\\:border-gray-400:focus {\n  border-color: #cbd5e0\n}\n\n.focus\\:border-gray-500:focus {\n  border-color: #a0aec0\n}\n\n.focus\\:border-gray-600:focus {\n  border-color: #718096\n}\n\n.focus\\:border-gray-700:focus {\n  border-color: #4a5568\n}\n\n.focus\\:border-gray-800:focus {\n  border-color: #2d3748\n}\n\n.focus\\:border-gray-900:focus {\n  border-color: #1a202c\n}\n\n.focus\\:border-red-100:focus {\n  border-color: #fff5f5\n}\n\n.focus\\:border-red-200:focus {\n  border-color: #fed7d7\n}\n\n.focus\\:border-red-300:focus {\n  border-color: #feb2b2\n}\n\n.focus\\:border-red-400:focus {\n  border-color: #fc8181\n}\n\n.focus\\:border-red-500:focus {\n  border-color: #f56565\n}\n\n.focus\\:border-red-600:focus {\n  border-color: #e53e3e\n}\n\n.focus\\:border-red-700:focus {\n  border-color: #c53030\n}\n\n.focus\\:border-red-800:focus {\n  border-color: #9b2c2c\n}\n\n.focus\\:border-red-900:focus {\n  border-color: #742a2a\n}\n\n.focus\\:border-orange-100:focus {\n  border-color: #fffaf0\n}\n\n.focus\\:border-orange-200:focus {\n  border-color: #feebc8\n}\n\n.focus\\:border-orange-300:focus {\n  border-color: #fbd38d\n}\n\n.focus\\:border-orange-400:focus {\n  border-color: #f6ad55\n}\n\n.focus\\:border-orange-500:focus {\n  border-color: #ed8936\n}\n\n.focus\\:border-orange-600:focus {\n  border-color: #dd6b20\n}\n\n.focus\\:border-orange-700:focus {\n  border-color: #c05621\n}\n\n.focus\\:border-orange-800:focus {\n  border-color: #9c4221\n}\n\n.focus\\:border-orange-900:focus {\n  border-color: #7b341e\n}\n\n.focus\\:border-yellow-100:focus {\n  border-color: #fffff0\n}\n\n.focus\\:border-yellow-200:focus {\n  border-color: #fefcbf\n}\n\n.focus\\:border-yellow-300:focus {\n  border-color: #faf089\n}\n\n.focus\\:border-yellow-400:focus {\n  border-color: #f6e05e\n}\n\n.focus\\:border-yellow-500:focus {\n  border-color: #ecc94b\n}\n\n.focus\\:border-yellow-600:focus {\n  border-color: #d69e2e\n}\n\n.focus\\:border-yellow-700:focus {\n  border-color: #b7791f\n}\n\n.focus\\:border-yellow-800:focus {\n  border-color: #975a16\n}\n\n.focus\\:border-yellow-900:focus {\n  border-color: #744210\n}\n\n.focus\\:border-green-100:focus {\n  border-color: #f0fff4\n}\n\n.focus\\:border-green-200:focus {\n  border-color: #c6f6d5\n}\n\n.focus\\:border-green-300:focus {\n  border-color: #9ae6b4\n}\n\n.focus\\:border-green-400:focus {\n  border-color: #68d391\n}\n\n.focus\\:border-green-500:focus {\n  border-color: #48bb78\n}\n\n.focus\\:border-green-600:focus {\n  border-color: #38a169\n}\n\n.focus\\:border-green-700:focus {\n  border-color: #2f855a\n}\n\n.focus\\:border-green-800:focus {\n  border-color: #276749\n}\n\n.focus\\:border-green-900:focus {\n  border-color: #22543d\n}\n\n.focus\\:border-teal-100:focus {\n  border-color: #e6fffa\n}\n\n.focus\\:border-teal-200:focus {\n  border-color: #b2f5ea\n}\n\n.focus\\:border-teal-300:focus {\n  border-color: #81e6d9\n}\n\n.focus\\:border-teal-400:focus {\n  border-color: #4fd1c5\n}\n\n.focus\\:border-teal-500:focus {\n  border-color: #38b2ac\n}\n\n.focus\\:border-teal-600:focus {\n  border-color: #319795\n}\n\n.focus\\:border-teal-700:focus {\n  border-color: #2c7a7b\n}\n\n.focus\\:border-teal-800:focus {\n  border-color: #285e61\n}\n\n.focus\\:border-teal-900:focus {\n  border-color: #234e52\n}\n\n.focus\\:border-blue-100:focus {\n  border-color: #ebf8ff\n}\n\n.focus\\:border-blue-200:focus {\n  border-color: #bee3f8\n}\n\n.focus\\:border-blue-300:focus {\n  border-color: #90cdf4\n}\n\n.focus\\:border-blue-400:focus {\n  border-color: #63b3ed\n}\n\n.focus\\:border-blue-500:focus {\n  border-color: #4299e1\n}\n\n.focus\\:border-blue-600:focus {\n  border-color: #3182ce\n}\n\n.focus\\:border-blue-700:focus {\n  border-color: #2b6cb0\n}\n\n.focus\\:border-blue-800:focus {\n  border-color: #2c5282\n}\n\n.focus\\:border-blue-900:focus {\n  border-color: #2a4365\n}\n\n.focus\\:border-indigo-100:focus {\n  border-color: #ebf4ff\n}\n\n.focus\\:border-indigo-200:focus {\n  border-color: #c3dafe\n}\n\n.focus\\:border-indigo-300:focus {\n  border-color: #a3bffa\n}\n\n.focus\\:border-indigo-400:focus {\n  border-color: #7f9cf5\n}\n\n.focus\\:border-indigo-500:focus {\n  border-color: #667eea\n}\n\n.focus\\:border-indigo-600:focus {\n  border-color: #5a67d8\n}\n\n.focus\\:border-indigo-700:focus {\n  border-color: #4c51bf\n}\n\n.focus\\:border-indigo-800:focus {\n  border-color: #434190\n}\n\n.focus\\:border-indigo-900:focus {\n  border-color: #3c366b\n}\n\n.focus\\:border-purple-100:focus {\n  border-color: #faf5ff\n}\n\n.focus\\:border-purple-200:focus {\n  border-color: #e9d8fd\n}\n\n.focus\\:border-purple-300:focus {\n  border-color: #d6bcfa\n}\n\n.focus\\:border-purple-400:focus {\n  border-color: #b794f4\n}\n\n.focus\\:border-purple-500:focus {\n  border-color: #9f7aea\n}\n\n.focus\\:border-purple-600:focus {\n  border-color: #805ad5\n}\n\n.focus\\:border-purple-700:focus {\n  border-color: #6b46c1\n}\n\n.focus\\:border-purple-800:focus {\n  border-color: #553c9a\n}\n\n.focus\\:border-purple-900:focus {\n  border-color: #44337a\n}\n\n.focus\\:border-pink-100:focus {\n  border-color: #fff5f7\n}\n\n.focus\\:border-pink-200:focus {\n  border-color: #fed7e2\n}\n\n.focus\\:border-pink-300:focus {\n  border-color: #fbb6ce\n}\n\n.focus\\:border-pink-400:focus {\n  border-color: #f687b3\n}\n\n.focus\\:border-pink-500:focus {\n  border-color: #ed64a6\n}\n\n.focus\\:border-pink-600:focus {\n  border-color: #d53f8c\n}\n\n.focus\\:border-pink-700:focus {\n  border-color: #b83280\n}\n\n.focus\\:border-pink-800:focus {\n  border-color: #97266d\n}\n\n.focus\\:border-pink-900:focus {\n  border-color: #702459\n}\n\n.rounded-none {\n  border-radius: 0\n}\n\n.rounded-sm {\n  border-radius: 0.125rem\n}\n\n.rounded {\n  border-radius: 0.25rem\n}\n\n.rounded-lg {\n  border-radius: 0.5rem\n}\n\n.rounded-full {\n  border-radius: 9999px\n}\n\n.rounded-t-none {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0\n}\n\n.rounded-r-none {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0\n}\n\n.rounded-b-none {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0\n}\n\n.rounded-l-none {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0\n}\n\n.rounded-t-sm {\n  border-top-left-radius: 0.125rem;\n  border-top-right-radius: 0.125rem\n}\n\n.rounded-r-sm {\n  border-top-right-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem\n}\n\n.rounded-b-sm {\n  border-bottom-right-radius: 0.125rem;\n  border-bottom-left-radius: 0.125rem\n}\n\n.rounded-l-sm {\n  border-top-left-radius: 0.125rem;\n  border-bottom-left-radius: 0.125rem\n}\n\n.rounded-t {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem\n}\n\n.rounded-r {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem\n}\n\n.rounded-b {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem\n}\n\n.rounded-l {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem\n}\n\n.rounded-t-lg {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem\n}\n\n.rounded-r-lg {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem\n}\n\n.rounded-b-lg {\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem\n}\n\n.rounded-l-lg {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem\n}\n\n.rounded-t-full {\n  border-top-left-radius: 9999px;\n  border-top-right-radius: 9999px\n}\n\n.rounded-r-full {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px\n}\n\n.rounded-b-full {\n  border-bottom-right-radius: 9999px;\n  border-bottom-left-radius: 9999px\n}\n\n.rounded-l-full {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px\n}\n\n.rounded-tl-none {\n  border-top-left-radius: 0\n}\n\n.rounded-tr-none {\n  border-top-right-radius: 0\n}\n\n.rounded-br-none {\n  border-bottom-right-radius: 0\n}\n\n.rounded-bl-none {\n  border-bottom-left-radius: 0\n}\n\n.rounded-tl-sm {\n  border-top-left-radius: 0.125rem\n}\n\n.rounded-tr-sm {\n  border-top-right-radius: 0.125rem\n}\n\n.rounded-br-sm {\n  border-bottom-right-radius: 0.125rem\n}\n\n.rounded-bl-sm {\n  border-bottom-left-radius: 0.125rem\n}\n\n.rounded-tl {\n  border-top-left-radius: 0.25rem\n}\n\n.rounded-tr {\n  border-top-right-radius: 0.25rem\n}\n\n.rounded-br {\n  border-bottom-right-radius: 0.25rem\n}\n\n.rounded-bl {\n  border-bottom-left-radius: 0.25rem\n}\n\n.rounded-tl-lg {\n  border-top-left-radius: 0.5rem\n}\n\n.rounded-tr-lg {\n  border-top-right-radius: 0.5rem\n}\n\n.rounded-br-lg {\n  border-bottom-right-radius: 0.5rem\n}\n\n.rounded-bl-lg {\n  border-bottom-left-radius: 0.5rem\n}\n\n.rounded-tl-full {\n  border-top-left-radius: 9999px\n}\n\n.rounded-tr-full {\n  border-top-right-radius: 9999px\n}\n\n.rounded-br-full {\n  border-bottom-right-radius: 9999px\n}\n\n.rounded-bl-full {\n  border-bottom-left-radius: 9999px\n}\n\n.border-solid {\n  border-style: solid\n}\n\n.border-dashed {\n  border-style: dashed\n}\n\n.border-dotted {\n  border-style: dotted\n}\n\n.border-double {\n  border-style: double\n}\n\n.border-none {\n  border-style: none\n}\n\n.border-0 {\n  border-width: 0\n}\n\n.border-2 {\n  border-width: 2px\n}\n\n.border-4 {\n  border-width: 4px\n}\n\n.border-8 {\n  border-width: 8px\n}\n\n.border {\n  border-width: 1px\n}\n\n.border-t-0 {\n  border-top-width: 0\n}\n\n.border-r-0 {\n  border-right-width: 0\n}\n\n.border-b-0 {\n  border-bottom-width: 0\n}\n\n.border-l-0 {\n  border-left-width: 0\n}\n\n.border-t-2 {\n  border-top-width: 2px\n}\n\n.border-r-2 {\n  border-right-width: 2px\n}\n\n.border-b-2 {\n  border-bottom-width: 2px\n}\n\n.border-l-2 {\n  border-left-width: 2px\n}\n\n.border-t-4 {\n  border-top-width: 4px\n}\n\n.border-r-4 {\n  border-right-width: 4px\n}\n\n.border-b-4 {\n  border-bottom-width: 4px\n}\n\n.border-l-4 {\n  border-left-width: 4px\n}\n\n.border-t-8 {\n  border-top-width: 8px\n}\n\n.border-r-8 {\n  border-right-width: 8px\n}\n\n.border-b-8 {\n  border-bottom-width: 8px\n}\n\n.border-l-8 {\n  border-left-width: 8px\n}\n\n.border-t {\n  border-top-width: 1px\n}\n\n.border-r {\n  border-right-width: 1px\n}\n\n.border-b {\n  border-bottom-width: 1px\n}\n\n.border-l {\n  border-left-width: 1px\n}\n\n.cursor-auto {\n  cursor: auto\n}\n\n.cursor-default {\n  cursor: default\n}\n\n.cursor-pointer {\n  cursor: pointer\n}\n\n.cursor-wait {\n  cursor: wait\n}\n\n.cursor-text {\n  cursor: text\n}\n\n.cursor-move {\n  cursor: move\n}\n\n.cursor-not-allowed {\n  cursor: not-allowed\n}\n\n.block {\n  display: block\n}\n\n.inline-block {\n  display: inline-block\n}\n\n.inline {\n  display: inline\n}\n\n.flex {\n  display: flex\n}\n\n.inline-flex {\n  display: inline-flex\n}\n\n.table {\n  display: table\n}\n\n.table-row {\n  display: table-row\n}\n\n.table-cell {\n  display: table-cell\n}\n\n.hidden {\n  display: none\n}\n\n.flex-row {\n  flex-direction: row\n}\n\n.flex-row-reverse {\n  flex-direction: row-reverse\n}\n\n.flex-col {\n  flex-direction: column\n}\n\n.flex-col-reverse {\n  flex-direction: column-reverse\n}\n\n.flex-wrap {\n  flex-wrap: wrap\n}\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse\n}\n\n.flex-no-wrap {\n  flex-wrap: nowrap\n}\n\n.items-start {\n  align-items: flex-start\n}\n\n.items-end {\n  align-items: flex-end\n}\n\n.items-center {\n  align-items: center\n}\n\n.items-baseline {\n  align-items: baseline\n}\n\n.items-stretch {\n  align-items: stretch\n}\n\n.self-auto {\n  align-self: auto\n}\n\n.self-start {\n  align-self: flex-start\n}\n\n.self-end {\n  align-self: flex-end\n}\n\n.self-center {\n  align-self: center\n}\n\n.self-stretch {\n  align-self: stretch\n}\n\n.justify-start {\n  justify-content: flex-start\n}\n\n.justify-end {\n  justify-content: flex-end\n}\n\n.justify-center {\n  justify-content: center\n}\n\n.justify-between {\n  justify-content: space-between\n}\n\n.justify-around {\n  justify-content: space-around\n}\n\n.content-center {\n  align-content: center\n}\n\n.content-start {\n  align-content: flex-start\n}\n\n.content-end {\n  align-content: flex-end\n}\n\n.content-between {\n  align-content: space-between\n}\n\n.content-around {\n  align-content: space-around\n}\n\n.flex-1 {\n  flex: 1 1 0%\n}\n\n.flex-auto {\n  flex: 1 1 auto\n}\n\n.flex-initial {\n  flex: 0 1 auto\n}\n\n.flex-none {\n  flex: none\n}\n\n.flex-grow-0 {\n  flex-grow: 0\n}\n\n.flex-grow {\n  flex-grow: 1\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0\n}\n\n.flex-shrink {\n  flex-shrink: 1\n}\n\n.order-1 {\n  order: 1\n}\n\n.order-2 {\n  order: 2\n}\n\n.order-3 {\n  order: 3\n}\n\n.order-4 {\n  order: 4\n}\n\n.order-5 {\n  order: 5\n}\n\n.order-6 {\n  order: 6\n}\n\n.order-7 {\n  order: 7\n}\n\n.order-8 {\n  order: 8\n}\n\n.order-9 {\n  order: 9\n}\n\n.order-10 {\n  order: 10\n}\n\n.order-11 {\n  order: 11\n}\n\n.order-12 {\n  order: 12\n}\n\n.order-first {\n  order: -9999\n}\n\n.order-last {\n  order: 9999\n}\n\n.order-none {\n  order: 0\n}\n\n.float-right {\n  float: right\n}\n\n.float-left {\n  float: left\n}\n\n.float-none {\n  float: none\n}\n\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both\n}\n\n.font-sans {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"\n}\n\n.font-serif {\n  font-family: Georgia, Cambria, \"Times New Roman\", Times, serif\n}\n\n.font-mono {\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace\n}\n\n.font-hairline {\n  font-weight: 100\n}\n\n.font-thin {\n  font-weight: 200\n}\n\n.font-light {\n  font-weight: 300\n}\n\n.font-normal {\n  font-weight: 400\n}\n\n.font-medium {\n  font-weight: 500\n}\n\n.font-semibold {\n  font-weight: 600\n}\n\n.font-bold {\n  font-weight: 700\n}\n\n.font-extrabold {\n  font-weight: 800\n}\n\n.font-black {\n  font-weight: 900\n}\n\n.hover\\:font-hairline:hover {\n  font-weight: 100\n}\n\n.hover\\:font-thin:hover {\n  font-weight: 200\n}\n\n.hover\\:font-light:hover {\n  font-weight: 300\n}\n\n.hover\\:font-normal:hover {\n  font-weight: 400\n}\n\n.hover\\:font-medium:hover {\n  font-weight: 500\n}\n\n.hover\\:font-semibold:hover {\n  font-weight: 600\n}\n\n.hover\\:font-bold:hover {\n  font-weight: 700\n}\n\n.hover\\:font-extrabold:hover {\n  font-weight: 800\n}\n\n.hover\\:font-black:hover {\n  font-weight: 900\n}\n\n.focus\\:font-hairline:focus {\n  font-weight: 100\n}\n\n.focus\\:font-thin:focus {\n  font-weight: 200\n}\n\n.focus\\:font-light:focus {\n  font-weight: 300\n}\n\n.focus\\:font-normal:focus {\n  font-weight: 400\n}\n\n.focus\\:font-medium:focus {\n  font-weight: 500\n}\n\n.focus\\:font-semibold:focus {\n  font-weight: 600\n}\n\n.focus\\:font-bold:focus {\n  font-weight: 700\n}\n\n.focus\\:font-extrabold:focus {\n  font-weight: 800\n}\n\n.focus\\:font-black:focus {\n  font-weight: 900\n}\n\n.h-0 {\n  height: 0\n}\n\n.h-1 {\n  height: 0.25rem\n}\n\n.h-2 {\n  height: 0.5rem\n}\n\n.h-3 {\n  height: 0.75rem\n}\n\n.h-4 {\n  height: 1rem\n}\n\n.h-5 {\n  height: 1.25rem\n}\n\n.h-6 {\n  height: 1.5rem\n}\n\n.h-8 {\n  height: 2rem\n}\n\n.h-10 {\n  height: 2.5rem\n}\n\n.h-12 {\n  height: 3rem\n}\n\n.h-16 {\n  height: 4rem\n}\n\n.h-20 {\n  height: 5rem\n}\n\n.h-24 {\n  height: 6rem\n}\n\n.h-32 {\n  height: 8rem\n}\n\n.h-40 {\n  height: 10rem\n}\n\n.h-48 {\n  height: 12rem\n}\n\n.h-56 {\n  height: 14rem\n}\n\n.h-64 {\n  height: 16rem\n}\n\n.h-auto {\n  height: auto\n}\n\n.h-px {\n  height: 1px\n}\n\n.h-full {\n  height: 100%\n}\n\n.h-screen {\n  height: 100vh\n}\n\n.leading-none {\n  line-height: 1\n}\n\n.leading-tight {\n  line-height: 1.25\n}\n\n.leading-snug {\n  line-height: 1.375\n}\n\n.leading-normal {\n  line-height: 1.5\n}\n\n.leading-relaxed {\n  line-height: 1.625\n}\n\n.leading-loose {\n  line-height: 2\n}\n\n.list-inside {\n  list-style-position: inside\n}\n\n.list-outside {\n  list-style-position: outside\n}\n\n.list-none {\n  list-style-type: none\n}\n\n.list-disc {\n  list-style-type: disc\n}\n\n.list-decimal {\n  list-style-type: decimal\n}\n\n.m-0 {\n  margin: 0\n}\n\n.m-1 {\n  margin: 0.25rem\n}\n\n.m-2 {\n  margin: 0.5rem\n}\n\n.m-3 {\n  margin: 0.75rem\n}\n\n.m-4 {\n  margin: 1rem\n}\n\n.m-5 {\n  margin: 1.25rem\n}\n\n.m-6 {\n  margin: 1.5rem\n}\n\n.m-8 {\n  margin: 2rem\n}\n\n.m-10 {\n  margin: 2.5rem\n}\n\n.m-12 {\n  margin: 3rem\n}\n\n.m-16 {\n  margin: 4rem\n}\n\n.m-20 {\n  margin: 5rem\n}\n\n.m-24 {\n  margin: 6rem\n}\n\n.m-32 {\n  margin: 8rem\n}\n\n.m-40 {\n  margin: 10rem\n}\n\n.m-48 {\n  margin: 12rem\n}\n\n.m-56 {\n  margin: 14rem\n}\n\n.m-64 {\n  margin: 16rem\n}\n\n.m-auto {\n  margin: auto\n}\n\n.m-px {\n  margin: 1px\n}\n\n.-m-1 {\n  margin: -0.25rem\n}\n\n.-m-2 {\n  margin: -0.5rem\n}\n\n.-m-3 {\n  margin: -0.75rem\n}\n\n.-m-4 {\n  margin: -1rem\n}\n\n.-m-5 {\n  margin: -1.25rem\n}\n\n.-m-6 {\n  margin: -1.5rem\n}\n\n.-m-8 {\n  margin: -2rem\n}\n\n.-m-10 {\n  margin: -2.5rem\n}\n\n.-m-12 {\n  margin: -3rem\n}\n\n.-m-16 {\n  margin: -4rem\n}\n\n.-m-20 {\n  margin: -5rem\n}\n\n.-m-24 {\n  margin: -6rem\n}\n\n.-m-32 {\n  margin: -8rem\n}\n\n.-m-40 {\n  margin: -10rem\n}\n\n.-m-48 {\n  margin: -12rem\n}\n\n.-m-56 {\n  margin: -14rem\n}\n\n.-m-64 {\n  margin: -16rem\n}\n\n.-m-px {\n  margin: -1px\n}\n\n.my-0 {\n  margin-top: 0;\n  margin-bottom: 0\n}\n\n.mx-0 {\n  margin-left: 0;\n  margin-right: 0\n}\n\n.my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem\n}\n\n.mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem\n}\n\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem\n}\n\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem\n}\n\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem\n}\n\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem\n}\n\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem\n}\n\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem\n}\n\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem\n}\n\n.mx-5 {\n  margin-left: 1.25rem;\n  margin-right: 1.25rem\n}\n\n.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem\n}\n\n.mx-6 {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem\n}\n\n.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem\n}\n\n.mx-8 {\n  margin-left: 2rem;\n  margin-right: 2rem\n}\n\n.my-10 {\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem\n}\n\n.mx-10 {\n  margin-left: 2.5rem;\n  margin-right: 2.5rem\n}\n\n.my-12 {\n  margin-top: 3rem;\n  margin-bottom: 3rem\n}\n\n.mx-12 {\n  margin-left: 3rem;\n  margin-right: 3rem\n}\n\n.my-16 {\n  margin-top: 4rem;\n  margin-bottom: 4rem\n}\n\n.mx-16 {\n  margin-left: 4rem;\n  margin-right: 4rem\n}\n\n.my-20 {\n  margin-top: 5rem;\n  margin-bottom: 5rem\n}\n\n.mx-20 {\n  margin-left: 5rem;\n  margin-right: 5rem\n}\n\n.my-24 {\n  margin-top: 6rem;\n  margin-bottom: 6rem\n}\n\n.mx-24 {\n  margin-left: 6rem;\n  margin-right: 6rem\n}\n\n.my-32 {\n  margin-top: 8rem;\n  margin-bottom: 8rem\n}\n\n.mx-32 {\n  margin-left: 8rem;\n  margin-right: 8rem\n}\n\n.my-40 {\n  margin-top: 10rem;\n  margin-bottom: 10rem\n}\n\n.mx-40 {\n  margin-left: 10rem;\n  margin-right: 10rem\n}\n\n.my-48 {\n  margin-top: 12rem;\n  margin-bottom: 12rem\n}\n\n.mx-48 {\n  margin-left: 12rem;\n  margin-right: 12rem\n}\n\n.my-56 {\n  margin-top: 14rem;\n  margin-bottom: 14rem\n}\n\n.mx-56 {\n  margin-left: 14rem;\n  margin-right: 14rem\n}\n\n.my-64 {\n  margin-top: 16rem;\n  margin-bottom: 16rem\n}\n\n.mx-64 {\n  margin-left: 16rem;\n  margin-right: 16rem\n}\n\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto\n}\n\n.my-px {\n  margin-top: 1px;\n  margin-bottom: 1px\n}\n\n.mx-px {\n  margin-left: 1px;\n  margin-right: 1px\n}\n\n.-my-1 {\n  margin-top: -0.25rem;\n  margin-bottom: -0.25rem\n}\n\n.-mx-1 {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem\n}\n\n.-my-2 {\n  margin-top: -0.5rem;\n  margin-bottom: -0.5rem\n}\n\n.-mx-2 {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem\n}\n\n.-my-3 {\n  margin-top: -0.75rem;\n  margin-bottom: -0.75rem\n}\n\n.-mx-3 {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem\n}\n\n.-my-4 {\n  margin-top: -1rem;\n  margin-bottom: -1rem\n}\n\n.-mx-4 {\n  margin-left: -1rem;\n  margin-right: -1rem\n}\n\n.-my-5 {\n  margin-top: -1.25rem;\n  margin-bottom: -1.25rem\n}\n\n.-mx-5 {\n  margin-left: -1.25rem;\n  margin-right: -1.25rem\n}\n\n.-my-6 {\n  margin-top: -1.5rem;\n  margin-bottom: -1.5rem\n}\n\n.-mx-6 {\n  margin-left: -1.5rem;\n  margin-right: -1.5rem\n}\n\n.-my-8 {\n  margin-top: -2rem;\n  margin-bottom: -2rem\n}\n\n.-mx-8 {\n  margin-left: -2rem;\n  margin-right: -2rem\n}\n\n.-my-10 {\n  margin-top: -2.5rem;\n  margin-bottom: -2.5rem\n}\n\n.-mx-10 {\n  margin-left: -2.5rem;\n  margin-right: -2.5rem\n}\n\n.-my-12 {\n  margin-top: -3rem;\n  margin-bottom: -3rem\n}\n\n.-mx-12 {\n  margin-left: -3rem;\n  margin-right: -3rem\n}\n\n.-my-16 {\n  margin-top: -4rem;\n  margin-bottom: -4rem\n}\n\n.-mx-16 {\n  margin-left: -4rem;\n  margin-right: -4rem\n}\n\n.-my-20 {\n  margin-top: -5rem;\n  margin-bottom: -5rem\n}\n\n.-mx-20 {\n  margin-left: -5rem;\n  margin-right: -5rem\n}\n\n.-my-24 {\n  margin-top: -6rem;\n  margin-bottom: -6rem\n}\n\n.-mx-24 {\n  margin-left: -6rem;\n  margin-right: -6rem\n}\n\n.-my-32 {\n  margin-top: -8rem;\n  margin-bottom: -8rem\n}\n\n.-mx-32 {\n  margin-left: -8rem;\n  margin-right: -8rem\n}\n\n.-my-40 {\n  margin-top: -10rem;\n  margin-bottom: -10rem\n}\n\n.-mx-40 {\n  margin-left: -10rem;\n  margin-right: -10rem\n}\n\n.-my-48 {\n  margin-top: -12rem;\n  margin-bottom: -12rem\n}\n\n.-mx-48 {\n  margin-left: -12rem;\n  margin-right: -12rem\n}\n\n.-my-56 {\n  margin-top: -14rem;\n  margin-bottom: -14rem\n}\n\n.-mx-56 {\n  margin-left: -14rem;\n  margin-right: -14rem\n}\n\n.-my-64 {\n  margin-top: -16rem;\n  margin-bottom: -16rem\n}\n\n.-mx-64 {\n  margin-left: -16rem;\n  margin-right: -16rem\n}\n\n.-my-px {\n  margin-top: -1px;\n  margin-bottom: -1px\n}\n\n.-mx-px {\n  margin-left: -1px;\n  margin-right: -1px\n}\n\n.mt-0 {\n  margin-top: 0\n}\n\n.mr-0 {\n  margin-right: 0\n}\n\n.mb-0 {\n  margin-bottom: 0\n}\n\n.ml-0 {\n  margin-left: 0\n}\n\n.mt-1 {\n  margin-top: 0.25rem\n}\n\n.mr-1 {\n  margin-right: 0.25rem\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem\n}\n\n.ml-1 {\n  margin-left: 0.25rem\n}\n\n.mt-2 {\n  margin-top: 0.5rem\n}\n\n.mr-2 {\n  margin-right: 0.5rem\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem\n}\n\n.ml-2 {\n  margin-left: 0.5rem\n}\n\n.mt-3 {\n  margin-top: 0.75rem\n}\n\n.mr-3 {\n  margin-right: 0.75rem\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem\n}\n\n.ml-3 {\n  margin-left: 0.75rem\n}\n\n.mt-4 {\n  margin-top: 1rem\n}\n\n.mr-4 {\n  margin-right: 1rem\n}\n\n.mb-4 {\n  margin-bottom: 1rem\n}\n\n.ml-4 {\n  margin-left: 1rem\n}\n\n.mt-5 {\n  margin-top: 1.25rem\n}\n\n.mr-5 {\n  margin-right: 1.25rem\n}\n\n.mb-5 {\n  margin-bottom: 1.25rem\n}\n\n.ml-5 {\n  margin-left: 1.25rem\n}\n\n.mt-6 {\n  margin-top: 1.5rem\n}\n\n.mr-6 {\n  margin-right: 1.5rem\n}\n\n.mb-6 {\n  margin-bottom: 1.5rem\n}\n\n.ml-6 {\n  margin-left: 1.5rem\n}\n\n.mt-8 {\n  margin-top: 2rem\n}\n\n.mr-8 {\n  margin-right: 2rem\n}\n\n.mb-8 {\n  margin-bottom: 2rem\n}\n\n.ml-8 {\n  margin-left: 2rem\n}\n\n.mt-10 {\n  margin-top: 2.5rem\n}\n\n.mr-10 {\n  margin-right: 2.5rem\n}\n\n.mb-10 {\n  margin-bottom: 2.5rem\n}\n\n.ml-10 {\n  margin-left: 2.5rem\n}\n\n.mt-12 {\n  margin-top: 3rem\n}\n\n.mr-12 {\n  margin-right: 3rem\n}\n\n.mb-12 {\n  margin-bottom: 3rem\n}\n\n.ml-12 {\n  margin-left: 3rem\n}\n\n.mt-16 {\n  margin-top: 4rem\n}\n\n.mr-16 {\n  margin-right: 4rem\n}\n\n.mb-16 {\n  margin-bottom: 4rem\n}\n\n.ml-16 {\n  margin-left: 4rem\n}\n\n.mt-20 {\n  margin-top: 5rem\n}\n\n.mr-20 {\n  margin-right: 5rem\n}\n\n.mb-20 {\n  margin-bottom: 5rem\n}\n\n.ml-20 {\n  margin-left: 5rem\n}\n\n.mt-24 {\n  margin-top: 6rem\n}\n\n.mr-24 {\n  margin-right: 6rem\n}\n\n.mb-24 {\n  margin-bottom: 6rem\n}\n\n.ml-24 {\n  margin-left: 6rem\n}\n\n.mt-32 {\n  margin-top: 8rem\n}\n\n.mr-32 {\n  margin-right: 8rem\n}\n\n.mb-32 {\n  margin-bottom: 8rem\n}\n\n.ml-32 {\n  margin-left: 8rem\n}\n\n.mt-40 {\n  margin-top: 10rem\n}\n\n.mr-40 {\n  margin-right: 10rem\n}\n\n.mb-40 {\n  margin-bottom: 10rem\n}\n\n.ml-40 {\n  margin-left: 10rem\n}\n\n.mt-48 {\n  margin-top: 12rem\n}\n\n.mr-48 {\n  margin-right: 12rem\n}\n\n.mb-48 {\n  margin-bottom: 12rem\n}\n\n.ml-48 {\n  margin-left: 12rem\n}\n\n.mt-56 {\n  margin-top: 14rem\n}\n\n.mr-56 {\n  margin-right: 14rem\n}\n\n.mb-56 {\n  margin-bottom: 14rem\n}\n\n.ml-56 {\n  margin-left: 14rem\n}\n\n.mt-64 {\n  margin-top: 16rem\n}\n\n.mr-64 {\n  margin-right: 16rem\n}\n\n.mb-64 {\n  margin-bottom: 16rem\n}\n\n.ml-64 {\n  margin-left: 16rem\n}\n\n.mt-auto {\n  margin-top: auto\n}\n\n.mr-auto {\n  margin-right: auto\n}\n\n.mb-auto {\n  margin-bottom: auto\n}\n\n.ml-auto {\n  margin-left: auto\n}\n\n.mt-px {\n  margin-top: 1px\n}\n\n.mr-px {\n  margin-right: 1px\n}\n\n.mb-px {\n  margin-bottom: 1px\n}\n\n.ml-px {\n  margin-left: 1px\n}\n\n.-mt-1 {\n  margin-top: -0.25rem\n}\n\n.-mr-1 {\n  margin-right: -0.25rem\n}\n\n.-mb-1 {\n  margin-bottom: -0.25rem\n}\n\n.-ml-1 {\n  margin-left: -0.25rem\n}\n\n.-mt-2 {\n  margin-top: -0.5rem\n}\n\n.-mr-2 {\n  margin-right: -0.5rem\n}\n\n.-mb-2 {\n  margin-bottom: -0.5rem\n}\n\n.-ml-2 {\n  margin-left: -0.5rem\n}\n\n.-mt-3 {\n  margin-top: -0.75rem\n}\n\n.-mr-3 {\n  margin-right: -0.75rem\n}\n\n.-mb-3 {\n  margin-bottom: -0.75rem\n}\n\n.-ml-3 {\n  margin-left: -0.75rem\n}\n\n.-mt-4 {\n  margin-top: -1rem\n}\n\n.-mr-4 {\n  margin-right: -1rem\n}\n\n.-mb-4 {\n  margin-bottom: -1rem\n}\n\n.-ml-4 {\n  margin-left: -1rem\n}\n\n.-mt-5 {\n  margin-top: -1.25rem\n}\n\n.-mr-5 {\n  margin-right: -1.25rem\n}\n\n.-mb-5 {\n  margin-bottom: -1.25rem\n}\n\n.-ml-5 {\n  margin-left: -1.25rem\n}\n\n.-mt-6 {\n  margin-top: -1.5rem\n}\n\n.-mr-6 {\n  margin-right: -1.5rem\n}\n\n.-mb-6 {\n  margin-bottom: -1.5rem\n}\n\n.-ml-6 {\n  margin-left: -1.5rem\n}\n\n.-mt-8 {\n  margin-top: -2rem\n}\n\n.-mr-8 {\n  margin-right: -2rem\n}\n\n.-mb-8 {\n  margin-bottom: -2rem\n}\n\n.-ml-8 {\n  margin-left: -2rem\n}\n\n.-mt-10 {\n  margin-top: -2.5rem\n}\n\n.-mr-10 {\n  margin-right: -2.5rem\n}\n\n.-mb-10 {\n  margin-bottom: -2.5rem\n}\n\n.-ml-10 {\n  margin-left: -2.5rem\n}\n\n.-mt-12 {\n  margin-top: -3rem\n}\n\n.-mr-12 {\n  margin-right: -3rem\n}\n\n.-mb-12 {\n  margin-bottom: -3rem\n}\n\n.-ml-12 {\n  margin-left: -3rem\n}\n\n.-mt-16 {\n  margin-top: -4rem\n}\n\n.-mr-16 {\n  margin-right: -4rem\n}\n\n.-mb-16 {\n  margin-bottom: -4rem\n}\n\n.-ml-16 {\n  margin-left: -4rem\n}\n\n.-mt-20 {\n  margin-top: -5rem\n}\n\n.-mr-20 {\n  margin-right: -5rem\n}\n\n.-mb-20 {\n  margin-bottom: -5rem\n}\n\n.-ml-20 {\n  margin-left: -5rem\n}\n\n.-mt-24 {\n  margin-top: -6rem\n}\n\n.-mr-24 {\n  margin-right: -6rem\n}\n\n.-mb-24 {\n  margin-bottom: -6rem\n}\n\n.-ml-24 {\n  margin-left: -6rem\n}\n\n.-mt-32 {\n  margin-top: -8rem\n}\n\n.-mr-32 {\n  margin-right: -8rem\n}\n\n.-mb-32 {\n  margin-bottom: -8rem\n}\n\n.-ml-32 {\n  margin-left: -8rem\n}\n\n.-mt-40 {\n  margin-top: -10rem\n}\n\n.-mr-40 {\n  margin-right: -10rem\n}\n\n.-mb-40 {\n  margin-bottom: -10rem\n}\n\n.-ml-40 {\n  margin-left: -10rem\n}\n\n.-mt-48 {\n  margin-top: -12rem\n}\n\n.-mr-48 {\n  margin-right: -12rem\n}\n\n.-mb-48 {\n  margin-bottom: -12rem\n}\n\n.-ml-48 {\n  margin-left: -12rem\n}\n\n.-mt-56 {\n  margin-top: -14rem\n}\n\n.-mr-56 {\n  margin-right: -14rem\n}\n\n.-mb-56 {\n  margin-bottom: -14rem\n}\n\n.-ml-56 {\n  margin-left: -14rem\n}\n\n.-mt-64 {\n  margin-top: -16rem\n}\n\n.-mr-64 {\n  margin-right: -16rem\n}\n\n.-mb-64 {\n  margin-bottom: -16rem\n}\n\n.-ml-64 {\n  margin-left: -16rem\n}\n\n.-mt-px {\n  margin-top: -1px\n}\n\n.-mr-px {\n  margin-right: -1px\n}\n\n.-mb-px {\n  margin-bottom: -1px\n}\n\n.-ml-px {\n  margin-left: -1px\n}\n\n.max-h-full {\n  max-height: 100%\n}\n\n.max-h-screen {\n  max-height: 100vh\n}\n\n.max-w-xs {\n  max-width: 20rem\n}\n\n.max-w-sm {\n  max-width: 24rem\n}\n\n.max-w-md {\n  max-width: 28rem\n}\n\n.max-w-lg {\n  max-width: 32rem\n}\n\n.max-w-xl {\n  max-width: 36rem\n}\n\n.max-w-2xl {\n  max-width: 42rem\n}\n\n.max-w-3xl {\n  max-width: 48rem\n}\n\n.max-w-4xl {\n  max-width: 56rem\n}\n\n.max-w-5xl {\n  max-width: 64rem\n}\n\n.max-w-6xl {\n  max-width: 72rem\n}\n\n.max-w-full {\n  max-width: 100%\n}\n\n.min-h-0 {\n  min-height: 0\n}\n\n.min-h-full {\n  min-height: 100%\n}\n\n.min-h-screen {\n  min-height: 100vh\n}\n\n.min-w-0 {\n  min-width: 0\n}\n\n.min-w-full {\n  min-width: 100%\n}\n\n.object-contain {\n  -o-object-fit: contain;\n     object-fit: contain\n}\n\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover\n}\n\n.object-fill {\n  -o-object-fit: fill;\n     object-fit: fill\n}\n\n.object-none {\n  -o-object-fit: none;\n     object-fit: none\n}\n\n.object-scale-down {\n  -o-object-fit: scale-down;\n     object-fit: scale-down\n}\n\n.object-bottom {\n  -o-object-position: bottom;\n     object-position: bottom\n}\n\n.object-center {\n  -o-object-position: center;\n     object-position: center\n}\n\n.object-left {\n  -o-object-position: left;\n     object-position: left\n}\n\n.object-left-bottom {\n  -o-object-position: left bottom;\n     object-position: left bottom\n}\n\n.object-left-top {\n  -o-object-position: left top;\n     object-position: left top\n}\n\n.object-right {\n  -o-object-position: right;\n     object-position: right\n}\n\n.object-right-bottom {\n  -o-object-position: right bottom;\n     object-position: right bottom\n}\n\n.object-right-top {\n  -o-object-position: right top;\n     object-position: right top\n}\n\n.object-top {\n  -o-object-position: top;\n     object-position: top\n}\n\n.opacity-0 {\n  opacity: 0\n}\n\n.opacity-25 {\n  opacity: 0.25\n}\n\n.opacity-50 {\n  opacity: 0.5\n}\n\n.opacity-75 {\n  opacity: 0.75\n}\n\n.opacity-100 {\n  opacity: 1\n}\n\n.hover\\:opacity-0:hover {\n  opacity: 0\n}\n\n.hover\\:opacity-25:hover {\n  opacity: 0.25\n}\n\n.hover\\:opacity-50:hover {\n  opacity: 0.5\n}\n\n.hover\\:opacity-75:hover {\n  opacity: 0.75\n}\n\n.hover\\:opacity-100:hover {\n  opacity: 1\n}\n\n.focus\\:opacity-0:focus {\n  opacity: 0\n}\n\n.focus\\:opacity-25:focus {\n  opacity: 0.25\n}\n\n.focus\\:opacity-50:focus {\n  opacity: 0.5\n}\n\n.focus\\:opacity-75:focus {\n  opacity: 0.75\n}\n\n.focus\\:opacity-100:focus {\n  opacity: 1\n}\n\n.outline-none {\n  outline: 0\n}\n\n.focus\\:outline-none:focus {\n  outline: 0\n}\n\n.overflow-auto {\n  overflow: auto\n}\n\n.overflow-hidden {\n  overflow: hidden\n}\n\n.overflow-visible {\n  overflow: visible\n}\n\n.overflow-scroll {\n  overflow: scroll\n}\n\n.overflow-x-auto {\n  overflow-x: auto\n}\n\n.overflow-y-auto {\n  overflow-y: auto\n}\n\n.overflow-x-hidden {\n  overflow-x: hidden\n}\n\n.overflow-y-hidden {\n  overflow-y: hidden\n}\n\n.overflow-x-visible {\n  overflow-x: visible\n}\n\n.overflow-y-visible {\n  overflow-y: visible\n}\n\n.overflow-x-scroll {\n  overflow-x: scroll\n}\n\n.overflow-y-scroll {\n  overflow-y: scroll\n}\n\n.scrolling-touch {\n  -webkit-overflow-scrolling: touch\n}\n\n.scrolling-auto {\n  -webkit-overflow-scrolling: auto\n}\n\n.p-0 {\n  padding: 0\n}\n\n.p-1 {\n  padding: 0.25rem\n}\n\n.p-2 {\n  padding: 0.5rem\n}\n\n.p-3 {\n  padding: 0.75rem\n}\n\n.p-4 {\n  padding: 1rem\n}\n\n.p-5 {\n  padding: 1.25rem\n}\n\n.p-6 {\n  padding: 1.5rem\n}\n\n.p-8 {\n  padding: 2rem\n}\n\n.p-10 {\n  padding: 2.5rem\n}\n\n.p-12 {\n  padding: 3rem\n}\n\n.p-16 {\n  padding: 4rem\n}\n\n.p-20 {\n  padding: 5rem\n}\n\n.p-24 {\n  padding: 6rem\n}\n\n.p-32 {\n  padding: 8rem\n}\n\n.p-40 {\n  padding: 10rem\n}\n\n.p-48 {\n  padding: 12rem\n}\n\n.p-56 {\n  padding: 14rem\n}\n\n.p-64 {\n  padding: 16rem\n}\n\n.p-px {\n  padding: 1px\n}\n\n.py-0 {\n  padding-top: 0;\n  padding-bottom: 0\n}\n\n.px-0 {\n  padding-left: 0;\n  padding-right: 0\n}\n\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem\n}\n\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem\n}\n\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem\n}\n\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem\n}\n\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem\n}\n\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem\n}\n\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem\n}\n\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem\n}\n\n.py-10 {\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem\n}\n\n.px-10 {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem\n}\n\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem\n}\n\n.px-12 {\n  padding-left: 3rem;\n  padding-right: 3rem\n}\n\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem\n}\n\n.px-16 {\n  padding-left: 4rem;\n  padding-right: 4rem\n}\n\n.py-20 {\n  padding-top: 5rem;\n  padding-bottom: 5rem\n}\n\n.px-20 {\n  padding-left: 5rem;\n  padding-right: 5rem\n}\n\n.py-24 {\n  padding-top: 6rem;\n  padding-bottom: 6rem\n}\n\n.px-24 {\n  padding-left: 6rem;\n  padding-right: 6rem\n}\n\n.py-32 {\n  padding-top: 8rem;\n  padding-bottom: 8rem\n}\n\n.px-32 {\n  padding-left: 8rem;\n  padding-right: 8rem\n}\n\n.py-40 {\n  padding-top: 10rem;\n  padding-bottom: 10rem\n}\n\n.px-40 {\n  padding-left: 10rem;\n  padding-right: 10rem\n}\n\n.py-48 {\n  padding-top: 12rem;\n  padding-bottom: 12rem\n}\n\n.px-48 {\n  padding-left: 12rem;\n  padding-right: 12rem\n}\n\n.py-56 {\n  padding-top: 14rem;\n  padding-bottom: 14rem\n}\n\n.px-56 {\n  padding-left: 14rem;\n  padding-right: 14rem\n}\n\n.py-64 {\n  padding-top: 16rem;\n  padding-bottom: 16rem\n}\n\n.px-64 {\n  padding-left: 16rem;\n  padding-right: 16rem\n}\n\n.py-px {\n  padding-top: 1px;\n  padding-bottom: 1px\n}\n\n.px-px {\n  padding-left: 1px;\n  padding-right: 1px\n}\n\n.pt-0 {\n  padding-top: 0\n}\n\n.pr-0 {\n  padding-right: 0\n}\n\n.pb-0 {\n  padding-bottom: 0\n}\n\n.pl-0 {\n  padding-left: 0\n}\n\n.pt-1 {\n  padding-top: 0.25rem\n}\n\n.pr-1 {\n  padding-right: 0.25rem\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem\n}\n\n.pl-1 {\n  padding-left: 0.25rem\n}\n\n.pt-2 {\n  padding-top: 0.5rem\n}\n\n.pr-2 {\n  padding-right: 0.5rem\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem\n}\n\n.pl-2 {\n  padding-left: 0.5rem\n}\n\n.pt-3 {\n  padding-top: 0.75rem\n}\n\n.pr-3 {\n  padding-right: 0.75rem\n}\n\n.pb-3 {\n  padding-bottom: 0.75rem\n}\n\n.pl-3 {\n  padding-left: 0.75rem\n}\n\n.pt-4 {\n  padding-top: 1rem\n}\n\n.pr-4 {\n  padding-right: 1rem\n}\n\n.pb-4 {\n  padding-bottom: 1rem\n}\n\n.pl-4 {\n  padding-left: 1rem\n}\n\n.pt-5 {\n  padding-top: 1.25rem\n}\n\n.pr-5 {\n  padding-right: 1.25rem\n}\n\n.pb-5 {\n  padding-bottom: 1.25rem\n}\n\n.pl-5 {\n  padding-left: 1.25rem\n}\n\n.pt-6 {\n  padding-top: 1.5rem\n}\n\n.pr-6 {\n  padding-right: 1.5rem\n}\n\n.pb-6 {\n  padding-bottom: 1.5rem\n}\n\n.pl-6 {\n  padding-left: 1.5rem\n}\n\n.pt-8 {\n  padding-top: 2rem\n}\n\n.pr-8 {\n  padding-right: 2rem\n}\n\n.pb-8 {\n  padding-bottom: 2rem\n}\n\n.pl-8 {\n  padding-left: 2rem\n}\n\n.pt-10 {\n  padding-top: 2.5rem\n}\n\n.pr-10 {\n  padding-right: 2.5rem\n}\n\n.pb-10 {\n  padding-bottom: 2.5rem\n}\n\n.pl-10 {\n  padding-left: 2.5rem\n}\n\n.pt-12 {\n  padding-top: 3rem\n}\n\n.pr-12 {\n  padding-right: 3rem\n}\n\n.pb-12 {\n  padding-bottom: 3rem\n}\n\n.pl-12 {\n  padding-left: 3rem\n}\n\n.pt-16 {\n  padding-top: 4rem\n}\n\n.pr-16 {\n  padding-right: 4rem\n}\n\n.pb-16 {\n  padding-bottom: 4rem\n}\n\n.pl-16 {\n  padding-left: 4rem\n}\n\n.pt-20 {\n  padding-top: 5rem\n}\n\n.pr-20 {\n  padding-right: 5rem\n}\n\n.pb-20 {\n  padding-bottom: 5rem\n}\n\n.pl-20 {\n  padding-left: 5rem\n}\n\n.pt-24 {\n  padding-top: 6rem\n}\n\n.pr-24 {\n  padding-right: 6rem\n}\n\n.pb-24 {\n  padding-bottom: 6rem\n}\n\n.pl-24 {\n  padding-left: 6rem\n}\n\n.pt-32 {\n  padding-top: 8rem\n}\n\n.pr-32 {\n  padding-right: 8rem\n}\n\n.pb-32 {\n  padding-bottom: 8rem\n}\n\n.pl-32 {\n  padding-left: 8rem\n}\n\n.pt-40 {\n  padding-top: 10rem\n}\n\n.pr-40 {\n  padding-right: 10rem\n}\n\n.pb-40 {\n  padding-bottom: 10rem\n}\n\n.pl-40 {\n  padding-left: 10rem\n}\n\n.pt-48 {\n  padding-top: 12rem\n}\n\n.pr-48 {\n  padding-right: 12rem\n}\n\n.pb-48 {\n  padding-bottom: 12rem\n}\n\n.pl-48 {\n  padding-left: 12rem\n}\n\n.pt-56 {\n  padding-top: 14rem\n}\n\n.pr-56 {\n  padding-right: 14rem\n}\n\n.pb-56 {\n  padding-bottom: 14rem\n}\n\n.pl-56 {\n  padding-left: 14rem\n}\n\n.pt-64 {\n  padding-top: 16rem\n}\n\n.pr-64 {\n  padding-right: 16rem\n}\n\n.pb-64 {\n  padding-bottom: 16rem\n}\n\n.pl-64 {\n  padding-left: 16rem\n}\n\n.pt-px {\n  padding-top: 1px\n}\n\n.pr-px {\n  padding-right: 1px\n}\n\n.pb-px {\n  padding-bottom: 1px\n}\n\n.pl-px {\n  padding-left: 1px\n}\n\n.placeholder-transparent:-ms-input-placeholder {\n  color: transparent\n}\n\n.placeholder-transparent::-ms-input-placeholder {\n  color: transparent\n}\n\n.placeholder-transparent::placeholder {\n  color: transparent\n}\n\n.placeholder-black:-ms-input-placeholder {\n  color: #000\n}\n\n.placeholder-black::-ms-input-placeholder {\n  color: #000\n}\n\n.placeholder-black::placeholder {\n  color: #000\n}\n\n.placeholder-white:-ms-input-placeholder {\n  color: #fff\n}\n\n.placeholder-white::-ms-input-placeholder {\n  color: #fff\n}\n\n.placeholder-white::placeholder {\n  color: #fff\n}\n\n.placeholder-gray-100:-ms-input-placeholder {\n  color: #f7fafc\n}\n\n.placeholder-gray-100::-ms-input-placeholder {\n  color: #f7fafc\n}\n\n.placeholder-gray-100::placeholder {\n  color: #f7fafc\n}\n\n.placeholder-gray-200:-ms-input-placeholder {\n  color: #edf2f7\n}\n\n.placeholder-gray-200::-ms-input-placeholder {\n  color: #edf2f7\n}\n\n.placeholder-gray-200::placeholder {\n  color: #edf2f7\n}\n\n.placeholder-gray-300:-ms-input-placeholder {\n  color: #e2e8f0\n}\n\n.placeholder-gray-300::-ms-input-placeholder {\n  color: #e2e8f0\n}\n\n.placeholder-gray-300::placeholder {\n  color: #e2e8f0\n}\n\n.placeholder-gray-400:-ms-input-placeholder {\n  color: #cbd5e0\n}\n\n.placeholder-gray-400::-ms-input-placeholder {\n  color: #cbd5e0\n}\n\n.placeholder-gray-400::placeholder {\n  color: #cbd5e0\n}\n\n.placeholder-gray-500:-ms-input-placeholder {\n  color: #a0aec0\n}\n\n.placeholder-gray-500::-ms-input-placeholder {\n  color: #a0aec0\n}\n\n.placeholder-gray-500::placeholder {\n  color: #a0aec0\n}\n\n.placeholder-gray-600:-ms-input-placeholder {\n  color: #718096\n}\n\n.placeholder-gray-600::-ms-input-placeholder {\n  color: #718096\n}\n\n.placeholder-gray-600::placeholder {\n  color: #718096\n}\n\n.placeholder-gray-700:-ms-input-placeholder {\n  color: #4a5568\n}\n\n.placeholder-gray-700::-ms-input-placeholder {\n  color: #4a5568\n}\n\n.placeholder-gray-700::placeholder {\n  color: #4a5568\n}\n\n.placeholder-gray-800:-ms-input-placeholder {\n  color: #2d3748\n}\n\n.placeholder-gray-800::-ms-input-placeholder {\n  color: #2d3748\n}\n\n.placeholder-gray-800::placeholder {\n  color: #2d3748\n}\n\n.placeholder-gray-900:-ms-input-placeholder {\n  color: #1a202c\n}\n\n.placeholder-gray-900::-ms-input-placeholder {\n  color: #1a202c\n}\n\n.placeholder-gray-900::placeholder {\n  color: #1a202c\n}\n\n.placeholder-red-100:-ms-input-placeholder {\n  color: #fff5f5\n}\n\n.placeholder-red-100::-ms-input-placeholder {\n  color: #fff5f5\n}\n\n.placeholder-red-100::placeholder {\n  color: #fff5f5\n}\n\n.placeholder-red-200:-ms-input-placeholder {\n  color: #fed7d7\n}\n\n.placeholder-red-200::-ms-input-placeholder {\n  color: #fed7d7\n}\n\n.placeholder-red-200::placeholder {\n  color: #fed7d7\n}\n\n.placeholder-red-300:-ms-input-placeholder {\n  color: #feb2b2\n}\n\n.placeholder-red-300::-ms-input-placeholder {\n  color: #feb2b2\n}\n\n.placeholder-red-300::placeholder {\n  color: #feb2b2\n}\n\n.placeholder-red-400:-ms-input-placeholder {\n  color: #fc8181\n}\n\n.placeholder-red-400::-ms-input-placeholder {\n  color: #fc8181\n}\n\n.placeholder-red-400::placeholder {\n  color: #fc8181\n}\n\n.placeholder-red-500:-ms-input-placeholder {\n  color: #f56565\n}\n\n.placeholder-red-500::-ms-input-placeholder {\n  color: #f56565\n}\n\n.placeholder-red-500::placeholder {\n  color: #f56565\n}\n\n.placeholder-red-600:-ms-input-placeholder {\n  color: #e53e3e\n}\n\n.placeholder-red-600::-ms-input-placeholder {\n  color: #e53e3e\n}\n\n.placeholder-red-600::placeholder {\n  color: #e53e3e\n}\n\n.placeholder-red-700:-ms-input-placeholder {\n  color: #c53030\n}\n\n.placeholder-red-700::-ms-input-placeholder {\n  color: #c53030\n}\n\n.placeholder-red-700::placeholder {\n  color: #c53030\n}\n\n.placeholder-red-800:-ms-input-placeholder {\n  color: #9b2c2c\n}\n\n.placeholder-red-800::-ms-input-placeholder {\n  color: #9b2c2c\n}\n\n.placeholder-red-800::placeholder {\n  color: #9b2c2c\n}\n\n.placeholder-red-900:-ms-input-placeholder {\n  color: #742a2a\n}\n\n.placeholder-red-900::-ms-input-placeholder {\n  color: #742a2a\n}\n\n.placeholder-red-900::placeholder {\n  color: #742a2a\n}\n\n.placeholder-orange-100:-ms-input-placeholder {\n  color: #fffaf0\n}\n\n.placeholder-orange-100::-ms-input-placeholder {\n  color: #fffaf0\n}\n\n.placeholder-orange-100::placeholder {\n  color: #fffaf0\n}\n\n.placeholder-orange-200:-ms-input-placeholder {\n  color: #feebc8\n}\n\n.placeholder-orange-200::-ms-input-placeholder {\n  color: #feebc8\n}\n\n.placeholder-orange-200::placeholder {\n  color: #feebc8\n}\n\n.placeholder-orange-300:-ms-input-placeholder {\n  color: #fbd38d\n}\n\n.placeholder-orange-300::-ms-input-placeholder {\n  color: #fbd38d\n}\n\n.placeholder-orange-300::placeholder {\n  color: #fbd38d\n}\n\n.placeholder-orange-400:-ms-input-placeholder {\n  color: #f6ad55\n}\n\n.placeholder-orange-400::-ms-input-placeholder {\n  color: #f6ad55\n}\n\n.placeholder-orange-400::placeholder {\n  color: #f6ad55\n}\n\n.placeholder-orange-500:-ms-input-placeholder {\n  color: #ed8936\n}\n\n.placeholder-orange-500::-ms-input-placeholder {\n  color: #ed8936\n}\n\n.placeholder-orange-500::placeholder {\n  color: #ed8936\n}\n\n.placeholder-orange-600:-ms-input-placeholder {\n  color: #dd6b20\n}\n\n.placeholder-orange-600::-ms-input-placeholder {\n  color: #dd6b20\n}\n\n.placeholder-orange-600::placeholder {\n  color: #dd6b20\n}\n\n.placeholder-orange-700:-ms-input-placeholder {\n  color: #c05621\n}\n\n.placeholder-orange-700::-ms-input-placeholder {\n  color: #c05621\n}\n\n.placeholder-orange-700::placeholder {\n  color: #c05621\n}\n\n.placeholder-orange-800:-ms-input-placeholder {\n  color: #9c4221\n}\n\n.placeholder-orange-800::-ms-input-placeholder {\n  color: #9c4221\n}\n\n.placeholder-orange-800::placeholder {\n  color: #9c4221\n}\n\n.placeholder-orange-900:-ms-input-placeholder {\n  color: #7b341e\n}\n\n.placeholder-orange-900::-ms-input-placeholder {\n  color: #7b341e\n}\n\n.placeholder-orange-900::placeholder {\n  color: #7b341e\n}\n\n.placeholder-yellow-100:-ms-input-placeholder {\n  color: #fffff0\n}\n\n.placeholder-yellow-100::-ms-input-placeholder {\n  color: #fffff0\n}\n\n.placeholder-yellow-100::placeholder {\n  color: #fffff0\n}\n\n.placeholder-yellow-200:-ms-input-placeholder {\n  color: #fefcbf\n}\n\n.placeholder-yellow-200::-ms-input-placeholder {\n  color: #fefcbf\n}\n\n.placeholder-yellow-200::placeholder {\n  color: #fefcbf\n}\n\n.placeholder-yellow-300:-ms-input-placeholder {\n  color: #faf089\n}\n\n.placeholder-yellow-300::-ms-input-placeholder {\n  color: #faf089\n}\n\n.placeholder-yellow-300::placeholder {\n  color: #faf089\n}\n\n.placeholder-yellow-400:-ms-input-placeholder {\n  color: #f6e05e\n}\n\n.placeholder-yellow-400::-ms-input-placeholder {\n  color: #f6e05e\n}\n\n.placeholder-yellow-400::placeholder {\n  color: #f6e05e\n}\n\n.placeholder-yellow-500:-ms-input-placeholder {\n  color: #ecc94b\n}\n\n.placeholder-yellow-500::-ms-input-placeholder {\n  color: #ecc94b\n}\n\n.placeholder-yellow-500::placeholder {\n  color: #ecc94b\n}\n\n.placeholder-yellow-600:-ms-input-placeholder {\n  color: #d69e2e\n}\n\n.placeholder-yellow-600::-ms-input-placeholder {\n  color: #d69e2e\n}\n\n.placeholder-yellow-600::placeholder {\n  color: #d69e2e\n}\n\n.placeholder-yellow-700:-ms-input-placeholder {\n  color: #b7791f\n}\n\n.placeholder-yellow-700::-ms-input-placeholder {\n  color: #b7791f\n}\n\n.placeholder-yellow-700::placeholder {\n  color: #b7791f\n}\n\n.placeholder-yellow-800:-ms-input-placeholder {\n  color: #975a16\n}\n\n.placeholder-yellow-800::-ms-input-placeholder {\n  color: #975a16\n}\n\n.placeholder-yellow-800::placeholder {\n  color: #975a16\n}\n\n.placeholder-yellow-900:-ms-input-placeholder {\n  color: #744210\n}\n\n.placeholder-yellow-900::-ms-input-placeholder {\n  color: #744210\n}\n\n.placeholder-yellow-900::placeholder {\n  color: #744210\n}\n\n.placeholder-green-100:-ms-input-placeholder {\n  color: #f0fff4\n}\n\n.placeholder-green-100::-ms-input-placeholder {\n  color: #f0fff4\n}\n\n.placeholder-green-100::placeholder {\n  color: #f0fff4\n}\n\n.placeholder-green-200:-ms-input-placeholder {\n  color: #c6f6d5\n}\n\n.placeholder-green-200::-ms-input-placeholder {\n  color: #c6f6d5\n}\n\n.placeholder-green-200::placeholder {\n  color: #c6f6d5\n}\n\n.placeholder-green-300:-ms-input-placeholder {\n  color: #9ae6b4\n}\n\n.placeholder-green-300::-ms-input-placeholder {\n  color: #9ae6b4\n}\n\n.placeholder-green-300::placeholder {\n  color: #9ae6b4\n}\n\n.placeholder-green-400:-ms-input-placeholder {\n  color: #68d391\n}\n\n.placeholder-green-400::-ms-input-placeholder {\n  color: #68d391\n}\n\n.placeholder-green-400::placeholder {\n  color: #68d391\n}\n\n.placeholder-green-500:-ms-input-placeholder {\n  color: #48bb78\n}\n\n.placeholder-green-500::-ms-input-placeholder {\n  color: #48bb78\n}\n\n.placeholder-green-500::placeholder {\n  color: #48bb78\n}\n\n.placeholder-green-600:-ms-input-placeholder {\n  color: #38a169\n}\n\n.placeholder-green-600::-ms-input-placeholder {\n  color: #38a169\n}\n\n.placeholder-green-600::placeholder {\n  color: #38a169\n}\n\n.placeholder-green-700:-ms-input-placeholder {\n  color: #2f855a\n}\n\n.placeholder-green-700::-ms-input-placeholder {\n  color: #2f855a\n}\n\n.placeholder-green-700::placeholder {\n  color: #2f855a\n}\n\n.placeholder-green-800:-ms-input-placeholder {\n  color: #276749\n}\n\n.placeholder-green-800::-ms-input-placeholder {\n  color: #276749\n}\n\n.placeholder-green-800::placeholder {\n  color: #276749\n}\n\n.placeholder-green-900:-ms-input-placeholder {\n  color: #22543d\n}\n\n.placeholder-green-900::-ms-input-placeholder {\n  color: #22543d\n}\n\n.placeholder-green-900::placeholder {\n  color: #22543d\n}\n\n.placeholder-teal-100:-ms-input-placeholder {\n  color: #e6fffa\n}\n\n.placeholder-teal-100::-ms-input-placeholder {\n  color: #e6fffa\n}\n\n.placeholder-teal-100::placeholder {\n  color: #e6fffa\n}\n\n.placeholder-teal-200:-ms-input-placeholder {\n  color: #b2f5ea\n}\n\n.placeholder-teal-200::-ms-input-placeholder {\n  color: #b2f5ea\n}\n\n.placeholder-teal-200::placeholder {\n  color: #b2f5ea\n}\n\n.placeholder-teal-300:-ms-input-placeholder {\n  color: #81e6d9\n}\n\n.placeholder-teal-300::-ms-input-placeholder {\n  color: #81e6d9\n}\n\n.placeholder-teal-300::placeholder {\n  color: #81e6d9\n}\n\n.placeholder-teal-400:-ms-input-placeholder {\n  color: #4fd1c5\n}\n\n.placeholder-teal-400::-ms-input-placeholder {\n  color: #4fd1c5\n}\n\n.placeholder-teal-400::placeholder {\n  color: #4fd1c5\n}\n\n.placeholder-teal-500:-ms-input-placeholder {\n  color: #38b2ac\n}\n\n.placeholder-teal-500::-ms-input-placeholder {\n  color: #38b2ac\n}\n\n.placeholder-teal-500::placeholder {\n  color: #38b2ac\n}\n\n.placeholder-teal-600:-ms-input-placeholder {\n  color: #319795\n}\n\n.placeholder-teal-600::-ms-input-placeholder {\n  color: #319795\n}\n\n.placeholder-teal-600::placeholder {\n  color: #319795\n}\n\n.placeholder-teal-700:-ms-input-placeholder {\n  color: #2c7a7b\n}\n\n.placeholder-teal-700::-ms-input-placeholder {\n  color: #2c7a7b\n}\n\n.placeholder-teal-700::placeholder {\n  color: #2c7a7b\n}\n\n.placeholder-teal-800:-ms-input-placeholder {\n  color: #285e61\n}\n\n.placeholder-teal-800::-ms-input-placeholder {\n  color: #285e61\n}\n\n.placeholder-teal-800::placeholder {\n  color: #285e61\n}\n\n.placeholder-teal-900:-ms-input-placeholder {\n  color: #234e52\n}\n\n.placeholder-teal-900::-ms-input-placeholder {\n  color: #234e52\n}\n\n.placeholder-teal-900::placeholder {\n  color: #234e52\n}\n\n.placeholder-blue-100:-ms-input-placeholder {\n  color: #ebf8ff\n}\n\n.placeholder-blue-100::-ms-input-placeholder {\n  color: #ebf8ff\n}\n\n.placeholder-blue-100::placeholder {\n  color: #ebf8ff\n}\n\n.placeholder-blue-200:-ms-input-placeholder {\n  color: #bee3f8\n}\n\n.placeholder-blue-200::-ms-input-placeholder {\n  color: #bee3f8\n}\n\n.placeholder-blue-200::placeholder {\n  color: #bee3f8\n}\n\n.placeholder-blue-300:-ms-input-placeholder {\n  color: #90cdf4\n}\n\n.placeholder-blue-300::-ms-input-placeholder {\n  color: #90cdf4\n}\n\n.placeholder-blue-300::placeholder {\n  color: #90cdf4\n}\n\n.placeholder-blue-400:-ms-input-placeholder {\n  color: #63b3ed\n}\n\n.placeholder-blue-400::-ms-input-placeholder {\n  color: #63b3ed\n}\n\n.placeholder-blue-400::placeholder {\n  color: #63b3ed\n}\n\n.placeholder-blue-500:-ms-input-placeholder {\n  color: #4299e1\n}\n\n.placeholder-blue-500::-ms-input-placeholder {\n  color: #4299e1\n}\n\n.placeholder-blue-500::placeholder {\n  color: #4299e1\n}\n\n.placeholder-blue-600:-ms-input-placeholder {\n  color: #3182ce\n}\n\n.placeholder-blue-600::-ms-input-placeholder {\n  color: #3182ce\n}\n\n.placeholder-blue-600::placeholder {\n  color: #3182ce\n}\n\n.placeholder-blue-700:-ms-input-placeholder {\n  color: #2b6cb0\n}\n\n.placeholder-blue-700::-ms-input-placeholder {\n  color: #2b6cb0\n}\n\n.placeholder-blue-700::placeholder {\n  color: #2b6cb0\n}\n\n.placeholder-blue-800:-ms-input-placeholder {\n  color: #2c5282\n}\n\n.placeholder-blue-800::-ms-input-placeholder {\n  color: #2c5282\n}\n\n.placeholder-blue-800::placeholder {\n  color: #2c5282\n}\n\n.placeholder-blue-900:-ms-input-placeholder {\n  color: #2a4365\n}\n\n.placeholder-blue-900::-ms-input-placeholder {\n  color: #2a4365\n}\n\n.placeholder-blue-900::placeholder {\n  color: #2a4365\n}\n\n.placeholder-indigo-100:-ms-input-placeholder {\n  color: #ebf4ff\n}\n\n.placeholder-indigo-100::-ms-input-placeholder {\n  color: #ebf4ff\n}\n\n.placeholder-indigo-100::placeholder {\n  color: #ebf4ff\n}\n\n.placeholder-indigo-200:-ms-input-placeholder {\n  color: #c3dafe\n}\n\n.placeholder-indigo-200::-ms-input-placeholder {\n  color: #c3dafe\n}\n\n.placeholder-indigo-200::placeholder {\n  color: #c3dafe\n}\n\n.placeholder-indigo-300:-ms-input-placeholder {\n  color: #a3bffa\n}\n\n.placeholder-indigo-300::-ms-input-placeholder {\n  color: #a3bffa\n}\n\n.placeholder-indigo-300::placeholder {\n  color: #a3bffa\n}\n\n.placeholder-indigo-400:-ms-input-placeholder {\n  color: #7f9cf5\n}\n\n.placeholder-indigo-400::-ms-input-placeholder {\n  color: #7f9cf5\n}\n\n.placeholder-indigo-400::placeholder {\n  color: #7f9cf5\n}\n\n.placeholder-indigo-500:-ms-input-placeholder {\n  color: #667eea\n}\n\n.placeholder-indigo-500::-ms-input-placeholder {\n  color: #667eea\n}\n\n.placeholder-indigo-500::placeholder {\n  color: #667eea\n}\n\n.placeholder-indigo-600:-ms-input-placeholder {\n  color: #5a67d8\n}\n\n.placeholder-indigo-600::-ms-input-placeholder {\n  color: #5a67d8\n}\n\n.placeholder-indigo-600::placeholder {\n  color: #5a67d8\n}\n\n.placeholder-indigo-700:-ms-input-placeholder {\n  color: #4c51bf\n}\n\n.placeholder-indigo-700::-ms-input-placeholder {\n  color: #4c51bf\n}\n\n.placeholder-indigo-700::placeholder {\n  color: #4c51bf\n}\n\n.placeholder-indigo-800:-ms-input-placeholder {\n  color: #434190\n}\n\n.placeholder-indigo-800::-ms-input-placeholder {\n  color: #434190\n}\n\n.placeholder-indigo-800::placeholder {\n  color: #434190\n}\n\n.placeholder-indigo-900:-ms-input-placeholder {\n  color: #3c366b\n}\n\n.placeholder-indigo-900::-ms-input-placeholder {\n  color: #3c366b\n}\n\n.placeholder-indigo-900::placeholder {\n  color: #3c366b\n}\n\n.placeholder-purple-100:-ms-input-placeholder {\n  color: #faf5ff\n}\n\n.placeholder-purple-100::-ms-input-placeholder {\n  color: #faf5ff\n}\n\n.placeholder-purple-100::placeholder {\n  color: #faf5ff\n}\n\n.placeholder-purple-200:-ms-input-placeholder {\n  color: #e9d8fd\n}\n\n.placeholder-purple-200::-ms-input-placeholder {\n  color: #e9d8fd\n}\n\n.placeholder-purple-200::placeholder {\n  color: #e9d8fd\n}\n\n.placeholder-purple-300:-ms-input-placeholder {\n  color: #d6bcfa\n}\n\n.placeholder-purple-300::-ms-input-placeholder {\n  color: #d6bcfa\n}\n\n.placeholder-purple-300::placeholder {\n  color: #d6bcfa\n}\n\n.placeholder-purple-400:-ms-input-placeholder {\n  color: #b794f4\n}\n\n.placeholder-purple-400::-ms-input-placeholder {\n  color: #b794f4\n}\n\n.placeholder-purple-400::placeholder {\n  color: #b794f4\n}\n\n.placeholder-purple-500:-ms-input-placeholder {\n  color: #9f7aea\n}\n\n.placeholder-purple-500::-ms-input-placeholder {\n  color: #9f7aea\n}\n\n.placeholder-purple-500::placeholder {\n  color: #9f7aea\n}\n\n.placeholder-purple-600:-ms-input-placeholder {\n  color: #805ad5\n}\n\n.placeholder-purple-600::-ms-input-placeholder {\n  color: #805ad5\n}\n\n.placeholder-purple-600::placeholder {\n  color: #805ad5\n}\n\n.placeholder-purple-700:-ms-input-placeholder {\n  color: #6b46c1\n}\n\n.placeholder-purple-700::-ms-input-placeholder {\n  color: #6b46c1\n}\n\n.placeholder-purple-700::placeholder {\n  color: #6b46c1\n}\n\n.placeholder-purple-800:-ms-input-placeholder {\n  color: #553c9a\n}\n\n.placeholder-purple-800::-ms-input-placeholder {\n  color: #553c9a\n}\n\n.placeholder-purple-800::placeholder {\n  color: #553c9a\n}\n\n.placeholder-purple-900:-ms-input-placeholder {\n  color: #44337a\n}\n\n.placeholder-purple-900::-ms-input-placeholder {\n  color: #44337a\n}\n\n.placeholder-purple-900::placeholder {\n  color: #44337a\n}\n\n.placeholder-pink-100:-ms-input-placeholder {\n  color: #fff5f7\n}\n\n.placeholder-pink-100::-ms-input-placeholder {\n  color: #fff5f7\n}\n\n.placeholder-pink-100::placeholder {\n  color: #fff5f7\n}\n\n.placeholder-pink-200:-ms-input-placeholder {\n  color: #fed7e2\n}\n\n.placeholder-pink-200::-ms-input-placeholder {\n  color: #fed7e2\n}\n\n.placeholder-pink-200::placeholder {\n  color: #fed7e2\n}\n\n.placeholder-pink-300:-ms-input-placeholder {\n  color: #fbb6ce\n}\n\n.placeholder-pink-300::-ms-input-placeholder {\n  color: #fbb6ce\n}\n\n.placeholder-pink-300::placeholder {\n  color: #fbb6ce\n}\n\n.placeholder-pink-400:-ms-input-placeholder {\n  color: #f687b3\n}\n\n.placeholder-pink-400::-ms-input-placeholder {\n  color: #f687b3\n}\n\n.placeholder-pink-400::placeholder {\n  color: #f687b3\n}\n\n.placeholder-pink-500:-ms-input-placeholder {\n  color: #ed64a6\n}\n\n.placeholder-pink-500::-ms-input-placeholder {\n  color: #ed64a6\n}\n\n.placeholder-pink-500::placeholder {\n  color: #ed64a6\n}\n\n.placeholder-pink-600:-ms-input-placeholder {\n  color: #d53f8c\n}\n\n.placeholder-pink-600::-ms-input-placeholder {\n  color: #d53f8c\n}\n\n.placeholder-pink-600::placeholder {\n  color: #d53f8c\n}\n\n.placeholder-pink-700:-ms-input-placeholder {\n  color: #b83280\n}\n\n.placeholder-pink-700::-ms-input-placeholder {\n  color: #b83280\n}\n\n.placeholder-pink-700::placeholder {\n  color: #b83280\n}\n\n.placeholder-pink-800:-ms-input-placeholder {\n  color: #97266d\n}\n\n.placeholder-pink-800::-ms-input-placeholder {\n  color: #97266d\n}\n\n.placeholder-pink-800::placeholder {\n  color: #97266d\n}\n\n.placeholder-pink-900:-ms-input-placeholder {\n  color: #702459\n}\n\n.placeholder-pink-900::-ms-input-placeholder {\n  color: #702459\n}\n\n.placeholder-pink-900::placeholder {\n  color: #702459\n}\n\n.focus\\:placeholder-transparent:focus:-ms-input-placeholder {\n  color: transparent\n}\n\n.focus\\:placeholder-transparent:focus::-ms-input-placeholder {\n  color: transparent\n}\n\n.focus\\:placeholder-transparent:focus::placeholder {\n  color: transparent\n}\n\n.focus\\:placeholder-black:focus:-ms-input-placeholder {\n  color: #000\n}\n\n.focus\\:placeholder-black:focus::-ms-input-placeholder {\n  color: #000\n}\n\n.focus\\:placeholder-black:focus::placeholder {\n  color: #000\n}\n\n.focus\\:placeholder-white:focus:-ms-input-placeholder {\n  color: #fff\n}\n\n.focus\\:placeholder-white:focus::-ms-input-placeholder {\n  color: #fff\n}\n\n.focus\\:placeholder-white:focus::placeholder {\n  color: #fff\n}\n\n.focus\\:placeholder-gray-100:focus:-ms-input-placeholder {\n  color: #f7fafc\n}\n\n.focus\\:placeholder-gray-100:focus::-ms-input-placeholder {\n  color: #f7fafc\n}\n\n.focus\\:placeholder-gray-100:focus::placeholder {\n  color: #f7fafc\n}\n\n.focus\\:placeholder-gray-200:focus:-ms-input-placeholder {\n  color: #edf2f7\n}\n\n.focus\\:placeholder-gray-200:focus::-ms-input-placeholder {\n  color: #edf2f7\n}\n\n.focus\\:placeholder-gray-200:focus::placeholder {\n  color: #edf2f7\n}\n\n.focus\\:placeholder-gray-300:focus:-ms-input-placeholder {\n  color: #e2e8f0\n}\n\n.focus\\:placeholder-gray-300:focus::-ms-input-placeholder {\n  color: #e2e8f0\n}\n\n.focus\\:placeholder-gray-300:focus::placeholder {\n  color: #e2e8f0\n}\n\n.focus\\:placeholder-gray-400:focus:-ms-input-placeholder {\n  color: #cbd5e0\n}\n\n.focus\\:placeholder-gray-400:focus::-ms-input-placeholder {\n  color: #cbd5e0\n}\n\n.focus\\:placeholder-gray-400:focus::placeholder {\n  color: #cbd5e0\n}\n\n.focus\\:placeholder-gray-500:focus:-ms-input-placeholder {\n  color: #a0aec0\n}\n\n.focus\\:placeholder-gray-500:focus::-ms-input-placeholder {\n  color: #a0aec0\n}\n\n.focus\\:placeholder-gray-500:focus::placeholder {\n  color: #a0aec0\n}\n\n.focus\\:placeholder-gray-600:focus:-ms-input-placeholder {\n  color: #718096\n}\n\n.focus\\:placeholder-gray-600:focus::-ms-input-placeholder {\n  color: #718096\n}\n\n.focus\\:placeholder-gray-600:focus::placeholder {\n  color: #718096\n}\n\n.focus\\:placeholder-gray-700:focus:-ms-input-placeholder {\n  color: #4a5568\n}\n\n.focus\\:placeholder-gray-700:focus::-ms-input-placeholder {\n  color: #4a5568\n}\n\n.focus\\:placeholder-gray-700:focus::placeholder {\n  color: #4a5568\n}\n\n.focus\\:placeholder-gray-800:focus:-ms-input-placeholder {\n  color: #2d3748\n}\n\n.focus\\:placeholder-gray-800:focus::-ms-input-placeholder {\n  color: #2d3748\n}\n\n.focus\\:placeholder-gray-800:focus::placeholder {\n  color: #2d3748\n}\n\n.focus\\:placeholder-gray-900:focus:-ms-input-placeholder {\n  color: #1a202c\n}\n\n.focus\\:placeholder-gray-900:focus::-ms-input-placeholder {\n  color: #1a202c\n}\n\n.focus\\:placeholder-gray-900:focus::placeholder {\n  color: #1a202c\n}\n\n.focus\\:placeholder-red-100:focus:-ms-input-placeholder {\n  color: #fff5f5\n}\n\n.focus\\:placeholder-red-100:focus::-ms-input-placeholder {\n  color: #fff5f5\n}\n\n.focus\\:placeholder-red-100:focus::placeholder {\n  color: #fff5f5\n}\n\n.focus\\:placeholder-red-200:focus:-ms-input-placeholder {\n  color: #fed7d7\n}\n\n.focus\\:placeholder-red-200:focus::-ms-input-placeholder {\n  color: #fed7d7\n}\n\n.focus\\:placeholder-red-200:focus::placeholder {\n  color: #fed7d7\n}\n\n.focus\\:placeholder-red-300:focus:-ms-input-placeholder {\n  color: #feb2b2\n}\n\n.focus\\:placeholder-red-300:focus::-ms-input-placeholder {\n  color: #feb2b2\n}\n\n.focus\\:placeholder-red-300:focus::placeholder {\n  color: #feb2b2\n}\n\n.focus\\:placeholder-red-400:focus:-ms-input-placeholder {\n  color: #fc8181\n}\n\n.focus\\:placeholder-red-400:focus::-ms-input-placeholder {\n  color: #fc8181\n}\n\n.focus\\:placeholder-red-400:focus::placeholder {\n  color: #fc8181\n}\n\n.focus\\:placeholder-red-500:focus:-ms-input-placeholder {\n  color: #f56565\n}\n\n.focus\\:placeholder-red-500:focus::-ms-input-placeholder {\n  color: #f56565\n}\n\n.focus\\:placeholder-red-500:focus::placeholder {\n  color: #f56565\n}\n\n.focus\\:placeholder-red-600:focus:-ms-input-placeholder {\n  color: #e53e3e\n}\n\n.focus\\:placeholder-red-600:focus::-ms-input-placeholder {\n  color: #e53e3e\n}\n\n.focus\\:placeholder-red-600:focus::placeholder {\n  color: #e53e3e\n}\n\n.focus\\:placeholder-red-700:focus:-ms-input-placeholder {\n  color: #c53030\n}\n\n.focus\\:placeholder-red-700:focus::-ms-input-placeholder {\n  color: #c53030\n}\n\n.focus\\:placeholder-red-700:focus::placeholder {\n  color: #c53030\n}\n\n.focus\\:placeholder-red-800:focus:-ms-input-placeholder {\n  color: #9b2c2c\n}\n\n.focus\\:placeholder-red-800:focus::-ms-input-placeholder {\n  color: #9b2c2c\n}\n\n.focus\\:placeholder-red-800:focus::placeholder {\n  color: #9b2c2c\n}\n\n.focus\\:placeholder-red-900:focus:-ms-input-placeholder {\n  color: #742a2a\n}\n\n.focus\\:placeholder-red-900:focus::-ms-input-placeholder {\n  color: #742a2a\n}\n\n.focus\\:placeholder-red-900:focus::placeholder {\n  color: #742a2a\n}\n\n.focus\\:placeholder-orange-100:focus:-ms-input-placeholder {\n  color: #fffaf0\n}\n\n.focus\\:placeholder-orange-100:focus::-ms-input-placeholder {\n  color: #fffaf0\n}\n\n.focus\\:placeholder-orange-100:focus::placeholder {\n  color: #fffaf0\n}\n\n.focus\\:placeholder-orange-200:focus:-ms-input-placeholder {\n  color: #feebc8\n}\n\n.focus\\:placeholder-orange-200:focus::-ms-input-placeholder {\n  color: #feebc8\n}\n\n.focus\\:placeholder-orange-200:focus::placeholder {\n  color: #feebc8\n}\n\n.focus\\:placeholder-orange-300:focus:-ms-input-placeholder {\n  color: #fbd38d\n}\n\n.focus\\:placeholder-orange-300:focus::-ms-input-placeholder {\n  color: #fbd38d\n}\n\n.focus\\:placeholder-orange-300:focus::placeholder {\n  color: #fbd38d\n}\n\n.focus\\:placeholder-orange-400:focus:-ms-input-placeholder {\n  color: #f6ad55\n}\n\n.focus\\:placeholder-orange-400:focus::-ms-input-placeholder {\n  color: #f6ad55\n}\n\n.focus\\:placeholder-orange-400:focus::placeholder {\n  color: #f6ad55\n}\n\n.focus\\:placeholder-orange-500:focus:-ms-input-placeholder {\n  color: #ed8936\n}\n\n.focus\\:placeholder-orange-500:focus::-ms-input-placeholder {\n  color: #ed8936\n}\n\n.focus\\:placeholder-orange-500:focus::placeholder {\n  color: #ed8936\n}\n\n.focus\\:placeholder-orange-600:focus:-ms-input-placeholder {\n  color: #dd6b20\n}\n\n.focus\\:placeholder-orange-600:focus::-ms-input-placeholder {\n  color: #dd6b20\n}\n\n.focus\\:placeholder-orange-600:focus::placeholder {\n  color: #dd6b20\n}\n\n.focus\\:placeholder-orange-700:focus:-ms-input-placeholder {\n  color: #c05621\n}\n\n.focus\\:placeholder-orange-700:focus::-ms-input-placeholder {\n  color: #c05621\n}\n\n.focus\\:placeholder-orange-700:focus::placeholder {\n  color: #c05621\n}\n\n.focus\\:placeholder-orange-800:focus:-ms-input-placeholder {\n  color: #9c4221\n}\n\n.focus\\:placeholder-orange-800:focus::-ms-input-placeholder {\n  color: #9c4221\n}\n\n.focus\\:placeholder-orange-800:focus::placeholder {\n  color: #9c4221\n}\n\n.focus\\:placeholder-orange-900:focus:-ms-input-placeholder {\n  color: #7b341e\n}\n\n.focus\\:placeholder-orange-900:focus::-ms-input-placeholder {\n  color: #7b341e\n}\n\n.focus\\:placeholder-orange-900:focus::placeholder {\n  color: #7b341e\n}\n\n.focus\\:placeholder-yellow-100:focus:-ms-input-placeholder {\n  color: #fffff0\n}\n\n.focus\\:placeholder-yellow-100:focus::-ms-input-placeholder {\n  color: #fffff0\n}\n\n.focus\\:placeholder-yellow-100:focus::placeholder {\n  color: #fffff0\n}\n\n.focus\\:placeholder-yellow-200:focus:-ms-input-placeholder {\n  color: #fefcbf\n}\n\n.focus\\:placeholder-yellow-200:focus::-ms-input-placeholder {\n  color: #fefcbf\n}\n\n.focus\\:placeholder-yellow-200:focus::placeholder {\n  color: #fefcbf\n}\n\n.focus\\:placeholder-yellow-300:focus:-ms-input-placeholder {\n  color: #faf089\n}\n\n.focus\\:placeholder-yellow-300:focus::-ms-input-placeholder {\n  color: #faf089\n}\n\n.focus\\:placeholder-yellow-300:focus::placeholder {\n  color: #faf089\n}\n\n.focus\\:placeholder-yellow-400:focus:-ms-input-placeholder {\n  color: #f6e05e\n}\n\n.focus\\:placeholder-yellow-400:focus::-ms-input-placeholder {\n  color: #f6e05e\n}\n\n.focus\\:placeholder-yellow-400:focus::placeholder {\n  color: #f6e05e\n}\n\n.focus\\:placeholder-yellow-500:focus:-ms-input-placeholder {\n  color: #ecc94b\n}\n\n.focus\\:placeholder-yellow-500:focus::-ms-input-placeholder {\n  color: #ecc94b\n}\n\n.focus\\:placeholder-yellow-500:focus::placeholder {\n  color: #ecc94b\n}\n\n.focus\\:placeholder-yellow-600:focus:-ms-input-placeholder {\n  color: #d69e2e\n}\n\n.focus\\:placeholder-yellow-600:focus::-ms-input-placeholder {\n  color: #d69e2e\n}\n\n.focus\\:placeholder-yellow-600:focus::placeholder {\n  color: #d69e2e\n}\n\n.focus\\:placeholder-yellow-700:focus:-ms-input-placeholder {\n  color: #b7791f\n}\n\n.focus\\:placeholder-yellow-700:focus::-ms-input-placeholder {\n  color: #b7791f\n}\n\n.focus\\:placeholder-yellow-700:focus::placeholder {\n  color: #b7791f\n}\n\n.focus\\:placeholder-yellow-800:focus:-ms-input-placeholder {\n  color: #975a16\n}\n\n.focus\\:placeholder-yellow-800:focus::-ms-input-placeholder {\n  color: #975a16\n}\n\n.focus\\:placeholder-yellow-800:focus::placeholder {\n  color: #975a16\n}\n\n.focus\\:placeholder-yellow-900:focus:-ms-input-placeholder {\n  color: #744210\n}\n\n.focus\\:placeholder-yellow-900:focus::-ms-input-placeholder {\n  color: #744210\n}\n\n.focus\\:placeholder-yellow-900:focus::placeholder {\n  color: #744210\n}\n\n.focus\\:placeholder-green-100:focus:-ms-input-placeholder {\n  color: #f0fff4\n}\n\n.focus\\:placeholder-green-100:focus::-ms-input-placeholder {\n  color: #f0fff4\n}\n\n.focus\\:placeholder-green-100:focus::placeholder {\n  color: #f0fff4\n}\n\n.focus\\:placeholder-green-200:focus:-ms-input-placeholder {\n  color: #c6f6d5\n}\n\n.focus\\:placeholder-green-200:focus::-ms-input-placeholder {\n  color: #c6f6d5\n}\n\n.focus\\:placeholder-green-200:focus::placeholder {\n  color: #c6f6d5\n}\n\n.focus\\:placeholder-green-300:focus:-ms-input-placeholder {\n  color: #9ae6b4\n}\n\n.focus\\:placeholder-green-300:focus::-ms-input-placeholder {\n  color: #9ae6b4\n}\n\n.focus\\:placeholder-green-300:focus::placeholder {\n  color: #9ae6b4\n}\n\n.focus\\:placeholder-green-400:focus:-ms-input-placeholder {\n  color: #68d391\n}\n\n.focus\\:placeholder-green-400:focus::-ms-input-placeholder {\n  color: #68d391\n}\n\n.focus\\:placeholder-green-400:focus::placeholder {\n  color: #68d391\n}\n\n.focus\\:placeholder-green-500:focus:-ms-input-placeholder {\n  color: #48bb78\n}\n\n.focus\\:placeholder-green-500:focus::-ms-input-placeholder {\n  color: #48bb78\n}\n\n.focus\\:placeholder-green-500:focus::placeholder {\n  color: #48bb78\n}\n\n.focus\\:placeholder-green-600:focus:-ms-input-placeholder {\n  color: #38a169\n}\n\n.focus\\:placeholder-green-600:focus::-ms-input-placeholder {\n  color: #38a169\n}\n\n.focus\\:placeholder-green-600:focus::placeholder {\n  color: #38a169\n}\n\n.focus\\:placeholder-green-700:focus:-ms-input-placeholder {\n  color: #2f855a\n}\n\n.focus\\:placeholder-green-700:focus::-ms-input-placeholder {\n  color: #2f855a\n}\n\n.focus\\:placeholder-green-700:focus::placeholder {\n  color: #2f855a\n}\n\n.focus\\:placeholder-green-800:focus:-ms-input-placeholder {\n  color: #276749\n}\n\n.focus\\:placeholder-green-800:focus::-ms-input-placeholder {\n  color: #276749\n}\n\n.focus\\:placeholder-green-800:focus::placeholder {\n  color: #276749\n}\n\n.focus\\:placeholder-green-900:focus:-ms-input-placeholder {\n  color: #22543d\n}\n\n.focus\\:placeholder-green-900:focus::-ms-input-placeholder {\n  color: #22543d\n}\n\n.focus\\:placeholder-green-900:focus::placeholder {\n  color: #22543d\n}\n\n.focus\\:placeholder-teal-100:focus:-ms-input-placeholder {\n  color: #e6fffa\n}\n\n.focus\\:placeholder-teal-100:focus::-ms-input-placeholder {\n  color: #e6fffa\n}\n\n.focus\\:placeholder-teal-100:focus::placeholder {\n  color: #e6fffa\n}\n\n.focus\\:placeholder-teal-200:focus:-ms-input-placeholder {\n  color: #b2f5ea\n}\n\n.focus\\:placeholder-teal-200:focus::-ms-input-placeholder {\n  color: #b2f5ea\n}\n\n.focus\\:placeholder-teal-200:focus::placeholder {\n  color: #b2f5ea\n}\n\n.focus\\:placeholder-teal-300:focus:-ms-input-placeholder {\n  color: #81e6d9\n}\n\n.focus\\:placeholder-teal-300:focus::-ms-input-placeholder {\n  color: #81e6d9\n}\n\n.focus\\:placeholder-teal-300:focus::placeholder {\n  color: #81e6d9\n}\n\n.focus\\:placeholder-teal-400:focus:-ms-input-placeholder {\n  color: #4fd1c5\n}\n\n.focus\\:placeholder-teal-400:focus::-ms-input-placeholder {\n  color: #4fd1c5\n}\n\n.focus\\:placeholder-teal-400:focus::placeholder {\n  color: #4fd1c5\n}\n\n.focus\\:placeholder-teal-500:focus:-ms-input-placeholder {\n  color: #38b2ac\n}\n\n.focus\\:placeholder-teal-500:focus::-ms-input-placeholder {\n  color: #38b2ac\n}\n\n.focus\\:placeholder-teal-500:focus::placeholder {\n  color: #38b2ac\n}\n\n.focus\\:placeholder-teal-600:focus:-ms-input-placeholder {\n  color: #319795\n}\n\n.focus\\:placeholder-teal-600:focus::-ms-input-placeholder {\n  color: #319795\n}\n\n.focus\\:placeholder-teal-600:focus::placeholder {\n  color: #319795\n}\n\n.focus\\:placeholder-teal-700:focus:-ms-input-placeholder {\n  color: #2c7a7b\n}\n\n.focus\\:placeholder-teal-700:focus::-ms-input-placeholder {\n  color: #2c7a7b\n}\n\n.focus\\:placeholder-teal-700:focus::placeholder {\n  color: #2c7a7b\n}\n\n.focus\\:placeholder-teal-800:focus:-ms-input-placeholder {\n  color: #285e61\n}\n\n.focus\\:placeholder-teal-800:focus::-ms-input-placeholder {\n  color: #285e61\n}\n\n.focus\\:placeholder-teal-800:focus::placeholder {\n  color: #285e61\n}\n\n.focus\\:placeholder-teal-900:focus:-ms-input-placeholder {\n  color: #234e52\n}\n\n.focus\\:placeholder-teal-900:focus::-ms-input-placeholder {\n  color: #234e52\n}\n\n.focus\\:placeholder-teal-900:focus::placeholder {\n  color: #234e52\n}\n\n.focus\\:placeholder-blue-100:focus:-ms-input-placeholder {\n  color: #ebf8ff\n}\n\n.focus\\:placeholder-blue-100:focus::-ms-input-placeholder {\n  color: #ebf8ff\n}\n\n.focus\\:placeholder-blue-100:focus::placeholder {\n  color: #ebf8ff\n}\n\n.focus\\:placeholder-blue-200:focus:-ms-input-placeholder {\n  color: #bee3f8\n}\n\n.focus\\:placeholder-blue-200:focus::-ms-input-placeholder {\n  color: #bee3f8\n}\n\n.focus\\:placeholder-blue-200:focus::placeholder {\n  color: #bee3f8\n}\n\n.focus\\:placeholder-blue-300:focus:-ms-input-placeholder {\n  color: #90cdf4\n}\n\n.focus\\:placeholder-blue-300:focus::-ms-input-placeholder {\n  color: #90cdf4\n}\n\n.focus\\:placeholder-blue-300:focus::placeholder {\n  color: #90cdf4\n}\n\n.focus\\:placeholder-blue-400:focus:-ms-input-placeholder {\n  color: #63b3ed\n}\n\n.focus\\:placeholder-blue-400:focus::-ms-input-placeholder {\n  color: #63b3ed\n}\n\n.focus\\:placeholder-blue-400:focus::placeholder {\n  color: #63b3ed\n}\n\n.focus\\:placeholder-blue-500:focus:-ms-input-placeholder {\n  color: #4299e1\n}\n\n.focus\\:placeholder-blue-500:focus::-ms-input-placeholder {\n  color: #4299e1\n}\n\n.focus\\:placeholder-blue-500:focus::placeholder {\n  color: #4299e1\n}\n\n.focus\\:placeholder-blue-600:focus:-ms-input-placeholder {\n  color: #3182ce\n}\n\n.focus\\:placeholder-blue-600:focus::-ms-input-placeholder {\n  color: #3182ce\n}\n\n.focus\\:placeholder-blue-600:focus::placeholder {\n  color: #3182ce\n}\n\n.focus\\:placeholder-blue-700:focus:-ms-input-placeholder {\n  color: #2b6cb0\n}\n\n.focus\\:placeholder-blue-700:focus::-ms-input-placeholder {\n  color: #2b6cb0\n}\n\n.focus\\:placeholder-blue-700:focus::placeholder {\n  color: #2b6cb0\n}\n\n.focus\\:placeholder-blue-800:focus:-ms-input-placeholder {\n  color: #2c5282\n}\n\n.focus\\:placeholder-blue-800:focus::-ms-input-placeholder {\n  color: #2c5282\n}\n\n.focus\\:placeholder-blue-800:focus::placeholder {\n  color: #2c5282\n}\n\n.focus\\:placeholder-blue-900:focus:-ms-input-placeholder {\n  color: #2a4365\n}\n\n.focus\\:placeholder-blue-900:focus::-ms-input-placeholder {\n  color: #2a4365\n}\n\n.focus\\:placeholder-blue-900:focus::placeholder {\n  color: #2a4365\n}\n\n.focus\\:placeholder-indigo-100:focus:-ms-input-placeholder {\n  color: #ebf4ff\n}\n\n.focus\\:placeholder-indigo-100:focus::-ms-input-placeholder {\n  color: #ebf4ff\n}\n\n.focus\\:placeholder-indigo-100:focus::placeholder {\n  color: #ebf4ff\n}\n\n.focus\\:placeholder-indigo-200:focus:-ms-input-placeholder {\n  color: #c3dafe\n}\n\n.focus\\:placeholder-indigo-200:focus::-ms-input-placeholder {\n  color: #c3dafe\n}\n\n.focus\\:placeholder-indigo-200:focus::placeholder {\n  color: #c3dafe\n}\n\n.focus\\:placeholder-indigo-300:focus:-ms-input-placeholder {\n  color: #a3bffa\n}\n\n.focus\\:placeholder-indigo-300:focus::-ms-input-placeholder {\n  color: #a3bffa\n}\n\n.focus\\:placeholder-indigo-300:focus::placeholder {\n  color: #a3bffa\n}\n\n.focus\\:placeholder-indigo-400:focus:-ms-input-placeholder {\n  color: #7f9cf5\n}\n\n.focus\\:placeholder-indigo-400:focus::-ms-input-placeholder {\n  color: #7f9cf5\n}\n\n.focus\\:placeholder-indigo-400:focus::placeholder {\n  color: #7f9cf5\n}\n\n.focus\\:placeholder-indigo-500:focus:-ms-input-placeholder {\n  color: #667eea\n}\n\n.focus\\:placeholder-indigo-500:focus::-ms-input-placeholder {\n  color: #667eea\n}\n\n.focus\\:placeholder-indigo-500:focus::placeholder {\n  color: #667eea\n}\n\n.focus\\:placeholder-indigo-600:focus:-ms-input-placeholder {\n  color: #5a67d8\n}\n\n.focus\\:placeholder-indigo-600:focus::-ms-input-placeholder {\n  color: #5a67d8\n}\n\n.focus\\:placeholder-indigo-600:focus::placeholder {\n  color: #5a67d8\n}\n\n.focus\\:placeholder-indigo-700:focus:-ms-input-placeholder {\n  color: #4c51bf\n}\n\n.focus\\:placeholder-indigo-700:focus::-ms-input-placeholder {\n  color: #4c51bf\n}\n\n.focus\\:placeholder-indigo-700:focus::placeholder {\n  color: #4c51bf\n}\n\n.focus\\:placeholder-indigo-800:focus:-ms-input-placeholder {\n  color: #434190\n}\n\n.focus\\:placeholder-indigo-800:focus::-ms-input-placeholder {\n  color: #434190\n}\n\n.focus\\:placeholder-indigo-800:focus::placeholder {\n  color: #434190\n}\n\n.focus\\:placeholder-indigo-900:focus:-ms-input-placeholder {\n  color: #3c366b\n}\n\n.focus\\:placeholder-indigo-900:focus::-ms-input-placeholder {\n  color: #3c366b\n}\n\n.focus\\:placeholder-indigo-900:focus::placeholder {\n  color: #3c366b\n}\n\n.focus\\:placeholder-purple-100:focus:-ms-input-placeholder {\n  color: #faf5ff\n}\n\n.focus\\:placeholder-purple-100:focus::-ms-input-placeholder {\n  color: #faf5ff\n}\n\n.focus\\:placeholder-purple-100:focus::placeholder {\n  color: #faf5ff\n}\n\n.focus\\:placeholder-purple-200:focus:-ms-input-placeholder {\n  color: #e9d8fd\n}\n\n.focus\\:placeholder-purple-200:focus::-ms-input-placeholder {\n  color: #e9d8fd\n}\n\n.focus\\:placeholder-purple-200:focus::placeholder {\n  color: #e9d8fd\n}\n\n.focus\\:placeholder-purple-300:focus:-ms-input-placeholder {\n  color: #d6bcfa\n}\n\n.focus\\:placeholder-purple-300:focus::-ms-input-placeholder {\n  color: #d6bcfa\n}\n\n.focus\\:placeholder-purple-300:focus::placeholder {\n  color: #d6bcfa\n}\n\n.focus\\:placeholder-purple-400:focus:-ms-input-placeholder {\n  color: #b794f4\n}\n\n.focus\\:placeholder-purple-400:focus::-ms-input-placeholder {\n  color: #b794f4\n}\n\n.focus\\:placeholder-purple-400:focus::placeholder {\n  color: #b794f4\n}\n\n.focus\\:placeholder-purple-500:focus:-ms-input-placeholder {\n  color: #9f7aea\n}\n\n.focus\\:placeholder-purple-500:focus::-ms-input-placeholder {\n  color: #9f7aea\n}\n\n.focus\\:placeholder-purple-500:focus::placeholder {\n  color: #9f7aea\n}\n\n.focus\\:placeholder-purple-600:focus:-ms-input-placeholder {\n  color: #805ad5\n}\n\n.focus\\:placeholder-purple-600:focus::-ms-input-placeholder {\n  color: #805ad5\n}\n\n.focus\\:placeholder-purple-600:focus::placeholder {\n  color: #805ad5\n}\n\n.focus\\:placeholder-purple-700:focus:-ms-input-placeholder {\n  color: #6b46c1\n}\n\n.focus\\:placeholder-purple-700:focus::-ms-input-placeholder {\n  color: #6b46c1\n}\n\n.focus\\:placeholder-purple-700:focus::placeholder {\n  color: #6b46c1\n}\n\n.focus\\:placeholder-purple-800:focus:-ms-input-placeholder {\n  color: #553c9a\n}\n\n.focus\\:placeholder-purple-800:focus::-ms-input-placeholder {\n  color: #553c9a\n}\n\n.focus\\:placeholder-purple-800:focus::placeholder {\n  color: #553c9a\n}\n\n.focus\\:placeholder-purple-900:focus:-ms-input-placeholder {\n  color: #44337a\n}\n\n.focus\\:placeholder-purple-900:focus::-ms-input-placeholder {\n  color: #44337a\n}\n\n.focus\\:placeholder-purple-900:focus::placeholder {\n  color: #44337a\n}\n\n.focus\\:placeholder-pink-100:focus:-ms-input-placeholder {\n  color: #fff5f7\n}\n\n.focus\\:placeholder-pink-100:focus::-ms-input-placeholder {\n  color: #fff5f7\n}\n\n.focus\\:placeholder-pink-100:focus::placeholder {\n  color: #fff5f7\n}\n\n.focus\\:placeholder-pink-200:focus:-ms-input-placeholder {\n  color: #fed7e2\n}\n\n.focus\\:placeholder-pink-200:focus::-ms-input-placeholder {\n  color: #fed7e2\n}\n\n.focus\\:placeholder-pink-200:focus::placeholder {\n  color: #fed7e2\n}\n\n.focus\\:placeholder-pink-300:focus:-ms-input-placeholder {\n  color: #fbb6ce\n}\n\n.focus\\:placeholder-pink-300:focus::-ms-input-placeholder {\n  color: #fbb6ce\n}\n\n.focus\\:placeholder-pink-300:focus::placeholder {\n  color: #fbb6ce\n}\n\n.focus\\:placeholder-pink-400:focus:-ms-input-placeholder {\n  color: #f687b3\n}\n\n.focus\\:placeholder-pink-400:focus::-ms-input-placeholder {\n  color: #f687b3\n}\n\n.focus\\:placeholder-pink-400:focus::placeholder {\n  color: #f687b3\n}\n\n.focus\\:placeholder-pink-500:focus:-ms-input-placeholder {\n  color: #ed64a6\n}\n\n.focus\\:placeholder-pink-500:focus::-ms-input-placeholder {\n  color: #ed64a6\n}\n\n.focus\\:placeholder-pink-500:focus::placeholder {\n  color: #ed64a6\n}\n\n.focus\\:placeholder-pink-600:focus:-ms-input-placeholder {\n  color: #d53f8c\n}\n\n.focus\\:placeholder-pink-600:focus::-ms-input-placeholder {\n  color: #d53f8c\n}\n\n.focus\\:placeholder-pink-600:focus::placeholder {\n  color: #d53f8c\n}\n\n.focus\\:placeholder-pink-700:focus:-ms-input-placeholder {\n  color: #b83280\n}\n\n.focus\\:placeholder-pink-700:focus::-ms-input-placeholder {\n  color: #b83280\n}\n\n.focus\\:placeholder-pink-700:focus::placeholder {\n  color: #b83280\n}\n\n.focus\\:placeholder-pink-800:focus:-ms-input-placeholder {\n  color: #97266d\n}\n\n.focus\\:placeholder-pink-800:focus::-ms-input-placeholder {\n  color: #97266d\n}\n\n.focus\\:placeholder-pink-800:focus::placeholder {\n  color: #97266d\n}\n\n.focus\\:placeholder-pink-900:focus:-ms-input-placeholder {\n  color: #702459\n}\n\n.focus\\:placeholder-pink-900:focus::-ms-input-placeholder {\n  color: #702459\n}\n\n.focus\\:placeholder-pink-900:focus::placeholder {\n  color: #702459\n}\n\n.pointer-events-none {\n  pointer-events: none\n}\n\n.pointer-events-auto {\n  pointer-events: auto\n}\n\n.static {\n  position: static\n}\n\n.fixed {\n  position: fixed\n}\n\n.absolute {\n  position: absolute\n}\n\n.relative {\n  position: relative\n}\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky\n}\n\n.inset-0 {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0\n}\n\n.inset-auto {\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto\n}\n\n.inset-y-0 {\n  top: 0;\n  bottom: 0\n}\n\n.inset-x-0 {\n  right: 0;\n  left: 0\n}\n\n.inset-y-auto {\n  top: auto;\n  bottom: auto\n}\n\n.inset-x-auto {\n  right: auto;\n  left: auto\n}\n\n.top-0 {\n  top: 0\n}\n\n.right-0 {\n  right: 0\n}\n\n.bottom-0 {\n  bottom: 0\n}\n\n.left-0 {\n  left: 0\n}\n\n.top-auto {\n  top: auto\n}\n\n.right-auto {\n  right: auto\n}\n\n.bottom-auto {\n  bottom: auto\n}\n\n.left-auto {\n  left: auto\n}\n\n.resize-none {\n  resize: none\n}\n\n.resize-y {\n  resize: vertical\n}\n\n.resize-x {\n  resize: horizontal\n}\n\n.resize {\n  resize: both\n}\n\n.shadow {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n}\n\n.shadow-md {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n}\n\n.shadow-lg {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n}\n\n.shadow-xl {\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n}\n\n.shadow-2xl {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n}\n\n.shadow-inner {\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n}\n\n.shadow-outline {\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n}\n\n.shadow-none {\n  box-shadow: none\n}\n\n.hover\\:shadow:hover {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n}\n\n.hover\\:shadow-md:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n}\n\n.hover\\:shadow-lg:hover {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n}\n\n.hover\\:shadow-xl:hover {\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n}\n\n.hover\\:shadow-2xl:hover {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n}\n\n.hover\\:shadow-inner:hover {\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n}\n\n.hover\\:shadow-outline:hover {\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n}\n\n.hover\\:shadow-none:hover {\n  box-shadow: none\n}\n\n.focus\\:shadow:focus {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n}\n\n.focus\\:shadow-md:focus {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n}\n\n.focus\\:shadow-lg:focus {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n}\n\n.focus\\:shadow-xl:focus {\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n}\n\n.focus\\:shadow-2xl:focus {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n}\n\n.focus\\:shadow-inner:focus {\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n}\n\n.focus\\:shadow-outline:focus {\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n}\n\n.focus\\:shadow-none:focus {\n  box-shadow: none\n}\n\n.fill-current {\n  fill: currentColor\n}\n\n.stroke-current {\n  stroke: currentColor\n}\n\n.table-auto {\n  table-layout: auto\n}\n\n.table-fixed {\n  table-layout: fixed\n}\n\n.text-left {\n  text-align: left\n}\n\n.text-center {\n  text-align: center\n}\n\n.text-right {\n  text-align: right\n}\n\n.text-justify {\n  text-align: justify\n}\n\n.text-transparent {\n  color: transparent\n}\n\n.text-black {\n  color: #000\n}\n\n.text-white {\n  color: #fff\n}\n\n.text-gray-100 {\n  color: #f7fafc\n}\n\n.text-gray-200 {\n  color: #edf2f7\n}\n\n.text-gray-300 {\n  color: #e2e8f0\n}\n\n.text-gray-400 {\n  color: #cbd5e0\n}\n\n.text-gray-500 {\n  color: #a0aec0\n}\n\n.text-gray-600 {\n  color: #718096\n}\n\n.text-gray-700 {\n  color: #4a5568\n}\n\n.text-gray-800 {\n  color: #2d3748\n}\n\n.text-gray-900 {\n  color: #1a202c\n}\n\n.text-red-100 {\n  color: #fff5f5\n}\n\n.text-red-200 {\n  color: #fed7d7\n}\n\n.text-red-300 {\n  color: #feb2b2\n}\n\n.text-red-400 {\n  color: #fc8181\n}\n\n.text-red-500 {\n  color: #f56565\n}\n\n.text-red-600 {\n  color: #e53e3e\n}\n\n.text-red-700 {\n  color: #c53030\n}\n\n.text-red-800 {\n  color: #9b2c2c\n}\n\n.text-red-900 {\n  color: #742a2a\n}\n\n.text-orange-100 {\n  color: #fffaf0\n}\n\n.text-orange-200 {\n  color: #feebc8\n}\n\n.text-orange-300 {\n  color: #fbd38d\n}\n\n.text-orange-400 {\n  color: #f6ad55\n}\n\n.text-orange-500 {\n  color: #ed8936\n}\n\n.text-orange-600 {\n  color: #dd6b20\n}\n\n.text-orange-700 {\n  color: #c05621\n}\n\n.text-orange-800 {\n  color: #9c4221\n}\n\n.text-orange-900 {\n  color: #7b341e\n}\n\n.text-yellow-100 {\n  color: #fffff0\n}\n\n.text-yellow-200 {\n  color: #fefcbf\n}\n\n.text-yellow-300 {\n  color: #faf089\n}\n\n.text-yellow-400 {\n  color: #f6e05e\n}\n\n.text-yellow-500 {\n  color: #ecc94b\n}\n\n.text-yellow-600 {\n  color: #d69e2e\n}\n\n.text-yellow-700 {\n  color: #b7791f\n}\n\n.text-yellow-800 {\n  color: #975a16\n}\n\n.text-yellow-900 {\n  color: #744210\n}\n\n.text-green-100 {\n  color: #f0fff4\n}\n\n.text-green-200 {\n  color: #c6f6d5\n}\n\n.text-green-300 {\n  color: #9ae6b4\n}\n\n.text-green-400 {\n  color: #68d391\n}\n\n.text-green-500 {\n  color: #48bb78\n}\n\n.text-green-600 {\n  color: #38a169\n}\n\n.text-green-700 {\n  color: #2f855a\n}\n\n.text-green-800 {\n  color: #276749\n}\n\n.text-green-900 {\n  color: #22543d\n}\n\n.text-teal-100 {\n  color: #e6fffa\n}\n\n.text-teal-200 {\n  color: #b2f5ea\n}\n\n.text-teal-300 {\n  color: #81e6d9\n}\n\n.text-teal-400 {\n  color: #4fd1c5\n}\n\n.text-teal-500 {\n  color: #38b2ac\n}\n\n.text-teal-600 {\n  color: #319795\n}\n\n.text-teal-700 {\n  color: #2c7a7b\n}\n\n.text-teal-800 {\n  color: #285e61\n}\n\n.text-teal-900 {\n  color: #234e52\n}\n\n.text-blue-100 {\n  color: #ebf8ff\n}\n\n.text-blue-200 {\n  color: #bee3f8\n}\n\n.text-blue-300 {\n  color: #90cdf4\n}\n\n.text-blue-400 {\n  color: #63b3ed\n}\n\n.text-blue-500 {\n  color: #4299e1\n}\n\n.text-blue-600 {\n  color: #3182ce\n}\n\n.text-blue-700 {\n  color: #2b6cb0\n}\n\n.text-blue-800 {\n  color: #2c5282\n}\n\n.text-blue-900 {\n  color: #2a4365\n}\n\n.text-indigo-100 {\n  color: #ebf4ff\n}\n\n.text-indigo-200 {\n  color: #c3dafe\n}\n\n.text-indigo-300 {\n  color: #a3bffa\n}\n\n.text-indigo-400 {\n  color: #7f9cf5\n}\n\n.text-indigo-500 {\n  color: #667eea\n}\n\n.text-indigo-600 {\n  color: #5a67d8\n}\n\n.text-indigo-700 {\n  color: #4c51bf\n}\n\n.text-indigo-800 {\n  color: #434190\n}\n\n.text-indigo-900 {\n  color: #3c366b\n}\n\n.text-purple-100 {\n  color: #faf5ff\n}\n\n.text-purple-200 {\n  color: #e9d8fd\n}\n\n.text-purple-300 {\n  color: #d6bcfa\n}\n\n.text-purple-400 {\n  color: #b794f4\n}\n\n.text-purple-500 {\n  color: #9f7aea\n}\n\n.text-purple-600 {\n  color: #805ad5\n}\n\n.text-purple-700 {\n  color: #6b46c1\n}\n\n.text-purple-800 {\n  color: #553c9a\n}\n\n.text-purple-900 {\n  color: #44337a\n}\n\n.text-pink-100 {\n  color: #fff5f7\n}\n\n.text-pink-200 {\n  color: #fed7e2\n}\n\n.text-pink-300 {\n  color: #fbb6ce\n}\n\n.text-pink-400 {\n  color: #f687b3\n}\n\n.text-pink-500 {\n  color: #ed64a6\n}\n\n.text-pink-600 {\n  color: #d53f8c\n}\n\n.text-pink-700 {\n  color: #b83280\n}\n\n.text-pink-800 {\n  color: #97266d\n}\n\n.text-pink-900 {\n  color: #702459\n}\n\n.hover\\:text-transparent:hover {\n  color: transparent\n}\n\n.hover\\:text-black:hover {\n  color: #000\n}\n\n.hover\\:text-white:hover {\n  color: #fff\n}\n\n.hover\\:text-gray-100:hover {\n  color: #f7fafc\n}\n\n.hover\\:text-gray-200:hover {\n  color: #edf2f7\n}\n\n.hover\\:text-gray-300:hover {\n  color: #e2e8f0\n}\n\n.hover\\:text-gray-400:hover {\n  color: #cbd5e0\n}\n\n.hover\\:text-gray-500:hover {\n  color: #a0aec0\n}\n\n.hover\\:text-gray-600:hover {\n  color: #718096\n}\n\n.hover\\:text-gray-700:hover {\n  color: #4a5568\n}\n\n.hover\\:text-gray-800:hover {\n  color: #2d3748\n}\n\n.hover\\:text-gray-900:hover {\n  color: #1a202c\n}\n\n.hover\\:text-red-100:hover {\n  color: #fff5f5\n}\n\n.hover\\:text-red-200:hover {\n  color: #fed7d7\n}\n\n.hover\\:text-red-300:hover {\n  color: #feb2b2\n}\n\n.hover\\:text-red-400:hover {\n  color: #fc8181\n}\n\n.hover\\:text-red-500:hover {\n  color: #f56565\n}\n\n.hover\\:text-red-600:hover {\n  color: #e53e3e\n}\n\n.hover\\:text-red-700:hover {\n  color: #c53030\n}\n\n.hover\\:text-red-800:hover {\n  color: #9b2c2c\n}\n\n.hover\\:text-red-900:hover {\n  color: #742a2a\n}\n\n.hover\\:text-orange-100:hover {\n  color: #fffaf0\n}\n\n.hover\\:text-orange-200:hover {\n  color: #feebc8\n}\n\n.hover\\:text-orange-300:hover {\n  color: #fbd38d\n}\n\n.hover\\:text-orange-400:hover {\n  color: #f6ad55\n}\n\n.hover\\:text-orange-500:hover {\n  color: #ed8936\n}\n\n.hover\\:text-orange-600:hover {\n  color: #dd6b20\n}\n\n.hover\\:text-orange-700:hover {\n  color: #c05621\n}\n\n.hover\\:text-orange-800:hover {\n  color: #9c4221\n}\n\n.hover\\:text-orange-900:hover {\n  color: #7b341e\n}\n\n.hover\\:text-yellow-100:hover {\n  color: #fffff0\n}\n\n.hover\\:text-yellow-200:hover {\n  color: #fefcbf\n}\n\n.hover\\:text-yellow-300:hover {\n  color: #faf089\n}\n\n.hover\\:text-yellow-400:hover {\n  color: #f6e05e\n}\n\n.hover\\:text-yellow-500:hover {\n  color: #ecc94b\n}\n\n.hover\\:text-yellow-600:hover {\n  color: #d69e2e\n}\n\n.hover\\:text-yellow-700:hover {\n  color: #b7791f\n}\n\n.hover\\:text-yellow-800:hover {\n  color: #975a16\n}\n\n.hover\\:text-yellow-900:hover {\n  color: #744210\n}\n\n.hover\\:text-green-100:hover {\n  color: #f0fff4\n}\n\n.hover\\:text-green-200:hover {\n  color: #c6f6d5\n}\n\n.hover\\:text-green-300:hover {\n  color: #9ae6b4\n}\n\n.hover\\:text-green-400:hover {\n  color: #68d391\n}\n\n.hover\\:text-green-500:hover {\n  color: #48bb78\n}\n\n.hover\\:text-green-600:hover {\n  color: #38a169\n}\n\n.hover\\:text-green-700:hover {\n  color: #2f855a\n}\n\n.hover\\:text-green-800:hover {\n  color: #276749\n}\n\n.hover\\:text-green-900:hover {\n  color: #22543d\n}\n\n.hover\\:text-teal-100:hover {\n  color: #e6fffa\n}\n\n.hover\\:text-teal-200:hover {\n  color: #b2f5ea\n}\n\n.hover\\:text-teal-300:hover {\n  color: #81e6d9\n}\n\n.hover\\:text-teal-400:hover {\n  color: #4fd1c5\n}\n\n.hover\\:text-teal-500:hover {\n  color: #38b2ac\n}\n\n.hover\\:text-teal-600:hover {\n  color: #319795\n}\n\n.hover\\:text-teal-700:hover {\n  color: #2c7a7b\n}\n\n.hover\\:text-teal-800:hover {\n  color: #285e61\n}\n\n.hover\\:text-teal-900:hover {\n  color: #234e52\n}\n\n.hover\\:text-blue-100:hover {\n  color: #ebf8ff\n}\n\n.hover\\:text-blue-200:hover {\n  color: #bee3f8\n}\n\n.hover\\:text-blue-300:hover {\n  color: #90cdf4\n}\n\n.hover\\:text-blue-400:hover {\n  color: #63b3ed\n}\n\n.hover\\:text-blue-500:hover {\n  color: #4299e1\n}\n\n.hover\\:text-blue-600:hover {\n  color: #3182ce\n}\n\n.hover\\:text-blue-700:hover {\n  color: #2b6cb0\n}\n\n.hover\\:text-blue-800:hover {\n  color: #2c5282\n}\n\n.hover\\:text-blue-900:hover {\n  color: #2a4365\n}\n\n.hover\\:text-indigo-100:hover {\n  color: #ebf4ff\n}\n\n.hover\\:text-indigo-200:hover {\n  color: #c3dafe\n}\n\n.hover\\:text-indigo-300:hover {\n  color: #a3bffa\n}\n\n.hover\\:text-indigo-400:hover {\n  color: #7f9cf5\n}\n\n.hover\\:text-indigo-500:hover {\n  color: #667eea\n}\n\n.hover\\:text-indigo-600:hover {\n  color: #5a67d8\n}\n\n.hover\\:text-indigo-700:hover {\n  color: #4c51bf\n}\n\n.hover\\:text-indigo-800:hover {\n  color: #434190\n}\n\n.hover\\:text-indigo-900:hover {\n  color: #3c366b\n}\n\n.hover\\:text-purple-100:hover {\n  color: #faf5ff\n}\n\n.hover\\:text-purple-200:hover {\n  color: #e9d8fd\n}\n\n.hover\\:text-purple-300:hover {\n  color: #d6bcfa\n}\n\n.hover\\:text-purple-400:hover {\n  color: #b794f4\n}\n\n.hover\\:text-purple-500:hover {\n  color: #9f7aea\n}\n\n.hover\\:text-purple-600:hover {\n  color: #805ad5\n}\n\n.hover\\:text-purple-700:hover {\n  color: #6b46c1\n}\n\n.hover\\:text-purple-800:hover {\n  color: #553c9a\n}\n\n.hover\\:text-purple-900:hover {\n  color: #44337a\n}\n\n.hover\\:text-pink-100:hover {\n  color: #fff5f7\n}\n\n.hover\\:text-pink-200:hover {\n  color: #fed7e2\n}\n\n.hover\\:text-pink-300:hover {\n  color: #fbb6ce\n}\n\n.hover\\:text-pink-400:hover {\n  color: #f687b3\n}\n\n.hover\\:text-pink-500:hover {\n  color: #ed64a6\n}\n\n.hover\\:text-pink-600:hover {\n  color: #d53f8c\n}\n\n.hover\\:text-pink-700:hover {\n  color: #b83280\n}\n\n.hover\\:text-pink-800:hover {\n  color: #97266d\n}\n\n.hover\\:text-pink-900:hover {\n  color: #702459\n}\n\n.focus\\:text-transparent:focus {\n  color: transparent\n}\n\n.focus\\:text-black:focus {\n  color: #000\n}\n\n.focus\\:text-white:focus {\n  color: #fff\n}\n\n.focus\\:text-gray-100:focus {\n  color: #f7fafc\n}\n\n.focus\\:text-gray-200:focus {\n  color: #edf2f7\n}\n\n.focus\\:text-gray-300:focus {\n  color: #e2e8f0\n}\n\n.focus\\:text-gray-400:focus {\n  color: #cbd5e0\n}\n\n.focus\\:text-gray-500:focus {\n  color: #a0aec0\n}\n\n.focus\\:text-gray-600:focus {\n  color: #718096\n}\n\n.focus\\:text-gray-700:focus {\n  color: #4a5568\n}\n\n.focus\\:text-gray-800:focus {\n  color: #2d3748\n}\n\n.focus\\:text-gray-900:focus {\n  color: #1a202c\n}\n\n.focus\\:text-red-100:focus {\n  color: #fff5f5\n}\n\n.focus\\:text-red-200:focus {\n  color: #fed7d7\n}\n\n.focus\\:text-red-300:focus {\n  color: #feb2b2\n}\n\n.focus\\:text-red-400:focus {\n  color: #fc8181\n}\n\n.focus\\:text-red-500:focus {\n  color: #f56565\n}\n\n.focus\\:text-red-600:focus {\n  color: #e53e3e\n}\n\n.focus\\:text-red-700:focus {\n  color: #c53030\n}\n\n.focus\\:text-red-800:focus {\n  color: #9b2c2c\n}\n\n.focus\\:text-red-900:focus {\n  color: #742a2a\n}\n\n.focus\\:text-orange-100:focus {\n  color: #fffaf0\n}\n\n.focus\\:text-orange-200:focus {\n  color: #feebc8\n}\n\n.focus\\:text-orange-300:focus {\n  color: #fbd38d\n}\n\n.focus\\:text-orange-400:focus {\n  color: #f6ad55\n}\n\n.focus\\:text-orange-500:focus {\n  color: #ed8936\n}\n\n.focus\\:text-orange-600:focus {\n  color: #dd6b20\n}\n\n.focus\\:text-orange-700:focus {\n  color: #c05621\n}\n\n.focus\\:text-orange-800:focus {\n  color: #9c4221\n}\n\n.focus\\:text-orange-900:focus {\n  color: #7b341e\n}\n\n.focus\\:text-yellow-100:focus {\n  color: #fffff0\n}\n\n.focus\\:text-yellow-200:focus {\n  color: #fefcbf\n}\n\n.focus\\:text-yellow-300:focus {\n  color: #faf089\n}\n\n.focus\\:text-yellow-400:focus {\n  color: #f6e05e\n}\n\n.focus\\:text-yellow-500:focus {\n  color: #ecc94b\n}\n\n.focus\\:text-yellow-600:focus {\n  color: #d69e2e\n}\n\n.focus\\:text-yellow-700:focus {\n  color: #b7791f\n}\n\n.focus\\:text-yellow-800:focus {\n  color: #975a16\n}\n\n.focus\\:text-yellow-900:focus {\n  color: #744210\n}\n\n.focus\\:text-green-100:focus {\n  color: #f0fff4\n}\n\n.focus\\:text-green-200:focus {\n  color: #c6f6d5\n}\n\n.focus\\:text-green-300:focus {\n  color: #9ae6b4\n}\n\n.focus\\:text-green-400:focus {\n  color: #68d391\n}\n\n.focus\\:text-green-500:focus {\n  color: #48bb78\n}\n\n.focus\\:text-green-600:focus {\n  color: #38a169\n}\n\n.focus\\:text-green-700:focus {\n  color: #2f855a\n}\n\n.focus\\:text-green-800:focus {\n  color: #276749\n}\n\n.focus\\:text-green-900:focus {\n  color: #22543d\n}\n\n.focus\\:text-teal-100:focus {\n  color: #e6fffa\n}\n\n.focus\\:text-teal-200:focus {\n  color: #b2f5ea\n}\n\n.focus\\:text-teal-300:focus {\n  color: #81e6d9\n}\n\n.focus\\:text-teal-400:focus {\n  color: #4fd1c5\n}\n\n.focus\\:text-teal-500:focus {\n  color: #38b2ac\n}\n\n.focus\\:text-teal-600:focus {\n  color: #319795\n}\n\n.focus\\:text-teal-700:focus {\n  color: #2c7a7b\n}\n\n.focus\\:text-teal-800:focus {\n  color: #285e61\n}\n\n.focus\\:text-teal-900:focus {\n  color: #234e52\n}\n\n.focus\\:text-blue-100:focus {\n  color: #ebf8ff\n}\n\n.focus\\:text-blue-200:focus {\n  color: #bee3f8\n}\n\n.focus\\:text-blue-300:focus {\n  color: #90cdf4\n}\n\n.focus\\:text-blue-400:focus {\n  color: #63b3ed\n}\n\n.focus\\:text-blue-500:focus {\n  color: #4299e1\n}\n\n.focus\\:text-blue-600:focus {\n  color: #3182ce\n}\n\n.focus\\:text-blue-700:focus {\n  color: #2b6cb0\n}\n\n.focus\\:text-blue-800:focus {\n  color: #2c5282\n}\n\n.focus\\:text-blue-900:focus {\n  color: #2a4365\n}\n\n.focus\\:text-indigo-100:focus {\n  color: #ebf4ff\n}\n\n.focus\\:text-indigo-200:focus {\n  color: #c3dafe\n}\n\n.focus\\:text-indigo-300:focus {\n  color: #a3bffa\n}\n\n.focus\\:text-indigo-400:focus {\n  color: #7f9cf5\n}\n\n.focus\\:text-indigo-500:focus {\n  color: #667eea\n}\n\n.focus\\:text-indigo-600:focus {\n  color: #5a67d8\n}\n\n.focus\\:text-indigo-700:focus {\n  color: #4c51bf\n}\n\n.focus\\:text-indigo-800:focus {\n  color: #434190\n}\n\n.focus\\:text-indigo-900:focus {\n  color: #3c366b\n}\n\n.focus\\:text-purple-100:focus {\n  color: #faf5ff\n}\n\n.focus\\:text-purple-200:focus {\n  color: #e9d8fd\n}\n\n.focus\\:text-purple-300:focus {\n  color: #d6bcfa\n}\n\n.focus\\:text-purple-400:focus {\n  color: #b794f4\n}\n\n.focus\\:text-purple-500:focus {\n  color: #9f7aea\n}\n\n.focus\\:text-purple-600:focus {\n  color: #805ad5\n}\n\n.focus\\:text-purple-700:focus {\n  color: #6b46c1\n}\n\n.focus\\:text-purple-800:focus {\n  color: #553c9a\n}\n\n.focus\\:text-purple-900:focus {\n  color: #44337a\n}\n\n.focus\\:text-pink-100:focus {\n  color: #fff5f7\n}\n\n.focus\\:text-pink-200:focus {\n  color: #fed7e2\n}\n\n.focus\\:text-pink-300:focus {\n  color: #fbb6ce\n}\n\n.focus\\:text-pink-400:focus {\n  color: #f687b3\n}\n\n.focus\\:text-pink-500:focus {\n  color: #ed64a6\n}\n\n.focus\\:text-pink-600:focus {\n  color: #d53f8c\n}\n\n.focus\\:text-pink-700:focus {\n  color: #b83280\n}\n\n.focus\\:text-pink-800:focus {\n  color: #97266d\n}\n\n.focus\\:text-pink-900:focus {\n  color: #702459\n}\n\n.text-xs {\n  font-size: 0.75rem\n}\n\n.text-sm {\n  font-size: 0.875rem\n}\n\n.text-base {\n  font-size: 1rem\n}\n\n.text-lg {\n  font-size: 1.125rem\n}\n\n.text-xl {\n  font-size: 1.25rem\n}\n\n.text-2xl {\n  font-size: 1.5rem\n}\n\n.text-3xl {\n  font-size: 1.875rem\n}\n\n.text-4xl {\n  font-size: 2.25rem\n}\n\n.text-5xl {\n  font-size: 3rem\n}\n\n.text-6xl {\n  font-size: 4rem\n}\n\n.italic {\n  font-style: italic\n}\n\n.not-italic {\n  font-style: normal\n}\n\n.uppercase {\n  text-transform: uppercase\n}\n\n.lowercase {\n  text-transform: lowercase\n}\n\n.capitalize {\n  text-transform: capitalize\n}\n\n.normal-case {\n  text-transform: none\n}\n\n.underline {\n  text-decoration: underline\n}\n\n.line-through {\n  text-decoration: line-through\n}\n\n.no-underline {\n  text-decoration: none\n}\n\n.hover\\:underline:hover {\n  text-decoration: underline\n}\n\n.hover\\:line-through:hover {\n  text-decoration: line-through\n}\n\n.hover\\:no-underline:hover {\n  text-decoration: none\n}\n\n.focus\\:underline:focus {\n  text-decoration: underline\n}\n\n.focus\\:line-through:focus {\n  text-decoration: line-through\n}\n\n.focus\\:no-underline:focus {\n  text-decoration: none\n}\n\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale\n}\n\n.subpixel-antialiased {\n  -webkit-font-smoothing: auto;\n  -moz-osx-font-smoothing: auto\n}\n\n.tracking-tighter {\n  letter-spacing: -0.05em\n}\n\n.tracking-tight {\n  letter-spacing: -0.025em\n}\n\n.tracking-normal {\n  letter-spacing: 0\n}\n\n.tracking-wide {\n  letter-spacing: 0.025em\n}\n\n.tracking-wider {\n  letter-spacing: 0.05em\n}\n\n.tracking-widest {\n  letter-spacing: 0.1em\n}\n\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none\n}\n\n.select-text {\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text\n}\n\n.select-all {\n  -webkit-user-select: all;\n     -moz-user-select: all;\n      -ms-user-select: all;\n          user-select: all\n}\n\n.select-auto {\n  -webkit-user-select: auto;\n     -moz-user-select: auto;\n      -ms-user-select: auto;\n          user-select: auto\n}\n\n.align-baseline {\n  vertical-align: baseline\n}\n\n.align-top {\n  vertical-align: top\n}\n\n.align-middle {\n  vertical-align: middle\n}\n\n.align-bottom {\n  vertical-align: bottom\n}\n\n.align-text-top {\n  vertical-align: text-top\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom\n}\n\n.visible {\n  visibility: visible\n}\n\n.invisible {\n  visibility: hidden\n}\n\n.whitespace-normal {\n  white-space: normal\n}\n\n.whitespace-no-wrap {\n  white-space: nowrap\n}\n\n.whitespace-pre {\n  white-space: pre\n}\n\n.whitespace-pre-line {\n  white-space: pre-line\n}\n\n.whitespace-pre-wrap {\n  white-space: pre-wrap\n}\n\n.break-normal {\n  overflow-wrap: normal;\n  word-break: normal\n}\n\n.break-words {\n  overflow-wrap: break-word\n}\n\n.break-all {\n  word-break: break-all\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap\n}\n\n.w-0 {\n  width: 0\n}\n\n.w-1 {\n  width: 0.25rem\n}\n\n.w-2 {\n  width: 0.5rem\n}\n\n.w-3 {\n  width: 0.75rem\n}\n\n.w-4 {\n  width: 1rem\n}\n\n.w-5 {\n  width: 1.25rem\n}\n\n.w-6 {\n  width: 1.5rem\n}\n\n.w-8 {\n  width: 2rem\n}\n\n.w-10 {\n  width: 2.5rem\n}\n\n.w-12 {\n  width: 3rem\n}\n\n.w-16 {\n  width: 4rem\n}\n\n.w-20 {\n  width: 5rem\n}\n\n.w-24 {\n  width: 6rem\n}\n\n.w-32 {\n  width: 8rem\n}\n\n.w-40 {\n  width: 10rem\n}\n\n.w-48 {\n  width: 12rem\n}\n\n.w-56 {\n  width: 14rem\n}\n\n.w-64 {\n  width: 16rem\n}\n\n.w-auto {\n  width: auto\n}\n\n.w-px {\n  width: 1px\n}\n\n.w-1\\/2 {\n  width: 50%\n}\n\n.w-1\\/3 {\n  width: 33.333333%\n}\n\n.w-2\\/3 {\n  width: 66.666667%\n}\n\n.w-1\\/4 {\n  width: 25%\n}\n\n.w-2\\/4 {\n  width: 50%\n}\n\n.w-3\\/4 {\n  width: 75%\n}\n\n.w-1\\/5 {\n  width: 20%\n}\n\n.w-2\\/5 {\n  width: 40%\n}\n\n.w-3\\/5 {\n  width: 60%\n}\n\n.w-4\\/5 {\n  width: 80%\n}\n\n.w-1\\/6 {\n  width: 16.666667%\n}\n\n.w-2\\/6 {\n  width: 33.333333%\n}\n\n.w-3\\/6 {\n  width: 50%\n}\n\n.w-4\\/6 {\n  width: 66.666667%\n}\n\n.w-5\\/6 {\n  width: 83.333333%\n}\n\n.w-1\\/12 {\n  width: 8.333333%\n}\n\n.w-2\\/12 {\n  width: 16.666667%\n}\n\n.w-3\\/12 {\n  width: 25%\n}\n\n.w-4\\/12 {\n  width: 33.333333%\n}\n\n.w-5\\/12 {\n  width: 41.666667%\n}\n\n.w-6\\/12 {\n  width: 50%\n}\n\n.w-7\\/12 {\n  width: 58.333333%\n}\n\n.w-8\\/12 {\n  width: 66.666667%\n}\n\n.w-9\\/12 {\n  width: 75%\n}\n\n.w-10\\/12 {\n  width: 83.333333%\n}\n\n.w-11\\/12 {\n  width: 91.666667%\n}\n\n.w-full {\n  width: 100%\n}\n\n.w-screen {\n  width: 100vw\n}\n\n.z-0 {\n  z-index: 0\n}\n\n.z-10 {\n  z-index: 10\n}\n\n.z-20 {\n  z-index: 20\n}\n\n.z-30 {\n  z-index: 30\n}\n\n.z-40 {\n  z-index: 40\n}\n\n.z-50 {\n  z-index: 50\n}\n\n.z-auto {\n  z-index: auto\n}\n\n@media (min-width: 640px) {\n  .sm\\:sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0\n  }\n\n  .sm\\:not-sr-only {\n    position: static;\n    width: auto;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n    white-space: normal\n  }\n\n  .sm\\:focus\\:sr-only:focus {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0\n  }\n\n  .sm\\:focus\\:not-sr-only:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n    white-space: normal\n  }\n\n  .sm\\:appearance-none {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none\n  }\n\n  .sm\\:bg-fixed {\n    background-attachment: fixed\n  }\n\n  .sm\\:bg-local {\n    background-attachment: local\n  }\n\n  .sm\\:bg-scroll {\n    background-attachment: scroll\n  }\n\n  .sm\\:bg-transparent {\n    background-color: transparent\n  }\n\n  .sm\\:bg-black {\n    background-color: #000\n  }\n\n  .sm\\:bg-white {\n    background-color: #fff\n  }\n\n  .sm\\:bg-gray-100 {\n    background-color: #f7fafc\n  }\n\n  .sm\\:bg-gray-200 {\n    background-color: #edf2f7\n  }\n\n  .sm\\:bg-gray-300 {\n    background-color: #e2e8f0\n  }\n\n  .sm\\:bg-gray-400 {\n    background-color: #cbd5e0\n  }\n\n  .sm\\:bg-gray-500 {\n    background-color: #a0aec0\n  }\n\n  .sm\\:bg-gray-600 {\n    background-color: #718096\n  }\n\n  .sm\\:bg-gray-700 {\n    background-color: #4a5568\n  }\n\n  .sm\\:bg-gray-800 {\n    background-color: #2d3748\n  }\n\n  .sm\\:bg-gray-900 {\n    background-color: #1a202c\n  }\n\n  .sm\\:bg-red-100 {\n    background-color: #fff5f5\n  }\n\n  .sm\\:bg-red-200 {\n    background-color: #fed7d7\n  }\n\n  .sm\\:bg-red-300 {\n    background-color: #feb2b2\n  }\n\n  .sm\\:bg-red-400 {\n    background-color: #fc8181\n  }\n\n  .sm\\:bg-red-500 {\n    background-color: #f56565\n  }\n\n  .sm\\:bg-red-600 {\n    background-color: #e53e3e\n  }\n\n  .sm\\:bg-red-700 {\n    background-color: #c53030\n  }\n\n  .sm\\:bg-red-800 {\n    background-color: #9b2c2c\n  }\n\n  .sm\\:bg-red-900 {\n    background-color: #742a2a\n  }\n\n  .sm\\:bg-orange-100 {\n    background-color: #fffaf0\n  }\n\n  .sm\\:bg-orange-200 {\n    background-color: #feebc8\n  }\n\n  .sm\\:bg-orange-300 {\n    background-color: #fbd38d\n  }\n\n  .sm\\:bg-orange-400 {\n    background-color: #f6ad55\n  }\n\n  .sm\\:bg-orange-500 {\n    background-color: #ed8936\n  }\n\n  .sm\\:bg-orange-600 {\n    background-color: #dd6b20\n  }\n\n  .sm\\:bg-orange-700 {\n    background-color: #c05621\n  }\n\n  .sm\\:bg-orange-800 {\n    background-color: #9c4221\n  }\n\n  .sm\\:bg-orange-900 {\n    background-color: #7b341e\n  }\n\n  .sm\\:bg-yellow-100 {\n    background-color: #fffff0\n  }\n\n  .sm\\:bg-yellow-200 {\n    background-color: #fefcbf\n  }\n\n  .sm\\:bg-yellow-300 {\n    background-color: #faf089\n  }\n\n  .sm\\:bg-yellow-400 {\n    background-color: #f6e05e\n  }\n\n  .sm\\:bg-yellow-500 {\n    background-color: #ecc94b\n  }\n\n  .sm\\:bg-yellow-600 {\n    background-color: #d69e2e\n  }\n\n  .sm\\:bg-yellow-700 {\n    background-color: #b7791f\n  }\n\n  .sm\\:bg-yellow-800 {\n    background-color: #975a16\n  }\n\n  .sm\\:bg-yellow-900 {\n    background-color: #744210\n  }\n\n  .sm\\:bg-green-100 {\n    background-color: #f0fff4\n  }\n\n  .sm\\:bg-green-200 {\n    background-color: #c6f6d5\n  }\n\n  .sm\\:bg-green-300 {\n    background-color: #9ae6b4\n  }\n\n  .sm\\:bg-green-400 {\n    background-color: #68d391\n  }\n\n  .sm\\:bg-green-500 {\n    background-color: #48bb78\n  }\n\n  .sm\\:bg-green-600 {\n    background-color: #38a169\n  }\n\n  .sm\\:bg-green-700 {\n    background-color: #2f855a\n  }\n\n  .sm\\:bg-green-800 {\n    background-color: #276749\n  }\n\n  .sm\\:bg-green-900 {\n    background-color: #22543d\n  }\n\n  .sm\\:bg-teal-100 {\n    background-color: #e6fffa\n  }\n\n  .sm\\:bg-teal-200 {\n    background-color: #b2f5ea\n  }\n\n  .sm\\:bg-teal-300 {\n    background-color: #81e6d9\n  }\n\n  .sm\\:bg-teal-400 {\n    background-color: #4fd1c5\n  }\n\n  .sm\\:bg-teal-500 {\n    background-color: #38b2ac\n  }\n\n  .sm\\:bg-teal-600 {\n    background-color: #319795\n  }\n\n  .sm\\:bg-teal-700 {\n    background-color: #2c7a7b\n  }\n\n  .sm\\:bg-teal-800 {\n    background-color: #285e61\n  }\n\n  .sm\\:bg-teal-900 {\n    background-color: #234e52\n  }\n\n  .sm\\:bg-blue-100 {\n    background-color: #ebf8ff\n  }\n\n  .sm\\:bg-blue-200 {\n    background-color: #bee3f8\n  }\n\n  .sm\\:bg-blue-300 {\n    background-color: #90cdf4\n  }\n\n  .sm\\:bg-blue-400 {\n    background-color: #63b3ed\n  }\n\n  .sm\\:bg-blue-500 {\n    background-color: #4299e1\n  }\n\n  .sm\\:bg-blue-600 {\n    background-color: #3182ce\n  }\n\n  .sm\\:bg-blue-700 {\n    background-color: #2b6cb0\n  }\n\n  .sm\\:bg-blue-800 {\n    background-color: #2c5282\n  }\n\n  .sm\\:bg-blue-900 {\n    background-color: #2a4365\n  }\n\n  .sm\\:bg-indigo-100 {\n    background-color: #ebf4ff\n  }\n\n  .sm\\:bg-indigo-200 {\n    background-color: #c3dafe\n  }\n\n  .sm\\:bg-indigo-300 {\n    background-color: #a3bffa\n  }\n\n  .sm\\:bg-indigo-400 {\n    background-color: #7f9cf5\n  }\n\n  .sm\\:bg-indigo-500 {\n    background-color: #667eea\n  }\n\n  .sm\\:bg-indigo-600 {\n    background-color: #5a67d8\n  }\n\n  .sm\\:bg-indigo-700 {\n    background-color: #4c51bf\n  }\n\n  .sm\\:bg-indigo-800 {\n    background-color: #434190\n  }\n\n  .sm\\:bg-indigo-900 {\n    background-color: #3c366b\n  }\n\n  .sm\\:bg-purple-100 {\n    background-color: #faf5ff\n  }\n\n  .sm\\:bg-purple-200 {\n    background-color: #e9d8fd\n  }\n\n  .sm\\:bg-purple-300 {\n    background-color: #d6bcfa\n  }\n\n  .sm\\:bg-purple-400 {\n    background-color: #b794f4\n  }\n\n  .sm\\:bg-purple-500 {\n    background-color: #9f7aea\n  }\n\n  .sm\\:bg-purple-600 {\n    background-color: #805ad5\n  }\n\n  .sm\\:bg-purple-700 {\n    background-color: #6b46c1\n  }\n\n  .sm\\:bg-purple-800 {\n    background-color: #553c9a\n  }\n\n  .sm\\:bg-purple-900 {\n    background-color: #44337a\n  }\n\n  .sm\\:bg-pink-100 {\n    background-color: #fff5f7\n  }\n\n  .sm\\:bg-pink-200 {\n    background-color: #fed7e2\n  }\n\n  .sm\\:bg-pink-300 {\n    background-color: #fbb6ce\n  }\n\n  .sm\\:bg-pink-400 {\n    background-color: #f687b3\n  }\n\n  .sm\\:bg-pink-500 {\n    background-color: #ed64a6\n  }\n\n  .sm\\:bg-pink-600 {\n    background-color: #d53f8c\n  }\n\n  .sm\\:bg-pink-700 {\n    background-color: #b83280\n  }\n\n  .sm\\:bg-pink-800 {\n    background-color: #97266d\n  }\n\n  .sm\\:bg-pink-900 {\n    background-color: #702459\n  }\n\n  .sm\\:hover\\:bg-transparent:hover {\n    background-color: transparent\n  }\n\n  .sm\\:hover\\:bg-black:hover {\n    background-color: #000\n  }\n\n  .sm\\:hover\\:bg-white:hover {\n    background-color: #fff\n  }\n\n  .sm\\:hover\\:bg-gray-100:hover {\n    background-color: #f7fafc\n  }\n\n  .sm\\:hover\\:bg-gray-200:hover {\n    background-color: #edf2f7\n  }\n\n  .sm\\:hover\\:bg-gray-300:hover {\n    background-color: #e2e8f0\n  }\n\n  .sm\\:hover\\:bg-gray-400:hover {\n    background-color: #cbd5e0\n  }\n\n  .sm\\:hover\\:bg-gray-500:hover {\n    background-color: #a0aec0\n  }\n\n  .sm\\:hover\\:bg-gray-600:hover {\n    background-color: #718096\n  }\n\n  .sm\\:hover\\:bg-gray-700:hover {\n    background-color: #4a5568\n  }\n\n  .sm\\:hover\\:bg-gray-800:hover {\n    background-color: #2d3748\n  }\n\n  .sm\\:hover\\:bg-gray-900:hover {\n    background-color: #1a202c\n  }\n\n  .sm\\:hover\\:bg-red-100:hover {\n    background-color: #fff5f5\n  }\n\n  .sm\\:hover\\:bg-red-200:hover {\n    background-color: #fed7d7\n  }\n\n  .sm\\:hover\\:bg-red-300:hover {\n    background-color: #feb2b2\n  }\n\n  .sm\\:hover\\:bg-red-400:hover {\n    background-color: #fc8181\n  }\n\n  .sm\\:hover\\:bg-red-500:hover {\n    background-color: #f56565\n  }\n\n  .sm\\:hover\\:bg-red-600:hover {\n    background-color: #e53e3e\n  }\n\n  .sm\\:hover\\:bg-red-700:hover {\n    background-color: #c53030\n  }\n\n  .sm\\:hover\\:bg-red-800:hover {\n    background-color: #9b2c2c\n  }\n\n  .sm\\:hover\\:bg-red-900:hover {\n    background-color: #742a2a\n  }\n\n  .sm\\:hover\\:bg-orange-100:hover {\n    background-color: #fffaf0\n  }\n\n  .sm\\:hover\\:bg-orange-200:hover {\n    background-color: #feebc8\n  }\n\n  .sm\\:hover\\:bg-orange-300:hover {\n    background-color: #fbd38d\n  }\n\n  .sm\\:hover\\:bg-orange-400:hover {\n    background-color: #f6ad55\n  }\n\n  .sm\\:hover\\:bg-orange-500:hover {\n    background-color: #ed8936\n  }\n\n  .sm\\:hover\\:bg-orange-600:hover {\n    background-color: #dd6b20\n  }\n\n  .sm\\:hover\\:bg-orange-700:hover {\n    background-color: #c05621\n  }\n\n  .sm\\:hover\\:bg-orange-800:hover {\n    background-color: #9c4221\n  }\n\n  .sm\\:hover\\:bg-orange-900:hover {\n    background-color: #7b341e\n  }\n\n  .sm\\:hover\\:bg-yellow-100:hover {\n    background-color: #fffff0\n  }\n\n  .sm\\:hover\\:bg-yellow-200:hover {\n    background-color: #fefcbf\n  }\n\n  .sm\\:hover\\:bg-yellow-300:hover {\n    background-color: #faf089\n  }\n\n  .sm\\:hover\\:bg-yellow-400:hover {\n    background-color: #f6e05e\n  }\n\n  .sm\\:hover\\:bg-yellow-500:hover {\n    background-color: #ecc94b\n  }\n\n  .sm\\:hover\\:bg-yellow-600:hover {\n    background-color: #d69e2e\n  }\n\n  .sm\\:hover\\:bg-yellow-700:hover {\n    background-color: #b7791f\n  }\n\n  .sm\\:hover\\:bg-yellow-800:hover {\n    background-color: #975a16\n  }\n\n  .sm\\:hover\\:bg-yellow-900:hover {\n    background-color: #744210\n  }\n\n  .sm\\:hover\\:bg-green-100:hover {\n    background-color: #f0fff4\n  }\n\n  .sm\\:hover\\:bg-green-200:hover {\n    background-color: #c6f6d5\n  }\n\n  .sm\\:hover\\:bg-green-300:hover {\n    background-color: #9ae6b4\n  }\n\n  .sm\\:hover\\:bg-green-400:hover {\n    background-color: #68d391\n  }\n\n  .sm\\:hover\\:bg-green-500:hover {\n    background-color: #48bb78\n  }\n\n  .sm\\:hover\\:bg-green-600:hover {\n    background-color: #38a169\n  }\n\n  .sm\\:hover\\:bg-green-700:hover {\n    background-color: #2f855a\n  }\n\n  .sm\\:hover\\:bg-green-800:hover {\n    background-color: #276749\n  }\n\n  .sm\\:hover\\:bg-green-900:hover {\n    background-color: #22543d\n  }\n\n  .sm\\:hover\\:bg-teal-100:hover {\n    background-color: #e6fffa\n  }\n\n  .sm\\:hover\\:bg-teal-200:hover {\n    background-color: #b2f5ea\n  }\n\n  .sm\\:hover\\:bg-teal-300:hover {\n    background-color: #81e6d9\n  }\n\n  .sm\\:hover\\:bg-teal-400:hover {\n    background-color: #4fd1c5\n  }\n\n  .sm\\:hover\\:bg-teal-500:hover {\n    background-color: #38b2ac\n  }\n\n  .sm\\:hover\\:bg-teal-600:hover {\n    background-color: #319795\n  }\n\n  .sm\\:hover\\:bg-teal-700:hover {\n    background-color: #2c7a7b\n  }\n\n  .sm\\:hover\\:bg-teal-800:hover {\n    background-color: #285e61\n  }\n\n  .sm\\:hover\\:bg-teal-900:hover {\n    background-color: #234e52\n  }\n\n  .sm\\:hover\\:bg-blue-100:hover {\n    background-color: #ebf8ff\n  }\n\n  .sm\\:hover\\:bg-blue-200:hover {\n    background-color: #bee3f8\n  }\n\n  .sm\\:hover\\:bg-blue-300:hover {\n    background-color: #90cdf4\n  }\n\n  .sm\\:hover\\:bg-blue-400:hover {\n    background-color: #63b3ed\n  }\n\n  .sm\\:hover\\:bg-blue-500:hover {\n    background-color: #4299e1\n  }\n\n  .sm\\:hover\\:bg-blue-600:hover {\n    background-color: #3182ce\n  }\n\n  .sm\\:hover\\:bg-blue-700:hover {\n    background-color: #2b6cb0\n  }\n\n  .sm\\:hover\\:bg-blue-800:hover {\n    background-color: #2c5282\n  }\n\n  .sm\\:hover\\:bg-blue-900:hover {\n    background-color: #2a4365\n  }\n\n  .sm\\:hover\\:bg-indigo-100:hover {\n    background-color: #ebf4ff\n  }\n\n  .sm\\:hover\\:bg-indigo-200:hover {\n    background-color: #c3dafe\n  }\n\n  .sm\\:hover\\:bg-indigo-300:hover {\n    background-color: #a3bffa\n  }\n\n  .sm\\:hover\\:bg-indigo-400:hover {\n    background-color: #7f9cf5\n  }\n\n  .sm\\:hover\\:bg-indigo-500:hover {\n    background-color: #667eea\n  }\n\n  .sm\\:hover\\:bg-indigo-600:hover {\n    background-color: #5a67d8\n  }\n\n  .sm\\:hover\\:bg-indigo-700:hover {\n    background-color: #4c51bf\n  }\n\n  .sm\\:hover\\:bg-indigo-800:hover {\n    background-color: #434190\n  }\n\n  .sm\\:hover\\:bg-indigo-900:hover {\n    background-color: #3c366b\n  }\n\n  .sm\\:hover\\:bg-purple-100:hover {\n    background-color: #faf5ff\n  }\n\n  .sm\\:hover\\:bg-purple-200:hover {\n    background-color: #e9d8fd\n  }\n\n  .sm\\:hover\\:bg-purple-300:hover {\n    background-color: #d6bcfa\n  }\n\n  .sm\\:hover\\:bg-purple-400:hover {\n    background-color: #b794f4\n  }\n\n  .sm\\:hover\\:bg-purple-500:hover {\n    background-color: #9f7aea\n  }\n\n  .sm\\:hover\\:bg-purple-600:hover {\n    background-color: #805ad5\n  }\n\n  .sm\\:hover\\:bg-purple-700:hover {\n    background-color: #6b46c1\n  }\n\n  .sm\\:hover\\:bg-purple-800:hover {\n    background-color: #553c9a\n  }\n\n  .sm\\:hover\\:bg-purple-900:hover {\n    background-color: #44337a\n  }\n\n  .sm\\:hover\\:bg-pink-100:hover {\n    background-color: #fff5f7\n  }\n\n  .sm\\:hover\\:bg-pink-200:hover {\n    background-color: #fed7e2\n  }\n\n  .sm\\:hover\\:bg-pink-300:hover {\n    background-color: #fbb6ce\n  }\n\n  .sm\\:hover\\:bg-pink-400:hover {\n    background-color: #f687b3\n  }\n\n  .sm\\:hover\\:bg-pink-500:hover {\n    background-color: #ed64a6\n  }\n\n  .sm\\:hover\\:bg-pink-600:hover {\n    background-color: #d53f8c\n  }\n\n  .sm\\:hover\\:bg-pink-700:hover {\n    background-color: #b83280\n  }\n\n  .sm\\:hover\\:bg-pink-800:hover {\n    background-color: #97266d\n  }\n\n  .sm\\:hover\\:bg-pink-900:hover {\n    background-color: #702459\n  }\n\n  .sm\\:focus\\:bg-transparent:focus {\n    background-color: transparent\n  }\n\n  .sm\\:focus\\:bg-black:focus {\n    background-color: #000\n  }\n\n  .sm\\:focus\\:bg-white:focus {\n    background-color: #fff\n  }\n\n  .sm\\:focus\\:bg-gray-100:focus {\n    background-color: #f7fafc\n  }\n\n  .sm\\:focus\\:bg-gray-200:focus {\n    background-color: #edf2f7\n  }\n\n  .sm\\:focus\\:bg-gray-300:focus {\n    background-color: #e2e8f0\n  }\n\n  .sm\\:focus\\:bg-gray-400:focus {\n    background-color: #cbd5e0\n  }\n\n  .sm\\:focus\\:bg-gray-500:focus {\n    background-color: #a0aec0\n  }\n\n  .sm\\:focus\\:bg-gray-600:focus {\n    background-color: #718096\n  }\n\n  .sm\\:focus\\:bg-gray-700:focus {\n    background-color: #4a5568\n  }\n\n  .sm\\:focus\\:bg-gray-800:focus {\n    background-color: #2d3748\n  }\n\n  .sm\\:focus\\:bg-gray-900:focus {\n    background-color: #1a202c\n  }\n\n  .sm\\:focus\\:bg-red-100:focus {\n    background-color: #fff5f5\n  }\n\n  .sm\\:focus\\:bg-red-200:focus {\n    background-color: #fed7d7\n  }\n\n  .sm\\:focus\\:bg-red-300:focus {\n    background-color: #feb2b2\n  }\n\n  .sm\\:focus\\:bg-red-400:focus {\n    background-color: #fc8181\n  }\n\n  .sm\\:focus\\:bg-red-500:focus {\n    background-color: #f56565\n  }\n\n  .sm\\:focus\\:bg-red-600:focus {\n    background-color: #e53e3e\n  }\n\n  .sm\\:focus\\:bg-red-700:focus {\n    background-color: #c53030\n  }\n\n  .sm\\:focus\\:bg-red-800:focus {\n    background-color: #9b2c2c\n  }\n\n  .sm\\:focus\\:bg-red-900:focus {\n    background-color: #742a2a\n  }\n\n  .sm\\:focus\\:bg-orange-100:focus {\n    background-color: #fffaf0\n  }\n\n  .sm\\:focus\\:bg-orange-200:focus {\n    background-color: #feebc8\n  }\n\n  .sm\\:focus\\:bg-orange-300:focus {\n    background-color: #fbd38d\n  }\n\n  .sm\\:focus\\:bg-orange-400:focus {\n    background-color: #f6ad55\n  }\n\n  .sm\\:focus\\:bg-orange-500:focus {\n    background-color: #ed8936\n  }\n\n  .sm\\:focus\\:bg-orange-600:focus {\n    background-color: #dd6b20\n  }\n\n  .sm\\:focus\\:bg-orange-700:focus {\n    background-color: #c05621\n  }\n\n  .sm\\:focus\\:bg-orange-800:focus {\n    background-color: #9c4221\n  }\n\n  .sm\\:focus\\:bg-orange-900:focus {\n    background-color: #7b341e\n  }\n\n  .sm\\:focus\\:bg-yellow-100:focus {\n    background-color: #fffff0\n  }\n\n  .sm\\:focus\\:bg-yellow-200:focus {\n    background-color: #fefcbf\n  }\n\n  .sm\\:focus\\:bg-yellow-300:focus {\n    background-color: #faf089\n  }\n\n  .sm\\:focus\\:bg-yellow-400:focus {\n    background-color: #f6e05e\n  }\n\n  .sm\\:focus\\:bg-yellow-500:focus {\n    background-color: #ecc94b\n  }\n\n  .sm\\:focus\\:bg-yellow-600:focus {\n    background-color: #d69e2e\n  }\n\n  .sm\\:focus\\:bg-yellow-700:focus {\n    background-color: #b7791f\n  }\n\n  .sm\\:focus\\:bg-yellow-800:focus {\n    background-color: #975a16\n  }\n\n  .sm\\:focus\\:bg-yellow-900:focus {\n    background-color: #744210\n  }\n\n  .sm\\:focus\\:bg-green-100:focus {\n    background-color: #f0fff4\n  }\n\n  .sm\\:focus\\:bg-green-200:focus {\n    background-color: #c6f6d5\n  }\n\n  .sm\\:focus\\:bg-green-300:focus {\n    background-color: #9ae6b4\n  }\n\n  .sm\\:focus\\:bg-green-400:focus {\n    background-color: #68d391\n  }\n\n  .sm\\:focus\\:bg-green-500:focus {\n    background-color: #48bb78\n  }\n\n  .sm\\:focus\\:bg-green-600:focus {\n    background-color: #38a169\n  }\n\n  .sm\\:focus\\:bg-green-700:focus {\n    background-color: #2f855a\n  }\n\n  .sm\\:focus\\:bg-green-800:focus {\n    background-color: #276749\n  }\n\n  .sm\\:focus\\:bg-green-900:focus {\n    background-color: #22543d\n  }\n\n  .sm\\:focus\\:bg-teal-100:focus {\n    background-color: #e6fffa\n  }\n\n  .sm\\:focus\\:bg-teal-200:focus {\n    background-color: #b2f5ea\n  }\n\n  .sm\\:focus\\:bg-teal-300:focus {\n    background-color: #81e6d9\n  }\n\n  .sm\\:focus\\:bg-teal-400:focus {\n    background-color: #4fd1c5\n  }\n\n  .sm\\:focus\\:bg-teal-500:focus {\n    background-color: #38b2ac\n  }\n\n  .sm\\:focus\\:bg-teal-600:focus {\n    background-color: #319795\n  }\n\n  .sm\\:focus\\:bg-teal-700:focus {\n    background-color: #2c7a7b\n  }\n\n  .sm\\:focus\\:bg-teal-800:focus {\n    background-color: #285e61\n  }\n\n  .sm\\:focus\\:bg-teal-900:focus {\n    background-color: #234e52\n  }\n\n  .sm\\:focus\\:bg-blue-100:focus {\n    background-color: #ebf8ff\n  }\n\n  .sm\\:focus\\:bg-blue-200:focus {\n    background-color: #bee3f8\n  }\n\n  .sm\\:focus\\:bg-blue-300:focus {\n    background-color: #90cdf4\n  }\n\n  .sm\\:focus\\:bg-blue-400:focus {\n    background-color: #63b3ed\n  }\n\n  .sm\\:focus\\:bg-blue-500:focus {\n    background-color: #4299e1\n  }\n\n  .sm\\:focus\\:bg-blue-600:focus {\n    background-color: #3182ce\n  }\n\n  .sm\\:focus\\:bg-blue-700:focus {\n    background-color: #2b6cb0\n  }\n\n  .sm\\:focus\\:bg-blue-800:focus {\n    background-color: #2c5282\n  }\n\n  .sm\\:focus\\:bg-blue-900:focus {\n    background-color: #2a4365\n  }\n\n  .sm\\:focus\\:bg-indigo-100:focus {\n    background-color: #ebf4ff\n  }\n\n  .sm\\:focus\\:bg-indigo-200:focus {\n    background-color: #c3dafe\n  }\n\n  .sm\\:focus\\:bg-indigo-300:focus {\n    background-color: #a3bffa\n  }\n\n  .sm\\:focus\\:bg-indigo-400:focus {\n    background-color: #7f9cf5\n  }\n\n  .sm\\:focus\\:bg-indigo-500:focus {\n    background-color: #667eea\n  }\n\n  .sm\\:focus\\:bg-indigo-600:focus {\n    background-color: #5a67d8\n  }\n\n  .sm\\:focus\\:bg-indigo-700:focus {\n    background-color: #4c51bf\n  }\n\n  .sm\\:focus\\:bg-indigo-800:focus {\n    background-color: #434190\n  }\n\n  .sm\\:focus\\:bg-indigo-900:focus {\n    background-color: #3c366b\n  }\n\n  .sm\\:focus\\:bg-purple-100:focus {\n    background-color: #faf5ff\n  }\n\n  .sm\\:focus\\:bg-purple-200:focus {\n    background-color: #e9d8fd\n  }\n\n  .sm\\:focus\\:bg-purple-300:focus {\n    background-color: #d6bcfa\n  }\n\n  .sm\\:focus\\:bg-purple-400:focus {\n    background-color: #b794f4\n  }\n\n  .sm\\:focus\\:bg-purple-500:focus {\n    background-color: #9f7aea\n  }\n\n  .sm\\:focus\\:bg-purple-600:focus {\n    background-color: #805ad5\n  }\n\n  .sm\\:focus\\:bg-purple-700:focus {\n    background-color: #6b46c1\n  }\n\n  .sm\\:focus\\:bg-purple-800:focus {\n    background-color: #553c9a\n  }\n\n  .sm\\:focus\\:bg-purple-900:focus {\n    background-color: #44337a\n  }\n\n  .sm\\:focus\\:bg-pink-100:focus {\n    background-color: #fff5f7\n  }\n\n  .sm\\:focus\\:bg-pink-200:focus {\n    background-color: #fed7e2\n  }\n\n  .sm\\:focus\\:bg-pink-300:focus {\n    background-color: #fbb6ce\n  }\n\n  .sm\\:focus\\:bg-pink-400:focus {\n    background-color: #f687b3\n  }\n\n  .sm\\:focus\\:bg-pink-500:focus {\n    background-color: #ed64a6\n  }\n\n  .sm\\:focus\\:bg-pink-600:focus {\n    background-color: #d53f8c\n  }\n\n  .sm\\:focus\\:bg-pink-700:focus {\n    background-color: #b83280\n  }\n\n  .sm\\:focus\\:bg-pink-800:focus {\n    background-color: #97266d\n  }\n\n  .sm\\:focus\\:bg-pink-900:focus {\n    background-color: #702459\n  }\n\n  .sm\\:bg-bottom {\n    background-position: bottom\n  }\n\n  .sm\\:bg-center {\n    background-position: center\n  }\n\n  .sm\\:bg-left {\n    background-position: left\n  }\n\n  .sm\\:bg-left-bottom {\n    background-position: left bottom\n  }\n\n  .sm\\:bg-left-top {\n    background-position: left top\n  }\n\n  .sm\\:bg-right {\n    background-position: right\n  }\n\n  .sm\\:bg-right-bottom {\n    background-position: right bottom\n  }\n\n  .sm\\:bg-right-top {\n    background-position: right top\n  }\n\n  .sm\\:bg-top {\n    background-position: top\n  }\n\n  .sm\\:bg-repeat {\n    background-repeat: repeat\n  }\n\n  .sm\\:bg-no-repeat {\n    background-repeat: no-repeat\n  }\n\n  .sm\\:bg-repeat-x {\n    background-repeat: repeat-x\n  }\n\n  .sm\\:bg-repeat-y {\n    background-repeat: repeat-y\n  }\n\n  .sm\\:bg-repeat-round {\n    background-repeat: round\n  }\n\n  .sm\\:bg-repeat-space {\n    background-repeat: space\n  }\n\n  .sm\\:bg-auto {\n    background-size: auto\n  }\n\n  .sm\\:bg-cover {\n    background-size: cover\n  }\n\n  .sm\\:bg-contain {\n    background-size: contain\n  }\n\n  .sm\\:border-collapse {\n    border-collapse: collapse\n  }\n\n  .sm\\:border-separate {\n    border-collapse: separate\n  }\n\n  .sm\\:border-transparent {\n    border-color: transparent\n  }\n\n  .sm\\:border-black {\n    border-color: #000\n  }\n\n  .sm\\:border-white {\n    border-color: #fff\n  }\n\n  .sm\\:border-gray-100 {\n    border-color: #f7fafc\n  }\n\n  .sm\\:border-gray-200 {\n    border-color: #edf2f7\n  }\n\n  .sm\\:border-gray-300 {\n    border-color: #e2e8f0\n  }\n\n  .sm\\:border-gray-400 {\n    border-color: #cbd5e0\n  }\n\n  .sm\\:border-gray-500 {\n    border-color: #a0aec0\n  }\n\n  .sm\\:border-gray-600 {\n    border-color: #718096\n  }\n\n  .sm\\:border-gray-700 {\n    border-color: #4a5568\n  }\n\n  .sm\\:border-gray-800 {\n    border-color: #2d3748\n  }\n\n  .sm\\:border-gray-900 {\n    border-color: #1a202c\n  }\n\n  .sm\\:border-red-100 {\n    border-color: #fff5f5\n  }\n\n  .sm\\:border-red-200 {\n    border-color: #fed7d7\n  }\n\n  .sm\\:border-red-300 {\n    border-color: #feb2b2\n  }\n\n  .sm\\:border-red-400 {\n    border-color: #fc8181\n  }\n\n  .sm\\:border-red-500 {\n    border-color: #f56565\n  }\n\n  .sm\\:border-red-600 {\n    border-color: #e53e3e\n  }\n\n  .sm\\:border-red-700 {\n    border-color: #c53030\n  }\n\n  .sm\\:border-red-800 {\n    border-color: #9b2c2c\n  }\n\n  .sm\\:border-red-900 {\n    border-color: #742a2a\n  }\n\n  .sm\\:border-orange-100 {\n    border-color: #fffaf0\n  }\n\n  .sm\\:border-orange-200 {\n    border-color: #feebc8\n  }\n\n  .sm\\:border-orange-300 {\n    border-color: #fbd38d\n  }\n\n  .sm\\:border-orange-400 {\n    border-color: #f6ad55\n  }\n\n  .sm\\:border-orange-500 {\n    border-color: #ed8936\n  }\n\n  .sm\\:border-orange-600 {\n    border-color: #dd6b20\n  }\n\n  .sm\\:border-orange-700 {\n    border-color: #c05621\n  }\n\n  .sm\\:border-orange-800 {\n    border-color: #9c4221\n  }\n\n  .sm\\:border-orange-900 {\n    border-color: #7b341e\n  }\n\n  .sm\\:border-yellow-100 {\n    border-color: #fffff0\n  }\n\n  .sm\\:border-yellow-200 {\n    border-color: #fefcbf\n  }\n\n  .sm\\:border-yellow-300 {\n    border-color: #faf089\n  }\n\n  .sm\\:border-yellow-400 {\n    border-color: #f6e05e\n  }\n\n  .sm\\:border-yellow-500 {\n    border-color: #ecc94b\n  }\n\n  .sm\\:border-yellow-600 {\n    border-color: #d69e2e\n  }\n\n  .sm\\:border-yellow-700 {\n    border-color: #b7791f\n  }\n\n  .sm\\:border-yellow-800 {\n    border-color: #975a16\n  }\n\n  .sm\\:border-yellow-900 {\n    border-color: #744210\n  }\n\n  .sm\\:border-green-100 {\n    border-color: #f0fff4\n  }\n\n  .sm\\:border-green-200 {\n    border-color: #c6f6d5\n  }\n\n  .sm\\:border-green-300 {\n    border-color: #9ae6b4\n  }\n\n  .sm\\:border-green-400 {\n    border-color: #68d391\n  }\n\n  .sm\\:border-green-500 {\n    border-color: #48bb78\n  }\n\n  .sm\\:border-green-600 {\n    border-color: #38a169\n  }\n\n  .sm\\:border-green-700 {\n    border-color: #2f855a\n  }\n\n  .sm\\:border-green-800 {\n    border-color: #276749\n  }\n\n  .sm\\:border-green-900 {\n    border-color: #22543d\n  }\n\n  .sm\\:border-teal-100 {\n    border-color: #e6fffa\n  }\n\n  .sm\\:border-teal-200 {\n    border-color: #b2f5ea\n  }\n\n  .sm\\:border-teal-300 {\n    border-color: #81e6d9\n  }\n\n  .sm\\:border-teal-400 {\n    border-color: #4fd1c5\n  }\n\n  .sm\\:border-teal-500 {\n    border-color: #38b2ac\n  }\n\n  .sm\\:border-teal-600 {\n    border-color: #319795\n  }\n\n  .sm\\:border-teal-700 {\n    border-color: #2c7a7b\n  }\n\n  .sm\\:border-teal-800 {\n    border-color: #285e61\n  }\n\n  .sm\\:border-teal-900 {\n    border-color: #234e52\n  }\n\n  .sm\\:border-blue-100 {\n    border-color: #ebf8ff\n  }\n\n  .sm\\:border-blue-200 {\n    border-color: #bee3f8\n  }\n\n  .sm\\:border-blue-300 {\n    border-color: #90cdf4\n  }\n\n  .sm\\:border-blue-400 {\n    border-color: #63b3ed\n  }\n\n  .sm\\:border-blue-500 {\n    border-color: #4299e1\n  }\n\n  .sm\\:border-blue-600 {\n    border-color: #3182ce\n  }\n\n  .sm\\:border-blue-700 {\n    border-color: #2b6cb0\n  }\n\n  .sm\\:border-blue-800 {\n    border-color: #2c5282\n  }\n\n  .sm\\:border-blue-900 {\n    border-color: #2a4365\n  }\n\n  .sm\\:border-indigo-100 {\n    border-color: #ebf4ff\n  }\n\n  .sm\\:border-indigo-200 {\n    border-color: #c3dafe\n  }\n\n  .sm\\:border-indigo-300 {\n    border-color: #a3bffa\n  }\n\n  .sm\\:border-indigo-400 {\n    border-color: #7f9cf5\n  }\n\n  .sm\\:border-indigo-500 {\n    border-color: #667eea\n  }\n\n  .sm\\:border-indigo-600 {\n    border-color: #5a67d8\n  }\n\n  .sm\\:border-indigo-700 {\n    border-color: #4c51bf\n  }\n\n  .sm\\:border-indigo-800 {\n    border-color: #434190\n  }\n\n  .sm\\:border-indigo-900 {\n    border-color: #3c366b\n  }\n\n  .sm\\:border-purple-100 {\n    border-color: #faf5ff\n  }\n\n  .sm\\:border-purple-200 {\n    border-color: #e9d8fd\n  }\n\n  .sm\\:border-purple-300 {\n    border-color: #d6bcfa\n  }\n\n  .sm\\:border-purple-400 {\n    border-color: #b794f4\n  }\n\n  .sm\\:border-purple-500 {\n    border-color: #9f7aea\n  }\n\n  .sm\\:border-purple-600 {\n    border-color: #805ad5\n  }\n\n  .sm\\:border-purple-700 {\n    border-color: #6b46c1\n  }\n\n  .sm\\:border-purple-800 {\n    border-color: #553c9a\n  }\n\n  .sm\\:border-purple-900 {\n    border-color: #44337a\n  }\n\n  .sm\\:border-pink-100 {\n    border-color: #fff5f7\n  }\n\n  .sm\\:border-pink-200 {\n    border-color: #fed7e2\n  }\n\n  .sm\\:border-pink-300 {\n    border-color: #fbb6ce\n  }\n\n  .sm\\:border-pink-400 {\n    border-color: #f687b3\n  }\n\n  .sm\\:border-pink-500 {\n    border-color: #ed64a6\n  }\n\n  .sm\\:border-pink-600 {\n    border-color: #d53f8c\n  }\n\n  .sm\\:border-pink-700 {\n    border-color: #b83280\n  }\n\n  .sm\\:border-pink-800 {\n    border-color: #97266d\n  }\n\n  .sm\\:border-pink-900 {\n    border-color: #702459\n  }\n\n  .sm\\:hover\\:border-transparent:hover {\n    border-color: transparent\n  }\n\n  .sm\\:hover\\:border-black:hover {\n    border-color: #000\n  }\n\n  .sm\\:hover\\:border-white:hover {\n    border-color: #fff\n  }\n\n  .sm\\:hover\\:border-gray-100:hover {\n    border-color: #f7fafc\n  }\n\n  .sm\\:hover\\:border-gray-200:hover {\n    border-color: #edf2f7\n  }\n\n  .sm\\:hover\\:border-gray-300:hover {\n    border-color: #e2e8f0\n  }\n\n  .sm\\:hover\\:border-gray-400:hover {\n    border-color: #cbd5e0\n  }\n\n  .sm\\:hover\\:border-gray-500:hover {\n    border-color: #a0aec0\n  }\n\n  .sm\\:hover\\:border-gray-600:hover {\n    border-color: #718096\n  }\n\n  .sm\\:hover\\:border-gray-700:hover {\n    border-color: #4a5568\n  }\n\n  .sm\\:hover\\:border-gray-800:hover {\n    border-color: #2d3748\n  }\n\n  .sm\\:hover\\:border-gray-900:hover {\n    border-color: #1a202c\n  }\n\n  .sm\\:hover\\:border-red-100:hover {\n    border-color: #fff5f5\n  }\n\n  .sm\\:hover\\:border-red-200:hover {\n    border-color: #fed7d7\n  }\n\n  .sm\\:hover\\:border-red-300:hover {\n    border-color: #feb2b2\n  }\n\n  .sm\\:hover\\:border-red-400:hover {\n    border-color: #fc8181\n  }\n\n  .sm\\:hover\\:border-red-500:hover {\n    border-color: #f56565\n  }\n\n  .sm\\:hover\\:border-red-600:hover {\n    border-color: #e53e3e\n  }\n\n  .sm\\:hover\\:border-red-700:hover {\n    border-color: #c53030\n  }\n\n  .sm\\:hover\\:border-red-800:hover {\n    border-color: #9b2c2c\n  }\n\n  .sm\\:hover\\:border-red-900:hover {\n    border-color: #742a2a\n  }\n\n  .sm\\:hover\\:border-orange-100:hover {\n    border-color: #fffaf0\n  }\n\n  .sm\\:hover\\:border-orange-200:hover {\n    border-color: #feebc8\n  }\n\n  .sm\\:hover\\:border-orange-300:hover {\n    border-color: #fbd38d\n  }\n\n  .sm\\:hover\\:border-orange-400:hover {\n    border-color: #f6ad55\n  }\n\n  .sm\\:hover\\:border-orange-500:hover {\n    border-color: #ed8936\n  }\n\n  .sm\\:hover\\:border-orange-600:hover {\n    border-color: #dd6b20\n  }\n\n  .sm\\:hover\\:border-orange-700:hover {\n    border-color: #c05621\n  }\n\n  .sm\\:hover\\:border-orange-800:hover {\n    border-color: #9c4221\n  }\n\n  .sm\\:hover\\:border-orange-900:hover {\n    border-color: #7b341e\n  }\n\n  .sm\\:hover\\:border-yellow-100:hover {\n    border-color: #fffff0\n  }\n\n  .sm\\:hover\\:border-yellow-200:hover {\n    border-color: #fefcbf\n  }\n\n  .sm\\:hover\\:border-yellow-300:hover {\n    border-color: #faf089\n  }\n\n  .sm\\:hover\\:border-yellow-400:hover {\n    border-color: #f6e05e\n  }\n\n  .sm\\:hover\\:border-yellow-500:hover {\n    border-color: #ecc94b\n  }\n\n  .sm\\:hover\\:border-yellow-600:hover {\n    border-color: #d69e2e\n  }\n\n  .sm\\:hover\\:border-yellow-700:hover {\n    border-color: #b7791f\n  }\n\n  .sm\\:hover\\:border-yellow-800:hover {\n    border-color: #975a16\n  }\n\n  .sm\\:hover\\:border-yellow-900:hover {\n    border-color: #744210\n  }\n\n  .sm\\:hover\\:border-green-100:hover {\n    border-color: #f0fff4\n  }\n\n  .sm\\:hover\\:border-green-200:hover {\n    border-color: #c6f6d5\n  }\n\n  .sm\\:hover\\:border-green-300:hover {\n    border-color: #9ae6b4\n  }\n\n  .sm\\:hover\\:border-green-400:hover {\n    border-color: #68d391\n  }\n\n  .sm\\:hover\\:border-green-500:hover {\n    border-color: #48bb78\n  }\n\n  .sm\\:hover\\:border-green-600:hover {\n    border-color: #38a169\n  }\n\n  .sm\\:hover\\:border-green-700:hover {\n    border-color: #2f855a\n  }\n\n  .sm\\:hover\\:border-green-800:hover {\n    border-color: #276749\n  }\n\n  .sm\\:hover\\:border-green-900:hover {\n    border-color: #22543d\n  }\n\n  .sm\\:hover\\:border-teal-100:hover {\n    border-color: #e6fffa\n  }\n\n  .sm\\:hover\\:border-teal-200:hover {\n    border-color: #b2f5ea\n  }\n\n  .sm\\:hover\\:border-teal-300:hover {\n    border-color: #81e6d9\n  }\n\n  .sm\\:hover\\:border-teal-400:hover {\n    border-color: #4fd1c5\n  }\n\n  .sm\\:hover\\:border-teal-500:hover {\n    border-color: #38b2ac\n  }\n\n  .sm\\:hover\\:border-teal-600:hover {\n    border-color: #319795\n  }\n\n  .sm\\:hover\\:border-teal-700:hover {\n    border-color: #2c7a7b\n  }\n\n  .sm\\:hover\\:border-teal-800:hover {\n    border-color: #285e61\n  }\n\n  .sm\\:hover\\:border-teal-900:hover {\n    border-color: #234e52\n  }\n\n  .sm\\:hover\\:border-blue-100:hover {\n    border-color: #ebf8ff\n  }\n\n  .sm\\:hover\\:border-blue-200:hover {\n    border-color: #bee3f8\n  }\n\n  .sm\\:hover\\:border-blue-300:hover {\n    border-color: #90cdf4\n  }\n\n  .sm\\:hover\\:border-blue-400:hover {\n    border-color: #63b3ed\n  }\n\n  .sm\\:hover\\:border-blue-500:hover {\n    border-color: #4299e1\n  }\n\n  .sm\\:hover\\:border-blue-600:hover {\n    border-color: #3182ce\n  }\n\n  .sm\\:hover\\:border-blue-700:hover {\n    border-color: #2b6cb0\n  }\n\n  .sm\\:hover\\:border-blue-800:hover {\n    border-color: #2c5282\n  }\n\n  .sm\\:hover\\:border-blue-900:hover {\n    border-color: #2a4365\n  }\n\n  .sm\\:hover\\:border-indigo-100:hover {\n    border-color: #ebf4ff\n  }\n\n  .sm\\:hover\\:border-indigo-200:hover {\n    border-color: #c3dafe\n  }\n\n  .sm\\:hover\\:border-indigo-300:hover {\n    border-color: #a3bffa\n  }\n\n  .sm\\:hover\\:border-indigo-400:hover {\n    border-color: #7f9cf5\n  }\n\n  .sm\\:hover\\:border-indigo-500:hover {\n    border-color: #667eea\n  }\n\n  .sm\\:hover\\:border-indigo-600:hover {\n    border-color: #5a67d8\n  }\n\n  .sm\\:hover\\:border-indigo-700:hover {\n    border-color: #4c51bf\n  }\n\n  .sm\\:hover\\:border-indigo-800:hover {\n    border-color: #434190\n  }\n\n  .sm\\:hover\\:border-indigo-900:hover {\n    border-color: #3c366b\n  }\n\n  .sm\\:hover\\:border-purple-100:hover {\n    border-color: #faf5ff\n  }\n\n  .sm\\:hover\\:border-purple-200:hover {\n    border-color: #e9d8fd\n  }\n\n  .sm\\:hover\\:border-purple-300:hover {\n    border-color: #d6bcfa\n  }\n\n  .sm\\:hover\\:border-purple-400:hover {\n    border-color: #b794f4\n  }\n\n  .sm\\:hover\\:border-purple-500:hover {\n    border-color: #9f7aea\n  }\n\n  .sm\\:hover\\:border-purple-600:hover {\n    border-color: #805ad5\n  }\n\n  .sm\\:hover\\:border-purple-700:hover {\n    border-color: #6b46c1\n  }\n\n  .sm\\:hover\\:border-purple-800:hover {\n    border-color: #553c9a\n  }\n\n  .sm\\:hover\\:border-purple-900:hover {\n    border-color: #44337a\n  }\n\n  .sm\\:hover\\:border-pink-100:hover {\n    border-color: #fff5f7\n  }\n\n  .sm\\:hover\\:border-pink-200:hover {\n    border-color: #fed7e2\n  }\n\n  .sm\\:hover\\:border-pink-300:hover {\n    border-color: #fbb6ce\n  }\n\n  .sm\\:hover\\:border-pink-400:hover {\n    border-color: #f687b3\n  }\n\n  .sm\\:hover\\:border-pink-500:hover {\n    border-color: #ed64a6\n  }\n\n  .sm\\:hover\\:border-pink-600:hover {\n    border-color: #d53f8c\n  }\n\n  .sm\\:hover\\:border-pink-700:hover {\n    border-color: #b83280\n  }\n\n  .sm\\:hover\\:border-pink-800:hover {\n    border-color: #97266d\n  }\n\n  .sm\\:hover\\:border-pink-900:hover {\n    border-color: #702459\n  }\n\n  .sm\\:focus\\:border-transparent:focus {\n    border-color: transparent\n  }\n\n  .sm\\:focus\\:border-black:focus {\n    border-color: #000\n  }\n\n  .sm\\:focus\\:border-white:focus {\n    border-color: #fff\n  }\n\n  .sm\\:focus\\:border-gray-100:focus {\n    border-color: #f7fafc\n  }\n\n  .sm\\:focus\\:border-gray-200:focus {\n    border-color: #edf2f7\n  }\n\n  .sm\\:focus\\:border-gray-300:focus {\n    border-color: #e2e8f0\n  }\n\n  .sm\\:focus\\:border-gray-400:focus {\n    border-color: #cbd5e0\n  }\n\n  .sm\\:focus\\:border-gray-500:focus {\n    border-color: #a0aec0\n  }\n\n  .sm\\:focus\\:border-gray-600:focus {\n    border-color: #718096\n  }\n\n  .sm\\:focus\\:border-gray-700:focus {\n    border-color: #4a5568\n  }\n\n  .sm\\:focus\\:border-gray-800:focus {\n    border-color: #2d3748\n  }\n\n  .sm\\:focus\\:border-gray-900:focus {\n    border-color: #1a202c\n  }\n\n  .sm\\:focus\\:border-red-100:focus {\n    border-color: #fff5f5\n  }\n\n  .sm\\:focus\\:border-red-200:focus {\n    border-color: #fed7d7\n  }\n\n  .sm\\:focus\\:border-red-300:focus {\n    border-color: #feb2b2\n  }\n\n  .sm\\:focus\\:border-red-400:focus {\n    border-color: #fc8181\n  }\n\n  .sm\\:focus\\:border-red-500:focus {\n    border-color: #f56565\n  }\n\n  .sm\\:focus\\:border-red-600:focus {\n    border-color: #e53e3e\n  }\n\n  .sm\\:focus\\:border-red-700:focus {\n    border-color: #c53030\n  }\n\n  .sm\\:focus\\:border-red-800:focus {\n    border-color: #9b2c2c\n  }\n\n  .sm\\:focus\\:border-red-900:focus {\n    border-color: #742a2a\n  }\n\n  .sm\\:focus\\:border-orange-100:focus {\n    border-color: #fffaf0\n  }\n\n  .sm\\:focus\\:border-orange-200:focus {\n    border-color: #feebc8\n  }\n\n  .sm\\:focus\\:border-orange-300:focus {\n    border-color: #fbd38d\n  }\n\n  .sm\\:focus\\:border-orange-400:focus {\n    border-color: #f6ad55\n  }\n\n  .sm\\:focus\\:border-orange-500:focus {\n    border-color: #ed8936\n  }\n\n  .sm\\:focus\\:border-orange-600:focus {\n    border-color: #dd6b20\n  }\n\n  .sm\\:focus\\:border-orange-700:focus {\n    border-color: #c05621\n  }\n\n  .sm\\:focus\\:border-orange-800:focus {\n    border-color: #9c4221\n  }\n\n  .sm\\:focus\\:border-orange-900:focus {\n    border-color: #7b341e\n  }\n\n  .sm\\:focus\\:border-yellow-100:focus {\n    border-color: #fffff0\n  }\n\n  .sm\\:focus\\:border-yellow-200:focus {\n    border-color: #fefcbf\n  }\n\n  .sm\\:focus\\:border-yellow-300:focus {\n    border-color: #faf089\n  }\n\n  .sm\\:focus\\:border-yellow-400:focus {\n    border-color: #f6e05e\n  }\n\n  .sm\\:focus\\:border-yellow-500:focus {\n    border-color: #ecc94b\n  }\n\n  .sm\\:focus\\:border-yellow-600:focus {\n    border-color: #d69e2e\n  }\n\n  .sm\\:focus\\:border-yellow-700:focus {\n    border-color: #b7791f\n  }\n\n  .sm\\:focus\\:border-yellow-800:focus {\n    border-color: #975a16\n  }\n\n  .sm\\:focus\\:border-yellow-900:focus {\n    border-color: #744210\n  }\n\n  .sm\\:focus\\:border-green-100:focus {\n    border-color: #f0fff4\n  }\n\n  .sm\\:focus\\:border-green-200:focus {\n    border-color: #c6f6d5\n  }\n\n  .sm\\:focus\\:border-green-300:focus {\n    border-color: #9ae6b4\n  }\n\n  .sm\\:focus\\:border-green-400:focus {\n    border-color: #68d391\n  }\n\n  .sm\\:focus\\:border-green-500:focus {\n    border-color: #48bb78\n  }\n\n  .sm\\:focus\\:border-green-600:focus {\n    border-color: #38a169\n  }\n\n  .sm\\:focus\\:border-green-700:focus {\n    border-color: #2f855a\n  }\n\n  .sm\\:focus\\:border-green-800:focus {\n    border-color: #276749\n  }\n\n  .sm\\:focus\\:border-green-900:focus {\n    border-color: #22543d\n  }\n\n  .sm\\:focus\\:border-teal-100:focus {\n    border-color: #e6fffa\n  }\n\n  .sm\\:focus\\:border-teal-200:focus {\n    border-color: #b2f5ea\n  }\n\n  .sm\\:focus\\:border-teal-300:focus {\n    border-color: #81e6d9\n  }\n\n  .sm\\:focus\\:border-teal-400:focus {\n    border-color: #4fd1c5\n  }\n\n  .sm\\:focus\\:border-teal-500:focus {\n    border-color: #38b2ac\n  }\n\n  .sm\\:focus\\:border-teal-600:focus {\n    border-color: #319795\n  }\n\n  .sm\\:focus\\:border-teal-700:focus {\n    border-color: #2c7a7b\n  }\n\n  .sm\\:focus\\:border-teal-800:focus {\n    border-color: #285e61\n  }\n\n  .sm\\:focus\\:border-teal-900:focus {\n    border-color: #234e52\n  }\n\n  .sm\\:focus\\:border-blue-100:focus {\n    border-color: #ebf8ff\n  }\n\n  .sm\\:focus\\:border-blue-200:focus {\n    border-color: #bee3f8\n  }\n\n  .sm\\:focus\\:border-blue-300:focus {\n    border-color: #90cdf4\n  }\n\n  .sm\\:focus\\:border-blue-400:focus {\n    border-color: #63b3ed\n  }\n\n  .sm\\:focus\\:border-blue-500:focus {\n    border-color: #4299e1\n  }\n\n  .sm\\:focus\\:border-blue-600:focus {\n    border-color: #3182ce\n  }\n\n  .sm\\:focus\\:border-blue-700:focus {\n    border-color: #2b6cb0\n  }\n\n  .sm\\:focus\\:border-blue-800:focus {\n    border-color: #2c5282\n  }\n\n  .sm\\:focus\\:border-blue-900:focus {\n    border-color: #2a4365\n  }\n\n  .sm\\:focus\\:border-indigo-100:focus {\n    border-color: #ebf4ff\n  }\n\n  .sm\\:focus\\:border-indigo-200:focus {\n    border-color: #c3dafe\n  }\n\n  .sm\\:focus\\:border-indigo-300:focus {\n    border-color: #a3bffa\n  }\n\n  .sm\\:focus\\:border-indigo-400:focus {\n    border-color: #7f9cf5\n  }\n\n  .sm\\:focus\\:border-indigo-500:focus {\n    border-color: #667eea\n  }\n\n  .sm\\:focus\\:border-indigo-600:focus {\n    border-color: #5a67d8\n  }\n\n  .sm\\:focus\\:border-indigo-700:focus {\n    border-color: #4c51bf\n  }\n\n  .sm\\:focus\\:border-indigo-800:focus {\n    border-color: #434190\n  }\n\n  .sm\\:focus\\:border-indigo-900:focus {\n    border-color: #3c366b\n  }\n\n  .sm\\:focus\\:border-purple-100:focus {\n    border-color: #faf5ff\n  }\n\n  .sm\\:focus\\:border-purple-200:focus {\n    border-color: #e9d8fd\n  }\n\n  .sm\\:focus\\:border-purple-300:focus {\n    border-color: #d6bcfa\n  }\n\n  .sm\\:focus\\:border-purple-400:focus {\n    border-color: #b794f4\n  }\n\n  .sm\\:focus\\:border-purple-500:focus {\n    border-color: #9f7aea\n  }\n\n  .sm\\:focus\\:border-purple-600:focus {\n    border-color: #805ad5\n  }\n\n  .sm\\:focus\\:border-purple-700:focus {\n    border-color: #6b46c1\n  }\n\n  .sm\\:focus\\:border-purple-800:focus {\n    border-color: #553c9a\n  }\n\n  .sm\\:focus\\:border-purple-900:focus {\n    border-color: #44337a\n  }\n\n  .sm\\:focus\\:border-pink-100:focus {\n    border-color: #fff5f7\n  }\n\n  .sm\\:focus\\:border-pink-200:focus {\n    border-color: #fed7e2\n  }\n\n  .sm\\:focus\\:border-pink-300:focus {\n    border-color: #fbb6ce\n  }\n\n  .sm\\:focus\\:border-pink-400:focus {\n    border-color: #f687b3\n  }\n\n  .sm\\:focus\\:border-pink-500:focus {\n    border-color: #ed64a6\n  }\n\n  .sm\\:focus\\:border-pink-600:focus {\n    border-color: #d53f8c\n  }\n\n  .sm\\:focus\\:border-pink-700:focus {\n    border-color: #b83280\n  }\n\n  .sm\\:focus\\:border-pink-800:focus {\n    border-color: #97266d\n  }\n\n  .sm\\:focus\\:border-pink-900:focus {\n    border-color: #702459\n  }\n\n  .sm\\:rounded-none {\n    border-radius: 0\n  }\n\n  .sm\\:rounded-sm {\n    border-radius: 0.125rem\n  }\n\n  .sm\\:rounded {\n    border-radius: 0.25rem\n  }\n\n  .sm\\:rounded-lg {\n    border-radius: 0.5rem\n  }\n\n  .sm\\:rounded-full {\n    border-radius: 9999px\n  }\n\n  .sm\\:rounded-t-none {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n  }\n\n  .sm\\:rounded-r-none {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0\n  }\n\n  .sm\\:rounded-b-none {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0\n  }\n\n  .sm\\:rounded-l-none {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0\n  }\n\n  .sm\\:rounded-t-sm {\n    border-top-left-radius: 0.125rem;\n    border-top-right-radius: 0.125rem\n  }\n\n  .sm\\:rounded-r-sm {\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem\n  }\n\n  .sm\\:rounded-b-sm {\n    border-bottom-right-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .sm\\:rounded-l-sm {\n    border-top-left-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .sm\\:rounded-t {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem\n  }\n\n  .sm\\:rounded-r {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem\n  }\n\n  .sm\\:rounded-b {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .sm\\:rounded-l {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .sm\\:rounded-t-lg {\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem\n  }\n\n  .sm\\:rounded-r-lg {\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem\n  }\n\n  .sm\\:rounded-b-lg {\n    border-bottom-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .sm\\:rounded-l-lg {\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .sm\\:rounded-t-full {\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px\n  }\n\n  .sm\\:rounded-r-full {\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px\n  }\n\n  .sm\\:rounded-b-full {\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px\n  }\n\n  .sm\\:rounded-l-full {\n    border-top-left-radius: 9999px;\n    border-bottom-left-radius: 9999px\n  }\n\n  .sm\\:rounded-tl-none {\n    border-top-left-radius: 0\n  }\n\n  .sm\\:rounded-tr-none {\n    border-top-right-radius: 0\n  }\n\n  .sm\\:rounded-br-none {\n    border-bottom-right-radius: 0\n  }\n\n  .sm\\:rounded-bl-none {\n    border-bottom-left-radius: 0\n  }\n\n  .sm\\:rounded-tl-sm {\n    border-top-left-radius: 0.125rem\n  }\n\n  .sm\\:rounded-tr-sm {\n    border-top-right-radius: 0.125rem\n  }\n\n  .sm\\:rounded-br-sm {\n    border-bottom-right-radius: 0.125rem\n  }\n\n  .sm\\:rounded-bl-sm {\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .sm\\:rounded-tl {\n    border-top-left-radius: 0.25rem\n  }\n\n  .sm\\:rounded-tr {\n    border-top-right-radius: 0.25rem\n  }\n\n  .sm\\:rounded-br {\n    border-bottom-right-radius: 0.25rem\n  }\n\n  .sm\\:rounded-bl {\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .sm\\:rounded-tl-lg {\n    border-top-left-radius: 0.5rem\n  }\n\n  .sm\\:rounded-tr-lg {\n    border-top-right-radius: 0.5rem\n  }\n\n  .sm\\:rounded-br-lg {\n    border-bottom-right-radius: 0.5rem\n  }\n\n  .sm\\:rounded-bl-lg {\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .sm\\:rounded-tl-full {\n    border-top-left-radius: 9999px\n  }\n\n  .sm\\:rounded-tr-full {\n    border-top-right-radius: 9999px\n  }\n\n  .sm\\:rounded-br-full {\n    border-bottom-right-radius: 9999px\n  }\n\n  .sm\\:rounded-bl-full {\n    border-bottom-left-radius: 9999px\n  }\n\n  .sm\\:border-solid {\n    border-style: solid\n  }\n\n  .sm\\:border-dashed {\n    border-style: dashed\n  }\n\n  .sm\\:border-dotted {\n    border-style: dotted\n  }\n\n  .sm\\:border-double {\n    border-style: double\n  }\n\n  .sm\\:border-none {\n    border-style: none\n  }\n\n  .sm\\:border-0 {\n    border-width: 0\n  }\n\n  .sm\\:border-2 {\n    border-width: 2px\n  }\n\n  .sm\\:border-4 {\n    border-width: 4px\n  }\n\n  .sm\\:border-8 {\n    border-width: 8px\n  }\n\n  .sm\\:border {\n    border-width: 1px\n  }\n\n  .sm\\:border-t-0 {\n    border-top-width: 0\n  }\n\n  .sm\\:border-r-0 {\n    border-right-width: 0\n  }\n\n  .sm\\:border-b-0 {\n    border-bottom-width: 0\n  }\n\n  .sm\\:border-l-0 {\n    border-left-width: 0\n  }\n\n  .sm\\:border-t-2 {\n    border-top-width: 2px\n  }\n\n  .sm\\:border-r-2 {\n    border-right-width: 2px\n  }\n\n  .sm\\:border-b-2 {\n    border-bottom-width: 2px\n  }\n\n  .sm\\:border-l-2 {\n    border-left-width: 2px\n  }\n\n  .sm\\:border-t-4 {\n    border-top-width: 4px\n  }\n\n  .sm\\:border-r-4 {\n    border-right-width: 4px\n  }\n\n  .sm\\:border-b-4 {\n    border-bottom-width: 4px\n  }\n\n  .sm\\:border-l-4 {\n    border-left-width: 4px\n  }\n\n  .sm\\:border-t-8 {\n    border-top-width: 8px\n  }\n\n  .sm\\:border-r-8 {\n    border-right-width: 8px\n  }\n\n  .sm\\:border-b-8 {\n    border-bottom-width: 8px\n  }\n\n  .sm\\:border-l-8 {\n    border-left-width: 8px\n  }\n\n  .sm\\:border-t {\n    border-top-width: 1px\n  }\n\n  .sm\\:border-r {\n    border-right-width: 1px\n  }\n\n  .sm\\:border-b {\n    border-bottom-width: 1px\n  }\n\n  .sm\\:border-l {\n    border-left-width: 1px\n  }\n\n  .sm\\:cursor-auto {\n    cursor: auto\n  }\n\n  .sm\\:cursor-default {\n    cursor: default\n  }\n\n  .sm\\:cursor-pointer {\n    cursor: pointer\n  }\n\n  .sm\\:cursor-wait {\n    cursor: wait\n  }\n\n  .sm\\:cursor-text {\n    cursor: text\n  }\n\n  .sm\\:cursor-move {\n    cursor: move\n  }\n\n  .sm\\:cursor-not-allowed {\n    cursor: not-allowed\n  }\n\n  .sm\\:block {\n    display: block\n  }\n\n  .sm\\:inline-block {\n    display: inline-block\n  }\n\n  .sm\\:inline {\n    display: inline\n  }\n\n  .sm\\:flex {\n    display: flex\n  }\n\n  .sm\\:inline-flex {\n    display: inline-flex\n  }\n\n  .sm\\:table {\n    display: table\n  }\n\n  .sm\\:table-row {\n    display: table-row\n  }\n\n  .sm\\:table-cell {\n    display: table-cell\n  }\n\n  .sm\\:hidden {\n    display: none\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row\n  }\n\n  .sm\\:flex-row-reverse {\n    flex-direction: row-reverse\n  }\n\n  .sm\\:flex-col {\n    flex-direction: column\n  }\n\n  .sm\\:flex-col-reverse {\n    flex-direction: column-reverse\n  }\n\n  .sm\\:flex-wrap {\n    flex-wrap: wrap\n  }\n\n  .sm\\:flex-wrap-reverse {\n    flex-wrap: wrap-reverse\n  }\n\n  .sm\\:flex-no-wrap {\n    flex-wrap: nowrap\n  }\n\n  .sm\\:items-start {\n    align-items: flex-start\n  }\n\n  .sm\\:items-end {\n    align-items: flex-end\n  }\n\n  .sm\\:items-center {\n    align-items: center\n  }\n\n  .sm\\:items-baseline {\n    align-items: baseline\n  }\n\n  .sm\\:items-stretch {\n    align-items: stretch\n  }\n\n  .sm\\:self-auto {\n    align-self: auto\n  }\n\n  .sm\\:self-start {\n    align-self: flex-start\n  }\n\n  .sm\\:self-end {\n    align-self: flex-end\n  }\n\n  .sm\\:self-center {\n    align-self: center\n  }\n\n  .sm\\:self-stretch {\n    align-self: stretch\n  }\n\n  .sm\\:justify-start {\n    justify-content: flex-start\n  }\n\n  .sm\\:justify-end {\n    justify-content: flex-end\n  }\n\n  .sm\\:justify-center {\n    justify-content: center\n  }\n\n  .sm\\:justify-between {\n    justify-content: space-between\n  }\n\n  .sm\\:justify-around {\n    justify-content: space-around\n  }\n\n  .sm\\:content-center {\n    align-content: center\n  }\n\n  .sm\\:content-start {\n    align-content: flex-start\n  }\n\n  .sm\\:content-end {\n    align-content: flex-end\n  }\n\n  .sm\\:content-between {\n    align-content: space-between\n  }\n\n  .sm\\:content-around {\n    align-content: space-around\n  }\n\n  .sm\\:flex-1 {\n    flex: 1 1 0%\n  }\n\n  .sm\\:flex-auto {\n    flex: 1 1 auto\n  }\n\n  .sm\\:flex-initial {\n    flex: 0 1 auto\n  }\n\n  .sm\\:flex-none {\n    flex: none\n  }\n\n  .sm\\:flex-grow-0 {\n    flex-grow: 0\n  }\n\n  .sm\\:flex-grow {\n    flex-grow: 1\n  }\n\n  .sm\\:flex-shrink-0 {\n    flex-shrink: 0\n  }\n\n  .sm\\:flex-shrink {\n    flex-shrink: 1\n  }\n\n  .sm\\:order-1 {\n    order: 1\n  }\n\n  .sm\\:order-2 {\n    order: 2\n  }\n\n  .sm\\:order-3 {\n    order: 3\n  }\n\n  .sm\\:order-4 {\n    order: 4\n  }\n\n  .sm\\:order-5 {\n    order: 5\n  }\n\n  .sm\\:order-6 {\n    order: 6\n  }\n\n  .sm\\:order-7 {\n    order: 7\n  }\n\n  .sm\\:order-8 {\n    order: 8\n  }\n\n  .sm\\:order-9 {\n    order: 9\n  }\n\n  .sm\\:order-10 {\n    order: 10\n  }\n\n  .sm\\:order-11 {\n    order: 11\n  }\n\n  .sm\\:order-12 {\n    order: 12\n  }\n\n  .sm\\:order-first {\n    order: -9999\n  }\n\n  .sm\\:order-last {\n    order: 9999\n  }\n\n  .sm\\:order-none {\n    order: 0\n  }\n\n  .sm\\:float-right {\n    float: right\n  }\n\n  .sm\\:float-left {\n    float: left\n  }\n\n  .sm\\:float-none {\n    float: none\n  }\n\n  .sm\\:clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both\n  }\n\n  .sm\\:font-sans {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"\n  }\n\n  .sm\\:font-serif {\n    font-family: Georgia, Cambria, \"Times New Roman\", Times, serif\n  }\n\n  .sm\\:font-mono {\n    font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace\n  }\n\n  .sm\\:font-hairline {\n    font-weight: 100\n  }\n\n  .sm\\:font-thin {\n    font-weight: 200\n  }\n\n  .sm\\:font-light {\n    font-weight: 300\n  }\n\n  .sm\\:font-normal {\n    font-weight: 400\n  }\n\n  .sm\\:font-medium {\n    font-weight: 500\n  }\n\n  .sm\\:font-semibold {\n    font-weight: 600\n  }\n\n  .sm\\:font-bold {\n    font-weight: 700\n  }\n\n  .sm\\:font-extrabold {\n    font-weight: 800\n  }\n\n  .sm\\:font-black {\n    font-weight: 900\n  }\n\n  .sm\\:hover\\:font-hairline:hover {\n    font-weight: 100\n  }\n\n  .sm\\:hover\\:font-thin:hover {\n    font-weight: 200\n  }\n\n  .sm\\:hover\\:font-light:hover {\n    font-weight: 300\n  }\n\n  .sm\\:hover\\:font-normal:hover {\n    font-weight: 400\n  }\n\n  .sm\\:hover\\:font-medium:hover {\n    font-weight: 500\n  }\n\n  .sm\\:hover\\:font-semibold:hover {\n    font-weight: 600\n  }\n\n  .sm\\:hover\\:font-bold:hover {\n    font-weight: 700\n  }\n\n  .sm\\:hover\\:font-extrabold:hover {\n    font-weight: 800\n  }\n\n  .sm\\:hover\\:font-black:hover {\n    font-weight: 900\n  }\n\n  .sm\\:focus\\:font-hairline:focus {\n    font-weight: 100\n  }\n\n  .sm\\:focus\\:font-thin:focus {\n    font-weight: 200\n  }\n\n  .sm\\:focus\\:font-light:focus {\n    font-weight: 300\n  }\n\n  .sm\\:focus\\:font-normal:focus {\n    font-weight: 400\n  }\n\n  .sm\\:focus\\:font-medium:focus {\n    font-weight: 500\n  }\n\n  .sm\\:focus\\:font-semibold:focus {\n    font-weight: 600\n  }\n\n  .sm\\:focus\\:font-bold:focus {\n    font-weight: 700\n  }\n\n  .sm\\:focus\\:font-extrabold:focus {\n    font-weight: 800\n  }\n\n  .sm\\:focus\\:font-black:focus {\n    font-weight: 900\n  }\n\n  .sm\\:h-0 {\n    height: 0\n  }\n\n  .sm\\:h-1 {\n    height: 0.25rem\n  }\n\n  .sm\\:h-2 {\n    height: 0.5rem\n  }\n\n  .sm\\:h-3 {\n    height: 0.75rem\n  }\n\n  .sm\\:h-4 {\n    height: 1rem\n  }\n\n  .sm\\:h-5 {\n    height: 1.25rem\n  }\n\n  .sm\\:h-6 {\n    height: 1.5rem\n  }\n\n  .sm\\:h-8 {\n    height: 2rem\n  }\n\n  .sm\\:h-10 {\n    height: 2.5rem\n  }\n\n  .sm\\:h-12 {\n    height: 3rem\n  }\n\n  .sm\\:h-16 {\n    height: 4rem\n  }\n\n  .sm\\:h-20 {\n    height: 5rem\n  }\n\n  .sm\\:h-24 {\n    height: 6rem\n  }\n\n  .sm\\:h-32 {\n    height: 8rem\n  }\n\n  .sm\\:h-40 {\n    height: 10rem\n  }\n\n  .sm\\:h-48 {\n    height: 12rem\n  }\n\n  .sm\\:h-56 {\n    height: 14rem\n  }\n\n  .sm\\:h-64 {\n    height: 16rem\n  }\n\n  .sm\\:h-auto {\n    height: auto\n  }\n\n  .sm\\:h-px {\n    height: 1px\n  }\n\n  .sm\\:h-full {\n    height: 100%\n  }\n\n  .sm\\:h-screen {\n    height: 100vh\n  }\n\n  .sm\\:leading-none {\n    line-height: 1\n  }\n\n  .sm\\:leading-tight {\n    line-height: 1.25\n  }\n\n  .sm\\:leading-snug {\n    line-height: 1.375\n  }\n\n  .sm\\:leading-normal {\n    line-height: 1.5\n  }\n\n  .sm\\:leading-relaxed {\n    line-height: 1.625\n  }\n\n  .sm\\:leading-loose {\n    line-height: 2\n  }\n\n  .sm\\:list-inside {\n    list-style-position: inside\n  }\n\n  .sm\\:list-outside {\n    list-style-position: outside\n  }\n\n  .sm\\:list-none {\n    list-style-type: none\n  }\n\n  .sm\\:list-disc {\n    list-style-type: disc\n  }\n\n  .sm\\:list-decimal {\n    list-style-type: decimal\n  }\n\n  .sm\\:m-0 {\n    margin: 0\n  }\n\n  .sm\\:m-1 {\n    margin: 0.25rem\n  }\n\n  .sm\\:m-2 {\n    margin: 0.5rem\n  }\n\n  .sm\\:m-3 {\n    margin: 0.75rem\n  }\n\n  .sm\\:m-4 {\n    margin: 1rem\n  }\n\n  .sm\\:m-5 {\n    margin: 1.25rem\n  }\n\n  .sm\\:m-6 {\n    margin: 1.5rem\n  }\n\n  .sm\\:m-8 {\n    margin: 2rem\n  }\n\n  .sm\\:m-10 {\n    margin: 2.5rem\n  }\n\n  .sm\\:m-12 {\n    margin: 3rem\n  }\n\n  .sm\\:m-16 {\n    margin: 4rem\n  }\n\n  .sm\\:m-20 {\n    margin: 5rem\n  }\n\n  .sm\\:m-24 {\n    margin: 6rem\n  }\n\n  .sm\\:m-32 {\n    margin: 8rem\n  }\n\n  .sm\\:m-40 {\n    margin: 10rem\n  }\n\n  .sm\\:m-48 {\n    margin: 12rem\n  }\n\n  .sm\\:m-56 {\n    margin: 14rem\n  }\n\n  .sm\\:m-64 {\n    margin: 16rem\n  }\n\n  .sm\\:m-auto {\n    margin: auto\n  }\n\n  .sm\\:m-px {\n    margin: 1px\n  }\n\n  .sm\\:-m-1 {\n    margin: -0.25rem\n  }\n\n  .sm\\:-m-2 {\n    margin: -0.5rem\n  }\n\n  .sm\\:-m-3 {\n    margin: -0.75rem\n  }\n\n  .sm\\:-m-4 {\n    margin: -1rem\n  }\n\n  .sm\\:-m-5 {\n    margin: -1.25rem\n  }\n\n  .sm\\:-m-6 {\n    margin: -1.5rem\n  }\n\n  .sm\\:-m-8 {\n    margin: -2rem\n  }\n\n  .sm\\:-m-10 {\n    margin: -2.5rem\n  }\n\n  .sm\\:-m-12 {\n    margin: -3rem\n  }\n\n  .sm\\:-m-16 {\n    margin: -4rem\n  }\n\n  .sm\\:-m-20 {\n    margin: -5rem\n  }\n\n  .sm\\:-m-24 {\n    margin: -6rem\n  }\n\n  .sm\\:-m-32 {\n    margin: -8rem\n  }\n\n  .sm\\:-m-40 {\n    margin: -10rem\n  }\n\n  .sm\\:-m-48 {\n    margin: -12rem\n  }\n\n  .sm\\:-m-56 {\n    margin: -14rem\n  }\n\n  .sm\\:-m-64 {\n    margin: -16rem\n  }\n\n  .sm\\:-m-px {\n    margin: -1px\n  }\n\n  .sm\\:my-0 {\n    margin-top: 0;\n    margin-bottom: 0\n  }\n\n  .sm\\:mx-0 {\n    margin-left: 0;\n    margin-right: 0\n  }\n\n  .sm\\:my-1 {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem\n  }\n\n  .sm\\:mx-1 {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem\n  }\n\n  .sm\\:my-2 {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem\n  }\n\n  .sm\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem\n  }\n\n  .sm\\:my-3 {\n    margin-top: 0.75rem;\n    margin-bottom: 0.75rem\n  }\n\n  .sm\\:mx-3 {\n    margin-left: 0.75rem;\n    margin-right: 0.75rem\n  }\n\n  .sm\\:my-4 {\n    margin-top: 1rem;\n    margin-bottom: 1rem\n  }\n\n  .sm\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem\n  }\n\n  .sm\\:my-5 {\n    margin-top: 1.25rem;\n    margin-bottom: 1.25rem\n  }\n\n  .sm\\:mx-5 {\n    margin-left: 1.25rem;\n    margin-right: 1.25rem\n  }\n\n  .sm\\:my-6 {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem\n  }\n\n  .sm\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem\n  }\n\n  .sm\\:my-8 {\n    margin-top: 2rem;\n    margin-bottom: 2rem\n  }\n\n  .sm\\:mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem\n  }\n\n  .sm\\:my-10 {\n    margin-top: 2.5rem;\n    margin-bottom: 2.5rem\n  }\n\n  .sm\\:mx-10 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem\n  }\n\n  .sm\\:my-12 {\n    margin-top: 3rem;\n    margin-bottom: 3rem\n  }\n\n  .sm\\:mx-12 {\n    margin-left: 3rem;\n    margin-right: 3rem\n  }\n\n  .sm\\:my-16 {\n    margin-top: 4rem;\n    margin-bottom: 4rem\n  }\n\n  .sm\\:mx-16 {\n    margin-left: 4rem;\n    margin-right: 4rem\n  }\n\n  .sm\\:my-20 {\n    margin-top: 5rem;\n    margin-bottom: 5rem\n  }\n\n  .sm\\:mx-20 {\n    margin-left: 5rem;\n    margin-right: 5rem\n  }\n\n  .sm\\:my-24 {\n    margin-top: 6rem;\n    margin-bottom: 6rem\n  }\n\n  .sm\\:mx-24 {\n    margin-left: 6rem;\n    margin-right: 6rem\n  }\n\n  .sm\\:my-32 {\n    margin-top: 8rem;\n    margin-bottom: 8rem\n  }\n\n  .sm\\:mx-32 {\n    margin-left: 8rem;\n    margin-right: 8rem\n  }\n\n  .sm\\:my-40 {\n    margin-top: 10rem;\n    margin-bottom: 10rem\n  }\n\n  .sm\\:mx-40 {\n    margin-left: 10rem;\n    margin-right: 10rem\n  }\n\n  .sm\\:my-48 {\n    margin-top: 12rem;\n    margin-bottom: 12rem\n  }\n\n  .sm\\:mx-48 {\n    margin-left: 12rem;\n    margin-right: 12rem\n  }\n\n  .sm\\:my-56 {\n    margin-top: 14rem;\n    margin-bottom: 14rem\n  }\n\n  .sm\\:mx-56 {\n    margin-left: 14rem;\n    margin-right: 14rem\n  }\n\n  .sm\\:my-64 {\n    margin-top: 16rem;\n    margin-bottom: 16rem\n  }\n\n  .sm\\:mx-64 {\n    margin-left: 16rem;\n    margin-right: 16rem\n  }\n\n  .sm\\:my-auto {\n    margin-top: auto;\n    margin-bottom: auto\n  }\n\n  .sm\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto\n  }\n\n  .sm\\:my-px {\n    margin-top: 1px;\n    margin-bottom: 1px\n  }\n\n  .sm\\:mx-px {\n    margin-left: 1px;\n    margin-right: 1px\n  }\n\n  .sm\\:-my-1 {\n    margin-top: -0.25rem;\n    margin-bottom: -0.25rem\n  }\n\n  .sm\\:-mx-1 {\n    margin-left: -0.25rem;\n    margin-right: -0.25rem\n  }\n\n  .sm\\:-my-2 {\n    margin-top: -0.5rem;\n    margin-bottom: -0.5rem\n  }\n\n  .sm\\:-mx-2 {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem\n  }\n\n  .sm\\:-my-3 {\n    margin-top: -0.75rem;\n    margin-bottom: -0.75rem\n  }\n\n  .sm\\:-mx-3 {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem\n  }\n\n  .sm\\:-my-4 {\n    margin-top: -1rem;\n    margin-bottom: -1rem\n  }\n\n  .sm\\:-mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem\n  }\n\n  .sm\\:-my-5 {\n    margin-top: -1.25rem;\n    margin-bottom: -1.25rem\n  }\n\n  .sm\\:-mx-5 {\n    margin-left: -1.25rem;\n    margin-right: -1.25rem\n  }\n\n  .sm\\:-my-6 {\n    margin-top: -1.5rem;\n    margin-bottom: -1.5rem\n  }\n\n  .sm\\:-mx-6 {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem\n  }\n\n  .sm\\:-my-8 {\n    margin-top: -2rem;\n    margin-bottom: -2rem\n  }\n\n  .sm\\:-mx-8 {\n    margin-left: -2rem;\n    margin-right: -2rem\n  }\n\n  .sm\\:-my-10 {\n    margin-top: -2.5rem;\n    margin-bottom: -2.5rem\n  }\n\n  .sm\\:-mx-10 {\n    margin-left: -2.5rem;\n    margin-right: -2.5rem\n  }\n\n  .sm\\:-my-12 {\n    margin-top: -3rem;\n    margin-bottom: -3rem\n  }\n\n  .sm\\:-mx-12 {\n    margin-left: -3rem;\n    margin-right: -3rem\n  }\n\n  .sm\\:-my-16 {\n    margin-top: -4rem;\n    margin-bottom: -4rem\n  }\n\n  .sm\\:-mx-16 {\n    margin-left: -4rem;\n    margin-right: -4rem\n  }\n\n  .sm\\:-my-20 {\n    margin-top: -5rem;\n    margin-bottom: -5rem\n  }\n\n  .sm\\:-mx-20 {\n    margin-left: -5rem;\n    margin-right: -5rem\n  }\n\n  .sm\\:-my-24 {\n    margin-top: -6rem;\n    margin-bottom: -6rem\n  }\n\n  .sm\\:-mx-24 {\n    margin-left: -6rem;\n    margin-right: -6rem\n  }\n\n  .sm\\:-my-32 {\n    margin-top: -8rem;\n    margin-bottom: -8rem\n  }\n\n  .sm\\:-mx-32 {\n    margin-left: -8rem;\n    margin-right: -8rem\n  }\n\n  .sm\\:-my-40 {\n    margin-top: -10rem;\n    margin-bottom: -10rem\n  }\n\n  .sm\\:-mx-40 {\n    margin-left: -10rem;\n    margin-right: -10rem\n  }\n\n  .sm\\:-my-48 {\n    margin-top: -12rem;\n    margin-bottom: -12rem\n  }\n\n  .sm\\:-mx-48 {\n    margin-left: -12rem;\n    margin-right: -12rem\n  }\n\n  .sm\\:-my-56 {\n    margin-top: -14rem;\n    margin-bottom: -14rem\n  }\n\n  .sm\\:-mx-56 {\n    margin-left: -14rem;\n    margin-right: -14rem\n  }\n\n  .sm\\:-my-64 {\n    margin-top: -16rem;\n    margin-bottom: -16rem\n  }\n\n  .sm\\:-mx-64 {\n    margin-left: -16rem;\n    margin-right: -16rem\n  }\n\n  .sm\\:-my-px {\n    margin-top: -1px;\n    margin-bottom: -1px\n  }\n\n  .sm\\:-mx-px {\n    margin-left: -1px;\n    margin-right: -1px\n  }\n\n  .sm\\:mt-0 {\n    margin-top: 0\n  }\n\n  .sm\\:mr-0 {\n    margin-right: 0\n  }\n\n  .sm\\:mb-0 {\n    margin-bottom: 0\n  }\n\n  .sm\\:ml-0 {\n    margin-left: 0\n  }\n\n  .sm\\:mt-1 {\n    margin-top: 0.25rem\n  }\n\n  .sm\\:mr-1 {\n    margin-right: 0.25rem\n  }\n\n  .sm\\:mb-1 {\n    margin-bottom: 0.25rem\n  }\n\n  .sm\\:ml-1 {\n    margin-left: 0.25rem\n  }\n\n  .sm\\:mt-2 {\n    margin-top: 0.5rem\n  }\n\n  .sm\\:mr-2 {\n    margin-right: 0.5rem\n  }\n\n  .sm\\:mb-2 {\n    margin-bottom: 0.5rem\n  }\n\n  .sm\\:ml-2 {\n    margin-left: 0.5rem\n  }\n\n  .sm\\:mt-3 {\n    margin-top: 0.75rem\n  }\n\n  .sm\\:mr-3 {\n    margin-right: 0.75rem\n  }\n\n  .sm\\:mb-3 {\n    margin-bottom: 0.75rem\n  }\n\n  .sm\\:ml-3 {\n    margin-left: 0.75rem\n  }\n\n  .sm\\:mt-4 {\n    margin-top: 1rem\n  }\n\n  .sm\\:mr-4 {\n    margin-right: 1rem\n  }\n\n  .sm\\:mb-4 {\n    margin-bottom: 1rem\n  }\n\n  .sm\\:ml-4 {\n    margin-left: 1rem\n  }\n\n  .sm\\:mt-5 {\n    margin-top: 1.25rem\n  }\n\n  .sm\\:mr-5 {\n    margin-right: 1.25rem\n  }\n\n  .sm\\:mb-5 {\n    margin-bottom: 1.25rem\n  }\n\n  .sm\\:ml-5 {\n    margin-left: 1.25rem\n  }\n\n  .sm\\:mt-6 {\n    margin-top: 1.5rem\n  }\n\n  .sm\\:mr-6 {\n    margin-right: 1.5rem\n  }\n\n  .sm\\:mb-6 {\n    margin-bottom: 1.5rem\n  }\n\n  .sm\\:ml-6 {\n    margin-left: 1.5rem\n  }\n\n  .sm\\:mt-8 {\n    margin-top: 2rem\n  }\n\n  .sm\\:mr-8 {\n    margin-right: 2rem\n  }\n\n  .sm\\:mb-8 {\n    margin-bottom: 2rem\n  }\n\n  .sm\\:ml-8 {\n    margin-left: 2rem\n  }\n\n  .sm\\:mt-10 {\n    margin-top: 2.5rem\n  }\n\n  .sm\\:mr-10 {\n    margin-right: 2.5rem\n  }\n\n  .sm\\:mb-10 {\n    margin-bottom: 2.5rem\n  }\n\n  .sm\\:ml-10 {\n    margin-left: 2.5rem\n  }\n\n  .sm\\:mt-12 {\n    margin-top: 3rem\n  }\n\n  .sm\\:mr-12 {\n    margin-right: 3rem\n  }\n\n  .sm\\:mb-12 {\n    margin-bottom: 3rem\n  }\n\n  .sm\\:ml-12 {\n    margin-left: 3rem\n  }\n\n  .sm\\:mt-16 {\n    margin-top: 4rem\n  }\n\n  .sm\\:mr-16 {\n    margin-right: 4rem\n  }\n\n  .sm\\:mb-16 {\n    margin-bottom: 4rem\n  }\n\n  .sm\\:ml-16 {\n    margin-left: 4rem\n  }\n\n  .sm\\:mt-20 {\n    margin-top: 5rem\n  }\n\n  .sm\\:mr-20 {\n    margin-right: 5rem\n  }\n\n  .sm\\:mb-20 {\n    margin-bottom: 5rem\n  }\n\n  .sm\\:ml-20 {\n    margin-left: 5rem\n  }\n\n  .sm\\:mt-24 {\n    margin-top: 6rem\n  }\n\n  .sm\\:mr-24 {\n    margin-right: 6rem\n  }\n\n  .sm\\:mb-24 {\n    margin-bottom: 6rem\n  }\n\n  .sm\\:ml-24 {\n    margin-left: 6rem\n  }\n\n  .sm\\:mt-32 {\n    margin-top: 8rem\n  }\n\n  .sm\\:mr-32 {\n    margin-right: 8rem\n  }\n\n  .sm\\:mb-32 {\n    margin-bottom: 8rem\n  }\n\n  .sm\\:ml-32 {\n    margin-left: 8rem\n  }\n\n  .sm\\:mt-40 {\n    margin-top: 10rem\n  }\n\n  .sm\\:mr-40 {\n    margin-right: 10rem\n  }\n\n  .sm\\:mb-40 {\n    margin-bottom: 10rem\n  }\n\n  .sm\\:ml-40 {\n    margin-left: 10rem\n  }\n\n  .sm\\:mt-48 {\n    margin-top: 12rem\n  }\n\n  .sm\\:mr-48 {\n    margin-right: 12rem\n  }\n\n  .sm\\:mb-48 {\n    margin-bottom: 12rem\n  }\n\n  .sm\\:ml-48 {\n    margin-left: 12rem\n  }\n\n  .sm\\:mt-56 {\n    margin-top: 14rem\n  }\n\n  .sm\\:mr-56 {\n    margin-right: 14rem\n  }\n\n  .sm\\:mb-56 {\n    margin-bottom: 14rem\n  }\n\n  .sm\\:ml-56 {\n    margin-left: 14rem\n  }\n\n  .sm\\:mt-64 {\n    margin-top: 16rem\n  }\n\n  .sm\\:mr-64 {\n    margin-right: 16rem\n  }\n\n  .sm\\:mb-64 {\n    margin-bottom: 16rem\n  }\n\n  .sm\\:ml-64 {\n    margin-left: 16rem\n  }\n\n  .sm\\:mt-auto {\n    margin-top: auto\n  }\n\n  .sm\\:mr-auto {\n    margin-right: auto\n  }\n\n  .sm\\:mb-auto {\n    margin-bottom: auto\n  }\n\n  .sm\\:ml-auto {\n    margin-left: auto\n  }\n\n  .sm\\:mt-px {\n    margin-top: 1px\n  }\n\n  .sm\\:mr-px {\n    margin-right: 1px\n  }\n\n  .sm\\:mb-px {\n    margin-bottom: 1px\n  }\n\n  .sm\\:ml-px {\n    margin-left: 1px\n  }\n\n  .sm\\:-mt-1 {\n    margin-top: -0.25rem\n  }\n\n  .sm\\:-mr-1 {\n    margin-right: -0.25rem\n  }\n\n  .sm\\:-mb-1 {\n    margin-bottom: -0.25rem\n  }\n\n  .sm\\:-ml-1 {\n    margin-left: -0.25rem\n  }\n\n  .sm\\:-mt-2 {\n    margin-top: -0.5rem\n  }\n\n  .sm\\:-mr-2 {\n    margin-right: -0.5rem\n  }\n\n  .sm\\:-mb-2 {\n    margin-bottom: -0.5rem\n  }\n\n  .sm\\:-ml-2 {\n    margin-left: -0.5rem\n  }\n\n  .sm\\:-mt-3 {\n    margin-top: -0.75rem\n  }\n\n  .sm\\:-mr-3 {\n    margin-right: -0.75rem\n  }\n\n  .sm\\:-mb-3 {\n    margin-bottom: -0.75rem\n  }\n\n  .sm\\:-ml-3 {\n    margin-left: -0.75rem\n  }\n\n  .sm\\:-mt-4 {\n    margin-top: -1rem\n  }\n\n  .sm\\:-mr-4 {\n    margin-right: -1rem\n  }\n\n  .sm\\:-mb-4 {\n    margin-bottom: -1rem\n  }\n\n  .sm\\:-ml-4 {\n    margin-left: -1rem\n  }\n\n  .sm\\:-mt-5 {\n    margin-top: -1.25rem\n  }\n\n  .sm\\:-mr-5 {\n    margin-right: -1.25rem\n  }\n\n  .sm\\:-mb-5 {\n    margin-bottom: -1.25rem\n  }\n\n  .sm\\:-ml-5 {\n    margin-left: -1.25rem\n  }\n\n  .sm\\:-mt-6 {\n    margin-top: -1.5rem\n  }\n\n  .sm\\:-mr-6 {\n    margin-right: -1.5rem\n  }\n\n  .sm\\:-mb-6 {\n    margin-bottom: -1.5rem\n  }\n\n  .sm\\:-ml-6 {\n    margin-left: -1.5rem\n  }\n\n  .sm\\:-mt-8 {\n    margin-top: -2rem\n  }\n\n  .sm\\:-mr-8 {\n    margin-right: -2rem\n  }\n\n  .sm\\:-mb-8 {\n    margin-bottom: -2rem\n  }\n\n  .sm\\:-ml-8 {\n    margin-left: -2rem\n  }\n\n  .sm\\:-mt-10 {\n    margin-top: -2.5rem\n  }\n\n  .sm\\:-mr-10 {\n    margin-right: -2.5rem\n  }\n\n  .sm\\:-mb-10 {\n    margin-bottom: -2.5rem\n  }\n\n  .sm\\:-ml-10 {\n    margin-left: -2.5rem\n  }\n\n  .sm\\:-mt-12 {\n    margin-top: -3rem\n  }\n\n  .sm\\:-mr-12 {\n    margin-right: -3rem\n  }\n\n  .sm\\:-mb-12 {\n    margin-bottom: -3rem\n  }\n\n  .sm\\:-ml-12 {\n    margin-left: -3rem\n  }\n\n  .sm\\:-mt-16 {\n    margin-top: -4rem\n  }\n\n  .sm\\:-mr-16 {\n    margin-right: -4rem\n  }\n\n  .sm\\:-mb-16 {\n    margin-bottom: -4rem\n  }\n\n  .sm\\:-ml-16 {\n    margin-left: -4rem\n  }\n\n  .sm\\:-mt-20 {\n    margin-top: -5rem\n  }\n\n  .sm\\:-mr-20 {\n    margin-right: -5rem\n  }\n\n  .sm\\:-mb-20 {\n    margin-bottom: -5rem\n  }\n\n  .sm\\:-ml-20 {\n    margin-left: -5rem\n  }\n\n  .sm\\:-mt-24 {\n    margin-top: -6rem\n  }\n\n  .sm\\:-mr-24 {\n    margin-right: -6rem\n  }\n\n  .sm\\:-mb-24 {\n    margin-bottom: -6rem\n  }\n\n  .sm\\:-ml-24 {\n    margin-left: -6rem\n  }\n\n  .sm\\:-mt-32 {\n    margin-top: -8rem\n  }\n\n  .sm\\:-mr-32 {\n    margin-right: -8rem\n  }\n\n  .sm\\:-mb-32 {\n    margin-bottom: -8rem\n  }\n\n  .sm\\:-ml-32 {\n    margin-left: -8rem\n  }\n\n  .sm\\:-mt-40 {\n    margin-top: -10rem\n  }\n\n  .sm\\:-mr-40 {\n    margin-right: -10rem\n  }\n\n  .sm\\:-mb-40 {\n    margin-bottom: -10rem\n  }\n\n  .sm\\:-ml-40 {\n    margin-left: -10rem\n  }\n\n  .sm\\:-mt-48 {\n    margin-top: -12rem\n  }\n\n  .sm\\:-mr-48 {\n    margin-right: -12rem\n  }\n\n  .sm\\:-mb-48 {\n    margin-bottom: -12rem\n  }\n\n  .sm\\:-ml-48 {\n    margin-left: -12rem\n  }\n\n  .sm\\:-mt-56 {\n    margin-top: -14rem\n  }\n\n  .sm\\:-mr-56 {\n    margin-right: -14rem\n  }\n\n  .sm\\:-mb-56 {\n    margin-bottom: -14rem\n  }\n\n  .sm\\:-ml-56 {\n    margin-left: -14rem\n  }\n\n  .sm\\:-mt-64 {\n    margin-top: -16rem\n  }\n\n  .sm\\:-mr-64 {\n    margin-right: -16rem\n  }\n\n  .sm\\:-mb-64 {\n    margin-bottom: -16rem\n  }\n\n  .sm\\:-ml-64 {\n    margin-left: -16rem\n  }\n\n  .sm\\:-mt-px {\n    margin-top: -1px\n  }\n\n  .sm\\:-mr-px {\n    margin-right: -1px\n  }\n\n  .sm\\:-mb-px {\n    margin-bottom: -1px\n  }\n\n  .sm\\:-ml-px {\n    margin-left: -1px\n  }\n\n  .sm\\:max-h-full {\n    max-height: 100%\n  }\n\n  .sm\\:max-h-screen {\n    max-height: 100vh\n  }\n\n  .sm\\:max-w-xs {\n    max-width: 20rem\n  }\n\n  .sm\\:max-w-sm {\n    max-width: 24rem\n  }\n\n  .sm\\:max-w-md {\n    max-width: 28rem\n  }\n\n  .sm\\:max-w-lg {\n    max-width: 32rem\n  }\n\n  .sm\\:max-w-xl {\n    max-width: 36rem\n  }\n\n  .sm\\:max-w-2xl {\n    max-width: 42rem\n  }\n\n  .sm\\:max-w-3xl {\n    max-width: 48rem\n  }\n\n  .sm\\:max-w-4xl {\n    max-width: 56rem\n  }\n\n  .sm\\:max-w-5xl {\n    max-width: 64rem\n  }\n\n  .sm\\:max-w-6xl {\n    max-width: 72rem\n  }\n\n  .sm\\:max-w-full {\n    max-width: 100%\n  }\n\n  .sm\\:min-h-0 {\n    min-height: 0\n  }\n\n  .sm\\:min-h-full {\n    min-height: 100%\n  }\n\n  .sm\\:min-h-screen {\n    min-height: 100vh\n  }\n\n  .sm\\:min-w-0 {\n    min-width: 0\n  }\n\n  .sm\\:min-w-full {\n    min-width: 100%\n  }\n\n  .sm\\:object-contain {\n    -o-object-fit: contain;\n       object-fit: contain\n  }\n\n  .sm\\:object-cover {\n    -o-object-fit: cover;\n       object-fit: cover\n  }\n\n  .sm\\:object-fill {\n    -o-object-fit: fill;\n       object-fit: fill\n  }\n\n  .sm\\:object-none {\n    -o-object-fit: none;\n       object-fit: none\n  }\n\n  .sm\\:object-scale-down {\n    -o-object-fit: scale-down;\n       object-fit: scale-down\n  }\n\n  .sm\\:object-bottom {\n    -o-object-position: bottom;\n       object-position: bottom\n  }\n\n  .sm\\:object-center {\n    -o-object-position: center;\n       object-position: center\n  }\n\n  .sm\\:object-left {\n    -o-object-position: left;\n       object-position: left\n  }\n\n  .sm\\:object-left-bottom {\n    -o-object-position: left bottom;\n       object-position: left bottom\n  }\n\n  .sm\\:object-left-top {\n    -o-object-position: left top;\n       object-position: left top\n  }\n\n  .sm\\:object-right {\n    -o-object-position: right;\n       object-position: right\n  }\n\n  .sm\\:object-right-bottom {\n    -o-object-position: right bottom;\n       object-position: right bottom\n  }\n\n  .sm\\:object-right-top {\n    -o-object-position: right top;\n       object-position: right top\n  }\n\n  .sm\\:object-top {\n    -o-object-position: top;\n       object-position: top\n  }\n\n  .sm\\:opacity-0 {\n    opacity: 0\n  }\n\n  .sm\\:opacity-25 {\n    opacity: 0.25\n  }\n\n  .sm\\:opacity-50 {\n    opacity: 0.5\n  }\n\n  .sm\\:opacity-75 {\n    opacity: 0.75\n  }\n\n  .sm\\:opacity-100 {\n    opacity: 1\n  }\n\n  .sm\\:hover\\:opacity-0:hover {\n    opacity: 0\n  }\n\n  .sm\\:hover\\:opacity-25:hover {\n    opacity: 0.25\n  }\n\n  .sm\\:hover\\:opacity-50:hover {\n    opacity: 0.5\n  }\n\n  .sm\\:hover\\:opacity-75:hover {\n    opacity: 0.75\n  }\n\n  .sm\\:hover\\:opacity-100:hover {\n    opacity: 1\n  }\n\n  .sm\\:focus\\:opacity-0:focus {\n    opacity: 0\n  }\n\n  .sm\\:focus\\:opacity-25:focus {\n    opacity: 0.25\n  }\n\n  .sm\\:focus\\:opacity-50:focus {\n    opacity: 0.5\n  }\n\n  .sm\\:focus\\:opacity-75:focus {\n    opacity: 0.75\n  }\n\n  .sm\\:focus\\:opacity-100:focus {\n    opacity: 1\n  }\n\n  .sm\\:outline-none {\n    outline: 0\n  }\n\n  .sm\\:focus\\:outline-none:focus {\n    outline: 0\n  }\n\n  .sm\\:overflow-auto {\n    overflow: auto\n  }\n\n  .sm\\:overflow-hidden {\n    overflow: hidden\n  }\n\n  .sm\\:overflow-visible {\n    overflow: visible\n  }\n\n  .sm\\:overflow-scroll {\n    overflow: scroll\n  }\n\n  .sm\\:overflow-x-auto {\n    overflow-x: auto\n  }\n\n  .sm\\:overflow-y-auto {\n    overflow-y: auto\n  }\n\n  .sm\\:overflow-x-hidden {\n    overflow-x: hidden\n  }\n\n  .sm\\:overflow-y-hidden {\n    overflow-y: hidden\n  }\n\n  .sm\\:overflow-x-visible {\n    overflow-x: visible\n  }\n\n  .sm\\:overflow-y-visible {\n    overflow-y: visible\n  }\n\n  .sm\\:overflow-x-scroll {\n    overflow-x: scroll\n  }\n\n  .sm\\:overflow-y-scroll {\n    overflow-y: scroll\n  }\n\n  .sm\\:scrolling-touch {\n    -webkit-overflow-scrolling: touch\n  }\n\n  .sm\\:scrolling-auto {\n    -webkit-overflow-scrolling: auto\n  }\n\n  .sm\\:p-0 {\n    padding: 0\n  }\n\n  .sm\\:p-1 {\n    padding: 0.25rem\n  }\n\n  .sm\\:p-2 {\n    padding: 0.5rem\n  }\n\n  .sm\\:p-3 {\n    padding: 0.75rem\n  }\n\n  .sm\\:p-4 {\n    padding: 1rem\n  }\n\n  .sm\\:p-5 {\n    padding: 1.25rem\n  }\n\n  .sm\\:p-6 {\n    padding: 1.5rem\n  }\n\n  .sm\\:p-8 {\n    padding: 2rem\n  }\n\n  .sm\\:p-10 {\n    padding: 2.5rem\n  }\n\n  .sm\\:p-12 {\n    padding: 3rem\n  }\n\n  .sm\\:p-16 {\n    padding: 4rem\n  }\n\n  .sm\\:p-20 {\n    padding: 5rem\n  }\n\n  .sm\\:p-24 {\n    padding: 6rem\n  }\n\n  .sm\\:p-32 {\n    padding: 8rem\n  }\n\n  .sm\\:p-40 {\n    padding: 10rem\n  }\n\n  .sm\\:p-48 {\n    padding: 12rem\n  }\n\n  .sm\\:p-56 {\n    padding: 14rem\n  }\n\n  .sm\\:p-64 {\n    padding: 16rem\n  }\n\n  .sm\\:p-px {\n    padding: 1px\n  }\n\n  .sm\\:py-0 {\n    padding-top: 0;\n    padding-bottom: 0\n  }\n\n  .sm\\:px-0 {\n    padding-left: 0;\n    padding-right: 0\n  }\n\n  .sm\\:py-1 {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem\n  }\n\n  .sm\\:px-1 {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem\n  }\n\n  .sm\\:py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem\n  }\n\n  .sm\\:px-2 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem\n  }\n\n  .sm\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem\n  }\n\n  .sm\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem\n  }\n\n  .sm\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem\n  }\n\n  .sm\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem\n  }\n\n  .sm\\:py-5 {\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem\n  }\n\n  .sm\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem\n  }\n\n  .sm\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem\n  }\n\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem\n  }\n\n  .sm\\:py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem\n  }\n\n  .sm\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem\n  }\n\n  .sm\\:py-10 {\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem\n  }\n\n  .sm\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem\n  }\n\n  .sm\\:py-12 {\n    padding-top: 3rem;\n    padding-bottom: 3rem\n  }\n\n  .sm\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem\n  }\n\n  .sm\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem\n  }\n\n  .sm\\:px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem\n  }\n\n  .sm\\:py-20 {\n    padding-top: 5rem;\n    padding-bottom: 5rem\n  }\n\n  .sm\\:px-20 {\n    padding-left: 5rem;\n    padding-right: 5rem\n  }\n\n  .sm\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem\n  }\n\n  .sm\\:px-24 {\n    padding-left: 6rem;\n    padding-right: 6rem\n  }\n\n  .sm\\:py-32 {\n    padding-top: 8rem;\n    padding-bottom: 8rem\n  }\n\n  .sm\\:px-32 {\n    padding-left: 8rem;\n    padding-right: 8rem\n  }\n\n  .sm\\:py-40 {\n    padding-top: 10rem;\n    padding-bottom: 10rem\n  }\n\n  .sm\\:px-40 {\n    padding-left: 10rem;\n    padding-right: 10rem\n  }\n\n  .sm\\:py-48 {\n    padding-top: 12rem;\n    padding-bottom: 12rem\n  }\n\n  .sm\\:px-48 {\n    padding-left: 12rem;\n    padding-right: 12rem\n  }\n\n  .sm\\:py-56 {\n    padding-top: 14rem;\n    padding-bottom: 14rem\n  }\n\n  .sm\\:px-56 {\n    padding-left: 14rem;\n    padding-right: 14rem\n  }\n\n  .sm\\:py-64 {\n    padding-top: 16rem;\n    padding-bottom: 16rem\n  }\n\n  .sm\\:px-64 {\n    padding-left: 16rem;\n    padding-right: 16rem\n  }\n\n  .sm\\:py-px {\n    padding-top: 1px;\n    padding-bottom: 1px\n  }\n\n  .sm\\:px-px {\n    padding-left: 1px;\n    padding-right: 1px\n  }\n\n  .sm\\:pt-0 {\n    padding-top: 0\n  }\n\n  .sm\\:pr-0 {\n    padding-right: 0\n  }\n\n  .sm\\:pb-0 {\n    padding-bottom: 0\n  }\n\n  .sm\\:pl-0 {\n    padding-left: 0\n  }\n\n  .sm\\:pt-1 {\n    padding-top: 0.25rem\n  }\n\n  .sm\\:pr-1 {\n    padding-right: 0.25rem\n  }\n\n  .sm\\:pb-1 {\n    padding-bottom: 0.25rem\n  }\n\n  .sm\\:pl-1 {\n    padding-left: 0.25rem\n  }\n\n  .sm\\:pt-2 {\n    padding-top: 0.5rem\n  }\n\n  .sm\\:pr-2 {\n    padding-right: 0.5rem\n  }\n\n  .sm\\:pb-2 {\n    padding-bottom: 0.5rem\n  }\n\n  .sm\\:pl-2 {\n    padding-left: 0.5rem\n  }\n\n  .sm\\:pt-3 {\n    padding-top: 0.75rem\n  }\n\n  .sm\\:pr-3 {\n    padding-right: 0.75rem\n  }\n\n  .sm\\:pb-3 {\n    padding-bottom: 0.75rem\n  }\n\n  .sm\\:pl-3 {\n    padding-left: 0.75rem\n  }\n\n  .sm\\:pt-4 {\n    padding-top: 1rem\n  }\n\n  .sm\\:pr-4 {\n    padding-right: 1rem\n  }\n\n  .sm\\:pb-4 {\n    padding-bottom: 1rem\n  }\n\n  .sm\\:pl-4 {\n    padding-left: 1rem\n  }\n\n  .sm\\:pt-5 {\n    padding-top: 1.25rem\n  }\n\n  .sm\\:pr-5 {\n    padding-right: 1.25rem\n  }\n\n  .sm\\:pb-5 {\n    padding-bottom: 1.25rem\n  }\n\n  .sm\\:pl-5 {\n    padding-left: 1.25rem\n  }\n\n  .sm\\:pt-6 {\n    padding-top: 1.5rem\n  }\n\n  .sm\\:pr-6 {\n    padding-right: 1.5rem\n  }\n\n  .sm\\:pb-6 {\n    padding-bottom: 1.5rem\n  }\n\n  .sm\\:pl-6 {\n    padding-left: 1.5rem\n  }\n\n  .sm\\:pt-8 {\n    padding-top: 2rem\n  }\n\n  .sm\\:pr-8 {\n    padding-right: 2rem\n  }\n\n  .sm\\:pb-8 {\n    padding-bottom: 2rem\n  }\n\n  .sm\\:pl-8 {\n    padding-left: 2rem\n  }\n\n  .sm\\:pt-10 {\n    padding-top: 2.5rem\n  }\n\n  .sm\\:pr-10 {\n    padding-right: 2.5rem\n  }\n\n  .sm\\:pb-10 {\n    padding-bottom: 2.5rem\n  }\n\n  .sm\\:pl-10 {\n    padding-left: 2.5rem\n  }\n\n  .sm\\:pt-12 {\n    padding-top: 3rem\n  }\n\n  .sm\\:pr-12 {\n    padding-right: 3rem\n  }\n\n  .sm\\:pb-12 {\n    padding-bottom: 3rem\n  }\n\n  .sm\\:pl-12 {\n    padding-left: 3rem\n  }\n\n  .sm\\:pt-16 {\n    padding-top: 4rem\n  }\n\n  .sm\\:pr-16 {\n    padding-right: 4rem\n  }\n\n  .sm\\:pb-16 {\n    padding-bottom: 4rem\n  }\n\n  .sm\\:pl-16 {\n    padding-left: 4rem\n  }\n\n  .sm\\:pt-20 {\n    padding-top: 5rem\n  }\n\n  .sm\\:pr-20 {\n    padding-right: 5rem\n  }\n\n  .sm\\:pb-20 {\n    padding-bottom: 5rem\n  }\n\n  .sm\\:pl-20 {\n    padding-left: 5rem\n  }\n\n  .sm\\:pt-24 {\n    padding-top: 6rem\n  }\n\n  .sm\\:pr-24 {\n    padding-right: 6rem\n  }\n\n  .sm\\:pb-24 {\n    padding-bottom: 6rem\n  }\n\n  .sm\\:pl-24 {\n    padding-left: 6rem\n  }\n\n  .sm\\:pt-32 {\n    padding-top: 8rem\n  }\n\n  .sm\\:pr-32 {\n    padding-right: 8rem\n  }\n\n  .sm\\:pb-32 {\n    padding-bottom: 8rem\n  }\n\n  .sm\\:pl-32 {\n    padding-left: 8rem\n  }\n\n  .sm\\:pt-40 {\n    padding-top: 10rem\n  }\n\n  .sm\\:pr-40 {\n    padding-right: 10rem\n  }\n\n  .sm\\:pb-40 {\n    padding-bottom: 10rem\n  }\n\n  .sm\\:pl-40 {\n    padding-left: 10rem\n  }\n\n  .sm\\:pt-48 {\n    padding-top: 12rem\n  }\n\n  .sm\\:pr-48 {\n    padding-right: 12rem\n  }\n\n  .sm\\:pb-48 {\n    padding-bottom: 12rem\n  }\n\n  .sm\\:pl-48 {\n    padding-left: 12rem\n  }\n\n  .sm\\:pt-56 {\n    padding-top: 14rem\n  }\n\n  .sm\\:pr-56 {\n    padding-right: 14rem\n  }\n\n  .sm\\:pb-56 {\n    padding-bottom: 14rem\n  }\n\n  .sm\\:pl-56 {\n    padding-left: 14rem\n  }\n\n  .sm\\:pt-64 {\n    padding-top: 16rem\n  }\n\n  .sm\\:pr-64 {\n    padding-right: 16rem\n  }\n\n  .sm\\:pb-64 {\n    padding-bottom: 16rem\n  }\n\n  .sm\\:pl-64 {\n    padding-left: 16rem\n  }\n\n  .sm\\:pt-px {\n    padding-top: 1px\n  }\n\n  .sm\\:pr-px {\n    padding-right: 1px\n  }\n\n  .sm\\:pb-px {\n    padding-bottom: 1px\n  }\n\n  .sm\\:pl-px {\n    padding-left: 1px\n  }\n\n  .sm\\:placeholder-transparent:-ms-input-placeholder {\n    color: transparent\n  }\n\n  .sm\\:placeholder-transparent::-ms-input-placeholder {\n    color: transparent\n  }\n\n  .sm\\:placeholder-transparent::placeholder {\n    color: transparent\n  }\n\n  .sm\\:placeholder-black:-ms-input-placeholder {\n    color: #000\n  }\n\n  .sm\\:placeholder-black::-ms-input-placeholder {\n    color: #000\n  }\n\n  .sm\\:placeholder-black::placeholder {\n    color: #000\n  }\n\n  .sm\\:placeholder-white:-ms-input-placeholder {\n    color: #fff\n  }\n\n  .sm\\:placeholder-white::-ms-input-placeholder {\n    color: #fff\n  }\n\n  .sm\\:placeholder-white::placeholder {\n    color: #fff\n  }\n\n  .sm\\:placeholder-gray-100:-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .sm\\:placeholder-gray-100::-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .sm\\:placeholder-gray-100::placeholder {\n    color: #f7fafc\n  }\n\n  .sm\\:placeholder-gray-200:-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .sm\\:placeholder-gray-200::-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .sm\\:placeholder-gray-200::placeholder {\n    color: #edf2f7\n  }\n\n  .sm\\:placeholder-gray-300:-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .sm\\:placeholder-gray-300::-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .sm\\:placeholder-gray-300::placeholder {\n    color: #e2e8f0\n  }\n\n  .sm\\:placeholder-gray-400:-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .sm\\:placeholder-gray-400::-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .sm\\:placeholder-gray-400::placeholder {\n    color: #cbd5e0\n  }\n\n  .sm\\:placeholder-gray-500:-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .sm\\:placeholder-gray-500::-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .sm\\:placeholder-gray-500::placeholder {\n    color: #a0aec0\n  }\n\n  .sm\\:placeholder-gray-600:-ms-input-placeholder {\n    color: #718096\n  }\n\n  .sm\\:placeholder-gray-600::-ms-input-placeholder {\n    color: #718096\n  }\n\n  .sm\\:placeholder-gray-600::placeholder {\n    color: #718096\n  }\n\n  .sm\\:placeholder-gray-700:-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .sm\\:placeholder-gray-700::-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .sm\\:placeholder-gray-700::placeholder {\n    color: #4a5568\n  }\n\n  .sm\\:placeholder-gray-800:-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .sm\\:placeholder-gray-800::-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .sm\\:placeholder-gray-800::placeholder {\n    color: #2d3748\n  }\n\n  .sm\\:placeholder-gray-900:-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .sm\\:placeholder-gray-900::-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .sm\\:placeholder-gray-900::placeholder {\n    color: #1a202c\n  }\n\n  .sm\\:placeholder-red-100:-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .sm\\:placeholder-red-100::-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .sm\\:placeholder-red-100::placeholder {\n    color: #fff5f5\n  }\n\n  .sm\\:placeholder-red-200:-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .sm\\:placeholder-red-200::-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .sm\\:placeholder-red-200::placeholder {\n    color: #fed7d7\n  }\n\n  .sm\\:placeholder-red-300:-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .sm\\:placeholder-red-300::-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .sm\\:placeholder-red-300::placeholder {\n    color: #feb2b2\n  }\n\n  .sm\\:placeholder-red-400:-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .sm\\:placeholder-red-400::-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .sm\\:placeholder-red-400::placeholder {\n    color: #fc8181\n  }\n\n  .sm\\:placeholder-red-500:-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .sm\\:placeholder-red-500::-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .sm\\:placeholder-red-500::placeholder {\n    color: #f56565\n  }\n\n  .sm\\:placeholder-red-600:-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .sm\\:placeholder-red-600::-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .sm\\:placeholder-red-600::placeholder {\n    color: #e53e3e\n  }\n\n  .sm\\:placeholder-red-700:-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .sm\\:placeholder-red-700::-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .sm\\:placeholder-red-700::placeholder {\n    color: #c53030\n  }\n\n  .sm\\:placeholder-red-800:-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .sm\\:placeholder-red-800::-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .sm\\:placeholder-red-800::placeholder {\n    color: #9b2c2c\n  }\n\n  .sm\\:placeholder-red-900:-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .sm\\:placeholder-red-900::-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .sm\\:placeholder-red-900::placeholder {\n    color: #742a2a\n  }\n\n  .sm\\:placeholder-orange-100:-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .sm\\:placeholder-orange-100::-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .sm\\:placeholder-orange-100::placeholder {\n    color: #fffaf0\n  }\n\n  .sm\\:placeholder-orange-200:-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .sm\\:placeholder-orange-200::-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .sm\\:placeholder-orange-200::placeholder {\n    color: #feebc8\n  }\n\n  .sm\\:placeholder-orange-300:-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .sm\\:placeholder-orange-300::-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .sm\\:placeholder-orange-300::placeholder {\n    color: #fbd38d\n  }\n\n  .sm\\:placeholder-orange-400:-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .sm\\:placeholder-orange-400::-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .sm\\:placeholder-orange-400::placeholder {\n    color: #f6ad55\n  }\n\n  .sm\\:placeholder-orange-500:-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .sm\\:placeholder-orange-500::-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .sm\\:placeholder-orange-500::placeholder {\n    color: #ed8936\n  }\n\n  .sm\\:placeholder-orange-600:-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .sm\\:placeholder-orange-600::-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .sm\\:placeholder-orange-600::placeholder {\n    color: #dd6b20\n  }\n\n  .sm\\:placeholder-orange-700:-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .sm\\:placeholder-orange-700::-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .sm\\:placeholder-orange-700::placeholder {\n    color: #c05621\n  }\n\n  .sm\\:placeholder-orange-800:-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .sm\\:placeholder-orange-800::-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .sm\\:placeholder-orange-800::placeholder {\n    color: #9c4221\n  }\n\n  .sm\\:placeholder-orange-900:-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .sm\\:placeholder-orange-900::-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .sm\\:placeholder-orange-900::placeholder {\n    color: #7b341e\n  }\n\n  .sm\\:placeholder-yellow-100:-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .sm\\:placeholder-yellow-100::-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .sm\\:placeholder-yellow-100::placeholder {\n    color: #fffff0\n  }\n\n  .sm\\:placeholder-yellow-200:-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .sm\\:placeholder-yellow-200::-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .sm\\:placeholder-yellow-200::placeholder {\n    color: #fefcbf\n  }\n\n  .sm\\:placeholder-yellow-300:-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .sm\\:placeholder-yellow-300::-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .sm\\:placeholder-yellow-300::placeholder {\n    color: #faf089\n  }\n\n  .sm\\:placeholder-yellow-400:-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .sm\\:placeholder-yellow-400::-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .sm\\:placeholder-yellow-400::placeholder {\n    color: #f6e05e\n  }\n\n  .sm\\:placeholder-yellow-500:-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .sm\\:placeholder-yellow-500::-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .sm\\:placeholder-yellow-500::placeholder {\n    color: #ecc94b\n  }\n\n  .sm\\:placeholder-yellow-600:-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .sm\\:placeholder-yellow-600::-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .sm\\:placeholder-yellow-600::placeholder {\n    color: #d69e2e\n  }\n\n  .sm\\:placeholder-yellow-700:-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .sm\\:placeholder-yellow-700::-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .sm\\:placeholder-yellow-700::placeholder {\n    color: #b7791f\n  }\n\n  .sm\\:placeholder-yellow-800:-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .sm\\:placeholder-yellow-800::-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .sm\\:placeholder-yellow-800::placeholder {\n    color: #975a16\n  }\n\n  .sm\\:placeholder-yellow-900:-ms-input-placeholder {\n    color: #744210\n  }\n\n  .sm\\:placeholder-yellow-900::-ms-input-placeholder {\n    color: #744210\n  }\n\n  .sm\\:placeholder-yellow-900::placeholder {\n    color: #744210\n  }\n\n  .sm\\:placeholder-green-100:-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .sm\\:placeholder-green-100::-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .sm\\:placeholder-green-100::placeholder {\n    color: #f0fff4\n  }\n\n  .sm\\:placeholder-green-200:-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .sm\\:placeholder-green-200::-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .sm\\:placeholder-green-200::placeholder {\n    color: #c6f6d5\n  }\n\n  .sm\\:placeholder-green-300:-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .sm\\:placeholder-green-300::-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .sm\\:placeholder-green-300::placeholder {\n    color: #9ae6b4\n  }\n\n  .sm\\:placeholder-green-400:-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .sm\\:placeholder-green-400::-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .sm\\:placeholder-green-400::placeholder {\n    color: #68d391\n  }\n\n  .sm\\:placeholder-green-500:-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .sm\\:placeholder-green-500::-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .sm\\:placeholder-green-500::placeholder {\n    color: #48bb78\n  }\n\n  .sm\\:placeholder-green-600:-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .sm\\:placeholder-green-600::-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .sm\\:placeholder-green-600::placeholder {\n    color: #38a169\n  }\n\n  .sm\\:placeholder-green-700:-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .sm\\:placeholder-green-700::-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .sm\\:placeholder-green-700::placeholder {\n    color: #2f855a\n  }\n\n  .sm\\:placeholder-green-800:-ms-input-placeholder {\n    color: #276749\n  }\n\n  .sm\\:placeholder-green-800::-ms-input-placeholder {\n    color: #276749\n  }\n\n  .sm\\:placeholder-green-800::placeholder {\n    color: #276749\n  }\n\n  .sm\\:placeholder-green-900:-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .sm\\:placeholder-green-900::-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .sm\\:placeholder-green-900::placeholder {\n    color: #22543d\n  }\n\n  .sm\\:placeholder-teal-100:-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .sm\\:placeholder-teal-100::-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .sm\\:placeholder-teal-100::placeholder {\n    color: #e6fffa\n  }\n\n  .sm\\:placeholder-teal-200:-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .sm\\:placeholder-teal-200::-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .sm\\:placeholder-teal-200::placeholder {\n    color: #b2f5ea\n  }\n\n  .sm\\:placeholder-teal-300:-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .sm\\:placeholder-teal-300::-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .sm\\:placeholder-teal-300::placeholder {\n    color: #81e6d9\n  }\n\n  .sm\\:placeholder-teal-400:-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .sm\\:placeholder-teal-400::-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .sm\\:placeholder-teal-400::placeholder {\n    color: #4fd1c5\n  }\n\n  .sm\\:placeholder-teal-500:-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .sm\\:placeholder-teal-500::-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .sm\\:placeholder-teal-500::placeholder {\n    color: #38b2ac\n  }\n\n  .sm\\:placeholder-teal-600:-ms-input-placeholder {\n    color: #319795\n  }\n\n  .sm\\:placeholder-teal-600::-ms-input-placeholder {\n    color: #319795\n  }\n\n  .sm\\:placeholder-teal-600::placeholder {\n    color: #319795\n  }\n\n  .sm\\:placeholder-teal-700:-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .sm\\:placeholder-teal-700::-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .sm\\:placeholder-teal-700::placeholder {\n    color: #2c7a7b\n  }\n\n  .sm\\:placeholder-teal-800:-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .sm\\:placeholder-teal-800::-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .sm\\:placeholder-teal-800::placeholder {\n    color: #285e61\n  }\n\n  .sm\\:placeholder-teal-900:-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .sm\\:placeholder-teal-900::-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .sm\\:placeholder-teal-900::placeholder {\n    color: #234e52\n  }\n\n  .sm\\:placeholder-blue-100:-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .sm\\:placeholder-blue-100::-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .sm\\:placeholder-blue-100::placeholder {\n    color: #ebf8ff\n  }\n\n  .sm\\:placeholder-blue-200:-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .sm\\:placeholder-blue-200::-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .sm\\:placeholder-blue-200::placeholder {\n    color: #bee3f8\n  }\n\n  .sm\\:placeholder-blue-300:-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .sm\\:placeholder-blue-300::-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .sm\\:placeholder-blue-300::placeholder {\n    color: #90cdf4\n  }\n\n  .sm\\:placeholder-blue-400:-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .sm\\:placeholder-blue-400::-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .sm\\:placeholder-blue-400::placeholder {\n    color: #63b3ed\n  }\n\n  .sm\\:placeholder-blue-500:-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .sm\\:placeholder-blue-500::-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .sm\\:placeholder-blue-500::placeholder {\n    color: #4299e1\n  }\n\n  .sm\\:placeholder-blue-600:-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .sm\\:placeholder-blue-600::-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .sm\\:placeholder-blue-600::placeholder {\n    color: #3182ce\n  }\n\n  .sm\\:placeholder-blue-700:-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .sm\\:placeholder-blue-700::-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .sm\\:placeholder-blue-700::placeholder {\n    color: #2b6cb0\n  }\n\n  .sm\\:placeholder-blue-800:-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .sm\\:placeholder-blue-800::-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .sm\\:placeholder-blue-800::placeholder {\n    color: #2c5282\n  }\n\n  .sm\\:placeholder-blue-900:-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .sm\\:placeholder-blue-900::-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .sm\\:placeholder-blue-900::placeholder {\n    color: #2a4365\n  }\n\n  .sm\\:placeholder-indigo-100:-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .sm\\:placeholder-indigo-100::-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .sm\\:placeholder-indigo-100::placeholder {\n    color: #ebf4ff\n  }\n\n  .sm\\:placeholder-indigo-200:-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .sm\\:placeholder-indigo-200::-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .sm\\:placeholder-indigo-200::placeholder {\n    color: #c3dafe\n  }\n\n  .sm\\:placeholder-indigo-300:-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .sm\\:placeholder-indigo-300::-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .sm\\:placeholder-indigo-300::placeholder {\n    color: #a3bffa\n  }\n\n  .sm\\:placeholder-indigo-400:-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .sm\\:placeholder-indigo-400::-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .sm\\:placeholder-indigo-400::placeholder {\n    color: #7f9cf5\n  }\n\n  .sm\\:placeholder-indigo-500:-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .sm\\:placeholder-indigo-500::-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .sm\\:placeholder-indigo-500::placeholder {\n    color: #667eea\n  }\n\n  .sm\\:placeholder-indigo-600:-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .sm\\:placeholder-indigo-600::-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .sm\\:placeholder-indigo-600::placeholder {\n    color: #5a67d8\n  }\n\n  .sm\\:placeholder-indigo-700:-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .sm\\:placeholder-indigo-700::-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .sm\\:placeholder-indigo-700::placeholder {\n    color: #4c51bf\n  }\n\n  .sm\\:placeholder-indigo-800:-ms-input-placeholder {\n    color: #434190\n  }\n\n  .sm\\:placeholder-indigo-800::-ms-input-placeholder {\n    color: #434190\n  }\n\n  .sm\\:placeholder-indigo-800::placeholder {\n    color: #434190\n  }\n\n  .sm\\:placeholder-indigo-900:-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .sm\\:placeholder-indigo-900::-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .sm\\:placeholder-indigo-900::placeholder {\n    color: #3c366b\n  }\n\n  .sm\\:placeholder-purple-100:-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .sm\\:placeholder-purple-100::-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .sm\\:placeholder-purple-100::placeholder {\n    color: #faf5ff\n  }\n\n  .sm\\:placeholder-purple-200:-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .sm\\:placeholder-purple-200::-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .sm\\:placeholder-purple-200::placeholder {\n    color: #e9d8fd\n  }\n\n  .sm\\:placeholder-purple-300:-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .sm\\:placeholder-purple-300::-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .sm\\:placeholder-purple-300::placeholder {\n    color: #d6bcfa\n  }\n\n  .sm\\:placeholder-purple-400:-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .sm\\:placeholder-purple-400::-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .sm\\:placeholder-purple-400::placeholder {\n    color: #b794f4\n  }\n\n  .sm\\:placeholder-purple-500:-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .sm\\:placeholder-purple-500::-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .sm\\:placeholder-purple-500::placeholder {\n    color: #9f7aea\n  }\n\n  .sm\\:placeholder-purple-600:-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .sm\\:placeholder-purple-600::-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .sm\\:placeholder-purple-600::placeholder {\n    color: #805ad5\n  }\n\n  .sm\\:placeholder-purple-700:-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .sm\\:placeholder-purple-700::-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .sm\\:placeholder-purple-700::placeholder {\n    color: #6b46c1\n  }\n\n  .sm\\:placeholder-purple-800:-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .sm\\:placeholder-purple-800::-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .sm\\:placeholder-purple-800::placeholder {\n    color: #553c9a\n  }\n\n  .sm\\:placeholder-purple-900:-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .sm\\:placeholder-purple-900::-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .sm\\:placeholder-purple-900::placeholder {\n    color: #44337a\n  }\n\n  .sm\\:placeholder-pink-100:-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .sm\\:placeholder-pink-100::-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .sm\\:placeholder-pink-100::placeholder {\n    color: #fff5f7\n  }\n\n  .sm\\:placeholder-pink-200:-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .sm\\:placeholder-pink-200::-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .sm\\:placeholder-pink-200::placeholder {\n    color: #fed7e2\n  }\n\n  .sm\\:placeholder-pink-300:-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .sm\\:placeholder-pink-300::-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .sm\\:placeholder-pink-300::placeholder {\n    color: #fbb6ce\n  }\n\n  .sm\\:placeholder-pink-400:-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .sm\\:placeholder-pink-400::-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .sm\\:placeholder-pink-400::placeholder {\n    color: #f687b3\n  }\n\n  .sm\\:placeholder-pink-500:-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .sm\\:placeholder-pink-500::-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .sm\\:placeholder-pink-500::placeholder {\n    color: #ed64a6\n  }\n\n  .sm\\:placeholder-pink-600:-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .sm\\:placeholder-pink-600::-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .sm\\:placeholder-pink-600::placeholder {\n    color: #d53f8c\n  }\n\n  .sm\\:placeholder-pink-700:-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .sm\\:placeholder-pink-700::-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .sm\\:placeholder-pink-700::placeholder {\n    color: #b83280\n  }\n\n  .sm\\:placeholder-pink-800:-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .sm\\:placeholder-pink-800::-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .sm\\:placeholder-pink-800::placeholder {\n    color: #97266d\n  }\n\n  .sm\\:placeholder-pink-900:-ms-input-placeholder {\n    color: #702459\n  }\n\n  .sm\\:placeholder-pink-900::-ms-input-placeholder {\n    color: #702459\n  }\n\n  .sm\\:placeholder-pink-900::placeholder {\n    color: #702459\n  }\n\n  .sm\\:focus\\:placeholder-transparent:focus:-ms-input-placeholder {\n    color: transparent\n  }\n\n  .sm\\:focus\\:placeholder-transparent:focus::-ms-input-placeholder {\n    color: transparent\n  }\n\n  .sm\\:focus\\:placeholder-transparent:focus::placeholder {\n    color: transparent\n  }\n\n  .sm\\:focus\\:placeholder-black:focus:-ms-input-placeholder {\n    color: #000\n  }\n\n  .sm\\:focus\\:placeholder-black:focus::-ms-input-placeholder {\n    color: #000\n  }\n\n  .sm\\:focus\\:placeholder-black:focus::placeholder {\n    color: #000\n  }\n\n  .sm\\:focus\\:placeholder-white:focus:-ms-input-placeholder {\n    color: #fff\n  }\n\n  .sm\\:focus\\:placeholder-white:focus::-ms-input-placeholder {\n    color: #fff\n  }\n\n  .sm\\:focus\\:placeholder-white:focus::placeholder {\n    color: #fff\n  }\n\n  .sm\\:focus\\:placeholder-gray-100:focus:-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .sm\\:focus\\:placeholder-gray-100:focus::-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .sm\\:focus\\:placeholder-gray-100:focus::placeholder {\n    color: #f7fafc\n  }\n\n  .sm\\:focus\\:placeholder-gray-200:focus:-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .sm\\:focus\\:placeholder-gray-200:focus::-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .sm\\:focus\\:placeholder-gray-200:focus::placeholder {\n    color: #edf2f7\n  }\n\n  .sm\\:focus\\:placeholder-gray-300:focus:-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .sm\\:focus\\:placeholder-gray-300:focus::-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .sm\\:focus\\:placeholder-gray-300:focus::placeholder {\n    color: #e2e8f0\n  }\n\n  .sm\\:focus\\:placeholder-gray-400:focus:-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .sm\\:focus\\:placeholder-gray-400:focus::-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .sm\\:focus\\:placeholder-gray-400:focus::placeholder {\n    color: #cbd5e0\n  }\n\n  .sm\\:focus\\:placeholder-gray-500:focus:-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .sm\\:focus\\:placeholder-gray-500:focus::-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .sm\\:focus\\:placeholder-gray-500:focus::placeholder {\n    color: #a0aec0\n  }\n\n  .sm\\:focus\\:placeholder-gray-600:focus:-ms-input-placeholder {\n    color: #718096\n  }\n\n  .sm\\:focus\\:placeholder-gray-600:focus::-ms-input-placeholder {\n    color: #718096\n  }\n\n  .sm\\:focus\\:placeholder-gray-600:focus::placeholder {\n    color: #718096\n  }\n\n  .sm\\:focus\\:placeholder-gray-700:focus:-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .sm\\:focus\\:placeholder-gray-700:focus::-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .sm\\:focus\\:placeholder-gray-700:focus::placeholder {\n    color: #4a5568\n  }\n\n  .sm\\:focus\\:placeholder-gray-800:focus:-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .sm\\:focus\\:placeholder-gray-800:focus::-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .sm\\:focus\\:placeholder-gray-800:focus::placeholder {\n    color: #2d3748\n  }\n\n  .sm\\:focus\\:placeholder-gray-900:focus:-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .sm\\:focus\\:placeholder-gray-900:focus::-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .sm\\:focus\\:placeholder-gray-900:focus::placeholder {\n    color: #1a202c\n  }\n\n  .sm\\:focus\\:placeholder-red-100:focus:-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .sm\\:focus\\:placeholder-red-100:focus::-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .sm\\:focus\\:placeholder-red-100:focus::placeholder {\n    color: #fff5f5\n  }\n\n  .sm\\:focus\\:placeholder-red-200:focus:-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .sm\\:focus\\:placeholder-red-200:focus::-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .sm\\:focus\\:placeholder-red-200:focus::placeholder {\n    color: #fed7d7\n  }\n\n  .sm\\:focus\\:placeholder-red-300:focus:-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .sm\\:focus\\:placeholder-red-300:focus::-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .sm\\:focus\\:placeholder-red-300:focus::placeholder {\n    color: #feb2b2\n  }\n\n  .sm\\:focus\\:placeholder-red-400:focus:-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .sm\\:focus\\:placeholder-red-400:focus::-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .sm\\:focus\\:placeholder-red-400:focus::placeholder {\n    color: #fc8181\n  }\n\n  .sm\\:focus\\:placeholder-red-500:focus:-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .sm\\:focus\\:placeholder-red-500:focus::-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .sm\\:focus\\:placeholder-red-500:focus::placeholder {\n    color: #f56565\n  }\n\n  .sm\\:focus\\:placeholder-red-600:focus:-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .sm\\:focus\\:placeholder-red-600:focus::-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .sm\\:focus\\:placeholder-red-600:focus::placeholder {\n    color: #e53e3e\n  }\n\n  .sm\\:focus\\:placeholder-red-700:focus:-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .sm\\:focus\\:placeholder-red-700:focus::-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .sm\\:focus\\:placeholder-red-700:focus::placeholder {\n    color: #c53030\n  }\n\n  .sm\\:focus\\:placeholder-red-800:focus:-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .sm\\:focus\\:placeholder-red-800:focus::-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .sm\\:focus\\:placeholder-red-800:focus::placeholder {\n    color: #9b2c2c\n  }\n\n  .sm\\:focus\\:placeholder-red-900:focus:-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .sm\\:focus\\:placeholder-red-900:focus::-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .sm\\:focus\\:placeholder-red-900:focus::placeholder {\n    color: #742a2a\n  }\n\n  .sm\\:focus\\:placeholder-orange-100:focus:-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .sm\\:focus\\:placeholder-orange-100:focus::-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .sm\\:focus\\:placeholder-orange-100:focus::placeholder {\n    color: #fffaf0\n  }\n\n  .sm\\:focus\\:placeholder-orange-200:focus:-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .sm\\:focus\\:placeholder-orange-200:focus::-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .sm\\:focus\\:placeholder-orange-200:focus::placeholder {\n    color: #feebc8\n  }\n\n  .sm\\:focus\\:placeholder-orange-300:focus:-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .sm\\:focus\\:placeholder-orange-300:focus::-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .sm\\:focus\\:placeholder-orange-300:focus::placeholder {\n    color: #fbd38d\n  }\n\n  .sm\\:focus\\:placeholder-orange-400:focus:-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .sm\\:focus\\:placeholder-orange-400:focus::-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .sm\\:focus\\:placeholder-orange-400:focus::placeholder {\n    color: #f6ad55\n  }\n\n  .sm\\:focus\\:placeholder-orange-500:focus:-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .sm\\:focus\\:placeholder-orange-500:focus::-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .sm\\:focus\\:placeholder-orange-500:focus::placeholder {\n    color: #ed8936\n  }\n\n  .sm\\:focus\\:placeholder-orange-600:focus:-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .sm\\:focus\\:placeholder-orange-600:focus::-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .sm\\:focus\\:placeholder-orange-600:focus::placeholder {\n    color: #dd6b20\n  }\n\n  .sm\\:focus\\:placeholder-orange-700:focus:-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .sm\\:focus\\:placeholder-orange-700:focus::-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .sm\\:focus\\:placeholder-orange-700:focus::placeholder {\n    color: #c05621\n  }\n\n  .sm\\:focus\\:placeholder-orange-800:focus:-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .sm\\:focus\\:placeholder-orange-800:focus::-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .sm\\:focus\\:placeholder-orange-800:focus::placeholder {\n    color: #9c4221\n  }\n\n  .sm\\:focus\\:placeholder-orange-900:focus:-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .sm\\:focus\\:placeholder-orange-900:focus::-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .sm\\:focus\\:placeholder-orange-900:focus::placeholder {\n    color: #7b341e\n  }\n\n  .sm\\:focus\\:placeholder-yellow-100:focus:-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .sm\\:focus\\:placeholder-yellow-100:focus::-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .sm\\:focus\\:placeholder-yellow-100:focus::placeholder {\n    color: #fffff0\n  }\n\n  .sm\\:focus\\:placeholder-yellow-200:focus:-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .sm\\:focus\\:placeholder-yellow-200:focus::-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .sm\\:focus\\:placeholder-yellow-200:focus::placeholder {\n    color: #fefcbf\n  }\n\n  .sm\\:focus\\:placeholder-yellow-300:focus:-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .sm\\:focus\\:placeholder-yellow-300:focus::-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .sm\\:focus\\:placeholder-yellow-300:focus::placeholder {\n    color: #faf089\n  }\n\n  .sm\\:focus\\:placeholder-yellow-400:focus:-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .sm\\:focus\\:placeholder-yellow-400:focus::-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .sm\\:focus\\:placeholder-yellow-400:focus::placeholder {\n    color: #f6e05e\n  }\n\n  .sm\\:focus\\:placeholder-yellow-500:focus:-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .sm\\:focus\\:placeholder-yellow-500:focus::-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .sm\\:focus\\:placeholder-yellow-500:focus::placeholder {\n    color: #ecc94b\n  }\n\n  .sm\\:focus\\:placeholder-yellow-600:focus:-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .sm\\:focus\\:placeholder-yellow-600:focus::-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .sm\\:focus\\:placeholder-yellow-600:focus::placeholder {\n    color: #d69e2e\n  }\n\n  .sm\\:focus\\:placeholder-yellow-700:focus:-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .sm\\:focus\\:placeholder-yellow-700:focus::-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .sm\\:focus\\:placeholder-yellow-700:focus::placeholder {\n    color: #b7791f\n  }\n\n  .sm\\:focus\\:placeholder-yellow-800:focus:-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .sm\\:focus\\:placeholder-yellow-800:focus::-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .sm\\:focus\\:placeholder-yellow-800:focus::placeholder {\n    color: #975a16\n  }\n\n  .sm\\:focus\\:placeholder-yellow-900:focus:-ms-input-placeholder {\n    color: #744210\n  }\n\n  .sm\\:focus\\:placeholder-yellow-900:focus::-ms-input-placeholder {\n    color: #744210\n  }\n\n  .sm\\:focus\\:placeholder-yellow-900:focus::placeholder {\n    color: #744210\n  }\n\n  .sm\\:focus\\:placeholder-green-100:focus:-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .sm\\:focus\\:placeholder-green-100:focus::-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .sm\\:focus\\:placeholder-green-100:focus::placeholder {\n    color: #f0fff4\n  }\n\n  .sm\\:focus\\:placeholder-green-200:focus:-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .sm\\:focus\\:placeholder-green-200:focus::-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .sm\\:focus\\:placeholder-green-200:focus::placeholder {\n    color: #c6f6d5\n  }\n\n  .sm\\:focus\\:placeholder-green-300:focus:-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .sm\\:focus\\:placeholder-green-300:focus::-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .sm\\:focus\\:placeholder-green-300:focus::placeholder {\n    color: #9ae6b4\n  }\n\n  .sm\\:focus\\:placeholder-green-400:focus:-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .sm\\:focus\\:placeholder-green-400:focus::-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .sm\\:focus\\:placeholder-green-400:focus::placeholder {\n    color: #68d391\n  }\n\n  .sm\\:focus\\:placeholder-green-500:focus:-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .sm\\:focus\\:placeholder-green-500:focus::-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .sm\\:focus\\:placeholder-green-500:focus::placeholder {\n    color: #48bb78\n  }\n\n  .sm\\:focus\\:placeholder-green-600:focus:-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .sm\\:focus\\:placeholder-green-600:focus::-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .sm\\:focus\\:placeholder-green-600:focus::placeholder {\n    color: #38a169\n  }\n\n  .sm\\:focus\\:placeholder-green-700:focus:-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .sm\\:focus\\:placeholder-green-700:focus::-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .sm\\:focus\\:placeholder-green-700:focus::placeholder {\n    color: #2f855a\n  }\n\n  .sm\\:focus\\:placeholder-green-800:focus:-ms-input-placeholder {\n    color: #276749\n  }\n\n  .sm\\:focus\\:placeholder-green-800:focus::-ms-input-placeholder {\n    color: #276749\n  }\n\n  .sm\\:focus\\:placeholder-green-800:focus::placeholder {\n    color: #276749\n  }\n\n  .sm\\:focus\\:placeholder-green-900:focus:-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .sm\\:focus\\:placeholder-green-900:focus::-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .sm\\:focus\\:placeholder-green-900:focus::placeholder {\n    color: #22543d\n  }\n\n  .sm\\:focus\\:placeholder-teal-100:focus:-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .sm\\:focus\\:placeholder-teal-100:focus::-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .sm\\:focus\\:placeholder-teal-100:focus::placeholder {\n    color: #e6fffa\n  }\n\n  .sm\\:focus\\:placeholder-teal-200:focus:-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .sm\\:focus\\:placeholder-teal-200:focus::-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .sm\\:focus\\:placeholder-teal-200:focus::placeholder {\n    color: #b2f5ea\n  }\n\n  .sm\\:focus\\:placeholder-teal-300:focus:-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .sm\\:focus\\:placeholder-teal-300:focus::-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .sm\\:focus\\:placeholder-teal-300:focus::placeholder {\n    color: #81e6d9\n  }\n\n  .sm\\:focus\\:placeholder-teal-400:focus:-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .sm\\:focus\\:placeholder-teal-400:focus::-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .sm\\:focus\\:placeholder-teal-400:focus::placeholder {\n    color: #4fd1c5\n  }\n\n  .sm\\:focus\\:placeholder-teal-500:focus:-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .sm\\:focus\\:placeholder-teal-500:focus::-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .sm\\:focus\\:placeholder-teal-500:focus::placeholder {\n    color: #38b2ac\n  }\n\n  .sm\\:focus\\:placeholder-teal-600:focus:-ms-input-placeholder {\n    color: #319795\n  }\n\n  .sm\\:focus\\:placeholder-teal-600:focus::-ms-input-placeholder {\n    color: #319795\n  }\n\n  .sm\\:focus\\:placeholder-teal-600:focus::placeholder {\n    color: #319795\n  }\n\n  .sm\\:focus\\:placeholder-teal-700:focus:-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .sm\\:focus\\:placeholder-teal-700:focus::-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .sm\\:focus\\:placeholder-teal-700:focus::placeholder {\n    color: #2c7a7b\n  }\n\n  .sm\\:focus\\:placeholder-teal-800:focus:-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .sm\\:focus\\:placeholder-teal-800:focus::-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .sm\\:focus\\:placeholder-teal-800:focus::placeholder {\n    color: #285e61\n  }\n\n  .sm\\:focus\\:placeholder-teal-900:focus:-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .sm\\:focus\\:placeholder-teal-900:focus::-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .sm\\:focus\\:placeholder-teal-900:focus::placeholder {\n    color: #234e52\n  }\n\n  .sm\\:focus\\:placeholder-blue-100:focus:-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .sm\\:focus\\:placeholder-blue-100:focus::-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .sm\\:focus\\:placeholder-blue-100:focus::placeholder {\n    color: #ebf8ff\n  }\n\n  .sm\\:focus\\:placeholder-blue-200:focus:-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .sm\\:focus\\:placeholder-blue-200:focus::-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .sm\\:focus\\:placeholder-blue-200:focus::placeholder {\n    color: #bee3f8\n  }\n\n  .sm\\:focus\\:placeholder-blue-300:focus:-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .sm\\:focus\\:placeholder-blue-300:focus::-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .sm\\:focus\\:placeholder-blue-300:focus::placeholder {\n    color: #90cdf4\n  }\n\n  .sm\\:focus\\:placeholder-blue-400:focus:-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .sm\\:focus\\:placeholder-blue-400:focus::-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .sm\\:focus\\:placeholder-blue-400:focus::placeholder {\n    color: #63b3ed\n  }\n\n  .sm\\:focus\\:placeholder-blue-500:focus:-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .sm\\:focus\\:placeholder-blue-500:focus::-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .sm\\:focus\\:placeholder-blue-500:focus::placeholder {\n    color: #4299e1\n  }\n\n  .sm\\:focus\\:placeholder-blue-600:focus:-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .sm\\:focus\\:placeholder-blue-600:focus::-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .sm\\:focus\\:placeholder-blue-600:focus::placeholder {\n    color: #3182ce\n  }\n\n  .sm\\:focus\\:placeholder-blue-700:focus:-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .sm\\:focus\\:placeholder-blue-700:focus::-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .sm\\:focus\\:placeholder-blue-700:focus::placeholder {\n    color: #2b6cb0\n  }\n\n  .sm\\:focus\\:placeholder-blue-800:focus:-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .sm\\:focus\\:placeholder-blue-800:focus::-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .sm\\:focus\\:placeholder-blue-800:focus::placeholder {\n    color: #2c5282\n  }\n\n  .sm\\:focus\\:placeholder-blue-900:focus:-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .sm\\:focus\\:placeholder-blue-900:focus::-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .sm\\:focus\\:placeholder-blue-900:focus::placeholder {\n    color: #2a4365\n  }\n\n  .sm\\:focus\\:placeholder-indigo-100:focus:-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .sm\\:focus\\:placeholder-indigo-100:focus::-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .sm\\:focus\\:placeholder-indigo-100:focus::placeholder {\n    color: #ebf4ff\n  }\n\n  .sm\\:focus\\:placeholder-indigo-200:focus:-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .sm\\:focus\\:placeholder-indigo-200:focus::-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .sm\\:focus\\:placeholder-indigo-200:focus::placeholder {\n    color: #c3dafe\n  }\n\n  .sm\\:focus\\:placeholder-indigo-300:focus:-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .sm\\:focus\\:placeholder-indigo-300:focus::-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .sm\\:focus\\:placeholder-indigo-300:focus::placeholder {\n    color: #a3bffa\n  }\n\n  .sm\\:focus\\:placeholder-indigo-400:focus:-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .sm\\:focus\\:placeholder-indigo-400:focus::-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .sm\\:focus\\:placeholder-indigo-400:focus::placeholder {\n    color: #7f9cf5\n  }\n\n  .sm\\:focus\\:placeholder-indigo-500:focus:-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .sm\\:focus\\:placeholder-indigo-500:focus::-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .sm\\:focus\\:placeholder-indigo-500:focus::placeholder {\n    color: #667eea\n  }\n\n  .sm\\:focus\\:placeholder-indigo-600:focus:-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .sm\\:focus\\:placeholder-indigo-600:focus::-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .sm\\:focus\\:placeholder-indigo-600:focus::placeholder {\n    color: #5a67d8\n  }\n\n  .sm\\:focus\\:placeholder-indigo-700:focus:-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .sm\\:focus\\:placeholder-indigo-700:focus::-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .sm\\:focus\\:placeholder-indigo-700:focus::placeholder {\n    color: #4c51bf\n  }\n\n  .sm\\:focus\\:placeholder-indigo-800:focus:-ms-input-placeholder {\n    color: #434190\n  }\n\n  .sm\\:focus\\:placeholder-indigo-800:focus::-ms-input-placeholder {\n    color: #434190\n  }\n\n  .sm\\:focus\\:placeholder-indigo-800:focus::placeholder {\n    color: #434190\n  }\n\n  .sm\\:focus\\:placeholder-indigo-900:focus:-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .sm\\:focus\\:placeholder-indigo-900:focus::-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .sm\\:focus\\:placeholder-indigo-900:focus::placeholder {\n    color: #3c366b\n  }\n\n  .sm\\:focus\\:placeholder-purple-100:focus:-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .sm\\:focus\\:placeholder-purple-100:focus::-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .sm\\:focus\\:placeholder-purple-100:focus::placeholder {\n    color: #faf5ff\n  }\n\n  .sm\\:focus\\:placeholder-purple-200:focus:-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .sm\\:focus\\:placeholder-purple-200:focus::-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .sm\\:focus\\:placeholder-purple-200:focus::placeholder {\n    color: #e9d8fd\n  }\n\n  .sm\\:focus\\:placeholder-purple-300:focus:-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .sm\\:focus\\:placeholder-purple-300:focus::-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .sm\\:focus\\:placeholder-purple-300:focus::placeholder {\n    color: #d6bcfa\n  }\n\n  .sm\\:focus\\:placeholder-purple-400:focus:-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .sm\\:focus\\:placeholder-purple-400:focus::-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .sm\\:focus\\:placeholder-purple-400:focus::placeholder {\n    color: #b794f4\n  }\n\n  .sm\\:focus\\:placeholder-purple-500:focus:-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .sm\\:focus\\:placeholder-purple-500:focus::-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .sm\\:focus\\:placeholder-purple-500:focus::placeholder {\n    color: #9f7aea\n  }\n\n  .sm\\:focus\\:placeholder-purple-600:focus:-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .sm\\:focus\\:placeholder-purple-600:focus::-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .sm\\:focus\\:placeholder-purple-600:focus::placeholder {\n    color: #805ad5\n  }\n\n  .sm\\:focus\\:placeholder-purple-700:focus:-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .sm\\:focus\\:placeholder-purple-700:focus::-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .sm\\:focus\\:placeholder-purple-700:focus::placeholder {\n    color: #6b46c1\n  }\n\n  .sm\\:focus\\:placeholder-purple-800:focus:-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .sm\\:focus\\:placeholder-purple-800:focus::-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .sm\\:focus\\:placeholder-purple-800:focus::placeholder {\n    color: #553c9a\n  }\n\n  .sm\\:focus\\:placeholder-purple-900:focus:-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .sm\\:focus\\:placeholder-purple-900:focus::-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .sm\\:focus\\:placeholder-purple-900:focus::placeholder {\n    color: #44337a\n  }\n\n  .sm\\:focus\\:placeholder-pink-100:focus:-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .sm\\:focus\\:placeholder-pink-100:focus::-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .sm\\:focus\\:placeholder-pink-100:focus::placeholder {\n    color: #fff5f7\n  }\n\n  .sm\\:focus\\:placeholder-pink-200:focus:-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .sm\\:focus\\:placeholder-pink-200:focus::-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .sm\\:focus\\:placeholder-pink-200:focus::placeholder {\n    color: #fed7e2\n  }\n\n  .sm\\:focus\\:placeholder-pink-300:focus:-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .sm\\:focus\\:placeholder-pink-300:focus::-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .sm\\:focus\\:placeholder-pink-300:focus::placeholder {\n    color: #fbb6ce\n  }\n\n  .sm\\:focus\\:placeholder-pink-400:focus:-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .sm\\:focus\\:placeholder-pink-400:focus::-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .sm\\:focus\\:placeholder-pink-400:focus::placeholder {\n    color: #f687b3\n  }\n\n  .sm\\:focus\\:placeholder-pink-500:focus:-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .sm\\:focus\\:placeholder-pink-500:focus::-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .sm\\:focus\\:placeholder-pink-500:focus::placeholder {\n    color: #ed64a6\n  }\n\n  .sm\\:focus\\:placeholder-pink-600:focus:-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .sm\\:focus\\:placeholder-pink-600:focus::-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .sm\\:focus\\:placeholder-pink-600:focus::placeholder {\n    color: #d53f8c\n  }\n\n  .sm\\:focus\\:placeholder-pink-700:focus:-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .sm\\:focus\\:placeholder-pink-700:focus::-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .sm\\:focus\\:placeholder-pink-700:focus::placeholder {\n    color: #b83280\n  }\n\n  .sm\\:focus\\:placeholder-pink-800:focus:-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .sm\\:focus\\:placeholder-pink-800:focus::-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .sm\\:focus\\:placeholder-pink-800:focus::placeholder {\n    color: #97266d\n  }\n\n  .sm\\:focus\\:placeholder-pink-900:focus:-ms-input-placeholder {\n    color: #702459\n  }\n\n  .sm\\:focus\\:placeholder-pink-900:focus::-ms-input-placeholder {\n    color: #702459\n  }\n\n  .sm\\:focus\\:placeholder-pink-900:focus::placeholder {\n    color: #702459\n  }\n\n  .sm\\:pointer-events-none {\n    pointer-events: none\n  }\n\n  .sm\\:pointer-events-auto {\n    pointer-events: auto\n  }\n\n  .sm\\:static {\n    position: static\n  }\n\n  .sm\\:fixed {\n    position: fixed\n  }\n\n  .sm\\:absolute {\n    position: absolute\n  }\n\n  .sm\\:relative {\n    position: relative\n  }\n\n  .sm\\:sticky {\n    position: -webkit-sticky;\n    position: sticky\n  }\n\n  .sm\\:inset-0 {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0\n  }\n\n  .sm\\:inset-auto {\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto\n  }\n\n  .sm\\:inset-y-0 {\n    top: 0;\n    bottom: 0\n  }\n\n  .sm\\:inset-x-0 {\n    right: 0;\n    left: 0\n  }\n\n  .sm\\:inset-y-auto {\n    top: auto;\n    bottom: auto\n  }\n\n  .sm\\:inset-x-auto {\n    right: auto;\n    left: auto\n  }\n\n  .sm\\:top-0 {\n    top: 0\n  }\n\n  .sm\\:right-0 {\n    right: 0\n  }\n\n  .sm\\:bottom-0 {\n    bottom: 0\n  }\n\n  .sm\\:left-0 {\n    left: 0\n  }\n\n  .sm\\:top-auto {\n    top: auto\n  }\n\n  .sm\\:right-auto {\n    right: auto\n  }\n\n  .sm\\:bottom-auto {\n    bottom: auto\n  }\n\n  .sm\\:left-auto {\n    left: auto\n  }\n\n  .sm\\:resize-none {\n    resize: none\n  }\n\n  .sm\\:resize-y {\n    resize: vertical\n  }\n\n  .sm\\:resize-x {\n    resize: horizontal\n  }\n\n  .sm\\:resize {\n    resize: both\n  }\n\n  .sm\\:shadow {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .sm\\:shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .sm\\:shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .sm\\:shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .sm\\:shadow-2xl {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .sm\\:shadow-inner {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .sm\\:shadow-outline {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .sm\\:shadow-none {\n    box-shadow: none\n  }\n\n  .sm\\:hover\\:shadow:hover {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .sm\\:hover\\:shadow-md:hover {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .sm\\:hover\\:shadow-lg:hover {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .sm\\:hover\\:shadow-xl:hover {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .sm\\:hover\\:shadow-2xl:hover {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .sm\\:hover\\:shadow-inner:hover {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .sm\\:hover\\:shadow-outline:hover {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .sm\\:hover\\:shadow-none:hover {\n    box-shadow: none\n  }\n\n  .sm\\:focus\\:shadow:focus {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .sm\\:focus\\:shadow-md:focus {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .sm\\:focus\\:shadow-lg:focus {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .sm\\:focus\\:shadow-xl:focus {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .sm\\:focus\\:shadow-2xl:focus {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .sm\\:focus\\:shadow-inner:focus {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .sm\\:focus\\:shadow-outline:focus {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .sm\\:focus\\:shadow-none:focus {\n    box-shadow: none\n  }\n\n  .sm\\:fill-current {\n    fill: currentColor\n  }\n\n  .sm\\:stroke-current {\n    stroke: currentColor\n  }\n\n  .sm\\:table-auto {\n    table-layout: auto\n  }\n\n  .sm\\:table-fixed {\n    table-layout: fixed\n  }\n\n  .sm\\:text-left {\n    text-align: left\n  }\n\n  .sm\\:text-center {\n    text-align: center\n  }\n\n  .sm\\:text-right {\n    text-align: right\n  }\n\n  .sm\\:text-justify {\n    text-align: justify\n  }\n\n  .sm\\:text-transparent {\n    color: transparent\n  }\n\n  .sm\\:text-black {\n    color: #000\n  }\n\n  .sm\\:text-white {\n    color: #fff\n  }\n\n  .sm\\:text-gray-100 {\n    color: #f7fafc\n  }\n\n  .sm\\:text-gray-200 {\n    color: #edf2f7\n  }\n\n  .sm\\:text-gray-300 {\n    color: #e2e8f0\n  }\n\n  .sm\\:text-gray-400 {\n    color: #cbd5e0\n  }\n\n  .sm\\:text-gray-500 {\n    color: #a0aec0\n  }\n\n  .sm\\:text-gray-600 {\n    color: #718096\n  }\n\n  .sm\\:text-gray-700 {\n    color: #4a5568\n  }\n\n  .sm\\:text-gray-800 {\n    color: #2d3748\n  }\n\n  .sm\\:text-gray-900 {\n    color: #1a202c\n  }\n\n  .sm\\:text-red-100 {\n    color: #fff5f5\n  }\n\n  .sm\\:text-red-200 {\n    color: #fed7d7\n  }\n\n  .sm\\:text-red-300 {\n    color: #feb2b2\n  }\n\n  .sm\\:text-red-400 {\n    color: #fc8181\n  }\n\n  .sm\\:text-red-500 {\n    color: #f56565\n  }\n\n  .sm\\:text-red-600 {\n    color: #e53e3e\n  }\n\n  .sm\\:text-red-700 {\n    color: #c53030\n  }\n\n  .sm\\:text-red-800 {\n    color: #9b2c2c\n  }\n\n  .sm\\:text-red-900 {\n    color: #742a2a\n  }\n\n  .sm\\:text-orange-100 {\n    color: #fffaf0\n  }\n\n  .sm\\:text-orange-200 {\n    color: #feebc8\n  }\n\n  .sm\\:text-orange-300 {\n    color: #fbd38d\n  }\n\n  .sm\\:text-orange-400 {\n    color: #f6ad55\n  }\n\n  .sm\\:text-orange-500 {\n    color: #ed8936\n  }\n\n  .sm\\:text-orange-600 {\n    color: #dd6b20\n  }\n\n  .sm\\:text-orange-700 {\n    color: #c05621\n  }\n\n  .sm\\:text-orange-800 {\n    color: #9c4221\n  }\n\n  .sm\\:text-orange-900 {\n    color: #7b341e\n  }\n\n  .sm\\:text-yellow-100 {\n    color: #fffff0\n  }\n\n  .sm\\:text-yellow-200 {\n    color: #fefcbf\n  }\n\n  .sm\\:text-yellow-300 {\n    color: #faf089\n  }\n\n  .sm\\:text-yellow-400 {\n    color: #f6e05e\n  }\n\n  .sm\\:text-yellow-500 {\n    color: #ecc94b\n  }\n\n  .sm\\:text-yellow-600 {\n    color: #d69e2e\n  }\n\n  .sm\\:text-yellow-700 {\n    color: #b7791f\n  }\n\n  .sm\\:text-yellow-800 {\n    color: #975a16\n  }\n\n  .sm\\:text-yellow-900 {\n    color: #744210\n  }\n\n  .sm\\:text-green-100 {\n    color: #f0fff4\n  }\n\n  .sm\\:text-green-200 {\n    color: #c6f6d5\n  }\n\n  .sm\\:text-green-300 {\n    color: #9ae6b4\n  }\n\n  .sm\\:text-green-400 {\n    color: #68d391\n  }\n\n  .sm\\:text-green-500 {\n    color: #48bb78\n  }\n\n  .sm\\:text-green-600 {\n    color: #38a169\n  }\n\n  .sm\\:text-green-700 {\n    color: #2f855a\n  }\n\n  .sm\\:text-green-800 {\n    color: #276749\n  }\n\n  .sm\\:text-green-900 {\n    color: #22543d\n  }\n\n  .sm\\:text-teal-100 {\n    color: #e6fffa\n  }\n\n  .sm\\:text-teal-200 {\n    color: #b2f5ea\n  }\n\n  .sm\\:text-teal-300 {\n    color: #81e6d9\n  }\n\n  .sm\\:text-teal-400 {\n    color: #4fd1c5\n  }\n\n  .sm\\:text-teal-500 {\n    color: #38b2ac\n  }\n\n  .sm\\:text-teal-600 {\n    color: #319795\n  }\n\n  .sm\\:text-teal-700 {\n    color: #2c7a7b\n  }\n\n  .sm\\:text-teal-800 {\n    color: #285e61\n  }\n\n  .sm\\:text-teal-900 {\n    color: #234e52\n  }\n\n  .sm\\:text-blue-100 {\n    color: #ebf8ff\n  }\n\n  .sm\\:text-blue-200 {\n    color: #bee3f8\n  }\n\n  .sm\\:text-blue-300 {\n    color: #90cdf4\n  }\n\n  .sm\\:text-blue-400 {\n    color: #63b3ed\n  }\n\n  .sm\\:text-blue-500 {\n    color: #4299e1\n  }\n\n  .sm\\:text-blue-600 {\n    color: #3182ce\n  }\n\n  .sm\\:text-blue-700 {\n    color: #2b6cb0\n  }\n\n  .sm\\:text-blue-800 {\n    color: #2c5282\n  }\n\n  .sm\\:text-blue-900 {\n    color: #2a4365\n  }\n\n  .sm\\:text-indigo-100 {\n    color: #ebf4ff\n  }\n\n  .sm\\:text-indigo-200 {\n    color: #c3dafe\n  }\n\n  .sm\\:text-indigo-300 {\n    color: #a3bffa\n  }\n\n  .sm\\:text-indigo-400 {\n    color: #7f9cf5\n  }\n\n  .sm\\:text-indigo-500 {\n    color: #667eea\n  }\n\n  .sm\\:text-indigo-600 {\n    color: #5a67d8\n  }\n\n  .sm\\:text-indigo-700 {\n    color: #4c51bf\n  }\n\n  .sm\\:text-indigo-800 {\n    color: #434190\n  }\n\n  .sm\\:text-indigo-900 {\n    color: #3c366b\n  }\n\n  .sm\\:text-purple-100 {\n    color: #faf5ff\n  }\n\n  .sm\\:text-purple-200 {\n    color: #e9d8fd\n  }\n\n  .sm\\:text-purple-300 {\n    color: #d6bcfa\n  }\n\n  .sm\\:text-purple-400 {\n    color: #b794f4\n  }\n\n  .sm\\:text-purple-500 {\n    color: #9f7aea\n  }\n\n  .sm\\:text-purple-600 {\n    color: #805ad5\n  }\n\n  .sm\\:text-purple-700 {\n    color: #6b46c1\n  }\n\n  .sm\\:text-purple-800 {\n    color: #553c9a\n  }\n\n  .sm\\:text-purple-900 {\n    color: #44337a\n  }\n\n  .sm\\:text-pink-100 {\n    color: #fff5f7\n  }\n\n  .sm\\:text-pink-200 {\n    color: #fed7e2\n  }\n\n  .sm\\:text-pink-300 {\n    color: #fbb6ce\n  }\n\n  .sm\\:text-pink-400 {\n    color: #f687b3\n  }\n\n  .sm\\:text-pink-500 {\n    color: #ed64a6\n  }\n\n  .sm\\:text-pink-600 {\n    color: #d53f8c\n  }\n\n  .sm\\:text-pink-700 {\n    color: #b83280\n  }\n\n  .sm\\:text-pink-800 {\n    color: #97266d\n  }\n\n  .sm\\:text-pink-900 {\n    color: #702459\n  }\n\n  .sm\\:hover\\:text-transparent:hover {\n    color: transparent\n  }\n\n  .sm\\:hover\\:text-black:hover {\n    color: #000\n  }\n\n  .sm\\:hover\\:text-white:hover {\n    color: #fff\n  }\n\n  .sm\\:hover\\:text-gray-100:hover {\n    color: #f7fafc\n  }\n\n  .sm\\:hover\\:text-gray-200:hover {\n    color: #edf2f7\n  }\n\n  .sm\\:hover\\:text-gray-300:hover {\n    color: #e2e8f0\n  }\n\n  .sm\\:hover\\:text-gray-400:hover {\n    color: #cbd5e0\n  }\n\n  .sm\\:hover\\:text-gray-500:hover {\n    color: #a0aec0\n  }\n\n  .sm\\:hover\\:text-gray-600:hover {\n    color: #718096\n  }\n\n  .sm\\:hover\\:text-gray-700:hover {\n    color: #4a5568\n  }\n\n  .sm\\:hover\\:text-gray-800:hover {\n    color: #2d3748\n  }\n\n  .sm\\:hover\\:text-gray-900:hover {\n    color: #1a202c\n  }\n\n  .sm\\:hover\\:text-red-100:hover {\n    color: #fff5f5\n  }\n\n  .sm\\:hover\\:text-red-200:hover {\n    color: #fed7d7\n  }\n\n  .sm\\:hover\\:text-red-300:hover {\n    color: #feb2b2\n  }\n\n  .sm\\:hover\\:text-red-400:hover {\n    color: #fc8181\n  }\n\n  .sm\\:hover\\:text-red-500:hover {\n    color: #f56565\n  }\n\n  .sm\\:hover\\:text-red-600:hover {\n    color: #e53e3e\n  }\n\n  .sm\\:hover\\:text-red-700:hover {\n    color: #c53030\n  }\n\n  .sm\\:hover\\:text-red-800:hover {\n    color: #9b2c2c\n  }\n\n  .sm\\:hover\\:text-red-900:hover {\n    color: #742a2a\n  }\n\n  .sm\\:hover\\:text-orange-100:hover {\n    color: #fffaf0\n  }\n\n  .sm\\:hover\\:text-orange-200:hover {\n    color: #feebc8\n  }\n\n  .sm\\:hover\\:text-orange-300:hover {\n    color: #fbd38d\n  }\n\n  .sm\\:hover\\:text-orange-400:hover {\n    color: #f6ad55\n  }\n\n  .sm\\:hover\\:text-orange-500:hover {\n    color: #ed8936\n  }\n\n  .sm\\:hover\\:text-orange-600:hover {\n    color: #dd6b20\n  }\n\n  .sm\\:hover\\:text-orange-700:hover {\n    color: #c05621\n  }\n\n  .sm\\:hover\\:text-orange-800:hover {\n    color: #9c4221\n  }\n\n  .sm\\:hover\\:text-orange-900:hover {\n    color: #7b341e\n  }\n\n  .sm\\:hover\\:text-yellow-100:hover {\n    color: #fffff0\n  }\n\n  .sm\\:hover\\:text-yellow-200:hover {\n    color: #fefcbf\n  }\n\n  .sm\\:hover\\:text-yellow-300:hover {\n    color: #faf089\n  }\n\n  .sm\\:hover\\:text-yellow-400:hover {\n    color: #f6e05e\n  }\n\n  .sm\\:hover\\:text-yellow-500:hover {\n    color: #ecc94b\n  }\n\n  .sm\\:hover\\:text-yellow-600:hover {\n    color: #d69e2e\n  }\n\n  .sm\\:hover\\:text-yellow-700:hover {\n    color: #b7791f\n  }\n\n  .sm\\:hover\\:text-yellow-800:hover {\n    color: #975a16\n  }\n\n  .sm\\:hover\\:text-yellow-900:hover {\n    color: #744210\n  }\n\n  .sm\\:hover\\:text-green-100:hover {\n    color: #f0fff4\n  }\n\n  .sm\\:hover\\:text-green-200:hover {\n    color: #c6f6d5\n  }\n\n  .sm\\:hover\\:text-green-300:hover {\n    color: #9ae6b4\n  }\n\n  .sm\\:hover\\:text-green-400:hover {\n    color: #68d391\n  }\n\n  .sm\\:hover\\:text-green-500:hover {\n    color: #48bb78\n  }\n\n  .sm\\:hover\\:text-green-600:hover {\n    color: #38a169\n  }\n\n  .sm\\:hover\\:text-green-700:hover {\n    color: #2f855a\n  }\n\n  .sm\\:hover\\:text-green-800:hover {\n    color: #276749\n  }\n\n  .sm\\:hover\\:text-green-900:hover {\n    color: #22543d\n  }\n\n  .sm\\:hover\\:text-teal-100:hover {\n    color: #e6fffa\n  }\n\n  .sm\\:hover\\:text-teal-200:hover {\n    color: #b2f5ea\n  }\n\n  .sm\\:hover\\:text-teal-300:hover {\n    color: #81e6d9\n  }\n\n  .sm\\:hover\\:text-teal-400:hover {\n    color: #4fd1c5\n  }\n\n  .sm\\:hover\\:text-teal-500:hover {\n    color: #38b2ac\n  }\n\n  .sm\\:hover\\:text-teal-600:hover {\n    color: #319795\n  }\n\n  .sm\\:hover\\:text-teal-700:hover {\n    color: #2c7a7b\n  }\n\n  .sm\\:hover\\:text-teal-800:hover {\n    color: #285e61\n  }\n\n  .sm\\:hover\\:text-teal-900:hover {\n    color: #234e52\n  }\n\n  .sm\\:hover\\:text-blue-100:hover {\n    color: #ebf8ff\n  }\n\n  .sm\\:hover\\:text-blue-200:hover {\n    color: #bee3f8\n  }\n\n  .sm\\:hover\\:text-blue-300:hover {\n    color: #90cdf4\n  }\n\n  .sm\\:hover\\:text-blue-400:hover {\n    color: #63b3ed\n  }\n\n  .sm\\:hover\\:text-blue-500:hover {\n    color: #4299e1\n  }\n\n  .sm\\:hover\\:text-blue-600:hover {\n    color: #3182ce\n  }\n\n  .sm\\:hover\\:text-blue-700:hover {\n    color: #2b6cb0\n  }\n\n  .sm\\:hover\\:text-blue-800:hover {\n    color: #2c5282\n  }\n\n  .sm\\:hover\\:text-blue-900:hover {\n    color: #2a4365\n  }\n\n  .sm\\:hover\\:text-indigo-100:hover {\n    color: #ebf4ff\n  }\n\n  .sm\\:hover\\:text-indigo-200:hover {\n    color: #c3dafe\n  }\n\n  .sm\\:hover\\:text-indigo-300:hover {\n    color: #a3bffa\n  }\n\n  .sm\\:hover\\:text-indigo-400:hover {\n    color: #7f9cf5\n  }\n\n  .sm\\:hover\\:text-indigo-500:hover {\n    color: #667eea\n  }\n\n  .sm\\:hover\\:text-indigo-600:hover {\n    color: #5a67d8\n  }\n\n  .sm\\:hover\\:text-indigo-700:hover {\n    color: #4c51bf\n  }\n\n  .sm\\:hover\\:text-indigo-800:hover {\n    color: #434190\n  }\n\n  .sm\\:hover\\:text-indigo-900:hover {\n    color: #3c366b\n  }\n\n  .sm\\:hover\\:text-purple-100:hover {\n    color: #faf5ff\n  }\n\n  .sm\\:hover\\:text-purple-200:hover {\n    color: #e9d8fd\n  }\n\n  .sm\\:hover\\:text-purple-300:hover {\n    color: #d6bcfa\n  }\n\n  .sm\\:hover\\:text-purple-400:hover {\n    color: #b794f4\n  }\n\n  .sm\\:hover\\:text-purple-500:hover {\n    color: #9f7aea\n  }\n\n  .sm\\:hover\\:text-purple-600:hover {\n    color: #805ad5\n  }\n\n  .sm\\:hover\\:text-purple-700:hover {\n    color: #6b46c1\n  }\n\n  .sm\\:hover\\:text-purple-800:hover {\n    color: #553c9a\n  }\n\n  .sm\\:hover\\:text-purple-900:hover {\n    color: #44337a\n  }\n\n  .sm\\:hover\\:text-pink-100:hover {\n    color: #fff5f7\n  }\n\n  .sm\\:hover\\:text-pink-200:hover {\n    color: #fed7e2\n  }\n\n  .sm\\:hover\\:text-pink-300:hover {\n    color: #fbb6ce\n  }\n\n  .sm\\:hover\\:text-pink-400:hover {\n    color: #f687b3\n  }\n\n  .sm\\:hover\\:text-pink-500:hover {\n    color: #ed64a6\n  }\n\n  .sm\\:hover\\:text-pink-600:hover {\n    color: #d53f8c\n  }\n\n  .sm\\:hover\\:text-pink-700:hover {\n    color: #b83280\n  }\n\n  .sm\\:hover\\:text-pink-800:hover {\n    color: #97266d\n  }\n\n  .sm\\:hover\\:text-pink-900:hover {\n    color: #702459\n  }\n\n  .sm\\:focus\\:text-transparent:focus {\n    color: transparent\n  }\n\n  .sm\\:focus\\:text-black:focus {\n    color: #000\n  }\n\n  .sm\\:focus\\:text-white:focus {\n    color: #fff\n  }\n\n  .sm\\:focus\\:text-gray-100:focus {\n    color: #f7fafc\n  }\n\n  .sm\\:focus\\:text-gray-200:focus {\n    color: #edf2f7\n  }\n\n  .sm\\:focus\\:text-gray-300:focus {\n    color: #e2e8f0\n  }\n\n  .sm\\:focus\\:text-gray-400:focus {\n    color: #cbd5e0\n  }\n\n  .sm\\:focus\\:text-gray-500:focus {\n    color: #a0aec0\n  }\n\n  .sm\\:focus\\:text-gray-600:focus {\n    color: #718096\n  }\n\n  .sm\\:focus\\:text-gray-700:focus {\n    color: #4a5568\n  }\n\n  .sm\\:focus\\:text-gray-800:focus {\n    color: #2d3748\n  }\n\n  .sm\\:focus\\:text-gray-900:focus {\n    color: #1a202c\n  }\n\n  .sm\\:focus\\:text-red-100:focus {\n    color: #fff5f5\n  }\n\n  .sm\\:focus\\:text-red-200:focus {\n    color: #fed7d7\n  }\n\n  .sm\\:focus\\:text-red-300:focus {\n    color: #feb2b2\n  }\n\n  .sm\\:focus\\:text-red-400:focus {\n    color: #fc8181\n  }\n\n  .sm\\:focus\\:text-red-500:focus {\n    color: #f56565\n  }\n\n  .sm\\:focus\\:text-red-600:focus {\n    color: #e53e3e\n  }\n\n  .sm\\:focus\\:text-red-700:focus {\n    color: #c53030\n  }\n\n  .sm\\:focus\\:text-red-800:focus {\n    color: #9b2c2c\n  }\n\n  .sm\\:focus\\:text-red-900:focus {\n    color: #742a2a\n  }\n\n  .sm\\:focus\\:text-orange-100:focus {\n    color: #fffaf0\n  }\n\n  .sm\\:focus\\:text-orange-200:focus {\n    color: #feebc8\n  }\n\n  .sm\\:focus\\:text-orange-300:focus {\n    color: #fbd38d\n  }\n\n  .sm\\:focus\\:text-orange-400:focus {\n    color: #f6ad55\n  }\n\n  .sm\\:focus\\:text-orange-500:focus {\n    color: #ed8936\n  }\n\n  .sm\\:focus\\:text-orange-600:focus {\n    color: #dd6b20\n  }\n\n  .sm\\:focus\\:text-orange-700:focus {\n    color: #c05621\n  }\n\n  .sm\\:focus\\:text-orange-800:focus {\n    color: #9c4221\n  }\n\n  .sm\\:focus\\:text-orange-900:focus {\n    color: #7b341e\n  }\n\n  .sm\\:focus\\:text-yellow-100:focus {\n    color: #fffff0\n  }\n\n  .sm\\:focus\\:text-yellow-200:focus {\n    color: #fefcbf\n  }\n\n  .sm\\:focus\\:text-yellow-300:focus {\n    color: #faf089\n  }\n\n  .sm\\:focus\\:text-yellow-400:focus {\n    color: #f6e05e\n  }\n\n  .sm\\:focus\\:text-yellow-500:focus {\n    color: #ecc94b\n  }\n\n  .sm\\:focus\\:text-yellow-600:focus {\n    color: #d69e2e\n  }\n\n  .sm\\:focus\\:text-yellow-700:focus {\n    color: #b7791f\n  }\n\n  .sm\\:focus\\:text-yellow-800:focus {\n    color: #975a16\n  }\n\n  .sm\\:focus\\:text-yellow-900:focus {\n    color: #744210\n  }\n\n  .sm\\:focus\\:text-green-100:focus {\n    color: #f0fff4\n  }\n\n  .sm\\:focus\\:text-green-200:focus {\n    color: #c6f6d5\n  }\n\n  .sm\\:focus\\:text-green-300:focus {\n    color: #9ae6b4\n  }\n\n  .sm\\:focus\\:text-green-400:focus {\n    color: #68d391\n  }\n\n  .sm\\:focus\\:text-green-500:focus {\n    color: #48bb78\n  }\n\n  .sm\\:focus\\:text-green-600:focus {\n    color: #38a169\n  }\n\n  .sm\\:focus\\:text-green-700:focus {\n    color: #2f855a\n  }\n\n  .sm\\:focus\\:text-green-800:focus {\n    color: #276749\n  }\n\n  .sm\\:focus\\:text-green-900:focus {\n    color: #22543d\n  }\n\n  .sm\\:focus\\:text-teal-100:focus {\n    color: #e6fffa\n  }\n\n  .sm\\:focus\\:text-teal-200:focus {\n    color: #b2f5ea\n  }\n\n  .sm\\:focus\\:text-teal-300:focus {\n    color: #81e6d9\n  }\n\n  .sm\\:focus\\:text-teal-400:focus {\n    color: #4fd1c5\n  }\n\n  .sm\\:focus\\:text-teal-500:focus {\n    color: #38b2ac\n  }\n\n  .sm\\:focus\\:text-teal-600:focus {\n    color: #319795\n  }\n\n  .sm\\:focus\\:text-teal-700:focus {\n    color: #2c7a7b\n  }\n\n  .sm\\:focus\\:text-teal-800:focus {\n    color: #285e61\n  }\n\n  .sm\\:focus\\:text-teal-900:focus {\n    color: #234e52\n  }\n\n  .sm\\:focus\\:text-blue-100:focus {\n    color: #ebf8ff\n  }\n\n  .sm\\:focus\\:text-blue-200:focus {\n    color: #bee3f8\n  }\n\n  .sm\\:focus\\:text-blue-300:focus {\n    color: #90cdf4\n  }\n\n  .sm\\:focus\\:text-blue-400:focus {\n    color: #63b3ed\n  }\n\n  .sm\\:focus\\:text-blue-500:focus {\n    color: #4299e1\n  }\n\n  .sm\\:focus\\:text-blue-600:focus {\n    color: #3182ce\n  }\n\n  .sm\\:focus\\:text-blue-700:focus {\n    color: #2b6cb0\n  }\n\n  .sm\\:focus\\:text-blue-800:focus {\n    color: #2c5282\n  }\n\n  .sm\\:focus\\:text-blue-900:focus {\n    color: #2a4365\n  }\n\n  .sm\\:focus\\:text-indigo-100:focus {\n    color: #ebf4ff\n  }\n\n  .sm\\:focus\\:text-indigo-200:focus {\n    color: #c3dafe\n  }\n\n  .sm\\:focus\\:text-indigo-300:focus {\n    color: #a3bffa\n  }\n\n  .sm\\:focus\\:text-indigo-400:focus {\n    color: #7f9cf5\n  }\n\n  .sm\\:focus\\:text-indigo-500:focus {\n    color: #667eea\n  }\n\n  .sm\\:focus\\:text-indigo-600:focus {\n    color: #5a67d8\n  }\n\n  .sm\\:focus\\:text-indigo-700:focus {\n    color: #4c51bf\n  }\n\n  .sm\\:focus\\:text-indigo-800:focus {\n    color: #434190\n  }\n\n  .sm\\:focus\\:text-indigo-900:focus {\n    color: #3c366b\n  }\n\n  .sm\\:focus\\:text-purple-100:focus {\n    color: #faf5ff\n  }\n\n  .sm\\:focus\\:text-purple-200:focus {\n    color: #e9d8fd\n  }\n\n  .sm\\:focus\\:text-purple-300:focus {\n    color: #d6bcfa\n  }\n\n  .sm\\:focus\\:text-purple-400:focus {\n    color: #b794f4\n  }\n\n  .sm\\:focus\\:text-purple-500:focus {\n    color: #9f7aea\n  }\n\n  .sm\\:focus\\:text-purple-600:focus {\n    color: #805ad5\n  }\n\n  .sm\\:focus\\:text-purple-700:focus {\n    color: #6b46c1\n  }\n\n  .sm\\:focus\\:text-purple-800:focus {\n    color: #553c9a\n  }\n\n  .sm\\:focus\\:text-purple-900:focus {\n    color: #44337a\n  }\n\n  .sm\\:focus\\:text-pink-100:focus {\n    color: #fff5f7\n  }\n\n  .sm\\:focus\\:text-pink-200:focus {\n    color: #fed7e2\n  }\n\n  .sm\\:focus\\:text-pink-300:focus {\n    color: #fbb6ce\n  }\n\n  .sm\\:focus\\:text-pink-400:focus {\n    color: #f687b3\n  }\n\n  .sm\\:focus\\:text-pink-500:focus {\n    color: #ed64a6\n  }\n\n  .sm\\:focus\\:text-pink-600:focus {\n    color: #d53f8c\n  }\n\n  .sm\\:focus\\:text-pink-700:focus {\n    color: #b83280\n  }\n\n  .sm\\:focus\\:text-pink-800:focus {\n    color: #97266d\n  }\n\n  .sm\\:focus\\:text-pink-900:focus {\n    color: #702459\n  }\n\n  .sm\\:text-xs {\n    font-size: 0.75rem\n  }\n\n  .sm\\:text-sm {\n    font-size: 0.875rem\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem\n  }\n\n  .sm\\:text-lg {\n    font-size: 1.125rem\n  }\n\n  .sm\\:text-xl {\n    font-size: 1.25rem\n  }\n\n  .sm\\:text-2xl {\n    font-size: 1.5rem\n  }\n\n  .sm\\:text-3xl {\n    font-size: 1.875rem\n  }\n\n  .sm\\:text-4xl {\n    font-size: 2.25rem\n  }\n\n  .sm\\:text-5xl {\n    font-size: 3rem\n  }\n\n  .sm\\:text-6xl {\n    font-size: 4rem\n  }\n\n  .sm\\:italic {\n    font-style: italic\n  }\n\n  .sm\\:not-italic {\n    font-style: normal\n  }\n\n  .sm\\:uppercase {\n    text-transform: uppercase\n  }\n\n  .sm\\:lowercase {\n    text-transform: lowercase\n  }\n\n  .sm\\:capitalize {\n    text-transform: capitalize\n  }\n\n  .sm\\:normal-case {\n    text-transform: none\n  }\n\n  .sm\\:underline {\n    text-decoration: underline\n  }\n\n  .sm\\:line-through {\n    text-decoration: line-through\n  }\n\n  .sm\\:no-underline {\n    text-decoration: none\n  }\n\n  .sm\\:hover\\:underline:hover {\n    text-decoration: underline\n  }\n\n  .sm\\:hover\\:line-through:hover {\n    text-decoration: line-through\n  }\n\n  .sm\\:hover\\:no-underline:hover {\n    text-decoration: none\n  }\n\n  .sm\\:focus\\:underline:focus {\n    text-decoration: underline\n  }\n\n  .sm\\:focus\\:line-through:focus {\n    text-decoration: line-through\n  }\n\n  .sm\\:focus\\:no-underline:focus {\n    text-decoration: none\n  }\n\n  .sm\\:antialiased {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale\n  }\n\n  .sm\\:subpixel-antialiased {\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto\n  }\n\n  .sm\\:tracking-tighter {\n    letter-spacing: -0.05em\n  }\n\n  .sm\\:tracking-tight {\n    letter-spacing: -0.025em\n  }\n\n  .sm\\:tracking-normal {\n    letter-spacing: 0\n  }\n\n  .sm\\:tracking-wide {\n    letter-spacing: 0.025em\n  }\n\n  .sm\\:tracking-wider {\n    letter-spacing: 0.05em\n  }\n\n  .sm\\:tracking-widest {\n    letter-spacing: 0.1em\n  }\n\n  .sm\\:select-none {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none\n  }\n\n  .sm\\:select-text {\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text\n  }\n\n  .sm\\:select-all {\n    -webkit-user-select: all;\n       -moz-user-select: all;\n        -ms-user-select: all;\n            user-select: all\n  }\n\n  .sm\\:select-auto {\n    -webkit-user-select: auto;\n       -moz-user-select: auto;\n        -ms-user-select: auto;\n            user-select: auto\n  }\n\n  .sm\\:align-baseline {\n    vertical-align: baseline\n  }\n\n  .sm\\:align-top {\n    vertical-align: top\n  }\n\n  .sm\\:align-middle {\n    vertical-align: middle\n  }\n\n  .sm\\:align-bottom {\n    vertical-align: bottom\n  }\n\n  .sm\\:align-text-top {\n    vertical-align: text-top\n  }\n\n  .sm\\:align-text-bottom {\n    vertical-align: text-bottom\n  }\n\n  .sm\\:visible {\n    visibility: visible\n  }\n\n  .sm\\:invisible {\n    visibility: hidden\n  }\n\n  .sm\\:whitespace-normal {\n    white-space: normal\n  }\n\n  .sm\\:whitespace-no-wrap {\n    white-space: nowrap\n  }\n\n  .sm\\:whitespace-pre {\n    white-space: pre\n  }\n\n  .sm\\:whitespace-pre-line {\n    white-space: pre-line\n  }\n\n  .sm\\:whitespace-pre-wrap {\n    white-space: pre-wrap\n  }\n\n  .sm\\:break-normal {\n    overflow-wrap: normal;\n    word-break: normal\n  }\n\n  .sm\\:break-words {\n    overflow-wrap: break-word\n  }\n\n  .sm\\:break-all {\n    word-break: break-all\n  }\n\n  .sm\\:truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap\n  }\n\n  .sm\\:w-0 {\n    width: 0\n  }\n\n  .sm\\:w-1 {\n    width: 0.25rem\n  }\n\n  .sm\\:w-2 {\n    width: 0.5rem\n  }\n\n  .sm\\:w-3 {\n    width: 0.75rem\n  }\n\n  .sm\\:w-4 {\n    width: 1rem\n  }\n\n  .sm\\:w-5 {\n    width: 1.25rem\n  }\n\n  .sm\\:w-6 {\n    width: 1.5rem\n  }\n\n  .sm\\:w-8 {\n    width: 2rem\n  }\n\n  .sm\\:w-10 {\n    width: 2.5rem\n  }\n\n  .sm\\:w-12 {\n    width: 3rem\n  }\n\n  .sm\\:w-16 {\n    width: 4rem\n  }\n\n  .sm\\:w-20 {\n    width: 5rem\n  }\n\n  .sm\\:w-24 {\n    width: 6rem\n  }\n\n  .sm\\:w-32 {\n    width: 8rem\n  }\n\n  .sm\\:w-40 {\n    width: 10rem\n  }\n\n  .sm\\:w-48 {\n    width: 12rem\n  }\n\n  .sm\\:w-56 {\n    width: 14rem\n  }\n\n  .sm\\:w-64 {\n    width: 16rem\n  }\n\n  .sm\\:w-auto {\n    width: auto\n  }\n\n  .sm\\:w-px {\n    width: 1px\n  }\n\n  .sm\\:w-1\\/2 {\n    width: 50%\n  }\n\n  .sm\\:w-1\\/3 {\n    width: 33.333333%\n  }\n\n  .sm\\:w-2\\/3 {\n    width: 66.666667%\n  }\n\n  .sm\\:w-1\\/4 {\n    width: 25%\n  }\n\n  .sm\\:w-2\\/4 {\n    width: 50%\n  }\n\n  .sm\\:w-3\\/4 {\n    width: 75%\n  }\n\n  .sm\\:w-1\\/5 {\n    width: 20%\n  }\n\n  .sm\\:w-2\\/5 {\n    width: 40%\n  }\n\n  .sm\\:w-3\\/5 {\n    width: 60%\n  }\n\n  .sm\\:w-4\\/5 {\n    width: 80%\n  }\n\n  .sm\\:w-1\\/6 {\n    width: 16.666667%\n  }\n\n  .sm\\:w-2\\/6 {\n    width: 33.333333%\n  }\n\n  .sm\\:w-3\\/6 {\n    width: 50%\n  }\n\n  .sm\\:w-4\\/6 {\n    width: 66.666667%\n  }\n\n  .sm\\:w-5\\/6 {\n    width: 83.333333%\n  }\n\n  .sm\\:w-1\\/12 {\n    width: 8.333333%\n  }\n\n  .sm\\:w-2\\/12 {\n    width: 16.666667%\n  }\n\n  .sm\\:w-3\\/12 {\n    width: 25%\n  }\n\n  .sm\\:w-4\\/12 {\n    width: 33.333333%\n  }\n\n  .sm\\:w-5\\/12 {\n    width: 41.666667%\n  }\n\n  .sm\\:w-6\\/12 {\n    width: 50%\n  }\n\n  .sm\\:w-7\\/12 {\n    width: 58.333333%\n  }\n\n  .sm\\:w-8\\/12 {\n    width: 66.666667%\n  }\n\n  .sm\\:w-9\\/12 {\n    width: 75%\n  }\n\n  .sm\\:w-10\\/12 {\n    width: 83.333333%\n  }\n\n  .sm\\:w-11\\/12 {\n    width: 91.666667%\n  }\n\n  .sm\\:w-full {\n    width: 100%\n  }\n\n  .sm\\:w-screen {\n    width: 100vw\n  }\n\n  .sm\\:z-0 {\n    z-index: 0\n  }\n\n  .sm\\:z-10 {\n    z-index: 10\n  }\n\n  .sm\\:z-20 {\n    z-index: 20\n  }\n\n  .sm\\:z-30 {\n    z-index: 30\n  }\n\n  .sm\\:z-40 {\n    z-index: 40\n  }\n\n  .sm\\:z-50 {\n    z-index: 50\n  }\n\n  .sm\\:z-auto {\n    z-index: auto\n  }\n}\n\n@media (min-width: 768px) {\n  .md\\:sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0\n  }\n\n  .md\\:not-sr-only {\n    position: static;\n    width: auto;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n    white-space: normal\n  }\n\n  .md\\:focus\\:sr-only:focus {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0\n  }\n\n  .md\\:focus\\:not-sr-only:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n    white-space: normal\n  }\n\n  .md\\:appearance-none {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none\n  }\n\n  .md\\:bg-fixed {\n    background-attachment: fixed\n  }\n\n  .md\\:bg-local {\n    background-attachment: local\n  }\n\n  .md\\:bg-scroll {\n    background-attachment: scroll\n  }\n\n  .md\\:bg-transparent {\n    background-color: transparent\n  }\n\n  .md\\:bg-black {\n    background-color: #000\n  }\n\n  .md\\:bg-white {\n    background-color: #fff\n  }\n\n  .md\\:bg-gray-100 {\n    background-color: #f7fafc\n  }\n\n  .md\\:bg-gray-200 {\n    background-color: #edf2f7\n  }\n\n  .md\\:bg-gray-300 {\n    background-color: #e2e8f0\n  }\n\n  .md\\:bg-gray-400 {\n    background-color: #cbd5e0\n  }\n\n  .md\\:bg-gray-500 {\n    background-color: #a0aec0\n  }\n\n  .md\\:bg-gray-600 {\n    background-color: #718096\n  }\n\n  .md\\:bg-gray-700 {\n    background-color: #4a5568\n  }\n\n  .md\\:bg-gray-800 {\n    background-color: #2d3748\n  }\n\n  .md\\:bg-gray-900 {\n    background-color: #1a202c\n  }\n\n  .md\\:bg-red-100 {\n    background-color: #fff5f5\n  }\n\n  .md\\:bg-red-200 {\n    background-color: #fed7d7\n  }\n\n  .md\\:bg-red-300 {\n    background-color: #feb2b2\n  }\n\n  .md\\:bg-red-400 {\n    background-color: #fc8181\n  }\n\n  .md\\:bg-red-500 {\n    background-color: #f56565\n  }\n\n  .md\\:bg-red-600 {\n    background-color: #e53e3e\n  }\n\n  .md\\:bg-red-700 {\n    background-color: #c53030\n  }\n\n  .md\\:bg-red-800 {\n    background-color: #9b2c2c\n  }\n\n  .md\\:bg-red-900 {\n    background-color: #742a2a\n  }\n\n  .md\\:bg-orange-100 {\n    background-color: #fffaf0\n  }\n\n  .md\\:bg-orange-200 {\n    background-color: #feebc8\n  }\n\n  .md\\:bg-orange-300 {\n    background-color: #fbd38d\n  }\n\n  .md\\:bg-orange-400 {\n    background-color: #f6ad55\n  }\n\n  .md\\:bg-orange-500 {\n    background-color: #ed8936\n  }\n\n  .md\\:bg-orange-600 {\n    background-color: #dd6b20\n  }\n\n  .md\\:bg-orange-700 {\n    background-color: #c05621\n  }\n\n  .md\\:bg-orange-800 {\n    background-color: #9c4221\n  }\n\n  .md\\:bg-orange-900 {\n    background-color: #7b341e\n  }\n\n  .md\\:bg-yellow-100 {\n    background-color: #fffff0\n  }\n\n  .md\\:bg-yellow-200 {\n    background-color: #fefcbf\n  }\n\n  .md\\:bg-yellow-300 {\n    background-color: #faf089\n  }\n\n  .md\\:bg-yellow-400 {\n    background-color: #f6e05e\n  }\n\n  .md\\:bg-yellow-500 {\n    background-color: #ecc94b\n  }\n\n  .md\\:bg-yellow-600 {\n    background-color: #d69e2e\n  }\n\n  .md\\:bg-yellow-700 {\n    background-color: #b7791f\n  }\n\n  .md\\:bg-yellow-800 {\n    background-color: #975a16\n  }\n\n  .md\\:bg-yellow-900 {\n    background-color: #744210\n  }\n\n  .md\\:bg-green-100 {\n    background-color: #f0fff4\n  }\n\n  .md\\:bg-green-200 {\n    background-color: #c6f6d5\n  }\n\n  .md\\:bg-green-300 {\n    background-color: #9ae6b4\n  }\n\n  .md\\:bg-green-400 {\n    background-color: #68d391\n  }\n\n  .md\\:bg-green-500 {\n    background-color: #48bb78\n  }\n\n  .md\\:bg-green-600 {\n    background-color: #38a169\n  }\n\n  .md\\:bg-green-700 {\n    background-color: #2f855a\n  }\n\n  .md\\:bg-green-800 {\n    background-color: #276749\n  }\n\n  .md\\:bg-green-900 {\n    background-color: #22543d\n  }\n\n  .md\\:bg-teal-100 {\n    background-color: #e6fffa\n  }\n\n  .md\\:bg-teal-200 {\n    background-color: #b2f5ea\n  }\n\n  .md\\:bg-teal-300 {\n    background-color: #81e6d9\n  }\n\n  .md\\:bg-teal-400 {\n    background-color: #4fd1c5\n  }\n\n  .md\\:bg-teal-500 {\n    background-color: #38b2ac\n  }\n\n  .md\\:bg-teal-600 {\n    background-color: #319795\n  }\n\n  .md\\:bg-teal-700 {\n    background-color: #2c7a7b\n  }\n\n  .md\\:bg-teal-800 {\n    background-color: #285e61\n  }\n\n  .md\\:bg-teal-900 {\n    background-color: #234e52\n  }\n\n  .md\\:bg-blue-100 {\n    background-color: #ebf8ff\n  }\n\n  .md\\:bg-blue-200 {\n    background-color: #bee3f8\n  }\n\n  .md\\:bg-blue-300 {\n    background-color: #90cdf4\n  }\n\n  .md\\:bg-blue-400 {\n    background-color: #63b3ed\n  }\n\n  .md\\:bg-blue-500 {\n    background-color: #4299e1\n  }\n\n  .md\\:bg-blue-600 {\n    background-color: #3182ce\n  }\n\n  .md\\:bg-blue-700 {\n    background-color: #2b6cb0\n  }\n\n  .md\\:bg-blue-800 {\n    background-color: #2c5282\n  }\n\n  .md\\:bg-blue-900 {\n    background-color: #2a4365\n  }\n\n  .md\\:bg-indigo-100 {\n    background-color: #ebf4ff\n  }\n\n  .md\\:bg-indigo-200 {\n    background-color: #c3dafe\n  }\n\n  .md\\:bg-indigo-300 {\n    background-color: #a3bffa\n  }\n\n  .md\\:bg-indigo-400 {\n    background-color: #7f9cf5\n  }\n\n  .md\\:bg-indigo-500 {\n    background-color: #667eea\n  }\n\n  .md\\:bg-indigo-600 {\n    background-color: #5a67d8\n  }\n\n  .md\\:bg-indigo-700 {\n    background-color: #4c51bf\n  }\n\n  .md\\:bg-indigo-800 {\n    background-color: #434190\n  }\n\n  .md\\:bg-indigo-900 {\n    background-color: #3c366b\n  }\n\n  .md\\:bg-purple-100 {\n    background-color: #faf5ff\n  }\n\n  .md\\:bg-purple-200 {\n    background-color: #e9d8fd\n  }\n\n  .md\\:bg-purple-300 {\n    background-color: #d6bcfa\n  }\n\n  .md\\:bg-purple-400 {\n    background-color: #b794f4\n  }\n\n  .md\\:bg-purple-500 {\n    background-color: #9f7aea\n  }\n\n  .md\\:bg-purple-600 {\n    background-color: #805ad5\n  }\n\n  .md\\:bg-purple-700 {\n    background-color: #6b46c1\n  }\n\n  .md\\:bg-purple-800 {\n    background-color: #553c9a\n  }\n\n  .md\\:bg-purple-900 {\n    background-color: #44337a\n  }\n\n  .md\\:bg-pink-100 {\n    background-color: #fff5f7\n  }\n\n  .md\\:bg-pink-200 {\n    background-color: #fed7e2\n  }\n\n  .md\\:bg-pink-300 {\n    background-color: #fbb6ce\n  }\n\n  .md\\:bg-pink-400 {\n    background-color: #f687b3\n  }\n\n  .md\\:bg-pink-500 {\n    background-color: #ed64a6\n  }\n\n  .md\\:bg-pink-600 {\n    background-color: #d53f8c\n  }\n\n  .md\\:bg-pink-700 {\n    background-color: #b83280\n  }\n\n  .md\\:bg-pink-800 {\n    background-color: #97266d\n  }\n\n  .md\\:bg-pink-900 {\n    background-color: #702459\n  }\n\n  .md\\:hover\\:bg-transparent:hover {\n    background-color: transparent\n  }\n\n  .md\\:hover\\:bg-black:hover {\n    background-color: #000\n  }\n\n  .md\\:hover\\:bg-white:hover {\n    background-color: #fff\n  }\n\n  .md\\:hover\\:bg-gray-100:hover {\n    background-color: #f7fafc\n  }\n\n  .md\\:hover\\:bg-gray-200:hover {\n    background-color: #edf2f7\n  }\n\n  .md\\:hover\\:bg-gray-300:hover {\n    background-color: #e2e8f0\n  }\n\n  .md\\:hover\\:bg-gray-400:hover {\n    background-color: #cbd5e0\n  }\n\n  .md\\:hover\\:bg-gray-500:hover {\n    background-color: #a0aec0\n  }\n\n  .md\\:hover\\:bg-gray-600:hover {\n    background-color: #718096\n  }\n\n  .md\\:hover\\:bg-gray-700:hover {\n    background-color: #4a5568\n  }\n\n  .md\\:hover\\:bg-gray-800:hover {\n    background-color: #2d3748\n  }\n\n  .md\\:hover\\:bg-gray-900:hover {\n    background-color: #1a202c\n  }\n\n  .md\\:hover\\:bg-red-100:hover {\n    background-color: #fff5f5\n  }\n\n  .md\\:hover\\:bg-red-200:hover {\n    background-color: #fed7d7\n  }\n\n  .md\\:hover\\:bg-red-300:hover {\n    background-color: #feb2b2\n  }\n\n  .md\\:hover\\:bg-red-400:hover {\n    background-color: #fc8181\n  }\n\n  .md\\:hover\\:bg-red-500:hover {\n    background-color: #f56565\n  }\n\n  .md\\:hover\\:bg-red-600:hover {\n    background-color: #e53e3e\n  }\n\n  .md\\:hover\\:bg-red-700:hover {\n    background-color: #c53030\n  }\n\n  .md\\:hover\\:bg-red-800:hover {\n    background-color: #9b2c2c\n  }\n\n  .md\\:hover\\:bg-red-900:hover {\n    background-color: #742a2a\n  }\n\n  .md\\:hover\\:bg-orange-100:hover {\n    background-color: #fffaf0\n  }\n\n  .md\\:hover\\:bg-orange-200:hover {\n    background-color: #feebc8\n  }\n\n  .md\\:hover\\:bg-orange-300:hover {\n    background-color: #fbd38d\n  }\n\n  .md\\:hover\\:bg-orange-400:hover {\n    background-color: #f6ad55\n  }\n\n  .md\\:hover\\:bg-orange-500:hover {\n    background-color: #ed8936\n  }\n\n  .md\\:hover\\:bg-orange-600:hover {\n    background-color: #dd6b20\n  }\n\n  .md\\:hover\\:bg-orange-700:hover {\n    background-color: #c05621\n  }\n\n  .md\\:hover\\:bg-orange-800:hover {\n    background-color: #9c4221\n  }\n\n  .md\\:hover\\:bg-orange-900:hover {\n    background-color: #7b341e\n  }\n\n  .md\\:hover\\:bg-yellow-100:hover {\n    background-color: #fffff0\n  }\n\n  .md\\:hover\\:bg-yellow-200:hover {\n    background-color: #fefcbf\n  }\n\n  .md\\:hover\\:bg-yellow-300:hover {\n    background-color: #faf089\n  }\n\n  .md\\:hover\\:bg-yellow-400:hover {\n    background-color: #f6e05e\n  }\n\n  .md\\:hover\\:bg-yellow-500:hover {\n    background-color: #ecc94b\n  }\n\n  .md\\:hover\\:bg-yellow-600:hover {\n    background-color: #d69e2e\n  }\n\n  .md\\:hover\\:bg-yellow-700:hover {\n    background-color: #b7791f\n  }\n\n  .md\\:hover\\:bg-yellow-800:hover {\n    background-color: #975a16\n  }\n\n  .md\\:hover\\:bg-yellow-900:hover {\n    background-color: #744210\n  }\n\n  .md\\:hover\\:bg-green-100:hover {\n    background-color: #f0fff4\n  }\n\n  .md\\:hover\\:bg-green-200:hover {\n    background-color: #c6f6d5\n  }\n\n  .md\\:hover\\:bg-green-300:hover {\n    background-color: #9ae6b4\n  }\n\n  .md\\:hover\\:bg-green-400:hover {\n    background-color: #68d391\n  }\n\n  .md\\:hover\\:bg-green-500:hover {\n    background-color: #48bb78\n  }\n\n  .md\\:hover\\:bg-green-600:hover {\n    background-color: #38a169\n  }\n\n  .md\\:hover\\:bg-green-700:hover {\n    background-color: #2f855a\n  }\n\n  .md\\:hover\\:bg-green-800:hover {\n    background-color: #276749\n  }\n\n  .md\\:hover\\:bg-green-900:hover {\n    background-color: #22543d\n  }\n\n  .md\\:hover\\:bg-teal-100:hover {\n    background-color: #e6fffa\n  }\n\n  .md\\:hover\\:bg-teal-200:hover {\n    background-color: #b2f5ea\n  }\n\n  .md\\:hover\\:bg-teal-300:hover {\n    background-color: #81e6d9\n  }\n\n  .md\\:hover\\:bg-teal-400:hover {\n    background-color: #4fd1c5\n  }\n\n  .md\\:hover\\:bg-teal-500:hover {\n    background-color: #38b2ac\n  }\n\n  .md\\:hover\\:bg-teal-600:hover {\n    background-color: #319795\n  }\n\n  .md\\:hover\\:bg-teal-700:hover {\n    background-color: #2c7a7b\n  }\n\n  .md\\:hover\\:bg-teal-800:hover {\n    background-color: #285e61\n  }\n\n  .md\\:hover\\:bg-teal-900:hover {\n    background-color: #234e52\n  }\n\n  .md\\:hover\\:bg-blue-100:hover {\n    background-color: #ebf8ff\n  }\n\n  .md\\:hover\\:bg-blue-200:hover {\n    background-color: #bee3f8\n  }\n\n  .md\\:hover\\:bg-blue-300:hover {\n    background-color: #90cdf4\n  }\n\n  .md\\:hover\\:bg-blue-400:hover {\n    background-color: #63b3ed\n  }\n\n  .md\\:hover\\:bg-blue-500:hover {\n    background-color: #4299e1\n  }\n\n  .md\\:hover\\:bg-blue-600:hover {\n    background-color: #3182ce\n  }\n\n  .md\\:hover\\:bg-blue-700:hover {\n    background-color: #2b6cb0\n  }\n\n  .md\\:hover\\:bg-blue-800:hover {\n    background-color: #2c5282\n  }\n\n  .md\\:hover\\:bg-blue-900:hover {\n    background-color: #2a4365\n  }\n\n  .md\\:hover\\:bg-indigo-100:hover {\n    background-color: #ebf4ff\n  }\n\n  .md\\:hover\\:bg-indigo-200:hover {\n    background-color: #c3dafe\n  }\n\n  .md\\:hover\\:bg-indigo-300:hover {\n    background-color: #a3bffa\n  }\n\n  .md\\:hover\\:bg-indigo-400:hover {\n    background-color: #7f9cf5\n  }\n\n  .md\\:hover\\:bg-indigo-500:hover {\n    background-color: #667eea\n  }\n\n  .md\\:hover\\:bg-indigo-600:hover {\n    background-color: #5a67d8\n  }\n\n  .md\\:hover\\:bg-indigo-700:hover {\n    background-color: #4c51bf\n  }\n\n  .md\\:hover\\:bg-indigo-800:hover {\n    background-color: #434190\n  }\n\n  .md\\:hover\\:bg-indigo-900:hover {\n    background-color: #3c366b\n  }\n\n  .md\\:hover\\:bg-purple-100:hover {\n    background-color: #faf5ff\n  }\n\n  .md\\:hover\\:bg-purple-200:hover {\n    background-color: #e9d8fd\n  }\n\n  .md\\:hover\\:bg-purple-300:hover {\n    background-color: #d6bcfa\n  }\n\n  .md\\:hover\\:bg-purple-400:hover {\n    background-color: #b794f4\n  }\n\n  .md\\:hover\\:bg-purple-500:hover {\n    background-color: #9f7aea\n  }\n\n  .md\\:hover\\:bg-purple-600:hover {\n    background-color: #805ad5\n  }\n\n  .md\\:hover\\:bg-purple-700:hover {\n    background-color: #6b46c1\n  }\n\n  .md\\:hover\\:bg-purple-800:hover {\n    background-color: #553c9a\n  }\n\n  .md\\:hover\\:bg-purple-900:hover {\n    background-color: #44337a\n  }\n\n  .md\\:hover\\:bg-pink-100:hover {\n    background-color: #fff5f7\n  }\n\n  .md\\:hover\\:bg-pink-200:hover {\n    background-color: #fed7e2\n  }\n\n  .md\\:hover\\:bg-pink-300:hover {\n    background-color: #fbb6ce\n  }\n\n  .md\\:hover\\:bg-pink-400:hover {\n    background-color: #f687b3\n  }\n\n  .md\\:hover\\:bg-pink-500:hover {\n    background-color: #ed64a6\n  }\n\n  .md\\:hover\\:bg-pink-600:hover {\n    background-color: #d53f8c\n  }\n\n  .md\\:hover\\:bg-pink-700:hover {\n    background-color: #b83280\n  }\n\n  .md\\:hover\\:bg-pink-800:hover {\n    background-color: #97266d\n  }\n\n  .md\\:hover\\:bg-pink-900:hover {\n    background-color: #702459\n  }\n\n  .md\\:focus\\:bg-transparent:focus {\n    background-color: transparent\n  }\n\n  .md\\:focus\\:bg-black:focus {\n    background-color: #000\n  }\n\n  .md\\:focus\\:bg-white:focus {\n    background-color: #fff\n  }\n\n  .md\\:focus\\:bg-gray-100:focus {\n    background-color: #f7fafc\n  }\n\n  .md\\:focus\\:bg-gray-200:focus {\n    background-color: #edf2f7\n  }\n\n  .md\\:focus\\:bg-gray-300:focus {\n    background-color: #e2e8f0\n  }\n\n  .md\\:focus\\:bg-gray-400:focus {\n    background-color: #cbd5e0\n  }\n\n  .md\\:focus\\:bg-gray-500:focus {\n    background-color: #a0aec0\n  }\n\n  .md\\:focus\\:bg-gray-600:focus {\n    background-color: #718096\n  }\n\n  .md\\:focus\\:bg-gray-700:focus {\n    background-color: #4a5568\n  }\n\n  .md\\:focus\\:bg-gray-800:focus {\n    background-color: #2d3748\n  }\n\n  .md\\:focus\\:bg-gray-900:focus {\n    background-color: #1a202c\n  }\n\n  .md\\:focus\\:bg-red-100:focus {\n    background-color: #fff5f5\n  }\n\n  .md\\:focus\\:bg-red-200:focus {\n    background-color: #fed7d7\n  }\n\n  .md\\:focus\\:bg-red-300:focus {\n    background-color: #feb2b2\n  }\n\n  .md\\:focus\\:bg-red-400:focus {\n    background-color: #fc8181\n  }\n\n  .md\\:focus\\:bg-red-500:focus {\n    background-color: #f56565\n  }\n\n  .md\\:focus\\:bg-red-600:focus {\n    background-color: #e53e3e\n  }\n\n  .md\\:focus\\:bg-red-700:focus {\n    background-color: #c53030\n  }\n\n  .md\\:focus\\:bg-red-800:focus {\n    background-color: #9b2c2c\n  }\n\n  .md\\:focus\\:bg-red-900:focus {\n    background-color: #742a2a\n  }\n\n  .md\\:focus\\:bg-orange-100:focus {\n    background-color: #fffaf0\n  }\n\n  .md\\:focus\\:bg-orange-200:focus {\n    background-color: #feebc8\n  }\n\n  .md\\:focus\\:bg-orange-300:focus {\n    background-color: #fbd38d\n  }\n\n  .md\\:focus\\:bg-orange-400:focus {\n    background-color: #f6ad55\n  }\n\n  .md\\:focus\\:bg-orange-500:focus {\n    background-color: #ed8936\n  }\n\n  .md\\:focus\\:bg-orange-600:focus {\n    background-color: #dd6b20\n  }\n\n  .md\\:focus\\:bg-orange-700:focus {\n    background-color: #c05621\n  }\n\n  .md\\:focus\\:bg-orange-800:focus {\n    background-color: #9c4221\n  }\n\n  .md\\:focus\\:bg-orange-900:focus {\n    background-color: #7b341e\n  }\n\n  .md\\:focus\\:bg-yellow-100:focus {\n    background-color: #fffff0\n  }\n\n  .md\\:focus\\:bg-yellow-200:focus {\n    background-color: #fefcbf\n  }\n\n  .md\\:focus\\:bg-yellow-300:focus {\n    background-color: #faf089\n  }\n\n  .md\\:focus\\:bg-yellow-400:focus {\n    background-color: #f6e05e\n  }\n\n  .md\\:focus\\:bg-yellow-500:focus {\n    background-color: #ecc94b\n  }\n\n  .md\\:focus\\:bg-yellow-600:focus {\n    background-color: #d69e2e\n  }\n\n  .md\\:focus\\:bg-yellow-700:focus {\n    background-color: #b7791f\n  }\n\n  .md\\:focus\\:bg-yellow-800:focus {\n    background-color: #975a16\n  }\n\n  .md\\:focus\\:bg-yellow-900:focus {\n    background-color: #744210\n  }\n\n  .md\\:focus\\:bg-green-100:focus {\n    background-color: #f0fff4\n  }\n\n  .md\\:focus\\:bg-green-200:focus {\n    background-color: #c6f6d5\n  }\n\n  .md\\:focus\\:bg-green-300:focus {\n    background-color: #9ae6b4\n  }\n\n  .md\\:focus\\:bg-green-400:focus {\n    background-color: #68d391\n  }\n\n  .md\\:focus\\:bg-green-500:focus {\n    background-color: #48bb78\n  }\n\n  .md\\:focus\\:bg-green-600:focus {\n    background-color: #38a169\n  }\n\n  .md\\:focus\\:bg-green-700:focus {\n    background-color: #2f855a\n  }\n\n  .md\\:focus\\:bg-green-800:focus {\n    background-color: #276749\n  }\n\n  .md\\:focus\\:bg-green-900:focus {\n    background-color: #22543d\n  }\n\n  .md\\:focus\\:bg-teal-100:focus {\n    background-color: #e6fffa\n  }\n\n  .md\\:focus\\:bg-teal-200:focus {\n    background-color: #b2f5ea\n  }\n\n  .md\\:focus\\:bg-teal-300:focus {\n    background-color: #81e6d9\n  }\n\n  .md\\:focus\\:bg-teal-400:focus {\n    background-color: #4fd1c5\n  }\n\n  .md\\:focus\\:bg-teal-500:focus {\n    background-color: #38b2ac\n  }\n\n  .md\\:focus\\:bg-teal-600:focus {\n    background-color: #319795\n  }\n\n  .md\\:focus\\:bg-teal-700:focus {\n    background-color: #2c7a7b\n  }\n\n  .md\\:focus\\:bg-teal-800:focus {\n    background-color: #285e61\n  }\n\n  .md\\:focus\\:bg-teal-900:focus {\n    background-color: #234e52\n  }\n\n  .md\\:focus\\:bg-blue-100:focus {\n    background-color: #ebf8ff\n  }\n\n  .md\\:focus\\:bg-blue-200:focus {\n    background-color: #bee3f8\n  }\n\n  .md\\:focus\\:bg-blue-300:focus {\n    background-color: #90cdf4\n  }\n\n  .md\\:focus\\:bg-blue-400:focus {\n    background-color: #63b3ed\n  }\n\n  .md\\:focus\\:bg-blue-500:focus {\n    background-color: #4299e1\n  }\n\n  .md\\:focus\\:bg-blue-600:focus {\n    background-color: #3182ce\n  }\n\n  .md\\:focus\\:bg-blue-700:focus {\n    background-color: #2b6cb0\n  }\n\n  .md\\:focus\\:bg-blue-800:focus {\n    background-color: #2c5282\n  }\n\n  .md\\:focus\\:bg-blue-900:focus {\n    background-color: #2a4365\n  }\n\n  .md\\:focus\\:bg-indigo-100:focus {\n    background-color: #ebf4ff\n  }\n\n  .md\\:focus\\:bg-indigo-200:focus {\n    background-color: #c3dafe\n  }\n\n  .md\\:focus\\:bg-indigo-300:focus {\n    background-color: #a3bffa\n  }\n\n  .md\\:focus\\:bg-indigo-400:focus {\n    background-color: #7f9cf5\n  }\n\n  .md\\:focus\\:bg-indigo-500:focus {\n    background-color: #667eea\n  }\n\n  .md\\:focus\\:bg-indigo-600:focus {\n    background-color: #5a67d8\n  }\n\n  .md\\:focus\\:bg-indigo-700:focus {\n    background-color: #4c51bf\n  }\n\n  .md\\:focus\\:bg-indigo-800:focus {\n    background-color: #434190\n  }\n\n  .md\\:focus\\:bg-indigo-900:focus {\n    background-color: #3c366b\n  }\n\n  .md\\:focus\\:bg-purple-100:focus {\n    background-color: #faf5ff\n  }\n\n  .md\\:focus\\:bg-purple-200:focus {\n    background-color: #e9d8fd\n  }\n\n  .md\\:focus\\:bg-purple-300:focus {\n    background-color: #d6bcfa\n  }\n\n  .md\\:focus\\:bg-purple-400:focus {\n    background-color: #b794f4\n  }\n\n  .md\\:focus\\:bg-purple-500:focus {\n    background-color: #9f7aea\n  }\n\n  .md\\:focus\\:bg-purple-600:focus {\n    background-color: #805ad5\n  }\n\n  .md\\:focus\\:bg-purple-700:focus {\n    background-color: #6b46c1\n  }\n\n  .md\\:focus\\:bg-purple-800:focus {\n    background-color: #553c9a\n  }\n\n  .md\\:focus\\:bg-purple-900:focus {\n    background-color: #44337a\n  }\n\n  .md\\:focus\\:bg-pink-100:focus {\n    background-color: #fff5f7\n  }\n\n  .md\\:focus\\:bg-pink-200:focus {\n    background-color: #fed7e2\n  }\n\n  .md\\:focus\\:bg-pink-300:focus {\n    background-color: #fbb6ce\n  }\n\n  .md\\:focus\\:bg-pink-400:focus {\n    background-color: #f687b3\n  }\n\n  .md\\:focus\\:bg-pink-500:focus {\n    background-color: #ed64a6\n  }\n\n  .md\\:focus\\:bg-pink-600:focus {\n    background-color: #d53f8c\n  }\n\n  .md\\:focus\\:bg-pink-700:focus {\n    background-color: #b83280\n  }\n\n  .md\\:focus\\:bg-pink-800:focus {\n    background-color: #97266d\n  }\n\n  .md\\:focus\\:bg-pink-900:focus {\n    background-color: #702459\n  }\n\n  .md\\:bg-bottom {\n    background-position: bottom\n  }\n\n  .md\\:bg-center {\n    background-position: center\n  }\n\n  .md\\:bg-left {\n    background-position: left\n  }\n\n  .md\\:bg-left-bottom {\n    background-position: left bottom\n  }\n\n  .md\\:bg-left-top {\n    background-position: left top\n  }\n\n  .md\\:bg-right {\n    background-position: right\n  }\n\n  .md\\:bg-right-bottom {\n    background-position: right bottom\n  }\n\n  .md\\:bg-right-top {\n    background-position: right top\n  }\n\n  .md\\:bg-top {\n    background-position: top\n  }\n\n  .md\\:bg-repeat {\n    background-repeat: repeat\n  }\n\n  .md\\:bg-no-repeat {\n    background-repeat: no-repeat\n  }\n\n  .md\\:bg-repeat-x {\n    background-repeat: repeat-x\n  }\n\n  .md\\:bg-repeat-y {\n    background-repeat: repeat-y\n  }\n\n  .md\\:bg-repeat-round {\n    background-repeat: round\n  }\n\n  .md\\:bg-repeat-space {\n    background-repeat: space\n  }\n\n  .md\\:bg-auto {\n    background-size: auto\n  }\n\n  .md\\:bg-cover {\n    background-size: cover\n  }\n\n  .md\\:bg-contain {\n    background-size: contain\n  }\n\n  .md\\:border-collapse {\n    border-collapse: collapse\n  }\n\n  .md\\:border-separate {\n    border-collapse: separate\n  }\n\n  .md\\:border-transparent {\n    border-color: transparent\n  }\n\n  .md\\:border-black {\n    border-color: #000\n  }\n\n  .md\\:border-white {\n    border-color: #fff\n  }\n\n  .md\\:border-gray-100 {\n    border-color: #f7fafc\n  }\n\n  .md\\:border-gray-200 {\n    border-color: #edf2f7\n  }\n\n  .md\\:border-gray-300 {\n    border-color: #e2e8f0\n  }\n\n  .md\\:border-gray-400 {\n    border-color: #cbd5e0\n  }\n\n  .md\\:border-gray-500 {\n    border-color: #a0aec0\n  }\n\n  .md\\:border-gray-600 {\n    border-color: #718096\n  }\n\n  .md\\:border-gray-700 {\n    border-color: #4a5568\n  }\n\n  .md\\:border-gray-800 {\n    border-color: #2d3748\n  }\n\n  .md\\:border-gray-900 {\n    border-color: #1a202c\n  }\n\n  .md\\:border-red-100 {\n    border-color: #fff5f5\n  }\n\n  .md\\:border-red-200 {\n    border-color: #fed7d7\n  }\n\n  .md\\:border-red-300 {\n    border-color: #feb2b2\n  }\n\n  .md\\:border-red-400 {\n    border-color: #fc8181\n  }\n\n  .md\\:border-red-500 {\n    border-color: #f56565\n  }\n\n  .md\\:border-red-600 {\n    border-color: #e53e3e\n  }\n\n  .md\\:border-red-700 {\n    border-color: #c53030\n  }\n\n  .md\\:border-red-800 {\n    border-color: #9b2c2c\n  }\n\n  .md\\:border-red-900 {\n    border-color: #742a2a\n  }\n\n  .md\\:border-orange-100 {\n    border-color: #fffaf0\n  }\n\n  .md\\:border-orange-200 {\n    border-color: #feebc8\n  }\n\n  .md\\:border-orange-300 {\n    border-color: #fbd38d\n  }\n\n  .md\\:border-orange-400 {\n    border-color: #f6ad55\n  }\n\n  .md\\:border-orange-500 {\n    border-color: #ed8936\n  }\n\n  .md\\:border-orange-600 {\n    border-color: #dd6b20\n  }\n\n  .md\\:border-orange-700 {\n    border-color: #c05621\n  }\n\n  .md\\:border-orange-800 {\n    border-color: #9c4221\n  }\n\n  .md\\:border-orange-900 {\n    border-color: #7b341e\n  }\n\n  .md\\:border-yellow-100 {\n    border-color: #fffff0\n  }\n\n  .md\\:border-yellow-200 {\n    border-color: #fefcbf\n  }\n\n  .md\\:border-yellow-300 {\n    border-color: #faf089\n  }\n\n  .md\\:border-yellow-400 {\n    border-color: #f6e05e\n  }\n\n  .md\\:border-yellow-500 {\n    border-color: #ecc94b\n  }\n\n  .md\\:border-yellow-600 {\n    border-color: #d69e2e\n  }\n\n  .md\\:border-yellow-700 {\n    border-color: #b7791f\n  }\n\n  .md\\:border-yellow-800 {\n    border-color: #975a16\n  }\n\n  .md\\:border-yellow-900 {\n    border-color: #744210\n  }\n\n  .md\\:border-green-100 {\n    border-color: #f0fff4\n  }\n\n  .md\\:border-green-200 {\n    border-color: #c6f6d5\n  }\n\n  .md\\:border-green-300 {\n    border-color: #9ae6b4\n  }\n\n  .md\\:border-green-400 {\n    border-color: #68d391\n  }\n\n  .md\\:border-green-500 {\n    border-color: #48bb78\n  }\n\n  .md\\:border-green-600 {\n    border-color: #38a169\n  }\n\n  .md\\:border-green-700 {\n    border-color: #2f855a\n  }\n\n  .md\\:border-green-800 {\n    border-color: #276749\n  }\n\n  .md\\:border-green-900 {\n    border-color: #22543d\n  }\n\n  .md\\:border-teal-100 {\n    border-color: #e6fffa\n  }\n\n  .md\\:border-teal-200 {\n    border-color: #b2f5ea\n  }\n\n  .md\\:border-teal-300 {\n    border-color: #81e6d9\n  }\n\n  .md\\:border-teal-400 {\n    border-color: #4fd1c5\n  }\n\n  .md\\:border-teal-500 {\n    border-color: #38b2ac\n  }\n\n  .md\\:border-teal-600 {\n    border-color: #319795\n  }\n\n  .md\\:border-teal-700 {\n    border-color: #2c7a7b\n  }\n\n  .md\\:border-teal-800 {\n    border-color: #285e61\n  }\n\n  .md\\:border-teal-900 {\n    border-color: #234e52\n  }\n\n  .md\\:border-blue-100 {\n    border-color: #ebf8ff\n  }\n\n  .md\\:border-blue-200 {\n    border-color: #bee3f8\n  }\n\n  .md\\:border-blue-300 {\n    border-color: #90cdf4\n  }\n\n  .md\\:border-blue-400 {\n    border-color: #63b3ed\n  }\n\n  .md\\:border-blue-500 {\n    border-color: #4299e1\n  }\n\n  .md\\:border-blue-600 {\n    border-color: #3182ce\n  }\n\n  .md\\:border-blue-700 {\n    border-color: #2b6cb0\n  }\n\n  .md\\:border-blue-800 {\n    border-color: #2c5282\n  }\n\n  .md\\:border-blue-900 {\n    border-color: #2a4365\n  }\n\n  .md\\:border-indigo-100 {\n    border-color: #ebf4ff\n  }\n\n  .md\\:border-indigo-200 {\n    border-color: #c3dafe\n  }\n\n  .md\\:border-indigo-300 {\n    border-color: #a3bffa\n  }\n\n  .md\\:border-indigo-400 {\n    border-color: #7f9cf5\n  }\n\n  .md\\:border-indigo-500 {\n    border-color: #667eea\n  }\n\n  .md\\:border-indigo-600 {\n    border-color: #5a67d8\n  }\n\n  .md\\:border-indigo-700 {\n    border-color: #4c51bf\n  }\n\n  .md\\:border-indigo-800 {\n    border-color: #434190\n  }\n\n  .md\\:border-indigo-900 {\n    border-color: #3c366b\n  }\n\n  .md\\:border-purple-100 {\n    border-color: #faf5ff\n  }\n\n  .md\\:border-purple-200 {\n    border-color: #e9d8fd\n  }\n\n  .md\\:border-purple-300 {\n    border-color: #d6bcfa\n  }\n\n  .md\\:border-purple-400 {\n    border-color: #b794f4\n  }\n\n  .md\\:border-purple-500 {\n    border-color: #9f7aea\n  }\n\n  .md\\:border-purple-600 {\n    border-color: #805ad5\n  }\n\n  .md\\:border-purple-700 {\n    border-color: #6b46c1\n  }\n\n  .md\\:border-purple-800 {\n    border-color: #553c9a\n  }\n\n  .md\\:border-purple-900 {\n    border-color: #44337a\n  }\n\n  .md\\:border-pink-100 {\n    border-color: #fff5f7\n  }\n\n  .md\\:border-pink-200 {\n    border-color: #fed7e2\n  }\n\n  .md\\:border-pink-300 {\n    border-color: #fbb6ce\n  }\n\n  .md\\:border-pink-400 {\n    border-color: #f687b3\n  }\n\n  .md\\:border-pink-500 {\n    border-color: #ed64a6\n  }\n\n  .md\\:border-pink-600 {\n    border-color: #d53f8c\n  }\n\n  .md\\:border-pink-700 {\n    border-color: #b83280\n  }\n\n  .md\\:border-pink-800 {\n    border-color: #97266d\n  }\n\n  .md\\:border-pink-900 {\n    border-color: #702459\n  }\n\n  .md\\:hover\\:border-transparent:hover {\n    border-color: transparent\n  }\n\n  .md\\:hover\\:border-black:hover {\n    border-color: #000\n  }\n\n  .md\\:hover\\:border-white:hover {\n    border-color: #fff\n  }\n\n  .md\\:hover\\:border-gray-100:hover {\n    border-color: #f7fafc\n  }\n\n  .md\\:hover\\:border-gray-200:hover {\n    border-color: #edf2f7\n  }\n\n  .md\\:hover\\:border-gray-300:hover {\n    border-color: #e2e8f0\n  }\n\n  .md\\:hover\\:border-gray-400:hover {\n    border-color: #cbd5e0\n  }\n\n  .md\\:hover\\:border-gray-500:hover {\n    border-color: #a0aec0\n  }\n\n  .md\\:hover\\:border-gray-600:hover {\n    border-color: #718096\n  }\n\n  .md\\:hover\\:border-gray-700:hover {\n    border-color: #4a5568\n  }\n\n  .md\\:hover\\:border-gray-800:hover {\n    border-color: #2d3748\n  }\n\n  .md\\:hover\\:border-gray-900:hover {\n    border-color: #1a202c\n  }\n\n  .md\\:hover\\:border-red-100:hover {\n    border-color: #fff5f5\n  }\n\n  .md\\:hover\\:border-red-200:hover {\n    border-color: #fed7d7\n  }\n\n  .md\\:hover\\:border-red-300:hover {\n    border-color: #feb2b2\n  }\n\n  .md\\:hover\\:border-red-400:hover {\n    border-color: #fc8181\n  }\n\n  .md\\:hover\\:border-red-500:hover {\n    border-color: #f56565\n  }\n\n  .md\\:hover\\:border-red-600:hover {\n    border-color: #e53e3e\n  }\n\n  .md\\:hover\\:border-red-700:hover {\n    border-color: #c53030\n  }\n\n  .md\\:hover\\:border-red-800:hover {\n    border-color: #9b2c2c\n  }\n\n  .md\\:hover\\:border-red-900:hover {\n    border-color: #742a2a\n  }\n\n  .md\\:hover\\:border-orange-100:hover {\n    border-color: #fffaf0\n  }\n\n  .md\\:hover\\:border-orange-200:hover {\n    border-color: #feebc8\n  }\n\n  .md\\:hover\\:border-orange-300:hover {\n    border-color: #fbd38d\n  }\n\n  .md\\:hover\\:border-orange-400:hover {\n    border-color: #f6ad55\n  }\n\n  .md\\:hover\\:border-orange-500:hover {\n    border-color: #ed8936\n  }\n\n  .md\\:hover\\:border-orange-600:hover {\n    border-color: #dd6b20\n  }\n\n  .md\\:hover\\:border-orange-700:hover {\n    border-color: #c05621\n  }\n\n  .md\\:hover\\:border-orange-800:hover {\n    border-color: #9c4221\n  }\n\n  .md\\:hover\\:border-orange-900:hover {\n    border-color: #7b341e\n  }\n\n  .md\\:hover\\:border-yellow-100:hover {\n    border-color: #fffff0\n  }\n\n  .md\\:hover\\:border-yellow-200:hover {\n    border-color: #fefcbf\n  }\n\n  .md\\:hover\\:border-yellow-300:hover {\n    border-color: #faf089\n  }\n\n  .md\\:hover\\:border-yellow-400:hover {\n    border-color: #f6e05e\n  }\n\n  .md\\:hover\\:border-yellow-500:hover {\n    border-color: #ecc94b\n  }\n\n  .md\\:hover\\:border-yellow-600:hover {\n    border-color: #d69e2e\n  }\n\n  .md\\:hover\\:border-yellow-700:hover {\n    border-color: #b7791f\n  }\n\n  .md\\:hover\\:border-yellow-800:hover {\n    border-color: #975a16\n  }\n\n  .md\\:hover\\:border-yellow-900:hover {\n    border-color: #744210\n  }\n\n  .md\\:hover\\:border-green-100:hover {\n    border-color: #f0fff4\n  }\n\n  .md\\:hover\\:border-green-200:hover {\n    border-color: #c6f6d5\n  }\n\n  .md\\:hover\\:border-green-300:hover {\n    border-color: #9ae6b4\n  }\n\n  .md\\:hover\\:border-green-400:hover {\n    border-color: #68d391\n  }\n\n  .md\\:hover\\:border-green-500:hover {\n    border-color: #48bb78\n  }\n\n  .md\\:hover\\:border-green-600:hover {\n    border-color: #38a169\n  }\n\n  .md\\:hover\\:border-green-700:hover {\n    border-color: #2f855a\n  }\n\n  .md\\:hover\\:border-green-800:hover {\n    border-color: #276749\n  }\n\n  .md\\:hover\\:border-green-900:hover {\n    border-color: #22543d\n  }\n\n  .md\\:hover\\:border-teal-100:hover {\n    border-color: #e6fffa\n  }\n\n  .md\\:hover\\:border-teal-200:hover {\n    border-color: #b2f5ea\n  }\n\n  .md\\:hover\\:border-teal-300:hover {\n    border-color: #81e6d9\n  }\n\n  .md\\:hover\\:border-teal-400:hover {\n    border-color: #4fd1c5\n  }\n\n  .md\\:hover\\:border-teal-500:hover {\n    border-color: #38b2ac\n  }\n\n  .md\\:hover\\:border-teal-600:hover {\n    border-color: #319795\n  }\n\n  .md\\:hover\\:border-teal-700:hover {\n    border-color: #2c7a7b\n  }\n\n  .md\\:hover\\:border-teal-800:hover {\n    border-color: #285e61\n  }\n\n  .md\\:hover\\:border-teal-900:hover {\n    border-color: #234e52\n  }\n\n  .md\\:hover\\:border-blue-100:hover {\n    border-color: #ebf8ff\n  }\n\n  .md\\:hover\\:border-blue-200:hover {\n    border-color: #bee3f8\n  }\n\n  .md\\:hover\\:border-blue-300:hover {\n    border-color: #90cdf4\n  }\n\n  .md\\:hover\\:border-blue-400:hover {\n    border-color: #63b3ed\n  }\n\n  .md\\:hover\\:border-blue-500:hover {\n    border-color: #4299e1\n  }\n\n  .md\\:hover\\:border-blue-600:hover {\n    border-color: #3182ce\n  }\n\n  .md\\:hover\\:border-blue-700:hover {\n    border-color: #2b6cb0\n  }\n\n  .md\\:hover\\:border-blue-800:hover {\n    border-color: #2c5282\n  }\n\n  .md\\:hover\\:border-blue-900:hover {\n    border-color: #2a4365\n  }\n\n  .md\\:hover\\:border-indigo-100:hover {\n    border-color: #ebf4ff\n  }\n\n  .md\\:hover\\:border-indigo-200:hover {\n    border-color: #c3dafe\n  }\n\n  .md\\:hover\\:border-indigo-300:hover {\n    border-color: #a3bffa\n  }\n\n  .md\\:hover\\:border-indigo-400:hover {\n    border-color: #7f9cf5\n  }\n\n  .md\\:hover\\:border-indigo-500:hover {\n    border-color: #667eea\n  }\n\n  .md\\:hover\\:border-indigo-600:hover {\n    border-color: #5a67d8\n  }\n\n  .md\\:hover\\:border-indigo-700:hover {\n    border-color: #4c51bf\n  }\n\n  .md\\:hover\\:border-indigo-800:hover {\n    border-color: #434190\n  }\n\n  .md\\:hover\\:border-indigo-900:hover {\n    border-color: #3c366b\n  }\n\n  .md\\:hover\\:border-purple-100:hover {\n    border-color: #faf5ff\n  }\n\n  .md\\:hover\\:border-purple-200:hover {\n    border-color: #e9d8fd\n  }\n\n  .md\\:hover\\:border-purple-300:hover {\n    border-color: #d6bcfa\n  }\n\n  .md\\:hover\\:border-purple-400:hover {\n    border-color: #b794f4\n  }\n\n  .md\\:hover\\:border-purple-500:hover {\n    border-color: #9f7aea\n  }\n\n  .md\\:hover\\:border-purple-600:hover {\n    border-color: #805ad5\n  }\n\n  .md\\:hover\\:border-purple-700:hover {\n    border-color: #6b46c1\n  }\n\n  .md\\:hover\\:border-purple-800:hover {\n    border-color: #553c9a\n  }\n\n  .md\\:hover\\:border-purple-900:hover {\n    border-color: #44337a\n  }\n\n  .md\\:hover\\:border-pink-100:hover {\n    border-color: #fff5f7\n  }\n\n  .md\\:hover\\:border-pink-200:hover {\n    border-color: #fed7e2\n  }\n\n  .md\\:hover\\:border-pink-300:hover {\n    border-color: #fbb6ce\n  }\n\n  .md\\:hover\\:border-pink-400:hover {\n    border-color: #f687b3\n  }\n\n  .md\\:hover\\:border-pink-500:hover {\n    border-color: #ed64a6\n  }\n\n  .md\\:hover\\:border-pink-600:hover {\n    border-color: #d53f8c\n  }\n\n  .md\\:hover\\:border-pink-700:hover {\n    border-color: #b83280\n  }\n\n  .md\\:hover\\:border-pink-800:hover {\n    border-color: #97266d\n  }\n\n  .md\\:hover\\:border-pink-900:hover {\n    border-color: #702459\n  }\n\n  .md\\:focus\\:border-transparent:focus {\n    border-color: transparent\n  }\n\n  .md\\:focus\\:border-black:focus {\n    border-color: #000\n  }\n\n  .md\\:focus\\:border-white:focus {\n    border-color: #fff\n  }\n\n  .md\\:focus\\:border-gray-100:focus {\n    border-color: #f7fafc\n  }\n\n  .md\\:focus\\:border-gray-200:focus {\n    border-color: #edf2f7\n  }\n\n  .md\\:focus\\:border-gray-300:focus {\n    border-color: #e2e8f0\n  }\n\n  .md\\:focus\\:border-gray-400:focus {\n    border-color: #cbd5e0\n  }\n\n  .md\\:focus\\:border-gray-500:focus {\n    border-color: #a0aec0\n  }\n\n  .md\\:focus\\:border-gray-600:focus {\n    border-color: #718096\n  }\n\n  .md\\:focus\\:border-gray-700:focus {\n    border-color: #4a5568\n  }\n\n  .md\\:focus\\:border-gray-800:focus {\n    border-color: #2d3748\n  }\n\n  .md\\:focus\\:border-gray-900:focus {\n    border-color: #1a202c\n  }\n\n  .md\\:focus\\:border-red-100:focus {\n    border-color: #fff5f5\n  }\n\n  .md\\:focus\\:border-red-200:focus {\n    border-color: #fed7d7\n  }\n\n  .md\\:focus\\:border-red-300:focus {\n    border-color: #feb2b2\n  }\n\n  .md\\:focus\\:border-red-400:focus {\n    border-color: #fc8181\n  }\n\n  .md\\:focus\\:border-red-500:focus {\n    border-color: #f56565\n  }\n\n  .md\\:focus\\:border-red-600:focus {\n    border-color: #e53e3e\n  }\n\n  .md\\:focus\\:border-red-700:focus {\n    border-color: #c53030\n  }\n\n  .md\\:focus\\:border-red-800:focus {\n    border-color: #9b2c2c\n  }\n\n  .md\\:focus\\:border-red-900:focus {\n    border-color: #742a2a\n  }\n\n  .md\\:focus\\:border-orange-100:focus {\n    border-color: #fffaf0\n  }\n\n  .md\\:focus\\:border-orange-200:focus {\n    border-color: #feebc8\n  }\n\n  .md\\:focus\\:border-orange-300:focus {\n    border-color: #fbd38d\n  }\n\n  .md\\:focus\\:border-orange-400:focus {\n    border-color: #f6ad55\n  }\n\n  .md\\:focus\\:border-orange-500:focus {\n    border-color: #ed8936\n  }\n\n  .md\\:focus\\:border-orange-600:focus {\n    border-color: #dd6b20\n  }\n\n  .md\\:focus\\:border-orange-700:focus {\n    border-color: #c05621\n  }\n\n  .md\\:focus\\:border-orange-800:focus {\n    border-color: #9c4221\n  }\n\n  .md\\:focus\\:border-orange-900:focus {\n    border-color: #7b341e\n  }\n\n  .md\\:focus\\:border-yellow-100:focus {\n    border-color: #fffff0\n  }\n\n  .md\\:focus\\:border-yellow-200:focus {\n    border-color: #fefcbf\n  }\n\n  .md\\:focus\\:border-yellow-300:focus {\n    border-color: #faf089\n  }\n\n  .md\\:focus\\:border-yellow-400:focus {\n    border-color: #f6e05e\n  }\n\n  .md\\:focus\\:border-yellow-500:focus {\n    border-color: #ecc94b\n  }\n\n  .md\\:focus\\:border-yellow-600:focus {\n    border-color: #d69e2e\n  }\n\n  .md\\:focus\\:border-yellow-700:focus {\n    border-color: #b7791f\n  }\n\n  .md\\:focus\\:border-yellow-800:focus {\n    border-color: #975a16\n  }\n\n  .md\\:focus\\:border-yellow-900:focus {\n    border-color: #744210\n  }\n\n  .md\\:focus\\:border-green-100:focus {\n    border-color: #f0fff4\n  }\n\n  .md\\:focus\\:border-green-200:focus {\n    border-color: #c6f6d5\n  }\n\n  .md\\:focus\\:border-green-300:focus {\n    border-color: #9ae6b4\n  }\n\n  .md\\:focus\\:border-green-400:focus {\n    border-color: #68d391\n  }\n\n  .md\\:focus\\:border-green-500:focus {\n    border-color: #48bb78\n  }\n\n  .md\\:focus\\:border-green-600:focus {\n    border-color: #38a169\n  }\n\n  .md\\:focus\\:border-green-700:focus {\n    border-color: #2f855a\n  }\n\n  .md\\:focus\\:border-green-800:focus {\n    border-color: #276749\n  }\n\n  .md\\:focus\\:border-green-900:focus {\n    border-color: #22543d\n  }\n\n  .md\\:focus\\:border-teal-100:focus {\n    border-color: #e6fffa\n  }\n\n  .md\\:focus\\:border-teal-200:focus {\n    border-color: #b2f5ea\n  }\n\n  .md\\:focus\\:border-teal-300:focus {\n    border-color: #81e6d9\n  }\n\n  .md\\:focus\\:border-teal-400:focus {\n    border-color: #4fd1c5\n  }\n\n  .md\\:focus\\:border-teal-500:focus {\n    border-color: #38b2ac\n  }\n\n  .md\\:focus\\:border-teal-600:focus {\n    border-color: #319795\n  }\n\n  .md\\:focus\\:border-teal-700:focus {\n    border-color: #2c7a7b\n  }\n\n  .md\\:focus\\:border-teal-800:focus {\n    border-color: #285e61\n  }\n\n  .md\\:focus\\:border-teal-900:focus {\n    border-color: #234e52\n  }\n\n  .md\\:focus\\:border-blue-100:focus {\n    border-color: #ebf8ff\n  }\n\n  .md\\:focus\\:border-blue-200:focus {\n    border-color: #bee3f8\n  }\n\n  .md\\:focus\\:border-blue-300:focus {\n    border-color: #90cdf4\n  }\n\n  .md\\:focus\\:border-blue-400:focus {\n    border-color: #63b3ed\n  }\n\n  .md\\:focus\\:border-blue-500:focus {\n    border-color: #4299e1\n  }\n\n  .md\\:focus\\:border-blue-600:focus {\n    border-color: #3182ce\n  }\n\n  .md\\:focus\\:border-blue-700:focus {\n    border-color: #2b6cb0\n  }\n\n  .md\\:focus\\:border-blue-800:focus {\n    border-color: #2c5282\n  }\n\n  .md\\:focus\\:border-blue-900:focus {\n    border-color: #2a4365\n  }\n\n  .md\\:focus\\:border-indigo-100:focus {\n    border-color: #ebf4ff\n  }\n\n  .md\\:focus\\:border-indigo-200:focus {\n    border-color: #c3dafe\n  }\n\n  .md\\:focus\\:border-indigo-300:focus {\n    border-color: #a3bffa\n  }\n\n  .md\\:focus\\:border-indigo-400:focus {\n    border-color: #7f9cf5\n  }\n\n  .md\\:focus\\:border-indigo-500:focus {\n    border-color: #667eea\n  }\n\n  .md\\:focus\\:border-indigo-600:focus {\n    border-color: #5a67d8\n  }\n\n  .md\\:focus\\:border-indigo-700:focus {\n    border-color: #4c51bf\n  }\n\n  .md\\:focus\\:border-indigo-800:focus {\n    border-color: #434190\n  }\n\n  .md\\:focus\\:border-indigo-900:focus {\n    border-color: #3c366b\n  }\n\n  .md\\:focus\\:border-purple-100:focus {\n    border-color: #faf5ff\n  }\n\n  .md\\:focus\\:border-purple-200:focus {\n    border-color: #e9d8fd\n  }\n\n  .md\\:focus\\:border-purple-300:focus {\n    border-color: #d6bcfa\n  }\n\n  .md\\:focus\\:border-purple-400:focus {\n    border-color: #b794f4\n  }\n\n  .md\\:focus\\:border-purple-500:focus {\n    border-color: #9f7aea\n  }\n\n  .md\\:focus\\:border-purple-600:focus {\n    border-color: #805ad5\n  }\n\n  .md\\:focus\\:border-purple-700:focus {\n    border-color: #6b46c1\n  }\n\n  .md\\:focus\\:border-purple-800:focus {\n    border-color: #553c9a\n  }\n\n  .md\\:focus\\:border-purple-900:focus {\n    border-color: #44337a\n  }\n\n  .md\\:focus\\:border-pink-100:focus {\n    border-color: #fff5f7\n  }\n\n  .md\\:focus\\:border-pink-200:focus {\n    border-color: #fed7e2\n  }\n\n  .md\\:focus\\:border-pink-300:focus {\n    border-color: #fbb6ce\n  }\n\n  .md\\:focus\\:border-pink-400:focus {\n    border-color: #f687b3\n  }\n\n  .md\\:focus\\:border-pink-500:focus {\n    border-color: #ed64a6\n  }\n\n  .md\\:focus\\:border-pink-600:focus {\n    border-color: #d53f8c\n  }\n\n  .md\\:focus\\:border-pink-700:focus {\n    border-color: #b83280\n  }\n\n  .md\\:focus\\:border-pink-800:focus {\n    border-color: #97266d\n  }\n\n  .md\\:focus\\:border-pink-900:focus {\n    border-color: #702459\n  }\n\n  .md\\:rounded-none {\n    border-radius: 0\n  }\n\n  .md\\:rounded-sm {\n    border-radius: 0.125rem\n  }\n\n  .md\\:rounded {\n    border-radius: 0.25rem\n  }\n\n  .md\\:rounded-lg {\n    border-radius: 0.5rem\n  }\n\n  .md\\:rounded-full {\n    border-radius: 9999px\n  }\n\n  .md\\:rounded-t-none {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n  }\n\n  .md\\:rounded-r-none {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0\n  }\n\n  .md\\:rounded-b-none {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0\n  }\n\n  .md\\:rounded-l-none {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0\n  }\n\n  .md\\:rounded-t-sm {\n    border-top-left-radius: 0.125rem;\n    border-top-right-radius: 0.125rem\n  }\n\n  .md\\:rounded-r-sm {\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem\n  }\n\n  .md\\:rounded-b-sm {\n    border-bottom-right-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .md\\:rounded-l-sm {\n    border-top-left-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .md\\:rounded-t {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem\n  }\n\n  .md\\:rounded-r {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem\n  }\n\n  .md\\:rounded-b {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .md\\:rounded-l {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .md\\:rounded-t-lg {\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem\n  }\n\n  .md\\:rounded-r-lg {\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem\n  }\n\n  .md\\:rounded-b-lg {\n    border-bottom-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .md\\:rounded-l-lg {\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .md\\:rounded-t-full {\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px\n  }\n\n  .md\\:rounded-r-full {\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px\n  }\n\n  .md\\:rounded-b-full {\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px\n  }\n\n  .md\\:rounded-l-full {\n    border-top-left-radius: 9999px;\n    border-bottom-left-radius: 9999px\n  }\n\n  .md\\:rounded-tl-none {\n    border-top-left-radius: 0\n  }\n\n  .md\\:rounded-tr-none {\n    border-top-right-radius: 0\n  }\n\n  .md\\:rounded-br-none {\n    border-bottom-right-radius: 0\n  }\n\n  .md\\:rounded-bl-none {\n    border-bottom-left-radius: 0\n  }\n\n  .md\\:rounded-tl-sm {\n    border-top-left-radius: 0.125rem\n  }\n\n  .md\\:rounded-tr-sm {\n    border-top-right-radius: 0.125rem\n  }\n\n  .md\\:rounded-br-sm {\n    border-bottom-right-radius: 0.125rem\n  }\n\n  .md\\:rounded-bl-sm {\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .md\\:rounded-tl {\n    border-top-left-radius: 0.25rem\n  }\n\n  .md\\:rounded-tr {\n    border-top-right-radius: 0.25rem\n  }\n\n  .md\\:rounded-br {\n    border-bottom-right-radius: 0.25rem\n  }\n\n  .md\\:rounded-bl {\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .md\\:rounded-tl-lg {\n    border-top-left-radius: 0.5rem\n  }\n\n  .md\\:rounded-tr-lg {\n    border-top-right-radius: 0.5rem\n  }\n\n  .md\\:rounded-br-lg {\n    border-bottom-right-radius: 0.5rem\n  }\n\n  .md\\:rounded-bl-lg {\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .md\\:rounded-tl-full {\n    border-top-left-radius: 9999px\n  }\n\n  .md\\:rounded-tr-full {\n    border-top-right-radius: 9999px\n  }\n\n  .md\\:rounded-br-full {\n    border-bottom-right-radius: 9999px\n  }\n\n  .md\\:rounded-bl-full {\n    border-bottom-left-radius: 9999px\n  }\n\n  .md\\:border-solid {\n    border-style: solid\n  }\n\n  .md\\:border-dashed {\n    border-style: dashed\n  }\n\n  .md\\:border-dotted {\n    border-style: dotted\n  }\n\n  .md\\:border-double {\n    border-style: double\n  }\n\n  .md\\:border-none {\n    border-style: none\n  }\n\n  .md\\:border-0 {\n    border-width: 0\n  }\n\n  .md\\:border-2 {\n    border-width: 2px\n  }\n\n  .md\\:border-4 {\n    border-width: 4px\n  }\n\n  .md\\:border-8 {\n    border-width: 8px\n  }\n\n  .md\\:border {\n    border-width: 1px\n  }\n\n  .md\\:border-t-0 {\n    border-top-width: 0\n  }\n\n  .md\\:border-r-0 {\n    border-right-width: 0\n  }\n\n  .md\\:border-b-0 {\n    border-bottom-width: 0\n  }\n\n  .md\\:border-l-0 {\n    border-left-width: 0\n  }\n\n  .md\\:border-t-2 {\n    border-top-width: 2px\n  }\n\n  .md\\:border-r-2 {\n    border-right-width: 2px\n  }\n\n  .md\\:border-b-2 {\n    border-bottom-width: 2px\n  }\n\n  .md\\:border-l-2 {\n    border-left-width: 2px\n  }\n\n  .md\\:border-t-4 {\n    border-top-width: 4px\n  }\n\n  .md\\:border-r-4 {\n    border-right-width: 4px\n  }\n\n  .md\\:border-b-4 {\n    border-bottom-width: 4px\n  }\n\n  .md\\:border-l-4 {\n    border-left-width: 4px\n  }\n\n  .md\\:border-t-8 {\n    border-top-width: 8px\n  }\n\n  .md\\:border-r-8 {\n    border-right-width: 8px\n  }\n\n  .md\\:border-b-8 {\n    border-bottom-width: 8px\n  }\n\n  .md\\:border-l-8 {\n    border-left-width: 8px\n  }\n\n  .md\\:border-t {\n    border-top-width: 1px\n  }\n\n  .md\\:border-r {\n    border-right-width: 1px\n  }\n\n  .md\\:border-b {\n    border-bottom-width: 1px\n  }\n\n  .md\\:border-l {\n    border-left-width: 1px\n  }\n\n  .md\\:cursor-auto {\n    cursor: auto\n  }\n\n  .md\\:cursor-default {\n    cursor: default\n  }\n\n  .md\\:cursor-pointer {\n    cursor: pointer\n  }\n\n  .md\\:cursor-wait {\n    cursor: wait\n  }\n\n  .md\\:cursor-text {\n    cursor: text\n  }\n\n  .md\\:cursor-move {\n    cursor: move\n  }\n\n  .md\\:cursor-not-allowed {\n    cursor: not-allowed\n  }\n\n  .md\\:block {\n    display: block\n  }\n\n  .md\\:inline-block {\n    display: inline-block\n  }\n\n  .md\\:inline {\n    display: inline\n  }\n\n  .md\\:flex {\n    display: flex\n  }\n\n  .md\\:inline-flex {\n    display: inline-flex\n  }\n\n  .md\\:table {\n    display: table\n  }\n\n  .md\\:table-row {\n    display: table-row\n  }\n\n  .md\\:table-cell {\n    display: table-cell\n  }\n\n  .md\\:hidden {\n    display: none\n  }\n\n  .md\\:flex-row {\n    flex-direction: row\n  }\n\n  .md\\:flex-row-reverse {\n    flex-direction: row-reverse\n  }\n\n  .md\\:flex-col {\n    flex-direction: column\n  }\n\n  .md\\:flex-col-reverse {\n    flex-direction: column-reverse\n  }\n\n  .md\\:flex-wrap {\n    flex-wrap: wrap\n  }\n\n  .md\\:flex-wrap-reverse {\n    flex-wrap: wrap-reverse\n  }\n\n  .md\\:flex-no-wrap {\n    flex-wrap: nowrap\n  }\n\n  .md\\:items-start {\n    align-items: flex-start\n  }\n\n  .md\\:items-end {\n    align-items: flex-end\n  }\n\n  .md\\:items-center {\n    align-items: center\n  }\n\n  .md\\:items-baseline {\n    align-items: baseline\n  }\n\n  .md\\:items-stretch {\n    align-items: stretch\n  }\n\n  .md\\:self-auto {\n    align-self: auto\n  }\n\n  .md\\:self-start {\n    align-self: flex-start\n  }\n\n  .md\\:self-end {\n    align-self: flex-end\n  }\n\n  .md\\:self-center {\n    align-self: center\n  }\n\n  .md\\:self-stretch {\n    align-self: stretch\n  }\n\n  .md\\:justify-start {\n    justify-content: flex-start\n  }\n\n  .md\\:justify-end {\n    justify-content: flex-end\n  }\n\n  .md\\:justify-center {\n    justify-content: center\n  }\n\n  .md\\:justify-between {\n    justify-content: space-between\n  }\n\n  .md\\:justify-around {\n    justify-content: space-around\n  }\n\n  .md\\:content-center {\n    align-content: center\n  }\n\n  .md\\:content-start {\n    align-content: flex-start\n  }\n\n  .md\\:content-end {\n    align-content: flex-end\n  }\n\n  .md\\:content-between {\n    align-content: space-between\n  }\n\n  .md\\:content-around {\n    align-content: space-around\n  }\n\n  .md\\:flex-1 {\n    flex: 1 1 0%\n  }\n\n  .md\\:flex-auto {\n    flex: 1 1 auto\n  }\n\n  .md\\:flex-initial {\n    flex: 0 1 auto\n  }\n\n  .md\\:flex-none {\n    flex: none\n  }\n\n  .md\\:flex-grow-0 {\n    flex-grow: 0\n  }\n\n  .md\\:flex-grow {\n    flex-grow: 1\n  }\n\n  .md\\:flex-shrink-0 {\n    flex-shrink: 0\n  }\n\n  .md\\:flex-shrink {\n    flex-shrink: 1\n  }\n\n  .md\\:order-1 {\n    order: 1\n  }\n\n  .md\\:order-2 {\n    order: 2\n  }\n\n  .md\\:order-3 {\n    order: 3\n  }\n\n  .md\\:order-4 {\n    order: 4\n  }\n\n  .md\\:order-5 {\n    order: 5\n  }\n\n  .md\\:order-6 {\n    order: 6\n  }\n\n  .md\\:order-7 {\n    order: 7\n  }\n\n  .md\\:order-8 {\n    order: 8\n  }\n\n  .md\\:order-9 {\n    order: 9\n  }\n\n  .md\\:order-10 {\n    order: 10\n  }\n\n  .md\\:order-11 {\n    order: 11\n  }\n\n  .md\\:order-12 {\n    order: 12\n  }\n\n  .md\\:order-first {\n    order: -9999\n  }\n\n  .md\\:order-last {\n    order: 9999\n  }\n\n  .md\\:order-none {\n    order: 0\n  }\n\n  .md\\:float-right {\n    float: right\n  }\n\n  .md\\:float-left {\n    float: left\n  }\n\n  .md\\:float-none {\n    float: none\n  }\n\n  .md\\:clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both\n  }\n\n  .md\\:font-sans {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"\n  }\n\n  .md\\:font-serif {\n    font-family: Georgia, Cambria, \"Times New Roman\", Times, serif\n  }\n\n  .md\\:font-mono {\n    font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace\n  }\n\n  .md\\:font-hairline {\n    font-weight: 100\n  }\n\n  .md\\:font-thin {\n    font-weight: 200\n  }\n\n  .md\\:font-light {\n    font-weight: 300\n  }\n\n  .md\\:font-normal {\n    font-weight: 400\n  }\n\n  .md\\:font-medium {\n    font-weight: 500\n  }\n\n  .md\\:font-semibold {\n    font-weight: 600\n  }\n\n  .md\\:font-bold {\n    font-weight: 700\n  }\n\n  .md\\:font-extrabold {\n    font-weight: 800\n  }\n\n  .md\\:font-black {\n    font-weight: 900\n  }\n\n  .md\\:hover\\:font-hairline:hover {\n    font-weight: 100\n  }\n\n  .md\\:hover\\:font-thin:hover {\n    font-weight: 200\n  }\n\n  .md\\:hover\\:font-light:hover {\n    font-weight: 300\n  }\n\n  .md\\:hover\\:font-normal:hover {\n    font-weight: 400\n  }\n\n  .md\\:hover\\:font-medium:hover {\n    font-weight: 500\n  }\n\n  .md\\:hover\\:font-semibold:hover {\n    font-weight: 600\n  }\n\n  .md\\:hover\\:font-bold:hover {\n    font-weight: 700\n  }\n\n  .md\\:hover\\:font-extrabold:hover {\n    font-weight: 800\n  }\n\n  .md\\:hover\\:font-black:hover {\n    font-weight: 900\n  }\n\n  .md\\:focus\\:font-hairline:focus {\n    font-weight: 100\n  }\n\n  .md\\:focus\\:font-thin:focus {\n    font-weight: 200\n  }\n\n  .md\\:focus\\:font-light:focus {\n    font-weight: 300\n  }\n\n  .md\\:focus\\:font-normal:focus {\n    font-weight: 400\n  }\n\n  .md\\:focus\\:font-medium:focus {\n    font-weight: 500\n  }\n\n  .md\\:focus\\:font-semibold:focus {\n    font-weight: 600\n  }\n\n  .md\\:focus\\:font-bold:focus {\n    font-weight: 700\n  }\n\n  .md\\:focus\\:font-extrabold:focus {\n    font-weight: 800\n  }\n\n  .md\\:focus\\:font-black:focus {\n    font-weight: 900\n  }\n\n  .md\\:h-0 {\n    height: 0\n  }\n\n  .md\\:h-1 {\n    height: 0.25rem\n  }\n\n  .md\\:h-2 {\n    height: 0.5rem\n  }\n\n  .md\\:h-3 {\n    height: 0.75rem\n  }\n\n  .md\\:h-4 {\n    height: 1rem\n  }\n\n  .md\\:h-5 {\n    height: 1.25rem\n  }\n\n  .md\\:h-6 {\n    height: 1.5rem\n  }\n\n  .md\\:h-8 {\n    height: 2rem\n  }\n\n  .md\\:h-10 {\n    height: 2.5rem\n  }\n\n  .md\\:h-12 {\n    height: 3rem\n  }\n\n  .md\\:h-16 {\n    height: 4rem\n  }\n\n  .md\\:h-20 {\n    height: 5rem\n  }\n\n  .md\\:h-24 {\n    height: 6rem\n  }\n\n  .md\\:h-32 {\n    height: 8rem\n  }\n\n  .md\\:h-40 {\n    height: 10rem\n  }\n\n  .md\\:h-48 {\n    height: 12rem\n  }\n\n  .md\\:h-56 {\n    height: 14rem\n  }\n\n  .md\\:h-64 {\n    height: 16rem\n  }\n\n  .md\\:h-auto {\n    height: auto\n  }\n\n  .md\\:h-px {\n    height: 1px\n  }\n\n  .md\\:h-full {\n    height: 100%\n  }\n\n  .md\\:h-screen {\n    height: 100vh\n  }\n\n  .md\\:leading-none {\n    line-height: 1\n  }\n\n  .md\\:leading-tight {\n    line-height: 1.25\n  }\n\n  .md\\:leading-snug {\n    line-height: 1.375\n  }\n\n  .md\\:leading-normal {\n    line-height: 1.5\n  }\n\n  .md\\:leading-relaxed {\n    line-height: 1.625\n  }\n\n  .md\\:leading-loose {\n    line-height: 2\n  }\n\n  .md\\:list-inside {\n    list-style-position: inside\n  }\n\n  .md\\:list-outside {\n    list-style-position: outside\n  }\n\n  .md\\:list-none {\n    list-style-type: none\n  }\n\n  .md\\:list-disc {\n    list-style-type: disc\n  }\n\n  .md\\:list-decimal {\n    list-style-type: decimal\n  }\n\n  .md\\:m-0 {\n    margin: 0\n  }\n\n  .md\\:m-1 {\n    margin: 0.25rem\n  }\n\n  .md\\:m-2 {\n    margin: 0.5rem\n  }\n\n  .md\\:m-3 {\n    margin: 0.75rem\n  }\n\n  .md\\:m-4 {\n    margin: 1rem\n  }\n\n  .md\\:m-5 {\n    margin: 1.25rem\n  }\n\n  .md\\:m-6 {\n    margin: 1.5rem\n  }\n\n  .md\\:m-8 {\n    margin: 2rem\n  }\n\n  .md\\:m-10 {\n    margin: 2.5rem\n  }\n\n  .md\\:m-12 {\n    margin: 3rem\n  }\n\n  .md\\:m-16 {\n    margin: 4rem\n  }\n\n  .md\\:m-20 {\n    margin: 5rem\n  }\n\n  .md\\:m-24 {\n    margin: 6rem\n  }\n\n  .md\\:m-32 {\n    margin: 8rem\n  }\n\n  .md\\:m-40 {\n    margin: 10rem\n  }\n\n  .md\\:m-48 {\n    margin: 12rem\n  }\n\n  .md\\:m-56 {\n    margin: 14rem\n  }\n\n  .md\\:m-64 {\n    margin: 16rem\n  }\n\n  .md\\:m-auto {\n    margin: auto\n  }\n\n  .md\\:m-px {\n    margin: 1px\n  }\n\n  .md\\:-m-1 {\n    margin: -0.25rem\n  }\n\n  .md\\:-m-2 {\n    margin: -0.5rem\n  }\n\n  .md\\:-m-3 {\n    margin: -0.75rem\n  }\n\n  .md\\:-m-4 {\n    margin: -1rem\n  }\n\n  .md\\:-m-5 {\n    margin: -1.25rem\n  }\n\n  .md\\:-m-6 {\n    margin: -1.5rem\n  }\n\n  .md\\:-m-8 {\n    margin: -2rem\n  }\n\n  .md\\:-m-10 {\n    margin: -2.5rem\n  }\n\n  .md\\:-m-12 {\n    margin: -3rem\n  }\n\n  .md\\:-m-16 {\n    margin: -4rem\n  }\n\n  .md\\:-m-20 {\n    margin: -5rem\n  }\n\n  .md\\:-m-24 {\n    margin: -6rem\n  }\n\n  .md\\:-m-32 {\n    margin: -8rem\n  }\n\n  .md\\:-m-40 {\n    margin: -10rem\n  }\n\n  .md\\:-m-48 {\n    margin: -12rem\n  }\n\n  .md\\:-m-56 {\n    margin: -14rem\n  }\n\n  .md\\:-m-64 {\n    margin: -16rem\n  }\n\n  .md\\:-m-px {\n    margin: -1px\n  }\n\n  .md\\:my-0 {\n    margin-top: 0;\n    margin-bottom: 0\n  }\n\n  .md\\:mx-0 {\n    margin-left: 0;\n    margin-right: 0\n  }\n\n  .md\\:my-1 {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem\n  }\n\n  .md\\:mx-1 {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem\n  }\n\n  .md\\:my-2 {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem\n  }\n\n  .md\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem\n  }\n\n  .md\\:my-3 {\n    margin-top: 0.75rem;\n    margin-bottom: 0.75rem\n  }\n\n  .md\\:mx-3 {\n    margin-left: 0.75rem;\n    margin-right: 0.75rem\n  }\n\n  .md\\:my-4 {\n    margin-top: 1rem;\n    margin-bottom: 1rem\n  }\n\n  .md\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem\n  }\n\n  .md\\:my-5 {\n    margin-top: 1.25rem;\n    margin-bottom: 1.25rem\n  }\n\n  .md\\:mx-5 {\n    margin-left: 1.25rem;\n    margin-right: 1.25rem\n  }\n\n  .md\\:my-6 {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem\n  }\n\n  .md\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem\n  }\n\n  .md\\:my-8 {\n    margin-top: 2rem;\n    margin-bottom: 2rem\n  }\n\n  .md\\:mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem\n  }\n\n  .md\\:my-10 {\n    margin-top: 2.5rem;\n    margin-bottom: 2.5rem\n  }\n\n  .md\\:mx-10 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem\n  }\n\n  .md\\:my-12 {\n    margin-top: 3rem;\n    margin-bottom: 3rem\n  }\n\n  .md\\:mx-12 {\n    margin-left: 3rem;\n    margin-right: 3rem\n  }\n\n  .md\\:my-16 {\n    margin-top: 4rem;\n    margin-bottom: 4rem\n  }\n\n  .md\\:mx-16 {\n    margin-left: 4rem;\n    margin-right: 4rem\n  }\n\n  .md\\:my-20 {\n    margin-top: 5rem;\n    margin-bottom: 5rem\n  }\n\n  .md\\:mx-20 {\n    margin-left: 5rem;\n    margin-right: 5rem\n  }\n\n  .md\\:my-24 {\n    margin-top: 6rem;\n    margin-bottom: 6rem\n  }\n\n  .md\\:mx-24 {\n    margin-left: 6rem;\n    margin-right: 6rem\n  }\n\n  .md\\:my-32 {\n    margin-top: 8rem;\n    margin-bottom: 8rem\n  }\n\n  .md\\:mx-32 {\n    margin-left: 8rem;\n    margin-right: 8rem\n  }\n\n  .md\\:my-40 {\n    margin-top: 10rem;\n    margin-bottom: 10rem\n  }\n\n  .md\\:mx-40 {\n    margin-left: 10rem;\n    margin-right: 10rem\n  }\n\n  .md\\:my-48 {\n    margin-top: 12rem;\n    margin-bottom: 12rem\n  }\n\n  .md\\:mx-48 {\n    margin-left: 12rem;\n    margin-right: 12rem\n  }\n\n  .md\\:my-56 {\n    margin-top: 14rem;\n    margin-bottom: 14rem\n  }\n\n  .md\\:mx-56 {\n    margin-left: 14rem;\n    margin-right: 14rem\n  }\n\n  .md\\:my-64 {\n    margin-top: 16rem;\n    margin-bottom: 16rem\n  }\n\n  .md\\:mx-64 {\n    margin-left: 16rem;\n    margin-right: 16rem\n  }\n\n  .md\\:my-auto {\n    margin-top: auto;\n    margin-bottom: auto\n  }\n\n  .md\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto\n  }\n\n  .md\\:my-px {\n    margin-top: 1px;\n    margin-bottom: 1px\n  }\n\n  .md\\:mx-px {\n    margin-left: 1px;\n    margin-right: 1px\n  }\n\n  .md\\:-my-1 {\n    margin-top: -0.25rem;\n    margin-bottom: -0.25rem\n  }\n\n  .md\\:-mx-1 {\n    margin-left: -0.25rem;\n    margin-right: -0.25rem\n  }\n\n  .md\\:-my-2 {\n    margin-top: -0.5rem;\n    margin-bottom: -0.5rem\n  }\n\n  .md\\:-mx-2 {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem\n  }\n\n  .md\\:-my-3 {\n    margin-top: -0.75rem;\n    margin-bottom: -0.75rem\n  }\n\n  .md\\:-mx-3 {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem\n  }\n\n  .md\\:-my-4 {\n    margin-top: -1rem;\n    margin-bottom: -1rem\n  }\n\n  .md\\:-mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem\n  }\n\n  .md\\:-my-5 {\n    margin-top: -1.25rem;\n    margin-bottom: -1.25rem\n  }\n\n  .md\\:-mx-5 {\n    margin-left: -1.25rem;\n    margin-right: -1.25rem\n  }\n\n  .md\\:-my-6 {\n    margin-top: -1.5rem;\n    margin-bottom: -1.5rem\n  }\n\n  .md\\:-mx-6 {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem\n  }\n\n  .md\\:-my-8 {\n    margin-top: -2rem;\n    margin-bottom: -2rem\n  }\n\n  .md\\:-mx-8 {\n    margin-left: -2rem;\n    margin-right: -2rem\n  }\n\n  .md\\:-my-10 {\n    margin-top: -2.5rem;\n    margin-bottom: -2.5rem\n  }\n\n  .md\\:-mx-10 {\n    margin-left: -2.5rem;\n    margin-right: -2.5rem\n  }\n\n  .md\\:-my-12 {\n    margin-top: -3rem;\n    margin-bottom: -3rem\n  }\n\n  .md\\:-mx-12 {\n    margin-left: -3rem;\n    margin-right: -3rem\n  }\n\n  .md\\:-my-16 {\n    margin-top: -4rem;\n    margin-bottom: -4rem\n  }\n\n  .md\\:-mx-16 {\n    margin-left: -4rem;\n    margin-right: -4rem\n  }\n\n  .md\\:-my-20 {\n    margin-top: -5rem;\n    margin-bottom: -5rem\n  }\n\n  .md\\:-mx-20 {\n    margin-left: -5rem;\n    margin-right: -5rem\n  }\n\n  .md\\:-my-24 {\n    margin-top: -6rem;\n    margin-bottom: -6rem\n  }\n\n  .md\\:-mx-24 {\n    margin-left: -6rem;\n    margin-right: -6rem\n  }\n\n  .md\\:-my-32 {\n    margin-top: -8rem;\n    margin-bottom: -8rem\n  }\n\n  .md\\:-mx-32 {\n    margin-left: -8rem;\n    margin-right: -8rem\n  }\n\n  .md\\:-my-40 {\n    margin-top: -10rem;\n    margin-bottom: -10rem\n  }\n\n  .md\\:-mx-40 {\n    margin-left: -10rem;\n    margin-right: -10rem\n  }\n\n  .md\\:-my-48 {\n    margin-top: -12rem;\n    margin-bottom: -12rem\n  }\n\n  .md\\:-mx-48 {\n    margin-left: -12rem;\n    margin-right: -12rem\n  }\n\n  .md\\:-my-56 {\n    margin-top: -14rem;\n    margin-bottom: -14rem\n  }\n\n  .md\\:-mx-56 {\n    margin-left: -14rem;\n    margin-right: -14rem\n  }\n\n  .md\\:-my-64 {\n    margin-top: -16rem;\n    margin-bottom: -16rem\n  }\n\n  .md\\:-mx-64 {\n    margin-left: -16rem;\n    margin-right: -16rem\n  }\n\n  .md\\:-my-px {\n    margin-top: -1px;\n    margin-bottom: -1px\n  }\n\n  .md\\:-mx-px {\n    margin-left: -1px;\n    margin-right: -1px\n  }\n\n  .md\\:mt-0 {\n    margin-top: 0\n  }\n\n  .md\\:mr-0 {\n    margin-right: 0\n  }\n\n  .md\\:mb-0 {\n    margin-bottom: 0\n  }\n\n  .md\\:ml-0 {\n    margin-left: 0\n  }\n\n  .md\\:mt-1 {\n    margin-top: 0.25rem\n  }\n\n  .md\\:mr-1 {\n    margin-right: 0.25rem\n  }\n\n  .md\\:mb-1 {\n    margin-bottom: 0.25rem\n  }\n\n  .md\\:ml-1 {\n    margin-left: 0.25rem\n  }\n\n  .md\\:mt-2 {\n    margin-top: 0.5rem\n  }\n\n  .md\\:mr-2 {\n    margin-right: 0.5rem\n  }\n\n  .md\\:mb-2 {\n    margin-bottom: 0.5rem\n  }\n\n  .md\\:ml-2 {\n    margin-left: 0.5rem\n  }\n\n  .md\\:mt-3 {\n    margin-top: 0.75rem\n  }\n\n  .md\\:mr-3 {\n    margin-right: 0.75rem\n  }\n\n  .md\\:mb-3 {\n    margin-bottom: 0.75rem\n  }\n\n  .md\\:ml-3 {\n    margin-left: 0.75rem\n  }\n\n  .md\\:mt-4 {\n    margin-top: 1rem\n  }\n\n  .md\\:mr-4 {\n    margin-right: 1rem\n  }\n\n  .md\\:mb-4 {\n    margin-bottom: 1rem\n  }\n\n  .md\\:ml-4 {\n    margin-left: 1rem\n  }\n\n  .md\\:mt-5 {\n    margin-top: 1.25rem\n  }\n\n  .md\\:mr-5 {\n    margin-right: 1.25rem\n  }\n\n  .md\\:mb-5 {\n    margin-bottom: 1.25rem\n  }\n\n  .md\\:ml-5 {\n    margin-left: 1.25rem\n  }\n\n  .md\\:mt-6 {\n    margin-top: 1.5rem\n  }\n\n  .md\\:mr-6 {\n    margin-right: 1.5rem\n  }\n\n  .md\\:mb-6 {\n    margin-bottom: 1.5rem\n  }\n\n  .md\\:ml-6 {\n    margin-left: 1.5rem\n  }\n\n  .md\\:mt-8 {\n    margin-top: 2rem\n  }\n\n  .md\\:mr-8 {\n    margin-right: 2rem\n  }\n\n  .md\\:mb-8 {\n    margin-bottom: 2rem\n  }\n\n  .md\\:ml-8 {\n    margin-left: 2rem\n  }\n\n  .md\\:mt-10 {\n    margin-top: 2.5rem\n  }\n\n  .md\\:mr-10 {\n    margin-right: 2.5rem\n  }\n\n  .md\\:mb-10 {\n    margin-bottom: 2.5rem\n  }\n\n  .md\\:ml-10 {\n    margin-left: 2.5rem\n  }\n\n  .md\\:mt-12 {\n    margin-top: 3rem\n  }\n\n  .md\\:mr-12 {\n    margin-right: 3rem\n  }\n\n  .md\\:mb-12 {\n    margin-bottom: 3rem\n  }\n\n  .md\\:ml-12 {\n    margin-left: 3rem\n  }\n\n  .md\\:mt-16 {\n    margin-top: 4rem\n  }\n\n  .md\\:mr-16 {\n    margin-right: 4rem\n  }\n\n  .md\\:mb-16 {\n    margin-bottom: 4rem\n  }\n\n  .md\\:ml-16 {\n    margin-left: 4rem\n  }\n\n  .md\\:mt-20 {\n    margin-top: 5rem\n  }\n\n  .md\\:mr-20 {\n    margin-right: 5rem\n  }\n\n  .md\\:mb-20 {\n    margin-bottom: 5rem\n  }\n\n  .md\\:ml-20 {\n    margin-left: 5rem\n  }\n\n  .md\\:mt-24 {\n    margin-top: 6rem\n  }\n\n  .md\\:mr-24 {\n    margin-right: 6rem\n  }\n\n  .md\\:mb-24 {\n    margin-bottom: 6rem\n  }\n\n  .md\\:ml-24 {\n    margin-left: 6rem\n  }\n\n  .md\\:mt-32 {\n    margin-top: 8rem\n  }\n\n  .md\\:mr-32 {\n    margin-right: 8rem\n  }\n\n  .md\\:mb-32 {\n    margin-bottom: 8rem\n  }\n\n  .md\\:ml-32 {\n    margin-left: 8rem\n  }\n\n  .md\\:mt-40 {\n    margin-top: 10rem\n  }\n\n  .md\\:mr-40 {\n    margin-right: 10rem\n  }\n\n  .md\\:mb-40 {\n    margin-bottom: 10rem\n  }\n\n  .md\\:ml-40 {\n    margin-left: 10rem\n  }\n\n  .md\\:mt-48 {\n    margin-top: 12rem\n  }\n\n  .md\\:mr-48 {\n    margin-right: 12rem\n  }\n\n  .md\\:mb-48 {\n    margin-bottom: 12rem\n  }\n\n  .md\\:ml-48 {\n    margin-left: 12rem\n  }\n\n  .md\\:mt-56 {\n    margin-top: 14rem\n  }\n\n  .md\\:mr-56 {\n    margin-right: 14rem\n  }\n\n  .md\\:mb-56 {\n    margin-bottom: 14rem\n  }\n\n  .md\\:ml-56 {\n    margin-left: 14rem\n  }\n\n  .md\\:mt-64 {\n    margin-top: 16rem\n  }\n\n  .md\\:mr-64 {\n    margin-right: 16rem\n  }\n\n  .md\\:mb-64 {\n    margin-bottom: 16rem\n  }\n\n  .md\\:ml-64 {\n    margin-left: 16rem\n  }\n\n  .md\\:mt-auto {\n    margin-top: auto\n  }\n\n  .md\\:mr-auto {\n    margin-right: auto\n  }\n\n  .md\\:mb-auto {\n    margin-bottom: auto\n  }\n\n  .md\\:ml-auto {\n    margin-left: auto\n  }\n\n  .md\\:mt-px {\n    margin-top: 1px\n  }\n\n  .md\\:mr-px {\n    margin-right: 1px\n  }\n\n  .md\\:mb-px {\n    margin-bottom: 1px\n  }\n\n  .md\\:ml-px {\n    margin-left: 1px\n  }\n\n  .md\\:-mt-1 {\n    margin-top: -0.25rem\n  }\n\n  .md\\:-mr-1 {\n    margin-right: -0.25rem\n  }\n\n  .md\\:-mb-1 {\n    margin-bottom: -0.25rem\n  }\n\n  .md\\:-ml-1 {\n    margin-left: -0.25rem\n  }\n\n  .md\\:-mt-2 {\n    margin-top: -0.5rem\n  }\n\n  .md\\:-mr-2 {\n    margin-right: -0.5rem\n  }\n\n  .md\\:-mb-2 {\n    margin-bottom: -0.5rem\n  }\n\n  .md\\:-ml-2 {\n    margin-left: -0.5rem\n  }\n\n  .md\\:-mt-3 {\n    margin-top: -0.75rem\n  }\n\n  .md\\:-mr-3 {\n    margin-right: -0.75rem\n  }\n\n  .md\\:-mb-3 {\n    margin-bottom: -0.75rem\n  }\n\n  .md\\:-ml-3 {\n    margin-left: -0.75rem\n  }\n\n  .md\\:-mt-4 {\n    margin-top: -1rem\n  }\n\n  .md\\:-mr-4 {\n    margin-right: -1rem\n  }\n\n  .md\\:-mb-4 {\n    margin-bottom: -1rem\n  }\n\n  .md\\:-ml-4 {\n    margin-left: -1rem\n  }\n\n  .md\\:-mt-5 {\n    margin-top: -1.25rem\n  }\n\n  .md\\:-mr-5 {\n    margin-right: -1.25rem\n  }\n\n  .md\\:-mb-5 {\n    margin-bottom: -1.25rem\n  }\n\n  .md\\:-ml-5 {\n    margin-left: -1.25rem\n  }\n\n  .md\\:-mt-6 {\n    margin-top: -1.5rem\n  }\n\n  .md\\:-mr-6 {\n    margin-right: -1.5rem\n  }\n\n  .md\\:-mb-6 {\n    margin-bottom: -1.5rem\n  }\n\n  .md\\:-ml-6 {\n    margin-left: -1.5rem\n  }\n\n  .md\\:-mt-8 {\n    margin-top: -2rem\n  }\n\n  .md\\:-mr-8 {\n    margin-right: -2rem\n  }\n\n  .md\\:-mb-8 {\n    margin-bottom: -2rem\n  }\n\n  .md\\:-ml-8 {\n    margin-left: -2rem\n  }\n\n  .md\\:-mt-10 {\n    margin-top: -2.5rem\n  }\n\n  .md\\:-mr-10 {\n    margin-right: -2.5rem\n  }\n\n  .md\\:-mb-10 {\n    margin-bottom: -2.5rem\n  }\n\n  .md\\:-ml-10 {\n    margin-left: -2.5rem\n  }\n\n  .md\\:-mt-12 {\n    margin-top: -3rem\n  }\n\n  .md\\:-mr-12 {\n    margin-right: -3rem\n  }\n\n  .md\\:-mb-12 {\n    margin-bottom: -3rem\n  }\n\n  .md\\:-ml-12 {\n    margin-left: -3rem\n  }\n\n  .md\\:-mt-16 {\n    margin-top: -4rem\n  }\n\n  .md\\:-mr-16 {\n    margin-right: -4rem\n  }\n\n  .md\\:-mb-16 {\n    margin-bottom: -4rem\n  }\n\n  .md\\:-ml-16 {\n    margin-left: -4rem\n  }\n\n  .md\\:-mt-20 {\n    margin-top: -5rem\n  }\n\n  .md\\:-mr-20 {\n    margin-right: -5rem\n  }\n\n  .md\\:-mb-20 {\n    margin-bottom: -5rem\n  }\n\n  .md\\:-ml-20 {\n    margin-left: -5rem\n  }\n\n  .md\\:-mt-24 {\n    margin-top: -6rem\n  }\n\n  .md\\:-mr-24 {\n    margin-right: -6rem\n  }\n\n  .md\\:-mb-24 {\n    margin-bottom: -6rem\n  }\n\n  .md\\:-ml-24 {\n    margin-left: -6rem\n  }\n\n  .md\\:-mt-32 {\n    margin-top: -8rem\n  }\n\n  .md\\:-mr-32 {\n    margin-right: -8rem\n  }\n\n  .md\\:-mb-32 {\n    margin-bottom: -8rem\n  }\n\n  .md\\:-ml-32 {\n    margin-left: -8rem\n  }\n\n  .md\\:-mt-40 {\n    margin-top: -10rem\n  }\n\n  .md\\:-mr-40 {\n    margin-right: -10rem\n  }\n\n  .md\\:-mb-40 {\n    margin-bottom: -10rem\n  }\n\n  .md\\:-ml-40 {\n    margin-left: -10rem\n  }\n\n  .md\\:-mt-48 {\n    margin-top: -12rem\n  }\n\n  .md\\:-mr-48 {\n    margin-right: -12rem\n  }\n\n  .md\\:-mb-48 {\n    margin-bottom: -12rem\n  }\n\n  .md\\:-ml-48 {\n    margin-left: -12rem\n  }\n\n  .md\\:-mt-56 {\n    margin-top: -14rem\n  }\n\n  .md\\:-mr-56 {\n    margin-right: -14rem\n  }\n\n  .md\\:-mb-56 {\n    margin-bottom: -14rem\n  }\n\n  .md\\:-ml-56 {\n    margin-left: -14rem\n  }\n\n  .md\\:-mt-64 {\n    margin-top: -16rem\n  }\n\n  .md\\:-mr-64 {\n    margin-right: -16rem\n  }\n\n  .md\\:-mb-64 {\n    margin-bottom: -16rem\n  }\n\n  .md\\:-ml-64 {\n    margin-left: -16rem\n  }\n\n  .md\\:-mt-px {\n    margin-top: -1px\n  }\n\n  .md\\:-mr-px {\n    margin-right: -1px\n  }\n\n  .md\\:-mb-px {\n    margin-bottom: -1px\n  }\n\n  .md\\:-ml-px {\n    margin-left: -1px\n  }\n\n  .md\\:max-h-full {\n    max-height: 100%\n  }\n\n  .md\\:max-h-screen {\n    max-height: 100vh\n  }\n\n  .md\\:max-w-xs {\n    max-width: 20rem\n  }\n\n  .md\\:max-w-sm {\n    max-width: 24rem\n  }\n\n  .md\\:max-w-md {\n    max-width: 28rem\n  }\n\n  .md\\:max-w-lg {\n    max-width: 32rem\n  }\n\n  .md\\:max-w-xl {\n    max-width: 36rem\n  }\n\n  .md\\:max-w-2xl {\n    max-width: 42rem\n  }\n\n  .md\\:max-w-3xl {\n    max-width: 48rem\n  }\n\n  .md\\:max-w-4xl {\n    max-width: 56rem\n  }\n\n  .md\\:max-w-5xl {\n    max-width: 64rem\n  }\n\n  .md\\:max-w-6xl {\n    max-width: 72rem\n  }\n\n  .md\\:max-w-full {\n    max-width: 100%\n  }\n\n  .md\\:min-h-0 {\n    min-height: 0\n  }\n\n  .md\\:min-h-full {\n    min-height: 100%\n  }\n\n  .md\\:min-h-screen {\n    min-height: 100vh\n  }\n\n  .md\\:min-w-0 {\n    min-width: 0\n  }\n\n  .md\\:min-w-full {\n    min-width: 100%\n  }\n\n  .md\\:object-contain {\n    -o-object-fit: contain;\n       object-fit: contain\n  }\n\n  .md\\:object-cover {\n    -o-object-fit: cover;\n       object-fit: cover\n  }\n\n  .md\\:object-fill {\n    -o-object-fit: fill;\n       object-fit: fill\n  }\n\n  .md\\:object-none {\n    -o-object-fit: none;\n       object-fit: none\n  }\n\n  .md\\:object-scale-down {\n    -o-object-fit: scale-down;\n       object-fit: scale-down\n  }\n\n  .md\\:object-bottom {\n    -o-object-position: bottom;\n       object-position: bottom\n  }\n\n  .md\\:object-center {\n    -o-object-position: center;\n       object-position: center\n  }\n\n  .md\\:object-left {\n    -o-object-position: left;\n       object-position: left\n  }\n\n  .md\\:object-left-bottom {\n    -o-object-position: left bottom;\n       object-position: left bottom\n  }\n\n  .md\\:object-left-top {\n    -o-object-position: left top;\n       object-position: left top\n  }\n\n  .md\\:object-right {\n    -o-object-position: right;\n       object-position: right\n  }\n\n  .md\\:object-right-bottom {\n    -o-object-position: right bottom;\n       object-position: right bottom\n  }\n\n  .md\\:object-right-top {\n    -o-object-position: right top;\n       object-position: right top\n  }\n\n  .md\\:object-top {\n    -o-object-position: top;\n       object-position: top\n  }\n\n  .md\\:opacity-0 {\n    opacity: 0\n  }\n\n  .md\\:opacity-25 {\n    opacity: 0.25\n  }\n\n  .md\\:opacity-50 {\n    opacity: 0.5\n  }\n\n  .md\\:opacity-75 {\n    opacity: 0.75\n  }\n\n  .md\\:opacity-100 {\n    opacity: 1\n  }\n\n  .md\\:hover\\:opacity-0:hover {\n    opacity: 0\n  }\n\n  .md\\:hover\\:opacity-25:hover {\n    opacity: 0.25\n  }\n\n  .md\\:hover\\:opacity-50:hover {\n    opacity: 0.5\n  }\n\n  .md\\:hover\\:opacity-75:hover {\n    opacity: 0.75\n  }\n\n  .md\\:hover\\:opacity-100:hover {\n    opacity: 1\n  }\n\n  .md\\:focus\\:opacity-0:focus {\n    opacity: 0\n  }\n\n  .md\\:focus\\:opacity-25:focus {\n    opacity: 0.25\n  }\n\n  .md\\:focus\\:opacity-50:focus {\n    opacity: 0.5\n  }\n\n  .md\\:focus\\:opacity-75:focus {\n    opacity: 0.75\n  }\n\n  .md\\:focus\\:opacity-100:focus {\n    opacity: 1\n  }\n\n  .md\\:outline-none {\n    outline: 0\n  }\n\n  .md\\:focus\\:outline-none:focus {\n    outline: 0\n  }\n\n  .md\\:overflow-auto {\n    overflow: auto\n  }\n\n  .md\\:overflow-hidden {\n    overflow: hidden\n  }\n\n  .md\\:overflow-visible {\n    overflow: visible\n  }\n\n  .md\\:overflow-scroll {\n    overflow: scroll\n  }\n\n  .md\\:overflow-x-auto {\n    overflow-x: auto\n  }\n\n  .md\\:overflow-y-auto {\n    overflow-y: auto\n  }\n\n  .md\\:overflow-x-hidden {\n    overflow-x: hidden\n  }\n\n  .md\\:overflow-y-hidden {\n    overflow-y: hidden\n  }\n\n  .md\\:overflow-x-visible {\n    overflow-x: visible\n  }\n\n  .md\\:overflow-y-visible {\n    overflow-y: visible\n  }\n\n  .md\\:overflow-x-scroll {\n    overflow-x: scroll\n  }\n\n  .md\\:overflow-y-scroll {\n    overflow-y: scroll\n  }\n\n  .md\\:scrolling-touch {\n    -webkit-overflow-scrolling: touch\n  }\n\n  .md\\:scrolling-auto {\n    -webkit-overflow-scrolling: auto\n  }\n\n  .md\\:p-0 {\n    padding: 0\n  }\n\n  .md\\:p-1 {\n    padding: 0.25rem\n  }\n\n  .md\\:p-2 {\n    padding: 0.5rem\n  }\n\n  .md\\:p-3 {\n    padding: 0.75rem\n  }\n\n  .md\\:p-4 {\n    padding: 1rem\n  }\n\n  .md\\:p-5 {\n    padding: 1.25rem\n  }\n\n  .md\\:p-6 {\n    padding: 1.5rem\n  }\n\n  .md\\:p-8 {\n    padding: 2rem\n  }\n\n  .md\\:p-10 {\n    padding: 2.5rem\n  }\n\n  .md\\:p-12 {\n    padding: 3rem\n  }\n\n  .md\\:p-16 {\n    padding: 4rem\n  }\n\n  .md\\:p-20 {\n    padding: 5rem\n  }\n\n  .md\\:p-24 {\n    padding: 6rem\n  }\n\n  .md\\:p-32 {\n    padding: 8rem\n  }\n\n  .md\\:p-40 {\n    padding: 10rem\n  }\n\n  .md\\:p-48 {\n    padding: 12rem\n  }\n\n  .md\\:p-56 {\n    padding: 14rem\n  }\n\n  .md\\:p-64 {\n    padding: 16rem\n  }\n\n  .md\\:p-px {\n    padding: 1px\n  }\n\n  .md\\:py-0 {\n    padding-top: 0;\n    padding-bottom: 0\n  }\n\n  .md\\:px-0 {\n    padding-left: 0;\n    padding-right: 0\n  }\n\n  .md\\:py-1 {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem\n  }\n\n  .md\\:px-1 {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem\n  }\n\n  .md\\:py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem\n  }\n\n  .md\\:px-2 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem\n  }\n\n  .md\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem\n  }\n\n  .md\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem\n  }\n\n  .md\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem\n  }\n\n  .md\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem\n  }\n\n  .md\\:py-5 {\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem\n  }\n\n  .md\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem\n  }\n\n  .md\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem\n  }\n\n  .md\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem\n  }\n\n  .md\\:py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem\n  }\n\n  .md\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem\n  }\n\n  .md\\:py-10 {\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem\n  }\n\n  .md\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem\n  }\n\n  .md\\:py-12 {\n    padding-top: 3rem;\n    padding-bottom: 3rem\n  }\n\n  .md\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem\n  }\n\n  .md\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem\n  }\n\n  .md\\:px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem\n  }\n\n  .md\\:py-20 {\n    padding-top: 5rem;\n    padding-bottom: 5rem\n  }\n\n  .md\\:px-20 {\n    padding-left: 5rem;\n    padding-right: 5rem\n  }\n\n  .md\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem\n  }\n\n  .md\\:px-24 {\n    padding-left: 6rem;\n    padding-right: 6rem\n  }\n\n  .md\\:py-32 {\n    padding-top: 8rem;\n    padding-bottom: 8rem\n  }\n\n  .md\\:px-32 {\n    padding-left: 8rem;\n    padding-right: 8rem\n  }\n\n  .md\\:py-40 {\n    padding-top: 10rem;\n    padding-bottom: 10rem\n  }\n\n  .md\\:px-40 {\n    padding-left: 10rem;\n    padding-right: 10rem\n  }\n\n  .md\\:py-48 {\n    padding-top: 12rem;\n    padding-bottom: 12rem\n  }\n\n  .md\\:px-48 {\n    padding-left: 12rem;\n    padding-right: 12rem\n  }\n\n  .md\\:py-56 {\n    padding-top: 14rem;\n    padding-bottom: 14rem\n  }\n\n  .md\\:px-56 {\n    padding-left: 14rem;\n    padding-right: 14rem\n  }\n\n  .md\\:py-64 {\n    padding-top: 16rem;\n    padding-bottom: 16rem\n  }\n\n  .md\\:px-64 {\n    padding-left: 16rem;\n    padding-right: 16rem\n  }\n\n  .md\\:py-px {\n    padding-top: 1px;\n    padding-bottom: 1px\n  }\n\n  .md\\:px-px {\n    padding-left: 1px;\n    padding-right: 1px\n  }\n\n  .md\\:pt-0 {\n    padding-top: 0\n  }\n\n  .md\\:pr-0 {\n    padding-right: 0\n  }\n\n  .md\\:pb-0 {\n    padding-bottom: 0\n  }\n\n  .md\\:pl-0 {\n    padding-left: 0\n  }\n\n  .md\\:pt-1 {\n    padding-top: 0.25rem\n  }\n\n  .md\\:pr-1 {\n    padding-right: 0.25rem\n  }\n\n  .md\\:pb-1 {\n    padding-bottom: 0.25rem\n  }\n\n  .md\\:pl-1 {\n    padding-left: 0.25rem\n  }\n\n  .md\\:pt-2 {\n    padding-top: 0.5rem\n  }\n\n  .md\\:pr-2 {\n    padding-right: 0.5rem\n  }\n\n  .md\\:pb-2 {\n    padding-bottom: 0.5rem\n  }\n\n  .md\\:pl-2 {\n    padding-left: 0.5rem\n  }\n\n  .md\\:pt-3 {\n    padding-top: 0.75rem\n  }\n\n  .md\\:pr-3 {\n    padding-right: 0.75rem\n  }\n\n  .md\\:pb-3 {\n    padding-bottom: 0.75rem\n  }\n\n  .md\\:pl-3 {\n    padding-left: 0.75rem\n  }\n\n  .md\\:pt-4 {\n    padding-top: 1rem\n  }\n\n  .md\\:pr-4 {\n    padding-right: 1rem\n  }\n\n  .md\\:pb-4 {\n    padding-bottom: 1rem\n  }\n\n  .md\\:pl-4 {\n    padding-left: 1rem\n  }\n\n  .md\\:pt-5 {\n    padding-top: 1.25rem\n  }\n\n  .md\\:pr-5 {\n    padding-right: 1.25rem\n  }\n\n  .md\\:pb-5 {\n    padding-bottom: 1.25rem\n  }\n\n  .md\\:pl-5 {\n    padding-left: 1.25rem\n  }\n\n  .md\\:pt-6 {\n    padding-top: 1.5rem\n  }\n\n  .md\\:pr-6 {\n    padding-right: 1.5rem\n  }\n\n  .md\\:pb-6 {\n    padding-bottom: 1.5rem\n  }\n\n  .md\\:pl-6 {\n    padding-left: 1.5rem\n  }\n\n  .md\\:pt-8 {\n    padding-top: 2rem\n  }\n\n  .md\\:pr-8 {\n    padding-right: 2rem\n  }\n\n  .md\\:pb-8 {\n    padding-bottom: 2rem\n  }\n\n  .md\\:pl-8 {\n    padding-left: 2rem\n  }\n\n  .md\\:pt-10 {\n    padding-top: 2.5rem\n  }\n\n  .md\\:pr-10 {\n    padding-right: 2.5rem\n  }\n\n  .md\\:pb-10 {\n    padding-bottom: 2.5rem\n  }\n\n  .md\\:pl-10 {\n    padding-left: 2.5rem\n  }\n\n  .md\\:pt-12 {\n    padding-top: 3rem\n  }\n\n  .md\\:pr-12 {\n    padding-right: 3rem\n  }\n\n  .md\\:pb-12 {\n    padding-bottom: 3rem\n  }\n\n  .md\\:pl-12 {\n    padding-left: 3rem\n  }\n\n  .md\\:pt-16 {\n    padding-top: 4rem\n  }\n\n  .md\\:pr-16 {\n    padding-right: 4rem\n  }\n\n  .md\\:pb-16 {\n    padding-bottom: 4rem\n  }\n\n  .md\\:pl-16 {\n    padding-left: 4rem\n  }\n\n  .md\\:pt-20 {\n    padding-top: 5rem\n  }\n\n  .md\\:pr-20 {\n    padding-right: 5rem\n  }\n\n  .md\\:pb-20 {\n    padding-bottom: 5rem\n  }\n\n  .md\\:pl-20 {\n    padding-left: 5rem\n  }\n\n  .md\\:pt-24 {\n    padding-top: 6rem\n  }\n\n  .md\\:pr-24 {\n    padding-right: 6rem\n  }\n\n  .md\\:pb-24 {\n    padding-bottom: 6rem\n  }\n\n  .md\\:pl-24 {\n    padding-left: 6rem\n  }\n\n  .md\\:pt-32 {\n    padding-top: 8rem\n  }\n\n  .md\\:pr-32 {\n    padding-right: 8rem\n  }\n\n  .md\\:pb-32 {\n    padding-bottom: 8rem\n  }\n\n  .md\\:pl-32 {\n    padding-left: 8rem\n  }\n\n  .md\\:pt-40 {\n    padding-top: 10rem\n  }\n\n  .md\\:pr-40 {\n    padding-right: 10rem\n  }\n\n  .md\\:pb-40 {\n    padding-bottom: 10rem\n  }\n\n  .md\\:pl-40 {\n    padding-left: 10rem\n  }\n\n  .md\\:pt-48 {\n    padding-top: 12rem\n  }\n\n  .md\\:pr-48 {\n    padding-right: 12rem\n  }\n\n  .md\\:pb-48 {\n    padding-bottom: 12rem\n  }\n\n  .md\\:pl-48 {\n    padding-left: 12rem\n  }\n\n  .md\\:pt-56 {\n    padding-top: 14rem\n  }\n\n  .md\\:pr-56 {\n    padding-right: 14rem\n  }\n\n  .md\\:pb-56 {\n    padding-bottom: 14rem\n  }\n\n  .md\\:pl-56 {\n    padding-left: 14rem\n  }\n\n  .md\\:pt-64 {\n    padding-top: 16rem\n  }\n\n  .md\\:pr-64 {\n    padding-right: 16rem\n  }\n\n  .md\\:pb-64 {\n    padding-bottom: 16rem\n  }\n\n  .md\\:pl-64 {\n    padding-left: 16rem\n  }\n\n  .md\\:pt-px {\n    padding-top: 1px\n  }\n\n  .md\\:pr-px {\n    padding-right: 1px\n  }\n\n  .md\\:pb-px {\n    padding-bottom: 1px\n  }\n\n  .md\\:pl-px {\n    padding-left: 1px\n  }\n\n  .md\\:placeholder-transparent:-ms-input-placeholder {\n    color: transparent\n  }\n\n  .md\\:placeholder-transparent::-ms-input-placeholder {\n    color: transparent\n  }\n\n  .md\\:placeholder-transparent::placeholder {\n    color: transparent\n  }\n\n  .md\\:placeholder-black:-ms-input-placeholder {\n    color: #000\n  }\n\n  .md\\:placeholder-black::-ms-input-placeholder {\n    color: #000\n  }\n\n  .md\\:placeholder-black::placeholder {\n    color: #000\n  }\n\n  .md\\:placeholder-white:-ms-input-placeholder {\n    color: #fff\n  }\n\n  .md\\:placeholder-white::-ms-input-placeholder {\n    color: #fff\n  }\n\n  .md\\:placeholder-white::placeholder {\n    color: #fff\n  }\n\n  .md\\:placeholder-gray-100:-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .md\\:placeholder-gray-100::-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .md\\:placeholder-gray-100::placeholder {\n    color: #f7fafc\n  }\n\n  .md\\:placeholder-gray-200:-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .md\\:placeholder-gray-200::-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .md\\:placeholder-gray-200::placeholder {\n    color: #edf2f7\n  }\n\n  .md\\:placeholder-gray-300:-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .md\\:placeholder-gray-300::-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .md\\:placeholder-gray-300::placeholder {\n    color: #e2e8f0\n  }\n\n  .md\\:placeholder-gray-400:-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .md\\:placeholder-gray-400::-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .md\\:placeholder-gray-400::placeholder {\n    color: #cbd5e0\n  }\n\n  .md\\:placeholder-gray-500:-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .md\\:placeholder-gray-500::-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .md\\:placeholder-gray-500::placeholder {\n    color: #a0aec0\n  }\n\n  .md\\:placeholder-gray-600:-ms-input-placeholder {\n    color: #718096\n  }\n\n  .md\\:placeholder-gray-600::-ms-input-placeholder {\n    color: #718096\n  }\n\n  .md\\:placeholder-gray-600::placeholder {\n    color: #718096\n  }\n\n  .md\\:placeholder-gray-700:-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .md\\:placeholder-gray-700::-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .md\\:placeholder-gray-700::placeholder {\n    color: #4a5568\n  }\n\n  .md\\:placeholder-gray-800:-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .md\\:placeholder-gray-800::-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .md\\:placeholder-gray-800::placeholder {\n    color: #2d3748\n  }\n\n  .md\\:placeholder-gray-900:-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .md\\:placeholder-gray-900::-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .md\\:placeholder-gray-900::placeholder {\n    color: #1a202c\n  }\n\n  .md\\:placeholder-red-100:-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .md\\:placeholder-red-100::-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .md\\:placeholder-red-100::placeholder {\n    color: #fff5f5\n  }\n\n  .md\\:placeholder-red-200:-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .md\\:placeholder-red-200::-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .md\\:placeholder-red-200::placeholder {\n    color: #fed7d7\n  }\n\n  .md\\:placeholder-red-300:-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .md\\:placeholder-red-300::-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .md\\:placeholder-red-300::placeholder {\n    color: #feb2b2\n  }\n\n  .md\\:placeholder-red-400:-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .md\\:placeholder-red-400::-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .md\\:placeholder-red-400::placeholder {\n    color: #fc8181\n  }\n\n  .md\\:placeholder-red-500:-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .md\\:placeholder-red-500::-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .md\\:placeholder-red-500::placeholder {\n    color: #f56565\n  }\n\n  .md\\:placeholder-red-600:-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .md\\:placeholder-red-600::-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .md\\:placeholder-red-600::placeholder {\n    color: #e53e3e\n  }\n\n  .md\\:placeholder-red-700:-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .md\\:placeholder-red-700::-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .md\\:placeholder-red-700::placeholder {\n    color: #c53030\n  }\n\n  .md\\:placeholder-red-800:-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .md\\:placeholder-red-800::-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .md\\:placeholder-red-800::placeholder {\n    color: #9b2c2c\n  }\n\n  .md\\:placeholder-red-900:-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .md\\:placeholder-red-900::-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .md\\:placeholder-red-900::placeholder {\n    color: #742a2a\n  }\n\n  .md\\:placeholder-orange-100:-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .md\\:placeholder-orange-100::-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .md\\:placeholder-orange-100::placeholder {\n    color: #fffaf0\n  }\n\n  .md\\:placeholder-orange-200:-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .md\\:placeholder-orange-200::-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .md\\:placeholder-orange-200::placeholder {\n    color: #feebc8\n  }\n\n  .md\\:placeholder-orange-300:-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .md\\:placeholder-orange-300::-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .md\\:placeholder-orange-300::placeholder {\n    color: #fbd38d\n  }\n\n  .md\\:placeholder-orange-400:-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .md\\:placeholder-orange-400::-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .md\\:placeholder-orange-400::placeholder {\n    color: #f6ad55\n  }\n\n  .md\\:placeholder-orange-500:-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .md\\:placeholder-orange-500::-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .md\\:placeholder-orange-500::placeholder {\n    color: #ed8936\n  }\n\n  .md\\:placeholder-orange-600:-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .md\\:placeholder-orange-600::-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .md\\:placeholder-orange-600::placeholder {\n    color: #dd6b20\n  }\n\n  .md\\:placeholder-orange-700:-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .md\\:placeholder-orange-700::-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .md\\:placeholder-orange-700::placeholder {\n    color: #c05621\n  }\n\n  .md\\:placeholder-orange-800:-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .md\\:placeholder-orange-800::-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .md\\:placeholder-orange-800::placeholder {\n    color: #9c4221\n  }\n\n  .md\\:placeholder-orange-900:-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .md\\:placeholder-orange-900::-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .md\\:placeholder-orange-900::placeholder {\n    color: #7b341e\n  }\n\n  .md\\:placeholder-yellow-100:-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .md\\:placeholder-yellow-100::-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .md\\:placeholder-yellow-100::placeholder {\n    color: #fffff0\n  }\n\n  .md\\:placeholder-yellow-200:-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .md\\:placeholder-yellow-200::-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .md\\:placeholder-yellow-200::placeholder {\n    color: #fefcbf\n  }\n\n  .md\\:placeholder-yellow-300:-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .md\\:placeholder-yellow-300::-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .md\\:placeholder-yellow-300::placeholder {\n    color: #faf089\n  }\n\n  .md\\:placeholder-yellow-400:-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .md\\:placeholder-yellow-400::-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .md\\:placeholder-yellow-400::placeholder {\n    color: #f6e05e\n  }\n\n  .md\\:placeholder-yellow-500:-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .md\\:placeholder-yellow-500::-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .md\\:placeholder-yellow-500::placeholder {\n    color: #ecc94b\n  }\n\n  .md\\:placeholder-yellow-600:-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .md\\:placeholder-yellow-600::-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .md\\:placeholder-yellow-600::placeholder {\n    color: #d69e2e\n  }\n\n  .md\\:placeholder-yellow-700:-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .md\\:placeholder-yellow-700::-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .md\\:placeholder-yellow-700::placeholder {\n    color: #b7791f\n  }\n\n  .md\\:placeholder-yellow-800:-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .md\\:placeholder-yellow-800::-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .md\\:placeholder-yellow-800::placeholder {\n    color: #975a16\n  }\n\n  .md\\:placeholder-yellow-900:-ms-input-placeholder {\n    color: #744210\n  }\n\n  .md\\:placeholder-yellow-900::-ms-input-placeholder {\n    color: #744210\n  }\n\n  .md\\:placeholder-yellow-900::placeholder {\n    color: #744210\n  }\n\n  .md\\:placeholder-green-100:-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .md\\:placeholder-green-100::-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .md\\:placeholder-green-100::placeholder {\n    color: #f0fff4\n  }\n\n  .md\\:placeholder-green-200:-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .md\\:placeholder-green-200::-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .md\\:placeholder-green-200::placeholder {\n    color: #c6f6d5\n  }\n\n  .md\\:placeholder-green-300:-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .md\\:placeholder-green-300::-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .md\\:placeholder-green-300::placeholder {\n    color: #9ae6b4\n  }\n\n  .md\\:placeholder-green-400:-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .md\\:placeholder-green-400::-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .md\\:placeholder-green-400::placeholder {\n    color: #68d391\n  }\n\n  .md\\:placeholder-green-500:-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .md\\:placeholder-green-500::-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .md\\:placeholder-green-500::placeholder {\n    color: #48bb78\n  }\n\n  .md\\:placeholder-green-600:-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .md\\:placeholder-green-600::-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .md\\:placeholder-green-600::placeholder {\n    color: #38a169\n  }\n\n  .md\\:placeholder-green-700:-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .md\\:placeholder-green-700::-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .md\\:placeholder-green-700::placeholder {\n    color: #2f855a\n  }\n\n  .md\\:placeholder-green-800:-ms-input-placeholder {\n    color: #276749\n  }\n\n  .md\\:placeholder-green-800::-ms-input-placeholder {\n    color: #276749\n  }\n\n  .md\\:placeholder-green-800::placeholder {\n    color: #276749\n  }\n\n  .md\\:placeholder-green-900:-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .md\\:placeholder-green-900::-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .md\\:placeholder-green-900::placeholder {\n    color: #22543d\n  }\n\n  .md\\:placeholder-teal-100:-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .md\\:placeholder-teal-100::-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .md\\:placeholder-teal-100::placeholder {\n    color: #e6fffa\n  }\n\n  .md\\:placeholder-teal-200:-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .md\\:placeholder-teal-200::-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .md\\:placeholder-teal-200::placeholder {\n    color: #b2f5ea\n  }\n\n  .md\\:placeholder-teal-300:-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .md\\:placeholder-teal-300::-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .md\\:placeholder-teal-300::placeholder {\n    color: #81e6d9\n  }\n\n  .md\\:placeholder-teal-400:-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .md\\:placeholder-teal-400::-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .md\\:placeholder-teal-400::placeholder {\n    color: #4fd1c5\n  }\n\n  .md\\:placeholder-teal-500:-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .md\\:placeholder-teal-500::-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .md\\:placeholder-teal-500::placeholder {\n    color: #38b2ac\n  }\n\n  .md\\:placeholder-teal-600:-ms-input-placeholder {\n    color: #319795\n  }\n\n  .md\\:placeholder-teal-600::-ms-input-placeholder {\n    color: #319795\n  }\n\n  .md\\:placeholder-teal-600::placeholder {\n    color: #319795\n  }\n\n  .md\\:placeholder-teal-700:-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .md\\:placeholder-teal-700::-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .md\\:placeholder-teal-700::placeholder {\n    color: #2c7a7b\n  }\n\n  .md\\:placeholder-teal-800:-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .md\\:placeholder-teal-800::-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .md\\:placeholder-teal-800::placeholder {\n    color: #285e61\n  }\n\n  .md\\:placeholder-teal-900:-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .md\\:placeholder-teal-900::-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .md\\:placeholder-teal-900::placeholder {\n    color: #234e52\n  }\n\n  .md\\:placeholder-blue-100:-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .md\\:placeholder-blue-100::-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .md\\:placeholder-blue-100::placeholder {\n    color: #ebf8ff\n  }\n\n  .md\\:placeholder-blue-200:-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .md\\:placeholder-blue-200::-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .md\\:placeholder-blue-200::placeholder {\n    color: #bee3f8\n  }\n\n  .md\\:placeholder-blue-300:-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .md\\:placeholder-blue-300::-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .md\\:placeholder-blue-300::placeholder {\n    color: #90cdf4\n  }\n\n  .md\\:placeholder-blue-400:-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .md\\:placeholder-blue-400::-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .md\\:placeholder-blue-400::placeholder {\n    color: #63b3ed\n  }\n\n  .md\\:placeholder-blue-500:-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .md\\:placeholder-blue-500::-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .md\\:placeholder-blue-500::placeholder {\n    color: #4299e1\n  }\n\n  .md\\:placeholder-blue-600:-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .md\\:placeholder-blue-600::-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .md\\:placeholder-blue-600::placeholder {\n    color: #3182ce\n  }\n\n  .md\\:placeholder-blue-700:-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .md\\:placeholder-blue-700::-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .md\\:placeholder-blue-700::placeholder {\n    color: #2b6cb0\n  }\n\n  .md\\:placeholder-blue-800:-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .md\\:placeholder-blue-800::-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .md\\:placeholder-blue-800::placeholder {\n    color: #2c5282\n  }\n\n  .md\\:placeholder-blue-900:-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .md\\:placeholder-blue-900::-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .md\\:placeholder-blue-900::placeholder {\n    color: #2a4365\n  }\n\n  .md\\:placeholder-indigo-100:-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .md\\:placeholder-indigo-100::-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .md\\:placeholder-indigo-100::placeholder {\n    color: #ebf4ff\n  }\n\n  .md\\:placeholder-indigo-200:-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .md\\:placeholder-indigo-200::-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .md\\:placeholder-indigo-200::placeholder {\n    color: #c3dafe\n  }\n\n  .md\\:placeholder-indigo-300:-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .md\\:placeholder-indigo-300::-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .md\\:placeholder-indigo-300::placeholder {\n    color: #a3bffa\n  }\n\n  .md\\:placeholder-indigo-400:-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .md\\:placeholder-indigo-400::-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .md\\:placeholder-indigo-400::placeholder {\n    color: #7f9cf5\n  }\n\n  .md\\:placeholder-indigo-500:-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .md\\:placeholder-indigo-500::-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .md\\:placeholder-indigo-500::placeholder {\n    color: #667eea\n  }\n\n  .md\\:placeholder-indigo-600:-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .md\\:placeholder-indigo-600::-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .md\\:placeholder-indigo-600::placeholder {\n    color: #5a67d8\n  }\n\n  .md\\:placeholder-indigo-700:-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .md\\:placeholder-indigo-700::-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .md\\:placeholder-indigo-700::placeholder {\n    color: #4c51bf\n  }\n\n  .md\\:placeholder-indigo-800:-ms-input-placeholder {\n    color: #434190\n  }\n\n  .md\\:placeholder-indigo-800::-ms-input-placeholder {\n    color: #434190\n  }\n\n  .md\\:placeholder-indigo-800::placeholder {\n    color: #434190\n  }\n\n  .md\\:placeholder-indigo-900:-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .md\\:placeholder-indigo-900::-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .md\\:placeholder-indigo-900::placeholder {\n    color: #3c366b\n  }\n\n  .md\\:placeholder-purple-100:-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .md\\:placeholder-purple-100::-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .md\\:placeholder-purple-100::placeholder {\n    color: #faf5ff\n  }\n\n  .md\\:placeholder-purple-200:-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .md\\:placeholder-purple-200::-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .md\\:placeholder-purple-200::placeholder {\n    color: #e9d8fd\n  }\n\n  .md\\:placeholder-purple-300:-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .md\\:placeholder-purple-300::-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .md\\:placeholder-purple-300::placeholder {\n    color: #d6bcfa\n  }\n\n  .md\\:placeholder-purple-400:-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .md\\:placeholder-purple-400::-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .md\\:placeholder-purple-400::placeholder {\n    color: #b794f4\n  }\n\n  .md\\:placeholder-purple-500:-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .md\\:placeholder-purple-500::-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .md\\:placeholder-purple-500::placeholder {\n    color: #9f7aea\n  }\n\n  .md\\:placeholder-purple-600:-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .md\\:placeholder-purple-600::-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .md\\:placeholder-purple-600::placeholder {\n    color: #805ad5\n  }\n\n  .md\\:placeholder-purple-700:-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .md\\:placeholder-purple-700::-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .md\\:placeholder-purple-700::placeholder {\n    color: #6b46c1\n  }\n\n  .md\\:placeholder-purple-800:-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .md\\:placeholder-purple-800::-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .md\\:placeholder-purple-800::placeholder {\n    color: #553c9a\n  }\n\n  .md\\:placeholder-purple-900:-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .md\\:placeholder-purple-900::-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .md\\:placeholder-purple-900::placeholder {\n    color: #44337a\n  }\n\n  .md\\:placeholder-pink-100:-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .md\\:placeholder-pink-100::-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .md\\:placeholder-pink-100::placeholder {\n    color: #fff5f7\n  }\n\n  .md\\:placeholder-pink-200:-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .md\\:placeholder-pink-200::-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .md\\:placeholder-pink-200::placeholder {\n    color: #fed7e2\n  }\n\n  .md\\:placeholder-pink-300:-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .md\\:placeholder-pink-300::-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .md\\:placeholder-pink-300::placeholder {\n    color: #fbb6ce\n  }\n\n  .md\\:placeholder-pink-400:-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .md\\:placeholder-pink-400::-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .md\\:placeholder-pink-400::placeholder {\n    color: #f687b3\n  }\n\n  .md\\:placeholder-pink-500:-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .md\\:placeholder-pink-500::-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .md\\:placeholder-pink-500::placeholder {\n    color: #ed64a6\n  }\n\n  .md\\:placeholder-pink-600:-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .md\\:placeholder-pink-600::-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .md\\:placeholder-pink-600::placeholder {\n    color: #d53f8c\n  }\n\n  .md\\:placeholder-pink-700:-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .md\\:placeholder-pink-700::-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .md\\:placeholder-pink-700::placeholder {\n    color: #b83280\n  }\n\n  .md\\:placeholder-pink-800:-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .md\\:placeholder-pink-800::-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .md\\:placeholder-pink-800::placeholder {\n    color: #97266d\n  }\n\n  .md\\:placeholder-pink-900:-ms-input-placeholder {\n    color: #702459\n  }\n\n  .md\\:placeholder-pink-900::-ms-input-placeholder {\n    color: #702459\n  }\n\n  .md\\:placeholder-pink-900::placeholder {\n    color: #702459\n  }\n\n  .md\\:focus\\:placeholder-transparent:focus:-ms-input-placeholder {\n    color: transparent\n  }\n\n  .md\\:focus\\:placeholder-transparent:focus::-ms-input-placeholder {\n    color: transparent\n  }\n\n  .md\\:focus\\:placeholder-transparent:focus::placeholder {\n    color: transparent\n  }\n\n  .md\\:focus\\:placeholder-black:focus:-ms-input-placeholder {\n    color: #000\n  }\n\n  .md\\:focus\\:placeholder-black:focus::-ms-input-placeholder {\n    color: #000\n  }\n\n  .md\\:focus\\:placeholder-black:focus::placeholder {\n    color: #000\n  }\n\n  .md\\:focus\\:placeholder-white:focus:-ms-input-placeholder {\n    color: #fff\n  }\n\n  .md\\:focus\\:placeholder-white:focus::-ms-input-placeholder {\n    color: #fff\n  }\n\n  .md\\:focus\\:placeholder-white:focus::placeholder {\n    color: #fff\n  }\n\n  .md\\:focus\\:placeholder-gray-100:focus:-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .md\\:focus\\:placeholder-gray-100:focus::-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .md\\:focus\\:placeholder-gray-100:focus::placeholder {\n    color: #f7fafc\n  }\n\n  .md\\:focus\\:placeholder-gray-200:focus:-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .md\\:focus\\:placeholder-gray-200:focus::-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .md\\:focus\\:placeholder-gray-200:focus::placeholder {\n    color: #edf2f7\n  }\n\n  .md\\:focus\\:placeholder-gray-300:focus:-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .md\\:focus\\:placeholder-gray-300:focus::-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .md\\:focus\\:placeholder-gray-300:focus::placeholder {\n    color: #e2e8f0\n  }\n\n  .md\\:focus\\:placeholder-gray-400:focus:-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .md\\:focus\\:placeholder-gray-400:focus::-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .md\\:focus\\:placeholder-gray-400:focus::placeholder {\n    color: #cbd5e0\n  }\n\n  .md\\:focus\\:placeholder-gray-500:focus:-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .md\\:focus\\:placeholder-gray-500:focus::-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .md\\:focus\\:placeholder-gray-500:focus::placeholder {\n    color: #a0aec0\n  }\n\n  .md\\:focus\\:placeholder-gray-600:focus:-ms-input-placeholder {\n    color: #718096\n  }\n\n  .md\\:focus\\:placeholder-gray-600:focus::-ms-input-placeholder {\n    color: #718096\n  }\n\n  .md\\:focus\\:placeholder-gray-600:focus::placeholder {\n    color: #718096\n  }\n\n  .md\\:focus\\:placeholder-gray-700:focus:-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .md\\:focus\\:placeholder-gray-700:focus::-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .md\\:focus\\:placeholder-gray-700:focus::placeholder {\n    color: #4a5568\n  }\n\n  .md\\:focus\\:placeholder-gray-800:focus:-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .md\\:focus\\:placeholder-gray-800:focus::-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .md\\:focus\\:placeholder-gray-800:focus::placeholder {\n    color: #2d3748\n  }\n\n  .md\\:focus\\:placeholder-gray-900:focus:-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .md\\:focus\\:placeholder-gray-900:focus::-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .md\\:focus\\:placeholder-gray-900:focus::placeholder {\n    color: #1a202c\n  }\n\n  .md\\:focus\\:placeholder-red-100:focus:-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .md\\:focus\\:placeholder-red-100:focus::-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .md\\:focus\\:placeholder-red-100:focus::placeholder {\n    color: #fff5f5\n  }\n\n  .md\\:focus\\:placeholder-red-200:focus:-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .md\\:focus\\:placeholder-red-200:focus::-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .md\\:focus\\:placeholder-red-200:focus::placeholder {\n    color: #fed7d7\n  }\n\n  .md\\:focus\\:placeholder-red-300:focus:-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .md\\:focus\\:placeholder-red-300:focus::-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .md\\:focus\\:placeholder-red-300:focus::placeholder {\n    color: #feb2b2\n  }\n\n  .md\\:focus\\:placeholder-red-400:focus:-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .md\\:focus\\:placeholder-red-400:focus::-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .md\\:focus\\:placeholder-red-400:focus::placeholder {\n    color: #fc8181\n  }\n\n  .md\\:focus\\:placeholder-red-500:focus:-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .md\\:focus\\:placeholder-red-500:focus::-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .md\\:focus\\:placeholder-red-500:focus::placeholder {\n    color: #f56565\n  }\n\n  .md\\:focus\\:placeholder-red-600:focus:-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .md\\:focus\\:placeholder-red-600:focus::-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .md\\:focus\\:placeholder-red-600:focus::placeholder {\n    color: #e53e3e\n  }\n\n  .md\\:focus\\:placeholder-red-700:focus:-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .md\\:focus\\:placeholder-red-700:focus::-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .md\\:focus\\:placeholder-red-700:focus::placeholder {\n    color: #c53030\n  }\n\n  .md\\:focus\\:placeholder-red-800:focus:-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .md\\:focus\\:placeholder-red-800:focus::-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .md\\:focus\\:placeholder-red-800:focus::placeholder {\n    color: #9b2c2c\n  }\n\n  .md\\:focus\\:placeholder-red-900:focus:-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .md\\:focus\\:placeholder-red-900:focus::-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .md\\:focus\\:placeholder-red-900:focus::placeholder {\n    color: #742a2a\n  }\n\n  .md\\:focus\\:placeholder-orange-100:focus:-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .md\\:focus\\:placeholder-orange-100:focus::-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .md\\:focus\\:placeholder-orange-100:focus::placeholder {\n    color: #fffaf0\n  }\n\n  .md\\:focus\\:placeholder-orange-200:focus:-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .md\\:focus\\:placeholder-orange-200:focus::-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .md\\:focus\\:placeholder-orange-200:focus::placeholder {\n    color: #feebc8\n  }\n\n  .md\\:focus\\:placeholder-orange-300:focus:-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .md\\:focus\\:placeholder-orange-300:focus::-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .md\\:focus\\:placeholder-orange-300:focus::placeholder {\n    color: #fbd38d\n  }\n\n  .md\\:focus\\:placeholder-orange-400:focus:-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .md\\:focus\\:placeholder-orange-400:focus::-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .md\\:focus\\:placeholder-orange-400:focus::placeholder {\n    color: #f6ad55\n  }\n\n  .md\\:focus\\:placeholder-orange-500:focus:-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .md\\:focus\\:placeholder-orange-500:focus::-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .md\\:focus\\:placeholder-orange-500:focus::placeholder {\n    color: #ed8936\n  }\n\n  .md\\:focus\\:placeholder-orange-600:focus:-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .md\\:focus\\:placeholder-orange-600:focus::-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .md\\:focus\\:placeholder-orange-600:focus::placeholder {\n    color: #dd6b20\n  }\n\n  .md\\:focus\\:placeholder-orange-700:focus:-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .md\\:focus\\:placeholder-orange-700:focus::-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .md\\:focus\\:placeholder-orange-700:focus::placeholder {\n    color: #c05621\n  }\n\n  .md\\:focus\\:placeholder-orange-800:focus:-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .md\\:focus\\:placeholder-orange-800:focus::-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .md\\:focus\\:placeholder-orange-800:focus::placeholder {\n    color: #9c4221\n  }\n\n  .md\\:focus\\:placeholder-orange-900:focus:-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .md\\:focus\\:placeholder-orange-900:focus::-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .md\\:focus\\:placeholder-orange-900:focus::placeholder {\n    color: #7b341e\n  }\n\n  .md\\:focus\\:placeholder-yellow-100:focus:-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .md\\:focus\\:placeholder-yellow-100:focus::-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .md\\:focus\\:placeholder-yellow-100:focus::placeholder {\n    color: #fffff0\n  }\n\n  .md\\:focus\\:placeholder-yellow-200:focus:-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .md\\:focus\\:placeholder-yellow-200:focus::-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .md\\:focus\\:placeholder-yellow-200:focus::placeholder {\n    color: #fefcbf\n  }\n\n  .md\\:focus\\:placeholder-yellow-300:focus:-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .md\\:focus\\:placeholder-yellow-300:focus::-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .md\\:focus\\:placeholder-yellow-300:focus::placeholder {\n    color: #faf089\n  }\n\n  .md\\:focus\\:placeholder-yellow-400:focus:-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .md\\:focus\\:placeholder-yellow-400:focus::-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .md\\:focus\\:placeholder-yellow-400:focus::placeholder {\n    color: #f6e05e\n  }\n\n  .md\\:focus\\:placeholder-yellow-500:focus:-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .md\\:focus\\:placeholder-yellow-500:focus::-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .md\\:focus\\:placeholder-yellow-500:focus::placeholder {\n    color: #ecc94b\n  }\n\n  .md\\:focus\\:placeholder-yellow-600:focus:-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .md\\:focus\\:placeholder-yellow-600:focus::-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .md\\:focus\\:placeholder-yellow-600:focus::placeholder {\n    color: #d69e2e\n  }\n\n  .md\\:focus\\:placeholder-yellow-700:focus:-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .md\\:focus\\:placeholder-yellow-700:focus::-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .md\\:focus\\:placeholder-yellow-700:focus::placeholder {\n    color: #b7791f\n  }\n\n  .md\\:focus\\:placeholder-yellow-800:focus:-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .md\\:focus\\:placeholder-yellow-800:focus::-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .md\\:focus\\:placeholder-yellow-800:focus::placeholder {\n    color: #975a16\n  }\n\n  .md\\:focus\\:placeholder-yellow-900:focus:-ms-input-placeholder {\n    color: #744210\n  }\n\n  .md\\:focus\\:placeholder-yellow-900:focus::-ms-input-placeholder {\n    color: #744210\n  }\n\n  .md\\:focus\\:placeholder-yellow-900:focus::placeholder {\n    color: #744210\n  }\n\n  .md\\:focus\\:placeholder-green-100:focus:-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .md\\:focus\\:placeholder-green-100:focus::-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .md\\:focus\\:placeholder-green-100:focus::placeholder {\n    color: #f0fff4\n  }\n\n  .md\\:focus\\:placeholder-green-200:focus:-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .md\\:focus\\:placeholder-green-200:focus::-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .md\\:focus\\:placeholder-green-200:focus::placeholder {\n    color: #c6f6d5\n  }\n\n  .md\\:focus\\:placeholder-green-300:focus:-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .md\\:focus\\:placeholder-green-300:focus::-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .md\\:focus\\:placeholder-green-300:focus::placeholder {\n    color: #9ae6b4\n  }\n\n  .md\\:focus\\:placeholder-green-400:focus:-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .md\\:focus\\:placeholder-green-400:focus::-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .md\\:focus\\:placeholder-green-400:focus::placeholder {\n    color: #68d391\n  }\n\n  .md\\:focus\\:placeholder-green-500:focus:-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .md\\:focus\\:placeholder-green-500:focus::-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .md\\:focus\\:placeholder-green-500:focus::placeholder {\n    color: #48bb78\n  }\n\n  .md\\:focus\\:placeholder-green-600:focus:-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .md\\:focus\\:placeholder-green-600:focus::-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .md\\:focus\\:placeholder-green-600:focus::placeholder {\n    color: #38a169\n  }\n\n  .md\\:focus\\:placeholder-green-700:focus:-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .md\\:focus\\:placeholder-green-700:focus::-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .md\\:focus\\:placeholder-green-700:focus::placeholder {\n    color: #2f855a\n  }\n\n  .md\\:focus\\:placeholder-green-800:focus:-ms-input-placeholder {\n    color: #276749\n  }\n\n  .md\\:focus\\:placeholder-green-800:focus::-ms-input-placeholder {\n    color: #276749\n  }\n\n  .md\\:focus\\:placeholder-green-800:focus::placeholder {\n    color: #276749\n  }\n\n  .md\\:focus\\:placeholder-green-900:focus:-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .md\\:focus\\:placeholder-green-900:focus::-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .md\\:focus\\:placeholder-green-900:focus::placeholder {\n    color: #22543d\n  }\n\n  .md\\:focus\\:placeholder-teal-100:focus:-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .md\\:focus\\:placeholder-teal-100:focus::-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .md\\:focus\\:placeholder-teal-100:focus::placeholder {\n    color: #e6fffa\n  }\n\n  .md\\:focus\\:placeholder-teal-200:focus:-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .md\\:focus\\:placeholder-teal-200:focus::-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .md\\:focus\\:placeholder-teal-200:focus::placeholder {\n    color: #b2f5ea\n  }\n\n  .md\\:focus\\:placeholder-teal-300:focus:-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .md\\:focus\\:placeholder-teal-300:focus::-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .md\\:focus\\:placeholder-teal-300:focus::placeholder {\n    color: #81e6d9\n  }\n\n  .md\\:focus\\:placeholder-teal-400:focus:-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .md\\:focus\\:placeholder-teal-400:focus::-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .md\\:focus\\:placeholder-teal-400:focus::placeholder {\n    color: #4fd1c5\n  }\n\n  .md\\:focus\\:placeholder-teal-500:focus:-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .md\\:focus\\:placeholder-teal-500:focus::-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .md\\:focus\\:placeholder-teal-500:focus::placeholder {\n    color: #38b2ac\n  }\n\n  .md\\:focus\\:placeholder-teal-600:focus:-ms-input-placeholder {\n    color: #319795\n  }\n\n  .md\\:focus\\:placeholder-teal-600:focus::-ms-input-placeholder {\n    color: #319795\n  }\n\n  .md\\:focus\\:placeholder-teal-600:focus::placeholder {\n    color: #319795\n  }\n\n  .md\\:focus\\:placeholder-teal-700:focus:-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .md\\:focus\\:placeholder-teal-700:focus::-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .md\\:focus\\:placeholder-teal-700:focus::placeholder {\n    color: #2c7a7b\n  }\n\n  .md\\:focus\\:placeholder-teal-800:focus:-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .md\\:focus\\:placeholder-teal-800:focus::-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .md\\:focus\\:placeholder-teal-800:focus::placeholder {\n    color: #285e61\n  }\n\n  .md\\:focus\\:placeholder-teal-900:focus:-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .md\\:focus\\:placeholder-teal-900:focus::-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .md\\:focus\\:placeholder-teal-900:focus::placeholder {\n    color: #234e52\n  }\n\n  .md\\:focus\\:placeholder-blue-100:focus:-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .md\\:focus\\:placeholder-blue-100:focus::-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .md\\:focus\\:placeholder-blue-100:focus::placeholder {\n    color: #ebf8ff\n  }\n\n  .md\\:focus\\:placeholder-blue-200:focus:-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .md\\:focus\\:placeholder-blue-200:focus::-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .md\\:focus\\:placeholder-blue-200:focus::placeholder {\n    color: #bee3f8\n  }\n\n  .md\\:focus\\:placeholder-blue-300:focus:-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .md\\:focus\\:placeholder-blue-300:focus::-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .md\\:focus\\:placeholder-blue-300:focus::placeholder {\n    color: #90cdf4\n  }\n\n  .md\\:focus\\:placeholder-blue-400:focus:-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .md\\:focus\\:placeholder-blue-400:focus::-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .md\\:focus\\:placeholder-blue-400:focus::placeholder {\n    color: #63b3ed\n  }\n\n  .md\\:focus\\:placeholder-blue-500:focus:-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .md\\:focus\\:placeholder-blue-500:focus::-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .md\\:focus\\:placeholder-blue-500:focus::placeholder {\n    color: #4299e1\n  }\n\n  .md\\:focus\\:placeholder-blue-600:focus:-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .md\\:focus\\:placeholder-blue-600:focus::-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .md\\:focus\\:placeholder-blue-600:focus::placeholder {\n    color: #3182ce\n  }\n\n  .md\\:focus\\:placeholder-blue-700:focus:-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .md\\:focus\\:placeholder-blue-700:focus::-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .md\\:focus\\:placeholder-blue-700:focus::placeholder {\n    color: #2b6cb0\n  }\n\n  .md\\:focus\\:placeholder-blue-800:focus:-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .md\\:focus\\:placeholder-blue-800:focus::-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .md\\:focus\\:placeholder-blue-800:focus::placeholder {\n    color: #2c5282\n  }\n\n  .md\\:focus\\:placeholder-blue-900:focus:-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .md\\:focus\\:placeholder-blue-900:focus::-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .md\\:focus\\:placeholder-blue-900:focus::placeholder {\n    color: #2a4365\n  }\n\n  .md\\:focus\\:placeholder-indigo-100:focus:-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .md\\:focus\\:placeholder-indigo-100:focus::-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .md\\:focus\\:placeholder-indigo-100:focus::placeholder {\n    color: #ebf4ff\n  }\n\n  .md\\:focus\\:placeholder-indigo-200:focus:-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .md\\:focus\\:placeholder-indigo-200:focus::-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .md\\:focus\\:placeholder-indigo-200:focus::placeholder {\n    color: #c3dafe\n  }\n\n  .md\\:focus\\:placeholder-indigo-300:focus:-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .md\\:focus\\:placeholder-indigo-300:focus::-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .md\\:focus\\:placeholder-indigo-300:focus::placeholder {\n    color: #a3bffa\n  }\n\n  .md\\:focus\\:placeholder-indigo-400:focus:-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .md\\:focus\\:placeholder-indigo-400:focus::-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .md\\:focus\\:placeholder-indigo-400:focus::placeholder {\n    color: #7f9cf5\n  }\n\n  .md\\:focus\\:placeholder-indigo-500:focus:-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .md\\:focus\\:placeholder-indigo-500:focus::-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .md\\:focus\\:placeholder-indigo-500:focus::placeholder {\n    color: #667eea\n  }\n\n  .md\\:focus\\:placeholder-indigo-600:focus:-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .md\\:focus\\:placeholder-indigo-600:focus::-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .md\\:focus\\:placeholder-indigo-600:focus::placeholder {\n    color: #5a67d8\n  }\n\n  .md\\:focus\\:placeholder-indigo-700:focus:-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .md\\:focus\\:placeholder-indigo-700:focus::-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .md\\:focus\\:placeholder-indigo-700:focus::placeholder {\n    color: #4c51bf\n  }\n\n  .md\\:focus\\:placeholder-indigo-800:focus:-ms-input-placeholder {\n    color: #434190\n  }\n\n  .md\\:focus\\:placeholder-indigo-800:focus::-ms-input-placeholder {\n    color: #434190\n  }\n\n  .md\\:focus\\:placeholder-indigo-800:focus::placeholder {\n    color: #434190\n  }\n\n  .md\\:focus\\:placeholder-indigo-900:focus:-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .md\\:focus\\:placeholder-indigo-900:focus::-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .md\\:focus\\:placeholder-indigo-900:focus::placeholder {\n    color: #3c366b\n  }\n\n  .md\\:focus\\:placeholder-purple-100:focus:-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .md\\:focus\\:placeholder-purple-100:focus::-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .md\\:focus\\:placeholder-purple-100:focus::placeholder {\n    color: #faf5ff\n  }\n\n  .md\\:focus\\:placeholder-purple-200:focus:-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .md\\:focus\\:placeholder-purple-200:focus::-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .md\\:focus\\:placeholder-purple-200:focus::placeholder {\n    color: #e9d8fd\n  }\n\n  .md\\:focus\\:placeholder-purple-300:focus:-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .md\\:focus\\:placeholder-purple-300:focus::-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .md\\:focus\\:placeholder-purple-300:focus::placeholder {\n    color: #d6bcfa\n  }\n\n  .md\\:focus\\:placeholder-purple-400:focus:-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .md\\:focus\\:placeholder-purple-400:focus::-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .md\\:focus\\:placeholder-purple-400:focus::placeholder {\n    color: #b794f4\n  }\n\n  .md\\:focus\\:placeholder-purple-500:focus:-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .md\\:focus\\:placeholder-purple-500:focus::-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .md\\:focus\\:placeholder-purple-500:focus::placeholder {\n    color: #9f7aea\n  }\n\n  .md\\:focus\\:placeholder-purple-600:focus:-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .md\\:focus\\:placeholder-purple-600:focus::-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .md\\:focus\\:placeholder-purple-600:focus::placeholder {\n    color: #805ad5\n  }\n\n  .md\\:focus\\:placeholder-purple-700:focus:-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .md\\:focus\\:placeholder-purple-700:focus::-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .md\\:focus\\:placeholder-purple-700:focus::placeholder {\n    color: #6b46c1\n  }\n\n  .md\\:focus\\:placeholder-purple-800:focus:-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .md\\:focus\\:placeholder-purple-800:focus::-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .md\\:focus\\:placeholder-purple-800:focus::placeholder {\n    color: #553c9a\n  }\n\n  .md\\:focus\\:placeholder-purple-900:focus:-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .md\\:focus\\:placeholder-purple-900:focus::-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .md\\:focus\\:placeholder-purple-900:focus::placeholder {\n    color: #44337a\n  }\n\n  .md\\:focus\\:placeholder-pink-100:focus:-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .md\\:focus\\:placeholder-pink-100:focus::-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .md\\:focus\\:placeholder-pink-100:focus::placeholder {\n    color: #fff5f7\n  }\n\n  .md\\:focus\\:placeholder-pink-200:focus:-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .md\\:focus\\:placeholder-pink-200:focus::-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .md\\:focus\\:placeholder-pink-200:focus::placeholder {\n    color: #fed7e2\n  }\n\n  .md\\:focus\\:placeholder-pink-300:focus:-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .md\\:focus\\:placeholder-pink-300:focus::-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .md\\:focus\\:placeholder-pink-300:focus::placeholder {\n    color: #fbb6ce\n  }\n\n  .md\\:focus\\:placeholder-pink-400:focus:-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .md\\:focus\\:placeholder-pink-400:focus::-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .md\\:focus\\:placeholder-pink-400:focus::placeholder {\n    color: #f687b3\n  }\n\n  .md\\:focus\\:placeholder-pink-500:focus:-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .md\\:focus\\:placeholder-pink-500:focus::-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .md\\:focus\\:placeholder-pink-500:focus::placeholder {\n    color: #ed64a6\n  }\n\n  .md\\:focus\\:placeholder-pink-600:focus:-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .md\\:focus\\:placeholder-pink-600:focus::-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .md\\:focus\\:placeholder-pink-600:focus::placeholder {\n    color: #d53f8c\n  }\n\n  .md\\:focus\\:placeholder-pink-700:focus:-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .md\\:focus\\:placeholder-pink-700:focus::-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .md\\:focus\\:placeholder-pink-700:focus::placeholder {\n    color: #b83280\n  }\n\n  .md\\:focus\\:placeholder-pink-800:focus:-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .md\\:focus\\:placeholder-pink-800:focus::-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .md\\:focus\\:placeholder-pink-800:focus::placeholder {\n    color: #97266d\n  }\n\n  .md\\:focus\\:placeholder-pink-900:focus:-ms-input-placeholder {\n    color: #702459\n  }\n\n  .md\\:focus\\:placeholder-pink-900:focus::-ms-input-placeholder {\n    color: #702459\n  }\n\n  .md\\:focus\\:placeholder-pink-900:focus::placeholder {\n    color: #702459\n  }\n\n  .md\\:pointer-events-none {\n    pointer-events: none\n  }\n\n  .md\\:pointer-events-auto {\n    pointer-events: auto\n  }\n\n  .md\\:static {\n    position: static\n  }\n\n  .md\\:fixed {\n    position: fixed\n  }\n\n  .md\\:absolute {\n    position: absolute\n  }\n\n  .md\\:relative {\n    position: relative\n  }\n\n  .md\\:sticky {\n    position: -webkit-sticky;\n    position: sticky\n  }\n\n  .md\\:inset-0 {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0\n  }\n\n  .md\\:inset-auto {\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto\n  }\n\n  .md\\:inset-y-0 {\n    top: 0;\n    bottom: 0\n  }\n\n  .md\\:inset-x-0 {\n    right: 0;\n    left: 0\n  }\n\n  .md\\:inset-y-auto {\n    top: auto;\n    bottom: auto\n  }\n\n  .md\\:inset-x-auto {\n    right: auto;\n    left: auto\n  }\n\n  .md\\:top-0 {\n    top: 0\n  }\n\n  .md\\:right-0 {\n    right: 0\n  }\n\n  .md\\:bottom-0 {\n    bottom: 0\n  }\n\n  .md\\:left-0 {\n    left: 0\n  }\n\n  .md\\:top-auto {\n    top: auto\n  }\n\n  .md\\:right-auto {\n    right: auto\n  }\n\n  .md\\:bottom-auto {\n    bottom: auto\n  }\n\n  .md\\:left-auto {\n    left: auto\n  }\n\n  .md\\:resize-none {\n    resize: none\n  }\n\n  .md\\:resize-y {\n    resize: vertical\n  }\n\n  .md\\:resize-x {\n    resize: horizontal\n  }\n\n  .md\\:resize {\n    resize: both\n  }\n\n  .md\\:shadow {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .md\\:shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .md\\:shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .md\\:shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .md\\:shadow-2xl {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .md\\:shadow-inner {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .md\\:shadow-outline {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .md\\:shadow-none {\n    box-shadow: none\n  }\n\n  .md\\:hover\\:shadow:hover {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .md\\:hover\\:shadow-md:hover {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .md\\:hover\\:shadow-lg:hover {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .md\\:hover\\:shadow-xl:hover {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .md\\:hover\\:shadow-2xl:hover {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .md\\:hover\\:shadow-inner:hover {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .md\\:hover\\:shadow-outline:hover {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .md\\:hover\\:shadow-none:hover {\n    box-shadow: none\n  }\n\n  .md\\:focus\\:shadow:focus {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .md\\:focus\\:shadow-md:focus {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .md\\:focus\\:shadow-lg:focus {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .md\\:focus\\:shadow-xl:focus {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .md\\:focus\\:shadow-2xl:focus {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .md\\:focus\\:shadow-inner:focus {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .md\\:focus\\:shadow-outline:focus {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .md\\:focus\\:shadow-none:focus {\n    box-shadow: none\n  }\n\n  .md\\:fill-current {\n    fill: currentColor\n  }\n\n  .md\\:stroke-current {\n    stroke: currentColor\n  }\n\n  .md\\:table-auto {\n    table-layout: auto\n  }\n\n  .md\\:table-fixed {\n    table-layout: fixed\n  }\n\n  .md\\:text-left {\n    text-align: left\n  }\n\n  .md\\:text-center {\n    text-align: center\n  }\n\n  .md\\:text-right {\n    text-align: right\n  }\n\n  .md\\:text-justify {\n    text-align: justify\n  }\n\n  .md\\:text-transparent {\n    color: transparent\n  }\n\n  .md\\:text-black {\n    color: #000\n  }\n\n  .md\\:text-white {\n    color: #fff\n  }\n\n  .md\\:text-gray-100 {\n    color: #f7fafc\n  }\n\n  .md\\:text-gray-200 {\n    color: #edf2f7\n  }\n\n  .md\\:text-gray-300 {\n    color: #e2e8f0\n  }\n\n  .md\\:text-gray-400 {\n    color: #cbd5e0\n  }\n\n  .md\\:text-gray-500 {\n    color: #a0aec0\n  }\n\n  .md\\:text-gray-600 {\n    color: #718096\n  }\n\n  .md\\:text-gray-700 {\n    color: #4a5568\n  }\n\n  .md\\:text-gray-800 {\n    color: #2d3748\n  }\n\n  .md\\:text-gray-900 {\n    color: #1a202c\n  }\n\n  .md\\:text-red-100 {\n    color: #fff5f5\n  }\n\n  .md\\:text-red-200 {\n    color: #fed7d7\n  }\n\n  .md\\:text-red-300 {\n    color: #feb2b2\n  }\n\n  .md\\:text-red-400 {\n    color: #fc8181\n  }\n\n  .md\\:text-red-500 {\n    color: #f56565\n  }\n\n  .md\\:text-red-600 {\n    color: #e53e3e\n  }\n\n  .md\\:text-red-700 {\n    color: #c53030\n  }\n\n  .md\\:text-red-800 {\n    color: #9b2c2c\n  }\n\n  .md\\:text-red-900 {\n    color: #742a2a\n  }\n\n  .md\\:text-orange-100 {\n    color: #fffaf0\n  }\n\n  .md\\:text-orange-200 {\n    color: #feebc8\n  }\n\n  .md\\:text-orange-300 {\n    color: #fbd38d\n  }\n\n  .md\\:text-orange-400 {\n    color: #f6ad55\n  }\n\n  .md\\:text-orange-500 {\n    color: #ed8936\n  }\n\n  .md\\:text-orange-600 {\n    color: #dd6b20\n  }\n\n  .md\\:text-orange-700 {\n    color: #c05621\n  }\n\n  .md\\:text-orange-800 {\n    color: #9c4221\n  }\n\n  .md\\:text-orange-900 {\n    color: #7b341e\n  }\n\n  .md\\:text-yellow-100 {\n    color: #fffff0\n  }\n\n  .md\\:text-yellow-200 {\n    color: #fefcbf\n  }\n\n  .md\\:text-yellow-300 {\n    color: #faf089\n  }\n\n  .md\\:text-yellow-400 {\n    color: #f6e05e\n  }\n\n  .md\\:text-yellow-500 {\n    color: #ecc94b\n  }\n\n  .md\\:text-yellow-600 {\n    color: #d69e2e\n  }\n\n  .md\\:text-yellow-700 {\n    color: #b7791f\n  }\n\n  .md\\:text-yellow-800 {\n    color: #975a16\n  }\n\n  .md\\:text-yellow-900 {\n    color: #744210\n  }\n\n  .md\\:text-green-100 {\n    color: #f0fff4\n  }\n\n  .md\\:text-green-200 {\n    color: #c6f6d5\n  }\n\n  .md\\:text-green-300 {\n    color: #9ae6b4\n  }\n\n  .md\\:text-green-400 {\n    color: #68d391\n  }\n\n  .md\\:text-green-500 {\n    color: #48bb78\n  }\n\n  .md\\:text-green-600 {\n    color: #38a169\n  }\n\n  .md\\:text-green-700 {\n    color: #2f855a\n  }\n\n  .md\\:text-green-800 {\n    color: #276749\n  }\n\n  .md\\:text-green-900 {\n    color: #22543d\n  }\n\n  .md\\:text-teal-100 {\n    color: #e6fffa\n  }\n\n  .md\\:text-teal-200 {\n    color: #b2f5ea\n  }\n\n  .md\\:text-teal-300 {\n    color: #81e6d9\n  }\n\n  .md\\:text-teal-400 {\n    color: #4fd1c5\n  }\n\n  .md\\:text-teal-500 {\n    color: #38b2ac\n  }\n\n  .md\\:text-teal-600 {\n    color: #319795\n  }\n\n  .md\\:text-teal-700 {\n    color: #2c7a7b\n  }\n\n  .md\\:text-teal-800 {\n    color: #285e61\n  }\n\n  .md\\:text-teal-900 {\n    color: #234e52\n  }\n\n  .md\\:text-blue-100 {\n    color: #ebf8ff\n  }\n\n  .md\\:text-blue-200 {\n    color: #bee3f8\n  }\n\n  .md\\:text-blue-300 {\n    color: #90cdf4\n  }\n\n  .md\\:text-blue-400 {\n    color: #63b3ed\n  }\n\n  .md\\:text-blue-500 {\n    color: #4299e1\n  }\n\n  .md\\:text-blue-600 {\n    color: #3182ce\n  }\n\n  .md\\:text-blue-700 {\n    color: #2b6cb0\n  }\n\n  .md\\:text-blue-800 {\n    color: #2c5282\n  }\n\n  .md\\:text-blue-900 {\n    color: #2a4365\n  }\n\n  .md\\:text-indigo-100 {\n    color: #ebf4ff\n  }\n\n  .md\\:text-indigo-200 {\n    color: #c3dafe\n  }\n\n  .md\\:text-indigo-300 {\n    color: #a3bffa\n  }\n\n  .md\\:text-indigo-400 {\n    color: #7f9cf5\n  }\n\n  .md\\:text-indigo-500 {\n    color: #667eea\n  }\n\n  .md\\:text-indigo-600 {\n    color: #5a67d8\n  }\n\n  .md\\:text-indigo-700 {\n    color: #4c51bf\n  }\n\n  .md\\:text-indigo-800 {\n    color: #434190\n  }\n\n  .md\\:text-indigo-900 {\n    color: #3c366b\n  }\n\n  .md\\:text-purple-100 {\n    color: #faf5ff\n  }\n\n  .md\\:text-purple-200 {\n    color: #e9d8fd\n  }\n\n  .md\\:text-purple-300 {\n    color: #d6bcfa\n  }\n\n  .md\\:text-purple-400 {\n    color: #b794f4\n  }\n\n  .md\\:text-purple-500 {\n    color: #9f7aea\n  }\n\n  .md\\:text-purple-600 {\n    color: #805ad5\n  }\n\n  .md\\:text-purple-700 {\n    color: #6b46c1\n  }\n\n  .md\\:text-purple-800 {\n    color: #553c9a\n  }\n\n  .md\\:text-purple-900 {\n    color: #44337a\n  }\n\n  .md\\:text-pink-100 {\n    color: #fff5f7\n  }\n\n  .md\\:text-pink-200 {\n    color: #fed7e2\n  }\n\n  .md\\:text-pink-300 {\n    color: #fbb6ce\n  }\n\n  .md\\:text-pink-400 {\n    color: #f687b3\n  }\n\n  .md\\:text-pink-500 {\n    color: #ed64a6\n  }\n\n  .md\\:text-pink-600 {\n    color: #d53f8c\n  }\n\n  .md\\:text-pink-700 {\n    color: #b83280\n  }\n\n  .md\\:text-pink-800 {\n    color: #97266d\n  }\n\n  .md\\:text-pink-900 {\n    color: #702459\n  }\n\n  .md\\:hover\\:text-transparent:hover {\n    color: transparent\n  }\n\n  .md\\:hover\\:text-black:hover {\n    color: #000\n  }\n\n  .md\\:hover\\:text-white:hover {\n    color: #fff\n  }\n\n  .md\\:hover\\:text-gray-100:hover {\n    color: #f7fafc\n  }\n\n  .md\\:hover\\:text-gray-200:hover {\n    color: #edf2f7\n  }\n\n  .md\\:hover\\:text-gray-300:hover {\n    color: #e2e8f0\n  }\n\n  .md\\:hover\\:text-gray-400:hover {\n    color: #cbd5e0\n  }\n\n  .md\\:hover\\:text-gray-500:hover {\n    color: #a0aec0\n  }\n\n  .md\\:hover\\:text-gray-600:hover {\n    color: #718096\n  }\n\n  .md\\:hover\\:text-gray-700:hover {\n    color: #4a5568\n  }\n\n  .md\\:hover\\:text-gray-800:hover {\n    color: #2d3748\n  }\n\n  .md\\:hover\\:text-gray-900:hover {\n    color: #1a202c\n  }\n\n  .md\\:hover\\:text-red-100:hover {\n    color: #fff5f5\n  }\n\n  .md\\:hover\\:text-red-200:hover {\n    color: #fed7d7\n  }\n\n  .md\\:hover\\:text-red-300:hover {\n    color: #feb2b2\n  }\n\n  .md\\:hover\\:text-red-400:hover {\n    color: #fc8181\n  }\n\n  .md\\:hover\\:text-red-500:hover {\n    color: #f56565\n  }\n\n  .md\\:hover\\:text-red-600:hover {\n    color: #e53e3e\n  }\n\n  .md\\:hover\\:text-red-700:hover {\n    color: #c53030\n  }\n\n  .md\\:hover\\:text-red-800:hover {\n    color: #9b2c2c\n  }\n\n  .md\\:hover\\:text-red-900:hover {\n    color: #742a2a\n  }\n\n  .md\\:hover\\:text-orange-100:hover {\n    color: #fffaf0\n  }\n\n  .md\\:hover\\:text-orange-200:hover {\n    color: #feebc8\n  }\n\n  .md\\:hover\\:text-orange-300:hover {\n    color: #fbd38d\n  }\n\n  .md\\:hover\\:text-orange-400:hover {\n    color: #f6ad55\n  }\n\n  .md\\:hover\\:text-orange-500:hover {\n    color: #ed8936\n  }\n\n  .md\\:hover\\:text-orange-600:hover {\n    color: #dd6b20\n  }\n\n  .md\\:hover\\:text-orange-700:hover {\n    color: #c05621\n  }\n\n  .md\\:hover\\:text-orange-800:hover {\n    color: #9c4221\n  }\n\n  .md\\:hover\\:text-orange-900:hover {\n    color: #7b341e\n  }\n\n  .md\\:hover\\:text-yellow-100:hover {\n    color: #fffff0\n  }\n\n  .md\\:hover\\:text-yellow-200:hover {\n    color: #fefcbf\n  }\n\n  .md\\:hover\\:text-yellow-300:hover {\n    color: #faf089\n  }\n\n  .md\\:hover\\:text-yellow-400:hover {\n    color: #f6e05e\n  }\n\n  .md\\:hover\\:text-yellow-500:hover {\n    color: #ecc94b\n  }\n\n  .md\\:hover\\:text-yellow-600:hover {\n    color: #d69e2e\n  }\n\n  .md\\:hover\\:text-yellow-700:hover {\n    color: #b7791f\n  }\n\n  .md\\:hover\\:text-yellow-800:hover {\n    color: #975a16\n  }\n\n  .md\\:hover\\:text-yellow-900:hover {\n    color: #744210\n  }\n\n  .md\\:hover\\:text-green-100:hover {\n    color: #f0fff4\n  }\n\n  .md\\:hover\\:text-green-200:hover {\n    color: #c6f6d5\n  }\n\n  .md\\:hover\\:text-green-300:hover {\n    color: #9ae6b4\n  }\n\n  .md\\:hover\\:text-green-400:hover {\n    color: #68d391\n  }\n\n  .md\\:hover\\:text-green-500:hover {\n    color: #48bb78\n  }\n\n  .md\\:hover\\:text-green-600:hover {\n    color: #38a169\n  }\n\n  .md\\:hover\\:text-green-700:hover {\n    color: #2f855a\n  }\n\n  .md\\:hover\\:text-green-800:hover {\n    color: #276749\n  }\n\n  .md\\:hover\\:text-green-900:hover {\n    color: #22543d\n  }\n\n  .md\\:hover\\:text-teal-100:hover {\n    color: #e6fffa\n  }\n\n  .md\\:hover\\:text-teal-200:hover {\n    color: #b2f5ea\n  }\n\n  .md\\:hover\\:text-teal-300:hover {\n    color: #81e6d9\n  }\n\n  .md\\:hover\\:text-teal-400:hover {\n    color: #4fd1c5\n  }\n\n  .md\\:hover\\:text-teal-500:hover {\n    color: #38b2ac\n  }\n\n  .md\\:hover\\:text-teal-600:hover {\n    color: #319795\n  }\n\n  .md\\:hover\\:text-teal-700:hover {\n    color: #2c7a7b\n  }\n\n  .md\\:hover\\:text-teal-800:hover {\n    color: #285e61\n  }\n\n  .md\\:hover\\:text-teal-900:hover {\n    color: #234e52\n  }\n\n  .md\\:hover\\:text-blue-100:hover {\n    color: #ebf8ff\n  }\n\n  .md\\:hover\\:text-blue-200:hover {\n    color: #bee3f8\n  }\n\n  .md\\:hover\\:text-blue-300:hover {\n    color: #90cdf4\n  }\n\n  .md\\:hover\\:text-blue-400:hover {\n    color: #63b3ed\n  }\n\n  .md\\:hover\\:text-blue-500:hover {\n    color: #4299e1\n  }\n\n  .md\\:hover\\:text-blue-600:hover {\n    color: #3182ce\n  }\n\n  .md\\:hover\\:text-blue-700:hover {\n    color: #2b6cb0\n  }\n\n  .md\\:hover\\:text-blue-800:hover {\n    color: #2c5282\n  }\n\n  .md\\:hover\\:text-blue-900:hover {\n    color: #2a4365\n  }\n\n  .md\\:hover\\:text-indigo-100:hover {\n    color: #ebf4ff\n  }\n\n  .md\\:hover\\:text-indigo-200:hover {\n    color: #c3dafe\n  }\n\n  .md\\:hover\\:text-indigo-300:hover {\n    color: #a3bffa\n  }\n\n  .md\\:hover\\:text-indigo-400:hover {\n    color: #7f9cf5\n  }\n\n  .md\\:hover\\:text-indigo-500:hover {\n    color: #667eea\n  }\n\n  .md\\:hover\\:text-indigo-600:hover {\n    color: #5a67d8\n  }\n\n  .md\\:hover\\:text-indigo-700:hover {\n    color: #4c51bf\n  }\n\n  .md\\:hover\\:text-indigo-800:hover {\n    color: #434190\n  }\n\n  .md\\:hover\\:text-indigo-900:hover {\n    color: #3c366b\n  }\n\n  .md\\:hover\\:text-purple-100:hover {\n    color: #faf5ff\n  }\n\n  .md\\:hover\\:text-purple-200:hover {\n    color: #e9d8fd\n  }\n\n  .md\\:hover\\:text-purple-300:hover {\n    color: #d6bcfa\n  }\n\n  .md\\:hover\\:text-purple-400:hover {\n    color: #b794f4\n  }\n\n  .md\\:hover\\:text-purple-500:hover {\n    color: #9f7aea\n  }\n\n  .md\\:hover\\:text-purple-600:hover {\n    color: #805ad5\n  }\n\n  .md\\:hover\\:text-purple-700:hover {\n    color: #6b46c1\n  }\n\n  .md\\:hover\\:text-purple-800:hover {\n    color: #553c9a\n  }\n\n  .md\\:hover\\:text-purple-900:hover {\n    color: #44337a\n  }\n\n  .md\\:hover\\:text-pink-100:hover {\n    color: #fff5f7\n  }\n\n  .md\\:hover\\:text-pink-200:hover {\n    color: #fed7e2\n  }\n\n  .md\\:hover\\:text-pink-300:hover {\n    color: #fbb6ce\n  }\n\n  .md\\:hover\\:text-pink-400:hover {\n    color: #f687b3\n  }\n\n  .md\\:hover\\:text-pink-500:hover {\n    color: #ed64a6\n  }\n\n  .md\\:hover\\:text-pink-600:hover {\n    color: #d53f8c\n  }\n\n  .md\\:hover\\:text-pink-700:hover {\n    color: #b83280\n  }\n\n  .md\\:hover\\:text-pink-800:hover {\n    color: #97266d\n  }\n\n  .md\\:hover\\:text-pink-900:hover {\n    color: #702459\n  }\n\n  .md\\:focus\\:text-transparent:focus {\n    color: transparent\n  }\n\n  .md\\:focus\\:text-black:focus {\n    color: #000\n  }\n\n  .md\\:focus\\:text-white:focus {\n    color: #fff\n  }\n\n  .md\\:focus\\:text-gray-100:focus {\n    color: #f7fafc\n  }\n\n  .md\\:focus\\:text-gray-200:focus {\n    color: #edf2f7\n  }\n\n  .md\\:focus\\:text-gray-300:focus {\n    color: #e2e8f0\n  }\n\n  .md\\:focus\\:text-gray-400:focus {\n    color: #cbd5e0\n  }\n\n  .md\\:focus\\:text-gray-500:focus {\n    color: #a0aec0\n  }\n\n  .md\\:focus\\:text-gray-600:focus {\n    color: #718096\n  }\n\n  .md\\:focus\\:text-gray-700:focus {\n    color: #4a5568\n  }\n\n  .md\\:focus\\:text-gray-800:focus {\n    color: #2d3748\n  }\n\n  .md\\:focus\\:text-gray-900:focus {\n    color: #1a202c\n  }\n\n  .md\\:focus\\:text-red-100:focus {\n    color: #fff5f5\n  }\n\n  .md\\:focus\\:text-red-200:focus {\n    color: #fed7d7\n  }\n\n  .md\\:focus\\:text-red-300:focus {\n    color: #feb2b2\n  }\n\n  .md\\:focus\\:text-red-400:focus {\n    color: #fc8181\n  }\n\n  .md\\:focus\\:text-red-500:focus {\n    color: #f56565\n  }\n\n  .md\\:focus\\:text-red-600:focus {\n    color: #e53e3e\n  }\n\n  .md\\:focus\\:text-red-700:focus {\n    color: #c53030\n  }\n\n  .md\\:focus\\:text-red-800:focus {\n    color: #9b2c2c\n  }\n\n  .md\\:focus\\:text-red-900:focus {\n    color: #742a2a\n  }\n\n  .md\\:focus\\:text-orange-100:focus {\n    color: #fffaf0\n  }\n\n  .md\\:focus\\:text-orange-200:focus {\n    color: #feebc8\n  }\n\n  .md\\:focus\\:text-orange-300:focus {\n    color: #fbd38d\n  }\n\n  .md\\:focus\\:text-orange-400:focus {\n    color: #f6ad55\n  }\n\n  .md\\:focus\\:text-orange-500:focus {\n    color: #ed8936\n  }\n\n  .md\\:focus\\:text-orange-600:focus {\n    color: #dd6b20\n  }\n\n  .md\\:focus\\:text-orange-700:focus {\n    color: #c05621\n  }\n\n  .md\\:focus\\:text-orange-800:focus {\n    color: #9c4221\n  }\n\n  .md\\:focus\\:text-orange-900:focus {\n    color: #7b341e\n  }\n\n  .md\\:focus\\:text-yellow-100:focus {\n    color: #fffff0\n  }\n\n  .md\\:focus\\:text-yellow-200:focus {\n    color: #fefcbf\n  }\n\n  .md\\:focus\\:text-yellow-300:focus {\n    color: #faf089\n  }\n\n  .md\\:focus\\:text-yellow-400:focus {\n    color: #f6e05e\n  }\n\n  .md\\:focus\\:text-yellow-500:focus {\n    color: #ecc94b\n  }\n\n  .md\\:focus\\:text-yellow-600:focus {\n    color: #d69e2e\n  }\n\n  .md\\:focus\\:text-yellow-700:focus {\n    color: #b7791f\n  }\n\n  .md\\:focus\\:text-yellow-800:focus {\n    color: #975a16\n  }\n\n  .md\\:focus\\:text-yellow-900:focus {\n    color: #744210\n  }\n\n  .md\\:focus\\:text-green-100:focus {\n    color: #f0fff4\n  }\n\n  .md\\:focus\\:text-green-200:focus {\n    color: #c6f6d5\n  }\n\n  .md\\:focus\\:text-green-300:focus {\n    color: #9ae6b4\n  }\n\n  .md\\:focus\\:text-green-400:focus {\n    color: #68d391\n  }\n\n  .md\\:focus\\:text-green-500:focus {\n    color: #48bb78\n  }\n\n  .md\\:focus\\:text-green-600:focus {\n    color: #38a169\n  }\n\n  .md\\:focus\\:text-green-700:focus {\n    color: #2f855a\n  }\n\n  .md\\:focus\\:text-green-800:focus {\n    color: #276749\n  }\n\n  .md\\:focus\\:text-green-900:focus {\n    color: #22543d\n  }\n\n  .md\\:focus\\:text-teal-100:focus {\n    color: #e6fffa\n  }\n\n  .md\\:focus\\:text-teal-200:focus {\n    color: #b2f5ea\n  }\n\n  .md\\:focus\\:text-teal-300:focus {\n    color: #81e6d9\n  }\n\n  .md\\:focus\\:text-teal-400:focus {\n    color: #4fd1c5\n  }\n\n  .md\\:focus\\:text-teal-500:focus {\n    color: #38b2ac\n  }\n\n  .md\\:focus\\:text-teal-600:focus {\n    color: #319795\n  }\n\n  .md\\:focus\\:text-teal-700:focus {\n    color: #2c7a7b\n  }\n\n  .md\\:focus\\:text-teal-800:focus {\n    color: #285e61\n  }\n\n  .md\\:focus\\:text-teal-900:focus {\n    color: #234e52\n  }\n\n  .md\\:focus\\:text-blue-100:focus {\n    color: #ebf8ff\n  }\n\n  .md\\:focus\\:text-blue-200:focus {\n    color: #bee3f8\n  }\n\n  .md\\:focus\\:text-blue-300:focus {\n    color: #90cdf4\n  }\n\n  .md\\:focus\\:text-blue-400:focus {\n    color: #63b3ed\n  }\n\n  .md\\:focus\\:text-blue-500:focus {\n    color: #4299e1\n  }\n\n  .md\\:focus\\:text-blue-600:focus {\n    color: #3182ce\n  }\n\n  .md\\:focus\\:text-blue-700:focus {\n    color: #2b6cb0\n  }\n\n  .md\\:focus\\:text-blue-800:focus {\n    color: #2c5282\n  }\n\n  .md\\:focus\\:text-blue-900:focus {\n    color: #2a4365\n  }\n\n  .md\\:focus\\:text-indigo-100:focus {\n    color: #ebf4ff\n  }\n\n  .md\\:focus\\:text-indigo-200:focus {\n    color: #c3dafe\n  }\n\n  .md\\:focus\\:text-indigo-300:focus {\n    color: #a3bffa\n  }\n\n  .md\\:focus\\:text-indigo-400:focus {\n    color: #7f9cf5\n  }\n\n  .md\\:focus\\:text-indigo-500:focus {\n    color: #667eea\n  }\n\n  .md\\:focus\\:text-indigo-600:focus {\n    color: #5a67d8\n  }\n\n  .md\\:focus\\:text-indigo-700:focus {\n    color: #4c51bf\n  }\n\n  .md\\:focus\\:text-indigo-800:focus {\n    color: #434190\n  }\n\n  .md\\:focus\\:text-indigo-900:focus {\n    color: #3c366b\n  }\n\n  .md\\:focus\\:text-purple-100:focus {\n    color: #faf5ff\n  }\n\n  .md\\:focus\\:text-purple-200:focus {\n    color: #e9d8fd\n  }\n\n  .md\\:focus\\:text-purple-300:focus {\n    color: #d6bcfa\n  }\n\n  .md\\:focus\\:text-purple-400:focus {\n    color: #b794f4\n  }\n\n  .md\\:focus\\:text-purple-500:focus {\n    color: #9f7aea\n  }\n\n  .md\\:focus\\:text-purple-600:focus {\n    color: #805ad5\n  }\n\n  .md\\:focus\\:text-purple-700:focus {\n    color: #6b46c1\n  }\n\n  .md\\:focus\\:text-purple-800:focus {\n    color: #553c9a\n  }\n\n  .md\\:focus\\:text-purple-900:focus {\n    color: #44337a\n  }\n\n  .md\\:focus\\:text-pink-100:focus {\n    color: #fff5f7\n  }\n\n  .md\\:focus\\:text-pink-200:focus {\n    color: #fed7e2\n  }\n\n  .md\\:focus\\:text-pink-300:focus {\n    color: #fbb6ce\n  }\n\n  .md\\:focus\\:text-pink-400:focus {\n    color: #f687b3\n  }\n\n  .md\\:focus\\:text-pink-500:focus {\n    color: #ed64a6\n  }\n\n  .md\\:focus\\:text-pink-600:focus {\n    color: #d53f8c\n  }\n\n  .md\\:focus\\:text-pink-700:focus {\n    color: #b83280\n  }\n\n  .md\\:focus\\:text-pink-800:focus {\n    color: #97266d\n  }\n\n  .md\\:focus\\:text-pink-900:focus {\n    color: #702459\n  }\n\n  .md\\:text-xs {\n    font-size: 0.75rem\n  }\n\n  .md\\:text-sm {\n    font-size: 0.875rem\n  }\n\n  .md\\:text-base {\n    font-size: 1rem\n  }\n\n  .md\\:text-lg {\n    font-size: 1.125rem\n  }\n\n  .md\\:text-xl {\n    font-size: 1.25rem\n  }\n\n  .md\\:text-2xl {\n    font-size: 1.5rem\n  }\n\n  .md\\:text-3xl {\n    font-size: 1.875rem\n  }\n\n  .md\\:text-4xl {\n    font-size: 2.25rem\n  }\n\n  .md\\:text-5xl {\n    font-size: 3rem\n  }\n\n  .md\\:text-6xl {\n    font-size: 4rem\n  }\n\n  .md\\:italic {\n    font-style: italic\n  }\n\n  .md\\:not-italic {\n    font-style: normal\n  }\n\n  .md\\:uppercase {\n    text-transform: uppercase\n  }\n\n  .md\\:lowercase {\n    text-transform: lowercase\n  }\n\n  .md\\:capitalize {\n    text-transform: capitalize\n  }\n\n  .md\\:normal-case {\n    text-transform: none\n  }\n\n  .md\\:underline {\n    text-decoration: underline\n  }\n\n  .md\\:line-through {\n    text-decoration: line-through\n  }\n\n  .md\\:no-underline {\n    text-decoration: none\n  }\n\n  .md\\:hover\\:underline:hover {\n    text-decoration: underline\n  }\n\n  .md\\:hover\\:line-through:hover {\n    text-decoration: line-through\n  }\n\n  .md\\:hover\\:no-underline:hover {\n    text-decoration: none\n  }\n\n  .md\\:focus\\:underline:focus {\n    text-decoration: underline\n  }\n\n  .md\\:focus\\:line-through:focus {\n    text-decoration: line-through\n  }\n\n  .md\\:focus\\:no-underline:focus {\n    text-decoration: none\n  }\n\n  .md\\:antialiased {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale\n  }\n\n  .md\\:subpixel-antialiased {\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto\n  }\n\n  .md\\:tracking-tighter {\n    letter-spacing: -0.05em\n  }\n\n  .md\\:tracking-tight {\n    letter-spacing: -0.025em\n  }\n\n  .md\\:tracking-normal {\n    letter-spacing: 0\n  }\n\n  .md\\:tracking-wide {\n    letter-spacing: 0.025em\n  }\n\n  .md\\:tracking-wider {\n    letter-spacing: 0.05em\n  }\n\n  .md\\:tracking-widest {\n    letter-spacing: 0.1em\n  }\n\n  .md\\:select-none {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none\n  }\n\n  .md\\:select-text {\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text\n  }\n\n  .md\\:select-all {\n    -webkit-user-select: all;\n       -moz-user-select: all;\n        -ms-user-select: all;\n            user-select: all\n  }\n\n  .md\\:select-auto {\n    -webkit-user-select: auto;\n       -moz-user-select: auto;\n        -ms-user-select: auto;\n            user-select: auto\n  }\n\n  .md\\:align-baseline {\n    vertical-align: baseline\n  }\n\n  .md\\:align-top {\n    vertical-align: top\n  }\n\n  .md\\:align-middle {\n    vertical-align: middle\n  }\n\n  .md\\:align-bottom {\n    vertical-align: bottom\n  }\n\n  .md\\:align-text-top {\n    vertical-align: text-top\n  }\n\n  .md\\:align-text-bottom {\n    vertical-align: text-bottom\n  }\n\n  .md\\:visible {\n    visibility: visible\n  }\n\n  .md\\:invisible {\n    visibility: hidden\n  }\n\n  .md\\:whitespace-normal {\n    white-space: normal\n  }\n\n  .md\\:whitespace-no-wrap {\n    white-space: nowrap\n  }\n\n  .md\\:whitespace-pre {\n    white-space: pre\n  }\n\n  .md\\:whitespace-pre-line {\n    white-space: pre-line\n  }\n\n  .md\\:whitespace-pre-wrap {\n    white-space: pre-wrap\n  }\n\n  .md\\:break-normal {\n    overflow-wrap: normal;\n    word-break: normal\n  }\n\n  .md\\:break-words {\n    overflow-wrap: break-word\n  }\n\n  .md\\:break-all {\n    word-break: break-all\n  }\n\n  .md\\:truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap\n  }\n\n  .md\\:w-0 {\n    width: 0\n  }\n\n  .md\\:w-1 {\n    width: 0.25rem\n  }\n\n  .md\\:w-2 {\n    width: 0.5rem\n  }\n\n  .md\\:w-3 {\n    width: 0.75rem\n  }\n\n  .md\\:w-4 {\n    width: 1rem\n  }\n\n  .md\\:w-5 {\n    width: 1.25rem\n  }\n\n  .md\\:w-6 {\n    width: 1.5rem\n  }\n\n  .md\\:w-8 {\n    width: 2rem\n  }\n\n  .md\\:w-10 {\n    width: 2.5rem\n  }\n\n  .md\\:w-12 {\n    width: 3rem\n  }\n\n  .md\\:w-16 {\n    width: 4rem\n  }\n\n  .md\\:w-20 {\n    width: 5rem\n  }\n\n  .md\\:w-24 {\n    width: 6rem\n  }\n\n  .md\\:w-32 {\n    width: 8rem\n  }\n\n  .md\\:w-40 {\n    width: 10rem\n  }\n\n  .md\\:w-48 {\n    width: 12rem\n  }\n\n  .md\\:w-56 {\n    width: 14rem\n  }\n\n  .md\\:w-64 {\n    width: 16rem\n  }\n\n  .md\\:w-auto {\n    width: auto\n  }\n\n  .md\\:w-px {\n    width: 1px\n  }\n\n  .md\\:w-1\\/2 {\n    width: 50%\n  }\n\n  .md\\:w-1\\/3 {\n    width: 33.333333%\n  }\n\n  .md\\:w-2\\/3 {\n    width: 66.666667%\n  }\n\n  .md\\:w-1\\/4 {\n    width: 25%\n  }\n\n  .md\\:w-2\\/4 {\n    width: 50%\n  }\n\n  .md\\:w-3\\/4 {\n    width: 75%\n  }\n\n  .md\\:w-1\\/5 {\n    width: 20%\n  }\n\n  .md\\:w-2\\/5 {\n    width: 40%\n  }\n\n  .md\\:w-3\\/5 {\n    width: 60%\n  }\n\n  .md\\:w-4\\/5 {\n    width: 80%\n  }\n\n  .md\\:w-1\\/6 {\n    width: 16.666667%\n  }\n\n  .md\\:w-2\\/6 {\n    width: 33.333333%\n  }\n\n  .md\\:w-3\\/6 {\n    width: 50%\n  }\n\n  .md\\:w-4\\/6 {\n    width: 66.666667%\n  }\n\n  .md\\:w-5\\/6 {\n    width: 83.333333%\n  }\n\n  .md\\:w-1\\/12 {\n    width: 8.333333%\n  }\n\n  .md\\:w-2\\/12 {\n    width: 16.666667%\n  }\n\n  .md\\:w-3\\/12 {\n    width: 25%\n  }\n\n  .md\\:w-4\\/12 {\n    width: 33.333333%\n  }\n\n  .md\\:w-5\\/12 {\n    width: 41.666667%\n  }\n\n  .md\\:w-6\\/12 {\n    width: 50%\n  }\n\n  .md\\:w-7\\/12 {\n    width: 58.333333%\n  }\n\n  .md\\:w-8\\/12 {\n    width: 66.666667%\n  }\n\n  .md\\:w-9\\/12 {\n    width: 75%\n  }\n\n  .md\\:w-10\\/12 {\n    width: 83.333333%\n  }\n\n  .md\\:w-11\\/12 {\n    width: 91.666667%\n  }\n\n  .md\\:w-full {\n    width: 100%\n  }\n\n  .md\\:w-screen {\n    width: 100vw\n  }\n\n  .md\\:z-0 {\n    z-index: 0\n  }\n\n  .md\\:z-10 {\n    z-index: 10\n  }\n\n  .md\\:z-20 {\n    z-index: 20\n  }\n\n  .md\\:z-30 {\n    z-index: 30\n  }\n\n  .md\\:z-40 {\n    z-index: 40\n  }\n\n  .md\\:z-50 {\n    z-index: 50\n  }\n\n  .md\\:z-auto {\n    z-index: auto\n  }\n}\n\n@media (min-width: 1024px) {\n  .lg\\:sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0\n  }\n\n  .lg\\:not-sr-only {\n    position: static;\n    width: auto;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n    white-space: normal\n  }\n\n  .lg\\:focus\\:sr-only:focus {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0\n  }\n\n  .lg\\:focus\\:not-sr-only:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n    white-space: normal\n  }\n\n  .lg\\:appearance-none {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none\n  }\n\n  .lg\\:bg-fixed {\n    background-attachment: fixed\n  }\n\n  .lg\\:bg-local {\n    background-attachment: local\n  }\n\n  .lg\\:bg-scroll {\n    background-attachment: scroll\n  }\n\n  .lg\\:bg-transparent {\n    background-color: transparent\n  }\n\n  .lg\\:bg-black {\n    background-color: #000\n  }\n\n  .lg\\:bg-white {\n    background-color: #fff\n  }\n\n  .lg\\:bg-gray-100 {\n    background-color: #f7fafc\n  }\n\n  .lg\\:bg-gray-200 {\n    background-color: #edf2f7\n  }\n\n  .lg\\:bg-gray-300 {\n    background-color: #e2e8f0\n  }\n\n  .lg\\:bg-gray-400 {\n    background-color: #cbd5e0\n  }\n\n  .lg\\:bg-gray-500 {\n    background-color: #a0aec0\n  }\n\n  .lg\\:bg-gray-600 {\n    background-color: #718096\n  }\n\n  .lg\\:bg-gray-700 {\n    background-color: #4a5568\n  }\n\n  .lg\\:bg-gray-800 {\n    background-color: #2d3748\n  }\n\n  .lg\\:bg-gray-900 {\n    background-color: #1a202c\n  }\n\n  .lg\\:bg-red-100 {\n    background-color: #fff5f5\n  }\n\n  .lg\\:bg-red-200 {\n    background-color: #fed7d7\n  }\n\n  .lg\\:bg-red-300 {\n    background-color: #feb2b2\n  }\n\n  .lg\\:bg-red-400 {\n    background-color: #fc8181\n  }\n\n  .lg\\:bg-red-500 {\n    background-color: #f56565\n  }\n\n  .lg\\:bg-red-600 {\n    background-color: #e53e3e\n  }\n\n  .lg\\:bg-red-700 {\n    background-color: #c53030\n  }\n\n  .lg\\:bg-red-800 {\n    background-color: #9b2c2c\n  }\n\n  .lg\\:bg-red-900 {\n    background-color: #742a2a\n  }\n\n  .lg\\:bg-orange-100 {\n    background-color: #fffaf0\n  }\n\n  .lg\\:bg-orange-200 {\n    background-color: #feebc8\n  }\n\n  .lg\\:bg-orange-300 {\n    background-color: #fbd38d\n  }\n\n  .lg\\:bg-orange-400 {\n    background-color: #f6ad55\n  }\n\n  .lg\\:bg-orange-500 {\n    background-color: #ed8936\n  }\n\n  .lg\\:bg-orange-600 {\n    background-color: #dd6b20\n  }\n\n  .lg\\:bg-orange-700 {\n    background-color: #c05621\n  }\n\n  .lg\\:bg-orange-800 {\n    background-color: #9c4221\n  }\n\n  .lg\\:bg-orange-900 {\n    background-color: #7b341e\n  }\n\n  .lg\\:bg-yellow-100 {\n    background-color: #fffff0\n  }\n\n  .lg\\:bg-yellow-200 {\n    background-color: #fefcbf\n  }\n\n  .lg\\:bg-yellow-300 {\n    background-color: #faf089\n  }\n\n  .lg\\:bg-yellow-400 {\n    background-color: #f6e05e\n  }\n\n  .lg\\:bg-yellow-500 {\n    background-color: #ecc94b\n  }\n\n  .lg\\:bg-yellow-600 {\n    background-color: #d69e2e\n  }\n\n  .lg\\:bg-yellow-700 {\n    background-color: #b7791f\n  }\n\n  .lg\\:bg-yellow-800 {\n    background-color: #975a16\n  }\n\n  .lg\\:bg-yellow-900 {\n    background-color: #744210\n  }\n\n  .lg\\:bg-green-100 {\n    background-color: #f0fff4\n  }\n\n  .lg\\:bg-green-200 {\n    background-color: #c6f6d5\n  }\n\n  .lg\\:bg-green-300 {\n    background-color: #9ae6b4\n  }\n\n  .lg\\:bg-green-400 {\n    background-color: #68d391\n  }\n\n  .lg\\:bg-green-500 {\n    background-color: #48bb78\n  }\n\n  .lg\\:bg-green-600 {\n    background-color: #38a169\n  }\n\n  .lg\\:bg-green-700 {\n    background-color: #2f855a\n  }\n\n  .lg\\:bg-green-800 {\n    background-color: #276749\n  }\n\n  .lg\\:bg-green-900 {\n    background-color: #22543d\n  }\n\n  .lg\\:bg-teal-100 {\n    background-color: #e6fffa\n  }\n\n  .lg\\:bg-teal-200 {\n    background-color: #b2f5ea\n  }\n\n  .lg\\:bg-teal-300 {\n    background-color: #81e6d9\n  }\n\n  .lg\\:bg-teal-400 {\n    background-color: #4fd1c5\n  }\n\n  .lg\\:bg-teal-500 {\n    background-color: #38b2ac\n  }\n\n  .lg\\:bg-teal-600 {\n    background-color: #319795\n  }\n\n  .lg\\:bg-teal-700 {\n    background-color: #2c7a7b\n  }\n\n  .lg\\:bg-teal-800 {\n    background-color: #285e61\n  }\n\n  .lg\\:bg-teal-900 {\n    background-color: #234e52\n  }\n\n  .lg\\:bg-blue-100 {\n    background-color: #ebf8ff\n  }\n\n  .lg\\:bg-blue-200 {\n    background-color: #bee3f8\n  }\n\n  .lg\\:bg-blue-300 {\n    background-color: #90cdf4\n  }\n\n  .lg\\:bg-blue-400 {\n    background-color: #63b3ed\n  }\n\n  .lg\\:bg-blue-500 {\n    background-color: #4299e1\n  }\n\n  .lg\\:bg-blue-600 {\n    background-color: #3182ce\n  }\n\n  .lg\\:bg-blue-700 {\n    background-color: #2b6cb0\n  }\n\n  .lg\\:bg-blue-800 {\n    background-color: #2c5282\n  }\n\n  .lg\\:bg-blue-900 {\n    background-color: #2a4365\n  }\n\n  .lg\\:bg-indigo-100 {\n    background-color: #ebf4ff\n  }\n\n  .lg\\:bg-indigo-200 {\n    background-color: #c3dafe\n  }\n\n  .lg\\:bg-indigo-300 {\n    background-color: #a3bffa\n  }\n\n  .lg\\:bg-indigo-400 {\n    background-color: #7f9cf5\n  }\n\n  .lg\\:bg-indigo-500 {\n    background-color: #667eea\n  }\n\n  .lg\\:bg-indigo-600 {\n    background-color: #5a67d8\n  }\n\n  .lg\\:bg-indigo-700 {\n    background-color: #4c51bf\n  }\n\n  .lg\\:bg-indigo-800 {\n    background-color: #434190\n  }\n\n  .lg\\:bg-indigo-900 {\n    background-color: #3c366b\n  }\n\n  .lg\\:bg-purple-100 {\n    background-color: #faf5ff\n  }\n\n  .lg\\:bg-purple-200 {\n    background-color: #e9d8fd\n  }\n\n  .lg\\:bg-purple-300 {\n    background-color: #d6bcfa\n  }\n\n  .lg\\:bg-purple-400 {\n    background-color: #b794f4\n  }\n\n  .lg\\:bg-purple-500 {\n    background-color: #9f7aea\n  }\n\n  .lg\\:bg-purple-600 {\n    background-color: #805ad5\n  }\n\n  .lg\\:bg-purple-700 {\n    background-color: #6b46c1\n  }\n\n  .lg\\:bg-purple-800 {\n    background-color: #553c9a\n  }\n\n  .lg\\:bg-purple-900 {\n    background-color: #44337a\n  }\n\n  .lg\\:bg-pink-100 {\n    background-color: #fff5f7\n  }\n\n  .lg\\:bg-pink-200 {\n    background-color: #fed7e2\n  }\n\n  .lg\\:bg-pink-300 {\n    background-color: #fbb6ce\n  }\n\n  .lg\\:bg-pink-400 {\n    background-color: #f687b3\n  }\n\n  .lg\\:bg-pink-500 {\n    background-color: #ed64a6\n  }\n\n  .lg\\:bg-pink-600 {\n    background-color: #d53f8c\n  }\n\n  .lg\\:bg-pink-700 {\n    background-color: #b83280\n  }\n\n  .lg\\:bg-pink-800 {\n    background-color: #97266d\n  }\n\n  .lg\\:bg-pink-900 {\n    background-color: #702459\n  }\n\n  .lg\\:hover\\:bg-transparent:hover {\n    background-color: transparent\n  }\n\n  .lg\\:hover\\:bg-black:hover {\n    background-color: #000\n  }\n\n  .lg\\:hover\\:bg-white:hover {\n    background-color: #fff\n  }\n\n  .lg\\:hover\\:bg-gray-100:hover {\n    background-color: #f7fafc\n  }\n\n  .lg\\:hover\\:bg-gray-200:hover {\n    background-color: #edf2f7\n  }\n\n  .lg\\:hover\\:bg-gray-300:hover {\n    background-color: #e2e8f0\n  }\n\n  .lg\\:hover\\:bg-gray-400:hover {\n    background-color: #cbd5e0\n  }\n\n  .lg\\:hover\\:bg-gray-500:hover {\n    background-color: #a0aec0\n  }\n\n  .lg\\:hover\\:bg-gray-600:hover {\n    background-color: #718096\n  }\n\n  .lg\\:hover\\:bg-gray-700:hover {\n    background-color: #4a5568\n  }\n\n  .lg\\:hover\\:bg-gray-800:hover {\n    background-color: #2d3748\n  }\n\n  .lg\\:hover\\:bg-gray-900:hover {\n    background-color: #1a202c\n  }\n\n  .lg\\:hover\\:bg-red-100:hover {\n    background-color: #fff5f5\n  }\n\n  .lg\\:hover\\:bg-red-200:hover {\n    background-color: #fed7d7\n  }\n\n  .lg\\:hover\\:bg-red-300:hover {\n    background-color: #feb2b2\n  }\n\n  .lg\\:hover\\:bg-red-400:hover {\n    background-color: #fc8181\n  }\n\n  .lg\\:hover\\:bg-red-500:hover {\n    background-color: #f56565\n  }\n\n  .lg\\:hover\\:bg-red-600:hover {\n    background-color: #e53e3e\n  }\n\n  .lg\\:hover\\:bg-red-700:hover {\n    background-color: #c53030\n  }\n\n  .lg\\:hover\\:bg-red-800:hover {\n    background-color: #9b2c2c\n  }\n\n  .lg\\:hover\\:bg-red-900:hover {\n    background-color: #742a2a\n  }\n\n  .lg\\:hover\\:bg-orange-100:hover {\n    background-color: #fffaf0\n  }\n\n  .lg\\:hover\\:bg-orange-200:hover {\n    background-color: #feebc8\n  }\n\n  .lg\\:hover\\:bg-orange-300:hover {\n    background-color: #fbd38d\n  }\n\n  .lg\\:hover\\:bg-orange-400:hover {\n    background-color: #f6ad55\n  }\n\n  .lg\\:hover\\:bg-orange-500:hover {\n    background-color: #ed8936\n  }\n\n  .lg\\:hover\\:bg-orange-600:hover {\n    background-color: #dd6b20\n  }\n\n  .lg\\:hover\\:bg-orange-700:hover {\n    background-color: #c05621\n  }\n\n  .lg\\:hover\\:bg-orange-800:hover {\n    background-color: #9c4221\n  }\n\n  .lg\\:hover\\:bg-orange-900:hover {\n    background-color: #7b341e\n  }\n\n  .lg\\:hover\\:bg-yellow-100:hover {\n    background-color: #fffff0\n  }\n\n  .lg\\:hover\\:bg-yellow-200:hover {\n    background-color: #fefcbf\n  }\n\n  .lg\\:hover\\:bg-yellow-300:hover {\n    background-color: #faf089\n  }\n\n  .lg\\:hover\\:bg-yellow-400:hover {\n    background-color: #f6e05e\n  }\n\n  .lg\\:hover\\:bg-yellow-500:hover {\n    background-color: #ecc94b\n  }\n\n  .lg\\:hover\\:bg-yellow-600:hover {\n    background-color: #d69e2e\n  }\n\n  .lg\\:hover\\:bg-yellow-700:hover {\n    background-color: #b7791f\n  }\n\n  .lg\\:hover\\:bg-yellow-800:hover {\n    background-color: #975a16\n  }\n\n  .lg\\:hover\\:bg-yellow-900:hover {\n    background-color: #744210\n  }\n\n  .lg\\:hover\\:bg-green-100:hover {\n    background-color: #f0fff4\n  }\n\n  .lg\\:hover\\:bg-green-200:hover {\n    background-color: #c6f6d5\n  }\n\n  .lg\\:hover\\:bg-green-300:hover {\n    background-color: #9ae6b4\n  }\n\n  .lg\\:hover\\:bg-green-400:hover {\n    background-color: #68d391\n  }\n\n  .lg\\:hover\\:bg-green-500:hover {\n    background-color: #48bb78\n  }\n\n  .lg\\:hover\\:bg-green-600:hover {\n    background-color: #38a169\n  }\n\n  .lg\\:hover\\:bg-green-700:hover {\n    background-color: #2f855a\n  }\n\n  .lg\\:hover\\:bg-green-800:hover {\n    background-color: #276749\n  }\n\n  .lg\\:hover\\:bg-green-900:hover {\n    background-color: #22543d\n  }\n\n  .lg\\:hover\\:bg-teal-100:hover {\n    background-color: #e6fffa\n  }\n\n  .lg\\:hover\\:bg-teal-200:hover {\n    background-color: #b2f5ea\n  }\n\n  .lg\\:hover\\:bg-teal-300:hover {\n    background-color: #81e6d9\n  }\n\n  .lg\\:hover\\:bg-teal-400:hover {\n    background-color: #4fd1c5\n  }\n\n  .lg\\:hover\\:bg-teal-500:hover {\n    background-color: #38b2ac\n  }\n\n  .lg\\:hover\\:bg-teal-600:hover {\n    background-color: #319795\n  }\n\n  .lg\\:hover\\:bg-teal-700:hover {\n    background-color: #2c7a7b\n  }\n\n  .lg\\:hover\\:bg-teal-800:hover {\n    background-color: #285e61\n  }\n\n  .lg\\:hover\\:bg-teal-900:hover {\n    background-color: #234e52\n  }\n\n  .lg\\:hover\\:bg-blue-100:hover {\n    background-color: #ebf8ff\n  }\n\n  .lg\\:hover\\:bg-blue-200:hover {\n    background-color: #bee3f8\n  }\n\n  .lg\\:hover\\:bg-blue-300:hover {\n    background-color: #90cdf4\n  }\n\n  .lg\\:hover\\:bg-blue-400:hover {\n    background-color: #63b3ed\n  }\n\n  .lg\\:hover\\:bg-blue-500:hover {\n    background-color: #4299e1\n  }\n\n  .lg\\:hover\\:bg-blue-600:hover {\n    background-color: #3182ce\n  }\n\n  .lg\\:hover\\:bg-blue-700:hover {\n    background-color: #2b6cb0\n  }\n\n  .lg\\:hover\\:bg-blue-800:hover {\n    background-color: #2c5282\n  }\n\n  .lg\\:hover\\:bg-blue-900:hover {\n    background-color: #2a4365\n  }\n\n  .lg\\:hover\\:bg-indigo-100:hover {\n    background-color: #ebf4ff\n  }\n\n  .lg\\:hover\\:bg-indigo-200:hover {\n    background-color: #c3dafe\n  }\n\n  .lg\\:hover\\:bg-indigo-300:hover {\n    background-color: #a3bffa\n  }\n\n  .lg\\:hover\\:bg-indigo-400:hover {\n    background-color: #7f9cf5\n  }\n\n  .lg\\:hover\\:bg-indigo-500:hover {\n    background-color: #667eea\n  }\n\n  .lg\\:hover\\:bg-indigo-600:hover {\n    background-color: #5a67d8\n  }\n\n  .lg\\:hover\\:bg-indigo-700:hover {\n    background-color: #4c51bf\n  }\n\n  .lg\\:hover\\:bg-indigo-800:hover {\n    background-color: #434190\n  }\n\n  .lg\\:hover\\:bg-indigo-900:hover {\n    background-color: #3c366b\n  }\n\n  .lg\\:hover\\:bg-purple-100:hover {\n    background-color: #faf5ff\n  }\n\n  .lg\\:hover\\:bg-purple-200:hover {\n    background-color: #e9d8fd\n  }\n\n  .lg\\:hover\\:bg-purple-300:hover {\n    background-color: #d6bcfa\n  }\n\n  .lg\\:hover\\:bg-purple-400:hover {\n    background-color: #b794f4\n  }\n\n  .lg\\:hover\\:bg-purple-500:hover {\n    background-color: #9f7aea\n  }\n\n  .lg\\:hover\\:bg-purple-600:hover {\n    background-color: #805ad5\n  }\n\n  .lg\\:hover\\:bg-purple-700:hover {\n    background-color: #6b46c1\n  }\n\n  .lg\\:hover\\:bg-purple-800:hover {\n    background-color: #553c9a\n  }\n\n  .lg\\:hover\\:bg-purple-900:hover {\n    background-color: #44337a\n  }\n\n  .lg\\:hover\\:bg-pink-100:hover {\n    background-color: #fff5f7\n  }\n\n  .lg\\:hover\\:bg-pink-200:hover {\n    background-color: #fed7e2\n  }\n\n  .lg\\:hover\\:bg-pink-300:hover {\n    background-color: #fbb6ce\n  }\n\n  .lg\\:hover\\:bg-pink-400:hover {\n    background-color: #f687b3\n  }\n\n  .lg\\:hover\\:bg-pink-500:hover {\n    background-color: #ed64a6\n  }\n\n  .lg\\:hover\\:bg-pink-600:hover {\n    background-color: #d53f8c\n  }\n\n  .lg\\:hover\\:bg-pink-700:hover {\n    background-color: #b83280\n  }\n\n  .lg\\:hover\\:bg-pink-800:hover {\n    background-color: #97266d\n  }\n\n  .lg\\:hover\\:bg-pink-900:hover {\n    background-color: #702459\n  }\n\n  .lg\\:focus\\:bg-transparent:focus {\n    background-color: transparent\n  }\n\n  .lg\\:focus\\:bg-black:focus {\n    background-color: #000\n  }\n\n  .lg\\:focus\\:bg-white:focus {\n    background-color: #fff\n  }\n\n  .lg\\:focus\\:bg-gray-100:focus {\n    background-color: #f7fafc\n  }\n\n  .lg\\:focus\\:bg-gray-200:focus {\n    background-color: #edf2f7\n  }\n\n  .lg\\:focus\\:bg-gray-300:focus {\n    background-color: #e2e8f0\n  }\n\n  .lg\\:focus\\:bg-gray-400:focus {\n    background-color: #cbd5e0\n  }\n\n  .lg\\:focus\\:bg-gray-500:focus {\n    background-color: #a0aec0\n  }\n\n  .lg\\:focus\\:bg-gray-600:focus {\n    background-color: #718096\n  }\n\n  .lg\\:focus\\:bg-gray-700:focus {\n    background-color: #4a5568\n  }\n\n  .lg\\:focus\\:bg-gray-800:focus {\n    background-color: #2d3748\n  }\n\n  .lg\\:focus\\:bg-gray-900:focus {\n    background-color: #1a202c\n  }\n\n  .lg\\:focus\\:bg-red-100:focus {\n    background-color: #fff5f5\n  }\n\n  .lg\\:focus\\:bg-red-200:focus {\n    background-color: #fed7d7\n  }\n\n  .lg\\:focus\\:bg-red-300:focus {\n    background-color: #feb2b2\n  }\n\n  .lg\\:focus\\:bg-red-400:focus {\n    background-color: #fc8181\n  }\n\n  .lg\\:focus\\:bg-red-500:focus {\n    background-color: #f56565\n  }\n\n  .lg\\:focus\\:bg-red-600:focus {\n    background-color: #e53e3e\n  }\n\n  .lg\\:focus\\:bg-red-700:focus {\n    background-color: #c53030\n  }\n\n  .lg\\:focus\\:bg-red-800:focus {\n    background-color: #9b2c2c\n  }\n\n  .lg\\:focus\\:bg-red-900:focus {\n    background-color: #742a2a\n  }\n\n  .lg\\:focus\\:bg-orange-100:focus {\n    background-color: #fffaf0\n  }\n\n  .lg\\:focus\\:bg-orange-200:focus {\n    background-color: #feebc8\n  }\n\n  .lg\\:focus\\:bg-orange-300:focus {\n    background-color: #fbd38d\n  }\n\n  .lg\\:focus\\:bg-orange-400:focus {\n    background-color: #f6ad55\n  }\n\n  .lg\\:focus\\:bg-orange-500:focus {\n    background-color: #ed8936\n  }\n\n  .lg\\:focus\\:bg-orange-600:focus {\n    background-color: #dd6b20\n  }\n\n  .lg\\:focus\\:bg-orange-700:focus {\n    background-color: #c05621\n  }\n\n  .lg\\:focus\\:bg-orange-800:focus {\n    background-color: #9c4221\n  }\n\n  .lg\\:focus\\:bg-orange-900:focus {\n    background-color: #7b341e\n  }\n\n  .lg\\:focus\\:bg-yellow-100:focus {\n    background-color: #fffff0\n  }\n\n  .lg\\:focus\\:bg-yellow-200:focus {\n    background-color: #fefcbf\n  }\n\n  .lg\\:focus\\:bg-yellow-300:focus {\n    background-color: #faf089\n  }\n\n  .lg\\:focus\\:bg-yellow-400:focus {\n    background-color: #f6e05e\n  }\n\n  .lg\\:focus\\:bg-yellow-500:focus {\n    background-color: #ecc94b\n  }\n\n  .lg\\:focus\\:bg-yellow-600:focus {\n    background-color: #d69e2e\n  }\n\n  .lg\\:focus\\:bg-yellow-700:focus {\n    background-color: #b7791f\n  }\n\n  .lg\\:focus\\:bg-yellow-800:focus {\n    background-color: #975a16\n  }\n\n  .lg\\:focus\\:bg-yellow-900:focus {\n    background-color: #744210\n  }\n\n  .lg\\:focus\\:bg-green-100:focus {\n    background-color: #f0fff4\n  }\n\n  .lg\\:focus\\:bg-green-200:focus {\n    background-color: #c6f6d5\n  }\n\n  .lg\\:focus\\:bg-green-300:focus {\n    background-color: #9ae6b4\n  }\n\n  .lg\\:focus\\:bg-green-400:focus {\n    background-color: #68d391\n  }\n\n  .lg\\:focus\\:bg-green-500:focus {\n    background-color: #48bb78\n  }\n\n  .lg\\:focus\\:bg-green-600:focus {\n    background-color: #38a169\n  }\n\n  .lg\\:focus\\:bg-green-700:focus {\n    background-color: #2f855a\n  }\n\n  .lg\\:focus\\:bg-green-800:focus {\n    background-color: #276749\n  }\n\n  .lg\\:focus\\:bg-green-900:focus {\n    background-color: #22543d\n  }\n\n  .lg\\:focus\\:bg-teal-100:focus {\n    background-color: #e6fffa\n  }\n\n  .lg\\:focus\\:bg-teal-200:focus {\n    background-color: #b2f5ea\n  }\n\n  .lg\\:focus\\:bg-teal-300:focus {\n    background-color: #81e6d9\n  }\n\n  .lg\\:focus\\:bg-teal-400:focus {\n    background-color: #4fd1c5\n  }\n\n  .lg\\:focus\\:bg-teal-500:focus {\n    background-color: #38b2ac\n  }\n\n  .lg\\:focus\\:bg-teal-600:focus {\n    background-color: #319795\n  }\n\n  .lg\\:focus\\:bg-teal-700:focus {\n    background-color: #2c7a7b\n  }\n\n  .lg\\:focus\\:bg-teal-800:focus {\n    background-color: #285e61\n  }\n\n  .lg\\:focus\\:bg-teal-900:focus {\n    background-color: #234e52\n  }\n\n  .lg\\:focus\\:bg-blue-100:focus {\n    background-color: #ebf8ff\n  }\n\n  .lg\\:focus\\:bg-blue-200:focus {\n    background-color: #bee3f8\n  }\n\n  .lg\\:focus\\:bg-blue-300:focus {\n    background-color: #90cdf4\n  }\n\n  .lg\\:focus\\:bg-blue-400:focus {\n    background-color: #63b3ed\n  }\n\n  .lg\\:focus\\:bg-blue-500:focus {\n    background-color: #4299e1\n  }\n\n  .lg\\:focus\\:bg-blue-600:focus {\n    background-color: #3182ce\n  }\n\n  .lg\\:focus\\:bg-blue-700:focus {\n    background-color: #2b6cb0\n  }\n\n  .lg\\:focus\\:bg-blue-800:focus {\n    background-color: #2c5282\n  }\n\n  .lg\\:focus\\:bg-blue-900:focus {\n    background-color: #2a4365\n  }\n\n  .lg\\:focus\\:bg-indigo-100:focus {\n    background-color: #ebf4ff\n  }\n\n  .lg\\:focus\\:bg-indigo-200:focus {\n    background-color: #c3dafe\n  }\n\n  .lg\\:focus\\:bg-indigo-300:focus {\n    background-color: #a3bffa\n  }\n\n  .lg\\:focus\\:bg-indigo-400:focus {\n    background-color: #7f9cf5\n  }\n\n  .lg\\:focus\\:bg-indigo-500:focus {\n    background-color: #667eea\n  }\n\n  .lg\\:focus\\:bg-indigo-600:focus {\n    background-color: #5a67d8\n  }\n\n  .lg\\:focus\\:bg-indigo-700:focus {\n    background-color: #4c51bf\n  }\n\n  .lg\\:focus\\:bg-indigo-800:focus {\n    background-color: #434190\n  }\n\n  .lg\\:focus\\:bg-indigo-900:focus {\n    background-color: #3c366b\n  }\n\n  .lg\\:focus\\:bg-purple-100:focus {\n    background-color: #faf5ff\n  }\n\n  .lg\\:focus\\:bg-purple-200:focus {\n    background-color: #e9d8fd\n  }\n\n  .lg\\:focus\\:bg-purple-300:focus {\n    background-color: #d6bcfa\n  }\n\n  .lg\\:focus\\:bg-purple-400:focus {\n    background-color: #b794f4\n  }\n\n  .lg\\:focus\\:bg-purple-500:focus {\n    background-color: #9f7aea\n  }\n\n  .lg\\:focus\\:bg-purple-600:focus {\n    background-color: #805ad5\n  }\n\n  .lg\\:focus\\:bg-purple-700:focus {\n    background-color: #6b46c1\n  }\n\n  .lg\\:focus\\:bg-purple-800:focus {\n    background-color: #553c9a\n  }\n\n  .lg\\:focus\\:bg-purple-900:focus {\n    background-color: #44337a\n  }\n\n  .lg\\:focus\\:bg-pink-100:focus {\n    background-color: #fff5f7\n  }\n\n  .lg\\:focus\\:bg-pink-200:focus {\n    background-color: #fed7e2\n  }\n\n  .lg\\:focus\\:bg-pink-300:focus {\n    background-color: #fbb6ce\n  }\n\n  .lg\\:focus\\:bg-pink-400:focus {\n    background-color: #f687b3\n  }\n\n  .lg\\:focus\\:bg-pink-500:focus {\n    background-color: #ed64a6\n  }\n\n  .lg\\:focus\\:bg-pink-600:focus {\n    background-color: #d53f8c\n  }\n\n  .lg\\:focus\\:bg-pink-700:focus {\n    background-color: #b83280\n  }\n\n  .lg\\:focus\\:bg-pink-800:focus {\n    background-color: #97266d\n  }\n\n  .lg\\:focus\\:bg-pink-900:focus {\n    background-color: #702459\n  }\n\n  .lg\\:bg-bottom {\n    background-position: bottom\n  }\n\n  .lg\\:bg-center {\n    background-position: center\n  }\n\n  .lg\\:bg-left {\n    background-position: left\n  }\n\n  .lg\\:bg-left-bottom {\n    background-position: left bottom\n  }\n\n  .lg\\:bg-left-top {\n    background-position: left top\n  }\n\n  .lg\\:bg-right {\n    background-position: right\n  }\n\n  .lg\\:bg-right-bottom {\n    background-position: right bottom\n  }\n\n  .lg\\:bg-right-top {\n    background-position: right top\n  }\n\n  .lg\\:bg-top {\n    background-position: top\n  }\n\n  .lg\\:bg-repeat {\n    background-repeat: repeat\n  }\n\n  .lg\\:bg-no-repeat {\n    background-repeat: no-repeat\n  }\n\n  .lg\\:bg-repeat-x {\n    background-repeat: repeat-x\n  }\n\n  .lg\\:bg-repeat-y {\n    background-repeat: repeat-y\n  }\n\n  .lg\\:bg-repeat-round {\n    background-repeat: round\n  }\n\n  .lg\\:bg-repeat-space {\n    background-repeat: space\n  }\n\n  .lg\\:bg-auto {\n    background-size: auto\n  }\n\n  .lg\\:bg-cover {\n    background-size: cover\n  }\n\n  .lg\\:bg-contain {\n    background-size: contain\n  }\n\n  .lg\\:border-collapse {\n    border-collapse: collapse\n  }\n\n  .lg\\:border-separate {\n    border-collapse: separate\n  }\n\n  .lg\\:border-transparent {\n    border-color: transparent\n  }\n\n  .lg\\:border-black {\n    border-color: #000\n  }\n\n  .lg\\:border-white {\n    border-color: #fff\n  }\n\n  .lg\\:border-gray-100 {\n    border-color: #f7fafc\n  }\n\n  .lg\\:border-gray-200 {\n    border-color: #edf2f7\n  }\n\n  .lg\\:border-gray-300 {\n    border-color: #e2e8f0\n  }\n\n  .lg\\:border-gray-400 {\n    border-color: #cbd5e0\n  }\n\n  .lg\\:border-gray-500 {\n    border-color: #a0aec0\n  }\n\n  .lg\\:border-gray-600 {\n    border-color: #718096\n  }\n\n  .lg\\:border-gray-700 {\n    border-color: #4a5568\n  }\n\n  .lg\\:border-gray-800 {\n    border-color: #2d3748\n  }\n\n  .lg\\:border-gray-900 {\n    border-color: #1a202c\n  }\n\n  .lg\\:border-red-100 {\n    border-color: #fff5f5\n  }\n\n  .lg\\:border-red-200 {\n    border-color: #fed7d7\n  }\n\n  .lg\\:border-red-300 {\n    border-color: #feb2b2\n  }\n\n  .lg\\:border-red-400 {\n    border-color: #fc8181\n  }\n\n  .lg\\:border-red-500 {\n    border-color: #f56565\n  }\n\n  .lg\\:border-red-600 {\n    border-color: #e53e3e\n  }\n\n  .lg\\:border-red-700 {\n    border-color: #c53030\n  }\n\n  .lg\\:border-red-800 {\n    border-color: #9b2c2c\n  }\n\n  .lg\\:border-red-900 {\n    border-color: #742a2a\n  }\n\n  .lg\\:border-orange-100 {\n    border-color: #fffaf0\n  }\n\n  .lg\\:border-orange-200 {\n    border-color: #feebc8\n  }\n\n  .lg\\:border-orange-300 {\n    border-color: #fbd38d\n  }\n\n  .lg\\:border-orange-400 {\n    border-color: #f6ad55\n  }\n\n  .lg\\:border-orange-500 {\n    border-color: #ed8936\n  }\n\n  .lg\\:border-orange-600 {\n    border-color: #dd6b20\n  }\n\n  .lg\\:border-orange-700 {\n    border-color: #c05621\n  }\n\n  .lg\\:border-orange-800 {\n    border-color: #9c4221\n  }\n\n  .lg\\:border-orange-900 {\n    border-color: #7b341e\n  }\n\n  .lg\\:border-yellow-100 {\n    border-color: #fffff0\n  }\n\n  .lg\\:border-yellow-200 {\n    border-color: #fefcbf\n  }\n\n  .lg\\:border-yellow-300 {\n    border-color: #faf089\n  }\n\n  .lg\\:border-yellow-400 {\n    border-color: #f6e05e\n  }\n\n  .lg\\:border-yellow-500 {\n    border-color: #ecc94b\n  }\n\n  .lg\\:border-yellow-600 {\n    border-color: #d69e2e\n  }\n\n  .lg\\:border-yellow-700 {\n    border-color: #b7791f\n  }\n\n  .lg\\:border-yellow-800 {\n    border-color: #975a16\n  }\n\n  .lg\\:border-yellow-900 {\n    border-color: #744210\n  }\n\n  .lg\\:border-green-100 {\n    border-color: #f0fff4\n  }\n\n  .lg\\:border-green-200 {\n    border-color: #c6f6d5\n  }\n\n  .lg\\:border-green-300 {\n    border-color: #9ae6b4\n  }\n\n  .lg\\:border-green-400 {\n    border-color: #68d391\n  }\n\n  .lg\\:border-green-500 {\n    border-color: #48bb78\n  }\n\n  .lg\\:border-green-600 {\n    border-color: #38a169\n  }\n\n  .lg\\:border-green-700 {\n    border-color: #2f855a\n  }\n\n  .lg\\:border-green-800 {\n    border-color: #276749\n  }\n\n  .lg\\:border-green-900 {\n    border-color: #22543d\n  }\n\n  .lg\\:border-teal-100 {\n    border-color: #e6fffa\n  }\n\n  .lg\\:border-teal-200 {\n    border-color: #b2f5ea\n  }\n\n  .lg\\:border-teal-300 {\n    border-color: #81e6d9\n  }\n\n  .lg\\:border-teal-400 {\n    border-color: #4fd1c5\n  }\n\n  .lg\\:border-teal-500 {\n    border-color: #38b2ac\n  }\n\n  .lg\\:border-teal-600 {\n    border-color: #319795\n  }\n\n  .lg\\:border-teal-700 {\n    border-color: #2c7a7b\n  }\n\n  .lg\\:border-teal-800 {\n    border-color: #285e61\n  }\n\n  .lg\\:border-teal-900 {\n    border-color: #234e52\n  }\n\n  .lg\\:border-blue-100 {\n    border-color: #ebf8ff\n  }\n\n  .lg\\:border-blue-200 {\n    border-color: #bee3f8\n  }\n\n  .lg\\:border-blue-300 {\n    border-color: #90cdf4\n  }\n\n  .lg\\:border-blue-400 {\n    border-color: #63b3ed\n  }\n\n  .lg\\:border-blue-500 {\n    border-color: #4299e1\n  }\n\n  .lg\\:border-blue-600 {\n    border-color: #3182ce\n  }\n\n  .lg\\:border-blue-700 {\n    border-color: #2b6cb0\n  }\n\n  .lg\\:border-blue-800 {\n    border-color: #2c5282\n  }\n\n  .lg\\:border-blue-900 {\n    border-color: #2a4365\n  }\n\n  .lg\\:border-indigo-100 {\n    border-color: #ebf4ff\n  }\n\n  .lg\\:border-indigo-200 {\n    border-color: #c3dafe\n  }\n\n  .lg\\:border-indigo-300 {\n    border-color: #a3bffa\n  }\n\n  .lg\\:border-indigo-400 {\n    border-color: #7f9cf5\n  }\n\n  .lg\\:border-indigo-500 {\n    border-color: #667eea\n  }\n\n  .lg\\:border-indigo-600 {\n    border-color: #5a67d8\n  }\n\n  .lg\\:border-indigo-700 {\n    border-color: #4c51bf\n  }\n\n  .lg\\:border-indigo-800 {\n    border-color: #434190\n  }\n\n  .lg\\:border-indigo-900 {\n    border-color: #3c366b\n  }\n\n  .lg\\:border-purple-100 {\n    border-color: #faf5ff\n  }\n\n  .lg\\:border-purple-200 {\n    border-color: #e9d8fd\n  }\n\n  .lg\\:border-purple-300 {\n    border-color: #d6bcfa\n  }\n\n  .lg\\:border-purple-400 {\n    border-color: #b794f4\n  }\n\n  .lg\\:border-purple-500 {\n    border-color: #9f7aea\n  }\n\n  .lg\\:border-purple-600 {\n    border-color: #805ad5\n  }\n\n  .lg\\:border-purple-700 {\n    border-color: #6b46c1\n  }\n\n  .lg\\:border-purple-800 {\n    border-color: #553c9a\n  }\n\n  .lg\\:border-purple-900 {\n    border-color: #44337a\n  }\n\n  .lg\\:border-pink-100 {\n    border-color: #fff5f7\n  }\n\n  .lg\\:border-pink-200 {\n    border-color: #fed7e2\n  }\n\n  .lg\\:border-pink-300 {\n    border-color: #fbb6ce\n  }\n\n  .lg\\:border-pink-400 {\n    border-color: #f687b3\n  }\n\n  .lg\\:border-pink-500 {\n    border-color: #ed64a6\n  }\n\n  .lg\\:border-pink-600 {\n    border-color: #d53f8c\n  }\n\n  .lg\\:border-pink-700 {\n    border-color: #b83280\n  }\n\n  .lg\\:border-pink-800 {\n    border-color: #97266d\n  }\n\n  .lg\\:border-pink-900 {\n    border-color: #702459\n  }\n\n  .lg\\:hover\\:border-transparent:hover {\n    border-color: transparent\n  }\n\n  .lg\\:hover\\:border-black:hover {\n    border-color: #000\n  }\n\n  .lg\\:hover\\:border-white:hover {\n    border-color: #fff\n  }\n\n  .lg\\:hover\\:border-gray-100:hover {\n    border-color: #f7fafc\n  }\n\n  .lg\\:hover\\:border-gray-200:hover {\n    border-color: #edf2f7\n  }\n\n  .lg\\:hover\\:border-gray-300:hover {\n    border-color: #e2e8f0\n  }\n\n  .lg\\:hover\\:border-gray-400:hover {\n    border-color: #cbd5e0\n  }\n\n  .lg\\:hover\\:border-gray-500:hover {\n    border-color: #a0aec0\n  }\n\n  .lg\\:hover\\:border-gray-600:hover {\n    border-color: #718096\n  }\n\n  .lg\\:hover\\:border-gray-700:hover {\n    border-color: #4a5568\n  }\n\n  .lg\\:hover\\:border-gray-800:hover {\n    border-color: #2d3748\n  }\n\n  .lg\\:hover\\:border-gray-900:hover {\n    border-color: #1a202c\n  }\n\n  .lg\\:hover\\:border-red-100:hover {\n    border-color: #fff5f5\n  }\n\n  .lg\\:hover\\:border-red-200:hover {\n    border-color: #fed7d7\n  }\n\n  .lg\\:hover\\:border-red-300:hover {\n    border-color: #feb2b2\n  }\n\n  .lg\\:hover\\:border-red-400:hover {\n    border-color: #fc8181\n  }\n\n  .lg\\:hover\\:border-red-500:hover {\n    border-color: #f56565\n  }\n\n  .lg\\:hover\\:border-red-600:hover {\n    border-color: #e53e3e\n  }\n\n  .lg\\:hover\\:border-red-700:hover {\n    border-color: #c53030\n  }\n\n  .lg\\:hover\\:border-red-800:hover {\n    border-color: #9b2c2c\n  }\n\n  .lg\\:hover\\:border-red-900:hover {\n    border-color: #742a2a\n  }\n\n  .lg\\:hover\\:border-orange-100:hover {\n    border-color: #fffaf0\n  }\n\n  .lg\\:hover\\:border-orange-200:hover {\n    border-color: #feebc8\n  }\n\n  .lg\\:hover\\:border-orange-300:hover {\n    border-color: #fbd38d\n  }\n\n  .lg\\:hover\\:border-orange-400:hover {\n    border-color: #f6ad55\n  }\n\n  .lg\\:hover\\:border-orange-500:hover {\n    border-color: #ed8936\n  }\n\n  .lg\\:hover\\:border-orange-600:hover {\n    border-color: #dd6b20\n  }\n\n  .lg\\:hover\\:border-orange-700:hover {\n    border-color: #c05621\n  }\n\n  .lg\\:hover\\:border-orange-800:hover {\n    border-color: #9c4221\n  }\n\n  .lg\\:hover\\:border-orange-900:hover {\n    border-color: #7b341e\n  }\n\n  .lg\\:hover\\:border-yellow-100:hover {\n    border-color: #fffff0\n  }\n\n  .lg\\:hover\\:border-yellow-200:hover {\n    border-color: #fefcbf\n  }\n\n  .lg\\:hover\\:border-yellow-300:hover {\n    border-color: #faf089\n  }\n\n  .lg\\:hover\\:border-yellow-400:hover {\n    border-color: #f6e05e\n  }\n\n  .lg\\:hover\\:border-yellow-500:hover {\n    border-color: #ecc94b\n  }\n\n  .lg\\:hover\\:border-yellow-600:hover {\n    border-color: #d69e2e\n  }\n\n  .lg\\:hover\\:border-yellow-700:hover {\n    border-color: #b7791f\n  }\n\n  .lg\\:hover\\:border-yellow-800:hover {\n    border-color: #975a16\n  }\n\n  .lg\\:hover\\:border-yellow-900:hover {\n    border-color: #744210\n  }\n\n  .lg\\:hover\\:border-green-100:hover {\n    border-color: #f0fff4\n  }\n\n  .lg\\:hover\\:border-green-200:hover {\n    border-color: #c6f6d5\n  }\n\n  .lg\\:hover\\:border-green-300:hover {\n    border-color: #9ae6b4\n  }\n\n  .lg\\:hover\\:border-green-400:hover {\n    border-color: #68d391\n  }\n\n  .lg\\:hover\\:border-green-500:hover {\n    border-color: #48bb78\n  }\n\n  .lg\\:hover\\:border-green-600:hover {\n    border-color: #38a169\n  }\n\n  .lg\\:hover\\:border-green-700:hover {\n    border-color: #2f855a\n  }\n\n  .lg\\:hover\\:border-green-800:hover {\n    border-color: #276749\n  }\n\n  .lg\\:hover\\:border-green-900:hover {\n    border-color: #22543d\n  }\n\n  .lg\\:hover\\:border-teal-100:hover {\n    border-color: #e6fffa\n  }\n\n  .lg\\:hover\\:border-teal-200:hover {\n    border-color: #b2f5ea\n  }\n\n  .lg\\:hover\\:border-teal-300:hover {\n    border-color: #81e6d9\n  }\n\n  .lg\\:hover\\:border-teal-400:hover {\n    border-color: #4fd1c5\n  }\n\n  .lg\\:hover\\:border-teal-500:hover {\n    border-color: #38b2ac\n  }\n\n  .lg\\:hover\\:border-teal-600:hover {\n    border-color: #319795\n  }\n\n  .lg\\:hover\\:border-teal-700:hover {\n    border-color: #2c7a7b\n  }\n\n  .lg\\:hover\\:border-teal-800:hover {\n    border-color: #285e61\n  }\n\n  .lg\\:hover\\:border-teal-900:hover {\n    border-color: #234e52\n  }\n\n  .lg\\:hover\\:border-blue-100:hover {\n    border-color: #ebf8ff\n  }\n\n  .lg\\:hover\\:border-blue-200:hover {\n    border-color: #bee3f8\n  }\n\n  .lg\\:hover\\:border-blue-300:hover {\n    border-color: #90cdf4\n  }\n\n  .lg\\:hover\\:border-blue-400:hover {\n    border-color: #63b3ed\n  }\n\n  .lg\\:hover\\:border-blue-500:hover {\n    border-color: #4299e1\n  }\n\n  .lg\\:hover\\:border-blue-600:hover {\n    border-color: #3182ce\n  }\n\n  .lg\\:hover\\:border-blue-700:hover {\n    border-color: #2b6cb0\n  }\n\n  .lg\\:hover\\:border-blue-800:hover {\n    border-color: #2c5282\n  }\n\n  .lg\\:hover\\:border-blue-900:hover {\n    border-color: #2a4365\n  }\n\n  .lg\\:hover\\:border-indigo-100:hover {\n    border-color: #ebf4ff\n  }\n\n  .lg\\:hover\\:border-indigo-200:hover {\n    border-color: #c3dafe\n  }\n\n  .lg\\:hover\\:border-indigo-300:hover {\n    border-color: #a3bffa\n  }\n\n  .lg\\:hover\\:border-indigo-400:hover {\n    border-color: #7f9cf5\n  }\n\n  .lg\\:hover\\:border-indigo-500:hover {\n    border-color: #667eea\n  }\n\n  .lg\\:hover\\:border-indigo-600:hover {\n    border-color: #5a67d8\n  }\n\n  .lg\\:hover\\:border-indigo-700:hover {\n    border-color: #4c51bf\n  }\n\n  .lg\\:hover\\:border-indigo-800:hover {\n    border-color: #434190\n  }\n\n  .lg\\:hover\\:border-indigo-900:hover {\n    border-color: #3c366b\n  }\n\n  .lg\\:hover\\:border-purple-100:hover {\n    border-color: #faf5ff\n  }\n\n  .lg\\:hover\\:border-purple-200:hover {\n    border-color: #e9d8fd\n  }\n\n  .lg\\:hover\\:border-purple-300:hover {\n    border-color: #d6bcfa\n  }\n\n  .lg\\:hover\\:border-purple-400:hover {\n    border-color: #b794f4\n  }\n\n  .lg\\:hover\\:border-purple-500:hover {\n    border-color: #9f7aea\n  }\n\n  .lg\\:hover\\:border-purple-600:hover {\n    border-color: #805ad5\n  }\n\n  .lg\\:hover\\:border-purple-700:hover {\n    border-color: #6b46c1\n  }\n\n  .lg\\:hover\\:border-purple-800:hover {\n    border-color: #553c9a\n  }\n\n  .lg\\:hover\\:border-purple-900:hover {\n    border-color: #44337a\n  }\n\n  .lg\\:hover\\:border-pink-100:hover {\n    border-color: #fff5f7\n  }\n\n  .lg\\:hover\\:border-pink-200:hover {\n    border-color: #fed7e2\n  }\n\n  .lg\\:hover\\:border-pink-300:hover {\n    border-color: #fbb6ce\n  }\n\n  .lg\\:hover\\:border-pink-400:hover {\n    border-color: #f687b3\n  }\n\n  .lg\\:hover\\:border-pink-500:hover {\n    border-color: #ed64a6\n  }\n\n  .lg\\:hover\\:border-pink-600:hover {\n    border-color: #d53f8c\n  }\n\n  .lg\\:hover\\:border-pink-700:hover {\n    border-color: #b83280\n  }\n\n  .lg\\:hover\\:border-pink-800:hover {\n    border-color: #97266d\n  }\n\n  .lg\\:hover\\:border-pink-900:hover {\n    border-color: #702459\n  }\n\n  .lg\\:focus\\:border-transparent:focus {\n    border-color: transparent\n  }\n\n  .lg\\:focus\\:border-black:focus {\n    border-color: #000\n  }\n\n  .lg\\:focus\\:border-white:focus {\n    border-color: #fff\n  }\n\n  .lg\\:focus\\:border-gray-100:focus {\n    border-color: #f7fafc\n  }\n\n  .lg\\:focus\\:border-gray-200:focus {\n    border-color: #edf2f7\n  }\n\n  .lg\\:focus\\:border-gray-300:focus {\n    border-color: #e2e8f0\n  }\n\n  .lg\\:focus\\:border-gray-400:focus {\n    border-color: #cbd5e0\n  }\n\n  .lg\\:focus\\:border-gray-500:focus {\n    border-color: #a0aec0\n  }\n\n  .lg\\:focus\\:border-gray-600:focus {\n    border-color: #718096\n  }\n\n  .lg\\:focus\\:border-gray-700:focus {\n    border-color: #4a5568\n  }\n\n  .lg\\:focus\\:border-gray-800:focus {\n    border-color: #2d3748\n  }\n\n  .lg\\:focus\\:border-gray-900:focus {\n    border-color: #1a202c\n  }\n\n  .lg\\:focus\\:border-red-100:focus {\n    border-color: #fff5f5\n  }\n\n  .lg\\:focus\\:border-red-200:focus {\n    border-color: #fed7d7\n  }\n\n  .lg\\:focus\\:border-red-300:focus {\n    border-color: #feb2b2\n  }\n\n  .lg\\:focus\\:border-red-400:focus {\n    border-color: #fc8181\n  }\n\n  .lg\\:focus\\:border-red-500:focus {\n    border-color: #f56565\n  }\n\n  .lg\\:focus\\:border-red-600:focus {\n    border-color: #e53e3e\n  }\n\n  .lg\\:focus\\:border-red-700:focus {\n    border-color: #c53030\n  }\n\n  .lg\\:focus\\:border-red-800:focus {\n    border-color: #9b2c2c\n  }\n\n  .lg\\:focus\\:border-red-900:focus {\n    border-color: #742a2a\n  }\n\n  .lg\\:focus\\:border-orange-100:focus {\n    border-color: #fffaf0\n  }\n\n  .lg\\:focus\\:border-orange-200:focus {\n    border-color: #feebc8\n  }\n\n  .lg\\:focus\\:border-orange-300:focus {\n    border-color: #fbd38d\n  }\n\n  .lg\\:focus\\:border-orange-400:focus {\n    border-color: #f6ad55\n  }\n\n  .lg\\:focus\\:border-orange-500:focus {\n    border-color: #ed8936\n  }\n\n  .lg\\:focus\\:border-orange-600:focus {\n    border-color: #dd6b20\n  }\n\n  .lg\\:focus\\:border-orange-700:focus {\n    border-color: #c05621\n  }\n\n  .lg\\:focus\\:border-orange-800:focus {\n    border-color: #9c4221\n  }\n\n  .lg\\:focus\\:border-orange-900:focus {\n    border-color: #7b341e\n  }\n\n  .lg\\:focus\\:border-yellow-100:focus {\n    border-color: #fffff0\n  }\n\n  .lg\\:focus\\:border-yellow-200:focus {\n    border-color: #fefcbf\n  }\n\n  .lg\\:focus\\:border-yellow-300:focus {\n    border-color: #faf089\n  }\n\n  .lg\\:focus\\:border-yellow-400:focus {\n    border-color: #f6e05e\n  }\n\n  .lg\\:focus\\:border-yellow-500:focus {\n    border-color: #ecc94b\n  }\n\n  .lg\\:focus\\:border-yellow-600:focus {\n    border-color: #d69e2e\n  }\n\n  .lg\\:focus\\:border-yellow-700:focus {\n    border-color: #b7791f\n  }\n\n  .lg\\:focus\\:border-yellow-800:focus {\n    border-color: #975a16\n  }\n\n  .lg\\:focus\\:border-yellow-900:focus {\n    border-color: #744210\n  }\n\n  .lg\\:focus\\:border-green-100:focus {\n    border-color: #f0fff4\n  }\n\n  .lg\\:focus\\:border-green-200:focus {\n    border-color: #c6f6d5\n  }\n\n  .lg\\:focus\\:border-green-300:focus {\n    border-color: #9ae6b4\n  }\n\n  .lg\\:focus\\:border-green-400:focus {\n    border-color: #68d391\n  }\n\n  .lg\\:focus\\:border-green-500:focus {\n    border-color: #48bb78\n  }\n\n  .lg\\:focus\\:border-green-600:focus {\n    border-color: #38a169\n  }\n\n  .lg\\:focus\\:border-green-700:focus {\n    border-color: #2f855a\n  }\n\n  .lg\\:focus\\:border-green-800:focus {\n    border-color: #276749\n  }\n\n  .lg\\:focus\\:border-green-900:focus {\n    border-color: #22543d\n  }\n\n  .lg\\:focus\\:border-teal-100:focus {\n    border-color: #e6fffa\n  }\n\n  .lg\\:focus\\:border-teal-200:focus {\n    border-color: #b2f5ea\n  }\n\n  .lg\\:focus\\:border-teal-300:focus {\n    border-color: #81e6d9\n  }\n\n  .lg\\:focus\\:border-teal-400:focus {\n    border-color: #4fd1c5\n  }\n\n  .lg\\:focus\\:border-teal-500:focus {\n    border-color: #38b2ac\n  }\n\n  .lg\\:focus\\:border-teal-600:focus {\n    border-color: #319795\n  }\n\n  .lg\\:focus\\:border-teal-700:focus {\n    border-color: #2c7a7b\n  }\n\n  .lg\\:focus\\:border-teal-800:focus {\n    border-color: #285e61\n  }\n\n  .lg\\:focus\\:border-teal-900:focus {\n    border-color: #234e52\n  }\n\n  .lg\\:focus\\:border-blue-100:focus {\n    border-color: #ebf8ff\n  }\n\n  .lg\\:focus\\:border-blue-200:focus {\n    border-color: #bee3f8\n  }\n\n  .lg\\:focus\\:border-blue-300:focus {\n    border-color: #90cdf4\n  }\n\n  .lg\\:focus\\:border-blue-400:focus {\n    border-color: #63b3ed\n  }\n\n  .lg\\:focus\\:border-blue-500:focus {\n    border-color: #4299e1\n  }\n\n  .lg\\:focus\\:border-blue-600:focus {\n    border-color: #3182ce\n  }\n\n  .lg\\:focus\\:border-blue-700:focus {\n    border-color: #2b6cb0\n  }\n\n  .lg\\:focus\\:border-blue-800:focus {\n    border-color: #2c5282\n  }\n\n  .lg\\:focus\\:border-blue-900:focus {\n    border-color: #2a4365\n  }\n\n  .lg\\:focus\\:border-indigo-100:focus {\n    border-color: #ebf4ff\n  }\n\n  .lg\\:focus\\:border-indigo-200:focus {\n    border-color: #c3dafe\n  }\n\n  .lg\\:focus\\:border-indigo-300:focus {\n    border-color: #a3bffa\n  }\n\n  .lg\\:focus\\:border-indigo-400:focus {\n    border-color: #7f9cf5\n  }\n\n  .lg\\:focus\\:border-indigo-500:focus {\n    border-color: #667eea\n  }\n\n  .lg\\:focus\\:border-indigo-600:focus {\n    border-color: #5a67d8\n  }\n\n  .lg\\:focus\\:border-indigo-700:focus {\n    border-color: #4c51bf\n  }\n\n  .lg\\:focus\\:border-indigo-800:focus {\n    border-color: #434190\n  }\n\n  .lg\\:focus\\:border-indigo-900:focus {\n    border-color: #3c366b\n  }\n\n  .lg\\:focus\\:border-purple-100:focus {\n    border-color: #faf5ff\n  }\n\n  .lg\\:focus\\:border-purple-200:focus {\n    border-color: #e9d8fd\n  }\n\n  .lg\\:focus\\:border-purple-300:focus {\n    border-color: #d6bcfa\n  }\n\n  .lg\\:focus\\:border-purple-400:focus {\n    border-color: #b794f4\n  }\n\n  .lg\\:focus\\:border-purple-500:focus {\n    border-color: #9f7aea\n  }\n\n  .lg\\:focus\\:border-purple-600:focus {\n    border-color: #805ad5\n  }\n\n  .lg\\:focus\\:border-purple-700:focus {\n    border-color: #6b46c1\n  }\n\n  .lg\\:focus\\:border-purple-800:focus {\n    border-color: #553c9a\n  }\n\n  .lg\\:focus\\:border-purple-900:focus {\n    border-color: #44337a\n  }\n\n  .lg\\:focus\\:border-pink-100:focus {\n    border-color: #fff5f7\n  }\n\n  .lg\\:focus\\:border-pink-200:focus {\n    border-color: #fed7e2\n  }\n\n  .lg\\:focus\\:border-pink-300:focus {\n    border-color: #fbb6ce\n  }\n\n  .lg\\:focus\\:border-pink-400:focus {\n    border-color: #f687b3\n  }\n\n  .lg\\:focus\\:border-pink-500:focus {\n    border-color: #ed64a6\n  }\n\n  .lg\\:focus\\:border-pink-600:focus {\n    border-color: #d53f8c\n  }\n\n  .lg\\:focus\\:border-pink-700:focus {\n    border-color: #b83280\n  }\n\n  .lg\\:focus\\:border-pink-800:focus {\n    border-color: #97266d\n  }\n\n  .lg\\:focus\\:border-pink-900:focus {\n    border-color: #702459\n  }\n\n  .lg\\:rounded-none {\n    border-radius: 0\n  }\n\n  .lg\\:rounded-sm {\n    border-radius: 0.125rem\n  }\n\n  .lg\\:rounded {\n    border-radius: 0.25rem\n  }\n\n  .lg\\:rounded-lg {\n    border-radius: 0.5rem\n  }\n\n  .lg\\:rounded-full {\n    border-radius: 9999px\n  }\n\n  .lg\\:rounded-t-none {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n  }\n\n  .lg\\:rounded-r-none {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0\n  }\n\n  .lg\\:rounded-b-none {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0\n  }\n\n  .lg\\:rounded-l-none {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0\n  }\n\n  .lg\\:rounded-t-sm {\n    border-top-left-radius: 0.125rem;\n    border-top-right-radius: 0.125rem\n  }\n\n  .lg\\:rounded-r-sm {\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem\n  }\n\n  .lg\\:rounded-b-sm {\n    border-bottom-right-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .lg\\:rounded-l-sm {\n    border-top-left-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .lg\\:rounded-t {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem\n  }\n\n  .lg\\:rounded-r {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem\n  }\n\n  .lg\\:rounded-b {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .lg\\:rounded-l {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .lg\\:rounded-t-lg {\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem\n  }\n\n  .lg\\:rounded-r-lg {\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem\n  }\n\n  .lg\\:rounded-b-lg {\n    border-bottom-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .lg\\:rounded-l-lg {\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .lg\\:rounded-t-full {\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px\n  }\n\n  .lg\\:rounded-r-full {\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px\n  }\n\n  .lg\\:rounded-b-full {\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px\n  }\n\n  .lg\\:rounded-l-full {\n    border-top-left-radius: 9999px;\n    border-bottom-left-radius: 9999px\n  }\n\n  .lg\\:rounded-tl-none {\n    border-top-left-radius: 0\n  }\n\n  .lg\\:rounded-tr-none {\n    border-top-right-radius: 0\n  }\n\n  .lg\\:rounded-br-none {\n    border-bottom-right-radius: 0\n  }\n\n  .lg\\:rounded-bl-none {\n    border-bottom-left-radius: 0\n  }\n\n  .lg\\:rounded-tl-sm {\n    border-top-left-radius: 0.125rem\n  }\n\n  .lg\\:rounded-tr-sm {\n    border-top-right-radius: 0.125rem\n  }\n\n  .lg\\:rounded-br-sm {\n    border-bottom-right-radius: 0.125rem\n  }\n\n  .lg\\:rounded-bl-sm {\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .lg\\:rounded-tl {\n    border-top-left-radius: 0.25rem\n  }\n\n  .lg\\:rounded-tr {\n    border-top-right-radius: 0.25rem\n  }\n\n  .lg\\:rounded-br {\n    border-bottom-right-radius: 0.25rem\n  }\n\n  .lg\\:rounded-bl {\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .lg\\:rounded-tl-lg {\n    border-top-left-radius: 0.5rem\n  }\n\n  .lg\\:rounded-tr-lg {\n    border-top-right-radius: 0.5rem\n  }\n\n  .lg\\:rounded-br-lg {\n    border-bottom-right-radius: 0.5rem\n  }\n\n  .lg\\:rounded-bl-lg {\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .lg\\:rounded-tl-full {\n    border-top-left-radius: 9999px\n  }\n\n  .lg\\:rounded-tr-full {\n    border-top-right-radius: 9999px\n  }\n\n  .lg\\:rounded-br-full {\n    border-bottom-right-radius: 9999px\n  }\n\n  .lg\\:rounded-bl-full {\n    border-bottom-left-radius: 9999px\n  }\n\n  .lg\\:border-solid {\n    border-style: solid\n  }\n\n  .lg\\:border-dashed {\n    border-style: dashed\n  }\n\n  .lg\\:border-dotted {\n    border-style: dotted\n  }\n\n  .lg\\:border-double {\n    border-style: double\n  }\n\n  .lg\\:border-none {\n    border-style: none\n  }\n\n  .lg\\:border-0 {\n    border-width: 0\n  }\n\n  .lg\\:border-2 {\n    border-width: 2px\n  }\n\n  .lg\\:border-4 {\n    border-width: 4px\n  }\n\n  .lg\\:border-8 {\n    border-width: 8px\n  }\n\n  .lg\\:border {\n    border-width: 1px\n  }\n\n  .lg\\:border-t-0 {\n    border-top-width: 0\n  }\n\n  .lg\\:border-r-0 {\n    border-right-width: 0\n  }\n\n  .lg\\:border-b-0 {\n    border-bottom-width: 0\n  }\n\n  .lg\\:border-l-0 {\n    border-left-width: 0\n  }\n\n  .lg\\:border-t-2 {\n    border-top-width: 2px\n  }\n\n  .lg\\:border-r-2 {\n    border-right-width: 2px\n  }\n\n  .lg\\:border-b-2 {\n    border-bottom-width: 2px\n  }\n\n  .lg\\:border-l-2 {\n    border-left-width: 2px\n  }\n\n  .lg\\:border-t-4 {\n    border-top-width: 4px\n  }\n\n  .lg\\:border-r-4 {\n    border-right-width: 4px\n  }\n\n  .lg\\:border-b-4 {\n    border-bottom-width: 4px\n  }\n\n  .lg\\:border-l-4 {\n    border-left-width: 4px\n  }\n\n  .lg\\:border-t-8 {\n    border-top-width: 8px\n  }\n\n  .lg\\:border-r-8 {\n    border-right-width: 8px\n  }\n\n  .lg\\:border-b-8 {\n    border-bottom-width: 8px\n  }\n\n  .lg\\:border-l-8 {\n    border-left-width: 8px\n  }\n\n  .lg\\:border-t {\n    border-top-width: 1px\n  }\n\n  .lg\\:border-r {\n    border-right-width: 1px\n  }\n\n  .lg\\:border-b {\n    border-bottom-width: 1px\n  }\n\n  .lg\\:border-l {\n    border-left-width: 1px\n  }\n\n  .lg\\:cursor-auto {\n    cursor: auto\n  }\n\n  .lg\\:cursor-default {\n    cursor: default\n  }\n\n  .lg\\:cursor-pointer {\n    cursor: pointer\n  }\n\n  .lg\\:cursor-wait {\n    cursor: wait\n  }\n\n  .lg\\:cursor-text {\n    cursor: text\n  }\n\n  .lg\\:cursor-move {\n    cursor: move\n  }\n\n  .lg\\:cursor-not-allowed {\n    cursor: not-allowed\n  }\n\n  .lg\\:block {\n    display: block\n  }\n\n  .lg\\:inline-block {\n    display: inline-block\n  }\n\n  .lg\\:inline {\n    display: inline\n  }\n\n  .lg\\:flex {\n    display: flex\n  }\n\n  .lg\\:inline-flex {\n    display: inline-flex\n  }\n\n  .lg\\:table {\n    display: table\n  }\n\n  .lg\\:table-row {\n    display: table-row\n  }\n\n  .lg\\:table-cell {\n    display: table-cell\n  }\n\n  .lg\\:hidden {\n    display: none\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row\n  }\n\n  .lg\\:flex-row-reverse {\n    flex-direction: row-reverse\n  }\n\n  .lg\\:flex-col {\n    flex-direction: column\n  }\n\n  .lg\\:flex-col-reverse {\n    flex-direction: column-reverse\n  }\n\n  .lg\\:flex-wrap {\n    flex-wrap: wrap\n  }\n\n  .lg\\:flex-wrap-reverse {\n    flex-wrap: wrap-reverse\n  }\n\n  .lg\\:flex-no-wrap {\n    flex-wrap: nowrap\n  }\n\n  .lg\\:items-start {\n    align-items: flex-start\n  }\n\n  .lg\\:items-end {\n    align-items: flex-end\n  }\n\n  .lg\\:items-center {\n    align-items: center\n  }\n\n  .lg\\:items-baseline {\n    align-items: baseline\n  }\n\n  .lg\\:items-stretch {\n    align-items: stretch\n  }\n\n  .lg\\:self-auto {\n    align-self: auto\n  }\n\n  .lg\\:self-start {\n    align-self: flex-start\n  }\n\n  .lg\\:self-end {\n    align-self: flex-end\n  }\n\n  .lg\\:self-center {\n    align-self: center\n  }\n\n  .lg\\:self-stretch {\n    align-self: stretch\n  }\n\n  .lg\\:justify-start {\n    justify-content: flex-start\n  }\n\n  .lg\\:justify-end {\n    justify-content: flex-end\n  }\n\n  .lg\\:justify-center {\n    justify-content: center\n  }\n\n  .lg\\:justify-between {\n    justify-content: space-between\n  }\n\n  .lg\\:justify-around {\n    justify-content: space-around\n  }\n\n  .lg\\:content-center {\n    align-content: center\n  }\n\n  .lg\\:content-start {\n    align-content: flex-start\n  }\n\n  .lg\\:content-end {\n    align-content: flex-end\n  }\n\n  .lg\\:content-between {\n    align-content: space-between\n  }\n\n  .lg\\:content-around {\n    align-content: space-around\n  }\n\n  .lg\\:flex-1 {\n    flex: 1 1 0%\n  }\n\n  .lg\\:flex-auto {\n    flex: 1 1 auto\n  }\n\n  .lg\\:flex-initial {\n    flex: 0 1 auto\n  }\n\n  .lg\\:flex-none {\n    flex: none\n  }\n\n  .lg\\:flex-grow-0 {\n    flex-grow: 0\n  }\n\n  .lg\\:flex-grow {\n    flex-grow: 1\n  }\n\n  .lg\\:flex-shrink-0 {\n    flex-shrink: 0\n  }\n\n  .lg\\:flex-shrink {\n    flex-shrink: 1\n  }\n\n  .lg\\:order-1 {\n    order: 1\n  }\n\n  .lg\\:order-2 {\n    order: 2\n  }\n\n  .lg\\:order-3 {\n    order: 3\n  }\n\n  .lg\\:order-4 {\n    order: 4\n  }\n\n  .lg\\:order-5 {\n    order: 5\n  }\n\n  .lg\\:order-6 {\n    order: 6\n  }\n\n  .lg\\:order-7 {\n    order: 7\n  }\n\n  .lg\\:order-8 {\n    order: 8\n  }\n\n  .lg\\:order-9 {\n    order: 9\n  }\n\n  .lg\\:order-10 {\n    order: 10\n  }\n\n  .lg\\:order-11 {\n    order: 11\n  }\n\n  .lg\\:order-12 {\n    order: 12\n  }\n\n  .lg\\:order-first {\n    order: -9999\n  }\n\n  .lg\\:order-last {\n    order: 9999\n  }\n\n  .lg\\:order-none {\n    order: 0\n  }\n\n  .lg\\:float-right {\n    float: right\n  }\n\n  .lg\\:float-left {\n    float: left\n  }\n\n  .lg\\:float-none {\n    float: none\n  }\n\n  .lg\\:clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both\n  }\n\n  .lg\\:font-sans {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"\n  }\n\n  .lg\\:font-serif {\n    font-family: Georgia, Cambria, \"Times New Roman\", Times, serif\n  }\n\n  .lg\\:font-mono {\n    font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace\n  }\n\n  .lg\\:font-hairline {\n    font-weight: 100\n  }\n\n  .lg\\:font-thin {\n    font-weight: 200\n  }\n\n  .lg\\:font-light {\n    font-weight: 300\n  }\n\n  .lg\\:font-normal {\n    font-weight: 400\n  }\n\n  .lg\\:font-medium {\n    font-weight: 500\n  }\n\n  .lg\\:font-semibold {\n    font-weight: 600\n  }\n\n  .lg\\:font-bold {\n    font-weight: 700\n  }\n\n  .lg\\:font-extrabold {\n    font-weight: 800\n  }\n\n  .lg\\:font-black {\n    font-weight: 900\n  }\n\n  .lg\\:hover\\:font-hairline:hover {\n    font-weight: 100\n  }\n\n  .lg\\:hover\\:font-thin:hover {\n    font-weight: 200\n  }\n\n  .lg\\:hover\\:font-light:hover {\n    font-weight: 300\n  }\n\n  .lg\\:hover\\:font-normal:hover {\n    font-weight: 400\n  }\n\n  .lg\\:hover\\:font-medium:hover {\n    font-weight: 500\n  }\n\n  .lg\\:hover\\:font-semibold:hover {\n    font-weight: 600\n  }\n\n  .lg\\:hover\\:font-bold:hover {\n    font-weight: 700\n  }\n\n  .lg\\:hover\\:font-extrabold:hover {\n    font-weight: 800\n  }\n\n  .lg\\:hover\\:font-black:hover {\n    font-weight: 900\n  }\n\n  .lg\\:focus\\:font-hairline:focus {\n    font-weight: 100\n  }\n\n  .lg\\:focus\\:font-thin:focus {\n    font-weight: 200\n  }\n\n  .lg\\:focus\\:font-light:focus {\n    font-weight: 300\n  }\n\n  .lg\\:focus\\:font-normal:focus {\n    font-weight: 400\n  }\n\n  .lg\\:focus\\:font-medium:focus {\n    font-weight: 500\n  }\n\n  .lg\\:focus\\:font-semibold:focus {\n    font-weight: 600\n  }\n\n  .lg\\:focus\\:font-bold:focus {\n    font-weight: 700\n  }\n\n  .lg\\:focus\\:font-extrabold:focus {\n    font-weight: 800\n  }\n\n  .lg\\:focus\\:font-black:focus {\n    font-weight: 900\n  }\n\n  .lg\\:h-0 {\n    height: 0\n  }\n\n  .lg\\:h-1 {\n    height: 0.25rem\n  }\n\n  .lg\\:h-2 {\n    height: 0.5rem\n  }\n\n  .lg\\:h-3 {\n    height: 0.75rem\n  }\n\n  .lg\\:h-4 {\n    height: 1rem\n  }\n\n  .lg\\:h-5 {\n    height: 1.25rem\n  }\n\n  .lg\\:h-6 {\n    height: 1.5rem\n  }\n\n  .lg\\:h-8 {\n    height: 2rem\n  }\n\n  .lg\\:h-10 {\n    height: 2.5rem\n  }\n\n  .lg\\:h-12 {\n    height: 3rem\n  }\n\n  .lg\\:h-16 {\n    height: 4rem\n  }\n\n  .lg\\:h-20 {\n    height: 5rem\n  }\n\n  .lg\\:h-24 {\n    height: 6rem\n  }\n\n  .lg\\:h-32 {\n    height: 8rem\n  }\n\n  .lg\\:h-40 {\n    height: 10rem\n  }\n\n  .lg\\:h-48 {\n    height: 12rem\n  }\n\n  .lg\\:h-56 {\n    height: 14rem\n  }\n\n  .lg\\:h-64 {\n    height: 16rem\n  }\n\n  .lg\\:h-auto {\n    height: auto\n  }\n\n  .lg\\:h-px {\n    height: 1px\n  }\n\n  .lg\\:h-full {\n    height: 100%\n  }\n\n  .lg\\:h-screen {\n    height: 100vh\n  }\n\n  .lg\\:leading-none {\n    line-height: 1\n  }\n\n  .lg\\:leading-tight {\n    line-height: 1.25\n  }\n\n  .lg\\:leading-snug {\n    line-height: 1.375\n  }\n\n  .lg\\:leading-normal {\n    line-height: 1.5\n  }\n\n  .lg\\:leading-relaxed {\n    line-height: 1.625\n  }\n\n  .lg\\:leading-loose {\n    line-height: 2\n  }\n\n  .lg\\:list-inside {\n    list-style-position: inside\n  }\n\n  .lg\\:list-outside {\n    list-style-position: outside\n  }\n\n  .lg\\:list-none {\n    list-style-type: none\n  }\n\n  .lg\\:list-disc {\n    list-style-type: disc\n  }\n\n  .lg\\:list-decimal {\n    list-style-type: decimal\n  }\n\n  .lg\\:m-0 {\n    margin: 0\n  }\n\n  .lg\\:m-1 {\n    margin: 0.25rem\n  }\n\n  .lg\\:m-2 {\n    margin: 0.5rem\n  }\n\n  .lg\\:m-3 {\n    margin: 0.75rem\n  }\n\n  .lg\\:m-4 {\n    margin: 1rem\n  }\n\n  .lg\\:m-5 {\n    margin: 1.25rem\n  }\n\n  .lg\\:m-6 {\n    margin: 1.5rem\n  }\n\n  .lg\\:m-8 {\n    margin: 2rem\n  }\n\n  .lg\\:m-10 {\n    margin: 2.5rem\n  }\n\n  .lg\\:m-12 {\n    margin: 3rem\n  }\n\n  .lg\\:m-16 {\n    margin: 4rem\n  }\n\n  .lg\\:m-20 {\n    margin: 5rem\n  }\n\n  .lg\\:m-24 {\n    margin: 6rem\n  }\n\n  .lg\\:m-32 {\n    margin: 8rem\n  }\n\n  .lg\\:m-40 {\n    margin: 10rem\n  }\n\n  .lg\\:m-48 {\n    margin: 12rem\n  }\n\n  .lg\\:m-56 {\n    margin: 14rem\n  }\n\n  .lg\\:m-64 {\n    margin: 16rem\n  }\n\n  .lg\\:m-auto {\n    margin: auto\n  }\n\n  .lg\\:m-px {\n    margin: 1px\n  }\n\n  .lg\\:-m-1 {\n    margin: -0.25rem\n  }\n\n  .lg\\:-m-2 {\n    margin: -0.5rem\n  }\n\n  .lg\\:-m-3 {\n    margin: -0.75rem\n  }\n\n  .lg\\:-m-4 {\n    margin: -1rem\n  }\n\n  .lg\\:-m-5 {\n    margin: -1.25rem\n  }\n\n  .lg\\:-m-6 {\n    margin: -1.5rem\n  }\n\n  .lg\\:-m-8 {\n    margin: -2rem\n  }\n\n  .lg\\:-m-10 {\n    margin: -2.5rem\n  }\n\n  .lg\\:-m-12 {\n    margin: -3rem\n  }\n\n  .lg\\:-m-16 {\n    margin: -4rem\n  }\n\n  .lg\\:-m-20 {\n    margin: -5rem\n  }\n\n  .lg\\:-m-24 {\n    margin: -6rem\n  }\n\n  .lg\\:-m-32 {\n    margin: -8rem\n  }\n\n  .lg\\:-m-40 {\n    margin: -10rem\n  }\n\n  .lg\\:-m-48 {\n    margin: -12rem\n  }\n\n  .lg\\:-m-56 {\n    margin: -14rem\n  }\n\n  .lg\\:-m-64 {\n    margin: -16rem\n  }\n\n  .lg\\:-m-px {\n    margin: -1px\n  }\n\n  .lg\\:my-0 {\n    margin-top: 0;\n    margin-bottom: 0\n  }\n\n  .lg\\:mx-0 {\n    margin-left: 0;\n    margin-right: 0\n  }\n\n  .lg\\:my-1 {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem\n  }\n\n  .lg\\:mx-1 {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem\n  }\n\n  .lg\\:my-2 {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem\n  }\n\n  .lg\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem\n  }\n\n  .lg\\:my-3 {\n    margin-top: 0.75rem;\n    margin-bottom: 0.75rem\n  }\n\n  .lg\\:mx-3 {\n    margin-left: 0.75rem;\n    margin-right: 0.75rem\n  }\n\n  .lg\\:my-4 {\n    margin-top: 1rem;\n    margin-bottom: 1rem\n  }\n\n  .lg\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem\n  }\n\n  .lg\\:my-5 {\n    margin-top: 1.25rem;\n    margin-bottom: 1.25rem\n  }\n\n  .lg\\:mx-5 {\n    margin-left: 1.25rem;\n    margin-right: 1.25rem\n  }\n\n  .lg\\:my-6 {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem\n  }\n\n  .lg\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem\n  }\n\n  .lg\\:my-8 {\n    margin-top: 2rem;\n    margin-bottom: 2rem\n  }\n\n  .lg\\:mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem\n  }\n\n  .lg\\:my-10 {\n    margin-top: 2.5rem;\n    margin-bottom: 2.5rem\n  }\n\n  .lg\\:mx-10 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem\n  }\n\n  .lg\\:my-12 {\n    margin-top: 3rem;\n    margin-bottom: 3rem\n  }\n\n  .lg\\:mx-12 {\n    margin-left: 3rem;\n    margin-right: 3rem\n  }\n\n  .lg\\:my-16 {\n    margin-top: 4rem;\n    margin-bottom: 4rem\n  }\n\n  .lg\\:mx-16 {\n    margin-left: 4rem;\n    margin-right: 4rem\n  }\n\n  .lg\\:my-20 {\n    margin-top: 5rem;\n    margin-bottom: 5rem\n  }\n\n  .lg\\:mx-20 {\n    margin-left: 5rem;\n    margin-right: 5rem\n  }\n\n  .lg\\:my-24 {\n    margin-top: 6rem;\n    margin-bottom: 6rem\n  }\n\n  .lg\\:mx-24 {\n    margin-left: 6rem;\n    margin-right: 6rem\n  }\n\n  .lg\\:my-32 {\n    margin-top: 8rem;\n    margin-bottom: 8rem\n  }\n\n  .lg\\:mx-32 {\n    margin-left: 8rem;\n    margin-right: 8rem\n  }\n\n  .lg\\:my-40 {\n    margin-top: 10rem;\n    margin-bottom: 10rem\n  }\n\n  .lg\\:mx-40 {\n    margin-left: 10rem;\n    margin-right: 10rem\n  }\n\n  .lg\\:my-48 {\n    margin-top: 12rem;\n    margin-bottom: 12rem\n  }\n\n  .lg\\:mx-48 {\n    margin-left: 12rem;\n    margin-right: 12rem\n  }\n\n  .lg\\:my-56 {\n    margin-top: 14rem;\n    margin-bottom: 14rem\n  }\n\n  .lg\\:mx-56 {\n    margin-left: 14rem;\n    margin-right: 14rem\n  }\n\n  .lg\\:my-64 {\n    margin-top: 16rem;\n    margin-bottom: 16rem\n  }\n\n  .lg\\:mx-64 {\n    margin-left: 16rem;\n    margin-right: 16rem\n  }\n\n  .lg\\:my-auto {\n    margin-top: auto;\n    margin-bottom: auto\n  }\n\n  .lg\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto\n  }\n\n  .lg\\:my-px {\n    margin-top: 1px;\n    margin-bottom: 1px\n  }\n\n  .lg\\:mx-px {\n    margin-left: 1px;\n    margin-right: 1px\n  }\n\n  .lg\\:-my-1 {\n    margin-top: -0.25rem;\n    margin-bottom: -0.25rem\n  }\n\n  .lg\\:-mx-1 {\n    margin-left: -0.25rem;\n    margin-right: -0.25rem\n  }\n\n  .lg\\:-my-2 {\n    margin-top: -0.5rem;\n    margin-bottom: -0.5rem\n  }\n\n  .lg\\:-mx-2 {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem\n  }\n\n  .lg\\:-my-3 {\n    margin-top: -0.75rem;\n    margin-bottom: -0.75rem\n  }\n\n  .lg\\:-mx-3 {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem\n  }\n\n  .lg\\:-my-4 {\n    margin-top: -1rem;\n    margin-bottom: -1rem\n  }\n\n  .lg\\:-mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem\n  }\n\n  .lg\\:-my-5 {\n    margin-top: -1.25rem;\n    margin-bottom: -1.25rem\n  }\n\n  .lg\\:-mx-5 {\n    margin-left: -1.25rem;\n    margin-right: -1.25rem\n  }\n\n  .lg\\:-my-6 {\n    margin-top: -1.5rem;\n    margin-bottom: -1.5rem\n  }\n\n  .lg\\:-mx-6 {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem\n  }\n\n  .lg\\:-my-8 {\n    margin-top: -2rem;\n    margin-bottom: -2rem\n  }\n\n  .lg\\:-mx-8 {\n    margin-left: -2rem;\n    margin-right: -2rem\n  }\n\n  .lg\\:-my-10 {\n    margin-top: -2.5rem;\n    margin-bottom: -2.5rem\n  }\n\n  .lg\\:-mx-10 {\n    margin-left: -2.5rem;\n    margin-right: -2.5rem\n  }\n\n  .lg\\:-my-12 {\n    margin-top: -3rem;\n    margin-bottom: -3rem\n  }\n\n  .lg\\:-mx-12 {\n    margin-left: -3rem;\n    margin-right: -3rem\n  }\n\n  .lg\\:-my-16 {\n    margin-top: -4rem;\n    margin-bottom: -4rem\n  }\n\n  .lg\\:-mx-16 {\n    margin-left: -4rem;\n    margin-right: -4rem\n  }\n\n  .lg\\:-my-20 {\n    margin-top: -5rem;\n    margin-bottom: -5rem\n  }\n\n  .lg\\:-mx-20 {\n    margin-left: -5rem;\n    margin-right: -5rem\n  }\n\n  .lg\\:-my-24 {\n    margin-top: -6rem;\n    margin-bottom: -6rem\n  }\n\n  .lg\\:-mx-24 {\n    margin-left: -6rem;\n    margin-right: -6rem\n  }\n\n  .lg\\:-my-32 {\n    margin-top: -8rem;\n    margin-bottom: -8rem\n  }\n\n  .lg\\:-mx-32 {\n    margin-left: -8rem;\n    margin-right: -8rem\n  }\n\n  .lg\\:-my-40 {\n    margin-top: -10rem;\n    margin-bottom: -10rem\n  }\n\n  .lg\\:-mx-40 {\n    margin-left: -10rem;\n    margin-right: -10rem\n  }\n\n  .lg\\:-my-48 {\n    margin-top: -12rem;\n    margin-bottom: -12rem\n  }\n\n  .lg\\:-mx-48 {\n    margin-left: -12rem;\n    margin-right: -12rem\n  }\n\n  .lg\\:-my-56 {\n    margin-top: -14rem;\n    margin-bottom: -14rem\n  }\n\n  .lg\\:-mx-56 {\n    margin-left: -14rem;\n    margin-right: -14rem\n  }\n\n  .lg\\:-my-64 {\n    margin-top: -16rem;\n    margin-bottom: -16rem\n  }\n\n  .lg\\:-mx-64 {\n    margin-left: -16rem;\n    margin-right: -16rem\n  }\n\n  .lg\\:-my-px {\n    margin-top: -1px;\n    margin-bottom: -1px\n  }\n\n  .lg\\:-mx-px {\n    margin-left: -1px;\n    margin-right: -1px\n  }\n\n  .lg\\:mt-0 {\n    margin-top: 0\n  }\n\n  .lg\\:mr-0 {\n    margin-right: 0\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0\n  }\n\n  .lg\\:ml-0 {\n    margin-left: 0\n  }\n\n  .lg\\:mt-1 {\n    margin-top: 0.25rem\n  }\n\n  .lg\\:mr-1 {\n    margin-right: 0.25rem\n  }\n\n  .lg\\:mb-1 {\n    margin-bottom: 0.25rem\n  }\n\n  .lg\\:ml-1 {\n    margin-left: 0.25rem\n  }\n\n  .lg\\:mt-2 {\n    margin-top: 0.5rem\n  }\n\n  .lg\\:mr-2 {\n    margin-right: 0.5rem\n  }\n\n  .lg\\:mb-2 {\n    margin-bottom: 0.5rem\n  }\n\n  .lg\\:ml-2 {\n    margin-left: 0.5rem\n  }\n\n  .lg\\:mt-3 {\n    margin-top: 0.75rem\n  }\n\n  .lg\\:mr-3 {\n    margin-right: 0.75rem\n  }\n\n  .lg\\:mb-3 {\n    margin-bottom: 0.75rem\n  }\n\n  .lg\\:ml-3 {\n    margin-left: 0.75rem\n  }\n\n  .lg\\:mt-4 {\n    margin-top: 1rem\n  }\n\n  .lg\\:mr-4 {\n    margin-right: 1rem\n  }\n\n  .lg\\:mb-4 {\n    margin-bottom: 1rem\n  }\n\n  .lg\\:ml-4 {\n    margin-left: 1rem\n  }\n\n  .lg\\:mt-5 {\n    margin-top: 1.25rem\n  }\n\n  .lg\\:mr-5 {\n    margin-right: 1.25rem\n  }\n\n  .lg\\:mb-5 {\n    margin-bottom: 1.25rem\n  }\n\n  .lg\\:ml-5 {\n    margin-left: 1.25rem\n  }\n\n  .lg\\:mt-6 {\n    margin-top: 1.5rem\n  }\n\n  .lg\\:mr-6 {\n    margin-right: 1.5rem\n  }\n\n  .lg\\:mb-6 {\n    margin-bottom: 1.5rem\n  }\n\n  .lg\\:ml-6 {\n    margin-left: 1.5rem\n  }\n\n  .lg\\:mt-8 {\n    margin-top: 2rem\n  }\n\n  .lg\\:mr-8 {\n    margin-right: 2rem\n  }\n\n  .lg\\:mb-8 {\n    margin-bottom: 2rem\n  }\n\n  .lg\\:ml-8 {\n    margin-left: 2rem\n  }\n\n  .lg\\:mt-10 {\n    margin-top: 2.5rem\n  }\n\n  .lg\\:mr-10 {\n    margin-right: 2.5rem\n  }\n\n  .lg\\:mb-10 {\n    margin-bottom: 2.5rem\n  }\n\n  .lg\\:ml-10 {\n    margin-left: 2.5rem\n  }\n\n  .lg\\:mt-12 {\n    margin-top: 3rem\n  }\n\n  .lg\\:mr-12 {\n    margin-right: 3rem\n  }\n\n  .lg\\:mb-12 {\n    margin-bottom: 3rem\n  }\n\n  .lg\\:ml-12 {\n    margin-left: 3rem\n  }\n\n  .lg\\:mt-16 {\n    margin-top: 4rem\n  }\n\n  .lg\\:mr-16 {\n    margin-right: 4rem\n  }\n\n  .lg\\:mb-16 {\n    margin-bottom: 4rem\n  }\n\n  .lg\\:ml-16 {\n    margin-left: 4rem\n  }\n\n  .lg\\:mt-20 {\n    margin-top: 5rem\n  }\n\n  .lg\\:mr-20 {\n    margin-right: 5rem\n  }\n\n  .lg\\:mb-20 {\n    margin-bottom: 5rem\n  }\n\n  .lg\\:ml-20 {\n    margin-left: 5rem\n  }\n\n  .lg\\:mt-24 {\n    margin-top: 6rem\n  }\n\n  .lg\\:mr-24 {\n    margin-right: 6rem\n  }\n\n  .lg\\:mb-24 {\n    margin-bottom: 6rem\n  }\n\n  .lg\\:ml-24 {\n    margin-left: 6rem\n  }\n\n  .lg\\:mt-32 {\n    margin-top: 8rem\n  }\n\n  .lg\\:mr-32 {\n    margin-right: 8rem\n  }\n\n  .lg\\:mb-32 {\n    margin-bottom: 8rem\n  }\n\n  .lg\\:ml-32 {\n    margin-left: 8rem\n  }\n\n  .lg\\:mt-40 {\n    margin-top: 10rem\n  }\n\n  .lg\\:mr-40 {\n    margin-right: 10rem\n  }\n\n  .lg\\:mb-40 {\n    margin-bottom: 10rem\n  }\n\n  .lg\\:ml-40 {\n    margin-left: 10rem\n  }\n\n  .lg\\:mt-48 {\n    margin-top: 12rem\n  }\n\n  .lg\\:mr-48 {\n    margin-right: 12rem\n  }\n\n  .lg\\:mb-48 {\n    margin-bottom: 12rem\n  }\n\n  .lg\\:ml-48 {\n    margin-left: 12rem\n  }\n\n  .lg\\:mt-56 {\n    margin-top: 14rem\n  }\n\n  .lg\\:mr-56 {\n    margin-right: 14rem\n  }\n\n  .lg\\:mb-56 {\n    margin-bottom: 14rem\n  }\n\n  .lg\\:ml-56 {\n    margin-left: 14rem\n  }\n\n  .lg\\:mt-64 {\n    margin-top: 16rem\n  }\n\n  .lg\\:mr-64 {\n    margin-right: 16rem\n  }\n\n  .lg\\:mb-64 {\n    margin-bottom: 16rem\n  }\n\n  .lg\\:ml-64 {\n    margin-left: 16rem\n  }\n\n  .lg\\:mt-auto {\n    margin-top: auto\n  }\n\n  .lg\\:mr-auto {\n    margin-right: auto\n  }\n\n  .lg\\:mb-auto {\n    margin-bottom: auto\n  }\n\n  .lg\\:ml-auto {\n    margin-left: auto\n  }\n\n  .lg\\:mt-px {\n    margin-top: 1px\n  }\n\n  .lg\\:mr-px {\n    margin-right: 1px\n  }\n\n  .lg\\:mb-px {\n    margin-bottom: 1px\n  }\n\n  .lg\\:ml-px {\n    margin-left: 1px\n  }\n\n  .lg\\:-mt-1 {\n    margin-top: -0.25rem\n  }\n\n  .lg\\:-mr-1 {\n    margin-right: -0.25rem\n  }\n\n  .lg\\:-mb-1 {\n    margin-bottom: -0.25rem\n  }\n\n  .lg\\:-ml-1 {\n    margin-left: -0.25rem\n  }\n\n  .lg\\:-mt-2 {\n    margin-top: -0.5rem\n  }\n\n  .lg\\:-mr-2 {\n    margin-right: -0.5rem\n  }\n\n  .lg\\:-mb-2 {\n    margin-bottom: -0.5rem\n  }\n\n  .lg\\:-ml-2 {\n    margin-left: -0.5rem\n  }\n\n  .lg\\:-mt-3 {\n    margin-top: -0.75rem\n  }\n\n  .lg\\:-mr-3 {\n    margin-right: -0.75rem\n  }\n\n  .lg\\:-mb-3 {\n    margin-bottom: -0.75rem\n  }\n\n  .lg\\:-ml-3 {\n    margin-left: -0.75rem\n  }\n\n  .lg\\:-mt-4 {\n    margin-top: -1rem\n  }\n\n  .lg\\:-mr-4 {\n    margin-right: -1rem\n  }\n\n  .lg\\:-mb-4 {\n    margin-bottom: -1rem\n  }\n\n  .lg\\:-ml-4 {\n    margin-left: -1rem\n  }\n\n  .lg\\:-mt-5 {\n    margin-top: -1.25rem\n  }\n\n  .lg\\:-mr-5 {\n    margin-right: -1.25rem\n  }\n\n  .lg\\:-mb-5 {\n    margin-bottom: -1.25rem\n  }\n\n  .lg\\:-ml-5 {\n    margin-left: -1.25rem\n  }\n\n  .lg\\:-mt-6 {\n    margin-top: -1.5rem\n  }\n\n  .lg\\:-mr-6 {\n    margin-right: -1.5rem\n  }\n\n  .lg\\:-mb-6 {\n    margin-bottom: -1.5rem\n  }\n\n  .lg\\:-ml-6 {\n    margin-left: -1.5rem\n  }\n\n  .lg\\:-mt-8 {\n    margin-top: -2rem\n  }\n\n  .lg\\:-mr-8 {\n    margin-right: -2rem\n  }\n\n  .lg\\:-mb-8 {\n    margin-bottom: -2rem\n  }\n\n  .lg\\:-ml-8 {\n    margin-left: -2rem\n  }\n\n  .lg\\:-mt-10 {\n    margin-top: -2.5rem\n  }\n\n  .lg\\:-mr-10 {\n    margin-right: -2.5rem\n  }\n\n  .lg\\:-mb-10 {\n    margin-bottom: -2.5rem\n  }\n\n  .lg\\:-ml-10 {\n    margin-left: -2.5rem\n  }\n\n  .lg\\:-mt-12 {\n    margin-top: -3rem\n  }\n\n  .lg\\:-mr-12 {\n    margin-right: -3rem\n  }\n\n  .lg\\:-mb-12 {\n    margin-bottom: -3rem\n  }\n\n  .lg\\:-ml-12 {\n    margin-left: -3rem\n  }\n\n  .lg\\:-mt-16 {\n    margin-top: -4rem\n  }\n\n  .lg\\:-mr-16 {\n    margin-right: -4rem\n  }\n\n  .lg\\:-mb-16 {\n    margin-bottom: -4rem\n  }\n\n  .lg\\:-ml-16 {\n    margin-left: -4rem\n  }\n\n  .lg\\:-mt-20 {\n    margin-top: -5rem\n  }\n\n  .lg\\:-mr-20 {\n    margin-right: -5rem\n  }\n\n  .lg\\:-mb-20 {\n    margin-bottom: -5rem\n  }\n\n  .lg\\:-ml-20 {\n    margin-left: -5rem\n  }\n\n  .lg\\:-mt-24 {\n    margin-top: -6rem\n  }\n\n  .lg\\:-mr-24 {\n    margin-right: -6rem\n  }\n\n  .lg\\:-mb-24 {\n    margin-bottom: -6rem\n  }\n\n  .lg\\:-ml-24 {\n    margin-left: -6rem\n  }\n\n  .lg\\:-mt-32 {\n    margin-top: -8rem\n  }\n\n  .lg\\:-mr-32 {\n    margin-right: -8rem\n  }\n\n  .lg\\:-mb-32 {\n    margin-bottom: -8rem\n  }\n\n  .lg\\:-ml-32 {\n    margin-left: -8rem\n  }\n\n  .lg\\:-mt-40 {\n    margin-top: -10rem\n  }\n\n  .lg\\:-mr-40 {\n    margin-right: -10rem\n  }\n\n  .lg\\:-mb-40 {\n    margin-bottom: -10rem\n  }\n\n  .lg\\:-ml-40 {\n    margin-left: -10rem\n  }\n\n  .lg\\:-mt-48 {\n    margin-top: -12rem\n  }\n\n  .lg\\:-mr-48 {\n    margin-right: -12rem\n  }\n\n  .lg\\:-mb-48 {\n    margin-bottom: -12rem\n  }\n\n  .lg\\:-ml-48 {\n    margin-left: -12rem\n  }\n\n  .lg\\:-mt-56 {\n    margin-top: -14rem\n  }\n\n  .lg\\:-mr-56 {\n    margin-right: -14rem\n  }\n\n  .lg\\:-mb-56 {\n    margin-bottom: -14rem\n  }\n\n  .lg\\:-ml-56 {\n    margin-left: -14rem\n  }\n\n  .lg\\:-mt-64 {\n    margin-top: -16rem\n  }\n\n  .lg\\:-mr-64 {\n    margin-right: -16rem\n  }\n\n  .lg\\:-mb-64 {\n    margin-bottom: -16rem\n  }\n\n  .lg\\:-ml-64 {\n    margin-left: -16rem\n  }\n\n  .lg\\:-mt-px {\n    margin-top: -1px\n  }\n\n  .lg\\:-mr-px {\n    margin-right: -1px\n  }\n\n  .lg\\:-mb-px {\n    margin-bottom: -1px\n  }\n\n  .lg\\:-ml-px {\n    margin-left: -1px\n  }\n\n  .lg\\:max-h-full {\n    max-height: 100%\n  }\n\n  .lg\\:max-h-screen {\n    max-height: 100vh\n  }\n\n  .lg\\:max-w-xs {\n    max-width: 20rem\n  }\n\n  .lg\\:max-w-sm {\n    max-width: 24rem\n  }\n\n  .lg\\:max-w-md {\n    max-width: 28rem\n  }\n\n  .lg\\:max-w-lg {\n    max-width: 32rem\n  }\n\n  .lg\\:max-w-xl {\n    max-width: 36rem\n  }\n\n  .lg\\:max-w-2xl {\n    max-width: 42rem\n  }\n\n  .lg\\:max-w-3xl {\n    max-width: 48rem\n  }\n\n  .lg\\:max-w-4xl {\n    max-width: 56rem\n  }\n\n  .lg\\:max-w-5xl {\n    max-width: 64rem\n  }\n\n  .lg\\:max-w-6xl {\n    max-width: 72rem\n  }\n\n  .lg\\:max-w-full {\n    max-width: 100%\n  }\n\n  .lg\\:min-h-0 {\n    min-height: 0\n  }\n\n  .lg\\:min-h-full {\n    min-height: 100%\n  }\n\n  .lg\\:min-h-screen {\n    min-height: 100vh\n  }\n\n  .lg\\:min-w-0 {\n    min-width: 0\n  }\n\n  .lg\\:min-w-full {\n    min-width: 100%\n  }\n\n  .lg\\:object-contain {\n    -o-object-fit: contain;\n       object-fit: contain\n  }\n\n  .lg\\:object-cover {\n    -o-object-fit: cover;\n       object-fit: cover\n  }\n\n  .lg\\:object-fill {\n    -o-object-fit: fill;\n       object-fit: fill\n  }\n\n  .lg\\:object-none {\n    -o-object-fit: none;\n       object-fit: none\n  }\n\n  .lg\\:object-scale-down {\n    -o-object-fit: scale-down;\n       object-fit: scale-down\n  }\n\n  .lg\\:object-bottom {\n    -o-object-position: bottom;\n       object-position: bottom\n  }\n\n  .lg\\:object-center {\n    -o-object-position: center;\n       object-position: center\n  }\n\n  .lg\\:object-left {\n    -o-object-position: left;\n       object-position: left\n  }\n\n  .lg\\:object-left-bottom {\n    -o-object-position: left bottom;\n       object-position: left bottom\n  }\n\n  .lg\\:object-left-top {\n    -o-object-position: left top;\n       object-position: left top\n  }\n\n  .lg\\:object-right {\n    -o-object-position: right;\n       object-position: right\n  }\n\n  .lg\\:object-right-bottom {\n    -o-object-position: right bottom;\n       object-position: right bottom\n  }\n\n  .lg\\:object-right-top {\n    -o-object-position: right top;\n       object-position: right top\n  }\n\n  .lg\\:object-top {\n    -o-object-position: top;\n       object-position: top\n  }\n\n  .lg\\:opacity-0 {\n    opacity: 0\n  }\n\n  .lg\\:opacity-25 {\n    opacity: 0.25\n  }\n\n  .lg\\:opacity-50 {\n    opacity: 0.5\n  }\n\n  .lg\\:opacity-75 {\n    opacity: 0.75\n  }\n\n  .lg\\:opacity-100 {\n    opacity: 1\n  }\n\n  .lg\\:hover\\:opacity-0:hover {\n    opacity: 0\n  }\n\n  .lg\\:hover\\:opacity-25:hover {\n    opacity: 0.25\n  }\n\n  .lg\\:hover\\:opacity-50:hover {\n    opacity: 0.5\n  }\n\n  .lg\\:hover\\:opacity-75:hover {\n    opacity: 0.75\n  }\n\n  .lg\\:hover\\:opacity-100:hover {\n    opacity: 1\n  }\n\n  .lg\\:focus\\:opacity-0:focus {\n    opacity: 0\n  }\n\n  .lg\\:focus\\:opacity-25:focus {\n    opacity: 0.25\n  }\n\n  .lg\\:focus\\:opacity-50:focus {\n    opacity: 0.5\n  }\n\n  .lg\\:focus\\:opacity-75:focus {\n    opacity: 0.75\n  }\n\n  .lg\\:focus\\:opacity-100:focus {\n    opacity: 1\n  }\n\n  .lg\\:outline-none {\n    outline: 0\n  }\n\n  .lg\\:focus\\:outline-none:focus {\n    outline: 0\n  }\n\n  .lg\\:overflow-auto {\n    overflow: auto\n  }\n\n  .lg\\:overflow-hidden {\n    overflow: hidden\n  }\n\n  .lg\\:overflow-visible {\n    overflow: visible\n  }\n\n  .lg\\:overflow-scroll {\n    overflow: scroll\n  }\n\n  .lg\\:overflow-x-auto {\n    overflow-x: auto\n  }\n\n  .lg\\:overflow-y-auto {\n    overflow-y: auto\n  }\n\n  .lg\\:overflow-x-hidden {\n    overflow-x: hidden\n  }\n\n  .lg\\:overflow-y-hidden {\n    overflow-y: hidden\n  }\n\n  .lg\\:overflow-x-visible {\n    overflow-x: visible\n  }\n\n  .lg\\:overflow-y-visible {\n    overflow-y: visible\n  }\n\n  .lg\\:overflow-x-scroll {\n    overflow-x: scroll\n  }\n\n  .lg\\:overflow-y-scroll {\n    overflow-y: scroll\n  }\n\n  .lg\\:scrolling-touch {\n    -webkit-overflow-scrolling: touch\n  }\n\n  .lg\\:scrolling-auto {\n    -webkit-overflow-scrolling: auto\n  }\n\n  .lg\\:p-0 {\n    padding: 0\n  }\n\n  .lg\\:p-1 {\n    padding: 0.25rem\n  }\n\n  .lg\\:p-2 {\n    padding: 0.5rem\n  }\n\n  .lg\\:p-3 {\n    padding: 0.75rem\n  }\n\n  .lg\\:p-4 {\n    padding: 1rem\n  }\n\n  .lg\\:p-5 {\n    padding: 1.25rem\n  }\n\n  .lg\\:p-6 {\n    padding: 1.5rem\n  }\n\n  .lg\\:p-8 {\n    padding: 2rem\n  }\n\n  .lg\\:p-10 {\n    padding: 2.5rem\n  }\n\n  .lg\\:p-12 {\n    padding: 3rem\n  }\n\n  .lg\\:p-16 {\n    padding: 4rem\n  }\n\n  .lg\\:p-20 {\n    padding: 5rem\n  }\n\n  .lg\\:p-24 {\n    padding: 6rem\n  }\n\n  .lg\\:p-32 {\n    padding: 8rem\n  }\n\n  .lg\\:p-40 {\n    padding: 10rem\n  }\n\n  .lg\\:p-48 {\n    padding: 12rem\n  }\n\n  .lg\\:p-56 {\n    padding: 14rem\n  }\n\n  .lg\\:p-64 {\n    padding: 16rem\n  }\n\n  .lg\\:p-px {\n    padding: 1px\n  }\n\n  .lg\\:py-0 {\n    padding-top: 0;\n    padding-bottom: 0\n  }\n\n  .lg\\:px-0 {\n    padding-left: 0;\n    padding-right: 0\n  }\n\n  .lg\\:py-1 {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem\n  }\n\n  .lg\\:px-1 {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem\n  }\n\n  .lg\\:py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem\n  }\n\n  .lg\\:px-2 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem\n  }\n\n  .lg\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem\n  }\n\n  .lg\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem\n  }\n\n  .lg\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem\n  }\n\n  .lg\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem\n  }\n\n  .lg\\:py-5 {\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem\n  }\n\n  .lg\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem\n  }\n\n  .lg\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem\n  }\n\n  .lg\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem\n  }\n\n  .lg\\:py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem\n  }\n\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem\n  }\n\n  .lg\\:py-10 {\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem\n  }\n\n  .lg\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem\n  }\n\n  .lg\\:py-12 {\n    padding-top: 3rem;\n    padding-bottom: 3rem\n  }\n\n  .lg\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem\n  }\n\n  .lg\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem\n  }\n\n  .lg\\:px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem\n  }\n\n  .lg\\:py-20 {\n    padding-top: 5rem;\n    padding-bottom: 5rem\n  }\n\n  .lg\\:px-20 {\n    padding-left: 5rem;\n    padding-right: 5rem\n  }\n\n  .lg\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem\n  }\n\n  .lg\\:px-24 {\n    padding-left: 6rem;\n    padding-right: 6rem\n  }\n\n  .lg\\:py-32 {\n    padding-top: 8rem;\n    padding-bottom: 8rem\n  }\n\n  .lg\\:px-32 {\n    padding-left: 8rem;\n    padding-right: 8rem\n  }\n\n  .lg\\:py-40 {\n    padding-top: 10rem;\n    padding-bottom: 10rem\n  }\n\n  .lg\\:px-40 {\n    padding-left: 10rem;\n    padding-right: 10rem\n  }\n\n  .lg\\:py-48 {\n    padding-top: 12rem;\n    padding-bottom: 12rem\n  }\n\n  .lg\\:px-48 {\n    padding-left: 12rem;\n    padding-right: 12rem\n  }\n\n  .lg\\:py-56 {\n    padding-top: 14rem;\n    padding-bottom: 14rem\n  }\n\n  .lg\\:px-56 {\n    padding-left: 14rem;\n    padding-right: 14rem\n  }\n\n  .lg\\:py-64 {\n    padding-top: 16rem;\n    padding-bottom: 16rem\n  }\n\n  .lg\\:px-64 {\n    padding-left: 16rem;\n    padding-right: 16rem\n  }\n\n  .lg\\:py-px {\n    padding-top: 1px;\n    padding-bottom: 1px\n  }\n\n  .lg\\:px-px {\n    padding-left: 1px;\n    padding-right: 1px\n  }\n\n  .lg\\:pt-0 {\n    padding-top: 0\n  }\n\n  .lg\\:pr-0 {\n    padding-right: 0\n  }\n\n  .lg\\:pb-0 {\n    padding-bottom: 0\n  }\n\n  .lg\\:pl-0 {\n    padding-left: 0\n  }\n\n  .lg\\:pt-1 {\n    padding-top: 0.25rem\n  }\n\n  .lg\\:pr-1 {\n    padding-right: 0.25rem\n  }\n\n  .lg\\:pb-1 {\n    padding-bottom: 0.25rem\n  }\n\n  .lg\\:pl-1 {\n    padding-left: 0.25rem\n  }\n\n  .lg\\:pt-2 {\n    padding-top: 0.5rem\n  }\n\n  .lg\\:pr-2 {\n    padding-right: 0.5rem\n  }\n\n  .lg\\:pb-2 {\n    padding-bottom: 0.5rem\n  }\n\n  .lg\\:pl-2 {\n    padding-left: 0.5rem\n  }\n\n  .lg\\:pt-3 {\n    padding-top: 0.75rem\n  }\n\n  .lg\\:pr-3 {\n    padding-right: 0.75rem\n  }\n\n  .lg\\:pb-3 {\n    padding-bottom: 0.75rem\n  }\n\n  .lg\\:pl-3 {\n    padding-left: 0.75rem\n  }\n\n  .lg\\:pt-4 {\n    padding-top: 1rem\n  }\n\n  .lg\\:pr-4 {\n    padding-right: 1rem\n  }\n\n  .lg\\:pb-4 {\n    padding-bottom: 1rem\n  }\n\n  .lg\\:pl-4 {\n    padding-left: 1rem\n  }\n\n  .lg\\:pt-5 {\n    padding-top: 1.25rem\n  }\n\n  .lg\\:pr-5 {\n    padding-right: 1.25rem\n  }\n\n  .lg\\:pb-5 {\n    padding-bottom: 1.25rem\n  }\n\n  .lg\\:pl-5 {\n    padding-left: 1.25rem\n  }\n\n  .lg\\:pt-6 {\n    padding-top: 1.5rem\n  }\n\n  .lg\\:pr-6 {\n    padding-right: 1.5rem\n  }\n\n  .lg\\:pb-6 {\n    padding-bottom: 1.5rem\n  }\n\n  .lg\\:pl-6 {\n    padding-left: 1.5rem\n  }\n\n  .lg\\:pt-8 {\n    padding-top: 2rem\n  }\n\n  .lg\\:pr-8 {\n    padding-right: 2rem\n  }\n\n  .lg\\:pb-8 {\n    padding-bottom: 2rem\n  }\n\n  .lg\\:pl-8 {\n    padding-left: 2rem\n  }\n\n  .lg\\:pt-10 {\n    padding-top: 2.5rem\n  }\n\n  .lg\\:pr-10 {\n    padding-right: 2.5rem\n  }\n\n  .lg\\:pb-10 {\n    padding-bottom: 2.5rem\n  }\n\n  .lg\\:pl-10 {\n    padding-left: 2.5rem\n  }\n\n  .lg\\:pt-12 {\n    padding-top: 3rem\n  }\n\n  .lg\\:pr-12 {\n    padding-right: 3rem\n  }\n\n  .lg\\:pb-12 {\n    padding-bottom: 3rem\n  }\n\n  .lg\\:pl-12 {\n    padding-left: 3rem\n  }\n\n  .lg\\:pt-16 {\n    padding-top: 4rem\n  }\n\n  .lg\\:pr-16 {\n    padding-right: 4rem\n  }\n\n  .lg\\:pb-16 {\n    padding-bottom: 4rem\n  }\n\n  .lg\\:pl-16 {\n    padding-left: 4rem\n  }\n\n  .lg\\:pt-20 {\n    padding-top: 5rem\n  }\n\n  .lg\\:pr-20 {\n    padding-right: 5rem\n  }\n\n  .lg\\:pb-20 {\n    padding-bottom: 5rem\n  }\n\n  .lg\\:pl-20 {\n    padding-left: 5rem\n  }\n\n  .lg\\:pt-24 {\n    padding-top: 6rem\n  }\n\n  .lg\\:pr-24 {\n    padding-right: 6rem\n  }\n\n  .lg\\:pb-24 {\n    padding-bottom: 6rem\n  }\n\n  .lg\\:pl-24 {\n    padding-left: 6rem\n  }\n\n  .lg\\:pt-32 {\n    padding-top: 8rem\n  }\n\n  .lg\\:pr-32 {\n    padding-right: 8rem\n  }\n\n  .lg\\:pb-32 {\n    padding-bottom: 8rem\n  }\n\n  .lg\\:pl-32 {\n    padding-left: 8rem\n  }\n\n  .lg\\:pt-40 {\n    padding-top: 10rem\n  }\n\n  .lg\\:pr-40 {\n    padding-right: 10rem\n  }\n\n  .lg\\:pb-40 {\n    padding-bottom: 10rem\n  }\n\n  .lg\\:pl-40 {\n    padding-left: 10rem\n  }\n\n  .lg\\:pt-48 {\n    padding-top: 12rem\n  }\n\n  .lg\\:pr-48 {\n    padding-right: 12rem\n  }\n\n  .lg\\:pb-48 {\n    padding-bottom: 12rem\n  }\n\n  .lg\\:pl-48 {\n    padding-left: 12rem\n  }\n\n  .lg\\:pt-56 {\n    padding-top: 14rem\n  }\n\n  .lg\\:pr-56 {\n    padding-right: 14rem\n  }\n\n  .lg\\:pb-56 {\n    padding-bottom: 14rem\n  }\n\n  .lg\\:pl-56 {\n    padding-left: 14rem\n  }\n\n  .lg\\:pt-64 {\n    padding-top: 16rem\n  }\n\n  .lg\\:pr-64 {\n    padding-right: 16rem\n  }\n\n  .lg\\:pb-64 {\n    padding-bottom: 16rem\n  }\n\n  .lg\\:pl-64 {\n    padding-left: 16rem\n  }\n\n  .lg\\:pt-px {\n    padding-top: 1px\n  }\n\n  .lg\\:pr-px {\n    padding-right: 1px\n  }\n\n  .lg\\:pb-px {\n    padding-bottom: 1px\n  }\n\n  .lg\\:pl-px {\n    padding-left: 1px\n  }\n\n  .lg\\:placeholder-transparent:-ms-input-placeholder {\n    color: transparent\n  }\n\n  .lg\\:placeholder-transparent::-ms-input-placeholder {\n    color: transparent\n  }\n\n  .lg\\:placeholder-transparent::placeholder {\n    color: transparent\n  }\n\n  .lg\\:placeholder-black:-ms-input-placeholder {\n    color: #000\n  }\n\n  .lg\\:placeholder-black::-ms-input-placeholder {\n    color: #000\n  }\n\n  .lg\\:placeholder-black::placeholder {\n    color: #000\n  }\n\n  .lg\\:placeholder-white:-ms-input-placeholder {\n    color: #fff\n  }\n\n  .lg\\:placeholder-white::-ms-input-placeholder {\n    color: #fff\n  }\n\n  .lg\\:placeholder-white::placeholder {\n    color: #fff\n  }\n\n  .lg\\:placeholder-gray-100:-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .lg\\:placeholder-gray-100::-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .lg\\:placeholder-gray-100::placeholder {\n    color: #f7fafc\n  }\n\n  .lg\\:placeholder-gray-200:-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .lg\\:placeholder-gray-200::-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .lg\\:placeholder-gray-200::placeholder {\n    color: #edf2f7\n  }\n\n  .lg\\:placeholder-gray-300:-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .lg\\:placeholder-gray-300::-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .lg\\:placeholder-gray-300::placeholder {\n    color: #e2e8f0\n  }\n\n  .lg\\:placeholder-gray-400:-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .lg\\:placeholder-gray-400::-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .lg\\:placeholder-gray-400::placeholder {\n    color: #cbd5e0\n  }\n\n  .lg\\:placeholder-gray-500:-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .lg\\:placeholder-gray-500::-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .lg\\:placeholder-gray-500::placeholder {\n    color: #a0aec0\n  }\n\n  .lg\\:placeholder-gray-600:-ms-input-placeholder {\n    color: #718096\n  }\n\n  .lg\\:placeholder-gray-600::-ms-input-placeholder {\n    color: #718096\n  }\n\n  .lg\\:placeholder-gray-600::placeholder {\n    color: #718096\n  }\n\n  .lg\\:placeholder-gray-700:-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .lg\\:placeholder-gray-700::-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .lg\\:placeholder-gray-700::placeholder {\n    color: #4a5568\n  }\n\n  .lg\\:placeholder-gray-800:-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .lg\\:placeholder-gray-800::-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .lg\\:placeholder-gray-800::placeholder {\n    color: #2d3748\n  }\n\n  .lg\\:placeholder-gray-900:-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .lg\\:placeholder-gray-900::-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .lg\\:placeholder-gray-900::placeholder {\n    color: #1a202c\n  }\n\n  .lg\\:placeholder-red-100:-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .lg\\:placeholder-red-100::-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .lg\\:placeholder-red-100::placeholder {\n    color: #fff5f5\n  }\n\n  .lg\\:placeholder-red-200:-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .lg\\:placeholder-red-200::-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .lg\\:placeholder-red-200::placeholder {\n    color: #fed7d7\n  }\n\n  .lg\\:placeholder-red-300:-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .lg\\:placeholder-red-300::-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .lg\\:placeholder-red-300::placeholder {\n    color: #feb2b2\n  }\n\n  .lg\\:placeholder-red-400:-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .lg\\:placeholder-red-400::-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .lg\\:placeholder-red-400::placeholder {\n    color: #fc8181\n  }\n\n  .lg\\:placeholder-red-500:-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .lg\\:placeholder-red-500::-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .lg\\:placeholder-red-500::placeholder {\n    color: #f56565\n  }\n\n  .lg\\:placeholder-red-600:-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .lg\\:placeholder-red-600::-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .lg\\:placeholder-red-600::placeholder {\n    color: #e53e3e\n  }\n\n  .lg\\:placeholder-red-700:-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .lg\\:placeholder-red-700::-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .lg\\:placeholder-red-700::placeholder {\n    color: #c53030\n  }\n\n  .lg\\:placeholder-red-800:-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .lg\\:placeholder-red-800::-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .lg\\:placeholder-red-800::placeholder {\n    color: #9b2c2c\n  }\n\n  .lg\\:placeholder-red-900:-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .lg\\:placeholder-red-900::-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .lg\\:placeholder-red-900::placeholder {\n    color: #742a2a\n  }\n\n  .lg\\:placeholder-orange-100:-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .lg\\:placeholder-orange-100::-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .lg\\:placeholder-orange-100::placeholder {\n    color: #fffaf0\n  }\n\n  .lg\\:placeholder-orange-200:-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .lg\\:placeholder-orange-200::-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .lg\\:placeholder-orange-200::placeholder {\n    color: #feebc8\n  }\n\n  .lg\\:placeholder-orange-300:-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .lg\\:placeholder-orange-300::-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .lg\\:placeholder-orange-300::placeholder {\n    color: #fbd38d\n  }\n\n  .lg\\:placeholder-orange-400:-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .lg\\:placeholder-orange-400::-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .lg\\:placeholder-orange-400::placeholder {\n    color: #f6ad55\n  }\n\n  .lg\\:placeholder-orange-500:-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .lg\\:placeholder-orange-500::-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .lg\\:placeholder-orange-500::placeholder {\n    color: #ed8936\n  }\n\n  .lg\\:placeholder-orange-600:-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .lg\\:placeholder-orange-600::-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .lg\\:placeholder-orange-600::placeholder {\n    color: #dd6b20\n  }\n\n  .lg\\:placeholder-orange-700:-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .lg\\:placeholder-orange-700::-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .lg\\:placeholder-orange-700::placeholder {\n    color: #c05621\n  }\n\n  .lg\\:placeholder-orange-800:-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .lg\\:placeholder-orange-800::-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .lg\\:placeholder-orange-800::placeholder {\n    color: #9c4221\n  }\n\n  .lg\\:placeholder-orange-900:-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .lg\\:placeholder-orange-900::-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .lg\\:placeholder-orange-900::placeholder {\n    color: #7b341e\n  }\n\n  .lg\\:placeholder-yellow-100:-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .lg\\:placeholder-yellow-100::-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .lg\\:placeholder-yellow-100::placeholder {\n    color: #fffff0\n  }\n\n  .lg\\:placeholder-yellow-200:-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .lg\\:placeholder-yellow-200::-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .lg\\:placeholder-yellow-200::placeholder {\n    color: #fefcbf\n  }\n\n  .lg\\:placeholder-yellow-300:-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .lg\\:placeholder-yellow-300::-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .lg\\:placeholder-yellow-300::placeholder {\n    color: #faf089\n  }\n\n  .lg\\:placeholder-yellow-400:-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .lg\\:placeholder-yellow-400::-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .lg\\:placeholder-yellow-400::placeholder {\n    color: #f6e05e\n  }\n\n  .lg\\:placeholder-yellow-500:-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .lg\\:placeholder-yellow-500::-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .lg\\:placeholder-yellow-500::placeholder {\n    color: #ecc94b\n  }\n\n  .lg\\:placeholder-yellow-600:-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .lg\\:placeholder-yellow-600::-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .lg\\:placeholder-yellow-600::placeholder {\n    color: #d69e2e\n  }\n\n  .lg\\:placeholder-yellow-700:-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .lg\\:placeholder-yellow-700::-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .lg\\:placeholder-yellow-700::placeholder {\n    color: #b7791f\n  }\n\n  .lg\\:placeholder-yellow-800:-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .lg\\:placeholder-yellow-800::-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .lg\\:placeholder-yellow-800::placeholder {\n    color: #975a16\n  }\n\n  .lg\\:placeholder-yellow-900:-ms-input-placeholder {\n    color: #744210\n  }\n\n  .lg\\:placeholder-yellow-900::-ms-input-placeholder {\n    color: #744210\n  }\n\n  .lg\\:placeholder-yellow-900::placeholder {\n    color: #744210\n  }\n\n  .lg\\:placeholder-green-100:-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .lg\\:placeholder-green-100::-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .lg\\:placeholder-green-100::placeholder {\n    color: #f0fff4\n  }\n\n  .lg\\:placeholder-green-200:-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .lg\\:placeholder-green-200::-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .lg\\:placeholder-green-200::placeholder {\n    color: #c6f6d5\n  }\n\n  .lg\\:placeholder-green-300:-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .lg\\:placeholder-green-300::-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .lg\\:placeholder-green-300::placeholder {\n    color: #9ae6b4\n  }\n\n  .lg\\:placeholder-green-400:-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .lg\\:placeholder-green-400::-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .lg\\:placeholder-green-400::placeholder {\n    color: #68d391\n  }\n\n  .lg\\:placeholder-green-500:-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .lg\\:placeholder-green-500::-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .lg\\:placeholder-green-500::placeholder {\n    color: #48bb78\n  }\n\n  .lg\\:placeholder-green-600:-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .lg\\:placeholder-green-600::-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .lg\\:placeholder-green-600::placeholder {\n    color: #38a169\n  }\n\n  .lg\\:placeholder-green-700:-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .lg\\:placeholder-green-700::-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .lg\\:placeholder-green-700::placeholder {\n    color: #2f855a\n  }\n\n  .lg\\:placeholder-green-800:-ms-input-placeholder {\n    color: #276749\n  }\n\n  .lg\\:placeholder-green-800::-ms-input-placeholder {\n    color: #276749\n  }\n\n  .lg\\:placeholder-green-800::placeholder {\n    color: #276749\n  }\n\n  .lg\\:placeholder-green-900:-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .lg\\:placeholder-green-900::-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .lg\\:placeholder-green-900::placeholder {\n    color: #22543d\n  }\n\n  .lg\\:placeholder-teal-100:-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .lg\\:placeholder-teal-100::-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .lg\\:placeholder-teal-100::placeholder {\n    color: #e6fffa\n  }\n\n  .lg\\:placeholder-teal-200:-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .lg\\:placeholder-teal-200::-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .lg\\:placeholder-teal-200::placeholder {\n    color: #b2f5ea\n  }\n\n  .lg\\:placeholder-teal-300:-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .lg\\:placeholder-teal-300::-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .lg\\:placeholder-teal-300::placeholder {\n    color: #81e6d9\n  }\n\n  .lg\\:placeholder-teal-400:-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .lg\\:placeholder-teal-400::-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .lg\\:placeholder-teal-400::placeholder {\n    color: #4fd1c5\n  }\n\n  .lg\\:placeholder-teal-500:-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .lg\\:placeholder-teal-500::-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .lg\\:placeholder-teal-500::placeholder {\n    color: #38b2ac\n  }\n\n  .lg\\:placeholder-teal-600:-ms-input-placeholder {\n    color: #319795\n  }\n\n  .lg\\:placeholder-teal-600::-ms-input-placeholder {\n    color: #319795\n  }\n\n  .lg\\:placeholder-teal-600::placeholder {\n    color: #319795\n  }\n\n  .lg\\:placeholder-teal-700:-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .lg\\:placeholder-teal-700::-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .lg\\:placeholder-teal-700::placeholder {\n    color: #2c7a7b\n  }\n\n  .lg\\:placeholder-teal-800:-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .lg\\:placeholder-teal-800::-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .lg\\:placeholder-teal-800::placeholder {\n    color: #285e61\n  }\n\n  .lg\\:placeholder-teal-900:-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .lg\\:placeholder-teal-900::-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .lg\\:placeholder-teal-900::placeholder {\n    color: #234e52\n  }\n\n  .lg\\:placeholder-blue-100:-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .lg\\:placeholder-blue-100::-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .lg\\:placeholder-blue-100::placeholder {\n    color: #ebf8ff\n  }\n\n  .lg\\:placeholder-blue-200:-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .lg\\:placeholder-blue-200::-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .lg\\:placeholder-blue-200::placeholder {\n    color: #bee3f8\n  }\n\n  .lg\\:placeholder-blue-300:-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .lg\\:placeholder-blue-300::-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .lg\\:placeholder-blue-300::placeholder {\n    color: #90cdf4\n  }\n\n  .lg\\:placeholder-blue-400:-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .lg\\:placeholder-blue-400::-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .lg\\:placeholder-blue-400::placeholder {\n    color: #63b3ed\n  }\n\n  .lg\\:placeholder-blue-500:-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .lg\\:placeholder-blue-500::-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .lg\\:placeholder-blue-500::placeholder {\n    color: #4299e1\n  }\n\n  .lg\\:placeholder-blue-600:-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .lg\\:placeholder-blue-600::-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .lg\\:placeholder-blue-600::placeholder {\n    color: #3182ce\n  }\n\n  .lg\\:placeholder-blue-700:-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .lg\\:placeholder-blue-700::-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .lg\\:placeholder-blue-700::placeholder {\n    color: #2b6cb0\n  }\n\n  .lg\\:placeholder-blue-800:-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .lg\\:placeholder-blue-800::-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .lg\\:placeholder-blue-800::placeholder {\n    color: #2c5282\n  }\n\n  .lg\\:placeholder-blue-900:-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .lg\\:placeholder-blue-900::-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .lg\\:placeholder-blue-900::placeholder {\n    color: #2a4365\n  }\n\n  .lg\\:placeholder-indigo-100:-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .lg\\:placeholder-indigo-100::-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .lg\\:placeholder-indigo-100::placeholder {\n    color: #ebf4ff\n  }\n\n  .lg\\:placeholder-indigo-200:-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .lg\\:placeholder-indigo-200::-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .lg\\:placeholder-indigo-200::placeholder {\n    color: #c3dafe\n  }\n\n  .lg\\:placeholder-indigo-300:-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .lg\\:placeholder-indigo-300::-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .lg\\:placeholder-indigo-300::placeholder {\n    color: #a3bffa\n  }\n\n  .lg\\:placeholder-indigo-400:-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .lg\\:placeholder-indigo-400::-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .lg\\:placeholder-indigo-400::placeholder {\n    color: #7f9cf5\n  }\n\n  .lg\\:placeholder-indigo-500:-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .lg\\:placeholder-indigo-500::-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .lg\\:placeholder-indigo-500::placeholder {\n    color: #667eea\n  }\n\n  .lg\\:placeholder-indigo-600:-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .lg\\:placeholder-indigo-600::-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .lg\\:placeholder-indigo-600::placeholder {\n    color: #5a67d8\n  }\n\n  .lg\\:placeholder-indigo-700:-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .lg\\:placeholder-indigo-700::-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .lg\\:placeholder-indigo-700::placeholder {\n    color: #4c51bf\n  }\n\n  .lg\\:placeholder-indigo-800:-ms-input-placeholder {\n    color: #434190\n  }\n\n  .lg\\:placeholder-indigo-800::-ms-input-placeholder {\n    color: #434190\n  }\n\n  .lg\\:placeholder-indigo-800::placeholder {\n    color: #434190\n  }\n\n  .lg\\:placeholder-indigo-900:-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .lg\\:placeholder-indigo-900::-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .lg\\:placeholder-indigo-900::placeholder {\n    color: #3c366b\n  }\n\n  .lg\\:placeholder-purple-100:-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .lg\\:placeholder-purple-100::-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .lg\\:placeholder-purple-100::placeholder {\n    color: #faf5ff\n  }\n\n  .lg\\:placeholder-purple-200:-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .lg\\:placeholder-purple-200::-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .lg\\:placeholder-purple-200::placeholder {\n    color: #e9d8fd\n  }\n\n  .lg\\:placeholder-purple-300:-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .lg\\:placeholder-purple-300::-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .lg\\:placeholder-purple-300::placeholder {\n    color: #d6bcfa\n  }\n\n  .lg\\:placeholder-purple-400:-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .lg\\:placeholder-purple-400::-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .lg\\:placeholder-purple-400::placeholder {\n    color: #b794f4\n  }\n\n  .lg\\:placeholder-purple-500:-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .lg\\:placeholder-purple-500::-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .lg\\:placeholder-purple-500::placeholder {\n    color: #9f7aea\n  }\n\n  .lg\\:placeholder-purple-600:-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .lg\\:placeholder-purple-600::-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .lg\\:placeholder-purple-600::placeholder {\n    color: #805ad5\n  }\n\n  .lg\\:placeholder-purple-700:-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .lg\\:placeholder-purple-700::-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .lg\\:placeholder-purple-700::placeholder {\n    color: #6b46c1\n  }\n\n  .lg\\:placeholder-purple-800:-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .lg\\:placeholder-purple-800::-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .lg\\:placeholder-purple-800::placeholder {\n    color: #553c9a\n  }\n\n  .lg\\:placeholder-purple-900:-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .lg\\:placeholder-purple-900::-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .lg\\:placeholder-purple-900::placeholder {\n    color: #44337a\n  }\n\n  .lg\\:placeholder-pink-100:-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .lg\\:placeholder-pink-100::-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .lg\\:placeholder-pink-100::placeholder {\n    color: #fff5f7\n  }\n\n  .lg\\:placeholder-pink-200:-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .lg\\:placeholder-pink-200::-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .lg\\:placeholder-pink-200::placeholder {\n    color: #fed7e2\n  }\n\n  .lg\\:placeholder-pink-300:-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .lg\\:placeholder-pink-300::-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .lg\\:placeholder-pink-300::placeholder {\n    color: #fbb6ce\n  }\n\n  .lg\\:placeholder-pink-400:-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .lg\\:placeholder-pink-400::-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .lg\\:placeholder-pink-400::placeholder {\n    color: #f687b3\n  }\n\n  .lg\\:placeholder-pink-500:-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .lg\\:placeholder-pink-500::-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .lg\\:placeholder-pink-500::placeholder {\n    color: #ed64a6\n  }\n\n  .lg\\:placeholder-pink-600:-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .lg\\:placeholder-pink-600::-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .lg\\:placeholder-pink-600::placeholder {\n    color: #d53f8c\n  }\n\n  .lg\\:placeholder-pink-700:-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .lg\\:placeholder-pink-700::-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .lg\\:placeholder-pink-700::placeholder {\n    color: #b83280\n  }\n\n  .lg\\:placeholder-pink-800:-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .lg\\:placeholder-pink-800::-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .lg\\:placeholder-pink-800::placeholder {\n    color: #97266d\n  }\n\n  .lg\\:placeholder-pink-900:-ms-input-placeholder {\n    color: #702459\n  }\n\n  .lg\\:placeholder-pink-900::-ms-input-placeholder {\n    color: #702459\n  }\n\n  .lg\\:placeholder-pink-900::placeholder {\n    color: #702459\n  }\n\n  .lg\\:focus\\:placeholder-transparent:focus:-ms-input-placeholder {\n    color: transparent\n  }\n\n  .lg\\:focus\\:placeholder-transparent:focus::-ms-input-placeholder {\n    color: transparent\n  }\n\n  .lg\\:focus\\:placeholder-transparent:focus::placeholder {\n    color: transparent\n  }\n\n  .lg\\:focus\\:placeholder-black:focus:-ms-input-placeholder {\n    color: #000\n  }\n\n  .lg\\:focus\\:placeholder-black:focus::-ms-input-placeholder {\n    color: #000\n  }\n\n  .lg\\:focus\\:placeholder-black:focus::placeholder {\n    color: #000\n  }\n\n  .lg\\:focus\\:placeholder-white:focus:-ms-input-placeholder {\n    color: #fff\n  }\n\n  .lg\\:focus\\:placeholder-white:focus::-ms-input-placeholder {\n    color: #fff\n  }\n\n  .lg\\:focus\\:placeholder-white:focus::placeholder {\n    color: #fff\n  }\n\n  .lg\\:focus\\:placeholder-gray-100:focus:-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .lg\\:focus\\:placeholder-gray-100:focus::-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .lg\\:focus\\:placeholder-gray-100:focus::placeholder {\n    color: #f7fafc\n  }\n\n  .lg\\:focus\\:placeholder-gray-200:focus:-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .lg\\:focus\\:placeholder-gray-200:focus::-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .lg\\:focus\\:placeholder-gray-200:focus::placeholder {\n    color: #edf2f7\n  }\n\n  .lg\\:focus\\:placeholder-gray-300:focus:-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .lg\\:focus\\:placeholder-gray-300:focus::-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .lg\\:focus\\:placeholder-gray-300:focus::placeholder {\n    color: #e2e8f0\n  }\n\n  .lg\\:focus\\:placeholder-gray-400:focus:-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .lg\\:focus\\:placeholder-gray-400:focus::-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .lg\\:focus\\:placeholder-gray-400:focus::placeholder {\n    color: #cbd5e0\n  }\n\n  .lg\\:focus\\:placeholder-gray-500:focus:-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .lg\\:focus\\:placeholder-gray-500:focus::-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .lg\\:focus\\:placeholder-gray-500:focus::placeholder {\n    color: #a0aec0\n  }\n\n  .lg\\:focus\\:placeholder-gray-600:focus:-ms-input-placeholder {\n    color: #718096\n  }\n\n  .lg\\:focus\\:placeholder-gray-600:focus::-ms-input-placeholder {\n    color: #718096\n  }\n\n  .lg\\:focus\\:placeholder-gray-600:focus::placeholder {\n    color: #718096\n  }\n\n  .lg\\:focus\\:placeholder-gray-700:focus:-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .lg\\:focus\\:placeholder-gray-700:focus::-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .lg\\:focus\\:placeholder-gray-700:focus::placeholder {\n    color: #4a5568\n  }\n\n  .lg\\:focus\\:placeholder-gray-800:focus:-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .lg\\:focus\\:placeholder-gray-800:focus::-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .lg\\:focus\\:placeholder-gray-800:focus::placeholder {\n    color: #2d3748\n  }\n\n  .lg\\:focus\\:placeholder-gray-900:focus:-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .lg\\:focus\\:placeholder-gray-900:focus::-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .lg\\:focus\\:placeholder-gray-900:focus::placeholder {\n    color: #1a202c\n  }\n\n  .lg\\:focus\\:placeholder-red-100:focus:-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .lg\\:focus\\:placeholder-red-100:focus::-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .lg\\:focus\\:placeholder-red-100:focus::placeholder {\n    color: #fff5f5\n  }\n\n  .lg\\:focus\\:placeholder-red-200:focus:-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .lg\\:focus\\:placeholder-red-200:focus::-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .lg\\:focus\\:placeholder-red-200:focus::placeholder {\n    color: #fed7d7\n  }\n\n  .lg\\:focus\\:placeholder-red-300:focus:-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .lg\\:focus\\:placeholder-red-300:focus::-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .lg\\:focus\\:placeholder-red-300:focus::placeholder {\n    color: #feb2b2\n  }\n\n  .lg\\:focus\\:placeholder-red-400:focus:-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .lg\\:focus\\:placeholder-red-400:focus::-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .lg\\:focus\\:placeholder-red-400:focus::placeholder {\n    color: #fc8181\n  }\n\n  .lg\\:focus\\:placeholder-red-500:focus:-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .lg\\:focus\\:placeholder-red-500:focus::-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .lg\\:focus\\:placeholder-red-500:focus::placeholder {\n    color: #f56565\n  }\n\n  .lg\\:focus\\:placeholder-red-600:focus:-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .lg\\:focus\\:placeholder-red-600:focus::-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .lg\\:focus\\:placeholder-red-600:focus::placeholder {\n    color: #e53e3e\n  }\n\n  .lg\\:focus\\:placeholder-red-700:focus:-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .lg\\:focus\\:placeholder-red-700:focus::-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .lg\\:focus\\:placeholder-red-700:focus::placeholder {\n    color: #c53030\n  }\n\n  .lg\\:focus\\:placeholder-red-800:focus:-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .lg\\:focus\\:placeholder-red-800:focus::-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .lg\\:focus\\:placeholder-red-800:focus::placeholder {\n    color: #9b2c2c\n  }\n\n  .lg\\:focus\\:placeholder-red-900:focus:-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .lg\\:focus\\:placeholder-red-900:focus::-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .lg\\:focus\\:placeholder-red-900:focus::placeholder {\n    color: #742a2a\n  }\n\n  .lg\\:focus\\:placeholder-orange-100:focus:-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .lg\\:focus\\:placeholder-orange-100:focus::-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .lg\\:focus\\:placeholder-orange-100:focus::placeholder {\n    color: #fffaf0\n  }\n\n  .lg\\:focus\\:placeholder-orange-200:focus:-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .lg\\:focus\\:placeholder-orange-200:focus::-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .lg\\:focus\\:placeholder-orange-200:focus::placeholder {\n    color: #feebc8\n  }\n\n  .lg\\:focus\\:placeholder-orange-300:focus:-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .lg\\:focus\\:placeholder-orange-300:focus::-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .lg\\:focus\\:placeholder-orange-300:focus::placeholder {\n    color: #fbd38d\n  }\n\n  .lg\\:focus\\:placeholder-orange-400:focus:-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .lg\\:focus\\:placeholder-orange-400:focus::-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .lg\\:focus\\:placeholder-orange-400:focus::placeholder {\n    color: #f6ad55\n  }\n\n  .lg\\:focus\\:placeholder-orange-500:focus:-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .lg\\:focus\\:placeholder-orange-500:focus::-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .lg\\:focus\\:placeholder-orange-500:focus::placeholder {\n    color: #ed8936\n  }\n\n  .lg\\:focus\\:placeholder-orange-600:focus:-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .lg\\:focus\\:placeholder-orange-600:focus::-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .lg\\:focus\\:placeholder-orange-600:focus::placeholder {\n    color: #dd6b20\n  }\n\n  .lg\\:focus\\:placeholder-orange-700:focus:-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .lg\\:focus\\:placeholder-orange-700:focus::-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .lg\\:focus\\:placeholder-orange-700:focus::placeholder {\n    color: #c05621\n  }\n\n  .lg\\:focus\\:placeholder-orange-800:focus:-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .lg\\:focus\\:placeholder-orange-800:focus::-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .lg\\:focus\\:placeholder-orange-800:focus::placeholder {\n    color: #9c4221\n  }\n\n  .lg\\:focus\\:placeholder-orange-900:focus:-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .lg\\:focus\\:placeholder-orange-900:focus::-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .lg\\:focus\\:placeholder-orange-900:focus::placeholder {\n    color: #7b341e\n  }\n\n  .lg\\:focus\\:placeholder-yellow-100:focus:-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .lg\\:focus\\:placeholder-yellow-100:focus::-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .lg\\:focus\\:placeholder-yellow-100:focus::placeholder {\n    color: #fffff0\n  }\n\n  .lg\\:focus\\:placeholder-yellow-200:focus:-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .lg\\:focus\\:placeholder-yellow-200:focus::-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .lg\\:focus\\:placeholder-yellow-200:focus::placeholder {\n    color: #fefcbf\n  }\n\n  .lg\\:focus\\:placeholder-yellow-300:focus:-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .lg\\:focus\\:placeholder-yellow-300:focus::-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .lg\\:focus\\:placeholder-yellow-300:focus::placeholder {\n    color: #faf089\n  }\n\n  .lg\\:focus\\:placeholder-yellow-400:focus:-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .lg\\:focus\\:placeholder-yellow-400:focus::-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .lg\\:focus\\:placeholder-yellow-400:focus::placeholder {\n    color: #f6e05e\n  }\n\n  .lg\\:focus\\:placeholder-yellow-500:focus:-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .lg\\:focus\\:placeholder-yellow-500:focus::-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .lg\\:focus\\:placeholder-yellow-500:focus::placeholder {\n    color: #ecc94b\n  }\n\n  .lg\\:focus\\:placeholder-yellow-600:focus:-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .lg\\:focus\\:placeholder-yellow-600:focus::-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .lg\\:focus\\:placeholder-yellow-600:focus::placeholder {\n    color: #d69e2e\n  }\n\n  .lg\\:focus\\:placeholder-yellow-700:focus:-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .lg\\:focus\\:placeholder-yellow-700:focus::-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .lg\\:focus\\:placeholder-yellow-700:focus::placeholder {\n    color: #b7791f\n  }\n\n  .lg\\:focus\\:placeholder-yellow-800:focus:-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .lg\\:focus\\:placeholder-yellow-800:focus::-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .lg\\:focus\\:placeholder-yellow-800:focus::placeholder {\n    color: #975a16\n  }\n\n  .lg\\:focus\\:placeholder-yellow-900:focus:-ms-input-placeholder {\n    color: #744210\n  }\n\n  .lg\\:focus\\:placeholder-yellow-900:focus::-ms-input-placeholder {\n    color: #744210\n  }\n\n  .lg\\:focus\\:placeholder-yellow-900:focus::placeholder {\n    color: #744210\n  }\n\n  .lg\\:focus\\:placeholder-green-100:focus:-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .lg\\:focus\\:placeholder-green-100:focus::-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .lg\\:focus\\:placeholder-green-100:focus::placeholder {\n    color: #f0fff4\n  }\n\n  .lg\\:focus\\:placeholder-green-200:focus:-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .lg\\:focus\\:placeholder-green-200:focus::-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .lg\\:focus\\:placeholder-green-200:focus::placeholder {\n    color: #c6f6d5\n  }\n\n  .lg\\:focus\\:placeholder-green-300:focus:-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .lg\\:focus\\:placeholder-green-300:focus::-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .lg\\:focus\\:placeholder-green-300:focus::placeholder {\n    color: #9ae6b4\n  }\n\n  .lg\\:focus\\:placeholder-green-400:focus:-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .lg\\:focus\\:placeholder-green-400:focus::-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .lg\\:focus\\:placeholder-green-400:focus::placeholder {\n    color: #68d391\n  }\n\n  .lg\\:focus\\:placeholder-green-500:focus:-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .lg\\:focus\\:placeholder-green-500:focus::-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .lg\\:focus\\:placeholder-green-500:focus::placeholder {\n    color: #48bb78\n  }\n\n  .lg\\:focus\\:placeholder-green-600:focus:-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .lg\\:focus\\:placeholder-green-600:focus::-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .lg\\:focus\\:placeholder-green-600:focus::placeholder {\n    color: #38a169\n  }\n\n  .lg\\:focus\\:placeholder-green-700:focus:-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .lg\\:focus\\:placeholder-green-700:focus::-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .lg\\:focus\\:placeholder-green-700:focus::placeholder {\n    color: #2f855a\n  }\n\n  .lg\\:focus\\:placeholder-green-800:focus:-ms-input-placeholder {\n    color: #276749\n  }\n\n  .lg\\:focus\\:placeholder-green-800:focus::-ms-input-placeholder {\n    color: #276749\n  }\n\n  .lg\\:focus\\:placeholder-green-800:focus::placeholder {\n    color: #276749\n  }\n\n  .lg\\:focus\\:placeholder-green-900:focus:-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .lg\\:focus\\:placeholder-green-900:focus::-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .lg\\:focus\\:placeholder-green-900:focus::placeholder {\n    color: #22543d\n  }\n\n  .lg\\:focus\\:placeholder-teal-100:focus:-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .lg\\:focus\\:placeholder-teal-100:focus::-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .lg\\:focus\\:placeholder-teal-100:focus::placeholder {\n    color: #e6fffa\n  }\n\n  .lg\\:focus\\:placeholder-teal-200:focus:-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .lg\\:focus\\:placeholder-teal-200:focus::-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .lg\\:focus\\:placeholder-teal-200:focus::placeholder {\n    color: #b2f5ea\n  }\n\n  .lg\\:focus\\:placeholder-teal-300:focus:-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .lg\\:focus\\:placeholder-teal-300:focus::-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .lg\\:focus\\:placeholder-teal-300:focus::placeholder {\n    color: #81e6d9\n  }\n\n  .lg\\:focus\\:placeholder-teal-400:focus:-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .lg\\:focus\\:placeholder-teal-400:focus::-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .lg\\:focus\\:placeholder-teal-400:focus::placeholder {\n    color: #4fd1c5\n  }\n\n  .lg\\:focus\\:placeholder-teal-500:focus:-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .lg\\:focus\\:placeholder-teal-500:focus::-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .lg\\:focus\\:placeholder-teal-500:focus::placeholder {\n    color: #38b2ac\n  }\n\n  .lg\\:focus\\:placeholder-teal-600:focus:-ms-input-placeholder {\n    color: #319795\n  }\n\n  .lg\\:focus\\:placeholder-teal-600:focus::-ms-input-placeholder {\n    color: #319795\n  }\n\n  .lg\\:focus\\:placeholder-teal-600:focus::placeholder {\n    color: #319795\n  }\n\n  .lg\\:focus\\:placeholder-teal-700:focus:-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .lg\\:focus\\:placeholder-teal-700:focus::-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .lg\\:focus\\:placeholder-teal-700:focus::placeholder {\n    color: #2c7a7b\n  }\n\n  .lg\\:focus\\:placeholder-teal-800:focus:-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .lg\\:focus\\:placeholder-teal-800:focus::-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .lg\\:focus\\:placeholder-teal-800:focus::placeholder {\n    color: #285e61\n  }\n\n  .lg\\:focus\\:placeholder-teal-900:focus:-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .lg\\:focus\\:placeholder-teal-900:focus::-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .lg\\:focus\\:placeholder-teal-900:focus::placeholder {\n    color: #234e52\n  }\n\n  .lg\\:focus\\:placeholder-blue-100:focus:-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .lg\\:focus\\:placeholder-blue-100:focus::-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .lg\\:focus\\:placeholder-blue-100:focus::placeholder {\n    color: #ebf8ff\n  }\n\n  .lg\\:focus\\:placeholder-blue-200:focus:-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .lg\\:focus\\:placeholder-blue-200:focus::-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .lg\\:focus\\:placeholder-blue-200:focus::placeholder {\n    color: #bee3f8\n  }\n\n  .lg\\:focus\\:placeholder-blue-300:focus:-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .lg\\:focus\\:placeholder-blue-300:focus::-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .lg\\:focus\\:placeholder-blue-300:focus::placeholder {\n    color: #90cdf4\n  }\n\n  .lg\\:focus\\:placeholder-blue-400:focus:-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .lg\\:focus\\:placeholder-blue-400:focus::-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .lg\\:focus\\:placeholder-blue-400:focus::placeholder {\n    color: #63b3ed\n  }\n\n  .lg\\:focus\\:placeholder-blue-500:focus:-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .lg\\:focus\\:placeholder-blue-500:focus::-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .lg\\:focus\\:placeholder-blue-500:focus::placeholder {\n    color: #4299e1\n  }\n\n  .lg\\:focus\\:placeholder-blue-600:focus:-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .lg\\:focus\\:placeholder-blue-600:focus::-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .lg\\:focus\\:placeholder-blue-600:focus::placeholder {\n    color: #3182ce\n  }\n\n  .lg\\:focus\\:placeholder-blue-700:focus:-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .lg\\:focus\\:placeholder-blue-700:focus::-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .lg\\:focus\\:placeholder-blue-700:focus::placeholder {\n    color: #2b6cb0\n  }\n\n  .lg\\:focus\\:placeholder-blue-800:focus:-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .lg\\:focus\\:placeholder-blue-800:focus::-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .lg\\:focus\\:placeholder-blue-800:focus::placeholder {\n    color: #2c5282\n  }\n\n  .lg\\:focus\\:placeholder-blue-900:focus:-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .lg\\:focus\\:placeholder-blue-900:focus::-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .lg\\:focus\\:placeholder-blue-900:focus::placeholder {\n    color: #2a4365\n  }\n\n  .lg\\:focus\\:placeholder-indigo-100:focus:-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .lg\\:focus\\:placeholder-indigo-100:focus::-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .lg\\:focus\\:placeholder-indigo-100:focus::placeholder {\n    color: #ebf4ff\n  }\n\n  .lg\\:focus\\:placeholder-indigo-200:focus:-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .lg\\:focus\\:placeholder-indigo-200:focus::-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .lg\\:focus\\:placeholder-indigo-200:focus::placeholder {\n    color: #c3dafe\n  }\n\n  .lg\\:focus\\:placeholder-indigo-300:focus:-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .lg\\:focus\\:placeholder-indigo-300:focus::-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .lg\\:focus\\:placeholder-indigo-300:focus::placeholder {\n    color: #a3bffa\n  }\n\n  .lg\\:focus\\:placeholder-indigo-400:focus:-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .lg\\:focus\\:placeholder-indigo-400:focus::-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .lg\\:focus\\:placeholder-indigo-400:focus::placeholder {\n    color: #7f9cf5\n  }\n\n  .lg\\:focus\\:placeholder-indigo-500:focus:-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .lg\\:focus\\:placeholder-indigo-500:focus::-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .lg\\:focus\\:placeholder-indigo-500:focus::placeholder {\n    color: #667eea\n  }\n\n  .lg\\:focus\\:placeholder-indigo-600:focus:-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .lg\\:focus\\:placeholder-indigo-600:focus::-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .lg\\:focus\\:placeholder-indigo-600:focus::placeholder {\n    color: #5a67d8\n  }\n\n  .lg\\:focus\\:placeholder-indigo-700:focus:-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .lg\\:focus\\:placeholder-indigo-700:focus::-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .lg\\:focus\\:placeholder-indigo-700:focus::placeholder {\n    color: #4c51bf\n  }\n\n  .lg\\:focus\\:placeholder-indigo-800:focus:-ms-input-placeholder {\n    color: #434190\n  }\n\n  .lg\\:focus\\:placeholder-indigo-800:focus::-ms-input-placeholder {\n    color: #434190\n  }\n\n  .lg\\:focus\\:placeholder-indigo-800:focus::placeholder {\n    color: #434190\n  }\n\n  .lg\\:focus\\:placeholder-indigo-900:focus:-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .lg\\:focus\\:placeholder-indigo-900:focus::-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .lg\\:focus\\:placeholder-indigo-900:focus::placeholder {\n    color: #3c366b\n  }\n\n  .lg\\:focus\\:placeholder-purple-100:focus:-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .lg\\:focus\\:placeholder-purple-100:focus::-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .lg\\:focus\\:placeholder-purple-100:focus::placeholder {\n    color: #faf5ff\n  }\n\n  .lg\\:focus\\:placeholder-purple-200:focus:-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .lg\\:focus\\:placeholder-purple-200:focus::-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .lg\\:focus\\:placeholder-purple-200:focus::placeholder {\n    color: #e9d8fd\n  }\n\n  .lg\\:focus\\:placeholder-purple-300:focus:-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .lg\\:focus\\:placeholder-purple-300:focus::-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .lg\\:focus\\:placeholder-purple-300:focus::placeholder {\n    color: #d6bcfa\n  }\n\n  .lg\\:focus\\:placeholder-purple-400:focus:-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .lg\\:focus\\:placeholder-purple-400:focus::-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .lg\\:focus\\:placeholder-purple-400:focus::placeholder {\n    color: #b794f4\n  }\n\n  .lg\\:focus\\:placeholder-purple-500:focus:-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .lg\\:focus\\:placeholder-purple-500:focus::-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .lg\\:focus\\:placeholder-purple-500:focus::placeholder {\n    color: #9f7aea\n  }\n\n  .lg\\:focus\\:placeholder-purple-600:focus:-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .lg\\:focus\\:placeholder-purple-600:focus::-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .lg\\:focus\\:placeholder-purple-600:focus::placeholder {\n    color: #805ad5\n  }\n\n  .lg\\:focus\\:placeholder-purple-700:focus:-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .lg\\:focus\\:placeholder-purple-700:focus::-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .lg\\:focus\\:placeholder-purple-700:focus::placeholder {\n    color: #6b46c1\n  }\n\n  .lg\\:focus\\:placeholder-purple-800:focus:-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .lg\\:focus\\:placeholder-purple-800:focus::-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .lg\\:focus\\:placeholder-purple-800:focus::placeholder {\n    color: #553c9a\n  }\n\n  .lg\\:focus\\:placeholder-purple-900:focus:-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .lg\\:focus\\:placeholder-purple-900:focus::-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .lg\\:focus\\:placeholder-purple-900:focus::placeholder {\n    color: #44337a\n  }\n\n  .lg\\:focus\\:placeholder-pink-100:focus:-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .lg\\:focus\\:placeholder-pink-100:focus::-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .lg\\:focus\\:placeholder-pink-100:focus::placeholder {\n    color: #fff5f7\n  }\n\n  .lg\\:focus\\:placeholder-pink-200:focus:-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .lg\\:focus\\:placeholder-pink-200:focus::-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .lg\\:focus\\:placeholder-pink-200:focus::placeholder {\n    color: #fed7e2\n  }\n\n  .lg\\:focus\\:placeholder-pink-300:focus:-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .lg\\:focus\\:placeholder-pink-300:focus::-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .lg\\:focus\\:placeholder-pink-300:focus::placeholder {\n    color: #fbb6ce\n  }\n\n  .lg\\:focus\\:placeholder-pink-400:focus:-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .lg\\:focus\\:placeholder-pink-400:focus::-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .lg\\:focus\\:placeholder-pink-400:focus::placeholder {\n    color: #f687b3\n  }\n\n  .lg\\:focus\\:placeholder-pink-500:focus:-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .lg\\:focus\\:placeholder-pink-500:focus::-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .lg\\:focus\\:placeholder-pink-500:focus::placeholder {\n    color: #ed64a6\n  }\n\n  .lg\\:focus\\:placeholder-pink-600:focus:-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .lg\\:focus\\:placeholder-pink-600:focus::-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .lg\\:focus\\:placeholder-pink-600:focus::placeholder {\n    color: #d53f8c\n  }\n\n  .lg\\:focus\\:placeholder-pink-700:focus:-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .lg\\:focus\\:placeholder-pink-700:focus::-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .lg\\:focus\\:placeholder-pink-700:focus::placeholder {\n    color: #b83280\n  }\n\n  .lg\\:focus\\:placeholder-pink-800:focus:-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .lg\\:focus\\:placeholder-pink-800:focus::-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .lg\\:focus\\:placeholder-pink-800:focus::placeholder {\n    color: #97266d\n  }\n\n  .lg\\:focus\\:placeholder-pink-900:focus:-ms-input-placeholder {\n    color: #702459\n  }\n\n  .lg\\:focus\\:placeholder-pink-900:focus::-ms-input-placeholder {\n    color: #702459\n  }\n\n  .lg\\:focus\\:placeholder-pink-900:focus::placeholder {\n    color: #702459\n  }\n\n  .lg\\:pointer-events-none {\n    pointer-events: none\n  }\n\n  .lg\\:pointer-events-auto {\n    pointer-events: auto\n  }\n\n  .lg\\:static {\n    position: static\n  }\n\n  .lg\\:fixed {\n    position: fixed\n  }\n\n  .lg\\:absolute {\n    position: absolute\n  }\n\n  .lg\\:relative {\n    position: relative\n  }\n\n  .lg\\:sticky {\n    position: -webkit-sticky;\n    position: sticky\n  }\n\n  .lg\\:inset-0 {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0\n  }\n\n  .lg\\:inset-auto {\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto\n  }\n\n  .lg\\:inset-y-0 {\n    top: 0;\n    bottom: 0\n  }\n\n  .lg\\:inset-x-0 {\n    right: 0;\n    left: 0\n  }\n\n  .lg\\:inset-y-auto {\n    top: auto;\n    bottom: auto\n  }\n\n  .lg\\:inset-x-auto {\n    right: auto;\n    left: auto\n  }\n\n  .lg\\:top-0 {\n    top: 0\n  }\n\n  .lg\\:right-0 {\n    right: 0\n  }\n\n  .lg\\:bottom-0 {\n    bottom: 0\n  }\n\n  .lg\\:left-0 {\n    left: 0\n  }\n\n  .lg\\:top-auto {\n    top: auto\n  }\n\n  .lg\\:right-auto {\n    right: auto\n  }\n\n  .lg\\:bottom-auto {\n    bottom: auto\n  }\n\n  .lg\\:left-auto {\n    left: auto\n  }\n\n  .lg\\:resize-none {\n    resize: none\n  }\n\n  .lg\\:resize-y {\n    resize: vertical\n  }\n\n  .lg\\:resize-x {\n    resize: horizontal\n  }\n\n  .lg\\:resize {\n    resize: both\n  }\n\n  .lg\\:shadow {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .lg\\:shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .lg\\:shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .lg\\:shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .lg\\:shadow-2xl {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .lg\\:shadow-inner {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .lg\\:shadow-outline {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .lg\\:shadow-none {\n    box-shadow: none\n  }\n\n  .lg\\:hover\\:shadow:hover {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .lg\\:hover\\:shadow-md:hover {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .lg\\:hover\\:shadow-lg:hover {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .lg\\:hover\\:shadow-xl:hover {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .lg\\:hover\\:shadow-2xl:hover {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .lg\\:hover\\:shadow-inner:hover {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .lg\\:hover\\:shadow-outline:hover {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .lg\\:hover\\:shadow-none:hover {\n    box-shadow: none\n  }\n\n  .lg\\:focus\\:shadow:focus {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .lg\\:focus\\:shadow-md:focus {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .lg\\:focus\\:shadow-lg:focus {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .lg\\:focus\\:shadow-xl:focus {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .lg\\:focus\\:shadow-2xl:focus {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .lg\\:focus\\:shadow-inner:focus {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .lg\\:focus\\:shadow-outline:focus {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .lg\\:focus\\:shadow-none:focus {\n    box-shadow: none\n  }\n\n  .lg\\:fill-current {\n    fill: currentColor\n  }\n\n  .lg\\:stroke-current {\n    stroke: currentColor\n  }\n\n  .lg\\:table-auto {\n    table-layout: auto\n  }\n\n  .lg\\:table-fixed {\n    table-layout: fixed\n  }\n\n  .lg\\:text-left {\n    text-align: left\n  }\n\n  .lg\\:text-center {\n    text-align: center\n  }\n\n  .lg\\:text-right {\n    text-align: right\n  }\n\n  .lg\\:text-justify {\n    text-align: justify\n  }\n\n  .lg\\:text-transparent {\n    color: transparent\n  }\n\n  .lg\\:text-black {\n    color: #000\n  }\n\n  .lg\\:text-white {\n    color: #fff\n  }\n\n  .lg\\:text-gray-100 {\n    color: #f7fafc\n  }\n\n  .lg\\:text-gray-200 {\n    color: #edf2f7\n  }\n\n  .lg\\:text-gray-300 {\n    color: #e2e8f0\n  }\n\n  .lg\\:text-gray-400 {\n    color: #cbd5e0\n  }\n\n  .lg\\:text-gray-500 {\n    color: #a0aec0\n  }\n\n  .lg\\:text-gray-600 {\n    color: #718096\n  }\n\n  .lg\\:text-gray-700 {\n    color: #4a5568\n  }\n\n  .lg\\:text-gray-800 {\n    color: #2d3748\n  }\n\n  .lg\\:text-gray-900 {\n    color: #1a202c\n  }\n\n  .lg\\:text-red-100 {\n    color: #fff5f5\n  }\n\n  .lg\\:text-red-200 {\n    color: #fed7d7\n  }\n\n  .lg\\:text-red-300 {\n    color: #feb2b2\n  }\n\n  .lg\\:text-red-400 {\n    color: #fc8181\n  }\n\n  .lg\\:text-red-500 {\n    color: #f56565\n  }\n\n  .lg\\:text-red-600 {\n    color: #e53e3e\n  }\n\n  .lg\\:text-red-700 {\n    color: #c53030\n  }\n\n  .lg\\:text-red-800 {\n    color: #9b2c2c\n  }\n\n  .lg\\:text-red-900 {\n    color: #742a2a\n  }\n\n  .lg\\:text-orange-100 {\n    color: #fffaf0\n  }\n\n  .lg\\:text-orange-200 {\n    color: #feebc8\n  }\n\n  .lg\\:text-orange-300 {\n    color: #fbd38d\n  }\n\n  .lg\\:text-orange-400 {\n    color: #f6ad55\n  }\n\n  .lg\\:text-orange-500 {\n    color: #ed8936\n  }\n\n  .lg\\:text-orange-600 {\n    color: #dd6b20\n  }\n\n  .lg\\:text-orange-700 {\n    color: #c05621\n  }\n\n  .lg\\:text-orange-800 {\n    color: #9c4221\n  }\n\n  .lg\\:text-orange-900 {\n    color: #7b341e\n  }\n\n  .lg\\:text-yellow-100 {\n    color: #fffff0\n  }\n\n  .lg\\:text-yellow-200 {\n    color: #fefcbf\n  }\n\n  .lg\\:text-yellow-300 {\n    color: #faf089\n  }\n\n  .lg\\:text-yellow-400 {\n    color: #f6e05e\n  }\n\n  .lg\\:text-yellow-500 {\n    color: #ecc94b\n  }\n\n  .lg\\:text-yellow-600 {\n    color: #d69e2e\n  }\n\n  .lg\\:text-yellow-700 {\n    color: #b7791f\n  }\n\n  .lg\\:text-yellow-800 {\n    color: #975a16\n  }\n\n  .lg\\:text-yellow-900 {\n    color: #744210\n  }\n\n  .lg\\:text-green-100 {\n    color: #f0fff4\n  }\n\n  .lg\\:text-green-200 {\n    color: #c6f6d5\n  }\n\n  .lg\\:text-green-300 {\n    color: #9ae6b4\n  }\n\n  .lg\\:text-green-400 {\n    color: #68d391\n  }\n\n  .lg\\:text-green-500 {\n    color: #48bb78\n  }\n\n  .lg\\:text-green-600 {\n    color: #38a169\n  }\n\n  .lg\\:text-green-700 {\n    color: #2f855a\n  }\n\n  .lg\\:text-green-800 {\n    color: #276749\n  }\n\n  .lg\\:text-green-900 {\n    color: #22543d\n  }\n\n  .lg\\:text-teal-100 {\n    color: #e6fffa\n  }\n\n  .lg\\:text-teal-200 {\n    color: #b2f5ea\n  }\n\n  .lg\\:text-teal-300 {\n    color: #81e6d9\n  }\n\n  .lg\\:text-teal-400 {\n    color: #4fd1c5\n  }\n\n  .lg\\:text-teal-500 {\n    color: #38b2ac\n  }\n\n  .lg\\:text-teal-600 {\n    color: #319795\n  }\n\n  .lg\\:text-teal-700 {\n    color: #2c7a7b\n  }\n\n  .lg\\:text-teal-800 {\n    color: #285e61\n  }\n\n  .lg\\:text-teal-900 {\n    color: #234e52\n  }\n\n  .lg\\:text-blue-100 {\n    color: #ebf8ff\n  }\n\n  .lg\\:text-blue-200 {\n    color: #bee3f8\n  }\n\n  .lg\\:text-blue-300 {\n    color: #90cdf4\n  }\n\n  .lg\\:text-blue-400 {\n    color: #63b3ed\n  }\n\n  .lg\\:text-blue-500 {\n    color: #4299e1\n  }\n\n  .lg\\:text-blue-600 {\n    color: #3182ce\n  }\n\n  .lg\\:text-blue-700 {\n    color: #2b6cb0\n  }\n\n  .lg\\:text-blue-800 {\n    color: #2c5282\n  }\n\n  .lg\\:text-blue-900 {\n    color: #2a4365\n  }\n\n  .lg\\:text-indigo-100 {\n    color: #ebf4ff\n  }\n\n  .lg\\:text-indigo-200 {\n    color: #c3dafe\n  }\n\n  .lg\\:text-indigo-300 {\n    color: #a3bffa\n  }\n\n  .lg\\:text-indigo-400 {\n    color: #7f9cf5\n  }\n\n  .lg\\:text-indigo-500 {\n    color: #667eea\n  }\n\n  .lg\\:text-indigo-600 {\n    color: #5a67d8\n  }\n\n  .lg\\:text-indigo-700 {\n    color: #4c51bf\n  }\n\n  .lg\\:text-indigo-800 {\n    color: #434190\n  }\n\n  .lg\\:text-indigo-900 {\n    color: #3c366b\n  }\n\n  .lg\\:text-purple-100 {\n    color: #faf5ff\n  }\n\n  .lg\\:text-purple-200 {\n    color: #e9d8fd\n  }\n\n  .lg\\:text-purple-300 {\n    color: #d6bcfa\n  }\n\n  .lg\\:text-purple-400 {\n    color: #b794f4\n  }\n\n  .lg\\:text-purple-500 {\n    color: #9f7aea\n  }\n\n  .lg\\:text-purple-600 {\n    color: #805ad5\n  }\n\n  .lg\\:text-purple-700 {\n    color: #6b46c1\n  }\n\n  .lg\\:text-purple-800 {\n    color: #553c9a\n  }\n\n  .lg\\:text-purple-900 {\n    color: #44337a\n  }\n\n  .lg\\:text-pink-100 {\n    color: #fff5f7\n  }\n\n  .lg\\:text-pink-200 {\n    color: #fed7e2\n  }\n\n  .lg\\:text-pink-300 {\n    color: #fbb6ce\n  }\n\n  .lg\\:text-pink-400 {\n    color: #f687b3\n  }\n\n  .lg\\:text-pink-500 {\n    color: #ed64a6\n  }\n\n  .lg\\:text-pink-600 {\n    color: #d53f8c\n  }\n\n  .lg\\:text-pink-700 {\n    color: #b83280\n  }\n\n  .lg\\:text-pink-800 {\n    color: #97266d\n  }\n\n  .lg\\:text-pink-900 {\n    color: #702459\n  }\n\n  .lg\\:hover\\:text-transparent:hover {\n    color: transparent\n  }\n\n  .lg\\:hover\\:text-black:hover {\n    color: #000\n  }\n\n  .lg\\:hover\\:text-white:hover {\n    color: #fff\n  }\n\n  .lg\\:hover\\:text-gray-100:hover {\n    color: #f7fafc\n  }\n\n  .lg\\:hover\\:text-gray-200:hover {\n    color: #edf2f7\n  }\n\n  .lg\\:hover\\:text-gray-300:hover {\n    color: #e2e8f0\n  }\n\n  .lg\\:hover\\:text-gray-400:hover {\n    color: #cbd5e0\n  }\n\n  .lg\\:hover\\:text-gray-500:hover {\n    color: #a0aec0\n  }\n\n  .lg\\:hover\\:text-gray-600:hover {\n    color: #718096\n  }\n\n  .lg\\:hover\\:text-gray-700:hover {\n    color: #4a5568\n  }\n\n  .lg\\:hover\\:text-gray-800:hover {\n    color: #2d3748\n  }\n\n  .lg\\:hover\\:text-gray-900:hover {\n    color: #1a202c\n  }\n\n  .lg\\:hover\\:text-red-100:hover {\n    color: #fff5f5\n  }\n\n  .lg\\:hover\\:text-red-200:hover {\n    color: #fed7d7\n  }\n\n  .lg\\:hover\\:text-red-300:hover {\n    color: #feb2b2\n  }\n\n  .lg\\:hover\\:text-red-400:hover {\n    color: #fc8181\n  }\n\n  .lg\\:hover\\:text-red-500:hover {\n    color: #f56565\n  }\n\n  .lg\\:hover\\:text-red-600:hover {\n    color: #e53e3e\n  }\n\n  .lg\\:hover\\:text-red-700:hover {\n    color: #c53030\n  }\n\n  .lg\\:hover\\:text-red-800:hover {\n    color: #9b2c2c\n  }\n\n  .lg\\:hover\\:text-red-900:hover {\n    color: #742a2a\n  }\n\n  .lg\\:hover\\:text-orange-100:hover {\n    color: #fffaf0\n  }\n\n  .lg\\:hover\\:text-orange-200:hover {\n    color: #feebc8\n  }\n\n  .lg\\:hover\\:text-orange-300:hover {\n    color: #fbd38d\n  }\n\n  .lg\\:hover\\:text-orange-400:hover {\n    color: #f6ad55\n  }\n\n  .lg\\:hover\\:text-orange-500:hover {\n    color: #ed8936\n  }\n\n  .lg\\:hover\\:text-orange-600:hover {\n    color: #dd6b20\n  }\n\n  .lg\\:hover\\:text-orange-700:hover {\n    color: #c05621\n  }\n\n  .lg\\:hover\\:text-orange-800:hover {\n    color: #9c4221\n  }\n\n  .lg\\:hover\\:text-orange-900:hover {\n    color: #7b341e\n  }\n\n  .lg\\:hover\\:text-yellow-100:hover {\n    color: #fffff0\n  }\n\n  .lg\\:hover\\:text-yellow-200:hover {\n    color: #fefcbf\n  }\n\n  .lg\\:hover\\:text-yellow-300:hover {\n    color: #faf089\n  }\n\n  .lg\\:hover\\:text-yellow-400:hover {\n    color: #f6e05e\n  }\n\n  .lg\\:hover\\:text-yellow-500:hover {\n    color: #ecc94b\n  }\n\n  .lg\\:hover\\:text-yellow-600:hover {\n    color: #d69e2e\n  }\n\n  .lg\\:hover\\:text-yellow-700:hover {\n    color: #b7791f\n  }\n\n  .lg\\:hover\\:text-yellow-800:hover {\n    color: #975a16\n  }\n\n  .lg\\:hover\\:text-yellow-900:hover {\n    color: #744210\n  }\n\n  .lg\\:hover\\:text-green-100:hover {\n    color: #f0fff4\n  }\n\n  .lg\\:hover\\:text-green-200:hover {\n    color: #c6f6d5\n  }\n\n  .lg\\:hover\\:text-green-300:hover {\n    color: #9ae6b4\n  }\n\n  .lg\\:hover\\:text-green-400:hover {\n    color: #68d391\n  }\n\n  .lg\\:hover\\:text-green-500:hover {\n    color: #48bb78\n  }\n\n  .lg\\:hover\\:text-green-600:hover {\n    color: #38a169\n  }\n\n  .lg\\:hover\\:text-green-700:hover {\n    color: #2f855a\n  }\n\n  .lg\\:hover\\:text-green-800:hover {\n    color: #276749\n  }\n\n  .lg\\:hover\\:text-green-900:hover {\n    color: #22543d\n  }\n\n  .lg\\:hover\\:text-teal-100:hover {\n    color: #e6fffa\n  }\n\n  .lg\\:hover\\:text-teal-200:hover {\n    color: #b2f5ea\n  }\n\n  .lg\\:hover\\:text-teal-300:hover {\n    color: #81e6d9\n  }\n\n  .lg\\:hover\\:text-teal-400:hover {\n    color: #4fd1c5\n  }\n\n  .lg\\:hover\\:text-teal-500:hover {\n    color: #38b2ac\n  }\n\n  .lg\\:hover\\:text-teal-600:hover {\n    color: #319795\n  }\n\n  .lg\\:hover\\:text-teal-700:hover {\n    color: #2c7a7b\n  }\n\n  .lg\\:hover\\:text-teal-800:hover {\n    color: #285e61\n  }\n\n  .lg\\:hover\\:text-teal-900:hover {\n    color: #234e52\n  }\n\n  .lg\\:hover\\:text-blue-100:hover {\n    color: #ebf8ff\n  }\n\n  .lg\\:hover\\:text-blue-200:hover {\n    color: #bee3f8\n  }\n\n  .lg\\:hover\\:text-blue-300:hover {\n    color: #90cdf4\n  }\n\n  .lg\\:hover\\:text-blue-400:hover {\n    color: #63b3ed\n  }\n\n  .lg\\:hover\\:text-blue-500:hover {\n    color: #4299e1\n  }\n\n  .lg\\:hover\\:text-blue-600:hover {\n    color: #3182ce\n  }\n\n  .lg\\:hover\\:text-blue-700:hover {\n    color: #2b6cb0\n  }\n\n  .lg\\:hover\\:text-blue-800:hover {\n    color: #2c5282\n  }\n\n  .lg\\:hover\\:text-blue-900:hover {\n    color: #2a4365\n  }\n\n  .lg\\:hover\\:text-indigo-100:hover {\n    color: #ebf4ff\n  }\n\n  .lg\\:hover\\:text-indigo-200:hover {\n    color: #c3dafe\n  }\n\n  .lg\\:hover\\:text-indigo-300:hover {\n    color: #a3bffa\n  }\n\n  .lg\\:hover\\:text-indigo-400:hover {\n    color: #7f9cf5\n  }\n\n  .lg\\:hover\\:text-indigo-500:hover {\n    color: #667eea\n  }\n\n  .lg\\:hover\\:text-indigo-600:hover {\n    color: #5a67d8\n  }\n\n  .lg\\:hover\\:text-indigo-700:hover {\n    color: #4c51bf\n  }\n\n  .lg\\:hover\\:text-indigo-800:hover {\n    color: #434190\n  }\n\n  .lg\\:hover\\:text-indigo-900:hover {\n    color: #3c366b\n  }\n\n  .lg\\:hover\\:text-purple-100:hover {\n    color: #faf5ff\n  }\n\n  .lg\\:hover\\:text-purple-200:hover {\n    color: #e9d8fd\n  }\n\n  .lg\\:hover\\:text-purple-300:hover {\n    color: #d6bcfa\n  }\n\n  .lg\\:hover\\:text-purple-400:hover {\n    color: #b794f4\n  }\n\n  .lg\\:hover\\:text-purple-500:hover {\n    color: #9f7aea\n  }\n\n  .lg\\:hover\\:text-purple-600:hover {\n    color: #805ad5\n  }\n\n  .lg\\:hover\\:text-purple-700:hover {\n    color: #6b46c1\n  }\n\n  .lg\\:hover\\:text-purple-800:hover {\n    color: #553c9a\n  }\n\n  .lg\\:hover\\:text-purple-900:hover {\n    color: #44337a\n  }\n\n  .lg\\:hover\\:text-pink-100:hover {\n    color: #fff5f7\n  }\n\n  .lg\\:hover\\:text-pink-200:hover {\n    color: #fed7e2\n  }\n\n  .lg\\:hover\\:text-pink-300:hover {\n    color: #fbb6ce\n  }\n\n  .lg\\:hover\\:text-pink-400:hover {\n    color: #f687b3\n  }\n\n  .lg\\:hover\\:text-pink-500:hover {\n    color: #ed64a6\n  }\n\n  .lg\\:hover\\:text-pink-600:hover {\n    color: #d53f8c\n  }\n\n  .lg\\:hover\\:text-pink-700:hover {\n    color: #b83280\n  }\n\n  .lg\\:hover\\:text-pink-800:hover {\n    color: #97266d\n  }\n\n  .lg\\:hover\\:text-pink-900:hover {\n    color: #702459\n  }\n\n  .lg\\:focus\\:text-transparent:focus {\n    color: transparent\n  }\n\n  .lg\\:focus\\:text-black:focus {\n    color: #000\n  }\n\n  .lg\\:focus\\:text-white:focus {\n    color: #fff\n  }\n\n  .lg\\:focus\\:text-gray-100:focus {\n    color: #f7fafc\n  }\n\n  .lg\\:focus\\:text-gray-200:focus {\n    color: #edf2f7\n  }\n\n  .lg\\:focus\\:text-gray-300:focus {\n    color: #e2e8f0\n  }\n\n  .lg\\:focus\\:text-gray-400:focus {\n    color: #cbd5e0\n  }\n\n  .lg\\:focus\\:text-gray-500:focus {\n    color: #a0aec0\n  }\n\n  .lg\\:focus\\:text-gray-600:focus {\n    color: #718096\n  }\n\n  .lg\\:focus\\:text-gray-700:focus {\n    color: #4a5568\n  }\n\n  .lg\\:focus\\:text-gray-800:focus {\n    color: #2d3748\n  }\n\n  .lg\\:focus\\:text-gray-900:focus {\n    color: #1a202c\n  }\n\n  .lg\\:focus\\:text-red-100:focus {\n    color: #fff5f5\n  }\n\n  .lg\\:focus\\:text-red-200:focus {\n    color: #fed7d7\n  }\n\n  .lg\\:focus\\:text-red-300:focus {\n    color: #feb2b2\n  }\n\n  .lg\\:focus\\:text-red-400:focus {\n    color: #fc8181\n  }\n\n  .lg\\:focus\\:text-red-500:focus {\n    color: #f56565\n  }\n\n  .lg\\:focus\\:text-red-600:focus {\n    color: #e53e3e\n  }\n\n  .lg\\:focus\\:text-red-700:focus {\n    color: #c53030\n  }\n\n  .lg\\:focus\\:text-red-800:focus {\n    color: #9b2c2c\n  }\n\n  .lg\\:focus\\:text-red-900:focus {\n    color: #742a2a\n  }\n\n  .lg\\:focus\\:text-orange-100:focus {\n    color: #fffaf0\n  }\n\n  .lg\\:focus\\:text-orange-200:focus {\n    color: #feebc8\n  }\n\n  .lg\\:focus\\:text-orange-300:focus {\n    color: #fbd38d\n  }\n\n  .lg\\:focus\\:text-orange-400:focus {\n    color: #f6ad55\n  }\n\n  .lg\\:focus\\:text-orange-500:focus {\n    color: #ed8936\n  }\n\n  .lg\\:focus\\:text-orange-600:focus {\n    color: #dd6b20\n  }\n\n  .lg\\:focus\\:text-orange-700:focus {\n    color: #c05621\n  }\n\n  .lg\\:focus\\:text-orange-800:focus {\n    color: #9c4221\n  }\n\n  .lg\\:focus\\:text-orange-900:focus {\n    color: #7b341e\n  }\n\n  .lg\\:focus\\:text-yellow-100:focus {\n    color: #fffff0\n  }\n\n  .lg\\:focus\\:text-yellow-200:focus {\n    color: #fefcbf\n  }\n\n  .lg\\:focus\\:text-yellow-300:focus {\n    color: #faf089\n  }\n\n  .lg\\:focus\\:text-yellow-400:focus {\n    color: #f6e05e\n  }\n\n  .lg\\:focus\\:text-yellow-500:focus {\n    color: #ecc94b\n  }\n\n  .lg\\:focus\\:text-yellow-600:focus {\n    color: #d69e2e\n  }\n\n  .lg\\:focus\\:text-yellow-700:focus {\n    color: #b7791f\n  }\n\n  .lg\\:focus\\:text-yellow-800:focus {\n    color: #975a16\n  }\n\n  .lg\\:focus\\:text-yellow-900:focus {\n    color: #744210\n  }\n\n  .lg\\:focus\\:text-green-100:focus {\n    color: #f0fff4\n  }\n\n  .lg\\:focus\\:text-green-200:focus {\n    color: #c6f6d5\n  }\n\n  .lg\\:focus\\:text-green-300:focus {\n    color: #9ae6b4\n  }\n\n  .lg\\:focus\\:text-green-400:focus {\n    color: #68d391\n  }\n\n  .lg\\:focus\\:text-green-500:focus {\n    color: #48bb78\n  }\n\n  .lg\\:focus\\:text-green-600:focus {\n    color: #38a169\n  }\n\n  .lg\\:focus\\:text-green-700:focus {\n    color: #2f855a\n  }\n\n  .lg\\:focus\\:text-green-800:focus {\n    color: #276749\n  }\n\n  .lg\\:focus\\:text-green-900:focus {\n    color: #22543d\n  }\n\n  .lg\\:focus\\:text-teal-100:focus {\n    color: #e6fffa\n  }\n\n  .lg\\:focus\\:text-teal-200:focus {\n    color: #b2f5ea\n  }\n\n  .lg\\:focus\\:text-teal-300:focus {\n    color: #81e6d9\n  }\n\n  .lg\\:focus\\:text-teal-400:focus {\n    color: #4fd1c5\n  }\n\n  .lg\\:focus\\:text-teal-500:focus {\n    color: #38b2ac\n  }\n\n  .lg\\:focus\\:text-teal-600:focus {\n    color: #319795\n  }\n\n  .lg\\:focus\\:text-teal-700:focus {\n    color: #2c7a7b\n  }\n\n  .lg\\:focus\\:text-teal-800:focus {\n    color: #285e61\n  }\n\n  .lg\\:focus\\:text-teal-900:focus {\n    color: #234e52\n  }\n\n  .lg\\:focus\\:text-blue-100:focus {\n    color: #ebf8ff\n  }\n\n  .lg\\:focus\\:text-blue-200:focus {\n    color: #bee3f8\n  }\n\n  .lg\\:focus\\:text-blue-300:focus {\n    color: #90cdf4\n  }\n\n  .lg\\:focus\\:text-blue-400:focus {\n    color: #63b3ed\n  }\n\n  .lg\\:focus\\:text-blue-500:focus {\n    color: #4299e1\n  }\n\n  .lg\\:focus\\:text-blue-600:focus {\n    color: #3182ce\n  }\n\n  .lg\\:focus\\:text-blue-700:focus {\n    color: #2b6cb0\n  }\n\n  .lg\\:focus\\:text-blue-800:focus {\n    color: #2c5282\n  }\n\n  .lg\\:focus\\:text-blue-900:focus {\n    color: #2a4365\n  }\n\n  .lg\\:focus\\:text-indigo-100:focus {\n    color: #ebf4ff\n  }\n\n  .lg\\:focus\\:text-indigo-200:focus {\n    color: #c3dafe\n  }\n\n  .lg\\:focus\\:text-indigo-300:focus {\n    color: #a3bffa\n  }\n\n  .lg\\:focus\\:text-indigo-400:focus {\n    color: #7f9cf5\n  }\n\n  .lg\\:focus\\:text-indigo-500:focus {\n    color: #667eea\n  }\n\n  .lg\\:focus\\:text-indigo-600:focus {\n    color: #5a67d8\n  }\n\n  .lg\\:focus\\:text-indigo-700:focus {\n    color: #4c51bf\n  }\n\n  .lg\\:focus\\:text-indigo-800:focus {\n    color: #434190\n  }\n\n  .lg\\:focus\\:text-indigo-900:focus {\n    color: #3c366b\n  }\n\n  .lg\\:focus\\:text-purple-100:focus {\n    color: #faf5ff\n  }\n\n  .lg\\:focus\\:text-purple-200:focus {\n    color: #e9d8fd\n  }\n\n  .lg\\:focus\\:text-purple-300:focus {\n    color: #d6bcfa\n  }\n\n  .lg\\:focus\\:text-purple-400:focus {\n    color: #b794f4\n  }\n\n  .lg\\:focus\\:text-purple-500:focus {\n    color: #9f7aea\n  }\n\n  .lg\\:focus\\:text-purple-600:focus {\n    color: #805ad5\n  }\n\n  .lg\\:focus\\:text-purple-700:focus {\n    color: #6b46c1\n  }\n\n  .lg\\:focus\\:text-purple-800:focus {\n    color: #553c9a\n  }\n\n  .lg\\:focus\\:text-purple-900:focus {\n    color: #44337a\n  }\n\n  .lg\\:focus\\:text-pink-100:focus {\n    color: #fff5f7\n  }\n\n  .lg\\:focus\\:text-pink-200:focus {\n    color: #fed7e2\n  }\n\n  .lg\\:focus\\:text-pink-300:focus {\n    color: #fbb6ce\n  }\n\n  .lg\\:focus\\:text-pink-400:focus {\n    color: #f687b3\n  }\n\n  .lg\\:focus\\:text-pink-500:focus {\n    color: #ed64a6\n  }\n\n  .lg\\:focus\\:text-pink-600:focus {\n    color: #d53f8c\n  }\n\n  .lg\\:focus\\:text-pink-700:focus {\n    color: #b83280\n  }\n\n  .lg\\:focus\\:text-pink-800:focus {\n    color: #97266d\n  }\n\n  .lg\\:focus\\:text-pink-900:focus {\n    color: #702459\n  }\n\n  .lg\\:text-xs {\n    font-size: 0.75rem\n  }\n\n  .lg\\:text-sm {\n    font-size: 0.875rem\n  }\n\n  .lg\\:text-base {\n    font-size: 1rem\n  }\n\n  .lg\\:text-lg {\n    font-size: 1.125rem\n  }\n\n  .lg\\:text-xl {\n    font-size: 1.25rem\n  }\n\n  .lg\\:text-2xl {\n    font-size: 1.5rem\n  }\n\n  .lg\\:text-3xl {\n    font-size: 1.875rem\n  }\n\n  .lg\\:text-4xl {\n    font-size: 2.25rem\n  }\n\n  .lg\\:text-5xl {\n    font-size: 3rem\n  }\n\n  .lg\\:text-6xl {\n    font-size: 4rem\n  }\n\n  .lg\\:italic {\n    font-style: italic\n  }\n\n  .lg\\:not-italic {\n    font-style: normal\n  }\n\n  .lg\\:uppercase {\n    text-transform: uppercase\n  }\n\n  .lg\\:lowercase {\n    text-transform: lowercase\n  }\n\n  .lg\\:capitalize {\n    text-transform: capitalize\n  }\n\n  .lg\\:normal-case {\n    text-transform: none\n  }\n\n  .lg\\:underline {\n    text-decoration: underline\n  }\n\n  .lg\\:line-through {\n    text-decoration: line-through\n  }\n\n  .lg\\:no-underline {\n    text-decoration: none\n  }\n\n  .lg\\:hover\\:underline:hover {\n    text-decoration: underline\n  }\n\n  .lg\\:hover\\:line-through:hover {\n    text-decoration: line-through\n  }\n\n  .lg\\:hover\\:no-underline:hover {\n    text-decoration: none\n  }\n\n  .lg\\:focus\\:underline:focus {\n    text-decoration: underline\n  }\n\n  .lg\\:focus\\:line-through:focus {\n    text-decoration: line-through\n  }\n\n  .lg\\:focus\\:no-underline:focus {\n    text-decoration: none\n  }\n\n  .lg\\:antialiased {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale\n  }\n\n  .lg\\:subpixel-antialiased {\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto\n  }\n\n  .lg\\:tracking-tighter {\n    letter-spacing: -0.05em\n  }\n\n  .lg\\:tracking-tight {\n    letter-spacing: -0.025em\n  }\n\n  .lg\\:tracking-normal {\n    letter-spacing: 0\n  }\n\n  .lg\\:tracking-wide {\n    letter-spacing: 0.025em\n  }\n\n  .lg\\:tracking-wider {\n    letter-spacing: 0.05em\n  }\n\n  .lg\\:tracking-widest {\n    letter-spacing: 0.1em\n  }\n\n  .lg\\:select-none {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none\n  }\n\n  .lg\\:select-text {\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text\n  }\n\n  .lg\\:select-all {\n    -webkit-user-select: all;\n       -moz-user-select: all;\n        -ms-user-select: all;\n            user-select: all\n  }\n\n  .lg\\:select-auto {\n    -webkit-user-select: auto;\n       -moz-user-select: auto;\n        -ms-user-select: auto;\n            user-select: auto\n  }\n\n  .lg\\:align-baseline {\n    vertical-align: baseline\n  }\n\n  .lg\\:align-top {\n    vertical-align: top\n  }\n\n  .lg\\:align-middle {\n    vertical-align: middle\n  }\n\n  .lg\\:align-bottom {\n    vertical-align: bottom\n  }\n\n  .lg\\:align-text-top {\n    vertical-align: text-top\n  }\n\n  .lg\\:align-text-bottom {\n    vertical-align: text-bottom\n  }\n\n  .lg\\:visible {\n    visibility: visible\n  }\n\n  .lg\\:invisible {\n    visibility: hidden\n  }\n\n  .lg\\:whitespace-normal {\n    white-space: normal\n  }\n\n  .lg\\:whitespace-no-wrap {\n    white-space: nowrap\n  }\n\n  .lg\\:whitespace-pre {\n    white-space: pre\n  }\n\n  .lg\\:whitespace-pre-line {\n    white-space: pre-line\n  }\n\n  .lg\\:whitespace-pre-wrap {\n    white-space: pre-wrap\n  }\n\n  .lg\\:break-normal {\n    overflow-wrap: normal;\n    word-break: normal\n  }\n\n  .lg\\:break-words {\n    overflow-wrap: break-word\n  }\n\n  .lg\\:break-all {\n    word-break: break-all\n  }\n\n  .lg\\:truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap\n  }\n\n  .lg\\:w-0 {\n    width: 0\n  }\n\n  .lg\\:w-1 {\n    width: 0.25rem\n  }\n\n  .lg\\:w-2 {\n    width: 0.5rem\n  }\n\n  .lg\\:w-3 {\n    width: 0.75rem\n  }\n\n  .lg\\:w-4 {\n    width: 1rem\n  }\n\n  .lg\\:w-5 {\n    width: 1.25rem\n  }\n\n  .lg\\:w-6 {\n    width: 1.5rem\n  }\n\n  .lg\\:w-8 {\n    width: 2rem\n  }\n\n  .lg\\:w-10 {\n    width: 2.5rem\n  }\n\n  .lg\\:w-12 {\n    width: 3rem\n  }\n\n  .lg\\:w-16 {\n    width: 4rem\n  }\n\n  .lg\\:w-20 {\n    width: 5rem\n  }\n\n  .lg\\:w-24 {\n    width: 6rem\n  }\n\n  .lg\\:w-32 {\n    width: 8rem\n  }\n\n  .lg\\:w-40 {\n    width: 10rem\n  }\n\n  .lg\\:w-48 {\n    width: 12rem\n  }\n\n  .lg\\:w-56 {\n    width: 14rem\n  }\n\n  .lg\\:w-64 {\n    width: 16rem\n  }\n\n  .lg\\:w-auto {\n    width: auto\n  }\n\n  .lg\\:w-px {\n    width: 1px\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%\n  }\n\n  .lg\\:w-1\\/3 {\n    width: 33.333333%\n  }\n\n  .lg\\:w-2\\/3 {\n    width: 66.666667%\n  }\n\n  .lg\\:w-1\\/4 {\n    width: 25%\n  }\n\n  .lg\\:w-2\\/4 {\n    width: 50%\n  }\n\n  .lg\\:w-3\\/4 {\n    width: 75%\n  }\n\n  .lg\\:w-1\\/5 {\n    width: 20%\n  }\n\n  .lg\\:w-2\\/5 {\n    width: 40%\n  }\n\n  .lg\\:w-3\\/5 {\n    width: 60%\n  }\n\n  .lg\\:w-4\\/5 {\n    width: 80%\n  }\n\n  .lg\\:w-1\\/6 {\n    width: 16.666667%\n  }\n\n  .lg\\:w-2\\/6 {\n    width: 33.333333%\n  }\n\n  .lg\\:w-3\\/6 {\n    width: 50%\n  }\n\n  .lg\\:w-4\\/6 {\n    width: 66.666667%\n  }\n\n  .lg\\:w-5\\/6 {\n    width: 83.333333%\n  }\n\n  .lg\\:w-1\\/12 {\n    width: 8.333333%\n  }\n\n  .lg\\:w-2\\/12 {\n    width: 16.666667%\n  }\n\n  .lg\\:w-3\\/12 {\n    width: 25%\n  }\n\n  .lg\\:w-4\\/12 {\n    width: 33.333333%\n  }\n\n  .lg\\:w-5\\/12 {\n    width: 41.666667%\n  }\n\n  .lg\\:w-6\\/12 {\n    width: 50%\n  }\n\n  .lg\\:w-7\\/12 {\n    width: 58.333333%\n  }\n\n  .lg\\:w-8\\/12 {\n    width: 66.666667%\n  }\n\n  .lg\\:w-9\\/12 {\n    width: 75%\n  }\n\n  .lg\\:w-10\\/12 {\n    width: 83.333333%\n  }\n\n  .lg\\:w-11\\/12 {\n    width: 91.666667%\n  }\n\n  .lg\\:w-full {\n    width: 100%\n  }\n\n  .lg\\:w-screen {\n    width: 100vw\n  }\n\n  .lg\\:z-0 {\n    z-index: 0\n  }\n\n  .lg\\:z-10 {\n    z-index: 10\n  }\n\n  .lg\\:z-20 {\n    z-index: 20\n  }\n\n  .lg\\:z-30 {\n    z-index: 30\n  }\n\n  .lg\\:z-40 {\n    z-index: 40\n  }\n\n  .lg\\:z-50 {\n    z-index: 50\n  }\n\n  .lg\\:z-auto {\n    z-index: auto\n  }\n}\n\n@media (min-width: 1280px) {\n  .xl\\:sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0\n  }\n\n  .xl\\:not-sr-only {\n    position: static;\n    width: auto;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n    white-space: normal\n  }\n\n  .xl\\:focus\\:sr-only:focus {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0\n  }\n\n  .xl\\:focus\\:not-sr-only:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n    white-space: normal\n  }\n\n  .xl\\:appearance-none {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none\n  }\n\n  .xl\\:bg-fixed {\n    background-attachment: fixed\n  }\n\n  .xl\\:bg-local {\n    background-attachment: local\n  }\n\n  .xl\\:bg-scroll {\n    background-attachment: scroll\n  }\n\n  .xl\\:bg-transparent {\n    background-color: transparent\n  }\n\n  .xl\\:bg-black {\n    background-color: #000\n  }\n\n  .xl\\:bg-white {\n    background-color: #fff\n  }\n\n  .xl\\:bg-gray-100 {\n    background-color: #f7fafc\n  }\n\n  .xl\\:bg-gray-200 {\n    background-color: #edf2f7\n  }\n\n  .xl\\:bg-gray-300 {\n    background-color: #e2e8f0\n  }\n\n  .xl\\:bg-gray-400 {\n    background-color: #cbd5e0\n  }\n\n  .xl\\:bg-gray-500 {\n    background-color: #a0aec0\n  }\n\n  .xl\\:bg-gray-600 {\n    background-color: #718096\n  }\n\n  .xl\\:bg-gray-700 {\n    background-color: #4a5568\n  }\n\n  .xl\\:bg-gray-800 {\n    background-color: #2d3748\n  }\n\n  .xl\\:bg-gray-900 {\n    background-color: #1a202c\n  }\n\n  .xl\\:bg-red-100 {\n    background-color: #fff5f5\n  }\n\n  .xl\\:bg-red-200 {\n    background-color: #fed7d7\n  }\n\n  .xl\\:bg-red-300 {\n    background-color: #feb2b2\n  }\n\n  .xl\\:bg-red-400 {\n    background-color: #fc8181\n  }\n\n  .xl\\:bg-red-500 {\n    background-color: #f56565\n  }\n\n  .xl\\:bg-red-600 {\n    background-color: #e53e3e\n  }\n\n  .xl\\:bg-red-700 {\n    background-color: #c53030\n  }\n\n  .xl\\:bg-red-800 {\n    background-color: #9b2c2c\n  }\n\n  .xl\\:bg-red-900 {\n    background-color: #742a2a\n  }\n\n  .xl\\:bg-orange-100 {\n    background-color: #fffaf0\n  }\n\n  .xl\\:bg-orange-200 {\n    background-color: #feebc8\n  }\n\n  .xl\\:bg-orange-300 {\n    background-color: #fbd38d\n  }\n\n  .xl\\:bg-orange-400 {\n    background-color: #f6ad55\n  }\n\n  .xl\\:bg-orange-500 {\n    background-color: #ed8936\n  }\n\n  .xl\\:bg-orange-600 {\n    background-color: #dd6b20\n  }\n\n  .xl\\:bg-orange-700 {\n    background-color: #c05621\n  }\n\n  .xl\\:bg-orange-800 {\n    background-color: #9c4221\n  }\n\n  .xl\\:bg-orange-900 {\n    background-color: #7b341e\n  }\n\n  .xl\\:bg-yellow-100 {\n    background-color: #fffff0\n  }\n\n  .xl\\:bg-yellow-200 {\n    background-color: #fefcbf\n  }\n\n  .xl\\:bg-yellow-300 {\n    background-color: #faf089\n  }\n\n  .xl\\:bg-yellow-400 {\n    background-color: #f6e05e\n  }\n\n  .xl\\:bg-yellow-500 {\n    background-color: #ecc94b\n  }\n\n  .xl\\:bg-yellow-600 {\n    background-color: #d69e2e\n  }\n\n  .xl\\:bg-yellow-700 {\n    background-color: #b7791f\n  }\n\n  .xl\\:bg-yellow-800 {\n    background-color: #975a16\n  }\n\n  .xl\\:bg-yellow-900 {\n    background-color: #744210\n  }\n\n  .xl\\:bg-green-100 {\n    background-color: #f0fff4\n  }\n\n  .xl\\:bg-green-200 {\n    background-color: #c6f6d5\n  }\n\n  .xl\\:bg-green-300 {\n    background-color: #9ae6b4\n  }\n\n  .xl\\:bg-green-400 {\n    background-color: #68d391\n  }\n\n  .xl\\:bg-green-500 {\n    background-color: #48bb78\n  }\n\n  .xl\\:bg-green-600 {\n    background-color: #38a169\n  }\n\n  .xl\\:bg-green-700 {\n    background-color: #2f855a\n  }\n\n  .xl\\:bg-green-800 {\n    background-color: #276749\n  }\n\n  .xl\\:bg-green-900 {\n    background-color: #22543d\n  }\n\n  .xl\\:bg-teal-100 {\n    background-color: #e6fffa\n  }\n\n  .xl\\:bg-teal-200 {\n    background-color: #b2f5ea\n  }\n\n  .xl\\:bg-teal-300 {\n    background-color: #81e6d9\n  }\n\n  .xl\\:bg-teal-400 {\n    background-color: #4fd1c5\n  }\n\n  .xl\\:bg-teal-500 {\n    background-color: #38b2ac\n  }\n\n  .xl\\:bg-teal-600 {\n    background-color: #319795\n  }\n\n  .xl\\:bg-teal-700 {\n    background-color: #2c7a7b\n  }\n\n  .xl\\:bg-teal-800 {\n    background-color: #285e61\n  }\n\n  .xl\\:bg-teal-900 {\n    background-color: #234e52\n  }\n\n  .xl\\:bg-blue-100 {\n    background-color: #ebf8ff\n  }\n\n  .xl\\:bg-blue-200 {\n    background-color: #bee3f8\n  }\n\n  .xl\\:bg-blue-300 {\n    background-color: #90cdf4\n  }\n\n  .xl\\:bg-blue-400 {\n    background-color: #63b3ed\n  }\n\n  .xl\\:bg-blue-500 {\n    background-color: #4299e1\n  }\n\n  .xl\\:bg-blue-600 {\n    background-color: #3182ce\n  }\n\n  .xl\\:bg-blue-700 {\n    background-color: #2b6cb0\n  }\n\n  .xl\\:bg-blue-800 {\n    background-color: #2c5282\n  }\n\n  .xl\\:bg-blue-900 {\n    background-color: #2a4365\n  }\n\n  .xl\\:bg-indigo-100 {\n    background-color: #ebf4ff\n  }\n\n  .xl\\:bg-indigo-200 {\n    background-color: #c3dafe\n  }\n\n  .xl\\:bg-indigo-300 {\n    background-color: #a3bffa\n  }\n\n  .xl\\:bg-indigo-400 {\n    background-color: #7f9cf5\n  }\n\n  .xl\\:bg-indigo-500 {\n    background-color: #667eea\n  }\n\n  .xl\\:bg-indigo-600 {\n    background-color: #5a67d8\n  }\n\n  .xl\\:bg-indigo-700 {\n    background-color: #4c51bf\n  }\n\n  .xl\\:bg-indigo-800 {\n    background-color: #434190\n  }\n\n  .xl\\:bg-indigo-900 {\n    background-color: #3c366b\n  }\n\n  .xl\\:bg-purple-100 {\n    background-color: #faf5ff\n  }\n\n  .xl\\:bg-purple-200 {\n    background-color: #e9d8fd\n  }\n\n  .xl\\:bg-purple-300 {\n    background-color: #d6bcfa\n  }\n\n  .xl\\:bg-purple-400 {\n    background-color: #b794f4\n  }\n\n  .xl\\:bg-purple-500 {\n    background-color: #9f7aea\n  }\n\n  .xl\\:bg-purple-600 {\n    background-color: #805ad5\n  }\n\n  .xl\\:bg-purple-700 {\n    background-color: #6b46c1\n  }\n\n  .xl\\:bg-purple-800 {\n    background-color: #553c9a\n  }\n\n  .xl\\:bg-purple-900 {\n    background-color: #44337a\n  }\n\n  .xl\\:bg-pink-100 {\n    background-color: #fff5f7\n  }\n\n  .xl\\:bg-pink-200 {\n    background-color: #fed7e2\n  }\n\n  .xl\\:bg-pink-300 {\n    background-color: #fbb6ce\n  }\n\n  .xl\\:bg-pink-400 {\n    background-color: #f687b3\n  }\n\n  .xl\\:bg-pink-500 {\n    background-color: #ed64a6\n  }\n\n  .xl\\:bg-pink-600 {\n    background-color: #d53f8c\n  }\n\n  .xl\\:bg-pink-700 {\n    background-color: #b83280\n  }\n\n  .xl\\:bg-pink-800 {\n    background-color: #97266d\n  }\n\n  .xl\\:bg-pink-900 {\n    background-color: #702459\n  }\n\n  .xl\\:hover\\:bg-transparent:hover {\n    background-color: transparent\n  }\n\n  .xl\\:hover\\:bg-black:hover {\n    background-color: #000\n  }\n\n  .xl\\:hover\\:bg-white:hover {\n    background-color: #fff\n  }\n\n  .xl\\:hover\\:bg-gray-100:hover {\n    background-color: #f7fafc\n  }\n\n  .xl\\:hover\\:bg-gray-200:hover {\n    background-color: #edf2f7\n  }\n\n  .xl\\:hover\\:bg-gray-300:hover {\n    background-color: #e2e8f0\n  }\n\n  .xl\\:hover\\:bg-gray-400:hover {\n    background-color: #cbd5e0\n  }\n\n  .xl\\:hover\\:bg-gray-500:hover {\n    background-color: #a0aec0\n  }\n\n  .xl\\:hover\\:bg-gray-600:hover {\n    background-color: #718096\n  }\n\n  .xl\\:hover\\:bg-gray-700:hover {\n    background-color: #4a5568\n  }\n\n  .xl\\:hover\\:bg-gray-800:hover {\n    background-color: #2d3748\n  }\n\n  .xl\\:hover\\:bg-gray-900:hover {\n    background-color: #1a202c\n  }\n\n  .xl\\:hover\\:bg-red-100:hover {\n    background-color: #fff5f5\n  }\n\n  .xl\\:hover\\:bg-red-200:hover {\n    background-color: #fed7d7\n  }\n\n  .xl\\:hover\\:bg-red-300:hover {\n    background-color: #feb2b2\n  }\n\n  .xl\\:hover\\:bg-red-400:hover {\n    background-color: #fc8181\n  }\n\n  .xl\\:hover\\:bg-red-500:hover {\n    background-color: #f56565\n  }\n\n  .xl\\:hover\\:bg-red-600:hover {\n    background-color: #e53e3e\n  }\n\n  .xl\\:hover\\:bg-red-700:hover {\n    background-color: #c53030\n  }\n\n  .xl\\:hover\\:bg-red-800:hover {\n    background-color: #9b2c2c\n  }\n\n  .xl\\:hover\\:bg-red-900:hover {\n    background-color: #742a2a\n  }\n\n  .xl\\:hover\\:bg-orange-100:hover {\n    background-color: #fffaf0\n  }\n\n  .xl\\:hover\\:bg-orange-200:hover {\n    background-color: #feebc8\n  }\n\n  .xl\\:hover\\:bg-orange-300:hover {\n    background-color: #fbd38d\n  }\n\n  .xl\\:hover\\:bg-orange-400:hover {\n    background-color: #f6ad55\n  }\n\n  .xl\\:hover\\:bg-orange-500:hover {\n    background-color: #ed8936\n  }\n\n  .xl\\:hover\\:bg-orange-600:hover {\n    background-color: #dd6b20\n  }\n\n  .xl\\:hover\\:bg-orange-700:hover {\n    background-color: #c05621\n  }\n\n  .xl\\:hover\\:bg-orange-800:hover {\n    background-color: #9c4221\n  }\n\n  .xl\\:hover\\:bg-orange-900:hover {\n    background-color: #7b341e\n  }\n\n  .xl\\:hover\\:bg-yellow-100:hover {\n    background-color: #fffff0\n  }\n\n  .xl\\:hover\\:bg-yellow-200:hover {\n    background-color: #fefcbf\n  }\n\n  .xl\\:hover\\:bg-yellow-300:hover {\n    background-color: #faf089\n  }\n\n  .xl\\:hover\\:bg-yellow-400:hover {\n    background-color: #f6e05e\n  }\n\n  .xl\\:hover\\:bg-yellow-500:hover {\n    background-color: #ecc94b\n  }\n\n  .xl\\:hover\\:bg-yellow-600:hover {\n    background-color: #d69e2e\n  }\n\n  .xl\\:hover\\:bg-yellow-700:hover {\n    background-color: #b7791f\n  }\n\n  .xl\\:hover\\:bg-yellow-800:hover {\n    background-color: #975a16\n  }\n\n  .xl\\:hover\\:bg-yellow-900:hover {\n    background-color: #744210\n  }\n\n  .xl\\:hover\\:bg-green-100:hover {\n    background-color: #f0fff4\n  }\n\n  .xl\\:hover\\:bg-green-200:hover {\n    background-color: #c6f6d5\n  }\n\n  .xl\\:hover\\:bg-green-300:hover {\n    background-color: #9ae6b4\n  }\n\n  .xl\\:hover\\:bg-green-400:hover {\n    background-color: #68d391\n  }\n\n  .xl\\:hover\\:bg-green-500:hover {\n    background-color: #48bb78\n  }\n\n  .xl\\:hover\\:bg-green-600:hover {\n    background-color: #38a169\n  }\n\n  .xl\\:hover\\:bg-green-700:hover {\n    background-color: #2f855a\n  }\n\n  .xl\\:hover\\:bg-green-800:hover {\n    background-color: #276749\n  }\n\n  .xl\\:hover\\:bg-green-900:hover {\n    background-color: #22543d\n  }\n\n  .xl\\:hover\\:bg-teal-100:hover {\n    background-color: #e6fffa\n  }\n\n  .xl\\:hover\\:bg-teal-200:hover {\n    background-color: #b2f5ea\n  }\n\n  .xl\\:hover\\:bg-teal-300:hover {\n    background-color: #81e6d9\n  }\n\n  .xl\\:hover\\:bg-teal-400:hover {\n    background-color: #4fd1c5\n  }\n\n  .xl\\:hover\\:bg-teal-500:hover {\n    background-color: #38b2ac\n  }\n\n  .xl\\:hover\\:bg-teal-600:hover {\n    background-color: #319795\n  }\n\n  .xl\\:hover\\:bg-teal-700:hover {\n    background-color: #2c7a7b\n  }\n\n  .xl\\:hover\\:bg-teal-800:hover {\n    background-color: #285e61\n  }\n\n  .xl\\:hover\\:bg-teal-900:hover {\n    background-color: #234e52\n  }\n\n  .xl\\:hover\\:bg-blue-100:hover {\n    background-color: #ebf8ff\n  }\n\n  .xl\\:hover\\:bg-blue-200:hover {\n    background-color: #bee3f8\n  }\n\n  .xl\\:hover\\:bg-blue-300:hover {\n    background-color: #90cdf4\n  }\n\n  .xl\\:hover\\:bg-blue-400:hover {\n    background-color: #63b3ed\n  }\n\n  .xl\\:hover\\:bg-blue-500:hover {\n    background-color: #4299e1\n  }\n\n  .xl\\:hover\\:bg-blue-600:hover {\n    background-color: #3182ce\n  }\n\n  .xl\\:hover\\:bg-blue-700:hover {\n    background-color: #2b6cb0\n  }\n\n  .xl\\:hover\\:bg-blue-800:hover {\n    background-color: #2c5282\n  }\n\n  .xl\\:hover\\:bg-blue-900:hover {\n    background-color: #2a4365\n  }\n\n  .xl\\:hover\\:bg-indigo-100:hover {\n    background-color: #ebf4ff\n  }\n\n  .xl\\:hover\\:bg-indigo-200:hover {\n    background-color: #c3dafe\n  }\n\n  .xl\\:hover\\:bg-indigo-300:hover {\n    background-color: #a3bffa\n  }\n\n  .xl\\:hover\\:bg-indigo-400:hover {\n    background-color: #7f9cf5\n  }\n\n  .xl\\:hover\\:bg-indigo-500:hover {\n    background-color: #667eea\n  }\n\n  .xl\\:hover\\:bg-indigo-600:hover {\n    background-color: #5a67d8\n  }\n\n  .xl\\:hover\\:bg-indigo-700:hover {\n    background-color: #4c51bf\n  }\n\n  .xl\\:hover\\:bg-indigo-800:hover {\n    background-color: #434190\n  }\n\n  .xl\\:hover\\:bg-indigo-900:hover {\n    background-color: #3c366b\n  }\n\n  .xl\\:hover\\:bg-purple-100:hover {\n    background-color: #faf5ff\n  }\n\n  .xl\\:hover\\:bg-purple-200:hover {\n    background-color: #e9d8fd\n  }\n\n  .xl\\:hover\\:bg-purple-300:hover {\n    background-color: #d6bcfa\n  }\n\n  .xl\\:hover\\:bg-purple-400:hover {\n    background-color: #b794f4\n  }\n\n  .xl\\:hover\\:bg-purple-500:hover {\n    background-color: #9f7aea\n  }\n\n  .xl\\:hover\\:bg-purple-600:hover {\n    background-color: #805ad5\n  }\n\n  .xl\\:hover\\:bg-purple-700:hover {\n    background-color: #6b46c1\n  }\n\n  .xl\\:hover\\:bg-purple-800:hover {\n    background-color: #553c9a\n  }\n\n  .xl\\:hover\\:bg-purple-900:hover {\n    background-color: #44337a\n  }\n\n  .xl\\:hover\\:bg-pink-100:hover {\n    background-color: #fff5f7\n  }\n\n  .xl\\:hover\\:bg-pink-200:hover {\n    background-color: #fed7e2\n  }\n\n  .xl\\:hover\\:bg-pink-300:hover {\n    background-color: #fbb6ce\n  }\n\n  .xl\\:hover\\:bg-pink-400:hover {\n    background-color: #f687b3\n  }\n\n  .xl\\:hover\\:bg-pink-500:hover {\n    background-color: #ed64a6\n  }\n\n  .xl\\:hover\\:bg-pink-600:hover {\n    background-color: #d53f8c\n  }\n\n  .xl\\:hover\\:bg-pink-700:hover {\n    background-color: #b83280\n  }\n\n  .xl\\:hover\\:bg-pink-800:hover {\n    background-color: #97266d\n  }\n\n  .xl\\:hover\\:bg-pink-900:hover {\n    background-color: #702459\n  }\n\n  .xl\\:focus\\:bg-transparent:focus {\n    background-color: transparent\n  }\n\n  .xl\\:focus\\:bg-black:focus {\n    background-color: #000\n  }\n\n  .xl\\:focus\\:bg-white:focus {\n    background-color: #fff\n  }\n\n  .xl\\:focus\\:bg-gray-100:focus {\n    background-color: #f7fafc\n  }\n\n  .xl\\:focus\\:bg-gray-200:focus {\n    background-color: #edf2f7\n  }\n\n  .xl\\:focus\\:bg-gray-300:focus {\n    background-color: #e2e8f0\n  }\n\n  .xl\\:focus\\:bg-gray-400:focus {\n    background-color: #cbd5e0\n  }\n\n  .xl\\:focus\\:bg-gray-500:focus {\n    background-color: #a0aec0\n  }\n\n  .xl\\:focus\\:bg-gray-600:focus {\n    background-color: #718096\n  }\n\n  .xl\\:focus\\:bg-gray-700:focus {\n    background-color: #4a5568\n  }\n\n  .xl\\:focus\\:bg-gray-800:focus {\n    background-color: #2d3748\n  }\n\n  .xl\\:focus\\:bg-gray-900:focus {\n    background-color: #1a202c\n  }\n\n  .xl\\:focus\\:bg-red-100:focus {\n    background-color: #fff5f5\n  }\n\n  .xl\\:focus\\:bg-red-200:focus {\n    background-color: #fed7d7\n  }\n\n  .xl\\:focus\\:bg-red-300:focus {\n    background-color: #feb2b2\n  }\n\n  .xl\\:focus\\:bg-red-400:focus {\n    background-color: #fc8181\n  }\n\n  .xl\\:focus\\:bg-red-500:focus {\n    background-color: #f56565\n  }\n\n  .xl\\:focus\\:bg-red-600:focus {\n    background-color: #e53e3e\n  }\n\n  .xl\\:focus\\:bg-red-700:focus {\n    background-color: #c53030\n  }\n\n  .xl\\:focus\\:bg-red-800:focus {\n    background-color: #9b2c2c\n  }\n\n  .xl\\:focus\\:bg-red-900:focus {\n    background-color: #742a2a\n  }\n\n  .xl\\:focus\\:bg-orange-100:focus {\n    background-color: #fffaf0\n  }\n\n  .xl\\:focus\\:bg-orange-200:focus {\n    background-color: #feebc8\n  }\n\n  .xl\\:focus\\:bg-orange-300:focus {\n    background-color: #fbd38d\n  }\n\n  .xl\\:focus\\:bg-orange-400:focus {\n    background-color: #f6ad55\n  }\n\n  .xl\\:focus\\:bg-orange-500:focus {\n    background-color: #ed8936\n  }\n\n  .xl\\:focus\\:bg-orange-600:focus {\n    background-color: #dd6b20\n  }\n\n  .xl\\:focus\\:bg-orange-700:focus {\n    background-color: #c05621\n  }\n\n  .xl\\:focus\\:bg-orange-800:focus {\n    background-color: #9c4221\n  }\n\n  .xl\\:focus\\:bg-orange-900:focus {\n    background-color: #7b341e\n  }\n\n  .xl\\:focus\\:bg-yellow-100:focus {\n    background-color: #fffff0\n  }\n\n  .xl\\:focus\\:bg-yellow-200:focus {\n    background-color: #fefcbf\n  }\n\n  .xl\\:focus\\:bg-yellow-300:focus {\n    background-color: #faf089\n  }\n\n  .xl\\:focus\\:bg-yellow-400:focus {\n    background-color: #f6e05e\n  }\n\n  .xl\\:focus\\:bg-yellow-500:focus {\n    background-color: #ecc94b\n  }\n\n  .xl\\:focus\\:bg-yellow-600:focus {\n    background-color: #d69e2e\n  }\n\n  .xl\\:focus\\:bg-yellow-700:focus {\n    background-color: #b7791f\n  }\n\n  .xl\\:focus\\:bg-yellow-800:focus {\n    background-color: #975a16\n  }\n\n  .xl\\:focus\\:bg-yellow-900:focus {\n    background-color: #744210\n  }\n\n  .xl\\:focus\\:bg-green-100:focus {\n    background-color: #f0fff4\n  }\n\n  .xl\\:focus\\:bg-green-200:focus {\n    background-color: #c6f6d5\n  }\n\n  .xl\\:focus\\:bg-green-300:focus {\n    background-color: #9ae6b4\n  }\n\n  .xl\\:focus\\:bg-green-400:focus {\n    background-color: #68d391\n  }\n\n  .xl\\:focus\\:bg-green-500:focus {\n    background-color: #48bb78\n  }\n\n  .xl\\:focus\\:bg-green-600:focus {\n    background-color: #38a169\n  }\n\n  .xl\\:focus\\:bg-green-700:focus {\n    background-color: #2f855a\n  }\n\n  .xl\\:focus\\:bg-green-800:focus {\n    background-color: #276749\n  }\n\n  .xl\\:focus\\:bg-green-900:focus {\n    background-color: #22543d\n  }\n\n  .xl\\:focus\\:bg-teal-100:focus {\n    background-color: #e6fffa\n  }\n\n  .xl\\:focus\\:bg-teal-200:focus {\n    background-color: #b2f5ea\n  }\n\n  .xl\\:focus\\:bg-teal-300:focus {\n    background-color: #81e6d9\n  }\n\n  .xl\\:focus\\:bg-teal-400:focus {\n    background-color: #4fd1c5\n  }\n\n  .xl\\:focus\\:bg-teal-500:focus {\n    background-color: #38b2ac\n  }\n\n  .xl\\:focus\\:bg-teal-600:focus {\n    background-color: #319795\n  }\n\n  .xl\\:focus\\:bg-teal-700:focus {\n    background-color: #2c7a7b\n  }\n\n  .xl\\:focus\\:bg-teal-800:focus {\n    background-color: #285e61\n  }\n\n  .xl\\:focus\\:bg-teal-900:focus {\n    background-color: #234e52\n  }\n\n  .xl\\:focus\\:bg-blue-100:focus {\n    background-color: #ebf8ff\n  }\n\n  .xl\\:focus\\:bg-blue-200:focus {\n    background-color: #bee3f8\n  }\n\n  .xl\\:focus\\:bg-blue-300:focus {\n    background-color: #90cdf4\n  }\n\n  .xl\\:focus\\:bg-blue-400:focus {\n    background-color: #63b3ed\n  }\n\n  .xl\\:focus\\:bg-blue-500:focus {\n    background-color: #4299e1\n  }\n\n  .xl\\:focus\\:bg-blue-600:focus {\n    background-color: #3182ce\n  }\n\n  .xl\\:focus\\:bg-blue-700:focus {\n    background-color: #2b6cb0\n  }\n\n  .xl\\:focus\\:bg-blue-800:focus {\n    background-color: #2c5282\n  }\n\n  .xl\\:focus\\:bg-blue-900:focus {\n    background-color: #2a4365\n  }\n\n  .xl\\:focus\\:bg-indigo-100:focus {\n    background-color: #ebf4ff\n  }\n\n  .xl\\:focus\\:bg-indigo-200:focus {\n    background-color: #c3dafe\n  }\n\n  .xl\\:focus\\:bg-indigo-300:focus {\n    background-color: #a3bffa\n  }\n\n  .xl\\:focus\\:bg-indigo-400:focus {\n    background-color: #7f9cf5\n  }\n\n  .xl\\:focus\\:bg-indigo-500:focus {\n    background-color: #667eea\n  }\n\n  .xl\\:focus\\:bg-indigo-600:focus {\n    background-color: #5a67d8\n  }\n\n  .xl\\:focus\\:bg-indigo-700:focus {\n    background-color: #4c51bf\n  }\n\n  .xl\\:focus\\:bg-indigo-800:focus {\n    background-color: #434190\n  }\n\n  .xl\\:focus\\:bg-indigo-900:focus {\n    background-color: #3c366b\n  }\n\n  .xl\\:focus\\:bg-purple-100:focus {\n    background-color: #faf5ff\n  }\n\n  .xl\\:focus\\:bg-purple-200:focus {\n    background-color: #e9d8fd\n  }\n\n  .xl\\:focus\\:bg-purple-300:focus {\n    background-color: #d6bcfa\n  }\n\n  .xl\\:focus\\:bg-purple-400:focus {\n    background-color: #b794f4\n  }\n\n  .xl\\:focus\\:bg-purple-500:focus {\n    background-color: #9f7aea\n  }\n\n  .xl\\:focus\\:bg-purple-600:focus {\n    background-color: #805ad5\n  }\n\n  .xl\\:focus\\:bg-purple-700:focus {\n    background-color: #6b46c1\n  }\n\n  .xl\\:focus\\:bg-purple-800:focus {\n    background-color: #553c9a\n  }\n\n  .xl\\:focus\\:bg-purple-900:focus {\n    background-color: #44337a\n  }\n\n  .xl\\:focus\\:bg-pink-100:focus {\n    background-color: #fff5f7\n  }\n\n  .xl\\:focus\\:bg-pink-200:focus {\n    background-color: #fed7e2\n  }\n\n  .xl\\:focus\\:bg-pink-300:focus {\n    background-color: #fbb6ce\n  }\n\n  .xl\\:focus\\:bg-pink-400:focus {\n    background-color: #f687b3\n  }\n\n  .xl\\:focus\\:bg-pink-500:focus {\n    background-color: #ed64a6\n  }\n\n  .xl\\:focus\\:bg-pink-600:focus {\n    background-color: #d53f8c\n  }\n\n  .xl\\:focus\\:bg-pink-700:focus {\n    background-color: #b83280\n  }\n\n  .xl\\:focus\\:bg-pink-800:focus {\n    background-color: #97266d\n  }\n\n  .xl\\:focus\\:bg-pink-900:focus {\n    background-color: #702459\n  }\n\n  .xl\\:bg-bottom {\n    background-position: bottom\n  }\n\n  .xl\\:bg-center {\n    background-position: center\n  }\n\n  .xl\\:bg-left {\n    background-position: left\n  }\n\n  .xl\\:bg-left-bottom {\n    background-position: left bottom\n  }\n\n  .xl\\:bg-left-top {\n    background-position: left top\n  }\n\n  .xl\\:bg-right {\n    background-position: right\n  }\n\n  .xl\\:bg-right-bottom {\n    background-position: right bottom\n  }\n\n  .xl\\:bg-right-top {\n    background-position: right top\n  }\n\n  .xl\\:bg-top {\n    background-position: top\n  }\n\n  .xl\\:bg-repeat {\n    background-repeat: repeat\n  }\n\n  .xl\\:bg-no-repeat {\n    background-repeat: no-repeat\n  }\n\n  .xl\\:bg-repeat-x {\n    background-repeat: repeat-x\n  }\n\n  .xl\\:bg-repeat-y {\n    background-repeat: repeat-y\n  }\n\n  .xl\\:bg-repeat-round {\n    background-repeat: round\n  }\n\n  .xl\\:bg-repeat-space {\n    background-repeat: space\n  }\n\n  .xl\\:bg-auto {\n    background-size: auto\n  }\n\n  .xl\\:bg-cover {\n    background-size: cover\n  }\n\n  .xl\\:bg-contain {\n    background-size: contain\n  }\n\n  .xl\\:border-collapse {\n    border-collapse: collapse\n  }\n\n  .xl\\:border-separate {\n    border-collapse: separate\n  }\n\n  .xl\\:border-transparent {\n    border-color: transparent\n  }\n\n  .xl\\:border-black {\n    border-color: #000\n  }\n\n  .xl\\:border-white {\n    border-color: #fff\n  }\n\n  .xl\\:border-gray-100 {\n    border-color: #f7fafc\n  }\n\n  .xl\\:border-gray-200 {\n    border-color: #edf2f7\n  }\n\n  .xl\\:border-gray-300 {\n    border-color: #e2e8f0\n  }\n\n  .xl\\:border-gray-400 {\n    border-color: #cbd5e0\n  }\n\n  .xl\\:border-gray-500 {\n    border-color: #a0aec0\n  }\n\n  .xl\\:border-gray-600 {\n    border-color: #718096\n  }\n\n  .xl\\:border-gray-700 {\n    border-color: #4a5568\n  }\n\n  .xl\\:border-gray-800 {\n    border-color: #2d3748\n  }\n\n  .xl\\:border-gray-900 {\n    border-color: #1a202c\n  }\n\n  .xl\\:border-red-100 {\n    border-color: #fff5f5\n  }\n\n  .xl\\:border-red-200 {\n    border-color: #fed7d7\n  }\n\n  .xl\\:border-red-300 {\n    border-color: #feb2b2\n  }\n\n  .xl\\:border-red-400 {\n    border-color: #fc8181\n  }\n\n  .xl\\:border-red-500 {\n    border-color: #f56565\n  }\n\n  .xl\\:border-red-600 {\n    border-color: #e53e3e\n  }\n\n  .xl\\:border-red-700 {\n    border-color: #c53030\n  }\n\n  .xl\\:border-red-800 {\n    border-color: #9b2c2c\n  }\n\n  .xl\\:border-red-900 {\n    border-color: #742a2a\n  }\n\n  .xl\\:border-orange-100 {\n    border-color: #fffaf0\n  }\n\n  .xl\\:border-orange-200 {\n    border-color: #feebc8\n  }\n\n  .xl\\:border-orange-300 {\n    border-color: #fbd38d\n  }\n\n  .xl\\:border-orange-400 {\n    border-color: #f6ad55\n  }\n\n  .xl\\:border-orange-500 {\n    border-color: #ed8936\n  }\n\n  .xl\\:border-orange-600 {\n    border-color: #dd6b20\n  }\n\n  .xl\\:border-orange-700 {\n    border-color: #c05621\n  }\n\n  .xl\\:border-orange-800 {\n    border-color: #9c4221\n  }\n\n  .xl\\:border-orange-900 {\n    border-color: #7b341e\n  }\n\n  .xl\\:border-yellow-100 {\n    border-color: #fffff0\n  }\n\n  .xl\\:border-yellow-200 {\n    border-color: #fefcbf\n  }\n\n  .xl\\:border-yellow-300 {\n    border-color: #faf089\n  }\n\n  .xl\\:border-yellow-400 {\n    border-color: #f6e05e\n  }\n\n  .xl\\:border-yellow-500 {\n    border-color: #ecc94b\n  }\n\n  .xl\\:border-yellow-600 {\n    border-color: #d69e2e\n  }\n\n  .xl\\:border-yellow-700 {\n    border-color: #b7791f\n  }\n\n  .xl\\:border-yellow-800 {\n    border-color: #975a16\n  }\n\n  .xl\\:border-yellow-900 {\n    border-color: #744210\n  }\n\n  .xl\\:border-green-100 {\n    border-color: #f0fff4\n  }\n\n  .xl\\:border-green-200 {\n    border-color: #c6f6d5\n  }\n\n  .xl\\:border-green-300 {\n    border-color: #9ae6b4\n  }\n\n  .xl\\:border-green-400 {\n    border-color: #68d391\n  }\n\n  .xl\\:border-green-500 {\n    border-color: #48bb78\n  }\n\n  .xl\\:border-green-600 {\n    border-color: #38a169\n  }\n\n  .xl\\:border-green-700 {\n    border-color: #2f855a\n  }\n\n  .xl\\:border-green-800 {\n    border-color: #276749\n  }\n\n  .xl\\:border-green-900 {\n    border-color: #22543d\n  }\n\n  .xl\\:border-teal-100 {\n    border-color: #e6fffa\n  }\n\n  .xl\\:border-teal-200 {\n    border-color: #b2f5ea\n  }\n\n  .xl\\:border-teal-300 {\n    border-color: #81e6d9\n  }\n\n  .xl\\:border-teal-400 {\n    border-color: #4fd1c5\n  }\n\n  .xl\\:border-teal-500 {\n    border-color: #38b2ac\n  }\n\n  .xl\\:border-teal-600 {\n    border-color: #319795\n  }\n\n  .xl\\:border-teal-700 {\n    border-color: #2c7a7b\n  }\n\n  .xl\\:border-teal-800 {\n    border-color: #285e61\n  }\n\n  .xl\\:border-teal-900 {\n    border-color: #234e52\n  }\n\n  .xl\\:border-blue-100 {\n    border-color: #ebf8ff\n  }\n\n  .xl\\:border-blue-200 {\n    border-color: #bee3f8\n  }\n\n  .xl\\:border-blue-300 {\n    border-color: #90cdf4\n  }\n\n  .xl\\:border-blue-400 {\n    border-color: #63b3ed\n  }\n\n  .xl\\:border-blue-500 {\n    border-color: #4299e1\n  }\n\n  .xl\\:border-blue-600 {\n    border-color: #3182ce\n  }\n\n  .xl\\:border-blue-700 {\n    border-color: #2b6cb0\n  }\n\n  .xl\\:border-blue-800 {\n    border-color: #2c5282\n  }\n\n  .xl\\:border-blue-900 {\n    border-color: #2a4365\n  }\n\n  .xl\\:border-indigo-100 {\n    border-color: #ebf4ff\n  }\n\n  .xl\\:border-indigo-200 {\n    border-color: #c3dafe\n  }\n\n  .xl\\:border-indigo-300 {\n    border-color: #a3bffa\n  }\n\n  .xl\\:border-indigo-400 {\n    border-color: #7f9cf5\n  }\n\n  .xl\\:border-indigo-500 {\n    border-color: #667eea\n  }\n\n  .xl\\:border-indigo-600 {\n    border-color: #5a67d8\n  }\n\n  .xl\\:border-indigo-700 {\n    border-color: #4c51bf\n  }\n\n  .xl\\:border-indigo-800 {\n    border-color: #434190\n  }\n\n  .xl\\:border-indigo-900 {\n    border-color: #3c366b\n  }\n\n  .xl\\:border-purple-100 {\n    border-color: #faf5ff\n  }\n\n  .xl\\:border-purple-200 {\n    border-color: #e9d8fd\n  }\n\n  .xl\\:border-purple-300 {\n    border-color: #d6bcfa\n  }\n\n  .xl\\:border-purple-400 {\n    border-color: #b794f4\n  }\n\n  .xl\\:border-purple-500 {\n    border-color: #9f7aea\n  }\n\n  .xl\\:border-purple-600 {\n    border-color: #805ad5\n  }\n\n  .xl\\:border-purple-700 {\n    border-color: #6b46c1\n  }\n\n  .xl\\:border-purple-800 {\n    border-color: #553c9a\n  }\n\n  .xl\\:border-purple-900 {\n    border-color: #44337a\n  }\n\n  .xl\\:border-pink-100 {\n    border-color: #fff5f7\n  }\n\n  .xl\\:border-pink-200 {\n    border-color: #fed7e2\n  }\n\n  .xl\\:border-pink-300 {\n    border-color: #fbb6ce\n  }\n\n  .xl\\:border-pink-400 {\n    border-color: #f687b3\n  }\n\n  .xl\\:border-pink-500 {\n    border-color: #ed64a6\n  }\n\n  .xl\\:border-pink-600 {\n    border-color: #d53f8c\n  }\n\n  .xl\\:border-pink-700 {\n    border-color: #b83280\n  }\n\n  .xl\\:border-pink-800 {\n    border-color: #97266d\n  }\n\n  .xl\\:border-pink-900 {\n    border-color: #702459\n  }\n\n  .xl\\:hover\\:border-transparent:hover {\n    border-color: transparent\n  }\n\n  .xl\\:hover\\:border-black:hover {\n    border-color: #000\n  }\n\n  .xl\\:hover\\:border-white:hover {\n    border-color: #fff\n  }\n\n  .xl\\:hover\\:border-gray-100:hover {\n    border-color: #f7fafc\n  }\n\n  .xl\\:hover\\:border-gray-200:hover {\n    border-color: #edf2f7\n  }\n\n  .xl\\:hover\\:border-gray-300:hover {\n    border-color: #e2e8f0\n  }\n\n  .xl\\:hover\\:border-gray-400:hover {\n    border-color: #cbd5e0\n  }\n\n  .xl\\:hover\\:border-gray-500:hover {\n    border-color: #a0aec0\n  }\n\n  .xl\\:hover\\:border-gray-600:hover {\n    border-color: #718096\n  }\n\n  .xl\\:hover\\:border-gray-700:hover {\n    border-color: #4a5568\n  }\n\n  .xl\\:hover\\:border-gray-800:hover {\n    border-color: #2d3748\n  }\n\n  .xl\\:hover\\:border-gray-900:hover {\n    border-color: #1a202c\n  }\n\n  .xl\\:hover\\:border-red-100:hover {\n    border-color: #fff5f5\n  }\n\n  .xl\\:hover\\:border-red-200:hover {\n    border-color: #fed7d7\n  }\n\n  .xl\\:hover\\:border-red-300:hover {\n    border-color: #feb2b2\n  }\n\n  .xl\\:hover\\:border-red-400:hover {\n    border-color: #fc8181\n  }\n\n  .xl\\:hover\\:border-red-500:hover {\n    border-color: #f56565\n  }\n\n  .xl\\:hover\\:border-red-600:hover {\n    border-color: #e53e3e\n  }\n\n  .xl\\:hover\\:border-red-700:hover {\n    border-color: #c53030\n  }\n\n  .xl\\:hover\\:border-red-800:hover {\n    border-color: #9b2c2c\n  }\n\n  .xl\\:hover\\:border-red-900:hover {\n    border-color: #742a2a\n  }\n\n  .xl\\:hover\\:border-orange-100:hover {\n    border-color: #fffaf0\n  }\n\n  .xl\\:hover\\:border-orange-200:hover {\n    border-color: #feebc8\n  }\n\n  .xl\\:hover\\:border-orange-300:hover {\n    border-color: #fbd38d\n  }\n\n  .xl\\:hover\\:border-orange-400:hover {\n    border-color: #f6ad55\n  }\n\n  .xl\\:hover\\:border-orange-500:hover {\n    border-color: #ed8936\n  }\n\n  .xl\\:hover\\:border-orange-600:hover {\n    border-color: #dd6b20\n  }\n\n  .xl\\:hover\\:border-orange-700:hover {\n    border-color: #c05621\n  }\n\n  .xl\\:hover\\:border-orange-800:hover {\n    border-color: #9c4221\n  }\n\n  .xl\\:hover\\:border-orange-900:hover {\n    border-color: #7b341e\n  }\n\n  .xl\\:hover\\:border-yellow-100:hover {\n    border-color: #fffff0\n  }\n\n  .xl\\:hover\\:border-yellow-200:hover {\n    border-color: #fefcbf\n  }\n\n  .xl\\:hover\\:border-yellow-300:hover {\n    border-color: #faf089\n  }\n\n  .xl\\:hover\\:border-yellow-400:hover {\n    border-color: #f6e05e\n  }\n\n  .xl\\:hover\\:border-yellow-500:hover {\n    border-color: #ecc94b\n  }\n\n  .xl\\:hover\\:border-yellow-600:hover {\n    border-color: #d69e2e\n  }\n\n  .xl\\:hover\\:border-yellow-700:hover {\n    border-color: #b7791f\n  }\n\n  .xl\\:hover\\:border-yellow-800:hover {\n    border-color: #975a16\n  }\n\n  .xl\\:hover\\:border-yellow-900:hover {\n    border-color: #744210\n  }\n\n  .xl\\:hover\\:border-green-100:hover {\n    border-color: #f0fff4\n  }\n\n  .xl\\:hover\\:border-green-200:hover {\n    border-color: #c6f6d5\n  }\n\n  .xl\\:hover\\:border-green-300:hover {\n    border-color: #9ae6b4\n  }\n\n  .xl\\:hover\\:border-green-400:hover {\n    border-color: #68d391\n  }\n\n  .xl\\:hover\\:border-green-500:hover {\n    border-color: #48bb78\n  }\n\n  .xl\\:hover\\:border-green-600:hover {\n    border-color: #38a169\n  }\n\n  .xl\\:hover\\:border-green-700:hover {\n    border-color: #2f855a\n  }\n\n  .xl\\:hover\\:border-green-800:hover {\n    border-color: #276749\n  }\n\n  .xl\\:hover\\:border-green-900:hover {\n    border-color: #22543d\n  }\n\n  .xl\\:hover\\:border-teal-100:hover {\n    border-color: #e6fffa\n  }\n\n  .xl\\:hover\\:border-teal-200:hover {\n    border-color: #b2f5ea\n  }\n\n  .xl\\:hover\\:border-teal-300:hover {\n    border-color: #81e6d9\n  }\n\n  .xl\\:hover\\:border-teal-400:hover {\n    border-color: #4fd1c5\n  }\n\n  .xl\\:hover\\:border-teal-500:hover {\n    border-color: #38b2ac\n  }\n\n  .xl\\:hover\\:border-teal-600:hover {\n    border-color: #319795\n  }\n\n  .xl\\:hover\\:border-teal-700:hover {\n    border-color: #2c7a7b\n  }\n\n  .xl\\:hover\\:border-teal-800:hover {\n    border-color: #285e61\n  }\n\n  .xl\\:hover\\:border-teal-900:hover {\n    border-color: #234e52\n  }\n\n  .xl\\:hover\\:border-blue-100:hover {\n    border-color: #ebf8ff\n  }\n\n  .xl\\:hover\\:border-blue-200:hover {\n    border-color: #bee3f8\n  }\n\n  .xl\\:hover\\:border-blue-300:hover {\n    border-color: #90cdf4\n  }\n\n  .xl\\:hover\\:border-blue-400:hover {\n    border-color: #63b3ed\n  }\n\n  .xl\\:hover\\:border-blue-500:hover {\n    border-color: #4299e1\n  }\n\n  .xl\\:hover\\:border-blue-600:hover {\n    border-color: #3182ce\n  }\n\n  .xl\\:hover\\:border-blue-700:hover {\n    border-color: #2b6cb0\n  }\n\n  .xl\\:hover\\:border-blue-800:hover {\n    border-color: #2c5282\n  }\n\n  .xl\\:hover\\:border-blue-900:hover {\n    border-color: #2a4365\n  }\n\n  .xl\\:hover\\:border-indigo-100:hover {\n    border-color: #ebf4ff\n  }\n\n  .xl\\:hover\\:border-indigo-200:hover {\n    border-color: #c3dafe\n  }\n\n  .xl\\:hover\\:border-indigo-300:hover {\n    border-color: #a3bffa\n  }\n\n  .xl\\:hover\\:border-indigo-400:hover {\n    border-color: #7f9cf5\n  }\n\n  .xl\\:hover\\:border-indigo-500:hover {\n    border-color: #667eea\n  }\n\n  .xl\\:hover\\:border-indigo-600:hover {\n    border-color: #5a67d8\n  }\n\n  .xl\\:hover\\:border-indigo-700:hover {\n    border-color: #4c51bf\n  }\n\n  .xl\\:hover\\:border-indigo-800:hover {\n    border-color: #434190\n  }\n\n  .xl\\:hover\\:border-indigo-900:hover {\n    border-color: #3c366b\n  }\n\n  .xl\\:hover\\:border-purple-100:hover {\n    border-color: #faf5ff\n  }\n\n  .xl\\:hover\\:border-purple-200:hover {\n    border-color: #e9d8fd\n  }\n\n  .xl\\:hover\\:border-purple-300:hover {\n    border-color: #d6bcfa\n  }\n\n  .xl\\:hover\\:border-purple-400:hover {\n    border-color: #b794f4\n  }\n\n  .xl\\:hover\\:border-purple-500:hover {\n    border-color: #9f7aea\n  }\n\n  .xl\\:hover\\:border-purple-600:hover {\n    border-color: #805ad5\n  }\n\n  .xl\\:hover\\:border-purple-700:hover {\n    border-color: #6b46c1\n  }\n\n  .xl\\:hover\\:border-purple-800:hover {\n    border-color: #553c9a\n  }\n\n  .xl\\:hover\\:border-purple-900:hover {\n    border-color: #44337a\n  }\n\n  .xl\\:hover\\:border-pink-100:hover {\n    border-color: #fff5f7\n  }\n\n  .xl\\:hover\\:border-pink-200:hover {\n    border-color: #fed7e2\n  }\n\n  .xl\\:hover\\:border-pink-300:hover {\n    border-color: #fbb6ce\n  }\n\n  .xl\\:hover\\:border-pink-400:hover {\n    border-color: #f687b3\n  }\n\n  .xl\\:hover\\:border-pink-500:hover {\n    border-color: #ed64a6\n  }\n\n  .xl\\:hover\\:border-pink-600:hover {\n    border-color: #d53f8c\n  }\n\n  .xl\\:hover\\:border-pink-700:hover {\n    border-color: #b83280\n  }\n\n  .xl\\:hover\\:border-pink-800:hover {\n    border-color: #97266d\n  }\n\n  .xl\\:hover\\:border-pink-900:hover {\n    border-color: #702459\n  }\n\n  .xl\\:focus\\:border-transparent:focus {\n    border-color: transparent\n  }\n\n  .xl\\:focus\\:border-black:focus {\n    border-color: #000\n  }\n\n  .xl\\:focus\\:border-white:focus {\n    border-color: #fff\n  }\n\n  .xl\\:focus\\:border-gray-100:focus {\n    border-color: #f7fafc\n  }\n\n  .xl\\:focus\\:border-gray-200:focus {\n    border-color: #edf2f7\n  }\n\n  .xl\\:focus\\:border-gray-300:focus {\n    border-color: #e2e8f0\n  }\n\n  .xl\\:focus\\:border-gray-400:focus {\n    border-color: #cbd5e0\n  }\n\n  .xl\\:focus\\:border-gray-500:focus {\n    border-color: #a0aec0\n  }\n\n  .xl\\:focus\\:border-gray-600:focus {\n    border-color: #718096\n  }\n\n  .xl\\:focus\\:border-gray-700:focus {\n    border-color: #4a5568\n  }\n\n  .xl\\:focus\\:border-gray-800:focus {\n    border-color: #2d3748\n  }\n\n  .xl\\:focus\\:border-gray-900:focus {\n    border-color: #1a202c\n  }\n\n  .xl\\:focus\\:border-red-100:focus {\n    border-color: #fff5f5\n  }\n\n  .xl\\:focus\\:border-red-200:focus {\n    border-color: #fed7d7\n  }\n\n  .xl\\:focus\\:border-red-300:focus {\n    border-color: #feb2b2\n  }\n\n  .xl\\:focus\\:border-red-400:focus {\n    border-color: #fc8181\n  }\n\n  .xl\\:focus\\:border-red-500:focus {\n    border-color: #f56565\n  }\n\n  .xl\\:focus\\:border-red-600:focus {\n    border-color: #e53e3e\n  }\n\n  .xl\\:focus\\:border-red-700:focus {\n    border-color: #c53030\n  }\n\n  .xl\\:focus\\:border-red-800:focus {\n    border-color: #9b2c2c\n  }\n\n  .xl\\:focus\\:border-red-900:focus {\n    border-color: #742a2a\n  }\n\n  .xl\\:focus\\:border-orange-100:focus {\n    border-color: #fffaf0\n  }\n\n  .xl\\:focus\\:border-orange-200:focus {\n    border-color: #feebc8\n  }\n\n  .xl\\:focus\\:border-orange-300:focus {\n    border-color: #fbd38d\n  }\n\n  .xl\\:focus\\:border-orange-400:focus {\n    border-color: #f6ad55\n  }\n\n  .xl\\:focus\\:border-orange-500:focus {\n    border-color: #ed8936\n  }\n\n  .xl\\:focus\\:border-orange-600:focus {\n    border-color: #dd6b20\n  }\n\n  .xl\\:focus\\:border-orange-700:focus {\n    border-color: #c05621\n  }\n\n  .xl\\:focus\\:border-orange-800:focus {\n    border-color: #9c4221\n  }\n\n  .xl\\:focus\\:border-orange-900:focus {\n    border-color: #7b341e\n  }\n\n  .xl\\:focus\\:border-yellow-100:focus {\n    border-color: #fffff0\n  }\n\n  .xl\\:focus\\:border-yellow-200:focus {\n    border-color: #fefcbf\n  }\n\n  .xl\\:focus\\:border-yellow-300:focus {\n    border-color: #faf089\n  }\n\n  .xl\\:focus\\:border-yellow-400:focus {\n    border-color: #f6e05e\n  }\n\n  .xl\\:focus\\:border-yellow-500:focus {\n    border-color: #ecc94b\n  }\n\n  .xl\\:focus\\:border-yellow-600:focus {\n    border-color: #d69e2e\n  }\n\n  .xl\\:focus\\:border-yellow-700:focus {\n    border-color: #b7791f\n  }\n\n  .xl\\:focus\\:border-yellow-800:focus {\n    border-color: #975a16\n  }\n\n  .xl\\:focus\\:border-yellow-900:focus {\n    border-color: #744210\n  }\n\n  .xl\\:focus\\:border-green-100:focus {\n    border-color: #f0fff4\n  }\n\n  .xl\\:focus\\:border-green-200:focus {\n    border-color: #c6f6d5\n  }\n\n  .xl\\:focus\\:border-green-300:focus {\n    border-color: #9ae6b4\n  }\n\n  .xl\\:focus\\:border-green-400:focus {\n    border-color: #68d391\n  }\n\n  .xl\\:focus\\:border-green-500:focus {\n    border-color: #48bb78\n  }\n\n  .xl\\:focus\\:border-green-600:focus {\n    border-color: #38a169\n  }\n\n  .xl\\:focus\\:border-green-700:focus {\n    border-color: #2f855a\n  }\n\n  .xl\\:focus\\:border-green-800:focus {\n    border-color: #276749\n  }\n\n  .xl\\:focus\\:border-green-900:focus {\n    border-color: #22543d\n  }\n\n  .xl\\:focus\\:border-teal-100:focus {\n    border-color: #e6fffa\n  }\n\n  .xl\\:focus\\:border-teal-200:focus {\n    border-color: #b2f5ea\n  }\n\n  .xl\\:focus\\:border-teal-300:focus {\n    border-color: #81e6d9\n  }\n\n  .xl\\:focus\\:border-teal-400:focus {\n    border-color: #4fd1c5\n  }\n\n  .xl\\:focus\\:border-teal-500:focus {\n    border-color: #38b2ac\n  }\n\n  .xl\\:focus\\:border-teal-600:focus {\n    border-color: #319795\n  }\n\n  .xl\\:focus\\:border-teal-700:focus {\n    border-color: #2c7a7b\n  }\n\n  .xl\\:focus\\:border-teal-800:focus {\n    border-color: #285e61\n  }\n\n  .xl\\:focus\\:border-teal-900:focus {\n    border-color: #234e52\n  }\n\n  .xl\\:focus\\:border-blue-100:focus {\n    border-color: #ebf8ff\n  }\n\n  .xl\\:focus\\:border-blue-200:focus {\n    border-color: #bee3f8\n  }\n\n  .xl\\:focus\\:border-blue-300:focus {\n    border-color: #90cdf4\n  }\n\n  .xl\\:focus\\:border-blue-400:focus {\n    border-color: #63b3ed\n  }\n\n  .xl\\:focus\\:border-blue-500:focus {\n    border-color: #4299e1\n  }\n\n  .xl\\:focus\\:border-blue-600:focus {\n    border-color: #3182ce\n  }\n\n  .xl\\:focus\\:border-blue-700:focus {\n    border-color: #2b6cb0\n  }\n\n  .xl\\:focus\\:border-blue-800:focus {\n    border-color: #2c5282\n  }\n\n  .xl\\:focus\\:border-blue-900:focus {\n    border-color: #2a4365\n  }\n\n  .xl\\:focus\\:border-indigo-100:focus {\n    border-color: #ebf4ff\n  }\n\n  .xl\\:focus\\:border-indigo-200:focus {\n    border-color: #c3dafe\n  }\n\n  .xl\\:focus\\:border-indigo-300:focus {\n    border-color: #a3bffa\n  }\n\n  .xl\\:focus\\:border-indigo-400:focus {\n    border-color: #7f9cf5\n  }\n\n  .xl\\:focus\\:border-indigo-500:focus {\n    border-color: #667eea\n  }\n\n  .xl\\:focus\\:border-indigo-600:focus {\n    border-color: #5a67d8\n  }\n\n  .xl\\:focus\\:border-indigo-700:focus {\n    border-color: #4c51bf\n  }\n\n  .xl\\:focus\\:border-indigo-800:focus {\n    border-color: #434190\n  }\n\n  .xl\\:focus\\:border-indigo-900:focus {\n    border-color: #3c366b\n  }\n\n  .xl\\:focus\\:border-purple-100:focus {\n    border-color: #faf5ff\n  }\n\n  .xl\\:focus\\:border-purple-200:focus {\n    border-color: #e9d8fd\n  }\n\n  .xl\\:focus\\:border-purple-300:focus {\n    border-color: #d6bcfa\n  }\n\n  .xl\\:focus\\:border-purple-400:focus {\n    border-color: #b794f4\n  }\n\n  .xl\\:focus\\:border-purple-500:focus {\n    border-color: #9f7aea\n  }\n\n  .xl\\:focus\\:border-purple-600:focus {\n    border-color: #805ad5\n  }\n\n  .xl\\:focus\\:border-purple-700:focus {\n    border-color: #6b46c1\n  }\n\n  .xl\\:focus\\:border-purple-800:focus {\n    border-color: #553c9a\n  }\n\n  .xl\\:focus\\:border-purple-900:focus {\n    border-color: #44337a\n  }\n\n  .xl\\:focus\\:border-pink-100:focus {\n    border-color: #fff5f7\n  }\n\n  .xl\\:focus\\:border-pink-200:focus {\n    border-color: #fed7e2\n  }\n\n  .xl\\:focus\\:border-pink-300:focus {\n    border-color: #fbb6ce\n  }\n\n  .xl\\:focus\\:border-pink-400:focus {\n    border-color: #f687b3\n  }\n\n  .xl\\:focus\\:border-pink-500:focus {\n    border-color: #ed64a6\n  }\n\n  .xl\\:focus\\:border-pink-600:focus {\n    border-color: #d53f8c\n  }\n\n  .xl\\:focus\\:border-pink-700:focus {\n    border-color: #b83280\n  }\n\n  .xl\\:focus\\:border-pink-800:focus {\n    border-color: #97266d\n  }\n\n  .xl\\:focus\\:border-pink-900:focus {\n    border-color: #702459\n  }\n\n  .xl\\:rounded-none {\n    border-radius: 0\n  }\n\n  .xl\\:rounded-sm {\n    border-radius: 0.125rem\n  }\n\n  .xl\\:rounded {\n    border-radius: 0.25rem\n  }\n\n  .xl\\:rounded-lg {\n    border-radius: 0.5rem\n  }\n\n  .xl\\:rounded-full {\n    border-radius: 9999px\n  }\n\n  .xl\\:rounded-t-none {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n  }\n\n  .xl\\:rounded-r-none {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0\n  }\n\n  .xl\\:rounded-b-none {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0\n  }\n\n  .xl\\:rounded-l-none {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0\n  }\n\n  .xl\\:rounded-t-sm {\n    border-top-left-radius: 0.125rem;\n    border-top-right-radius: 0.125rem\n  }\n\n  .xl\\:rounded-r-sm {\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem\n  }\n\n  .xl\\:rounded-b-sm {\n    border-bottom-right-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .xl\\:rounded-l-sm {\n    border-top-left-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .xl\\:rounded-t {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem\n  }\n\n  .xl\\:rounded-r {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem\n  }\n\n  .xl\\:rounded-b {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .xl\\:rounded-l {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .xl\\:rounded-t-lg {\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem\n  }\n\n  .xl\\:rounded-r-lg {\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem\n  }\n\n  .xl\\:rounded-b-lg {\n    border-bottom-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .xl\\:rounded-l-lg {\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .xl\\:rounded-t-full {\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px\n  }\n\n  .xl\\:rounded-r-full {\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px\n  }\n\n  .xl\\:rounded-b-full {\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px\n  }\n\n  .xl\\:rounded-l-full {\n    border-top-left-radius: 9999px;\n    border-bottom-left-radius: 9999px\n  }\n\n  .xl\\:rounded-tl-none {\n    border-top-left-radius: 0\n  }\n\n  .xl\\:rounded-tr-none {\n    border-top-right-radius: 0\n  }\n\n  .xl\\:rounded-br-none {\n    border-bottom-right-radius: 0\n  }\n\n  .xl\\:rounded-bl-none {\n    border-bottom-left-radius: 0\n  }\n\n  .xl\\:rounded-tl-sm {\n    border-top-left-radius: 0.125rem\n  }\n\n  .xl\\:rounded-tr-sm {\n    border-top-right-radius: 0.125rem\n  }\n\n  .xl\\:rounded-br-sm {\n    border-bottom-right-radius: 0.125rem\n  }\n\n  .xl\\:rounded-bl-sm {\n    border-bottom-left-radius: 0.125rem\n  }\n\n  .xl\\:rounded-tl {\n    border-top-left-radius: 0.25rem\n  }\n\n  .xl\\:rounded-tr {\n    border-top-right-radius: 0.25rem\n  }\n\n  .xl\\:rounded-br {\n    border-bottom-right-radius: 0.25rem\n  }\n\n  .xl\\:rounded-bl {\n    border-bottom-left-radius: 0.25rem\n  }\n\n  .xl\\:rounded-tl-lg {\n    border-top-left-radius: 0.5rem\n  }\n\n  .xl\\:rounded-tr-lg {\n    border-top-right-radius: 0.5rem\n  }\n\n  .xl\\:rounded-br-lg {\n    border-bottom-right-radius: 0.5rem\n  }\n\n  .xl\\:rounded-bl-lg {\n    border-bottom-left-radius: 0.5rem\n  }\n\n  .xl\\:rounded-tl-full {\n    border-top-left-radius: 9999px\n  }\n\n  .xl\\:rounded-tr-full {\n    border-top-right-radius: 9999px\n  }\n\n  .xl\\:rounded-br-full {\n    border-bottom-right-radius: 9999px\n  }\n\n  .xl\\:rounded-bl-full {\n    border-bottom-left-radius: 9999px\n  }\n\n  .xl\\:border-solid {\n    border-style: solid\n  }\n\n  .xl\\:border-dashed {\n    border-style: dashed\n  }\n\n  .xl\\:border-dotted {\n    border-style: dotted\n  }\n\n  .xl\\:border-double {\n    border-style: double\n  }\n\n  .xl\\:border-none {\n    border-style: none\n  }\n\n  .xl\\:border-0 {\n    border-width: 0\n  }\n\n  .xl\\:border-2 {\n    border-width: 2px\n  }\n\n  .xl\\:border-4 {\n    border-width: 4px\n  }\n\n  .xl\\:border-8 {\n    border-width: 8px\n  }\n\n  .xl\\:border {\n    border-width: 1px\n  }\n\n  .xl\\:border-t-0 {\n    border-top-width: 0\n  }\n\n  .xl\\:border-r-0 {\n    border-right-width: 0\n  }\n\n  .xl\\:border-b-0 {\n    border-bottom-width: 0\n  }\n\n  .xl\\:border-l-0 {\n    border-left-width: 0\n  }\n\n  .xl\\:border-t-2 {\n    border-top-width: 2px\n  }\n\n  .xl\\:border-r-2 {\n    border-right-width: 2px\n  }\n\n  .xl\\:border-b-2 {\n    border-bottom-width: 2px\n  }\n\n  .xl\\:border-l-2 {\n    border-left-width: 2px\n  }\n\n  .xl\\:border-t-4 {\n    border-top-width: 4px\n  }\n\n  .xl\\:border-r-4 {\n    border-right-width: 4px\n  }\n\n  .xl\\:border-b-4 {\n    border-bottom-width: 4px\n  }\n\n  .xl\\:border-l-4 {\n    border-left-width: 4px\n  }\n\n  .xl\\:border-t-8 {\n    border-top-width: 8px\n  }\n\n  .xl\\:border-r-8 {\n    border-right-width: 8px\n  }\n\n  .xl\\:border-b-8 {\n    border-bottom-width: 8px\n  }\n\n  .xl\\:border-l-8 {\n    border-left-width: 8px\n  }\n\n  .xl\\:border-t {\n    border-top-width: 1px\n  }\n\n  .xl\\:border-r {\n    border-right-width: 1px\n  }\n\n  .xl\\:border-b {\n    border-bottom-width: 1px\n  }\n\n  .xl\\:border-l {\n    border-left-width: 1px\n  }\n\n  .xl\\:cursor-auto {\n    cursor: auto\n  }\n\n  .xl\\:cursor-default {\n    cursor: default\n  }\n\n  .xl\\:cursor-pointer {\n    cursor: pointer\n  }\n\n  .xl\\:cursor-wait {\n    cursor: wait\n  }\n\n  .xl\\:cursor-text {\n    cursor: text\n  }\n\n  .xl\\:cursor-move {\n    cursor: move\n  }\n\n  .xl\\:cursor-not-allowed {\n    cursor: not-allowed\n  }\n\n  .xl\\:block {\n    display: block\n  }\n\n  .xl\\:inline-block {\n    display: inline-block\n  }\n\n  .xl\\:inline {\n    display: inline\n  }\n\n  .xl\\:flex {\n    display: flex\n  }\n\n  .xl\\:inline-flex {\n    display: inline-flex\n  }\n\n  .xl\\:table {\n    display: table\n  }\n\n  .xl\\:table-row {\n    display: table-row\n  }\n\n  .xl\\:table-cell {\n    display: table-cell\n  }\n\n  .xl\\:hidden {\n    display: none\n  }\n\n  .xl\\:flex-row {\n    flex-direction: row\n  }\n\n  .xl\\:flex-row-reverse {\n    flex-direction: row-reverse\n  }\n\n  .xl\\:flex-col {\n    flex-direction: column\n  }\n\n  .xl\\:flex-col-reverse {\n    flex-direction: column-reverse\n  }\n\n  .xl\\:flex-wrap {\n    flex-wrap: wrap\n  }\n\n  .xl\\:flex-wrap-reverse {\n    flex-wrap: wrap-reverse\n  }\n\n  .xl\\:flex-no-wrap {\n    flex-wrap: nowrap\n  }\n\n  .xl\\:items-start {\n    align-items: flex-start\n  }\n\n  .xl\\:items-end {\n    align-items: flex-end\n  }\n\n  .xl\\:items-center {\n    align-items: center\n  }\n\n  .xl\\:items-baseline {\n    align-items: baseline\n  }\n\n  .xl\\:items-stretch {\n    align-items: stretch\n  }\n\n  .xl\\:self-auto {\n    align-self: auto\n  }\n\n  .xl\\:self-start {\n    align-self: flex-start\n  }\n\n  .xl\\:self-end {\n    align-self: flex-end\n  }\n\n  .xl\\:self-center {\n    align-self: center\n  }\n\n  .xl\\:self-stretch {\n    align-self: stretch\n  }\n\n  .xl\\:justify-start {\n    justify-content: flex-start\n  }\n\n  .xl\\:justify-end {\n    justify-content: flex-end\n  }\n\n  .xl\\:justify-center {\n    justify-content: center\n  }\n\n  .xl\\:justify-between {\n    justify-content: space-between\n  }\n\n  .xl\\:justify-around {\n    justify-content: space-around\n  }\n\n  .xl\\:content-center {\n    align-content: center\n  }\n\n  .xl\\:content-start {\n    align-content: flex-start\n  }\n\n  .xl\\:content-end {\n    align-content: flex-end\n  }\n\n  .xl\\:content-between {\n    align-content: space-between\n  }\n\n  .xl\\:content-around {\n    align-content: space-around\n  }\n\n  .xl\\:flex-1 {\n    flex: 1 1 0%\n  }\n\n  .xl\\:flex-auto {\n    flex: 1 1 auto\n  }\n\n  .xl\\:flex-initial {\n    flex: 0 1 auto\n  }\n\n  .xl\\:flex-none {\n    flex: none\n  }\n\n  .xl\\:flex-grow-0 {\n    flex-grow: 0\n  }\n\n  .xl\\:flex-grow {\n    flex-grow: 1\n  }\n\n  .xl\\:flex-shrink-0 {\n    flex-shrink: 0\n  }\n\n  .xl\\:flex-shrink {\n    flex-shrink: 1\n  }\n\n  .xl\\:order-1 {\n    order: 1\n  }\n\n  .xl\\:order-2 {\n    order: 2\n  }\n\n  .xl\\:order-3 {\n    order: 3\n  }\n\n  .xl\\:order-4 {\n    order: 4\n  }\n\n  .xl\\:order-5 {\n    order: 5\n  }\n\n  .xl\\:order-6 {\n    order: 6\n  }\n\n  .xl\\:order-7 {\n    order: 7\n  }\n\n  .xl\\:order-8 {\n    order: 8\n  }\n\n  .xl\\:order-9 {\n    order: 9\n  }\n\n  .xl\\:order-10 {\n    order: 10\n  }\n\n  .xl\\:order-11 {\n    order: 11\n  }\n\n  .xl\\:order-12 {\n    order: 12\n  }\n\n  .xl\\:order-first {\n    order: -9999\n  }\n\n  .xl\\:order-last {\n    order: 9999\n  }\n\n  .xl\\:order-none {\n    order: 0\n  }\n\n  .xl\\:float-right {\n    float: right\n  }\n\n  .xl\\:float-left {\n    float: left\n  }\n\n  .xl\\:float-none {\n    float: none\n  }\n\n  .xl\\:clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both\n  }\n\n  .xl\\:font-sans {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"\n  }\n\n  .xl\\:font-serif {\n    font-family: Georgia, Cambria, \"Times New Roman\", Times, serif\n  }\n\n  .xl\\:font-mono {\n    font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace\n  }\n\n  .xl\\:font-hairline {\n    font-weight: 100\n  }\n\n  .xl\\:font-thin {\n    font-weight: 200\n  }\n\n  .xl\\:font-light {\n    font-weight: 300\n  }\n\n  .xl\\:font-normal {\n    font-weight: 400\n  }\n\n  .xl\\:font-medium {\n    font-weight: 500\n  }\n\n  .xl\\:font-semibold {\n    font-weight: 600\n  }\n\n  .xl\\:font-bold {\n    font-weight: 700\n  }\n\n  .xl\\:font-extrabold {\n    font-weight: 800\n  }\n\n  .xl\\:font-black {\n    font-weight: 900\n  }\n\n  .xl\\:hover\\:font-hairline:hover {\n    font-weight: 100\n  }\n\n  .xl\\:hover\\:font-thin:hover {\n    font-weight: 200\n  }\n\n  .xl\\:hover\\:font-light:hover {\n    font-weight: 300\n  }\n\n  .xl\\:hover\\:font-normal:hover {\n    font-weight: 400\n  }\n\n  .xl\\:hover\\:font-medium:hover {\n    font-weight: 500\n  }\n\n  .xl\\:hover\\:font-semibold:hover {\n    font-weight: 600\n  }\n\n  .xl\\:hover\\:font-bold:hover {\n    font-weight: 700\n  }\n\n  .xl\\:hover\\:font-extrabold:hover {\n    font-weight: 800\n  }\n\n  .xl\\:hover\\:font-black:hover {\n    font-weight: 900\n  }\n\n  .xl\\:focus\\:font-hairline:focus {\n    font-weight: 100\n  }\n\n  .xl\\:focus\\:font-thin:focus {\n    font-weight: 200\n  }\n\n  .xl\\:focus\\:font-light:focus {\n    font-weight: 300\n  }\n\n  .xl\\:focus\\:font-normal:focus {\n    font-weight: 400\n  }\n\n  .xl\\:focus\\:font-medium:focus {\n    font-weight: 500\n  }\n\n  .xl\\:focus\\:font-semibold:focus {\n    font-weight: 600\n  }\n\n  .xl\\:focus\\:font-bold:focus {\n    font-weight: 700\n  }\n\n  .xl\\:focus\\:font-extrabold:focus {\n    font-weight: 800\n  }\n\n  .xl\\:focus\\:font-black:focus {\n    font-weight: 900\n  }\n\n  .xl\\:h-0 {\n    height: 0\n  }\n\n  .xl\\:h-1 {\n    height: 0.25rem\n  }\n\n  .xl\\:h-2 {\n    height: 0.5rem\n  }\n\n  .xl\\:h-3 {\n    height: 0.75rem\n  }\n\n  .xl\\:h-4 {\n    height: 1rem\n  }\n\n  .xl\\:h-5 {\n    height: 1.25rem\n  }\n\n  .xl\\:h-6 {\n    height: 1.5rem\n  }\n\n  .xl\\:h-8 {\n    height: 2rem\n  }\n\n  .xl\\:h-10 {\n    height: 2.5rem\n  }\n\n  .xl\\:h-12 {\n    height: 3rem\n  }\n\n  .xl\\:h-16 {\n    height: 4rem\n  }\n\n  .xl\\:h-20 {\n    height: 5rem\n  }\n\n  .xl\\:h-24 {\n    height: 6rem\n  }\n\n  .xl\\:h-32 {\n    height: 8rem\n  }\n\n  .xl\\:h-40 {\n    height: 10rem\n  }\n\n  .xl\\:h-48 {\n    height: 12rem\n  }\n\n  .xl\\:h-56 {\n    height: 14rem\n  }\n\n  .xl\\:h-64 {\n    height: 16rem\n  }\n\n  .xl\\:h-auto {\n    height: auto\n  }\n\n  .xl\\:h-px {\n    height: 1px\n  }\n\n  .xl\\:h-full {\n    height: 100%\n  }\n\n  .xl\\:h-screen {\n    height: 100vh\n  }\n\n  .xl\\:leading-none {\n    line-height: 1\n  }\n\n  .xl\\:leading-tight {\n    line-height: 1.25\n  }\n\n  .xl\\:leading-snug {\n    line-height: 1.375\n  }\n\n  .xl\\:leading-normal {\n    line-height: 1.5\n  }\n\n  .xl\\:leading-relaxed {\n    line-height: 1.625\n  }\n\n  .xl\\:leading-loose {\n    line-height: 2\n  }\n\n  .xl\\:list-inside {\n    list-style-position: inside\n  }\n\n  .xl\\:list-outside {\n    list-style-position: outside\n  }\n\n  .xl\\:list-none {\n    list-style-type: none\n  }\n\n  .xl\\:list-disc {\n    list-style-type: disc\n  }\n\n  .xl\\:list-decimal {\n    list-style-type: decimal\n  }\n\n  .xl\\:m-0 {\n    margin: 0\n  }\n\n  .xl\\:m-1 {\n    margin: 0.25rem\n  }\n\n  .xl\\:m-2 {\n    margin: 0.5rem\n  }\n\n  .xl\\:m-3 {\n    margin: 0.75rem\n  }\n\n  .xl\\:m-4 {\n    margin: 1rem\n  }\n\n  .xl\\:m-5 {\n    margin: 1.25rem\n  }\n\n  .xl\\:m-6 {\n    margin: 1.5rem\n  }\n\n  .xl\\:m-8 {\n    margin: 2rem\n  }\n\n  .xl\\:m-10 {\n    margin: 2.5rem\n  }\n\n  .xl\\:m-12 {\n    margin: 3rem\n  }\n\n  .xl\\:m-16 {\n    margin: 4rem\n  }\n\n  .xl\\:m-20 {\n    margin: 5rem\n  }\n\n  .xl\\:m-24 {\n    margin: 6rem\n  }\n\n  .xl\\:m-32 {\n    margin: 8rem\n  }\n\n  .xl\\:m-40 {\n    margin: 10rem\n  }\n\n  .xl\\:m-48 {\n    margin: 12rem\n  }\n\n  .xl\\:m-56 {\n    margin: 14rem\n  }\n\n  .xl\\:m-64 {\n    margin: 16rem\n  }\n\n  .xl\\:m-auto {\n    margin: auto\n  }\n\n  .xl\\:m-px {\n    margin: 1px\n  }\n\n  .xl\\:-m-1 {\n    margin: -0.25rem\n  }\n\n  .xl\\:-m-2 {\n    margin: -0.5rem\n  }\n\n  .xl\\:-m-3 {\n    margin: -0.75rem\n  }\n\n  .xl\\:-m-4 {\n    margin: -1rem\n  }\n\n  .xl\\:-m-5 {\n    margin: -1.25rem\n  }\n\n  .xl\\:-m-6 {\n    margin: -1.5rem\n  }\n\n  .xl\\:-m-8 {\n    margin: -2rem\n  }\n\n  .xl\\:-m-10 {\n    margin: -2.5rem\n  }\n\n  .xl\\:-m-12 {\n    margin: -3rem\n  }\n\n  .xl\\:-m-16 {\n    margin: -4rem\n  }\n\n  .xl\\:-m-20 {\n    margin: -5rem\n  }\n\n  .xl\\:-m-24 {\n    margin: -6rem\n  }\n\n  .xl\\:-m-32 {\n    margin: -8rem\n  }\n\n  .xl\\:-m-40 {\n    margin: -10rem\n  }\n\n  .xl\\:-m-48 {\n    margin: -12rem\n  }\n\n  .xl\\:-m-56 {\n    margin: -14rem\n  }\n\n  .xl\\:-m-64 {\n    margin: -16rem\n  }\n\n  .xl\\:-m-px {\n    margin: -1px\n  }\n\n  .xl\\:my-0 {\n    margin-top: 0;\n    margin-bottom: 0\n  }\n\n  .xl\\:mx-0 {\n    margin-left: 0;\n    margin-right: 0\n  }\n\n  .xl\\:my-1 {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem\n  }\n\n  .xl\\:mx-1 {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem\n  }\n\n  .xl\\:my-2 {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem\n  }\n\n  .xl\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem\n  }\n\n  .xl\\:my-3 {\n    margin-top: 0.75rem;\n    margin-bottom: 0.75rem\n  }\n\n  .xl\\:mx-3 {\n    margin-left: 0.75rem;\n    margin-right: 0.75rem\n  }\n\n  .xl\\:my-4 {\n    margin-top: 1rem;\n    margin-bottom: 1rem\n  }\n\n  .xl\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem\n  }\n\n  .xl\\:my-5 {\n    margin-top: 1.25rem;\n    margin-bottom: 1.25rem\n  }\n\n  .xl\\:mx-5 {\n    margin-left: 1.25rem;\n    margin-right: 1.25rem\n  }\n\n  .xl\\:my-6 {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem\n  }\n\n  .xl\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem\n  }\n\n  .xl\\:my-8 {\n    margin-top: 2rem;\n    margin-bottom: 2rem\n  }\n\n  .xl\\:mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem\n  }\n\n  .xl\\:my-10 {\n    margin-top: 2.5rem;\n    margin-bottom: 2.5rem\n  }\n\n  .xl\\:mx-10 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem\n  }\n\n  .xl\\:my-12 {\n    margin-top: 3rem;\n    margin-bottom: 3rem\n  }\n\n  .xl\\:mx-12 {\n    margin-left: 3rem;\n    margin-right: 3rem\n  }\n\n  .xl\\:my-16 {\n    margin-top: 4rem;\n    margin-bottom: 4rem\n  }\n\n  .xl\\:mx-16 {\n    margin-left: 4rem;\n    margin-right: 4rem\n  }\n\n  .xl\\:my-20 {\n    margin-top: 5rem;\n    margin-bottom: 5rem\n  }\n\n  .xl\\:mx-20 {\n    margin-left: 5rem;\n    margin-right: 5rem\n  }\n\n  .xl\\:my-24 {\n    margin-top: 6rem;\n    margin-bottom: 6rem\n  }\n\n  .xl\\:mx-24 {\n    margin-left: 6rem;\n    margin-right: 6rem\n  }\n\n  .xl\\:my-32 {\n    margin-top: 8rem;\n    margin-bottom: 8rem\n  }\n\n  .xl\\:mx-32 {\n    margin-left: 8rem;\n    margin-right: 8rem\n  }\n\n  .xl\\:my-40 {\n    margin-top: 10rem;\n    margin-bottom: 10rem\n  }\n\n  .xl\\:mx-40 {\n    margin-left: 10rem;\n    margin-right: 10rem\n  }\n\n  .xl\\:my-48 {\n    margin-top: 12rem;\n    margin-bottom: 12rem\n  }\n\n  .xl\\:mx-48 {\n    margin-left: 12rem;\n    margin-right: 12rem\n  }\n\n  .xl\\:my-56 {\n    margin-top: 14rem;\n    margin-bottom: 14rem\n  }\n\n  .xl\\:mx-56 {\n    margin-left: 14rem;\n    margin-right: 14rem\n  }\n\n  .xl\\:my-64 {\n    margin-top: 16rem;\n    margin-bottom: 16rem\n  }\n\n  .xl\\:mx-64 {\n    margin-left: 16rem;\n    margin-right: 16rem\n  }\n\n  .xl\\:my-auto {\n    margin-top: auto;\n    margin-bottom: auto\n  }\n\n  .xl\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto\n  }\n\n  .xl\\:my-px {\n    margin-top: 1px;\n    margin-bottom: 1px\n  }\n\n  .xl\\:mx-px {\n    margin-left: 1px;\n    margin-right: 1px\n  }\n\n  .xl\\:-my-1 {\n    margin-top: -0.25rem;\n    margin-bottom: -0.25rem\n  }\n\n  .xl\\:-mx-1 {\n    margin-left: -0.25rem;\n    margin-right: -0.25rem\n  }\n\n  .xl\\:-my-2 {\n    margin-top: -0.5rem;\n    margin-bottom: -0.5rem\n  }\n\n  .xl\\:-mx-2 {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem\n  }\n\n  .xl\\:-my-3 {\n    margin-top: -0.75rem;\n    margin-bottom: -0.75rem\n  }\n\n  .xl\\:-mx-3 {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem\n  }\n\n  .xl\\:-my-4 {\n    margin-top: -1rem;\n    margin-bottom: -1rem\n  }\n\n  .xl\\:-mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem\n  }\n\n  .xl\\:-my-5 {\n    margin-top: -1.25rem;\n    margin-bottom: -1.25rem\n  }\n\n  .xl\\:-mx-5 {\n    margin-left: -1.25rem;\n    margin-right: -1.25rem\n  }\n\n  .xl\\:-my-6 {\n    margin-top: -1.5rem;\n    margin-bottom: -1.5rem\n  }\n\n  .xl\\:-mx-6 {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem\n  }\n\n  .xl\\:-my-8 {\n    margin-top: -2rem;\n    margin-bottom: -2rem\n  }\n\n  .xl\\:-mx-8 {\n    margin-left: -2rem;\n    margin-right: -2rem\n  }\n\n  .xl\\:-my-10 {\n    margin-top: -2.5rem;\n    margin-bottom: -2.5rem\n  }\n\n  .xl\\:-mx-10 {\n    margin-left: -2.5rem;\n    margin-right: -2.5rem\n  }\n\n  .xl\\:-my-12 {\n    margin-top: -3rem;\n    margin-bottom: -3rem\n  }\n\n  .xl\\:-mx-12 {\n    margin-left: -3rem;\n    margin-right: -3rem\n  }\n\n  .xl\\:-my-16 {\n    margin-top: -4rem;\n    margin-bottom: -4rem\n  }\n\n  .xl\\:-mx-16 {\n    margin-left: -4rem;\n    margin-right: -4rem\n  }\n\n  .xl\\:-my-20 {\n    margin-top: -5rem;\n    margin-bottom: -5rem\n  }\n\n  .xl\\:-mx-20 {\n    margin-left: -5rem;\n    margin-right: -5rem\n  }\n\n  .xl\\:-my-24 {\n    margin-top: -6rem;\n    margin-bottom: -6rem\n  }\n\n  .xl\\:-mx-24 {\n    margin-left: -6rem;\n    margin-right: -6rem\n  }\n\n  .xl\\:-my-32 {\n    margin-top: -8rem;\n    margin-bottom: -8rem\n  }\n\n  .xl\\:-mx-32 {\n    margin-left: -8rem;\n    margin-right: -8rem\n  }\n\n  .xl\\:-my-40 {\n    margin-top: -10rem;\n    margin-bottom: -10rem\n  }\n\n  .xl\\:-mx-40 {\n    margin-left: -10rem;\n    margin-right: -10rem\n  }\n\n  .xl\\:-my-48 {\n    margin-top: -12rem;\n    margin-bottom: -12rem\n  }\n\n  .xl\\:-mx-48 {\n    margin-left: -12rem;\n    margin-right: -12rem\n  }\n\n  .xl\\:-my-56 {\n    margin-top: -14rem;\n    margin-bottom: -14rem\n  }\n\n  .xl\\:-mx-56 {\n    margin-left: -14rem;\n    margin-right: -14rem\n  }\n\n  .xl\\:-my-64 {\n    margin-top: -16rem;\n    margin-bottom: -16rem\n  }\n\n  .xl\\:-mx-64 {\n    margin-left: -16rem;\n    margin-right: -16rem\n  }\n\n  .xl\\:-my-px {\n    margin-top: -1px;\n    margin-bottom: -1px\n  }\n\n  .xl\\:-mx-px {\n    margin-left: -1px;\n    margin-right: -1px\n  }\n\n  .xl\\:mt-0 {\n    margin-top: 0\n  }\n\n  .xl\\:mr-0 {\n    margin-right: 0\n  }\n\n  .xl\\:mb-0 {\n    margin-bottom: 0\n  }\n\n  .xl\\:ml-0 {\n    margin-left: 0\n  }\n\n  .xl\\:mt-1 {\n    margin-top: 0.25rem\n  }\n\n  .xl\\:mr-1 {\n    margin-right: 0.25rem\n  }\n\n  .xl\\:mb-1 {\n    margin-bottom: 0.25rem\n  }\n\n  .xl\\:ml-1 {\n    margin-left: 0.25rem\n  }\n\n  .xl\\:mt-2 {\n    margin-top: 0.5rem\n  }\n\n  .xl\\:mr-2 {\n    margin-right: 0.5rem\n  }\n\n  .xl\\:mb-2 {\n    margin-bottom: 0.5rem\n  }\n\n  .xl\\:ml-2 {\n    margin-left: 0.5rem\n  }\n\n  .xl\\:mt-3 {\n    margin-top: 0.75rem\n  }\n\n  .xl\\:mr-3 {\n    margin-right: 0.75rem\n  }\n\n  .xl\\:mb-3 {\n    margin-bottom: 0.75rem\n  }\n\n  .xl\\:ml-3 {\n    margin-left: 0.75rem\n  }\n\n  .xl\\:mt-4 {\n    margin-top: 1rem\n  }\n\n  .xl\\:mr-4 {\n    margin-right: 1rem\n  }\n\n  .xl\\:mb-4 {\n    margin-bottom: 1rem\n  }\n\n  .xl\\:ml-4 {\n    margin-left: 1rem\n  }\n\n  .xl\\:mt-5 {\n    margin-top: 1.25rem\n  }\n\n  .xl\\:mr-5 {\n    margin-right: 1.25rem\n  }\n\n  .xl\\:mb-5 {\n    margin-bottom: 1.25rem\n  }\n\n  .xl\\:ml-5 {\n    margin-left: 1.25rem\n  }\n\n  .xl\\:mt-6 {\n    margin-top: 1.5rem\n  }\n\n  .xl\\:mr-6 {\n    margin-right: 1.5rem\n  }\n\n  .xl\\:mb-6 {\n    margin-bottom: 1.5rem\n  }\n\n  .xl\\:ml-6 {\n    margin-left: 1.5rem\n  }\n\n  .xl\\:mt-8 {\n    margin-top: 2rem\n  }\n\n  .xl\\:mr-8 {\n    margin-right: 2rem\n  }\n\n  .xl\\:mb-8 {\n    margin-bottom: 2rem\n  }\n\n  .xl\\:ml-8 {\n    margin-left: 2rem\n  }\n\n  .xl\\:mt-10 {\n    margin-top: 2.5rem\n  }\n\n  .xl\\:mr-10 {\n    margin-right: 2.5rem\n  }\n\n  .xl\\:mb-10 {\n    margin-bottom: 2.5rem\n  }\n\n  .xl\\:ml-10 {\n    margin-left: 2.5rem\n  }\n\n  .xl\\:mt-12 {\n    margin-top: 3rem\n  }\n\n  .xl\\:mr-12 {\n    margin-right: 3rem\n  }\n\n  .xl\\:mb-12 {\n    margin-bottom: 3rem\n  }\n\n  .xl\\:ml-12 {\n    margin-left: 3rem\n  }\n\n  .xl\\:mt-16 {\n    margin-top: 4rem\n  }\n\n  .xl\\:mr-16 {\n    margin-right: 4rem\n  }\n\n  .xl\\:mb-16 {\n    margin-bottom: 4rem\n  }\n\n  .xl\\:ml-16 {\n    margin-left: 4rem\n  }\n\n  .xl\\:mt-20 {\n    margin-top: 5rem\n  }\n\n  .xl\\:mr-20 {\n    margin-right: 5rem\n  }\n\n  .xl\\:mb-20 {\n    margin-bottom: 5rem\n  }\n\n  .xl\\:ml-20 {\n    margin-left: 5rem\n  }\n\n  .xl\\:mt-24 {\n    margin-top: 6rem\n  }\n\n  .xl\\:mr-24 {\n    margin-right: 6rem\n  }\n\n  .xl\\:mb-24 {\n    margin-bottom: 6rem\n  }\n\n  .xl\\:ml-24 {\n    margin-left: 6rem\n  }\n\n  .xl\\:mt-32 {\n    margin-top: 8rem\n  }\n\n  .xl\\:mr-32 {\n    margin-right: 8rem\n  }\n\n  .xl\\:mb-32 {\n    margin-bottom: 8rem\n  }\n\n  .xl\\:ml-32 {\n    margin-left: 8rem\n  }\n\n  .xl\\:mt-40 {\n    margin-top: 10rem\n  }\n\n  .xl\\:mr-40 {\n    margin-right: 10rem\n  }\n\n  .xl\\:mb-40 {\n    margin-bottom: 10rem\n  }\n\n  .xl\\:ml-40 {\n    margin-left: 10rem\n  }\n\n  .xl\\:mt-48 {\n    margin-top: 12rem\n  }\n\n  .xl\\:mr-48 {\n    margin-right: 12rem\n  }\n\n  .xl\\:mb-48 {\n    margin-bottom: 12rem\n  }\n\n  .xl\\:ml-48 {\n    margin-left: 12rem\n  }\n\n  .xl\\:mt-56 {\n    margin-top: 14rem\n  }\n\n  .xl\\:mr-56 {\n    margin-right: 14rem\n  }\n\n  .xl\\:mb-56 {\n    margin-bottom: 14rem\n  }\n\n  .xl\\:ml-56 {\n    margin-left: 14rem\n  }\n\n  .xl\\:mt-64 {\n    margin-top: 16rem\n  }\n\n  .xl\\:mr-64 {\n    margin-right: 16rem\n  }\n\n  .xl\\:mb-64 {\n    margin-bottom: 16rem\n  }\n\n  .xl\\:ml-64 {\n    margin-left: 16rem\n  }\n\n  .xl\\:mt-auto {\n    margin-top: auto\n  }\n\n  .xl\\:mr-auto {\n    margin-right: auto\n  }\n\n  .xl\\:mb-auto {\n    margin-bottom: auto\n  }\n\n  .xl\\:ml-auto {\n    margin-left: auto\n  }\n\n  .xl\\:mt-px {\n    margin-top: 1px\n  }\n\n  .xl\\:mr-px {\n    margin-right: 1px\n  }\n\n  .xl\\:mb-px {\n    margin-bottom: 1px\n  }\n\n  .xl\\:ml-px {\n    margin-left: 1px\n  }\n\n  .xl\\:-mt-1 {\n    margin-top: -0.25rem\n  }\n\n  .xl\\:-mr-1 {\n    margin-right: -0.25rem\n  }\n\n  .xl\\:-mb-1 {\n    margin-bottom: -0.25rem\n  }\n\n  .xl\\:-ml-1 {\n    margin-left: -0.25rem\n  }\n\n  .xl\\:-mt-2 {\n    margin-top: -0.5rem\n  }\n\n  .xl\\:-mr-2 {\n    margin-right: -0.5rem\n  }\n\n  .xl\\:-mb-2 {\n    margin-bottom: -0.5rem\n  }\n\n  .xl\\:-ml-2 {\n    margin-left: -0.5rem\n  }\n\n  .xl\\:-mt-3 {\n    margin-top: -0.75rem\n  }\n\n  .xl\\:-mr-3 {\n    margin-right: -0.75rem\n  }\n\n  .xl\\:-mb-3 {\n    margin-bottom: -0.75rem\n  }\n\n  .xl\\:-ml-3 {\n    margin-left: -0.75rem\n  }\n\n  .xl\\:-mt-4 {\n    margin-top: -1rem\n  }\n\n  .xl\\:-mr-4 {\n    margin-right: -1rem\n  }\n\n  .xl\\:-mb-4 {\n    margin-bottom: -1rem\n  }\n\n  .xl\\:-ml-4 {\n    margin-left: -1rem\n  }\n\n  .xl\\:-mt-5 {\n    margin-top: -1.25rem\n  }\n\n  .xl\\:-mr-5 {\n    margin-right: -1.25rem\n  }\n\n  .xl\\:-mb-5 {\n    margin-bottom: -1.25rem\n  }\n\n  .xl\\:-ml-5 {\n    margin-left: -1.25rem\n  }\n\n  .xl\\:-mt-6 {\n    margin-top: -1.5rem\n  }\n\n  .xl\\:-mr-6 {\n    margin-right: -1.5rem\n  }\n\n  .xl\\:-mb-6 {\n    margin-bottom: -1.5rem\n  }\n\n  .xl\\:-ml-6 {\n    margin-left: -1.5rem\n  }\n\n  .xl\\:-mt-8 {\n    margin-top: -2rem\n  }\n\n  .xl\\:-mr-8 {\n    margin-right: -2rem\n  }\n\n  .xl\\:-mb-8 {\n    margin-bottom: -2rem\n  }\n\n  .xl\\:-ml-8 {\n    margin-left: -2rem\n  }\n\n  .xl\\:-mt-10 {\n    margin-top: -2.5rem\n  }\n\n  .xl\\:-mr-10 {\n    margin-right: -2.5rem\n  }\n\n  .xl\\:-mb-10 {\n    margin-bottom: -2.5rem\n  }\n\n  .xl\\:-ml-10 {\n    margin-left: -2.5rem\n  }\n\n  .xl\\:-mt-12 {\n    margin-top: -3rem\n  }\n\n  .xl\\:-mr-12 {\n    margin-right: -3rem\n  }\n\n  .xl\\:-mb-12 {\n    margin-bottom: -3rem\n  }\n\n  .xl\\:-ml-12 {\n    margin-left: -3rem\n  }\n\n  .xl\\:-mt-16 {\n    margin-top: -4rem\n  }\n\n  .xl\\:-mr-16 {\n    margin-right: -4rem\n  }\n\n  .xl\\:-mb-16 {\n    margin-bottom: -4rem\n  }\n\n  .xl\\:-ml-16 {\n    margin-left: -4rem\n  }\n\n  .xl\\:-mt-20 {\n    margin-top: -5rem\n  }\n\n  .xl\\:-mr-20 {\n    margin-right: -5rem\n  }\n\n  .xl\\:-mb-20 {\n    margin-bottom: -5rem\n  }\n\n  .xl\\:-ml-20 {\n    margin-left: -5rem\n  }\n\n  .xl\\:-mt-24 {\n    margin-top: -6rem\n  }\n\n  .xl\\:-mr-24 {\n    margin-right: -6rem\n  }\n\n  .xl\\:-mb-24 {\n    margin-bottom: -6rem\n  }\n\n  .xl\\:-ml-24 {\n    margin-left: -6rem\n  }\n\n  .xl\\:-mt-32 {\n    margin-top: -8rem\n  }\n\n  .xl\\:-mr-32 {\n    margin-right: -8rem\n  }\n\n  .xl\\:-mb-32 {\n    margin-bottom: -8rem\n  }\n\n  .xl\\:-ml-32 {\n    margin-left: -8rem\n  }\n\n  .xl\\:-mt-40 {\n    margin-top: -10rem\n  }\n\n  .xl\\:-mr-40 {\n    margin-right: -10rem\n  }\n\n  .xl\\:-mb-40 {\n    margin-bottom: -10rem\n  }\n\n  .xl\\:-ml-40 {\n    margin-left: -10rem\n  }\n\n  .xl\\:-mt-48 {\n    margin-top: -12rem\n  }\n\n  .xl\\:-mr-48 {\n    margin-right: -12rem\n  }\n\n  .xl\\:-mb-48 {\n    margin-bottom: -12rem\n  }\n\n  .xl\\:-ml-48 {\n    margin-left: -12rem\n  }\n\n  .xl\\:-mt-56 {\n    margin-top: -14rem\n  }\n\n  .xl\\:-mr-56 {\n    margin-right: -14rem\n  }\n\n  .xl\\:-mb-56 {\n    margin-bottom: -14rem\n  }\n\n  .xl\\:-ml-56 {\n    margin-left: -14rem\n  }\n\n  .xl\\:-mt-64 {\n    margin-top: -16rem\n  }\n\n  .xl\\:-mr-64 {\n    margin-right: -16rem\n  }\n\n  .xl\\:-mb-64 {\n    margin-bottom: -16rem\n  }\n\n  .xl\\:-ml-64 {\n    margin-left: -16rem\n  }\n\n  .xl\\:-mt-px {\n    margin-top: -1px\n  }\n\n  .xl\\:-mr-px {\n    margin-right: -1px\n  }\n\n  .xl\\:-mb-px {\n    margin-bottom: -1px\n  }\n\n  .xl\\:-ml-px {\n    margin-left: -1px\n  }\n\n  .xl\\:max-h-full {\n    max-height: 100%\n  }\n\n  .xl\\:max-h-screen {\n    max-height: 100vh\n  }\n\n  .xl\\:max-w-xs {\n    max-width: 20rem\n  }\n\n  .xl\\:max-w-sm {\n    max-width: 24rem\n  }\n\n  .xl\\:max-w-md {\n    max-width: 28rem\n  }\n\n  .xl\\:max-w-lg {\n    max-width: 32rem\n  }\n\n  .xl\\:max-w-xl {\n    max-width: 36rem\n  }\n\n  .xl\\:max-w-2xl {\n    max-width: 42rem\n  }\n\n  .xl\\:max-w-3xl {\n    max-width: 48rem\n  }\n\n  .xl\\:max-w-4xl {\n    max-width: 56rem\n  }\n\n  .xl\\:max-w-5xl {\n    max-width: 64rem\n  }\n\n  .xl\\:max-w-6xl {\n    max-width: 72rem\n  }\n\n  .xl\\:max-w-full {\n    max-width: 100%\n  }\n\n  .xl\\:min-h-0 {\n    min-height: 0\n  }\n\n  .xl\\:min-h-full {\n    min-height: 100%\n  }\n\n  .xl\\:min-h-screen {\n    min-height: 100vh\n  }\n\n  .xl\\:min-w-0 {\n    min-width: 0\n  }\n\n  .xl\\:min-w-full {\n    min-width: 100%\n  }\n\n  .xl\\:object-contain {\n    -o-object-fit: contain;\n       object-fit: contain\n  }\n\n  .xl\\:object-cover {\n    -o-object-fit: cover;\n       object-fit: cover\n  }\n\n  .xl\\:object-fill {\n    -o-object-fit: fill;\n       object-fit: fill\n  }\n\n  .xl\\:object-none {\n    -o-object-fit: none;\n       object-fit: none\n  }\n\n  .xl\\:object-scale-down {\n    -o-object-fit: scale-down;\n       object-fit: scale-down\n  }\n\n  .xl\\:object-bottom {\n    -o-object-position: bottom;\n       object-position: bottom\n  }\n\n  .xl\\:object-center {\n    -o-object-position: center;\n       object-position: center\n  }\n\n  .xl\\:object-left {\n    -o-object-position: left;\n       object-position: left\n  }\n\n  .xl\\:object-left-bottom {\n    -o-object-position: left bottom;\n       object-position: left bottom\n  }\n\n  .xl\\:object-left-top {\n    -o-object-position: left top;\n       object-position: left top\n  }\n\n  .xl\\:object-right {\n    -o-object-position: right;\n       object-position: right\n  }\n\n  .xl\\:object-right-bottom {\n    -o-object-position: right bottom;\n       object-position: right bottom\n  }\n\n  .xl\\:object-right-top {\n    -o-object-position: right top;\n       object-position: right top\n  }\n\n  .xl\\:object-top {\n    -o-object-position: top;\n       object-position: top\n  }\n\n  .xl\\:opacity-0 {\n    opacity: 0\n  }\n\n  .xl\\:opacity-25 {\n    opacity: 0.25\n  }\n\n  .xl\\:opacity-50 {\n    opacity: 0.5\n  }\n\n  .xl\\:opacity-75 {\n    opacity: 0.75\n  }\n\n  .xl\\:opacity-100 {\n    opacity: 1\n  }\n\n  .xl\\:hover\\:opacity-0:hover {\n    opacity: 0\n  }\n\n  .xl\\:hover\\:opacity-25:hover {\n    opacity: 0.25\n  }\n\n  .xl\\:hover\\:opacity-50:hover {\n    opacity: 0.5\n  }\n\n  .xl\\:hover\\:opacity-75:hover {\n    opacity: 0.75\n  }\n\n  .xl\\:hover\\:opacity-100:hover {\n    opacity: 1\n  }\n\n  .xl\\:focus\\:opacity-0:focus {\n    opacity: 0\n  }\n\n  .xl\\:focus\\:opacity-25:focus {\n    opacity: 0.25\n  }\n\n  .xl\\:focus\\:opacity-50:focus {\n    opacity: 0.5\n  }\n\n  .xl\\:focus\\:opacity-75:focus {\n    opacity: 0.75\n  }\n\n  .xl\\:focus\\:opacity-100:focus {\n    opacity: 1\n  }\n\n  .xl\\:outline-none {\n    outline: 0\n  }\n\n  .xl\\:focus\\:outline-none:focus {\n    outline: 0\n  }\n\n  .xl\\:overflow-auto {\n    overflow: auto\n  }\n\n  .xl\\:overflow-hidden {\n    overflow: hidden\n  }\n\n  .xl\\:overflow-visible {\n    overflow: visible\n  }\n\n  .xl\\:overflow-scroll {\n    overflow: scroll\n  }\n\n  .xl\\:overflow-x-auto {\n    overflow-x: auto\n  }\n\n  .xl\\:overflow-y-auto {\n    overflow-y: auto\n  }\n\n  .xl\\:overflow-x-hidden {\n    overflow-x: hidden\n  }\n\n  .xl\\:overflow-y-hidden {\n    overflow-y: hidden\n  }\n\n  .xl\\:overflow-x-visible {\n    overflow-x: visible\n  }\n\n  .xl\\:overflow-y-visible {\n    overflow-y: visible\n  }\n\n  .xl\\:overflow-x-scroll {\n    overflow-x: scroll\n  }\n\n  .xl\\:overflow-y-scroll {\n    overflow-y: scroll\n  }\n\n  .xl\\:scrolling-touch {\n    -webkit-overflow-scrolling: touch\n  }\n\n  .xl\\:scrolling-auto {\n    -webkit-overflow-scrolling: auto\n  }\n\n  .xl\\:p-0 {\n    padding: 0\n  }\n\n  .xl\\:p-1 {\n    padding: 0.25rem\n  }\n\n  .xl\\:p-2 {\n    padding: 0.5rem\n  }\n\n  .xl\\:p-3 {\n    padding: 0.75rem\n  }\n\n  .xl\\:p-4 {\n    padding: 1rem\n  }\n\n  .xl\\:p-5 {\n    padding: 1.25rem\n  }\n\n  .xl\\:p-6 {\n    padding: 1.5rem\n  }\n\n  .xl\\:p-8 {\n    padding: 2rem\n  }\n\n  .xl\\:p-10 {\n    padding: 2.5rem\n  }\n\n  .xl\\:p-12 {\n    padding: 3rem\n  }\n\n  .xl\\:p-16 {\n    padding: 4rem\n  }\n\n  .xl\\:p-20 {\n    padding: 5rem\n  }\n\n  .xl\\:p-24 {\n    padding: 6rem\n  }\n\n  .xl\\:p-32 {\n    padding: 8rem\n  }\n\n  .xl\\:p-40 {\n    padding: 10rem\n  }\n\n  .xl\\:p-48 {\n    padding: 12rem\n  }\n\n  .xl\\:p-56 {\n    padding: 14rem\n  }\n\n  .xl\\:p-64 {\n    padding: 16rem\n  }\n\n  .xl\\:p-px {\n    padding: 1px\n  }\n\n  .xl\\:py-0 {\n    padding-top: 0;\n    padding-bottom: 0\n  }\n\n  .xl\\:px-0 {\n    padding-left: 0;\n    padding-right: 0\n  }\n\n  .xl\\:py-1 {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem\n  }\n\n  .xl\\:px-1 {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem\n  }\n\n  .xl\\:py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem\n  }\n\n  .xl\\:px-2 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem\n  }\n\n  .xl\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem\n  }\n\n  .xl\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem\n  }\n\n  .xl\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem\n  }\n\n  .xl\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem\n  }\n\n  .xl\\:py-5 {\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem\n  }\n\n  .xl\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem\n  }\n\n  .xl\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem\n  }\n\n  .xl\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem\n  }\n\n  .xl\\:py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem\n  }\n\n  .xl\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem\n  }\n\n  .xl\\:py-10 {\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem\n  }\n\n  .xl\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem\n  }\n\n  .xl\\:py-12 {\n    padding-top: 3rem;\n    padding-bottom: 3rem\n  }\n\n  .xl\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem\n  }\n\n  .xl\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem\n  }\n\n  .xl\\:px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem\n  }\n\n  .xl\\:py-20 {\n    padding-top: 5rem;\n    padding-bottom: 5rem\n  }\n\n  .xl\\:px-20 {\n    padding-left: 5rem;\n    padding-right: 5rem\n  }\n\n  .xl\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem\n  }\n\n  .xl\\:px-24 {\n    padding-left: 6rem;\n    padding-right: 6rem\n  }\n\n  .xl\\:py-32 {\n    padding-top: 8rem;\n    padding-bottom: 8rem\n  }\n\n  .xl\\:px-32 {\n    padding-left: 8rem;\n    padding-right: 8rem\n  }\n\n  .xl\\:py-40 {\n    padding-top: 10rem;\n    padding-bottom: 10rem\n  }\n\n  .xl\\:px-40 {\n    padding-left: 10rem;\n    padding-right: 10rem\n  }\n\n  .xl\\:py-48 {\n    padding-top: 12rem;\n    padding-bottom: 12rem\n  }\n\n  .xl\\:px-48 {\n    padding-left: 12rem;\n    padding-right: 12rem\n  }\n\n  .xl\\:py-56 {\n    padding-top: 14rem;\n    padding-bottom: 14rem\n  }\n\n  .xl\\:px-56 {\n    padding-left: 14rem;\n    padding-right: 14rem\n  }\n\n  .xl\\:py-64 {\n    padding-top: 16rem;\n    padding-bottom: 16rem\n  }\n\n  .xl\\:px-64 {\n    padding-left: 16rem;\n    padding-right: 16rem\n  }\n\n  .xl\\:py-px {\n    padding-top: 1px;\n    padding-bottom: 1px\n  }\n\n  .xl\\:px-px {\n    padding-left: 1px;\n    padding-right: 1px\n  }\n\n  .xl\\:pt-0 {\n    padding-top: 0\n  }\n\n  .xl\\:pr-0 {\n    padding-right: 0\n  }\n\n  .xl\\:pb-0 {\n    padding-bottom: 0\n  }\n\n  .xl\\:pl-0 {\n    padding-left: 0\n  }\n\n  .xl\\:pt-1 {\n    padding-top: 0.25rem\n  }\n\n  .xl\\:pr-1 {\n    padding-right: 0.25rem\n  }\n\n  .xl\\:pb-1 {\n    padding-bottom: 0.25rem\n  }\n\n  .xl\\:pl-1 {\n    padding-left: 0.25rem\n  }\n\n  .xl\\:pt-2 {\n    padding-top: 0.5rem\n  }\n\n  .xl\\:pr-2 {\n    padding-right: 0.5rem\n  }\n\n  .xl\\:pb-2 {\n    padding-bottom: 0.5rem\n  }\n\n  .xl\\:pl-2 {\n    padding-left: 0.5rem\n  }\n\n  .xl\\:pt-3 {\n    padding-top: 0.75rem\n  }\n\n  .xl\\:pr-3 {\n    padding-right: 0.75rem\n  }\n\n  .xl\\:pb-3 {\n    padding-bottom: 0.75rem\n  }\n\n  .xl\\:pl-3 {\n    padding-left: 0.75rem\n  }\n\n  .xl\\:pt-4 {\n    padding-top: 1rem\n  }\n\n  .xl\\:pr-4 {\n    padding-right: 1rem\n  }\n\n  .xl\\:pb-4 {\n    padding-bottom: 1rem\n  }\n\n  .xl\\:pl-4 {\n    padding-left: 1rem\n  }\n\n  .xl\\:pt-5 {\n    padding-top: 1.25rem\n  }\n\n  .xl\\:pr-5 {\n    padding-right: 1.25rem\n  }\n\n  .xl\\:pb-5 {\n    padding-bottom: 1.25rem\n  }\n\n  .xl\\:pl-5 {\n    padding-left: 1.25rem\n  }\n\n  .xl\\:pt-6 {\n    padding-top: 1.5rem\n  }\n\n  .xl\\:pr-6 {\n    padding-right: 1.5rem\n  }\n\n  .xl\\:pb-6 {\n    padding-bottom: 1.5rem\n  }\n\n  .xl\\:pl-6 {\n    padding-left: 1.5rem\n  }\n\n  .xl\\:pt-8 {\n    padding-top: 2rem\n  }\n\n  .xl\\:pr-8 {\n    padding-right: 2rem\n  }\n\n  .xl\\:pb-8 {\n    padding-bottom: 2rem\n  }\n\n  .xl\\:pl-8 {\n    padding-left: 2rem\n  }\n\n  .xl\\:pt-10 {\n    padding-top: 2.5rem\n  }\n\n  .xl\\:pr-10 {\n    padding-right: 2.5rem\n  }\n\n  .xl\\:pb-10 {\n    padding-bottom: 2.5rem\n  }\n\n  .xl\\:pl-10 {\n    padding-left: 2.5rem\n  }\n\n  .xl\\:pt-12 {\n    padding-top: 3rem\n  }\n\n  .xl\\:pr-12 {\n    padding-right: 3rem\n  }\n\n  .xl\\:pb-12 {\n    padding-bottom: 3rem\n  }\n\n  .xl\\:pl-12 {\n    padding-left: 3rem\n  }\n\n  .xl\\:pt-16 {\n    padding-top: 4rem\n  }\n\n  .xl\\:pr-16 {\n    padding-right: 4rem\n  }\n\n  .xl\\:pb-16 {\n    padding-bottom: 4rem\n  }\n\n  .xl\\:pl-16 {\n    padding-left: 4rem\n  }\n\n  .xl\\:pt-20 {\n    padding-top: 5rem\n  }\n\n  .xl\\:pr-20 {\n    padding-right: 5rem\n  }\n\n  .xl\\:pb-20 {\n    padding-bottom: 5rem\n  }\n\n  .xl\\:pl-20 {\n    padding-left: 5rem\n  }\n\n  .xl\\:pt-24 {\n    padding-top: 6rem\n  }\n\n  .xl\\:pr-24 {\n    padding-right: 6rem\n  }\n\n  .xl\\:pb-24 {\n    padding-bottom: 6rem\n  }\n\n  .xl\\:pl-24 {\n    padding-left: 6rem\n  }\n\n  .xl\\:pt-32 {\n    padding-top: 8rem\n  }\n\n  .xl\\:pr-32 {\n    padding-right: 8rem\n  }\n\n  .xl\\:pb-32 {\n    padding-bottom: 8rem\n  }\n\n  .xl\\:pl-32 {\n    padding-left: 8rem\n  }\n\n  .xl\\:pt-40 {\n    padding-top: 10rem\n  }\n\n  .xl\\:pr-40 {\n    padding-right: 10rem\n  }\n\n  .xl\\:pb-40 {\n    padding-bottom: 10rem\n  }\n\n  .xl\\:pl-40 {\n    padding-left: 10rem\n  }\n\n  .xl\\:pt-48 {\n    padding-top: 12rem\n  }\n\n  .xl\\:pr-48 {\n    padding-right: 12rem\n  }\n\n  .xl\\:pb-48 {\n    padding-bottom: 12rem\n  }\n\n  .xl\\:pl-48 {\n    padding-left: 12rem\n  }\n\n  .xl\\:pt-56 {\n    padding-top: 14rem\n  }\n\n  .xl\\:pr-56 {\n    padding-right: 14rem\n  }\n\n  .xl\\:pb-56 {\n    padding-bottom: 14rem\n  }\n\n  .xl\\:pl-56 {\n    padding-left: 14rem\n  }\n\n  .xl\\:pt-64 {\n    padding-top: 16rem\n  }\n\n  .xl\\:pr-64 {\n    padding-right: 16rem\n  }\n\n  .xl\\:pb-64 {\n    padding-bottom: 16rem\n  }\n\n  .xl\\:pl-64 {\n    padding-left: 16rem\n  }\n\n  .xl\\:pt-px {\n    padding-top: 1px\n  }\n\n  .xl\\:pr-px {\n    padding-right: 1px\n  }\n\n  .xl\\:pb-px {\n    padding-bottom: 1px\n  }\n\n  .xl\\:pl-px {\n    padding-left: 1px\n  }\n\n  .xl\\:placeholder-transparent:-ms-input-placeholder {\n    color: transparent\n  }\n\n  .xl\\:placeholder-transparent::-ms-input-placeholder {\n    color: transparent\n  }\n\n  .xl\\:placeholder-transparent::placeholder {\n    color: transparent\n  }\n\n  .xl\\:placeholder-black:-ms-input-placeholder {\n    color: #000\n  }\n\n  .xl\\:placeholder-black::-ms-input-placeholder {\n    color: #000\n  }\n\n  .xl\\:placeholder-black::placeholder {\n    color: #000\n  }\n\n  .xl\\:placeholder-white:-ms-input-placeholder {\n    color: #fff\n  }\n\n  .xl\\:placeholder-white::-ms-input-placeholder {\n    color: #fff\n  }\n\n  .xl\\:placeholder-white::placeholder {\n    color: #fff\n  }\n\n  .xl\\:placeholder-gray-100:-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .xl\\:placeholder-gray-100::-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .xl\\:placeholder-gray-100::placeholder {\n    color: #f7fafc\n  }\n\n  .xl\\:placeholder-gray-200:-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .xl\\:placeholder-gray-200::-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .xl\\:placeholder-gray-200::placeholder {\n    color: #edf2f7\n  }\n\n  .xl\\:placeholder-gray-300:-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .xl\\:placeholder-gray-300::-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .xl\\:placeholder-gray-300::placeholder {\n    color: #e2e8f0\n  }\n\n  .xl\\:placeholder-gray-400:-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .xl\\:placeholder-gray-400::-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .xl\\:placeholder-gray-400::placeholder {\n    color: #cbd5e0\n  }\n\n  .xl\\:placeholder-gray-500:-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .xl\\:placeholder-gray-500::-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .xl\\:placeholder-gray-500::placeholder {\n    color: #a0aec0\n  }\n\n  .xl\\:placeholder-gray-600:-ms-input-placeholder {\n    color: #718096\n  }\n\n  .xl\\:placeholder-gray-600::-ms-input-placeholder {\n    color: #718096\n  }\n\n  .xl\\:placeholder-gray-600::placeholder {\n    color: #718096\n  }\n\n  .xl\\:placeholder-gray-700:-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .xl\\:placeholder-gray-700::-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .xl\\:placeholder-gray-700::placeholder {\n    color: #4a5568\n  }\n\n  .xl\\:placeholder-gray-800:-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .xl\\:placeholder-gray-800::-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .xl\\:placeholder-gray-800::placeholder {\n    color: #2d3748\n  }\n\n  .xl\\:placeholder-gray-900:-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .xl\\:placeholder-gray-900::-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .xl\\:placeholder-gray-900::placeholder {\n    color: #1a202c\n  }\n\n  .xl\\:placeholder-red-100:-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .xl\\:placeholder-red-100::-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .xl\\:placeholder-red-100::placeholder {\n    color: #fff5f5\n  }\n\n  .xl\\:placeholder-red-200:-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .xl\\:placeholder-red-200::-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .xl\\:placeholder-red-200::placeholder {\n    color: #fed7d7\n  }\n\n  .xl\\:placeholder-red-300:-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .xl\\:placeholder-red-300::-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .xl\\:placeholder-red-300::placeholder {\n    color: #feb2b2\n  }\n\n  .xl\\:placeholder-red-400:-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .xl\\:placeholder-red-400::-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .xl\\:placeholder-red-400::placeholder {\n    color: #fc8181\n  }\n\n  .xl\\:placeholder-red-500:-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .xl\\:placeholder-red-500::-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .xl\\:placeholder-red-500::placeholder {\n    color: #f56565\n  }\n\n  .xl\\:placeholder-red-600:-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .xl\\:placeholder-red-600::-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .xl\\:placeholder-red-600::placeholder {\n    color: #e53e3e\n  }\n\n  .xl\\:placeholder-red-700:-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .xl\\:placeholder-red-700::-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .xl\\:placeholder-red-700::placeholder {\n    color: #c53030\n  }\n\n  .xl\\:placeholder-red-800:-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .xl\\:placeholder-red-800::-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .xl\\:placeholder-red-800::placeholder {\n    color: #9b2c2c\n  }\n\n  .xl\\:placeholder-red-900:-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .xl\\:placeholder-red-900::-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .xl\\:placeholder-red-900::placeholder {\n    color: #742a2a\n  }\n\n  .xl\\:placeholder-orange-100:-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .xl\\:placeholder-orange-100::-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .xl\\:placeholder-orange-100::placeholder {\n    color: #fffaf0\n  }\n\n  .xl\\:placeholder-orange-200:-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .xl\\:placeholder-orange-200::-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .xl\\:placeholder-orange-200::placeholder {\n    color: #feebc8\n  }\n\n  .xl\\:placeholder-orange-300:-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .xl\\:placeholder-orange-300::-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .xl\\:placeholder-orange-300::placeholder {\n    color: #fbd38d\n  }\n\n  .xl\\:placeholder-orange-400:-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .xl\\:placeholder-orange-400::-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .xl\\:placeholder-orange-400::placeholder {\n    color: #f6ad55\n  }\n\n  .xl\\:placeholder-orange-500:-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .xl\\:placeholder-orange-500::-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .xl\\:placeholder-orange-500::placeholder {\n    color: #ed8936\n  }\n\n  .xl\\:placeholder-orange-600:-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .xl\\:placeholder-orange-600::-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .xl\\:placeholder-orange-600::placeholder {\n    color: #dd6b20\n  }\n\n  .xl\\:placeholder-orange-700:-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .xl\\:placeholder-orange-700::-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .xl\\:placeholder-orange-700::placeholder {\n    color: #c05621\n  }\n\n  .xl\\:placeholder-orange-800:-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .xl\\:placeholder-orange-800::-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .xl\\:placeholder-orange-800::placeholder {\n    color: #9c4221\n  }\n\n  .xl\\:placeholder-orange-900:-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .xl\\:placeholder-orange-900::-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .xl\\:placeholder-orange-900::placeholder {\n    color: #7b341e\n  }\n\n  .xl\\:placeholder-yellow-100:-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .xl\\:placeholder-yellow-100::-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .xl\\:placeholder-yellow-100::placeholder {\n    color: #fffff0\n  }\n\n  .xl\\:placeholder-yellow-200:-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .xl\\:placeholder-yellow-200::-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .xl\\:placeholder-yellow-200::placeholder {\n    color: #fefcbf\n  }\n\n  .xl\\:placeholder-yellow-300:-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .xl\\:placeholder-yellow-300::-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .xl\\:placeholder-yellow-300::placeholder {\n    color: #faf089\n  }\n\n  .xl\\:placeholder-yellow-400:-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .xl\\:placeholder-yellow-400::-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .xl\\:placeholder-yellow-400::placeholder {\n    color: #f6e05e\n  }\n\n  .xl\\:placeholder-yellow-500:-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .xl\\:placeholder-yellow-500::-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .xl\\:placeholder-yellow-500::placeholder {\n    color: #ecc94b\n  }\n\n  .xl\\:placeholder-yellow-600:-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .xl\\:placeholder-yellow-600::-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .xl\\:placeholder-yellow-600::placeholder {\n    color: #d69e2e\n  }\n\n  .xl\\:placeholder-yellow-700:-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .xl\\:placeholder-yellow-700::-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .xl\\:placeholder-yellow-700::placeholder {\n    color: #b7791f\n  }\n\n  .xl\\:placeholder-yellow-800:-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .xl\\:placeholder-yellow-800::-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .xl\\:placeholder-yellow-800::placeholder {\n    color: #975a16\n  }\n\n  .xl\\:placeholder-yellow-900:-ms-input-placeholder {\n    color: #744210\n  }\n\n  .xl\\:placeholder-yellow-900::-ms-input-placeholder {\n    color: #744210\n  }\n\n  .xl\\:placeholder-yellow-900::placeholder {\n    color: #744210\n  }\n\n  .xl\\:placeholder-green-100:-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .xl\\:placeholder-green-100::-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .xl\\:placeholder-green-100::placeholder {\n    color: #f0fff4\n  }\n\n  .xl\\:placeholder-green-200:-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .xl\\:placeholder-green-200::-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .xl\\:placeholder-green-200::placeholder {\n    color: #c6f6d5\n  }\n\n  .xl\\:placeholder-green-300:-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .xl\\:placeholder-green-300::-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .xl\\:placeholder-green-300::placeholder {\n    color: #9ae6b4\n  }\n\n  .xl\\:placeholder-green-400:-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .xl\\:placeholder-green-400::-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .xl\\:placeholder-green-400::placeholder {\n    color: #68d391\n  }\n\n  .xl\\:placeholder-green-500:-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .xl\\:placeholder-green-500::-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .xl\\:placeholder-green-500::placeholder {\n    color: #48bb78\n  }\n\n  .xl\\:placeholder-green-600:-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .xl\\:placeholder-green-600::-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .xl\\:placeholder-green-600::placeholder {\n    color: #38a169\n  }\n\n  .xl\\:placeholder-green-700:-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .xl\\:placeholder-green-700::-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .xl\\:placeholder-green-700::placeholder {\n    color: #2f855a\n  }\n\n  .xl\\:placeholder-green-800:-ms-input-placeholder {\n    color: #276749\n  }\n\n  .xl\\:placeholder-green-800::-ms-input-placeholder {\n    color: #276749\n  }\n\n  .xl\\:placeholder-green-800::placeholder {\n    color: #276749\n  }\n\n  .xl\\:placeholder-green-900:-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .xl\\:placeholder-green-900::-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .xl\\:placeholder-green-900::placeholder {\n    color: #22543d\n  }\n\n  .xl\\:placeholder-teal-100:-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .xl\\:placeholder-teal-100::-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .xl\\:placeholder-teal-100::placeholder {\n    color: #e6fffa\n  }\n\n  .xl\\:placeholder-teal-200:-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .xl\\:placeholder-teal-200::-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .xl\\:placeholder-teal-200::placeholder {\n    color: #b2f5ea\n  }\n\n  .xl\\:placeholder-teal-300:-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .xl\\:placeholder-teal-300::-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .xl\\:placeholder-teal-300::placeholder {\n    color: #81e6d9\n  }\n\n  .xl\\:placeholder-teal-400:-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .xl\\:placeholder-teal-400::-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .xl\\:placeholder-teal-400::placeholder {\n    color: #4fd1c5\n  }\n\n  .xl\\:placeholder-teal-500:-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .xl\\:placeholder-teal-500::-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .xl\\:placeholder-teal-500::placeholder {\n    color: #38b2ac\n  }\n\n  .xl\\:placeholder-teal-600:-ms-input-placeholder {\n    color: #319795\n  }\n\n  .xl\\:placeholder-teal-600::-ms-input-placeholder {\n    color: #319795\n  }\n\n  .xl\\:placeholder-teal-600::placeholder {\n    color: #319795\n  }\n\n  .xl\\:placeholder-teal-700:-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .xl\\:placeholder-teal-700::-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .xl\\:placeholder-teal-700::placeholder {\n    color: #2c7a7b\n  }\n\n  .xl\\:placeholder-teal-800:-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .xl\\:placeholder-teal-800::-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .xl\\:placeholder-teal-800::placeholder {\n    color: #285e61\n  }\n\n  .xl\\:placeholder-teal-900:-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .xl\\:placeholder-teal-900::-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .xl\\:placeholder-teal-900::placeholder {\n    color: #234e52\n  }\n\n  .xl\\:placeholder-blue-100:-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .xl\\:placeholder-blue-100::-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .xl\\:placeholder-blue-100::placeholder {\n    color: #ebf8ff\n  }\n\n  .xl\\:placeholder-blue-200:-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .xl\\:placeholder-blue-200::-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .xl\\:placeholder-blue-200::placeholder {\n    color: #bee3f8\n  }\n\n  .xl\\:placeholder-blue-300:-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .xl\\:placeholder-blue-300::-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .xl\\:placeholder-blue-300::placeholder {\n    color: #90cdf4\n  }\n\n  .xl\\:placeholder-blue-400:-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .xl\\:placeholder-blue-400::-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .xl\\:placeholder-blue-400::placeholder {\n    color: #63b3ed\n  }\n\n  .xl\\:placeholder-blue-500:-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .xl\\:placeholder-blue-500::-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .xl\\:placeholder-blue-500::placeholder {\n    color: #4299e1\n  }\n\n  .xl\\:placeholder-blue-600:-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .xl\\:placeholder-blue-600::-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .xl\\:placeholder-blue-600::placeholder {\n    color: #3182ce\n  }\n\n  .xl\\:placeholder-blue-700:-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .xl\\:placeholder-blue-700::-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .xl\\:placeholder-blue-700::placeholder {\n    color: #2b6cb0\n  }\n\n  .xl\\:placeholder-blue-800:-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .xl\\:placeholder-blue-800::-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .xl\\:placeholder-blue-800::placeholder {\n    color: #2c5282\n  }\n\n  .xl\\:placeholder-blue-900:-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .xl\\:placeholder-blue-900::-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .xl\\:placeholder-blue-900::placeholder {\n    color: #2a4365\n  }\n\n  .xl\\:placeholder-indigo-100:-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .xl\\:placeholder-indigo-100::-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .xl\\:placeholder-indigo-100::placeholder {\n    color: #ebf4ff\n  }\n\n  .xl\\:placeholder-indigo-200:-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .xl\\:placeholder-indigo-200::-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .xl\\:placeholder-indigo-200::placeholder {\n    color: #c3dafe\n  }\n\n  .xl\\:placeholder-indigo-300:-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .xl\\:placeholder-indigo-300::-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .xl\\:placeholder-indigo-300::placeholder {\n    color: #a3bffa\n  }\n\n  .xl\\:placeholder-indigo-400:-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .xl\\:placeholder-indigo-400::-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .xl\\:placeholder-indigo-400::placeholder {\n    color: #7f9cf5\n  }\n\n  .xl\\:placeholder-indigo-500:-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .xl\\:placeholder-indigo-500::-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .xl\\:placeholder-indigo-500::placeholder {\n    color: #667eea\n  }\n\n  .xl\\:placeholder-indigo-600:-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .xl\\:placeholder-indigo-600::-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .xl\\:placeholder-indigo-600::placeholder {\n    color: #5a67d8\n  }\n\n  .xl\\:placeholder-indigo-700:-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .xl\\:placeholder-indigo-700::-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .xl\\:placeholder-indigo-700::placeholder {\n    color: #4c51bf\n  }\n\n  .xl\\:placeholder-indigo-800:-ms-input-placeholder {\n    color: #434190\n  }\n\n  .xl\\:placeholder-indigo-800::-ms-input-placeholder {\n    color: #434190\n  }\n\n  .xl\\:placeholder-indigo-800::placeholder {\n    color: #434190\n  }\n\n  .xl\\:placeholder-indigo-900:-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .xl\\:placeholder-indigo-900::-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .xl\\:placeholder-indigo-900::placeholder {\n    color: #3c366b\n  }\n\n  .xl\\:placeholder-purple-100:-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .xl\\:placeholder-purple-100::-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .xl\\:placeholder-purple-100::placeholder {\n    color: #faf5ff\n  }\n\n  .xl\\:placeholder-purple-200:-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .xl\\:placeholder-purple-200::-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .xl\\:placeholder-purple-200::placeholder {\n    color: #e9d8fd\n  }\n\n  .xl\\:placeholder-purple-300:-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .xl\\:placeholder-purple-300::-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .xl\\:placeholder-purple-300::placeholder {\n    color: #d6bcfa\n  }\n\n  .xl\\:placeholder-purple-400:-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .xl\\:placeholder-purple-400::-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .xl\\:placeholder-purple-400::placeholder {\n    color: #b794f4\n  }\n\n  .xl\\:placeholder-purple-500:-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .xl\\:placeholder-purple-500::-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .xl\\:placeholder-purple-500::placeholder {\n    color: #9f7aea\n  }\n\n  .xl\\:placeholder-purple-600:-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .xl\\:placeholder-purple-600::-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .xl\\:placeholder-purple-600::placeholder {\n    color: #805ad5\n  }\n\n  .xl\\:placeholder-purple-700:-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .xl\\:placeholder-purple-700::-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .xl\\:placeholder-purple-700::placeholder {\n    color: #6b46c1\n  }\n\n  .xl\\:placeholder-purple-800:-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .xl\\:placeholder-purple-800::-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .xl\\:placeholder-purple-800::placeholder {\n    color: #553c9a\n  }\n\n  .xl\\:placeholder-purple-900:-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .xl\\:placeholder-purple-900::-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .xl\\:placeholder-purple-900::placeholder {\n    color: #44337a\n  }\n\n  .xl\\:placeholder-pink-100:-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .xl\\:placeholder-pink-100::-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .xl\\:placeholder-pink-100::placeholder {\n    color: #fff5f7\n  }\n\n  .xl\\:placeholder-pink-200:-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .xl\\:placeholder-pink-200::-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .xl\\:placeholder-pink-200::placeholder {\n    color: #fed7e2\n  }\n\n  .xl\\:placeholder-pink-300:-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .xl\\:placeholder-pink-300::-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .xl\\:placeholder-pink-300::placeholder {\n    color: #fbb6ce\n  }\n\n  .xl\\:placeholder-pink-400:-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .xl\\:placeholder-pink-400::-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .xl\\:placeholder-pink-400::placeholder {\n    color: #f687b3\n  }\n\n  .xl\\:placeholder-pink-500:-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .xl\\:placeholder-pink-500::-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .xl\\:placeholder-pink-500::placeholder {\n    color: #ed64a6\n  }\n\n  .xl\\:placeholder-pink-600:-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .xl\\:placeholder-pink-600::-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .xl\\:placeholder-pink-600::placeholder {\n    color: #d53f8c\n  }\n\n  .xl\\:placeholder-pink-700:-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .xl\\:placeholder-pink-700::-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .xl\\:placeholder-pink-700::placeholder {\n    color: #b83280\n  }\n\n  .xl\\:placeholder-pink-800:-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .xl\\:placeholder-pink-800::-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .xl\\:placeholder-pink-800::placeholder {\n    color: #97266d\n  }\n\n  .xl\\:placeholder-pink-900:-ms-input-placeholder {\n    color: #702459\n  }\n\n  .xl\\:placeholder-pink-900::-ms-input-placeholder {\n    color: #702459\n  }\n\n  .xl\\:placeholder-pink-900::placeholder {\n    color: #702459\n  }\n\n  .xl\\:focus\\:placeholder-transparent:focus:-ms-input-placeholder {\n    color: transparent\n  }\n\n  .xl\\:focus\\:placeholder-transparent:focus::-ms-input-placeholder {\n    color: transparent\n  }\n\n  .xl\\:focus\\:placeholder-transparent:focus::placeholder {\n    color: transparent\n  }\n\n  .xl\\:focus\\:placeholder-black:focus:-ms-input-placeholder {\n    color: #000\n  }\n\n  .xl\\:focus\\:placeholder-black:focus::-ms-input-placeholder {\n    color: #000\n  }\n\n  .xl\\:focus\\:placeholder-black:focus::placeholder {\n    color: #000\n  }\n\n  .xl\\:focus\\:placeholder-white:focus:-ms-input-placeholder {\n    color: #fff\n  }\n\n  .xl\\:focus\\:placeholder-white:focus::-ms-input-placeholder {\n    color: #fff\n  }\n\n  .xl\\:focus\\:placeholder-white:focus::placeholder {\n    color: #fff\n  }\n\n  .xl\\:focus\\:placeholder-gray-100:focus:-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .xl\\:focus\\:placeholder-gray-100:focus::-ms-input-placeholder {\n    color: #f7fafc\n  }\n\n  .xl\\:focus\\:placeholder-gray-100:focus::placeholder {\n    color: #f7fafc\n  }\n\n  .xl\\:focus\\:placeholder-gray-200:focus:-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .xl\\:focus\\:placeholder-gray-200:focus::-ms-input-placeholder {\n    color: #edf2f7\n  }\n\n  .xl\\:focus\\:placeholder-gray-200:focus::placeholder {\n    color: #edf2f7\n  }\n\n  .xl\\:focus\\:placeholder-gray-300:focus:-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .xl\\:focus\\:placeholder-gray-300:focus::-ms-input-placeholder {\n    color: #e2e8f0\n  }\n\n  .xl\\:focus\\:placeholder-gray-300:focus::placeholder {\n    color: #e2e8f0\n  }\n\n  .xl\\:focus\\:placeholder-gray-400:focus:-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .xl\\:focus\\:placeholder-gray-400:focus::-ms-input-placeholder {\n    color: #cbd5e0\n  }\n\n  .xl\\:focus\\:placeholder-gray-400:focus::placeholder {\n    color: #cbd5e0\n  }\n\n  .xl\\:focus\\:placeholder-gray-500:focus:-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .xl\\:focus\\:placeholder-gray-500:focus::-ms-input-placeholder {\n    color: #a0aec0\n  }\n\n  .xl\\:focus\\:placeholder-gray-500:focus::placeholder {\n    color: #a0aec0\n  }\n\n  .xl\\:focus\\:placeholder-gray-600:focus:-ms-input-placeholder {\n    color: #718096\n  }\n\n  .xl\\:focus\\:placeholder-gray-600:focus::-ms-input-placeholder {\n    color: #718096\n  }\n\n  .xl\\:focus\\:placeholder-gray-600:focus::placeholder {\n    color: #718096\n  }\n\n  .xl\\:focus\\:placeholder-gray-700:focus:-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .xl\\:focus\\:placeholder-gray-700:focus::-ms-input-placeholder {\n    color: #4a5568\n  }\n\n  .xl\\:focus\\:placeholder-gray-700:focus::placeholder {\n    color: #4a5568\n  }\n\n  .xl\\:focus\\:placeholder-gray-800:focus:-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .xl\\:focus\\:placeholder-gray-800:focus::-ms-input-placeholder {\n    color: #2d3748\n  }\n\n  .xl\\:focus\\:placeholder-gray-800:focus::placeholder {\n    color: #2d3748\n  }\n\n  .xl\\:focus\\:placeholder-gray-900:focus:-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .xl\\:focus\\:placeholder-gray-900:focus::-ms-input-placeholder {\n    color: #1a202c\n  }\n\n  .xl\\:focus\\:placeholder-gray-900:focus::placeholder {\n    color: #1a202c\n  }\n\n  .xl\\:focus\\:placeholder-red-100:focus:-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .xl\\:focus\\:placeholder-red-100:focus::-ms-input-placeholder {\n    color: #fff5f5\n  }\n\n  .xl\\:focus\\:placeholder-red-100:focus::placeholder {\n    color: #fff5f5\n  }\n\n  .xl\\:focus\\:placeholder-red-200:focus:-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .xl\\:focus\\:placeholder-red-200:focus::-ms-input-placeholder {\n    color: #fed7d7\n  }\n\n  .xl\\:focus\\:placeholder-red-200:focus::placeholder {\n    color: #fed7d7\n  }\n\n  .xl\\:focus\\:placeholder-red-300:focus:-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .xl\\:focus\\:placeholder-red-300:focus::-ms-input-placeholder {\n    color: #feb2b2\n  }\n\n  .xl\\:focus\\:placeholder-red-300:focus::placeholder {\n    color: #feb2b2\n  }\n\n  .xl\\:focus\\:placeholder-red-400:focus:-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .xl\\:focus\\:placeholder-red-400:focus::-ms-input-placeholder {\n    color: #fc8181\n  }\n\n  .xl\\:focus\\:placeholder-red-400:focus::placeholder {\n    color: #fc8181\n  }\n\n  .xl\\:focus\\:placeholder-red-500:focus:-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .xl\\:focus\\:placeholder-red-500:focus::-ms-input-placeholder {\n    color: #f56565\n  }\n\n  .xl\\:focus\\:placeholder-red-500:focus::placeholder {\n    color: #f56565\n  }\n\n  .xl\\:focus\\:placeholder-red-600:focus:-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .xl\\:focus\\:placeholder-red-600:focus::-ms-input-placeholder {\n    color: #e53e3e\n  }\n\n  .xl\\:focus\\:placeholder-red-600:focus::placeholder {\n    color: #e53e3e\n  }\n\n  .xl\\:focus\\:placeholder-red-700:focus:-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .xl\\:focus\\:placeholder-red-700:focus::-ms-input-placeholder {\n    color: #c53030\n  }\n\n  .xl\\:focus\\:placeholder-red-700:focus::placeholder {\n    color: #c53030\n  }\n\n  .xl\\:focus\\:placeholder-red-800:focus:-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .xl\\:focus\\:placeholder-red-800:focus::-ms-input-placeholder {\n    color: #9b2c2c\n  }\n\n  .xl\\:focus\\:placeholder-red-800:focus::placeholder {\n    color: #9b2c2c\n  }\n\n  .xl\\:focus\\:placeholder-red-900:focus:-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .xl\\:focus\\:placeholder-red-900:focus::-ms-input-placeholder {\n    color: #742a2a\n  }\n\n  .xl\\:focus\\:placeholder-red-900:focus::placeholder {\n    color: #742a2a\n  }\n\n  .xl\\:focus\\:placeholder-orange-100:focus:-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .xl\\:focus\\:placeholder-orange-100:focus::-ms-input-placeholder {\n    color: #fffaf0\n  }\n\n  .xl\\:focus\\:placeholder-orange-100:focus::placeholder {\n    color: #fffaf0\n  }\n\n  .xl\\:focus\\:placeholder-orange-200:focus:-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .xl\\:focus\\:placeholder-orange-200:focus::-ms-input-placeholder {\n    color: #feebc8\n  }\n\n  .xl\\:focus\\:placeholder-orange-200:focus::placeholder {\n    color: #feebc8\n  }\n\n  .xl\\:focus\\:placeholder-orange-300:focus:-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .xl\\:focus\\:placeholder-orange-300:focus::-ms-input-placeholder {\n    color: #fbd38d\n  }\n\n  .xl\\:focus\\:placeholder-orange-300:focus::placeholder {\n    color: #fbd38d\n  }\n\n  .xl\\:focus\\:placeholder-orange-400:focus:-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .xl\\:focus\\:placeholder-orange-400:focus::-ms-input-placeholder {\n    color: #f6ad55\n  }\n\n  .xl\\:focus\\:placeholder-orange-400:focus::placeholder {\n    color: #f6ad55\n  }\n\n  .xl\\:focus\\:placeholder-orange-500:focus:-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .xl\\:focus\\:placeholder-orange-500:focus::-ms-input-placeholder {\n    color: #ed8936\n  }\n\n  .xl\\:focus\\:placeholder-orange-500:focus::placeholder {\n    color: #ed8936\n  }\n\n  .xl\\:focus\\:placeholder-orange-600:focus:-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .xl\\:focus\\:placeholder-orange-600:focus::-ms-input-placeholder {\n    color: #dd6b20\n  }\n\n  .xl\\:focus\\:placeholder-orange-600:focus::placeholder {\n    color: #dd6b20\n  }\n\n  .xl\\:focus\\:placeholder-orange-700:focus:-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .xl\\:focus\\:placeholder-orange-700:focus::-ms-input-placeholder {\n    color: #c05621\n  }\n\n  .xl\\:focus\\:placeholder-orange-700:focus::placeholder {\n    color: #c05621\n  }\n\n  .xl\\:focus\\:placeholder-orange-800:focus:-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .xl\\:focus\\:placeholder-orange-800:focus::-ms-input-placeholder {\n    color: #9c4221\n  }\n\n  .xl\\:focus\\:placeholder-orange-800:focus::placeholder {\n    color: #9c4221\n  }\n\n  .xl\\:focus\\:placeholder-orange-900:focus:-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .xl\\:focus\\:placeholder-orange-900:focus::-ms-input-placeholder {\n    color: #7b341e\n  }\n\n  .xl\\:focus\\:placeholder-orange-900:focus::placeholder {\n    color: #7b341e\n  }\n\n  .xl\\:focus\\:placeholder-yellow-100:focus:-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .xl\\:focus\\:placeholder-yellow-100:focus::-ms-input-placeholder {\n    color: #fffff0\n  }\n\n  .xl\\:focus\\:placeholder-yellow-100:focus::placeholder {\n    color: #fffff0\n  }\n\n  .xl\\:focus\\:placeholder-yellow-200:focus:-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .xl\\:focus\\:placeholder-yellow-200:focus::-ms-input-placeholder {\n    color: #fefcbf\n  }\n\n  .xl\\:focus\\:placeholder-yellow-200:focus::placeholder {\n    color: #fefcbf\n  }\n\n  .xl\\:focus\\:placeholder-yellow-300:focus:-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .xl\\:focus\\:placeholder-yellow-300:focus::-ms-input-placeholder {\n    color: #faf089\n  }\n\n  .xl\\:focus\\:placeholder-yellow-300:focus::placeholder {\n    color: #faf089\n  }\n\n  .xl\\:focus\\:placeholder-yellow-400:focus:-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .xl\\:focus\\:placeholder-yellow-400:focus::-ms-input-placeholder {\n    color: #f6e05e\n  }\n\n  .xl\\:focus\\:placeholder-yellow-400:focus::placeholder {\n    color: #f6e05e\n  }\n\n  .xl\\:focus\\:placeholder-yellow-500:focus:-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .xl\\:focus\\:placeholder-yellow-500:focus::-ms-input-placeholder {\n    color: #ecc94b\n  }\n\n  .xl\\:focus\\:placeholder-yellow-500:focus::placeholder {\n    color: #ecc94b\n  }\n\n  .xl\\:focus\\:placeholder-yellow-600:focus:-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .xl\\:focus\\:placeholder-yellow-600:focus::-ms-input-placeholder {\n    color: #d69e2e\n  }\n\n  .xl\\:focus\\:placeholder-yellow-600:focus::placeholder {\n    color: #d69e2e\n  }\n\n  .xl\\:focus\\:placeholder-yellow-700:focus:-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .xl\\:focus\\:placeholder-yellow-700:focus::-ms-input-placeholder {\n    color: #b7791f\n  }\n\n  .xl\\:focus\\:placeholder-yellow-700:focus::placeholder {\n    color: #b7791f\n  }\n\n  .xl\\:focus\\:placeholder-yellow-800:focus:-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .xl\\:focus\\:placeholder-yellow-800:focus::-ms-input-placeholder {\n    color: #975a16\n  }\n\n  .xl\\:focus\\:placeholder-yellow-800:focus::placeholder {\n    color: #975a16\n  }\n\n  .xl\\:focus\\:placeholder-yellow-900:focus:-ms-input-placeholder {\n    color: #744210\n  }\n\n  .xl\\:focus\\:placeholder-yellow-900:focus::-ms-input-placeholder {\n    color: #744210\n  }\n\n  .xl\\:focus\\:placeholder-yellow-900:focus::placeholder {\n    color: #744210\n  }\n\n  .xl\\:focus\\:placeholder-green-100:focus:-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .xl\\:focus\\:placeholder-green-100:focus::-ms-input-placeholder {\n    color: #f0fff4\n  }\n\n  .xl\\:focus\\:placeholder-green-100:focus::placeholder {\n    color: #f0fff4\n  }\n\n  .xl\\:focus\\:placeholder-green-200:focus:-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .xl\\:focus\\:placeholder-green-200:focus::-ms-input-placeholder {\n    color: #c6f6d5\n  }\n\n  .xl\\:focus\\:placeholder-green-200:focus::placeholder {\n    color: #c6f6d5\n  }\n\n  .xl\\:focus\\:placeholder-green-300:focus:-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .xl\\:focus\\:placeholder-green-300:focus::-ms-input-placeholder {\n    color: #9ae6b4\n  }\n\n  .xl\\:focus\\:placeholder-green-300:focus::placeholder {\n    color: #9ae6b4\n  }\n\n  .xl\\:focus\\:placeholder-green-400:focus:-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .xl\\:focus\\:placeholder-green-400:focus::-ms-input-placeholder {\n    color: #68d391\n  }\n\n  .xl\\:focus\\:placeholder-green-400:focus::placeholder {\n    color: #68d391\n  }\n\n  .xl\\:focus\\:placeholder-green-500:focus:-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .xl\\:focus\\:placeholder-green-500:focus::-ms-input-placeholder {\n    color: #48bb78\n  }\n\n  .xl\\:focus\\:placeholder-green-500:focus::placeholder {\n    color: #48bb78\n  }\n\n  .xl\\:focus\\:placeholder-green-600:focus:-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .xl\\:focus\\:placeholder-green-600:focus::-ms-input-placeholder {\n    color: #38a169\n  }\n\n  .xl\\:focus\\:placeholder-green-600:focus::placeholder {\n    color: #38a169\n  }\n\n  .xl\\:focus\\:placeholder-green-700:focus:-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .xl\\:focus\\:placeholder-green-700:focus::-ms-input-placeholder {\n    color: #2f855a\n  }\n\n  .xl\\:focus\\:placeholder-green-700:focus::placeholder {\n    color: #2f855a\n  }\n\n  .xl\\:focus\\:placeholder-green-800:focus:-ms-input-placeholder {\n    color: #276749\n  }\n\n  .xl\\:focus\\:placeholder-green-800:focus::-ms-input-placeholder {\n    color: #276749\n  }\n\n  .xl\\:focus\\:placeholder-green-800:focus::placeholder {\n    color: #276749\n  }\n\n  .xl\\:focus\\:placeholder-green-900:focus:-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .xl\\:focus\\:placeholder-green-900:focus::-ms-input-placeholder {\n    color: #22543d\n  }\n\n  .xl\\:focus\\:placeholder-green-900:focus::placeholder {\n    color: #22543d\n  }\n\n  .xl\\:focus\\:placeholder-teal-100:focus:-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .xl\\:focus\\:placeholder-teal-100:focus::-ms-input-placeholder {\n    color: #e6fffa\n  }\n\n  .xl\\:focus\\:placeholder-teal-100:focus::placeholder {\n    color: #e6fffa\n  }\n\n  .xl\\:focus\\:placeholder-teal-200:focus:-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .xl\\:focus\\:placeholder-teal-200:focus::-ms-input-placeholder {\n    color: #b2f5ea\n  }\n\n  .xl\\:focus\\:placeholder-teal-200:focus::placeholder {\n    color: #b2f5ea\n  }\n\n  .xl\\:focus\\:placeholder-teal-300:focus:-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .xl\\:focus\\:placeholder-teal-300:focus::-ms-input-placeholder {\n    color: #81e6d9\n  }\n\n  .xl\\:focus\\:placeholder-teal-300:focus::placeholder {\n    color: #81e6d9\n  }\n\n  .xl\\:focus\\:placeholder-teal-400:focus:-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .xl\\:focus\\:placeholder-teal-400:focus::-ms-input-placeholder {\n    color: #4fd1c5\n  }\n\n  .xl\\:focus\\:placeholder-teal-400:focus::placeholder {\n    color: #4fd1c5\n  }\n\n  .xl\\:focus\\:placeholder-teal-500:focus:-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .xl\\:focus\\:placeholder-teal-500:focus::-ms-input-placeholder {\n    color: #38b2ac\n  }\n\n  .xl\\:focus\\:placeholder-teal-500:focus::placeholder {\n    color: #38b2ac\n  }\n\n  .xl\\:focus\\:placeholder-teal-600:focus:-ms-input-placeholder {\n    color: #319795\n  }\n\n  .xl\\:focus\\:placeholder-teal-600:focus::-ms-input-placeholder {\n    color: #319795\n  }\n\n  .xl\\:focus\\:placeholder-teal-600:focus::placeholder {\n    color: #319795\n  }\n\n  .xl\\:focus\\:placeholder-teal-700:focus:-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .xl\\:focus\\:placeholder-teal-700:focus::-ms-input-placeholder {\n    color: #2c7a7b\n  }\n\n  .xl\\:focus\\:placeholder-teal-700:focus::placeholder {\n    color: #2c7a7b\n  }\n\n  .xl\\:focus\\:placeholder-teal-800:focus:-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .xl\\:focus\\:placeholder-teal-800:focus::-ms-input-placeholder {\n    color: #285e61\n  }\n\n  .xl\\:focus\\:placeholder-teal-800:focus::placeholder {\n    color: #285e61\n  }\n\n  .xl\\:focus\\:placeholder-teal-900:focus:-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .xl\\:focus\\:placeholder-teal-900:focus::-ms-input-placeholder {\n    color: #234e52\n  }\n\n  .xl\\:focus\\:placeholder-teal-900:focus::placeholder {\n    color: #234e52\n  }\n\n  .xl\\:focus\\:placeholder-blue-100:focus:-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .xl\\:focus\\:placeholder-blue-100:focus::-ms-input-placeholder {\n    color: #ebf8ff\n  }\n\n  .xl\\:focus\\:placeholder-blue-100:focus::placeholder {\n    color: #ebf8ff\n  }\n\n  .xl\\:focus\\:placeholder-blue-200:focus:-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .xl\\:focus\\:placeholder-blue-200:focus::-ms-input-placeholder {\n    color: #bee3f8\n  }\n\n  .xl\\:focus\\:placeholder-blue-200:focus::placeholder {\n    color: #bee3f8\n  }\n\n  .xl\\:focus\\:placeholder-blue-300:focus:-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .xl\\:focus\\:placeholder-blue-300:focus::-ms-input-placeholder {\n    color: #90cdf4\n  }\n\n  .xl\\:focus\\:placeholder-blue-300:focus::placeholder {\n    color: #90cdf4\n  }\n\n  .xl\\:focus\\:placeholder-blue-400:focus:-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .xl\\:focus\\:placeholder-blue-400:focus::-ms-input-placeholder {\n    color: #63b3ed\n  }\n\n  .xl\\:focus\\:placeholder-blue-400:focus::placeholder {\n    color: #63b3ed\n  }\n\n  .xl\\:focus\\:placeholder-blue-500:focus:-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .xl\\:focus\\:placeholder-blue-500:focus::-ms-input-placeholder {\n    color: #4299e1\n  }\n\n  .xl\\:focus\\:placeholder-blue-500:focus::placeholder {\n    color: #4299e1\n  }\n\n  .xl\\:focus\\:placeholder-blue-600:focus:-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .xl\\:focus\\:placeholder-blue-600:focus::-ms-input-placeholder {\n    color: #3182ce\n  }\n\n  .xl\\:focus\\:placeholder-blue-600:focus::placeholder {\n    color: #3182ce\n  }\n\n  .xl\\:focus\\:placeholder-blue-700:focus:-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .xl\\:focus\\:placeholder-blue-700:focus::-ms-input-placeholder {\n    color: #2b6cb0\n  }\n\n  .xl\\:focus\\:placeholder-blue-700:focus::placeholder {\n    color: #2b6cb0\n  }\n\n  .xl\\:focus\\:placeholder-blue-800:focus:-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .xl\\:focus\\:placeholder-blue-800:focus::-ms-input-placeholder {\n    color: #2c5282\n  }\n\n  .xl\\:focus\\:placeholder-blue-800:focus::placeholder {\n    color: #2c5282\n  }\n\n  .xl\\:focus\\:placeholder-blue-900:focus:-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .xl\\:focus\\:placeholder-blue-900:focus::-ms-input-placeholder {\n    color: #2a4365\n  }\n\n  .xl\\:focus\\:placeholder-blue-900:focus::placeholder {\n    color: #2a4365\n  }\n\n  .xl\\:focus\\:placeholder-indigo-100:focus:-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .xl\\:focus\\:placeholder-indigo-100:focus::-ms-input-placeholder {\n    color: #ebf4ff\n  }\n\n  .xl\\:focus\\:placeholder-indigo-100:focus::placeholder {\n    color: #ebf4ff\n  }\n\n  .xl\\:focus\\:placeholder-indigo-200:focus:-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .xl\\:focus\\:placeholder-indigo-200:focus::-ms-input-placeholder {\n    color: #c3dafe\n  }\n\n  .xl\\:focus\\:placeholder-indigo-200:focus::placeholder {\n    color: #c3dafe\n  }\n\n  .xl\\:focus\\:placeholder-indigo-300:focus:-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .xl\\:focus\\:placeholder-indigo-300:focus::-ms-input-placeholder {\n    color: #a3bffa\n  }\n\n  .xl\\:focus\\:placeholder-indigo-300:focus::placeholder {\n    color: #a3bffa\n  }\n\n  .xl\\:focus\\:placeholder-indigo-400:focus:-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .xl\\:focus\\:placeholder-indigo-400:focus::-ms-input-placeholder {\n    color: #7f9cf5\n  }\n\n  .xl\\:focus\\:placeholder-indigo-400:focus::placeholder {\n    color: #7f9cf5\n  }\n\n  .xl\\:focus\\:placeholder-indigo-500:focus:-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .xl\\:focus\\:placeholder-indigo-500:focus::-ms-input-placeholder {\n    color: #667eea\n  }\n\n  .xl\\:focus\\:placeholder-indigo-500:focus::placeholder {\n    color: #667eea\n  }\n\n  .xl\\:focus\\:placeholder-indigo-600:focus:-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .xl\\:focus\\:placeholder-indigo-600:focus::-ms-input-placeholder {\n    color: #5a67d8\n  }\n\n  .xl\\:focus\\:placeholder-indigo-600:focus::placeholder {\n    color: #5a67d8\n  }\n\n  .xl\\:focus\\:placeholder-indigo-700:focus:-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .xl\\:focus\\:placeholder-indigo-700:focus::-ms-input-placeholder {\n    color: #4c51bf\n  }\n\n  .xl\\:focus\\:placeholder-indigo-700:focus::placeholder {\n    color: #4c51bf\n  }\n\n  .xl\\:focus\\:placeholder-indigo-800:focus:-ms-input-placeholder {\n    color: #434190\n  }\n\n  .xl\\:focus\\:placeholder-indigo-800:focus::-ms-input-placeholder {\n    color: #434190\n  }\n\n  .xl\\:focus\\:placeholder-indigo-800:focus::placeholder {\n    color: #434190\n  }\n\n  .xl\\:focus\\:placeholder-indigo-900:focus:-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .xl\\:focus\\:placeholder-indigo-900:focus::-ms-input-placeholder {\n    color: #3c366b\n  }\n\n  .xl\\:focus\\:placeholder-indigo-900:focus::placeholder {\n    color: #3c366b\n  }\n\n  .xl\\:focus\\:placeholder-purple-100:focus:-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .xl\\:focus\\:placeholder-purple-100:focus::-ms-input-placeholder {\n    color: #faf5ff\n  }\n\n  .xl\\:focus\\:placeholder-purple-100:focus::placeholder {\n    color: #faf5ff\n  }\n\n  .xl\\:focus\\:placeholder-purple-200:focus:-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .xl\\:focus\\:placeholder-purple-200:focus::-ms-input-placeholder {\n    color: #e9d8fd\n  }\n\n  .xl\\:focus\\:placeholder-purple-200:focus::placeholder {\n    color: #e9d8fd\n  }\n\n  .xl\\:focus\\:placeholder-purple-300:focus:-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .xl\\:focus\\:placeholder-purple-300:focus::-ms-input-placeholder {\n    color: #d6bcfa\n  }\n\n  .xl\\:focus\\:placeholder-purple-300:focus::placeholder {\n    color: #d6bcfa\n  }\n\n  .xl\\:focus\\:placeholder-purple-400:focus:-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .xl\\:focus\\:placeholder-purple-400:focus::-ms-input-placeholder {\n    color: #b794f4\n  }\n\n  .xl\\:focus\\:placeholder-purple-400:focus::placeholder {\n    color: #b794f4\n  }\n\n  .xl\\:focus\\:placeholder-purple-500:focus:-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .xl\\:focus\\:placeholder-purple-500:focus::-ms-input-placeholder {\n    color: #9f7aea\n  }\n\n  .xl\\:focus\\:placeholder-purple-500:focus::placeholder {\n    color: #9f7aea\n  }\n\n  .xl\\:focus\\:placeholder-purple-600:focus:-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .xl\\:focus\\:placeholder-purple-600:focus::-ms-input-placeholder {\n    color: #805ad5\n  }\n\n  .xl\\:focus\\:placeholder-purple-600:focus::placeholder {\n    color: #805ad5\n  }\n\n  .xl\\:focus\\:placeholder-purple-700:focus:-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .xl\\:focus\\:placeholder-purple-700:focus::-ms-input-placeholder {\n    color: #6b46c1\n  }\n\n  .xl\\:focus\\:placeholder-purple-700:focus::placeholder {\n    color: #6b46c1\n  }\n\n  .xl\\:focus\\:placeholder-purple-800:focus:-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .xl\\:focus\\:placeholder-purple-800:focus::-ms-input-placeholder {\n    color: #553c9a\n  }\n\n  .xl\\:focus\\:placeholder-purple-800:focus::placeholder {\n    color: #553c9a\n  }\n\n  .xl\\:focus\\:placeholder-purple-900:focus:-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .xl\\:focus\\:placeholder-purple-900:focus::-ms-input-placeholder {\n    color: #44337a\n  }\n\n  .xl\\:focus\\:placeholder-purple-900:focus::placeholder {\n    color: #44337a\n  }\n\n  .xl\\:focus\\:placeholder-pink-100:focus:-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .xl\\:focus\\:placeholder-pink-100:focus::-ms-input-placeholder {\n    color: #fff5f7\n  }\n\n  .xl\\:focus\\:placeholder-pink-100:focus::placeholder {\n    color: #fff5f7\n  }\n\n  .xl\\:focus\\:placeholder-pink-200:focus:-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .xl\\:focus\\:placeholder-pink-200:focus::-ms-input-placeholder {\n    color: #fed7e2\n  }\n\n  .xl\\:focus\\:placeholder-pink-200:focus::placeholder {\n    color: #fed7e2\n  }\n\n  .xl\\:focus\\:placeholder-pink-300:focus:-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .xl\\:focus\\:placeholder-pink-300:focus::-ms-input-placeholder {\n    color: #fbb6ce\n  }\n\n  .xl\\:focus\\:placeholder-pink-300:focus::placeholder {\n    color: #fbb6ce\n  }\n\n  .xl\\:focus\\:placeholder-pink-400:focus:-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .xl\\:focus\\:placeholder-pink-400:focus::-ms-input-placeholder {\n    color: #f687b3\n  }\n\n  .xl\\:focus\\:placeholder-pink-400:focus::placeholder {\n    color: #f687b3\n  }\n\n  .xl\\:focus\\:placeholder-pink-500:focus:-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .xl\\:focus\\:placeholder-pink-500:focus::-ms-input-placeholder {\n    color: #ed64a6\n  }\n\n  .xl\\:focus\\:placeholder-pink-500:focus::placeholder {\n    color: #ed64a6\n  }\n\n  .xl\\:focus\\:placeholder-pink-600:focus:-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .xl\\:focus\\:placeholder-pink-600:focus::-ms-input-placeholder {\n    color: #d53f8c\n  }\n\n  .xl\\:focus\\:placeholder-pink-600:focus::placeholder {\n    color: #d53f8c\n  }\n\n  .xl\\:focus\\:placeholder-pink-700:focus:-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .xl\\:focus\\:placeholder-pink-700:focus::-ms-input-placeholder {\n    color: #b83280\n  }\n\n  .xl\\:focus\\:placeholder-pink-700:focus::placeholder {\n    color: #b83280\n  }\n\n  .xl\\:focus\\:placeholder-pink-800:focus:-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .xl\\:focus\\:placeholder-pink-800:focus::-ms-input-placeholder {\n    color: #97266d\n  }\n\n  .xl\\:focus\\:placeholder-pink-800:focus::placeholder {\n    color: #97266d\n  }\n\n  .xl\\:focus\\:placeholder-pink-900:focus:-ms-input-placeholder {\n    color: #702459\n  }\n\n  .xl\\:focus\\:placeholder-pink-900:focus::-ms-input-placeholder {\n    color: #702459\n  }\n\n  .xl\\:focus\\:placeholder-pink-900:focus::placeholder {\n    color: #702459\n  }\n\n  .xl\\:pointer-events-none {\n    pointer-events: none\n  }\n\n  .xl\\:pointer-events-auto {\n    pointer-events: auto\n  }\n\n  .xl\\:static {\n    position: static\n  }\n\n  .xl\\:fixed {\n    position: fixed\n  }\n\n  .xl\\:absolute {\n    position: absolute\n  }\n\n  .xl\\:relative {\n    position: relative\n  }\n\n  .xl\\:sticky {\n    position: -webkit-sticky;\n    position: sticky\n  }\n\n  .xl\\:inset-0 {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0\n  }\n\n  .xl\\:inset-auto {\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto\n  }\n\n  .xl\\:inset-y-0 {\n    top: 0;\n    bottom: 0\n  }\n\n  .xl\\:inset-x-0 {\n    right: 0;\n    left: 0\n  }\n\n  .xl\\:inset-y-auto {\n    top: auto;\n    bottom: auto\n  }\n\n  .xl\\:inset-x-auto {\n    right: auto;\n    left: auto\n  }\n\n  .xl\\:top-0 {\n    top: 0\n  }\n\n  .xl\\:right-0 {\n    right: 0\n  }\n\n  .xl\\:bottom-0 {\n    bottom: 0\n  }\n\n  .xl\\:left-0 {\n    left: 0\n  }\n\n  .xl\\:top-auto {\n    top: auto\n  }\n\n  .xl\\:right-auto {\n    right: auto\n  }\n\n  .xl\\:bottom-auto {\n    bottom: auto\n  }\n\n  .xl\\:left-auto {\n    left: auto\n  }\n\n  .xl\\:resize-none {\n    resize: none\n  }\n\n  .xl\\:resize-y {\n    resize: vertical\n  }\n\n  .xl\\:resize-x {\n    resize: horizontal\n  }\n\n  .xl\\:resize {\n    resize: both\n  }\n\n  .xl\\:shadow {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .xl\\:shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .xl\\:shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .xl\\:shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .xl\\:shadow-2xl {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .xl\\:shadow-inner {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .xl\\:shadow-outline {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .xl\\:shadow-none {\n    box-shadow: none\n  }\n\n  .xl\\:hover\\:shadow:hover {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .xl\\:hover\\:shadow-md:hover {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .xl\\:hover\\:shadow-lg:hover {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .xl\\:hover\\:shadow-xl:hover {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .xl\\:hover\\:shadow-2xl:hover {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .xl\\:hover\\:shadow-inner:hover {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .xl\\:hover\\:shadow-outline:hover {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .xl\\:hover\\:shadow-none:hover {\n    box-shadow: none\n  }\n\n  .xl\\:focus\\:shadow:focus {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .xl\\:focus\\:shadow-md:focus {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  }\n\n  .xl\\:focus\\:shadow-lg:focus {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)\n  }\n\n  .xl\\:focus\\:shadow-xl:focus {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\n  }\n\n  .xl\\:focus\\:shadow-2xl:focus {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)\n  }\n\n  .xl\\:focus\\:shadow-inner:focus {\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)\n  }\n\n  .xl\\:focus\\:shadow-outline:focus {\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)\n  }\n\n  .xl\\:focus\\:shadow-none:focus {\n    box-shadow: none\n  }\n\n  .xl\\:fill-current {\n    fill: currentColor\n  }\n\n  .xl\\:stroke-current {\n    stroke: currentColor\n  }\n\n  .xl\\:table-auto {\n    table-layout: auto\n  }\n\n  .xl\\:table-fixed {\n    table-layout: fixed\n  }\n\n  .xl\\:text-left {\n    text-align: left\n  }\n\n  .xl\\:text-center {\n    text-align: center\n  }\n\n  .xl\\:text-right {\n    text-align: right\n  }\n\n  .xl\\:text-justify {\n    text-align: justify\n  }\n\n  .xl\\:text-transparent {\n    color: transparent\n  }\n\n  .xl\\:text-black {\n    color: #000\n  }\n\n  .xl\\:text-white {\n    color: #fff\n  }\n\n  .xl\\:text-gray-100 {\n    color: #f7fafc\n  }\n\n  .xl\\:text-gray-200 {\n    color: #edf2f7\n  }\n\n  .xl\\:text-gray-300 {\n    color: #e2e8f0\n  }\n\n  .xl\\:text-gray-400 {\n    color: #cbd5e0\n  }\n\n  .xl\\:text-gray-500 {\n    color: #a0aec0\n  }\n\n  .xl\\:text-gray-600 {\n    color: #718096\n  }\n\n  .xl\\:text-gray-700 {\n    color: #4a5568\n  }\n\n  .xl\\:text-gray-800 {\n    color: #2d3748\n  }\n\n  .xl\\:text-gray-900 {\n    color: #1a202c\n  }\n\n  .xl\\:text-red-100 {\n    color: #fff5f5\n  }\n\n  .xl\\:text-red-200 {\n    color: #fed7d7\n  }\n\n  .xl\\:text-red-300 {\n    color: #feb2b2\n  }\n\n  .xl\\:text-red-400 {\n    color: #fc8181\n  }\n\n  .xl\\:text-red-500 {\n    color: #f56565\n  }\n\n  .xl\\:text-red-600 {\n    color: #e53e3e\n  }\n\n  .xl\\:text-red-700 {\n    color: #c53030\n  }\n\n  .xl\\:text-red-800 {\n    color: #9b2c2c\n  }\n\n  .xl\\:text-red-900 {\n    color: #742a2a\n  }\n\n  .xl\\:text-orange-100 {\n    color: #fffaf0\n  }\n\n  .xl\\:text-orange-200 {\n    color: #feebc8\n  }\n\n  .xl\\:text-orange-300 {\n    color: #fbd38d\n  }\n\n  .xl\\:text-orange-400 {\n    color: #f6ad55\n  }\n\n  .xl\\:text-orange-500 {\n    color: #ed8936\n  }\n\n  .xl\\:text-orange-600 {\n    color: #dd6b20\n  }\n\n  .xl\\:text-orange-700 {\n    color: #c05621\n  }\n\n  .xl\\:text-orange-800 {\n    color: #9c4221\n  }\n\n  .xl\\:text-orange-900 {\n    color: #7b341e\n  }\n\n  .xl\\:text-yellow-100 {\n    color: #fffff0\n  }\n\n  .xl\\:text-yellow-200 {\n    color: #fefcbf\n  }\n\n  .xl\\:text-yellow-300 {\n    color: #faf089\n  }\n\n  .xl\\:text-yellow-400 {\n    color: #f6e05e\n  }\n\n  .xl\\:text-yellow-500 {\n    color: #ecc94b\n  }\n\n  .xl\\:text-yellow-600 {\n    color: #d69e2e\n  }\n\n  .xl\\:text-yellow-700 {\n    color: #b7791f\n  }\n\n  .xl\\:text-yellow-800 {\n    color: #975a16\n  }\n\n  .xl\\:text-yellow-900 {\n    color: #744210\n  }\n\n  .xl\\:text-green-100 {\n    color: #f0fff4\n  }\n\n  .xl\\:text-green-200 {\n    color: #c6f6d5\n  }\n\n  .xl\\:text-green-300 {\n    color: #9ae6b4\n  }\n\n  .xl\\:text-green-400 {\n    color: #68d391\n  }\n\n  .xl\\:text-green-500 {\n    color: #48bb78\n  }\n\n  .xl\\:text-green-600 {\n    color: #38a169\n  }\n\n  .xl\\:text-green-700 {\n    color: #2f855a\n  }\n\n  .xl\\:text-green-800 {\n    color: #276749\n  }\n\n  .xl\\:text-green-900 {\n    color: #22543d\n  }\n\n  .xl\\:text-teal-100 {\n    color: #e6fffa\n  }\n\n  .xl\\:text-teal-200 {\n    color: #b2f5ea\n  }\n\n  .xl\\:text-teal-300 {\n    color: #81e6d9\n  }\n\n  .xl\\:text-teal-400 {\n    color: #4fd1c5\n  }\n\n  .xl\\:text-teal-500 {\n    color: #38b2ac\n  }\n\n  .xl\\:text-teal-600 {\n    color: #319795\n  }\n\n  .xl\\:text-teal-700 {\n    color: #2c7a7b\n  }\n\n  .xl\\:text-teal-800 {\n    color: #285e61\n  }\n\n  .xl\\:text-teal-900 {\n    color: #234e52\n  }\n\n  .xl\\:text-blue-100 {\n    color: #ebf8ff\n  }\n\n  .xl\\:text-blue-200 {\n    color: #bee3f8\n  }\n\n  .xl\\:text-blue-300 {\n    color: #90cdf4\n  }\n\n  .xl\\:text-blue-400 {\n    color: #63b3ed\n  }\n\n  .xl\\:text-blue-500 {\n    color: #4299e1\n  }\n\n  .xl\\:text-blue-600 {\n    color: #3182ce\n  }\n\n  .xl\\:text-blue-700 {\n    color: #2b6cb0\n  }\n\n  .xl\\:text-blue-800 {\n    color: #2c5282\n  }\n\n  .xl\\:text-blue-900 {\n    color: #2a4365\n  }\n\n  .xl\\:text-indigo-100 {\n    color: #ebf4ff\n  }\n\n  .xl\\:text-indigo-200 {\n    color: #c3dafe\n  }\n\n  .xl\\:text-indigo-300 {\n    color: #a3bffa\n  }\n\n  .xl\\:text-indigo-400 {\n    color: #7f9cf5\n  }\n\n  .xl\\:text-indigo-500 {\n    color: #667eea\n  }\n\n  .xl\\:text-indigo-600 {\n    color: #5a67d8\n  }\n\n  .xl\\:text-indigo-700 {\n    color: #4c51bf\n  }\n\n  .xl\\:text-indigo-800 {\n    color: #434190\n  }\n\n  .xl\\:text-indigo-900 {\n    color: #3c366b\n  }\n\n  .xl\\:text-purple-100 {\n    color: #faf5ff\n  }\n\n  .xl\\:text-purple-200 {\n    color: #e9d8fd\n  }\n\n  .xl\\:text-purple-300 {\n    color: #d6bcfa\n  }\n\n  .xl\\:text-purple-400 {\n    color: #b794f4\n  }\n\n  .xl\\:text-purple-500 {\n    color: #9f7aea\n  }\n\n  .xl\\:text-purple-600 {\n    color: #805ad5\n  }\n\n  .xl\\:text-purple-700 {\n    color: #6b46c1\n  }\n\n  .xl\\:text-purple-800 {\n    color: #553c9a\n  }\n\n  .xl\\:text-purple-900 {\n    color: #44337a\n  }\n\n  .xl\\:text-pink-100 {\n    color: #fff5f7\n  }\n\n  .xl\\:text-pink-200 {\n    color: #fed7e2\n  }\n\n  .xl\\:text-pink-300 {\n    color: #fbb6ce\n  }\n\n  .xl\\:text-pink-400 {\n    color: #f687b3\n  }\n\n  .xl\\:text-pink-500 {\n    color: #ed64a6\n  }\n\n  .xl\\:text-pink-600 {\n    color: #d53f8c\n  }\n\n  .xl\\:text-pink-700 {\n    color: #b83280\n  }\n\n  .xl\\:text-pink-800 {\n    color: #97266d\n  }\n\n  .xl\\:text-pink-900 {\n    color: #702459\n  }\n\n  .xl\\:hover\\:text-transparent:hover {\n    color: transparent\n  }\n\n  .xl\\:hover\\:text-black:hover {\n    color: #000\n  }\n\n  .xl\\:hover\\:text-white:hover {\n    color: #fff\n  }\n\n  .xl\\:hover\\:text-gray-100:hover {\n    color: #f7fafc\n  }\n\n  .xl\\:hover\\:text-gray-200:hover {\n    color: #edf2f7\n  }\n\n  .xl\\:hover\\:text-gray-300:hover {\n    color: #e2e8f0\n  }\n\n  .xl\\:hover\\:text-gray-400:hover {\n    color: #cbd5e0\n  }\n\n  .xl\\:hover\\:text-gray-500:hover {\n    color: #a0aec0\n  }\n\n  .xl\\:hover\\:text-gray-600:hover {\n    color: #718096\n  }\n\n  .xl\\:hover\\:text-gray-700:hover {\n    color: #4a5568\n  }\n\n  .xl\\:hover\\:text-gray-800:hover {\n    color: #2d3748\n  }\n\n  .xl\\:hover\\:text-gray-900:hover {\n    color: #1a202c\n  }\n\n  .xl\\:hover\\:text-red-100:hover {\n    color: #fff5f5\n  }\n\n  .xl\\:hover\\:text-red-200:hover {\n    color: #fed7d7\n  }\n\n  .xl\\:hover\\:text-red-300:hover {\n    color: #feb2b2\n  }\n\n  .xl\\:hover\\:text-red-400:hover {\n    color: #fc8181\n  }\n\n  .xl\\:hover\\:text-red-500:hover {\n    color: #f56565\n  }\n\n  .xl\\:hover\\:text-red-600:hover {\n    color: #e53e3e\n  }\n\n  .xl\\:hover\\:text-red-700:hover {\n    color: #c53030\n  }\n\n  .xl\\:hover\\:text-red-800:hover {\n    color: #9b2c2c\n  }\n\n  .xl\\:hover\\:text-red-900:hover {\n    color: #742a2a\n  }\n\n  .xl\\:hover\\:text-orange-100:hover {\n    color: #fffaf0\n  }\n\n  .xl\\:hover\\:text-orange-200:hover {\n    color: #feebc8\n  }\n\n  .xl\\:hover\\:text-orange-300:hover {\n    color: #fbd38d\n  }\n\n  .xl\\:hover\\:text-orange-400:hover {\n    color: #f6ad55\n  }\n\n  .xl\\:hover\\:text-orange-500:hover {\n    color: #ed8936\n  }\n\n  .xl\\:hover\\:text-orange-600:hover {\n    color: #dd6b20\n  }\n\n  .xl\\:hover\\:text-orange-700:hover {\n    color: #c05621\n  }\n\n  .xl\\:hover\\:text-orange-800:hover {\n    color: #9c4221\n  }\n\n  .xl\\:hover\\:text-orange-900:hover {\n    color: #7b341e\n  }\n\n  .xl\\:hover\\:text-yellow-100:hover {\n    color: #fffff0\n  }\n\n  .xl\\:hover\\:text-yellow-200:hover {\n    color: #fefcbf\n  }\n\n  .xl\\:hover\\:text-yellow-300:hover {\n    color: #faf089\n  }\n\n  .xl\\:hover\\:text-yellow-400:hover {\n    color: #f6e05e\n  }\n\n  .xl\\:hover\\:text-yellow-500:hover {\n    color: #ecc94b\n  }\n\n  .xl\\:hover\\:text-yellow-600:hover {\n    color: #d69e2e\n  }\n\n  .xl\\:hover\\:text-yellow-700:hover {\n    color: #b7791f\n  }\n\n  .xl\\:hover\\:text-yellow-800:hover {\n    color: #975a16\n  }\n\n  .xl\\:hover\\:text-yellow-900:hover {\n    color: #744210\n  }\n\n  .xl\\:hover\\:text-green-100:hover {\n    color: #f0fff4\n  }\n\n  .xl\\:hover\\:text-green-200:hover {\n    color: #c6f6d5\n  }\n\n  .xl\\:hover\\:text-green-300:hover {\n    color: #9ae6b4\n  }\n\n  .xl\\:hover\\:text-green-400:hover {\n    color: #68d391\n  }\n\n  .xl\\:hover\\:text-green-500:hover {\n    color: #48bb78\n  }\n\n  .xl\\:hover\\:text-green-600:hover {\n    color: #38a169\n  }\n\n  .xl\\:hover\\:text-green-700:hover {\n    color: #2f855a\n  }\n\n  .xl\\:hover\\:text-green-800:hover {\n    color: #276749\n  }\n\n  .xl\\:hover\\:text-green-900:hover {\n    color: #22543d\n  }\n\n  .xl\\:hover\\:text-teal-100:hover {\n    color: #e6fffa\n  }\n\n  .xl\\:hover\\:text-teal-200:hover {\n    color: #b2f5ea\n  }\n\n  .xl\\:hover\\:text-teal-300:hover {\n    color: #81e6d9\n  }\n\n  .xl\\:hover\\:text-teal-400:hover {\n    color: #4fd1c5\n  }\n\n  .xl\\:hover\\:text-teal-500:hover {\n    color: #38b2ac\n  }\n\n  .xl\\:hover\\:text-teal-600:hover {\n    color: #319795\n  }\n\n  .xl\\:hover\\:text-teal-700:hover {\n    color: #2c7a7b\n  }\n\n  .xl\\:hover\\:text-teal-800:hover {\n    color: #285e61\n  }\n\n  .xl\\:hover\\:text-teal-900:hover {\n    color: #234e52\n  }\n\n  .xl\\:hover\\:text-blue-100:hover {\n    color: #ebf8ff\n  }\n\n  .xl\\:hover\\:text-blue-200:hover {\n    color: #bee3f8\n  }\n\n  .xl\\:hover\\:text-blue-300:hover {\n    color: #90cdf4\n  }\n\n  .xl\\:hover\\:text-blue-400:hover {\n    color: #63b3ed\n  }\n\n  .xl\\:hover\\:text-blue-500:hover {\n    color: #4299e1\n  }\n\n  .xl\\:hover\\:text-blue-600:hover {\n    color: #3182ce\n  }\n\n  .xl\\:hover\\:text-blue-700:hover {\n    color: #2b6cb0\n  }\n\n  .xl\\:hover\\:text-blue-800:hover {\n    color: #2c5282\n  }\n\n  .xl\\:hover\\:text-blue-900:hover {\n    color: #2a4365\n  }\n\n  .xl\\:hover\\:text-indigo-100:hover {\n    color: #ebf4ff\n  }\n\n  .xl\\:hover\\:text-indigo-200:hover {\n    color: #c3dafe\n  }\n\n  .xl\\:hover\\:text-indigo-300:hover {\n    color: #a3bffa\n  }\n\n  .xl\\:hover\\:text-indigo-400:hover {\n    color: #7f9cf5\n  }\n\n  .xl\\:hover\\:text-indigo-500:hover {\n    color: #667eea\n  }\n\n  .xl\\:hover\\:text-indigo-600:hover {\n    color: #5a67d8\n  }\n\n  .xl\\:hover\\:text-indigo-700:hover {\n    color: #4c51bf\n  }\n\n  .xl\\:hover\\:text-indigo-800:hover {\n    color: #434190\n  }\n\n  .xl\\:hover\\:text-indigo-900:hover {\n    color: #3c366b\n  }\n\n  .xl\\:hover\\:text-purple-100:hover {\n    color: #faf5ff\n  }\n\n  .xl\\:hover\\:text-purple-200:hover {\n    color: #e9d8fd\n  }\n\n  .xl\\:hover\\:text-purple-300:hover {\n    color: #d6bcfa\n  }\n\n  .xl\\:hover\\:text-purple-400:hover {\n    color: #b794f4\n  }\n\n  .xl\\:hover\\:text-purple-500:hover {\n    color: #9f7aea\n  }\n\n  .xl\\:hover\\:text-purple-600:hover {\n    color: #805ad5\n  }\n\n  .xl\\:hover\\:text-purple-700:hover {\n    color: #6b46c1\n  }\n\n  .xl\\:hover\\:text-purple-800:hover {\n    color: #553c9a\n  }\n\n  .xl\\:hover\\:text-purple-900:hover {\n    color: #44337a\n  }\n\n  .xl\\:hover\\:text-pink-100:hover {\n    color: #fff5f7\n  }\n\n  .xl\\:hover\\:text-pink-200:hover {\n    color: #fed7e2\n  }\n\n  .xl\\:hover\\:text-pink-300:hover {\n    color: #fbb6ce\n  }\n\n  .xl\\:hover\\:text-pink-400:hover {\n    color: #f687b3\n  }\n\n  .xl\\:hover\\:text-pink-500:hover {\n    color: #ed64a6\n  }\n\n  .xl\\:hover\\:text-pink-600:hover {\n    color: #d53f8c\n  }\n\n  .xl\\:hover\\:text-pink-700:hover {\n    color: #b83280\n  }\n\n  .xl\\:hover\\:text-pink-800:hover {\n    color: #97266d\n  }\n\n  .xl\\:hover\\:text-pink-900:hover {\n    color: #702459\n  }\n\n  .xl\\:focus\\:text-transparent:focus {\n    color: transparent\n  }\n\n  .xl\\:focus\\:text-black:focus {\n    color: #000\n  }\n\n  .xl\\:focus\\:text-white:focus {\n    color: #fff\n  }\n\n  .xl\\:focus\\:text-gray-100:focus {\n    color: #f7fafc\n  }\n\n  .xl\\:focus\\:text-gray-200:focus {\n    color: #edf2f7\n  }\n\n  .xl\\:focus\\:text-gray-300:focus {\n    color: #e2e8f0\n  }\n\n  .xl\\:focus\\:text-gray-400:focus {\n    color: #cbd5e0\n  }\n\n  .xl\\:focus\\:text-gray-500:focus {\n    color: #a0aec0\n  }\n\n  .xl\\:focus\\:text-gray-600:focus {\n    color: #718096\n  }\n\n  .xl\\:focus\\:text-gray-700:focus {\n    color: #4a5568\n  }\n\n  .xl\\:focus\\:text-gray-800:focus {\n    color: #2d3748\n  }\n\n  .xl\\:focus\\:text-gray-900:focus {\n    color: #1a202c\n  }\n\n  .xl\\:focus\\:text-red-100:focus {\n    color: #fff5f5\n  }\n\n  .xl\\:focus\\:text-red-200:focus {\n    color: #fed7d7\n  }\n\n  .xl\\:focus\\:text-red-300:focus {\n    color: #feb2b2\n  }\n\n  .xl\\:focus\\:text-red-400:focus {\n    color: #fc8181\n  }\n\n  .xl\\:focus\\:text-red-500:focus {\n    color: #f56565\n  }\n\n  .xl\\:focus\\:text-red-600:focus {\n    color: #e53e3e\n  }\n\n  .xl\\:focus\\:text-red-700:focus {\n    color: #c53030\n  }\n\n  .xl\\:focus\\:text-red-800:focus {\n    color: #9b2c2c\n  }\n\n  .xl\\:focus\\:text-red-900:focus {\n    color: #742a2a\n  }\n\n  .xl\\:focus\\:text-orange-100:focus {\n    color: #fffaf0\n  }\n\n  .xl\\:focus\\:text-orange-200:focus {\n    color: #feebc8\n  }\n\n  .xl\\:focus\\:text-orange-300:focus {\n    color: #fbd38d\n  }\n\n  .xl\\:focus\\:text-orange-400:focus {\n    color: #f6ad55\n  }\n\n  .xl\\:focus\\:text-orange-500:focus {\n    color: #ed8936\n  }\n\n  .xl\\:focus\\:text-orange-600:focus {\n    color: #dd6b20\n  }\n\n  .xl\\:focus\\:text-orange-700:focus {\n    color: #c05621\n  }\n\n  .xl\\:focus\\:text-orange-800:focus {\n    color: #9c4221\n  }\n\n  .xl\\:focus\\:text-orange-900:focus {\n    color: #7b341e\n  }\n\n  .xl\\:focus\\:text-yellow-100:focus {\n    color: #fffff0\n  }\n\n  .xl\\:focus\\:text-yellow-200:focus {\n    color: #fefcbf\n  }\n\n  .xl\\:focus\\:text-yellow-300:focus {\n    color: #faf089\n  }\n\n  .xl\\:focus\\:text-yellow-400:focus {\n    color: #f6e05e\n  }\n\n  .xl\\:focus\\:text-yellow-500:focus {\n    color: #ecc94b\n  }\n\n  .xl\\:focus\\:text-yellow-600:focus {\n    color: #d69e2e\n  }\n\n  .xl\\:focus\\:text-yellow-700:focus {\n    color: #b7791f\n  }\n\n  .xl\\:focus\\:text-yellow-800:focus {\n    color: #975a16\n  }\n\n  .xl\\:focus\\:text-yellow-900:focus {\n    color: #744210\n  }\n\n  .xl\\:focus\\:text-green-100:focus {\n    color: #f0fff4\n  }\n\n  .xl\\:focus\\:text-green-200:focus {\n    color: #c6f6d5\n  }\n\n  .xl\\:focus\\:text-green-300:focus {\n    color: #9ae6b4\n  }\n\n  .xl\\:focus\\:text-green-400:focus {\n    color: #68d391\n  }\n\n  .xl\\:focus\\:text-green-500:focus {\n    color: #48bb78\n  }\n\n  .xl\\:focus\\:text-green-600:focus {\n    color: #38a169\n  }\n\n  .xl\\:focus\\:text-green-700:focus {\n    color: #2f855a\n  }\n\n  .xl\\:focus\\:text-green-800:focus {\n    color: #276749\n  }\n\n  .xl\\:focus\\:text-green-900:focus {\n    color: #22543d\n  }\n\n  .xl\\:focus\\:text-teal-100:focus {\n    color: #e6fffa\n  }\n\n  .xl\\:focus\\:text-teal-200:focus {\n    color: #b2f5ea\n  }\n\n  .xl\\:focus\\:text-teal-300:focus {\n    color: #81e6d9\n  }\n\n  .xl\\:focus\\:text-teal-400:focus {\n    color: #4fd1c5\n  }\n\n  .xl\\:focus\\:text-teal-500:focus {\n    color: #38b2ac\n  }\n\n  .xl\\:focus\\:text-teal-600:focus {\n    color: #319795\n  }\n\n  .xl\\:focus\\:text-teal-700:focus {\n    color: #2c7a7b\n  }\n\n  .xl\\:focus\\:text-teal-800:focus {\n    color: #285e61\n  }\n\n  .xl\\:focus\\:text-teal-900:focus {\n    color: #234e52\n  }\n\n  .xl\\:focus\\:text-blue-100:focus {\n    color: #ebf8ff\n  }\n\n  .xl\\:focus\\:text-blue-200:focus {\n    color: #bee3f8\n  }\n\n  .xl\\:focus\\:text-blue-300:focus {\n    color: #90cdf4\n  }\n\n  .xl\\:focus\\:text-blue-400:focus {\n    color: #63b3ed\n  }\n\n  .xl\\:focus\\:text-blue-500:focus {\n    color: #4299e1\n  }\n\n  .xl\\:focus\\:text-blue-600:focus {\n    color: #3182ce\n  }\n\n  .xl\\:focus\\:text-blue-700:focus {\n    color: #2b6cb0\n  }\n\n  .xl\\:focus\\:text-blue-800:focus {\n    color: #2c5282\n  }\n\n  .xl\\:focus\\:text-blue-900:focus {\n    color: #2a4365\n  }\n\n  .xl\\:focus\\:text-indigo-100:focus {\n    color: #ebf4ff\n  }\n\n  .xl\\:focus\\:text-indigo-200:focus {\n    color: #c3dafe\n  }\n\n  .xl\\:focus\\:text-indigo-300:focus {\n    color: #a3bffa\n  }\n\n  .xl\\:focus\\:text-indigo-400:focus {\n    color: #7f9cf5\n  }\n\n  .xl\\:focus\\:text-indigo-500:focus {\n    color: #667eea\n  }\n\n  .xl\\:focus\\:text-indigo-600:focus {\n    color: #5a67d8\n  }\n\n  .xl\\:focus\\:text-indigo-700:focus {\n    color: #4c51bf\n  }\n\n  .xl\\:focus\\:text-indigo-800:focus {\n    color: #434190\n  }\n\n  .xl\\:focus\\:text-indigo-900:focus {\n    color: #3c366b\n  }\n\n  .xl\\:focus\\:text-purple-100:focus {\n    color: #faf5ff\n  }\n\n  .xl\\:focus\\:text-purple-200:focus {\n    color: #e9d8fd\n  }\n\n  .xl\\:focus\\:text-purple-300:focus {\n    color: #d6bcfa\n  }\n\n  .xl\\:focus\\:text-purple-400:focus {\n    color: #b794f4\n  }\n\n  .xl\\:focus\\:text-purple-500:focus {\n    color: #9f7aea\n  }\n\n  .xl\\:focus\\:text-purple-600:focus {\n    color: #805ad5\n  }\n\n  .xl\\:focus\\:text-purple-700:focus {\n    color: #6b46c1\n  }\n\n  .xl\\:focus\\:text-purple-800:focus {\n    color: #553c9a\n  }\n\n  .xl\\:focus\\:text-purple-900:focus {\n    color: #44337a\n  }\n\n  .xl\\:focus\\:text-pink-100:focus {\n    color: #fff5f7\n  }\n\n  .xl\\:focus\\:text-pink-200:focus {\n    color: #fed7e2\n  }\n\n  .xl\\:focus\\:text-pink-300:focus {\n    color: #fbb6ce\n  }\n\n  .xl\\:focus\\:text-pink-400:focus {\n    color: #f687b3\n  }\n\n  .xl\\:focus\\:text-pink-500:focus {\n    color: #ed64a6\n  }\n\n  .xl\\:focus\\:text-pink-600:focus {\n    color: #d53f8c\n  }\n\n  .xl\\:focus\\:text-pink-700:focus {\n    color: #b83280\n  }\n\n  .xl\\:focus\\:text-pink-800:focus {\n    color: #97266d\n  }\n\n  .xl\\:focus\\:text-pink-900:focus {\n    color: #702459\n  }\n\n  .xl\\:text-xs {\n    font-size: 0.75rem\n  }\n\n  .xl\\:text-sm {\n    font-size: 0.875rem\n  }\n\n  .xl\\:text-base {\n    font-size: 1rem\n  }\n\n  .xl\\:text-lg {\n    font-size: 1.125rem\n  }\n\n  .xl\\:text-xl {\n    font-size: 1.25rem\n  }\n\n  .xl\\:text-2xl {\n    font-size: 1.5rem\n  }\n\n  .xl\\:text-3xl {\n    font-size: 1.875rem\n  }\n\n  .xl\\:text-4xl {\n    font-size: 2.25rem\n  }\n\n  .xl\\:text-5xl {\n    font-size: 3rem\n  }\n\n  .xl\\:text-6xl {\n    font-size: 4rem\n  }\n\n  .xl\\:italic {\n    font-style: italic\n  }\n\n  .xl\\:not-italic {\n    font-style: normal\n  }\n\n  .xl\\:uppercase {\n    text-transform: uppercase\n  }\n\n  .xl\\:lowercase {\n    text-transform: lowercase\n  }\n\n  .xl\\:capitalize {\n    text-transform: capitalize\n  }\n\n  .xl\\:normal-case {\n    text-transform: none\n  }\n\n  .xl\\:underline {\n    text-decoration: underline\n  }\n\n  .xl\\:line-through {\n    text-decoration: line-through\n  }\n\n  .xl\\:no-underline {\n    text-decoration: none\n  }\n\n  .xl\\:hover\\:underline:hover {\n    text-decoration: underline\n  }\n\n  .xl\\:hover\\:line-through:hover {\n    text-decoration: line-through\n  }\n\n  .xl\\:hover\\:no-underline:hover {\n    text-decoration: none\n  }\n\n  .xl\\:focus\\:underline:focus {\n    text-decoration: underline\n  }\n\n  .xl\\:focus\\:line-through:focus {\n    text-decoration: line-through\n  }\n\n  .xl\\:focus\\:no-underline:focus {\n    text-decoration: none\n  }\n\n  .xl\\:antialiased {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale\n  }\n\n  .xl\\:subpixel-antialiased {\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto\n  }\n\n  .xl\\:tracking-tighter {\n    letter-spacing: -0.05em\n  }\n\n  .xl\\:tracking-tight {\n    letter-spacing: -0.025em\n  }\n\n  .xl\\:tracking-normal {\n    letter-spacing: 0\n  }\n\n  .xl\\:tracking-wide {\n    letter-spacing: 0.025em\n  }\n\n  .xl\\:tracking-wider {\n    letter-spacing: 0.05em\n  }\n\n  .xl\\:tracking-widest {\n    letter-spacing: 0.1em\n  }\n\n  .xl\\:select-none {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none\n  }\n\n  .xl\\:select-text {\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text\n  }\n\n  .xl\\:select-all {\n    -webkit-user-select: all;\n       -moz-user-select: all;\n        -ms-user-select: all;\n            user-select: all\n  }\n\n  .xl\\:select-auto {\n    -webkit-user-select: auto;\n       -moz-user-select: auto;\n        -ms-user-select: auto;\n            user-select: auto\n  }\n\n  .xl\\:align-baseline {\n    vertical-align: baseline\n  }\n\n  .xl\\:align-top {\n    vertical-align: top\n  }\n\n  .xl\\:align-middle {\n    vertical-align: middle\n  }\n\n  .xl\\:align-bottom {\n    vertical-align: bottom\n  }\n\n  .xl\\:align-text-top {\n    vertical-align: text-top\n  }\n\n  .xl\\:align-text-bottom {\n    vertical-align: text-bottom\n  }\n\n  .xl\\:visible {\n    visibility: visible\n  }\n\n  .xl\\:invisible {\n    visibility: hidden\n  }\n\n  .xl\\:whitespace-normal {\n    white-space: normal\n  }\n\n  .xl\\:whitespace-no-wrap {\n    white-space: nowrap\n  }\n\n  .xl\\:whitespace-pre {\n    white-space: pre\n  }\n\n  .xl\\:whitespace-pre-line {\n    white-space: pre-line\n  }\n\n  .xl\\:whitespace-pre-wrap {\n    white-space: pre-wrap\n  }\n\n  .xl\\:break-normal {\n    overflow-wrap: normal;\n    word-break: normal\n  }\n\n  .xl\\:break-words {\n    overflow-wrap: break-word\n  }\n\n  .xl\\:break-all {\n    word-break: break-all\n  }\n\n  .xl\\:truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap\n  }\n\n  .xl\\:w-0 {\n    width: 0\n  }\n\n  .xl\\:w-1 {\n    width: 0.25rem\n  }\n\n  .xl\\:w-2 {\n    width: 0.5rem\n  }\n\n  .xl\\:w-3 {\n    width: 0.75rem\n  }\n\n  .xl\\:w-4 {\n    width: 1rem\n  }\n\n  .xl\\:w-5 {\n    width: 1.25rem\n  }\n\n  .xl\\:w-6 {\n    width: 1.5rem\n  }\n\n  .xl\\:w-8 {\n    width: 2rem\n  }\n\n  .xl\\:w-10 {\n    width: 2.5rem\n  }\n\n  .xl\\:w-12 {\n    width: 3rem\n  }\n\n  .xl\\:w-16 {\n    width: 4rem\n  }\n\n  .xl\\:w-20 {\n    width: 5rem\n  }\n\n  .xl\\:w-24 {\n    width: 6rem\n  }\n\n  .xl\\:w-32 {\n    width: 8rem\n  }\n\n  .xl\\:w-40 {\n    width: 10rem\n  }\n\n  .xl\\:w-48 {\n    width: 12rem\n  }\n\n  .xl\\:w-56 {\n    width: 14rem\n  }\n\n  .xl\\:w-64 {\n    width: 16rem\n  }\n\n  .xl\\:w-auto {\n    width: auto\n  }\n\n  .xl\\:w-px {\n    width: 1px\n  }\n\n  .xl\\:w-1\\/2 {\n    width: 50%\n  }\n\n  .xl\\:w-1\\/3 {\n    width: 33.333333%\n  }\n\n  .xl\\:w-2\\/3 {\n    width: 66.666667%\n  }\n\n  .xl\\:w-1\\/4 {\n    width: 25%\n  }\n\n  .xl\\:w-2\\/4 {\n    width: 50%\n  }\n\n  .xl\\:w-3\\/4 {\n    width: 75%\n  }\n\n  .xl\\:w-1\\/5 {\n    width: 20%\n  }\n\n  .xl\\:w-2\\/5 {\n    width: 40%\n  }\n\n  .xl\\:w-3\\/5 {\n    width: 60%\n  }\n\n  .xl\\:w-4\\/5 {\n    width: 80%\n  }\n\n  .xl\\:w-1\\/6 {\n    width: 16.666667%\n  }\n\n  .xl\\:w-2\\/6 {\n    width: 33.333333%\n  }\n\n  .xl\\:w-3\\/6 {\n    width: 50%\n  }\n\n  .xl\\:w-4\\/6 {\n    width: 66.666667%\n  }\n\n  .xl\\:w-5\\/6 {\n    width: 83.333333%\n  }\n\n  .xl\\:w-1\\/12 {\n    width: 8.333333%\n  }\n\n  .xl\\:w-2\\/12 {\n    width: 16.666667%\n  }\n\n  .xl\\:w-3\\/12 {\n    width: 25%\n  }\n\n  .xl\\:w-4\\/12 {\n    width: 33.333333%\n  }\n\n  .xl\\:w-5\\/12 {\n    width: 41.666667%\n  }\n\n  .xl\\:w-6\\/12 {\n    width: 50%\n  }\n\n  .xl\\:w-7\\/12 {\n    width: 58.333333%\n  }\n\n  .xl\\:w-8\\/12 {\n    width: 66.666667%\n  }\n\n  .xl\\:w-9\\/12 {\n    width: 75%\n  }\n\n  .xl\\:w-10\\/12 {\n    width: 83.333333%\n  }\n\n  .xl\\:w-11\\/12 {\n    width: 91.666667%\n  }\n\n  .xl\\:w-full {\n    width: 100%\n  }\n\n  .xl\\:w-screen {\n    width: 100vw\n  }\n\n  .xl\\:z-0 {\n    z-index: 0\n  }\n\n  .xl\\:z-10 {\n    z-index: 10\n  }\n\n  .xl\\:z-20 {\n    z-index: 20\n  }\n\n  .xl\\:z-30 {\n    z-index: 30\n  }\n\n  .xl\\:z-40 {\n    z-index: 40\n  }\n\n  .xl\\:z-50 {\n    z-index: 50\n  }\n\n  .xl\\:z-auto {\n    z-index: auto\n  }\n}", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(19)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['meta'],

    inject: ['report'],

    data: function data() {
        return {
            page: 1,
            has_next: false,
            is_loading: false,
            query: '[laravel][' + this.report.language.toLowerCase() + '] ' + this.report.message,
            questions: []
        };
    },
    mounted: function mounted() {
        this.search();
    },

    computed: {
        url: function url() {
            return 'https://stackoverflow.com/search?q=' + encodeURIComponent(this.query);
        }
    },
    methods: {
        prevPage: function prevPage() {
            if (this.page > 1) {
                this.page--;
                this.search();
            }
        },
        nextPage: function nextPage() {
            if (this.has_next) {
                this.page++;
                this.search();
            }
        },
        newSearch: function newSearch() {
            this.page = 1;
            this.search();
        },
        search: function search() {
            var _this = this;

            if (!this.query) {
                this.questions = [];
                return;
            }

            this.is_loading = true;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://api.stackexchange.com/2.2/search/advanced?&pagesize=10&order=desc&sort=relevance&site=stackoverflow&accepted=True&page=' + this.page + '&q=' + encodeURIComponent(this.query)).then(function (response) {
                _this.questions = response.data.items;
                _this.is_loading = false;
                _this.has_next = response.data.has_more;
            });
        }
    }
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(2);
var Axios = __webpack_require__(25);
var mergeConfig = __webpack_require__(8);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(9);
axios.CancelToken = __webpack_require__(38);
axios.isCancel = __webpack_require__(4);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(39);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var buildURL = __webpack_require__(3);
var InterceptorManager = __webpack_require__(26);
var dispatchRequest = __webpack_require__(27);
var mergeConfig = __webpack_require__(8);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(28);
var isCancel = __webpack_require__(4);
var defaults = __webpack_require__(5);
var isAbsoluteURL = __webpack_require__(36);
var combineURLs = __webpack_require__(37);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(7);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(9);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tab-content" }, [
    _c("div", { staticClass: "layout-col py-2" }, [
      _c("div", { staticClass: "my-2" }, [
        _c("div", { staticClass: "flex mb-1" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.trim",
                value: _vm.query,
                expression: "query",
                modifiers: { trim: true }
              }
            ],
            staticClass:
              "mr-3 p-2 block flex-grow rounded border-b-2 border-gray-400 bg-gray-100 focus:border-orange-500 hover:border-orange-400",
            attrs: { type: "search" },
            domProps: { value: _vm.query },
            on: {
              change: _vm.newSearch,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.query = $event.target.value.trim()
              },
              blur: function($event) {
                return _vm.$forceUpdate()
              }
            }
          }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "inline-block p-2 rounded border-b-2 border-orange-400 hover:border-orange-800 bg-orange-100 hover:text-white hover:bg-orange-500",
              attrs: { href: _vm.url, target: "_blank" }
            },
            [
              _c("i", { staticClass: "fab fa-stack-overflow mr-1" }),
              _vm._v("\n                    StackOverflow\n                ")
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "text-orange-400 hover:text-orange-500",
            attrs: {
              href: "https://stackoverflow.com/help/searching",
              target: "_blank"
            }
          },
          [_vm._v("\n                advanced search tips\n            ")]
        )
      ]),
      _vm._v(" "),
      _c(
        "section",
        [
          _vm.is_loading
            ? _c("div", { staticClass: "text-center py-2" }, [
                _c("i", {
                  staticClass: "fas fa-spinner fa-spin fa-3x text-orange-400"
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.is_loading && !_vm.questions.length
            ? _c("div", { staticClass: "text-gray-500 py-2" }, [
                _vm._v(
                  '\n                No questions found for your query "' +
                    _vm._s(this.query) +
                    '".\n            '
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.questions, function(question) {
            return !_vm.is_loading && _vm.questions.length
              ? _c(
                  "article",
                  {
                    staticClass:
                      "mb-2 p-2 border-l-4 border-gray-400 hover:border-orange-500 rounded bg-gray-100"
                  },
                  [
                    _c("div", { staticClass: "flex" }, [
                      _c("div", { staticClass: "flex-grow" }, [
                        _c("a", {
                          staticClass:
                            "block font-medium hover:text-orange-500",
                          attrs: { href: question.link, target: "_blank" },
                          domProps: { innerHTML: _vm._s(question.title) }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-gray-400" }, [
                          _vm._v(
                            "\n                            last activity at\n                            "
                          ),
                          _c(
                            "time",
                            {
                              staticClass: "text-gray-500",
                              attrs: {
                                datetime: _vm._f("moment")(
                                  question.last_activity_date,
                                  "YYYY-MM-DD HH:mm:ss"
                                )
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm._f("moment")(
                                      question.last_activity_date,
                                      "YYYY-MM-DD"
                                    )
                                  ) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(
                            "\n                            and created by\n                            "
                          ),
                          _c(
                            "a",
                            {
                              staticClass:
                                "text-gray-500 hover:text-orange-500",
                              attrs: {
                                href: question.owner.link,
                                target: "_blank"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(question.owner.display_name) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(
                            "\n                            at\n                            "
                          ),
                          _c(
                            "time",
                            {
                              staticClass: "text-gray-500",
                              attrs: {
                                datetime: _vm._f("moment")(
                                  question.creation_date,
                                  "YYYY-MM-DD HH:mm:ss"
                                )
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm._f("moment")(
                                      question.creation_date,
                                      "YYYY-MM-DD"
                                    )
                                  ) +
                                  "\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "font-mono text-xs mt-1" },
                          _vm._l(question.tags, function(tag) {
                            return _c(
                              "span",
                              {
                                staticClass:
                                  "mr-1 px-1 py-px bg-gray-200 text-gray-500 rounded"
                              },
                              [_vm._v(_vm._s(tag))]
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "px-2 pt-2 text-center" }, [
                        _c(
                          "span",
                          { staticClass: "block text-lg text-gray-500" },
                          [_vm._v(_vm._s(question.score))]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-gray-400" }, [
                          _vm._v("score")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "px-2 pt-2 text-center" }, [
                        _c(
                          "span",
                          { staticClass: "block text-lg text-gray-500" },
                          [_vm._v(_vm._s(question.answer_count))]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-gray-400" }, [
                          _vm._v("answers")
                        ])
                      ])
                    ])
                  ]
                )
              : _vm._e()
          })
        ],
        2
      ),
      _vm._v(" "),
      !_vm.is_loading && _vm.questions.length
        ? _c("footer", { staticClass: "flex" }, [
            _vm.page > 1
              ? _c(
                  "span",
                  {
                    staticClass:
                      "cursor-pointer px-2 py-1 rounded inline-block border border-gray-400 hover:border-orange-500 hover:text-orange-500",
                    on: { click: _vm.prevPage }
                  },
                  [
                    _c("i", { staticClass: "fas fa-angle-double-left" }),
                    _vm._v("\n                prev\n            ")
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticClass: "py-1 text-center flex-grow" }, [
              _vm._v(
                "\n                page: " + _vm._s(_vm.page) + "\n            "
              )
            ]),
            _vm._v(" "),
            _vm.has_next
              ? _c(
                  "span",
                  {
                    staticClass:
                      "cursor-pointer px-2 py-1 rounded inline-block border border-gray-400 hover:border-orange-500 hover:text-orange-500",
                    on: { click: _vm.nextPage }
                  },
                  [
                    _vm._v("\n                next\n                "),
                    _c("i", { staticClass: "fas fa-angle-double-right" })
                  ]
                )
              : _vm._e()
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8dbef60c", module.exports)
  }
}

/***/ })
/******/ ]);