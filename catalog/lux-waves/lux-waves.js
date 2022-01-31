(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("bi-internal/utils"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "bi-internal/utils", "classnames"], factory);
	else if(typeof exports === 'object')
		exports["@luxms/bi-resources"] = factory(require("react"), require("bi-internal/utils"), require("classnames"));
	else
		root["@luxms/bi-resources"] = factory(root["react"], root["bi-internal/utils"], root["classnames"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__9297__, __WEBPACK_EXTERNAL_MODULE__4048__, __WEBPACK_EXTERNAL_MODULE__4058__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8926:
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ 5354:
/***/ ((module) => {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ 7757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(205);


/***/ }),

/***/ 8148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".LuxWaves{width:min-content;height:max-content;color:#bfbfbf;top:10%;left:7%;position:absolute}.LuxWaves__Value{display:block;font-size:2.3rem;line-height:3rem;margin:0;white-space:nowrap}.LuxWaves__Value span{cursor:pointer;font-size:4rem;line-height:4.5rem;background:linear-gradient(94.22deg, #4472C4 2.93%, #A0C1DE 101.23%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.LuxWaves__Text{font-size:2.25rem;line-height:3rem;margin:0}.LuxWaves__Description{cursor:pointer;transition-duration:2s;font-size:1.125rem;line-height:1.2rem;opacity:.56;margin:0}.LuxWaves__svg{background:#273445}.LuxWaves__Ruler{z-index:100}.LuxWaves__Ruler__g{cursor:pointer}.LuxWaves__Ruler__path{user-select:none}.LuxWaves__Waves{transition:transform 10s ease-in-out;transform:translate(0, 0);will-change:translate;shape-rendering:geometricprecision;backface-visibility:hidden}.LuxWaves__Wave.wave1{transition:transform 12s ease-in-out;transform:translate(0, 0) scale(0.1);will-change:translate;shape-rendering:geometricprecision;backface-visibility:hidden}.LuxWaves__Wave.wave2{transition:transform 15s ease-in-out;transform:translate(0, 0);will-change:translate;shape-rendering:geometricprecision;backface-visibility:hidden}.LuxWaves__Wave.wave3{transform:translate(0, 0) !important}.LuxWaves__Duck{transition:transform 10s ease-in-out;transform:translate(0, 0) scale(0.1)}.lux-duck{animation:10s ease-in-out 0s infinite alternate duck}.lux-duck.kill{animation:20s ease-in-out 0s both kill}.LuxWaves__Bubble,.LuxWaves__BubbleSlowdown{animation:7s ease-in-out 10s both bubbleUp}.LuxWaves__Bubble circle,.LuxWaves__BubbleSlowdown circle{fill:rgba(68,114,196,.4)}.LuxWaves__Bubble .LuxWaves__Bubble_1,.LuxWaves__BubbleSlowdown .LuxWaves__Bubble_1{animation:0s ease-in-out 17s both cnone}.LuxWaves__Bubble .LuxWaves__Bubble_2,.LuxWaves__BubbleSlowdown .LuxWaves__Bubble_2{animation:0s ease-in-out 18s both cnone}.LuxWaves__BubbleSlowdown{animation:7s ease-in-out 10.5s both bubbleUp}.LuxWaves__BubbleSlowdown .LuxWaves__Bubble_3{animation:0s ease-in-out 20s both cnone}@keyframes kill{0%{transform:translate(0, 0) rotate(5deg) scale(0.15)}90%{transform:translate(0, 900px) rotate(180deg) scale(0.15)}100%{transform:translate(0, 2000px) rotate(270deg) scale(0.15)}}@keyframes duck{0%{transform:translate(0, -1px) rotate(10deg) scale(0.15)}50%{transform:translate(0, 1px) rotate(-10deg) scale(0.15)}100%{transform:translate(0, -1px) rotate(10deg) scale(0.15)}}@keyframes bubbleUp{0%{transform:translate(0, 1000px) scale(1)}99%{transform:translate(0, 0) scale(1)}100%{transform:translate(2px, 1px) scale(1);display:none;fill:transparent;width:0;height:0}}@keyframes cnone{0%{transform:translate(0, 0) scale(1)}100%{fill:transparent}}", "",{"version":3,"sources":["webpack://./src/ds_res/innerShop/shopVIZEL/wave/lux-waves.scss"],"names":[],"mappings":"AAAA,UACE,iBAAA,CACA,kBAAA,CACA,aAAA,CACA,OAAA,CACA,OAAA,CACA,iBAAA,CAKF,iBACE,aAAA,CACA,gBAAA,CACA,gBAAA,CACA,QAAA,CACA,kBAAA,CACA,sBACE,cAAA,CACA,cAAA,CACA,kBAAA,CACA,oEAAA,CACA,4BAAA,CACA,mCAAA,CAGJ,gBACE,iBAAA,CACA,gBAAA,CACA,QAAA,CAIF,uBACE,cAAA,CACA,sBAAA,CACA,kBAAA,CACA,kBAAA,CACA,WAAA,CACA,QAAA,CAEF,eACE,kBAAA,CAEF,iBACE,WAAA,CAEF,oBACE,cAAA,CAEF,uBACE,gBAAA,CAEF,iBACE,oCAAA,CACA,yBAAA,CACA,qBAAA,CACA,kCAAA,CACA,0BAAA,CAEF,sBACE,oCAAA,CACA,oCAAA,CACA,qBAAA,CACA,kCAAA,CACA,0BAAA,CAEF,sBACE,oCAAA,CACA,yBAAA,CACA,qBAAA,CACA,kCAAA,CACA,0BAAA,CAEF,sBACE,oCAAA,CAGF,gBACE,oCAAA,CACA,oCAAA,CAEF,UACI,oDAAA,CAGJ,eACE,sCAAA,CAGF,4CACE,0CAAA,CACA,0DACE,wBAAA,CAEF,oFACE,uCAAA,CAEF,oFACE,uCAAA,CAIJ,0BACE,4CAAA,CACA,8CACE,uCAAA,CAIJ,gBACE,GACE,kDAAA,CAEF,IACE,wDAAA,CAEF,KACE,yDAAA,CAAA,CAGJ,gBACE,GACE,sDAAA,CAEF,IACE,sDAAA,CAEF,KACE,sDAAA,CAAA,CAIJ,oBACE,GACE,uCAAA,CAEF,IACE,kCAAA,CAGF,KACE,sCAAA,CACA,YAAA,CACA,gBAAA,CACA,OAAA,CACA,QAAA,CAAA,CAKJ,iBACE,GACE,kCAAA,CAEF,KACE,gBAAA,CAAA","sourcesContent":[".LuxWaves {\r\n  width: min-content;\r\n  height: max-content;\r\n  color: #BFBFBF;\r\n  top: 10%;\r\n  left: 7%;\r\n  position: absolute;\r\n  //user-select: none;\r\n  //pointer-events: none;\r\n}\r\n\r\n.LuxWaves__Value {\r\n  display: block;\r\n  font-size: 2.3rem;\r\n  line-height: 3rem;\r\n  margin: 0;\r\n  white-space: nowrap;\r\n  span {\r\n    cursor: pointer;\r\n    font-size: 4rem;\r\n    line-height: 4.5rem;\r\n    background: linear-gradient(94.22deg, #4472C4 2.93%, #A0C1DE 101.23%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n  }\r\n}\r\n.LuxWaves__Text {\r\n  font-size: 2.25rem;\r\n  line-height: 3rem;\r\n  margin: 0;\r\n  //user-select: none;\r\n}\r\n\r\n.LuxWaves__Description {\r\n  cursor: pointer;\r\n  transition-duration: 2s;\r\n  font-size: 1.125rem;\r\n  line-height: 1.2rem;\r\n  opacity: 0.56;\r\n  margin: 0;\r\n}\r\n.LuxWaves__svg {\r\n  background: #273445;\r\n}\r\n.LuxWaves__Ruler {\r\n  z-index: 100;\r\n}\r\n.LuxWaves__Ruler__g {\r\n  cursor: pointer;\r\n}\r\n.LuxWaves__Ruler__path {\r\n  user-select: none;\r\n}\r\n.LuxWaves__Waves {\r\n  transition: transform 10s ease-in-out;\r\n  transform: translate(0, 0);\r\n  will-change: translate;\r\n  shape-rendering: geometricprecision;\r\n  backface-visibility: hidden;\r\n}\r\n.LuxWaves__Wave.wave1 {\r\n  transition: transform 12s ease-in-out;\r\n  transform: translate(0, 0) scale(0.1);\r\n  will-change: translate;\r\n  shape-rendering: geometricprecision;\r\n  backface-visibility: hidden;\r\n}\r\n.LuxWaves__Wave.wave2 {\r\n  transition: transform 15s ease-in-out;\r\n  transform: translate(0, 0);\r\n  will-change: translate;\r\n  shape-rendering: geometricprecision;\r\n  backface-visibility: hidden;\r\n}\r\n.LuxWaves__Wave.wave3 {\r\n  transform: translate(0, 0) !important;\r\n}\r\n\r\n.LuxWaves__Duck {\r\n  transition: transform 10s ease-in-out;\r\n  transform: translate(0, 0) scale(0.1);\r\n}\r\n.lux-duck {\r\n    animation: 10s ease-in-out 0s infinite alternate duck;\r\n}\r\n\r\n.lux-duck.kill {\r\n  animation: 20s ease-in-out 0s both kill;\r\n}\r\n\r\n.LuxWaves__Bubble, .LuxWaves__BubbleSlowdown {\r\n  animation: 7s ease-in-out 10s both bubbleUp;\r\n  circle {\r\n    fill: rgba(68, 114, 196, 0.4);\r\n  }\r\n  .LuxWaves__Bubble_1 {\r\n    animation: 0s ease-in-out 17s both cnone;\r\n  }\r\n  .LuxWaves__Bubble_2 {\r\n    animation: 0s ease-in-out 18s both cnone;\r\n  }\r\n}\r\n\r\n.LuxWaves__BubbleSlowdown {\r\n  animation: 7s ease-in-out 10.5s both bubbleUp;\r\n  .LuxWaves__Bubble_3 {\r\n    animation: 0s ease-in-out 20s both cnone;\r\n  }\r\n}\r\n\r\n@keyframes kill {\r\n  0% {\r\n    transform: translate(0, 0) rotate(5deg) scale(0.15);\r\n  }\r\n  90% {\r\n    transform: translate(0, 900px) rotate(180deg) scale(0.15);\r\n  }\r\n  100% {\r\n    transform: translate(0, 2000px) rotate(270deg) scale(0.15);\r\n  }\r\n}\r\n@keyframes duck {\r\n  0% {\r\n    transform: translate(0, -1px) rotate(10deg) scale(0.15);\r\n  }\r\n  50% {\r\n    transform: translate(0, 1px) rotate(-10deg) scale(0.15);\r\n  }\r\n  100% {\r\n    transform: translate(0, -1px) rotate(10deg) scale(0.15);\r\n  }\r\n\r\n}\r\n@keyframes bubbleUp {\r\n  0% {\r\n    transform: translate(0, 1000px) scale(1);\r\n  }\r\n  99% {\r\n    transform: translate(0, 0) scale(1);\r\n  }\r\n\r\n  100% {\r\n    transform: translate(2px, 1px) scale(1);\r\n    display: none;\r\n    fill: transparent;\r\n    width: 0;\r\n    height: 0;\r\n\r\n  }\r\n}\r\n\r\n@keyframes cnone {\r\n  0% {\r\n    transform: translate(0, 0) scale(1);\r\n  }\r\n  100% {\r\n    fill: transparent;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 7537:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 205:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof __webpack_require__.g === "object" ? __webpack_require__.g :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(5666);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 5666:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = "object" === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof __webpack_require__.g === "object" ? __webpack_require__.g :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);


/***/ }),

/***/ 3379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 9216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 3565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 7795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 4589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 4048:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__4048__;

/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__4058__;

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__9297__;

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ shopVIZEL_wave_lux_waves)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(8926);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(5354);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "bi-internal/utils"
var utils_ = __webpack_require__(4048);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ds_res/innerShop/shopVIZEL/wave/lux-waves.scss
var lux_waves = __webpack_require__(8148);
;// CONCATENATED MODULE: ./src/ds_res/innerShop/shopVIZEL/wave/lux-waves.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(lux_waves/* default */.Z, options);




       /* harmony default export */ const wave_lux_waves = (lux_waves/* default */.Z && lux_waves/* default.locals */.Z.locals ? lux_waves/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/ds_res/innerShop/shopVIZEL/wave/lux-waves.tsx








var min = function min(v1, v2) {
  return !Number.isFinite(v1) ? !Number.isFinite(v2) ? null : v2 : !Number.isFinite(v2) ? v1 : Math.min(v1, v2);
};

var max = function max(v1, v2) {
  return !Number.isFinite(v1) ? !Number.isFinite(v2) ? null : v2 : !Number.isFinite(v2) ? v1 : Math.max(v1, v2);
};

var mergeRanges = function mergeRanges(_ref, _ref2) {
  var xmin = _ref[0],
      xmax = _ref[1];
  var ymin = _ref2[0],
      ymax = _ref2[1];
  return [min(xmin, ymin), max(xmax, ymax)];
};

var Ruler = /*#__PURE__*/external_react_.memo(function (_ref3) {
  var width = _ref3.width,
      height = _ref3.height,
      ticks = _ref3.ticks;
  var ruler = height / ticks.length;
  var WIDTHLINE = 17;
  var arrValueRule = [];

  for (var i = 0; i < ticks.length; i++) {
    var d = void 0;

    if (i % 2 === 0) {
      d = "M " + width + " " + (height - i * ruler - ruler) + " L " + (width - WIDTHLINE - 12) + " " + (height - i * ruler - ruler);
    } else {
      d = "M " + width + " " + (height - i * ruler - ruler) + " L " + (width - WIDTHLINE) + " " + (height - i * ruler - ruler);
    }

    arrValueRule.push( /*#__PURE__*/external_react_.createElement("g", {
      key: ticks[i] / 2 + "d"
    }, /*#__PURE__*/external_react_.createElement("path", {
      key: ticks[i] / 3 + "r",
      className: "LuxWaves__Ruler__g",
      d: d,
      stroke: 'transparent',
      strokeWidth: '15',
      fill: 'transparent'
    }, /*#__PURE__*/external_react_.createElement("title", {
      key: ticks[i] / 7 + "t"
    }, ticks[i])), /*#__PURE__*/external_react_.createElement("path", {
      key: ticks[i] / 5 + "l",
      className: "LuxWaves__Ruler__path",
      d: d,
      stroke: 'rgba(244, 244, 244, 0.4)',
      strokeWidth: '1',
      fill: 'transparent'
    })));
  }

  return /*#__PURE__*/external_react_.createElement(external_react_.Fragment, null, arrValueRule);
});
var WavePath = /*#__PURE__*/external_react_.memo(function (_ref4) {
  var coordinates = _ref4.coordinates,
      dx = _ref4.dx,
      fill = _ref4.fill,
      width = _ref4.width,
      height = _ref4.height;

  if (coordinates) {
    var wavesArr = ['M 0 0'];

    for (var i = 1; i < coordinates.length; i++) {
      var _coordinates, _coordinates2;

      var x = coordinates[i].x;
      var nextX = (_coordinates = coordinates[i + 1]) == null ? void 0 : _coordinates.x;
      var y = coordinates[i].y;
      var nextY = (_coordinates2 = coordinates[i + 1]) == null ? void 0 : _coordinates2.y;

      if (nextX && nextY) {
        wavesArr.push("Q " + x + " " + 10 * y + ", " + (x + y * (nextX - x) / (y - nextY)) + " 0");
      }
    }

    wavesArr.push("L " + width * 5 * dx * 3 + " 0 L " + width * 5 * dx * 3 + " " + height + " L 0 " + height + " L 0 0");
    return /*#__PURE__*/external_react_.createElement("path", {
      d: wavesArr.join(' '),
      stroke: 'transparent',
      fill: fill,
      fillRule: "nonzero"
    });
  }

  return null;
});
var Wave = /*#__PURE__*/external_react_.memo(function (_ref5) {
  var className = _ref5.className,
      coordinates = _ref5.coordinates,
      dx = _ref5.dx,
      fill = _ref5.fill,
      width = _ref5.width,
      height = _ref5.height,
      percent = _ref5.percent,
      duck = _ref5.duck;
  return /*#__PURE__*/external_react_.createElement("g", {
    className: className,
    style: {
      transform: "translate(" + (-width * 4 + 4 * width * percent / 100) + "px, " + 0 + "px)"
    }
  }, /*#__PURE__*/external_react_.createElement(WavePath, {
    coordinates: coordinates,
    dx: dx,
    fill: fill,
    width: width,
    height: height
  }));
});
var Duck = /*#__PURE__*/external_react_.memo(function (_ref6) {
  var height = _ref6.height,
      dx = _ref6.dx,
      dy = _ref6.dy,
      duck = _ref6.duck,
      onClick = _ref6.onClick;
  var className = duck ? '' : 'kill';
  var duckG = /*#__PURE__*/external_react_.createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_.createElement("g", {
    style: {
      transform: "translate(" + (dx - 30) + "px, " + (dy - 30) + "px) rotate(0.1deg)"
    }
  }, /*#__PURE__*/external_react_.createElement("g", {
    className: external_classnames_default()('lux-duck', className),
    onClick: onClick
  }, /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FEFE00",
    d: "M133.45,136.5c2.033-0.967,3.05-2.633,3.05-5\r c-0.033-15-4.05-28-12.05-39c0-0.333,0.017-0.667,0.05-1c1.367-9.4-0.983-15.067-7.05-17c0-0.333,0-0.667,0-1\r c6.533-30.8,26.517-48.3,59.95-52.5c0.033,0,0.05-0.167,0.05-0.5c7,0,14,0,21,0c0.333,0,0.667,0,1,0\r c24.333,3.667,41.883,14.067,52.65,31.2c3.767,6,6.35,12.7,7.75,20.1c5.533,29,1.4,51.567-12.4,67.7c0.667,1,1.4,1.55,2.2,1.65\r c19.467,2.667,37.367,0.05,53.7-7.85c5.334-2.6,9.617-6.167,12.851-10.7c8.133-11.434,18.217-20.8,30.25-28.1\r c1.8-0.467,3.017-0.467,3.649,0c24.7,16.533,39.667,42.833,44.9,78.9c4.033,28,1.75,52.466-6.85,73.4\r c-8.834,21.434-22.084,38.434-39.75,51C331.033,310.2,309,317.566,282.3,319.9c-61.566,5.399-113.383-0.917-155.45-18.95\r c-31.667-13.566-46.467-43.717-44.4-90.45c3.9-30.767,19.417-50.267,46.55-58.5c0.5-0.133,1.083-0.533,1.75-1.2\r c0.667-0.667,1.567-1.1,2.7-1.3c0-4,0-8,0-12C133.45,137.167,133.45,136.833,133.45,136.5z M193.45,90.5\r c-0.333,0-0.65-0.05-0.95-0.15c-11.367-4.067-19.05-1.35-23.05,8.15c0,0.333-0.017,0.667-0.05,1c-0.5,6.867,0.85,11.867,4.05,15\r c0.333,0,0.633,0.067,0.9,0.2c8.3,4.466,15.667,3.733,22.1-2.2c0-0.333,0.05-0.65,0.15-0.95\r C199.8,103.283,198.75,96.267,193.45,90.5z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#0B0B00",
    d: "M193.45,90.5c5.3,5.767,6.35,12.783,3.15,21.05\r c-0.1,0.3-0.15,0.617-0.15,0.95c-6.434,5.933-13.8,6.667-22.1,2.2c-0.267-0.133-0.567-0.2-0.9-0.2c-3.2-3.133-4.55-8.133-4.05-15\r c0.033-0.333,0.05-0.667,0.05-1c4-9.5,11.683-12.217,23.05-8.15C192.8,90.45,193.117,90.5,193.45,90.5z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FF8D10",
    d: "M133.45,136.5c-0.333,0-0.667-0.017-1-0.05\r c-31.667-4.633-52.667-19.95-63-45.95c0-0.333,0-0.667,0-1c0-1,0-2,0-3c7.433-3.167,15.767-4.483,25-3.95\r c11,0.633,18.667-2.05,23-8.05c6.066,1.933,8.417,7.6,7.05,17c-0.033,0.333-0.05,0.667-0.05,1c8,11,12.017,24,12.05,39\r C136.5,133.867,135.483,135.533,133.45,136.5z"
  }))), ";", !duck && /*#__PURE__*/external_react_.createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_.createElement("g", {
    className: "LuxWaves__Bubble"
  }, /*#__PURE__*/external_react_.createElement("circle", {
    className: "LuxWaves__Bubble_1",
    cx: dx + "px",
    cy: 30,
    r: 10
  }), /*#__PURE__*/external_react_.createElement("circle", {
    className: "LuxWaves__Bubble_2",
    cx: dx - 6 + "px",
    cy: 35,
    r: 5
  })), /*#__PURE__*/external_react_.createElement("g", {
    className: "LuxWaves__BubbleSlowdown"
  }, /*#__PURE__*/external_react_.createElement("circle", {
    className: "LuxWaves__Bubble_3",
    cx: dx - 33 + "px",
    cy: 31,
    r: 7
  }))));
  return duckG;
});

function getDuckDy(coordinates, duckX) {
  var i = -1;

  while (coordinates[i + 1].x < duckX) {
    i++;
  }

  if (i === -1) return 0;
  var _coordinates$i = coordinates[i],
      x0 = _coordinates$i.x,
      y0 = _coordinates$i.y,
      _coordinates3 = coordinates[i + 1],
      x1 = _coordinates3.x,
      y1 = _coordinates3.y;
  var dy = y1 + (y0 - y1) / (x1 - x0) * (x1 - duckX);
  return [duckX, dy * 10];
}

var LuxWaves = /*#__PURE__*/function (_React$Component) {
  inheritsLoose_default()(LuxWaves, _React$Component);

  function LuxWaves(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      width: 0,
      height: 0,
      data: {
        value: 0,
        strValue: '',
        min: -1,
        max: 1,
        suffix: ''
      },
      ticks: [],
      loading: true,
      coordinates1: [{
        x: 0,
        y: 0
      }],
      coordinates2: [{
        x: 0,
        y: 0
      }],
      coordinates3: [{
        x: 0,
        y: 0
      }],
      statusDuck: false
    };
    _this._containerRef = void 0;

    _this._setupContainerRef = /*#__PURE__*/function () {
      var _ref7 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(ref) {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this._containerRef = ref;

                if (!_this._containerRef) {
                  _context.next = 5;
                  break;
                }

                _context.next = 4;
                return _this._loadData(_this.props.subspace.reduce(1, 1, 1));

              case 4:
                _this.resize();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref7.apply(this, arguments);
      };
    }();

    _this.resize = function () {
      if (_this._containerRef) {
        var svg = _this._containerRef.getBoundingClientRect();

        if (svg.width !== _this.state.width || svg.height !== _this.state.height) {
          _this.setState({
            width: svg.width,
            height: svg.height,
            coordinates1: _this._coordinates(70, svg.width),
            coordinates2: _this._coordinates(90, svg.width),
            coordinates3: _this._coordinates(50, svg.width)
          });

          _this.props.setLoading(false);
        }
      }
    };

    _this._rtSubscription = null;

    _this._log10 = Math.log10 = Math.log10 || function (x) {
      return Math.log(x) / Math.LN10;
    };

    _this.onValue = /*#__PURE__*/function () {
      var _ref8 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2(e) {
        var subspace, v, x, y, z, _subspace$getMLP, m, l, p;

        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                subspace = _this.props.subspace.reduce(1, 1, 1);
                _context2.next = 3;
                return _this.props.dp.getValue(subspace);

              case 3:
                v = _context2.sent;
                x = subspace.getX(0);
                y = subspace.getY(0);
                z = subspace.getZ(0);

                if (x && y && z) {
                  _subspace$getMLP = subspace.getMLP(z, y, x), m = _subspace$getMLP.m, l = _subspace$getMLP.l, p = _subspace$getMLP.p;

                  _this.props.cfg.controller.handleVCPClick(e, {
                    m: m,
                    l: l,
                    p: p,
                    x: x,
                    y: y,
                    z: z,
                    v: v
                  });

                  if (_this._rtSubscription) _this._rtSubscription.dispose();
                  _this._rtSubscription = _this._rtSubscription = _this.props.dp.subscribe(subspace, function (z, y, x, v) {
                    return _this._rtValueUpdated(v);
                  });
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref8.apply(this, arguments);
      };
    }();

    return _this;
  }

  var _proto = LuxWaves.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.subspace != this.props.subspace) {
      this._rtSubscription = null;

      this._loadData(this.props.subspace);
    }
  };

  _proto._loadData = /*#__PURE__*/function () {
    var _loadData2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee3(subspace) {
      var _subspace$ys$,
          _subspace$ys$$unit,
          _this2 = this;

      var _data, format, suffix, value, strValue, range, dataRange, rangeCFG, _data2, data, ticks;

      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.props.setLoading(true);

              if (!subspace.isEmpty()) {
                _context3.next = 7;
                break;
              }

              _data = {
                value: 0,
                strValue: Luxms.lang['no_data'],
                min: -1,
                max: 1
              };
              console.log('null');
              this.setState({
                data: _data
              });
              this.props.setLoading(false);
              return _context3.abrupt("return");

            case 7:
              format = this.props.cfg.getDisplay().format;
              suffix = format ? '' : (_subspace$ys$ = subspace.ys[0]) == null ? void 0 : (_subspace$ys$$unit = _subspace$ys$.unit) == null ? void 0 : _subspace$ys$$unit.value_suffix;
              _context3.next = 11;
              return this.props.dp.getValue(subspace);

            case 11:
              value = _context3.sent;
              strValue = format ? (0,utils_.formatNumberWithString)(value, format) : (0,utils_.formatNumberWithString)(value, "-# ###,00");
              range = [value, value];
              _context3.next = 16;
              return this._loadRange(subspace);

            case 16:
              dataRange = _context3.sent;
              range = mergeRanges(range, dataRange);
              rangeCFG = this.props.cfg.getRange();
              range = mergeRanges(range, rangeCFG);

              if (range[0] === range[1]) {
                range[0] -= 1;
                range[1] += 1;
              }

              if (!(value === null)) {
                _context3.next = 26;
                break;
              }

              _data2 = {
                value: value,
                strValue: Luxms.lang['no_data'],
                min: range[0],
                max: range[1],
                suffix: suffix
              };
              this.setState({
                data: _data2
              });
              this.props.setLoading(false);
              return _context3.abrupt("return");

            case 26:
              data = {
                value: value,
                strValue: strValue,
                min: range[0],
                max: range[1],
                suffix: suffix
              };
              ticks = this._buildTicks(this.state.data.min, this.state.data.max);
              this.setState({
                data: data,
                ticks: ticks
              });
              this.props.setLoading(false);
              if (this._rtSubscription) this._rtSubscription.dispose();
              this._rtSubscription = this.props.dp.subscribe(subspace, function (z, y, x, v) {
                return _this2._rtValueUpdated(v);
              });

            case 32:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function _loadData(_x3) {
      return _loadData2.apply(this, arguments);
    }

    return _loadData;
  }();

  _proto._rtValueUpdated = function _rtValueUpdated(v) {
    var data = this.state.data;
    var format = this.props.cfg.getDisplay().format;
    data.value = v > data.max ? data.max : v < data.min ? data.min : v;
    data.strValue = format ? (0,utils_.formatNumberWithString)(v, format) : (0,utils_.formatNumberWithString)(v, "-# ###,00");
    this.setState({
      data: data
    });
    console.log('updated');
  };

  _proto._loadRange = /*#__PURE__*/function () {
    var _loadRange2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee4(subspace) {
      var rangeSubspace, extremes;
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              rangeSubspace = utils_.bi.createSimpleSubspace(subspace.ps, subspace.ms, []);
              extremes = {};

              if (!subspace.koob) {
                _context4.next = 8;
                break;
              }

              _context4.next = 5;
              return this.props.dp.getKoobAggregate(subspace);

            case 5:
              extremes = _context4.sent;
              _context4.next = 11;
              break;

            case 8:
              _context4.next = 10;
              return this.props.dp.getAggregate(rangeSubspace);

            case 10:
              extremes = _context4.sent;

            case 11:
              if (!(typeof extremes.minval !== 'number' || typeof extremes.maxval !== 'number')) {
                _context4.next = 14;
                break;
              }

              console.error('Extremes: cannot parse min/max: ', extremes);
              throw new Error('Extremes: cannot parse min/max: ' + extremes);

            case 14:
              return _context4.abrupt("return", [extremes.minval, extremes.maxval]);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function _loadRange(_x4) {
      return _loadRange2.apply(this, arguments);
    }

    return _loadRange;
  }();

  _proto._correctFloat = function _correctFloat(num, prec) {
    return parseFloat(num.toPrecision(prec || 14));
  };

  _proto._buildTicks = function _buildTicks(min, max) {
    var domainLength = max - min;
    var digits = Math.floor(this._log10(domainLength));
    var interval = Math.pow(10, digits);
    var multipliers = [0.1, 0.2, 0.25, 0.5, 1, 1.25, 1.5, 2.0];
    var tickValues;

    for (var _i = 0, _multipliers = multipliers; _i < _multipliers.length; _i++) {
      var m = _multipliers[_i];
      tickValues = this._getLinearTickPositions(interval * m, min, max);

      if (tickValues.length <= 20) {
        return tickValues;
      }
    }

    return tickValues;
  };

  _proto._getLinearTickPositions = function _getLinearTickPositions(tickInterval, min, max) {
    var pos,
        lastPos,
        roundedMin = this._correctFloat(Math.floor(min / tickInterval) * tickInterval),
        roundedMax = this._correctFloat(Math.ceil(max / tickInterval) * tickInterval),
        tickPositions = []; // For single points, add a tick regardless of the relative position (#2662)


    if (min === max && typeof min === "number") {
      return [min];
    }

    pos = roundedMin;

    while (pos <= roundedMax) {
      tickPositions.push(pos); // Always add the raw tickInterval, not the corrected one.

      pos = this._correctFloat(pos + tickInterval); // If the interval is not big enough in the current min - max range to actually increase
      // the loop variable, we need to break out to prevent endless loop. Issue #619

      if (pos === lastPos) {
        break;
      } // Record the last value


      lastPos = pos;
    }

    return tickPositions;
  };

  _proto._coordinates = function _coordinates(dx, width) {
    var nextX = dx + Math.floor(Math.random() * 50 - 25);
    var nextY = -5;
    var coordinates = [{
      x: nextX,
      y: nextY
    }];

    for (var i = 1; i < 5 * width / (dx * 2); i++) {
      nextX = i * dx * 3 + Math.floor(Math.random() * 50 - 25);
      var y = nextY;
      nextY = -Math.sign(y) * Math.floor(Math.random() * 2 + 2);
      coordinates.push({
        x: nextX,
        y: nextY
      });
    }

    if (this._containerRef) {
      this.setState({
        coordinates: [].concat(coordinates)
      });
    }

    return coordinates;
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$state = this.state,
        width = _this$state.width,
        height = _this$state.height,
        data = _this$state.data,
        coordinates1 = _this$state.coordinates1,
        coordinates2 = _this$state.coordinates2,
        coordinates3 = _this$state.coordinates3,
        statusDuck = _this$state.statusDuck;

    var ticks = this._buildTicks(data.min, data.max);

    var percent = data.value < ticks[0] ? 0 : (data.value - ticks[0]) * 100 / (ticks[ticks.length - 1] - ticks[0]);
    var valuePx = height * (100 - percent) / 100;
    var duckDy = getDuckDy(coordinates3, width / 2);
    return /*#__PURE__*/external_react_.createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_.createElement("svg", {
      className: "LuxWaves__svg",
      width: "100%",
      height: "100%",
      ref: this._setupContainerRef,
      viewBox: "0 0 " + width + " " + height
    }, /*#__PURE__*/external_react_.createElement("g", {
      className: 'LuxWaves__Duck',
      style: {
        transform: "translate(" + -width * 0.5 + "px, " + (valuePx - 25) + "px) rotate(0.1deg)"
      }
    }), /*#__PURE__*/external_react_.createElement("g", {
      className: 'LuxWaves__Waves',
      style: {
        transform: "translate(" + 0 + "px, " + Math.floor(valuePx - 10) + "px) rotate(0.1deg)"
      }
    }, /*#__PURE__*/external_react_.createElement(Wave, {
      className: "LuxWaves__Wave wave1",
      coordinates: coordinates1,
      dx: 70,
      fill: 'rgba(68, 114, 196, 0.4)',
      width: width,
      height: height * 2,
      percent: percent
    }), /*#__PURE__*/external_react_.createElement(Wave, {
      className: "LuxWaves__Wave wave2",
      coordinates: coordinates2,
      dx: 90,
      fill: 'rgba(68, 114, 196, 0.4)',
      width: width,
      height: height * 2,
      percent: percent
    }), /*#__PURE__*/external_react_.createElement(Duck, {
      height: height,
      dx: duckDy[0],
      dy: duckDy[1],
      duck: statusDuck,
      onClick: function onClick() {
        return _this3.setState({
          statusDuck: false
        });
      }
    }), /*#__PURE__*/external_react_.createElement(Wave, {
      className: "LuxWaves__Wave wave3",
      coordinates: coordinates3,
      dx: 50,
      fill: 'rgba(68, 114, 196, 0.4)',
      width: width,
      height: height * 2,
      percent: percent
    })), /*#__PURE__*/external_react_.createElement("g", {
      className: 'LuxWaves__Ruler',
      transform: "translate(-16 10)"
    }, /*#__PURE__*/external_react_.createElement(Ruler, {
      width: width,
      height: height,
      ticks: ticks
    }))), /*#__PURE__*/external_react_.createElement("section", {
      className: "LuxWaves"
    }, /*#__PURE__*/external_react_.createElement("h4", {
      className: "LuxWaves__Value",
      onClick: function onClick(e) {
        return _this3.onValue(e);
      }
    }, /*#__PURE__*/external_react_.createElement("span", null, data.strValue), data.suffix), /*#__PURE__*/external_react_.createElement("h5", {
      className: "LuxWaves__Text"
    }, "\u0417\u0430\u043F\u043E\u043B\u043D\u044F\u0439\u043A\u0430!"), /*#__PURE__*/external_react_.createElement("p", {
      className: "LuxWaves__Description",
      onClick: function onClick() {
        return _this3.setState({
          statusDuck: true
        });
      }
    }, statusDuck ? 'А мы запустили уточку' : 'Еще бы запустить уточку')));
  };

  return LuxWaves;
}(external_react_.Component);

/* harmony default export */ const shopVIZEL_wave_lux_waves = (LuxWaves);
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=lux-waves.js.map