/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url["default"] : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE */

(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  'use strict';

  var entries = Object.entries,
    setPrototypeOf = Object.setPrototypeOf,
    isFrozen = Object.isFrozen,
    getPrototypeOf = Object.getPrototypeOf,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
    seal = Object.seal,
    create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
    apply = _ref.apply,
    construct = _ref.construct;
  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }
  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }
  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }
  if (!construct) {
    construct = function construct(Func, args) {
      return _construct(Func, _toConsumableArray(args));
    };
  }
  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringToString = unapply(String.prototype.toString);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return construct(func, args);
    };
  }
  /* Add properties to a lookup table */

  function addToSet(set, array, transformCaseFunc) {
    var _transformCaseFunc;
    transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }
    var l = array.length;
    while (l--) {
      var element = array[l];
      if (typeof element === 'string') {
        var lcElement = transformCaseFunc(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }
          element = lcElement;
        }
      }
      set[element] = true;
    }
    return set;
  }
  /* Shallow clone an object */

  function clone(object) {
    var newObject = create(null);
    var _iterator = _createForOfIteratorHelper(entries(object)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          property = _step$value[0],
          value = _step$value[1];
        newObject[property] = value;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return newObject;
  }
  /* This method automatically checks if the prop is function
   * or getter and behaves accordingly. */

  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf(object);
    }
    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }
    return fallbackValue;
  }
  var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

  var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.

  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'mprescripts']); // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.

  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  var text = freeze(['#text']);
  var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);
  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );

  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );

  var DOCTYPE_NAME = seal(/^html$/i);
  var EXPRESSIONS = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: MUSTACHE_EXPR,
    ERB_EXPR: ERB_EXPR,
    TMPLIT_EXPR: TMPLIT_EXPR,
    DATA_ATTR: DATA_ATTR,
    ARIA_ATTR: ARIA_ATTR,
    IS_ALLOWED_URI: IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
    ATTR_WHITESPACE: ATTR_WHITESPACE,
    DOCTYPE_NAME: DOCTYPE_NAME
  });
  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {HTMLScriptElement} purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported or creating the policy failed).
   */

  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
    if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    } // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.

    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';
    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
      suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }
    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');
    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html) {
          return html;
        },
        createScriptURL: function createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };
  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */

    DOMPurify.version = '3.0.3';
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */

    DOMPurify.removed = [];
    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }
    var originalDocument = window.document;
    var currentScript = originalDocument.currentScript;
    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      Element = window.Element,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      HTMLFormElement = window.HTMLFormElement,
      DOMParser = window.DOMParser,
      trustedTypes = window.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }
    var trustedTypesPolicy;
    var emptyHTML = '';
    var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      createDocumentFragment = _document.createDocumentFragment,
      getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var hooks = {};
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */

    DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
    var MUSTACHE_EXPR = EXPRESSIONS.MUSTACHE_EXPR,
      ERB_EXPR = EXPRESSIONS.ERB_EXPR,
      TMPLIT_EXPR = EXPRESSIONS.TMPLIT_EXPR,
      DATA_ATTR = EXPRESSIONS.DATA_ATTR,
      ARIA_ATTR = EXPRESSIONS.ARIA_ATTR,
      IS_SCRIPT_OR_DATA = EXPRESSIONS.IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE = EXPRESSIONS.ATTR_WHITESPACE;
    var IS_ALLOWED_URI$1 = EXPRESSIONS.IS_ALLOWED_URI;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
    /* Allowed attribute names */

    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */

    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

    var FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

    var FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */

    var ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */

    var ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */

    var ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */

    var ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */

    var SAFE_FOR_TEMPLATES = false;
    /* Decide if document with <html>... should be returned */

    var WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */

    var SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */

    var FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */

    var RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */

    var RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */

    var RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */

    var SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */

    var SANITIZE_NAMED_PROPS = false;
    var SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */

    var KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */

    var IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */

    var USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */

    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */

    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */

    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */

    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */

    var ALLOWED_NAMESPACES = null;
    var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    /* Parsing of strict XHTML documents */

    var PARSER_MEDIA_TYPE;
    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    var transformCaseFunc;
    /* Keep a reference to config to pass to hooks */

    var CONFIG = null;
    /* Ideally, do not touch anything below this line */

    /* ______________________________________________ */

    var formElement = document.createElement('form');
    var isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity

    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */

      if (!cfg || _typeof(cfg) !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */

      cfg = clone(cfg);
      PARSER_MEDIA_TYPE =
      // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
      /* Set configuration parameters */

      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS),
      // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true

      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

      RETURN_DOM = cfg.RETURN_DOM || false; // Default false

      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

      FORCE_BODY = cfg.FORCE_BODY || false; // Default false

      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false

      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

      IN_PLACE = cfg.IN_PLACE || false; // Default false

      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */

      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */

      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */

      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */

      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */

      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }
      if (cfg.TRUSTED_TYPES_POLICY) {
        if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        }
        if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        } // Overwrite existing TrustedTypes policy.

        trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY; // Sign local variables required by `sanitize`.

        emptyHTML = trustedTypesPolicy.createHTML('');
      } else {
        // Uninitialized policy, attempt to initialize the internal dompurify policy.
        if (trustedTypesPolicy === undefined) {
          trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
        } // If creating the internal policy succeeded sign internal variables.

        if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
          emptyHTML = trustedTypesPolicy.createHTML('');
        }
      } // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.

      if (freeze) {
        freeze(cfg);
      }
      CONFIG = cfg;
    };
    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.

    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */

    var ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */

    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.

      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }
      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);
      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }
      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        } // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.

        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        } // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.

        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        } // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points

        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        } // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.

        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        } // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace

        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      } // For XHTML and XML documents that support custom namespaces

      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      } // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.

      return false;
    };
    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */

    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });
      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        node.remove();
      }
    };
    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */

    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }
      node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */

    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc;
      var leadingWhitespace;
      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }
      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */

      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */

      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {// Syntax error if dirtyPayload is invalid xml
        }
      }
      var body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */

      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */

    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };
    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */

    var _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };
    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */

    var _isNode = function _isNode(object) {
      return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };
    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */

    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }
      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */

    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeElements', currentNode, null);
      /* Check if element is clobbered or can clobber */

      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Now let's check the element's type and name */

      var tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */

      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */

      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Remove element if anything forbids its presence */

      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }
        /* Keep content except for bad-listed elements */

        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            var childCount = childNodes.length;
            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }
      /* Check whether element has a valid namespace */

      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Make sure that older browsers don't get noscript mXSS */

      if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Sanitize element content to be template-safe */

      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR, ' ');
        content = stringReplace(content, ERB_EXPR, ' ');
        content = stringReplace(content, TMPLIT_EXPR, ' ');
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */

      _executeHook('afterSanitizeElements', currentNode, null);
      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity

    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */

      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ;else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ;else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) ||
        // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ;else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ;else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ;else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ;else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ;else if (value) {
        return false;
      } else ;
      return true;
    };
    /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */

    var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
      return tagName.indexOf('-') > 0;
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */

    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr;
      var value;
      var lcName;
      var l;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeAttributes', currentNode, null);
      var attributes = currentNode.attributes;
      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }
      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */

      while (l--) {
        attr = attributes[l];
        var _attr = attr,
          name = _attr.name,
          namespaceURI = _attr.namespaceURI;
        value = name === 'value' ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        /* Execute a hook if present */

        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */

        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Remove attribute */

        _removeAttribute(name, currentNode);
        /* Did the hooks approve of the attribute? */

        if (!hookEvent.keepAttr) {
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */

        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        /* Sanitize attribute content to be template-safe */

        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR, ' ');
          value = stringReplace(value, ERB_EXPR, ' ');
          value = stringReplace(value, TMPLIT_EXPR, ' ');
        }
        /* Is `value` valid for this attribute? */

        var lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */

        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value

          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        /* Handle attributes that require Trusted Types */

        if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ;else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }
              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */

        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }
          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }
      /* Execute a hook if present */

      _executeHook('afterSanitizeAttributes', currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */

    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode;
      var shadowIterator = _createIterator(fragment);
      /* Execute a hook if present */

      _executeHook('beforeSanitizeShadowDOM', fragment, null);
      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);
        /* Sanitize tags and elements */

        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        /* Deep shadow DOM detected */

        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
        /* Check attributes, sanitize if necessary */

        _sanitizeAttributes(shadowNode);
      }
      /* Execute a hook if present */

      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };
    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity

    DOMPurify.sanitize = function (dirty) {
      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body;
      var importedNode;
      var currentNode;
      var returnNode;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */

      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */

      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }
      /* Return dirty HTML if DOMPurify cannot run */

      if (!DOMPurify.isSupported) {
        return dirty;
      }
      /* Assign config vars */

      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */

      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */

      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }
      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          var tagName = transformCaseFunc(dirty.nodeName);
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */

        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */

        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */

      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */

      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */

      while (currentNode = nodeIterator.nextNode()) {
        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }
        /* Shadow DOM detected, sanitize it */

        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        /* Check attributes, sanitize if necessary */

        _sanitizeAttributes(currentNode);
      }
      /* If we sanitized `dirty` in-place, return it. */

      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */

      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */

      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */

      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR, ' ');
        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR, ' ');
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */

    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };
    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */

    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */

    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }
      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */

    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }
      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */

    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };
    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */

    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */

    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };
    return DOMPurify;
  }
  var purify = createDOMPurify();
  return purify;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   completeTask: () => (/* binding */ completeTask),
/* harmony export */   decompleteTask: () => (/* binding */ decompleteTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editTask: () => (/* reexport safe */ _taskPopup_js__WEBPACK_IMPORTED_MODULE_2__.editTask)
/* harmony export */ });
/* harmony import */ var _styles_content_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/content/style.scss */ "./src/styles/content/style.scss");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _taskPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskPopup.js */ "./src/taskPopup.js");
/* harmony import */ var _taskLoading_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskLoading.js */ "./src/taskLoading.js");




var currentSection = "inbox";
var taskList = [];
var projectList = [];
var search = "";
var currentFilters = (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.Filters)(search, false, false, false, null);
var GetID = function () {
  function getGlobalTaskID() {
    return 0;
  }
  function getGlobalProjectID() {
    return 0;
  }
  var globalTaskID = getGlobalTaskID();
  var globalProjectID = getGlobalProjectID();
  function forTask() {
    globalTaskID++;
    return globalTaskID;
  }
  function forProject() {
    globalProjectID++;
    return globalProjectID;
  }
  return {
    forTask: forTask,
    forProject: forProject
  };
}();
function Task(title, description, dueDate, priority, project) {
  var id = GetID.forTask();
  dueDate = dueDate ? dueDate : null;
  var completed = false;
  function getPriorityClass() {
    if (priority === 1) return "p1";
    if (priority === 2) return "p2";
    if (priority === 3) return "p3";
    if (priority === null) return "pn";
  }
  function numberToMonthName(number) {
    switch (number) {
      case "01":
      case 1:
        return "Jan";
      case "02":
      case 2:
        return "Feb";
      case "03":
      case 3:
        return "March";
      case "04":
      case 4:
        return "April";
      case "05":
      case 5:
        return "May";
      case "06":
      case 6:
        return "June";
      case "07":
      case 7:
        return "July";
      case "08":
      case 8:
        return "Aug";
      case "09":
      case 9:
        return "Sep";
      case "10":
      case 10:
        return "Oct";
      case "11":
      case 11:
        return "Nov";
      case "12":
      case 12:
        return "Dec";
      default:
        throw new Error("Weird month number!");
    }
  }
  function getCleanDueDate() {
    if (!dueDate) return "No due date";
    var dueDateDateFormat = new Date(dueDate);
    var cleanDueDate = dueDateDateFormat.getDate() + " " + numberToMonthName(dueDateDateFormat.getMonth() + 1) + " " + dueDateDateFormat.getFullYear();
    return cleanDueDate;
  }
  var getTaskCardHTML = function getTaskCardHTML() {
    var editIcon = "<img\n    src=\"edit.svg\"\n    alt=\"edit\"\n    class=\"edit-icon icon\"\n  />";
    return dompurify__WEBPACK_IMPORTED_MODULE_1___default().sanitize("\n    <div\n      class=\"task-card example-card ".concat(getPriorityClass(), " task-").concat(id, "\"\n      data-priority=\"").concat(priority, "\"\n      data-date=\"").concat(dueDate, "\"\n    >\n      <label class=\"checkbox\">\n        <input type=\"checkbox\" />\n        <img\n          src=\"").concat(currentSection !== "completed" ? "chekbox-check.svg" : "close.svg", "\"\n          alt=\"").concat(currentSection !== "completed" ? "check" : "uncheck", "\"\n          class=\"check\"\n        />\n      </label>\n      <div class=\"data\">\n        <div class=\"title\">").concat(title, "</div>\n        <div class=\"description\">\n          ").concat(description, "  \n        </div>\n        <div class=\"due-date\">").concat(getCleanDueDate(), "</div>\n      </div>\n      <div class=\"icons\">\n        <img\n          src=\"edit.svg\"\n          alt=\"edit\"\n          class=\"edit-icon icon\"\n        />\n        <img\n          src=\"delete.svg\"\n          alt=\"delete\"\n          class=\"delete-icon icon\"\n        />\n      </div>\n    </div>"));
  };
  return {
    id: id,
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    project: project,
    completed: completed,
    getTaskCardHTML: getTaskCardHTML
  };
}
function Project(title) {
  var id = GetID.forProject(),
    numberOfTasks = 0;
  function validProjectSection(projectSection) {
    if (projectSection.classList.contains("project-".concat(id))) return true;
    return false;
  }
  return {
    id: id,
    title: title,
    numberOfTasks: numberOfTasks,
    validProjectSection: validProjectSection
  };
}
var Menu = function () {
  var menu = document.querySelector("#menu");
  var addProject = menu.querySelector(".add-project");
  var projectForm = menu.querySelector(".project-form");
  var projectFormCancel = projectForm.querySelector(".cancel");
  var projectFormSubmit = projectForm.querySelector(".submit");
  var allSections = menu.querySelectorAll(".task-section, .project-section");
  var allProjectsDeleteIcons = menu.querySelectorAll(".project-section .delete-icon");
  function closeOnMobile() {
    var viewportWidth = window.innerWidth;
    if (viewportWidth < 600) menu.classList.add("hidden");
  }
  function initializeHomeButton() {
    var homeButton = document.querySelector("header .home");
    homeButton.addEventListener("click", function () {
      selectTaskSection("Inbox");
      highlightSection(document.querySelector(".inbox"));
    });
  }
  function initializeMenuToggle() {
    var menu = document.querySelector("#menu");
    var menuToggle = document.querySelector("header .hamburger");
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
  }
  function highlightSection(selectedSection) {
    allSections.forEach(function (section) {
      return section.classList.remove("selected");
    });
    selectedSection.classList.add("selected");
  }
  function removeProject(project) {
    taskList.forEach(function (task) {
      if (task.project === project.id) deleteTask(task);
    });
    var projectIndex = projectList.indexOf(project);
    projectList.splice(projectIndex, 1);
    var allProjectAppearances = document.querySelectorAll(".project-".concat(project.id));
    allProjectAppearances.forEach(function (projectElement) {
      return projectElement.remove();
    });
    selectTaskSection("Inbox");
    highlightSection(document.querySelector(".inbox"));
  }
  function initializeLoadedProjects() /* mainly for outside production, projects should be only created in js not html */{
    allSections.forEach(function (section) {
      return section.addEventListener("click", function () {
        highlightSection(section);
      });
    });
    allProjectsDeleteIcons.forEach(function (deleteIcon) {
      return deleteIcon.addEventListener("click", function (event) {
        removeProject(deleteIcon.parentNode.querySelector(".title").textContent);
        event.stopPropagation();
      });
    });
  }
  function resetProjectForm() {
    projectForm.reset();
  }
  function openProjectForm() {
    addProject.classList.add("adding");
    projectForm.querySelector("input").focus();
  }
  function closeProjectForm() {
    addProject.classList.remove("adding");
    resetProjectForm();
  }
  function getProjectSectionHTML(project) {
    return "\n    <div class=\"project-section project-".concat(project.id, "\" title=\"").concat(project.title, "\">\n      <img src=\"list-box.svg\" alt=\"your tasks\" class=\"project-icon icon\">\n      <div class=\"title\">").concat(project.title, "</div>\n      <div class=\"number-of-tasks\"></div>\n      <img src=\"delete.svg\" alt=\"delete\" class=\"icon delete-icon\">\n    </div>");
  }
  function addMenuProjectElementListeners(project) {
    var projectElement = document.querySelector("#menu .projects-sections .project-".concat(project.id));
    var projectDeleteIcon = projectElement.querySelector(".delete-icon");
    projectDeleteIcon.addEventListener("click", function (event) {
      removeProject(project);
      event.stopPropagation();
    });
    projectElement.addEventListener("click", function () {
      highlightSection(projectElement);
      loadProjectTasks(project);
    });
  }
  function submitProject() {
    var projectFormData = new FormData(projectForm);
    var title = projectFormData.get("title");
    var project = Project(title);
    projectList.push(project);
    var newProjectSection = document.createElement("div");
    addProject.parentElement.insertBefore(newProjectSection, addProject);
    newProjectSection.outerHTML = getProjectSectionHTML(project);
    addMenuProjectElementListeners(project);
    allSections = menu.querySelectorAll(".task-section, .project-section:not(.add-project)");
    (0,_taskPopup_js__WEBPACK_IMPORTED_MODULE_2__.createNewProjectDropdownOption)(project);
  }
  function initializeProjectForm() {
    projectFormCancel.addEventListener("click", closeProjectForm);
    projectForm.addEventListener("submit", function () {
      if (projectForm.matches(":valid")) {
        submitProject();
        closeProjectForm();
      }
      return false;
    });
    projectFormSubmit.addEventListener("click", function () {
      if (projectForm.matches(":valid")) {
        submitProject();
        closeProjectForm();
      }
    });
    addProject.addEventListener("click", openProjectForm);
  }
  function initialize() {
    closeOnMobile();
    initializeHomeButton();
    initializeMenuToggle();
    initializeLoadedProjects();
    initializeProjectForm();
  }
  return {
    initialize: initialize
  };
}();
function hideLoadingScreen() {
  var loadingElement = document.querySelector("#loading-screen");
  var bodyStyles = window.getComputedStyle(document.body);
  var hideDelay = bodyStyles.getPropertyValue("--loading-screen-hide-delay");
  var numberOfSeconds = +hideDelay.replace(/[^0-9\.]+/g, "");
  setTimeout(function () {
    loadingElement.style.display = "none";
  }, numberOfSeconds * 1000);
}
function autoResizeElements() /* used for description textarea in task popup */{
  var elements = document.querySelectorAll(".auto-resize");
  elements.forEach(function (element) {
    element.addEventListener("input", autoResize, false);
  });
  function autoResize() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }
}
function cancelTask() {}
function submitTask(editingTask) {
  var taskPopup = document.querySelector(".task-popup");
  var taskPopupFormData = new FormData(taskPopup);
  var title = taskPopupFormData.get("title");
  var description = taskPopupFormData.get("description");
  var dueDate = taskPopupFormData.get("date");
  var project = +taskPopup.querySelector(".project-button").className.replace("project-button", "").replace(" project-", "");
  var priority;
  var priorityClass = taskPopup.querySelector(".priority-button .text").textContent;
  switch (priorityClass) {
    case "P1":
      priority = 1;
      break;
    case "P2":
      priority = 2;
      break;
    case "P3":
      priority = 3;
      break;
    default:
      priority = null;
  }
  var newTask = Task(title, description, dueDate, priority, project);
  if (!editingTask) {
    taskList.push(newTask);
  } else {
    taskList = taskList.map(function (task) {
      if (task === editingTask) return newTask;
      return task;
    });
    editingTask = null;
  }
  (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.loadTasks)(taskList, projectList, currentFilters);
}
function deleteTask(task) {
  var index = taskList.indexOf(task);
  taskList.splice(index, 1);
  (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.loadTasks)(taskList, projectList, currentFilters);
}
function completeTask(task) {
  var index = taskList.indexOf(task);
  taskList[index].completed = true;
  (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.loadTasks)(taskList, projectList, currentFilters);
}
function decompleteTask(task) {
  var index = taskList.indexOf(task);
  taskList[index].completed = false;
  (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.loadTasks)(taskList, projectList, currentFilters);
}
function getCurrentSection() {
  return currentSection;
}
function selectTaskSection(taskSectionTitle) {
  var contentTitle = document.querySelector(".content-title");
  contentTitle.textContent = taskSectionTitle;
  taskSectionTitle = taskSectionTitle.toLowerCase();
  var filters;
  switch (taskSectionTitle) {
    case "inbox":
      filters = (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.Filters)(search, false, false, false, null);
      break;
    case "today":
      filters = (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.Filters)(search, true, false, false, null);
      break;
    case "this week":
      filters = (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.Filters)(search, false, true, false, null);
      break;
    case "completed":
      filters = (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.Filters)(search, false, false, true, null);
      break;
    default:
      throw new Error("Weird taskSectionTitle!");
  }
  currentSection = taskSectionTitle;
  currentFilters = filters;
  (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.loadTasks)(taskList, projectList, filters);
}
function loadProjectTasks(project) {
  var contentTitle = document.querySelector(".content-title");
  contentTitle.textContent = project.title;
  currentSection = "project-".concat(project.id);
  var filters = (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.Filters)(search, false, false, false, project);
  currentFilters = filters;
  (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.loadTasks)(taskList, projectList, filters);
}
function initializeLoadTaskListeners() {
  var taskSections = document.querySelectorAll(".task-section");
  var searchBar = document.querySelector("#search-field");
  taskSections.forEach(function (taskSection) {
    return taskSection.addEventListener("click", function () {
      var taskSectionTitle = taskSection.querySelector(".title").textContent;
      selectTaskSection(taskSectionTitle);
    });
  });
  searchBar.addEventListener("input", function () {
    search = searchBar.value;
    currentFilters.setSearch(search);
    (0,_taskLoading_js__WEBPACK_IMPORTED_MODULE_3__.loadTasks)(taskList, projectList, currentFilters);
  });
}
hideLoadingScreen();
Menu.initialize();
autoResizeElements();
(0,_taskPopup_js__WEBPACK_IMPORTED_MODULE_2__.initializeTaskPopup)(submitTask, cancelTask, getCurrentSection);
initializeLoadTaskListeners();


/***/ }),

/***/ "./src/numbersOfTasks.js":
/*!*******************************!*\
  !*** ./src/numbersOfTasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAllNumbersOfTasks: () => (/* binding */ loadAllNumbersOfTasks)
/* harmony export */ });
/* harmony import */ var _taskLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskLoading */ "./src/taskLoading.js");

function countTasks(taskList, filters) {
  var filteredTaskList = taskList.filter(filters.taskIsValid);
  return filteredTaskList.length;
}
function loadForTaskSection(section, taskList) {
  section = section.toLowerCase();
  var taskSection = document.querySelector(".tasks-sections .".concat(section));
  var numberOfTasksElement = taskSection.querySelector(".number-of-tasks");
  var filters;
  switch (section) {
    case "inbox":
      filters = (0,_taskLoading__WEBPACK_IMPORTED_MODULE_0__.Filters)("", false, false, false, null);
      break;
    case "today":
      filters = (0,_taskLoading__WEBPACK_IMPORTED_MODULE_0__.Filters)("", true, false, false, null);
      break;
    case "this-week":
      filters = (0,_taskLoading__WEBPACK_IMPORTED_MODULE_0__.Filters)("", false, true, false, null);
      break;
    case "done":
      filters = (0,_taskLoading__WEBPACK_IMPORTED_MODULE_0__.Filters)("", false, false, true, null);
      break;
    default:
      throw new Error("Weird taskSectionTitle!");
  }
  var numberOfTasks = countTasks(taskList, filters);
  numberOfTasksElement.textContent = numberOfTasks ? numberOfTasks : "";
}
function loadForAllTaskSections(taskList) {
  loadForTaskSection("inbox", taskList);
  loadForTaskSection("today", taskList);
  loadForTaskSection("this-week", taskList);
  loadForTaskSection("done", taskList);
}
function loadForProjectSection(taskList, project) {
  var filters = (0,_taskLoading__WEBPACK_IMPORTED_MODULE_0__.Filters)("", false, false, false, project);
  var projectSectionElement = document.querySelector(".projects .project-".concat(project.id));
  var numberOfTasksElement = projectSectionElement.querySelector(".number-of-tasks");
  project.numberOfTasks = countTasks(taskList, filters);
  numberOfTasksElement.textContent = project.numberOfTasks ? project.numberOfTasks : "";
}
function loadForAllProjectSections(taskList, projectList) {
  projectList.forEach(function (project) {
    return loadForProjectSection(taskList, project);
  });
}
function loadAllNumbersOfTasks(taskList, projectList) {
  loadForAllTaskSections(taskList);
  loadForAllProjectSections(taskList, projectList);
}

/***/ }),

/***/ "./src/taskLoading.js":
/*!****************************!*\
  !*** ./src/taskLoading.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filters: () => (/* binding */ Filters),
/* harmony export */   loadTasks: () => (/* binding */ loadTasks)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _numbersOfTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numbersOfTasks */ "./src/numbersOfTasks.js");


function addTaskToContent(task) {
  var taskCard = document.createElement("div");
  var tasksElement = document.querySelector("#content .tasks");
  var addTaskElement = tasksElement.querySelector(".add-task");
  tasksElement.insertBefore(taskCard, addTaskElement);
  taskCard.outerHTML = task.getTaskCardHTML();
  taskCard = document.querySelector(".task-card.task-".concat(task.id));
  var editIcon = taskCard.querySelector(".edit-icon"),
    deleteIcon = taskCard.querySelector(".delete-icon"),
    completeCheckbox = taskCard.querySelector(".checkbox");
  editIcon.addEventListener("click", function () {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.editTask)(task);
  });
  deleteIcon.addEventListener("click", function () {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(task);
  });
  console.log(completeCheckbox);
  completeCheckbox.addEventListener("click", function (event) {
    event.preventDefault();
    if (!task.completed) (0,_index__WEBPACK_IMPORTED_MODULE_0__.completeTask)(task);else (0,_index__WEBPACK_IMPORTED_MODULE_0__.decompleteTask)(task);
  });
}
function removeAllTaskCards() {
  var allTaskCards = document.querySelectorAll(".task-card");
  allTaskCards.forEach(function (taskCard) {
    return taskCard.remove();
  });
}
function compareDates(date1, date2) {
  var date1GoesFirst = -1,
    date2GoesFirst = 1,
    equalDates = 0;
  if (date1.getTime() === date2.getTime()) return equalDates;
  if (!date1.getTime()) return date2GoesFirst;
  if (!date2.getTime()) return date1GoesFirst;
  return date1.getTime() - date2.getTime();
}
function sameWeekDates(date1, date2) {
  var oneWeekMilliseconds = 1000 * 3600 * 24 * 7;
  var datesWithin7Days = Math.abs(date2.getTime() - date1.getTime()) < oneWeekMilliseconds;
  if (!datesWithin7Days) return false;
  if (date1.getDate() === date2.getDate()) return true;
  var date1Earlier = date1.getTime() < date2.getTime(),
    date2Earlier = date1.getTime() > date2.getTime();
  var date1HasEarlierWeekDay = date1.getDay() < date2.getDay(),
    date2HasEarlierWeekDay = date2.getDay() < date1.getDay();
  if (date1Earlier) {
    return date1HasEarlierWeekDay;
  } else if (date2Earlier) {
    return date2HasEarlierWeekDay;
  } else throw new Error("Odd times, this error should never be reached through code");
}
function comparePriorities(priority1, priority2) {
  var priority1GoesFirst = -1,
    priority2GoesFirst = 1,
    equalPriorities = 0;
  if (priority1 === priority2) return equalPriorities;
  if (!priority1) return priority2GoesFirst;
  if (!priority2) return priority1GoesFirst;
  return priority1 - priority2;
}
function sortedTaskList(taskList) {
  return taskList.sort(function (task1, task2) {
    var priorityComparison = comparePriorities(task1.priority, task2.priority);
    var datesComparison = compareDates(new Date(task1.dueDate), new Date(task2.dueDate));
    if (priorityComparison) return priorityComparison;else return datesComparison;
  });
}
function Filters(search, todayOnly, thisWeekOnly, completedOnly, project) {
  function _validSearch(task) {
    if (search && !task.title.includes(search) && !task.description.includes(search)) return false;
    return true;
  }
  function _validDate(taskDate) {
    if (!taskDate) return false;
    var currentDate = new Date();
    if (todayOnly && taskDate.getDate() !== currentDate.getDate()) return false;
    if (thisWeekOnly && !sameWeekDates(taskDate, currentDate)) return false;
    return true;
  }
  function _validCompletion(taskCompleted) {
    if (completedOnly && !taskCompleted) return false;
    if (!completedOnly && taskCompleted) return false;
    return true;
  }
  function _validProject(taskProject) {
    if (project && taskProject !== project.id) return false;
    return true;
  }
  function taskIsValid(task) {
    var taskDate = new Date(task.dueDate);
    if (!_validSearch(task)) return false;
    if (!_validDate(new Date(task.dueDate))) return false;
    if (!_validCompletion(task.completed)) return false;
    if (!_validProject(task.project)) return false;
    return true;
  }
  function setSearch(newSearch) {
    search = newSearch;
  }
  function getFilters() {
    return {
      search: search,
      todayOnly: todayOnly,
      thisWeekOnly: thisWeekOnly,
      completedOnly: completedOnly,
      project: project
    };
  }
  return {
    taskIsValid: taskIsValid,
    setSearch: setSearch,
    getFilters: getFilters
  };
}
function loadTasks(taskList, projectList, filters) {
  console.log("loading tasks");
  taskList = sortedTaskList(taskList);
  removeAllTaskCards();
  var filteredTaskList = taskList.filter(filters.taskIsValid);
  filteredTaskList.forEach(function (task) {
    return addTaskToContent(task);
  });
  (0,_numbersOfTasks__WEBPACK_IMPORTED_MODULE_1__.loadAllNumbersOfTasks)(taskList, projectList);
}


/***/ }),

/***/ "./src/taskPopup.js":
/*!**************************!*\
  !*** ./src/taskPopup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewProjectDropdownOption: () => (/* binding */ createNewProjectDropdownOption),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   initializeTaskPopup: () => (/* binding */ initializeTaskPopup)
/* harmony export */ });
var taskPopupContainer = document.querySelector(".task-popup-container");
var taskPopup = document.querySelector(".task-popup");
var addTaskButtons = document.querySelectorAll(".add-task-button");
var cancelTaskButton = taskPopup.querySelector("button.cancel");
var submitTaskButton = taskPopup.querySelector("button.submit");
var titleInput = taskPopup.querySelector("input.title");
var descriptionInput = taskPopup.querySelector("textarea.description");
var prioritySelectionButton = taskPopup.querySelector(".priority-button");
var prioritySelectionButtonText = prioritySelectionButton.querySelector(".text");
var prioritySelectionButtonImage = prioritySelectionButton.querySelector("img");
var projectSelectionButton = taskPopup.querySelector(".project-button");
var projectSelectionButtonImage = projectSelectionButton.querySelector("img");
var projectSelectionButtonText = projectSelectionButton.querySelector(".text");
var projectDropdown = taskPopup.querySelector(".project-dropdown");
var priorityDropdown = taskPopup.querySelector(".priority-dropdown");
var priorityDropdownOptions = priorityDropdown.querySelectorAll(".dropdown-option");
var projectDropdownOptions = projectDropdown.querySelectorAll(".dropdown-option");
var dateInput = taskPopup.querySelector("input.date-picker");
var getCurrentSection, currentEditingTask;
function setEditingTaskDefaultOptions() {
  titleInput.value = currentEditingTask.title;
  descriptionInput.value = currentEditingTask.description;
  dateInput.value = currentEditingTask.dueDate;
  var chosenPriorityOption = taskPopup.querySelector(".priority-".concat(currentEditingTask.priority ? currentEditingTask.priority : "none"));
  submitPriorityOption(chosenPriorityOption);
  var chosenProjectOption = taskPopup.querySelector(".project-".concat(taskPopup.project));
  if (chosenProjectOption) submitProjectOption(chosenProjectOption);
}
function setCurrentSectionDefaultOptions() {
  var currentSection = getCurrentSection();
  if (currentSection.includes("project-")) submitProjectOption(taskPopup.querySelector(".".concat(currentSection)));else if (currentSection === "today") dateInput.valueAsDate = new Date();
}
function showTaskPopup() {
  setCurrentSectionDefaultOptions();
  if (currentEditingTask) setEditingTaskDefaultOptions();
  taskPopupContainer.style.display = "flex";
  taskPopupContainer.classList.add("visible");
  titleInput.focus();
}
function hideTaskPopup() {
  taskPopupContainer.classList.remove("visible");
  var bodyStyles = window.getComputedStyle(document.body);
  var hideDelay = bodyStyles.getPropertyValue("--task-popup-snap-time");
  var numberOfSeconds = +hideDelay.replace(/[^0-9\.]+/g, "");
  setTimeout(function () {
    taskPopupContainer.style.display = "none";
    resetTaskPopup();
  }, numberOfSeconds * 1000);
}
function resetTaskPopup() {
  taskPopup.reset();
  prioritySelectionButton.classList.remove("p1");
  prioritySelectionButton.classList.remove("p2");
  prioritySelectionButton.classList.remove("p3");
  prioritySelectionButton.classList.remove("pn");
  prioritySelectionButtonImage.src = "flag-outline.svg";
  prioritySelectionButtonText.textContent = "Priority";
  projectSelectionButton.className = "project-button";
  projectSelectionButtonImage.src = "inbox.svg";
  projectSelectionButtonText.textContent = "Inbox";
}
function cancelTaskPopup() {
  hideTaskPopup();
}
function submitTaskPopup(submitFunction) {
  submitFunction(currentEditingTask);
  hideTaskPopup();
}
function editTask(task) {
  currentEditingTask = task;
  showTaskPopup();
}
function openDropdown(dropdownElement) {
  dropdownElement.classList.add("visible");
}
function closeDropdown(dropdownElement) {
  dropdownElement.classList.remove("visible");
}
function submitPriorityOption(pickedOption) {
  prioritySelectionButton.classList.remove("p1");
  prioritySelectionButton.classList.remove("p2");
  prioritySelectionButton.classList.remove("p3");
  prioritySelectionButton.classList.remove("pn");
  if (pickedOption.classList.contains("priority-1")) {
    prioritySelectionButton.classList.add("p1");
    prioritySelectionButtonImage.src = "flag.svg";
    prioritySelectionButtonText.textContent = "P1";
  } else if (pickedOption.classList.contains("priority-2")) {
    prioritySelectionButton.classList.add("p2");
    prioritySelectionButtonImage.src = "flag.svg";
    prioritySelectionButtonText.textContent = "P2";
  } else if (pickedOption.classList.contains("priority-3")) {
    prioritySelectionButton.classList.add("p3");
    prioritySelectionButtonImage.src = "flag.svg";
    prioritySelectionButtonText.textContent = "P3";
  } else if (pickedOption.classList.contains("priority-none")) {
    prioritySelectionButton.classList.add("pn");
    prioritySelectionButtonImage.src = "flag-outline.svg";
    prioritySelectionButtonText.textContent = "None";
  }
}
function submitProjectOption(pickedOption) {
  var pickedOptionText = pickedOption.querySelector(".text");
  var pickedOptionImgSrc = pickedOption.querySelector("img").src;
  projectSelectionButtonText.textContent = pickedOptionText.textContent;
  projectSelectionButtonImage.src = pickedOptionImgSrc;
  projectSelectionButton.className = pickedOption.className.replace("dropdown-option", "project-button");
}
function initializePrioritySelection() {
  taskPopup.addEventListener("click", function () {
    closeDropdown(priorityDropdown);
  });
  taskPopupContainer.addEventListener("click", function () {
    closeDropdown(priorityDropdown);
  });
  prioritySelectionButton.addEventListener("click", function (event) {
    openDropdown(priorityDropdown);
    closeDropdown(projectDropdown);
    event.stopPropagation();
  });
  priorityDropdown.addEventListener("click", function (event) {
    event.stopPropagation;
  });
  priorityDropdownOptions.forEach(function (option) {
    return option.addEventListener("click", function () {
      submitPriorityOption(option);
    });
  });
}
function initializeProjectSelection() {
  taskPopup.addEventListener("click", function () {
    closeDropdown(projectDropdown);
  });
  taskPopupContainer.addEventListener("click", function () {
    closeDropdown(projectDropdown);
  });
  projectSelectionButton.addEventListener("click", function (event) {
    openDropdown(projectDropdown);
    closeDropdown(priorityDropdown);
    event.stopPropagation();
  });
  projectDropdown.addEventListener("click", function (event) {
    event.stopPropagation;
  });
  projectDropdownOptions.forEach(function (option) {
    return option.addEventListener("click", function () {
      submitProjectOption(option);
    });
  });
}
function getProjectDropdownOptionHTML(project) {
  return "\n  <div class=\"dropdown-option project-".concat(project.id, "\">\n    <img src=\"list-box.svg\" alt=\"project\">\n    <div class=\"text\">").concat(project.title, "</div>\n  </div>");
}
function createNewProjectDropdownOption(project) {
  var newDropdownOption = document.createElement("div");
  projectDropdown.appendChild(newDropdownOption);
  newDropdownOption.outerHTML = getProjectDropdownOptionHTML(project);
  newDropdownOption = document.querySelector(".task-popup .project-select .project-".concat(project.id));
  newDropdownOption.addEventListener("click", function () {
    submitProjectOption(newDropdownOption);
  });
}
function initializeTaskPopup(submitFunction, cancelFunction, getCurrentSectionFunction) {
  getCurrentSection = getCurrentSectionFunction;
  addTaskButtons.forEach(function (taskButton) {
    return taskButton.addEventListener("click", function () {
      showTaskPopup(null);
    });
  });
  taskPopup.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  taskPopupContainer.addEventListener("click", function () {
    cancelTaskPopup();
    cancelFunction();
  });
  cancelTaskButton.addEventListener("click", function () {
    cancelTaskPopup();
    cancelFunction();
  });
  submitTaskButton.addEventListener("click", function () {
    if (taskPopup.matches(":valid")) submitTaskPopup(submitFunction);
  });
  taskPopup.addEventListener("submit", function () {
    if (taskPopup.matches(":valid")) submitTaskPopup(submitFunction);
  });
  initializePrioritySelection();
  initializeProjectSelection();
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/content/style.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/content/style.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/CodeNextBook.ttf */ "./src/assets/fonts/CodeNextBook.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/CodeNextRegular.ttf */ "./src/assets/fonts/CodeNextRegular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/check.svg */ "./src/assets/images/check.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: CodeNextBook;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: CodeNextRegular;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@keyframes load-logo {\n  0% {\n    width: 0px;\n  }\n  50% {\n    width: calc(0.405 * var(--logo-size));\n  }\n  54% {\n    width: calc(0.405 * var(--logo-size));\n  }\n  100% {\n    width: var(--logo-size);\n  }\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes hide-menu-to-left {\n  0% {\n    transform: translate(0);\n    width: var(--menu-size);\n  }\n  99% {\n    transform: translate(-100%, 0);\n    width: var(--menu-size);\n  }\n  100% {\n    width: 0px;\n  }\n}\n@keyframes show-menu {\n  0% {\n    transform: translate(-100%, 0);\n    width: var(--menu-size);\n  }\n  100% {\n    transform: translate(0);\n    width: var(--menu-size);\n  }\n}\n@keyframes show-popup {\n  0% {\n    transform: translate(0, 100px);\n    opacity: 0;\n    width: calc(var(--task-popup-width) * 0.9);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1;\n    width: var(--task-popup-width);\n  }\n}\n@keyframes hide-popup {\n  0% {\n    transform: translate(0, 0);\n    opacity: 1;\n    width: var(--task-popup-width);\n  }\n  100% {\n    transform: translate(0, 50px);\n    opacity: 0;\n    width: calc(var(--task-popup-width) * 0.9);\n  }\n}\nbody {\n  --loading-screen-hide-delay: 0.7s;\n  --logo-size: min(500px, 90vw);\n  --header-color: #a93d44;\n  --header-size: 60px;\n  --main-bgc: #e9ecef;\n  --header-icon-color: #fafbfb;\n  --menu-bgc: #eae2e5;\n  --menu-size: min(420px, 90vw);\n  --menu-snap-time: 0.2s;\n  --task-popup-width: min(800px, 90vw);\n  --task-popup-snap-time: 0.3s;\n}\n\n@media (max-height: 800px) {\n  body {\n    --logo-size: min(400px, 90vw);\n  }\n}\n@media (min-width: 1200px) {\n  body {\n    --menu-size: min(430px, 90vw);\n  }\n}\n#loading-screen {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 15vh;\n  padding-bottom: 10vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n  animation: fade-out 0.5s ease 4s forwards;\n  background-color: var(--main-bgc);\n  z-index: 10000;\n}\n#loading-screen .logo-container {\n  height: var(--logo-size);\n  width: var(--logo-size);\n}\n#loading-screen .logo-container .loading-logo {\n  height: var(--logo-size);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: var(--logo-size);\n  width: 0px;\n  animation: load-logo 0.5s forwards ease 0.5s;\n}\n#loading-screen .text {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n#loading-screen h1 {\n  margin-bottom: 0;\n  margin-top: 10px;\n  font-size: 2.5rem;\n  letter-spacing: 2px;\n  opacity: 0;\n  animation: fade-in 0.5s forwards ease 1.5s;\n}\n#loading-screen p {\n  margin: 0;\n  font-size: min(1.4rem, 6vw);\n  letter-spacing: 0.5px;\n  opacity: 0;\n  animation: fade-in 0.5s forwards ease 2.5s;\n}\n\n@media (max-height: 800px) {\n  #loading-screen {\n    padding-top: 7vh;\n    gap: 60px;\n  }\n  #loading-screen .text {\n    gap: 20px;\n  }\n}\n@media (min-width: 800px) {\n  #loading-screen {\n    gap: 80px;\n  }\n  #loading-screen .text {\n    gap: 30px;\n  }\n}\nheader {\n  position: sticky;\n  box-sizing: border-box;\n  height: var(--header-size);\n  width: 100vw;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: var(--header-color);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n}\nheader > * {\n  flex: 0 0 auto;\n}\nheader .icon {\n  box-sizing: border-box;\n  height: 40px;\n  border-radius: 7px;\n  cursor: pointer;\n}\nheader .icon:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\nheader .add-icon {\n  padding: 5px;\n}\nheader .search-bar {\n  flex: 0 1 auto;\n  height: 40px;\n  width: 300px;\n  margin-right: auto;\n  border-radius: 7px;\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  background-color: rgba(255, 255, 255, 0.1);\n  transition: all 0.15s;\n  cursor: pointer;\n}\nheader .search-bar:hover, header .search-bar:focus-within {\n  background-color: #fffafa;\n}\nheader .search-bar:hover .icon, header .search-bar:focus-within .icon {\n  filter: invert(100%);\n  background-color: transparent;\n}\nheader .search-bar:hover #search-field, header .search-bar:focus-within #search-field {\n  color: rgb(22, 21, 21);\n}\nheader .search-bar:focus-within {\n  width: 600px;\n}\nheader .search-bar #search-field {\n  flex: 1 1 0;\n  width: 0;\n  border: none;\n  outline: none;\n  font-size: 1.2rem;\n  color: var(--header-icon-color);\n  caret-color: black;\n  background-color: transparent;\n}\n\n@media (min-width: 1200px) {\n  header {\n    gap: 15px;\n  }\n}\n#menu {\n  position: fixed;\n  box-sizing: border-box;\n  width: var(--menu-size);\n  height: calc(100vh - var(--header-size));\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 60px;\n  background-color: var(--menu-bgc);\n  overflow: hidden;\n  z-index: 500;\n}\n#menu.hidden {\n  animation: hide-menu-to-left var(--menu-snap-time) cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n#menu:not(.hidden) {\n  animation: show-menu var(--menu-snap-time) cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n#menu .icon {\n  height: 25px;\n}\n#menu .icon.plus-icon {\n  filter: invert(100%);\n}\n#menu .tasks-sections,\n#menu .projects-sections {\n  width: 90%;\n}\n#menu .tasks-sections,\n#menu .projects-sections,\n#menu .projects-sections .projects {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n#menu .task-section,\n#menu .project-section,\n#menu .add-project {\n  box-sizing: border-box;\n  width: 100%;\n  height: 50px;\n  border-radius: 6px;\n  padding-left: 10px;\n  padding-right: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n#menu .task-section:hover, #menu .task-section.selected,\n#menu .project-section:hover,\n#menu .project-section.selected,\n#menu .add-project:hover,\n#menu .add-project.selected {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n#menu .task-section .title,\n#menu .project-section .title,\n#menu .add-project .title {\n  margin-right: auto;\n}\n#menu .task-section .number-of-tasks,\n#menu .project-section .number-of-tasks,\n#menu .add-project .number-of-tasks {\n  opacity: 0.4;\n  font-weight: normal;\n  margin-right: 4px;\n}\n#menu .project-section .delete-icon {\n  display: none;\n}\n#menu .project-section:hover .number-of-tasks {\n  display: none;\n}\n#menu .project-section:hover .delete-icon {\n  display: block;\n}\n#menu .project-section:hover .delete-icon:hover {\n  filter: brightness(0) saturate(100%);\n}\n#menu .projects-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n#menu .add-project.adding {\n  display: none;\n}\n#menu .add-project.adding + .project-form {\n  display: block;\n}\n#menu .project-form {\n  position: relative;\n  display: none;\n  box-sizing: border-box;\n  width: 100%;\n  height: 90px;\n  border-radius: 6px;\n  padding: 10px;\n  padding-top: 10px;\n  margin-top: 10px;\n  background-color: #ded7d9;\n}\n#menu .project-form input {\n  padding: none;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: #171717;\n  font-size: 1.3rem;\n}\n#menu .project-form input::placeholder {\n  color: #5a5a5a;\n}\n#menu .project-form .submit-buttons {\n  position: absolute;\n  right: 20px;\n  bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  height: 35px;\n}\n#menu .project-form .submit-buttons button {\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 1.3rem;\n  font-weight: bold;\n  border: none;\n  border-radius: 7.5px;\n  cursor: pointer;\n}\n#menu .project-form .submit-buttons .cancel {\n  background-color: #cdcdcd;\n}\n#menu .project-form .submit-buttons .cancel:hover {\n  background-color: #bababa;\n}\n#menu .project-form .submit-buttons .cancel:active {\n  background-color: #b0aeae;\n}\n#menu .project-form .submit-buttons .submit {\n  background-color: #ca5b63;\n  color: white;\n}\n#menu .project-form .submit-buttons .submit:hover {\n  background-color: #ae4a51;\n}\n#menu .project-form .submit-buttons .submit:active {\n  background-color: #a93a42;\n}\n#menu .project-form:invalid .submit-buttons .submit {\n  background-color: rgba(202, 91, 98, 0.6549019608);\n  cursor: not-allowed;\n}\n\nmain#content {\n  box-sizing: border-box;\n  width: calc(100vw - var(--menu-size));\n  height: calc(100vh - var(--header-size));\n  padding-top: 50px;\n  padding-left: 10vw;\n  padding-right: 10vw;\n  margin-left: var(--menu-size);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  transition: all var(--menu-snap-time);\n  overflow: scroll;\n  z-index: 200;\n}\nmain#content .content-title {\n  font-size: 2rem;\n  font-weight: bold;\n  font-family: CodeNextRegular, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n#menu.hidden + main#content {\n  padding-left: 20vw;\n  padding-right: 20vw;\n}\n\n.tasks {\n  width: 100%;\n  height: 100%;\n}\n.tasks .task-card {\n  /* #region  priority based checkmark coloring */\n  /* #endregion */\n  position: relative;\n  width: 100%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid rgb(213, 213, 213);\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  transition: all 0.1s ease-out;\n}\n.tasks .task-card.p1 {\n  --checkbox-color: #a93d44;\n  --checkbox-bgc: #d8bdc2;\n  --checkbox-light-bgc: #e1d5d8;\n  --check-color-filter: invert(25%) sepia(67%) saturate(1617%)\n    hue-rotate(327deg) brightness(91%) contrast(81%);\n}\n.tasks .task-card.p2 {\n  --checkbox-color: #fb8909;\n  --checkbox-bgc: #e9ddcd;\n  --checkbox-light-bgc: #eae4dd;\n  --check-color-filter: invert(71%) sepia(47%) saturate(7495%)\n    hue-rotate(10deg) brightness(106%) contrast(93%);\n}\n.tasks .task-card.p3 {\n  --checkbox-color: #246fe0;\n  --checkbox-bgc: #c1d2ec;\n  --checkbox-light-bgc: #d2ddee;\n  --check-color-filter: invert(41%) sepia(56%) saturate(1480%)\n    hue-rotate(194deg) brightness(85%) contrast(108%);\n}\n.tasks .task-card.pn {\n  --checkbox-color: #9ba1a7;\n  --checkbox-bgc: #d8dbdf;\n  --checkbox-light-bgc: #e1e5e8;\n  --check-color-filter: invert(65%) sepia(12%) saturate(166%)\n    hue-rotate(169deg) brightness(96%) contrast(90%);\n}\n.tasks .task-card .icon {\n  display: none;\n  height: 30px;\n  padding: 2.5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.tasks .task-card .icon:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n  filter: brightness(0) saturate(100%) invert(20%) sepia(5%) saturate(1101%) hue-rotate(169deg) brightness(101%) contrast(94%);\n}\n.tasks .task-card:hover .icon {\n  display: block;\n}\n.tasks .task-card .icons {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n  right: 0;\n  top: 20px;\n}\n.tasks .task-card .checkbox {\n  position: relative;\n  flex-shrink: 0;\n  display: block;\n  box-sizing: border-box;\n  width: 25px;\n  height: 25px;\n  margin-top: 5px;\n  border-radius: 1000px;\n  border: 2px solid var(--checkbox-color);\n  background-color: var(--checkbox-light-bgc);\n  cursor: pointer;\n  transition: all 0.1s ease-out;\n}\n.tasks .task-card .checkbox input {\n  appearance: none;\n  -webkit-appearance: none;\n  height: 0;\n  width: 0;\n}\n.tasks .task-card .checkbox .check {\n  position: absolute;\n  width: 80%;\n  height: 80%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  filter: var(--check-color-filter);\n  opacity: 0;\n  transition: opacity 0.1s ease-out;\n}\n.tasks .task-card .checkbox:hover {\n  background-color: var(--checkbox-bgc);\n}\n.tasks .task-card .checkbox:hover .check {\n  opacity: 1;\n}\n.tasks .task-card .data {\n  max-width: calc(100% - 120px);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.tasks .task-card .data .title {\n  font-size: 1.5rem;\n  letter-spacing: 0.5px;\n  font-weight: bold;\n}\n.tasks .task-card .data .description {\n  flex: 0 0 auto;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 1.2rem;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #636262;\n}\n.tasks .task-card .data .due-date {\n  margin-top: 5px;\n  font-size: 1.3rem;\n  letter-spacing: 2px;\n}\n.tasks .add-task {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 20px;\n  font-size: 1.2rem;\n  color: #636262;\n  cursor: pointer;\n}\n.tasks .add-task .add-circle {\n  position: relative;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n}\n.tasks .add-task img.icon {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  height: 80%;\n  width: 80%;\n  filter: brightness(0) saturate(100%) invert(25%) sepia(67%) saturate(1617%) hue-rotate(327deg) brightness(91%) contrast(81%);\n}\n.tasks .add-task:hover {\n  color: #cc2530;\n}\n.tasks .add-task:hover .add-circle {\n  background-color: #cd3e47;\n}\n.tasks .add-task:hover img.icon {\n  filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(20deg) brightness(103%) contrast(101%);\n}\n\n#menu.hidden + main#content {\n  margin-left: 0;\n  width: 100vw;\n}\n\n@media (max-width: 800px) {\n  main#content {\n    margin-left: 0;\n    gap: 10px;\n  }\n  #menu:not(.hidden) + main#content {\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100vw;\n  }\n  #menu:not(.hidden) + main#content .tasks .task-card {\n    border-color: #5e5f63;\n  }\n  #menu.hidden + main#content {\n    padding-left: 10vw;\n    padding-right: 2vw;\n  }\n  .tasks .task-card {\n    padding-bottom: 10px;\n  }\n  .tasks .task-card .data {\n    gap: 7px;\n  }\n  .tasks .task-card .data .title {\n    font-size: 1.1rem;\n  }\n  .tasks .task-card .data .description {\n    font-size: 0.9rem;\n  }\n  .tasks .task-card .data .due-date {\n    font-size: 1rem;\n    margin-top: 10px;\n    letter-spacing: 1px;\n  }\n}\n.task-popup-container {\n  display: none;\n  justify-content: center;\n  align-items: start;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 700;\n}\n.task-popup-container.visible {\n  display: flex;\n}\n.task-popup-container.visible .task-popup {\n  animation: show-popup var(--task-popup-snap-time) ease-out forwards;\n}\n.task-popup-container:not(.visible) .task-popup {\n  animation: hide-popup var(--task-popup-snap-time) ease-in forwards;\n}\n\n.task-popup {\n  box-sizing: border-box;\n  margin-top: 200px;\n  border-radius: 20px;\n  background-color: #fff;\n  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;\n}\n.task-popup .data {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 25px;\n  border-bottom: 1px solid #cecccc;\n}\n.task-popup .data .title {\n  font-size: 1.6rem;\n  font-weight: 600;\n}\n.task-popup .data .description {\n  width: 100%;\n  max-height: min(500px, 100vh - 470px);\n  font-size: 1.05rem;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  resize: none;\n  margin-bottom: 15px;\n}\n.task-popup .data .title,\n.task-popup .data .description {\n  padding: none;\n  border: none;\n  outline: none;\n  color: #171717;\n}\n.task-popup .data .title::placeholder,\n.task-popup .data .description::placeholder {\n  color: #6f6f6f;\n}\n.task-popup .extra-fields {\n  height: 30px;\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  color: #6f6f6f;\n}\n.task-popup .extra-fields .flag-icon {\n  width: 22px;\n  height: 22px;\n  filter: var(--color-filter);\n}\n.task-popup .extra-fields .dropdown-flag-icon {\n  width: 30px;\n  height: 30px;\n}\n.task-popup .extra-fields .date-picker {\n  border-radius: 5px;\n  border: 1px solid #c1c1c1;\n  outline: none;\n  color: #636363;\n  font-size: 0.9rem;\n}\n.task-popup .extra-fields .priority-select {\n  --color-filter: invert(52%) sepia(1%) saturate(0%) hue-rotate(278deg)\n    brightness(93%) contrast(85%);\n  position: relative;\n}\n.task-popup .extra-fields .priority-button {\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  padding-left: 8px;\n  padding-right: 8px;\n  border-radius: 5px;\n  border: 1px solid #c1c1c1;\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  align-items: center;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.task-popup .extra-fields .date-picker,\n.task-popup .extra-fields .priority-button {\n  cursor: pointer;\n}\n.task-popup .extra-fields .date-picker:hover,\n.task-popup .extra-fields .priority-button:hover {\n  background-color: #ededed;\n}\n.task-popup .extra-fields .priority-dropdown {\n  display: none;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  transform: translate(-25%, 100%);\n  z-index: 701;\n}\n.task-popup .extra-fields .priority-dropdown.visible {\n  width: 200px;\n  border: 1px solid #cecccc;\n  border-radius: 7.5px;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n}\n.task-popup .extra-fields .priority-dropdown .dropdown-option {\n  box-sizing: border-box;\n  height: 50px;\n  padding: 15px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: black;\n  cursor: pointer;\n}\n.task-popup .extra-fields .priority-dropdown .dropdown-option:hover {\n  background-color: #e2e2e2;\n}\n.task-popup .extra-fields .priority-dropdown .dropdown-option img.icon {\n  filter: var(--color-filter);\n}\n.task-popup .bottom-ribbon {\n  height: 100px;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n.task-popup .bottom-ribbon .project-select {\n  position: relative;\n}\n.task-popup .bottom-ribbon .project-button {\n  padding: 10px;\n  border: none;\n  background-color: transparent;\n  border-radius: 7.5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 5px;\n  color: #777777;\n  font-size: 1.1rem;\n  font-weight: bold;\n  cursor: pointer;\n}\n.task-popup .bottom-ribbon .project-button img,\n.task-popup .bottom-ribbon .project-button svg {\n  height: 20px;\n}\n.task-popup .bottom-ribbon .project-button:hover {\n  color: black;\n  background-color: #e2e2e2;\n}\n.task-popup .bottom-ribbon .project-button:active {\n  background-color: #d6d6d6;\n}\n.task-popup .bottom-ribbon .project-dropdown {\n  display: none;\n  overflow: scroll;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  transform: translate(-22.5%, 100%);\n  max-height: 210px;\n  z-index: 701;\n}\n.task-popup .bottom-ribbon .project-dropdown.visible {\n  width: 200px;\n  border: 1px solid #cecccc;\n  border-radius: 7.5px;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n}\n.task-popup .bottom-ribbon .project-dropdown .dropdown-option {\n  box-sizing: border-box;\n  height: 50px;\n  padding: 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: black;\n  cursor: pointer;\n}\n.task-popup .bottom-ribbon .project-dropdown .dropdown-option:hover {\n  background-color: #e2e2e2;\n}\n.task-popup .bottom-ribbon .project-dropdown .dropdown-option .text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.task-popup .bottom-ribbon .project-dropdown .dropdown-option img {\n  filter: var(--color-filter);\n  height: 25px;\n  width: 25px;\n}\n.task-popup .bottom-ribbon .submition-buttons {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  height: 50px;\n}\n.task-popup .bottom-ribbon .submition-buttons button {\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 1.3rem;\n  font-weight: bold;\n  border: none;\n  border-radius: 7.5px;\n  cursor: pointer;\n}\n.task-popup .bottom-ribbon .submition-buttons .cancel {\n  background-color: #e2e2e2;\n}\n.task-popup .bottom-ribbon .submition-buttons .cancel:hover {\n  background-color: #d6d6d6;\n}\n.task-popup .bottom-ribbon .submition-buttons .cancel:active {\n  background-color: #c1c1c1;\n}\n.task-popup .bottom-ribbon .submition-buttons .submit {\n  background-color: #c5444c;\n  color: white;\n}\n.task-popup .bottom-ribbon .submition-buttons .submit:hover {\n  background-color: #a93d44;\n}\n.task-popup .bottom-ribbon .submition-buttons .submit:active {\n  background-color: #a1363d;\n}\n\n.task-popup:invalid .bottom-ribbon .submition-buttons .submit {\n  background-color: rgba(197, 68, 77, 0.6431372549);\n  cursor: not-allowed;\n}\n\n.p1 {\n  --color-filter: invert(32%) sepia(38%) saturate(1159%) hue-rotate(309deg)\n    brightness(92%) contrast(93%);\n}\n\n.p2 {\n  --color-filter: invert(52%) sepia(61%) saturate(1255%) hue-rotate(357deg)\n    brightness(101%) contrast(97%);\n}\n\n.p3 {\n  --color-filter: invert(40%) sepia(13%) saturate(5038%) hue-rotate(188deg)\n    brightness(94%) contrast(106%);\n}\n\n.pn {\n  --color-filter: invert(52%) sepia(1%) saturate(0%) hue-rotate(278deg)\n    brightness(93%) contrast(85%);\n}\n\n@media (max-width: 500px) {\n  .task-popup .bottom-ribbon {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n  .task-popup .bottom-ribbon .project-button {\n    box-sizing: border-box;\n    height: 50px;\n    padding: 8px;\n    gap: 5px;\n  }\n  .task-popup .bottom-ribbon .project-button .text {\n    max-width: 6ch;\n    overflow: hidden;\n  }\n  .task-popup .bottom-ribbon .project-dropdown {\n    transform: translate(-15%, 100%);\n  }\n  .task-popup .bottom-ribbon .submition-buttons {\n    gap: 10px;\n  }\n  .task-popup .bottom-ribbon .submition-buttons button {\n    padding-left: 10px;\n    padding-right: 10px;\n    font-size: 1rem;\n  }\n}\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: CodeNextBook, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: var(--main-bgc);\n}\n\ninput,\ntextarea {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/styles/abstracts/assets.scss","webpack://./src/styles/content/style.scss","webpack://./src/styles/abstracts/custom-properties.scss","webpack://./src/styles/content/loading-screen.scss","webpack://./src/styles/content/header.scss","webpack://./src/styles/content/menu.scss","webpack://./src/styles/content/content.scss","webpack://./src/styles/content/task-popup.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: CodeNextBook;\n  src: url(../../assets/fonts/CodeNextBook.ttf);\n}\n@font-face {\n  font-family: CodeNextRegular;\n  src: url(../../assets/fonts/CodeNextRegular.ttf);\n}\n@keyframes load-logo {\n  0% {\n    width: 0px;\n  }\n  50% {\n    width: calc(0.405 * var(--logo-size));\n  }\n  54% {\n    width: calc(0.405 * var(--logo-size));\n  }\n  100% {\n    width: var(--logo-size);\n  }\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes hide-menu-to-left {\n  0% {\n    transform: translate(0);\n    width: var(--menu-size);\n  }\n  99% {\n    transform: translate(-100%, 0);\n    width: var(--menu-size);\n  }\n  100% {\n    width: 0px;\n  }\n}\n@keyframes show-menu {\n  0% {\n    transform: translate(-100%, 0);\n    width: var(--menu-size);\n  }\n  100% {\n    transform: translate(0);\n    width: var(--menu-size);\n  }\n}\n@keyframes show-popup {\n  0% {\n    transform: translate(0, 100px);\n    opacity: 0;\n    width: calc(var(--task-popup-width) * 0.9);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1;\n    width: var(--task-popup-width);\n  }\n}\n@keyframes hide-popup {\n  0% {\n    transform: translate(0, 0);\n    opacity: 1;\n    width: var(--task-popup-width);\n  }\n  100% {\n    transform: translate(0, 50px);\n    opacity: 0;\n    width: calc(var(--task-popup-width) * 0.9);\n  }\n}\n","@use \"../abstracts\";\n@use \"./loading-screen.scss\";\n@use \"./header.scss\";\n@use \"./menu.scss\";\n@use \"./content.scss\";\n@use \"./task-popup.scss\";\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-family: CodeNextBook, system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  background-color: var(--main-bgc);\n}\ninput,\ntextarea {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n","body {\n  --loading-screen-hide-delay: 0.7s;\n  --logo-size: min(500px, 90vw);\n  --header-color: #a93d44;\n  --header-size: 60px;\n  --main-bgc: #e9ecef;\n  --header-icon-color: #fafbfb;\n  // the color for icons will be edited in the svg directly with fill\n  --menu-bgc: #eae2e5;\n  --menu-size: min(420px, 90vw);\n  --menu-snap-time: 0.2s;\n  --task-popup-width: min(800px, 90vw);\n  --task-popup-snap-time: 0.3s;\n}\n\n@media (max-height: 800px) {\n  body {\n    --logo-size: min(400px, 90vw);\n  }\n}\n@media (min-width: 1200px) {\n  body {\n    --menu-size: min(430px, 90vw);\n  }\n}\n","@use \"../abstracts\" as *;\n\n#loading-screen {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 15vh;\n\n  padding-bottom: 10vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n\n  animation: fade-out 0.5s ease 4s forwards;\n  background-color: var(--main-bgc);\n  z-index: 10000;\n  .logo-container {\n    height: var(--logo-size);\n    width: var(--logo-size);\n    .loading-logo {\n      height: var(--logo-size);\n      background-image: url(../../assets/images/check.svg);\n      background-size: var(--logo-size);\n      width: 0px;\n      animation: load-logo 0.5s forwards ease 0.5s;\n    }\n  }\n  .text {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n  }\n  h1 {\n    margin-bottom: 0;\n    margin-top: 10px;\n    font-size: 2.5rem;\n    letter-spacing: 2px;\n\n    opacity: 0;\n    animation: fade-in 0.5s forwards ease 1.5s;\n  }\n  p {\n    margin: 0;\n    font-size: min(1.4rem, 6vw);\n    letter-spacing: 0.5px;\n\n    opacity: 0;\n    animation: fade-in 0.5s forwards ease 2.5s;\n  }\n}\n\n@media (max-height: 800px) {\n  #loading-screen {\n    padding-top: 7vh;\n    gap: 60px;\n    .text {\n      gap: 20px;\n    }\n  }\n}\n@media (min-width: 800px) {\n  #loading-screen {\n    gap: 80px;\n    .text {\n      gap: 30px;\n    }\n  }\n}\n","@use \"../abstracts\" as *;\nheader {\n  position: sticky;\n  box-sizing: border-box;\n  height: var(--header-size);\n  width: 100vw;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: var(--header-color);\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n\n  & > * {\n    flex: 0 0 auto;\n  }\n\n  .icon {\n    box-sizing: border-box;\n    height: 40px;\n    border-radius: 7px;\n    cursor: pointer;\n    &:hover {\n      background-color: rgba(256, 256, 256, 0.1);\n    }\n  }\n  .add-icon {\n    padding: 5px;\n  }\n  .search-bar {\n    flex: 0 1 auto;\n    height: 40px;\n    width: 300px;\n    margin-right: auto;\n    border-radius: 7px;\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n    background-color: rgba(256, 256, 256, 0.1);\n    transition: all 0.15s;\n    cursor: pointer;\n    &:hover,\n    &:focus-within {\n      background-color: #fffafa;\n      .icon {\n        filter: invert(100%);\n        background-color: transparent;\n      }\n      #search-field {\n        color: rgb(22, 21, 21);\n      }\n    }\n    &:focus-within {\n      width: 600px;\n    }\n    #search-field {\n      flex: 1 1 0;\n      width: 0;\n      border: none;\n      outline: none;\n      font-size: 1.2rem;\n      color: var(--header-icon-color);\n      caret-color: black;\n      background-color: transparent;\n    }\n  }\n}\n\n@media (min-width: 1200px) {\n  header {\n    gap: 15px;\n  }\n}\n","@use \"../abstracts\" as *;\n#menu {\n  position: fixed;\n  box-sizing: border-box;\n  width: var(--menu-size);\n  height: calc(100vh - var(--header-size));\n  padding-top: 50px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 60px;\n\n  background-color: var(--menu-bgc);\n  overflow: hidden;\n  z-index: 500;\n\n  &.hidden {\n    animation: hide-menu-to-left var(--menu-snap-time)\n      cubic-bezier(0.4, 0, 0.2, 1) forwards;\n  }\n  &:not(.hidden) {\n    animation: show-menu var(--menu-snap-time) cubic-bezier(0.4, 0, 0.2, 1)\n      forwards;\n  }\n\n  .icon {\n    height: 25px;\n\n    &.plus-icon {\n      filter: invert(100%);\n    }\n  }\n  .tasks-sections,\n  .projects-sections {\n    width: 90%;\n  }\n  .tasks-sections,\n  .projects-sections,\n  .projects-sections .projects {\n    display: flex;\n    flex-direction: column;\n    gap: 0;\n  }\n  .task-section,\n  .project-section,\n  .add-project {\n    box-sizing: border-box;\n    width: 100%;\n    height: 50px;\n    border-radius: 6px;\n    padding-left: 10px;\n    padding-right: 10px;\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 12px;\n\n    font-weight: 600;\n    cursor: pointer;\n\n    &:hover,\n    &.selected {\n      background-color: rgba($color: black, $alpha: 0.05);\n    }\n    .title {\n      margin-right: auto;\n    }\n    .number-of-tasks {\n      opacity: 0.4;\n      font-weight: normal;\n      margin-right: 4px;\n    }\n  }\n  .project-section {\n    .delete-icon {\n      display: none;\n    }\n    &:hover {\n      .number-of-tasks {\n        display: none;\n      }\n      .delete-icon {\n        display: block;\n        &:hover {\n          filter: brightness(0) saturate(100%);\n        }\n      }\n    }\n  }\n  .projects-title {\n    font-size: 1.5rem;\n    font-weight: bold;\n    margin-bottom: 10px;\n  }\n  .add-project.adding {\n    display: none;\n    + .project-form {\n      display: block;\n    }\n  }\n  .project-form {\n    position: relative;\n    display: none;\n    box-sizing: border-box;\n    width: 100%;\n    height: 90px;\n    border-radius: 6px;\n    padding: 10px;\n    padding-top: 10px;\n    margin-top: 10px;\n    background-color: #ded7d9;\n    input {\n      padding: none;\n      border: none;\n      outline: none;\n      background-color: transparent;\n      color: #171717;\n      font-size: 1.3rem;\n      &::placeholder {\n        color: #5a5a5a;\n      }\n    }\n    .submit-buttons {\n      position: absolute;\n      right: 20px;\n      bottom: 10px;\n      display: flex;\n      flex-direction: row;\n      gap: 15px;\n      height: 35px;\n      button {\n        padding-left: 12px;\n        padding-right: 12px;\n        font-size: 1.3rem;\n        font-weight: bold;\n        border: none;\n        border-radius: 7.5px;\n        cursor: pointer;\n      }\n      .cancel {\n        background-color: #cdcdcd;\n        &:hover {\n          background-color: #bababa;\n        }\n        &:active {\n          background-color: #b0aeae;\n        }\n      }\n      .submit {\n        background-color: #ca5b63;\n        color: white;\n        &:hover {\n          background-color: #ae4a51;\n        }\n        &:active {\n          background-color: #a93a42;\n        }\n      }\n    }\n    &:invalid .submit-buttons .submit {\n      background-color: #ca5b62a7;\n      cursor: not-allowed;\n    }\n  }\n}\n","@use \"../abstracts\" as *;\nmain#content {\n  box-sizing: border-box;\n  width: calc(100vw - var(--menu-size));\n  height: calc(100vh - var(--header-size));\n  padding-top: 50px;\n  padding-left: 10vw;\n  padding-right: 10vw;\n  margin-left: var(--menu-size);\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  transition: all var(--menu-snap-time);\n  overflow: scroll;\n  z-index: 200;\n  .content-title {\n    font-size: 2rem;\n    font-weight: bold;\n    font-family: CodeNextRegular, system-ui, -apple-system, BlinkMacSystemFont,\n      \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\",\n      \"Helvetica Neue\", sans-serif;\n  }\n}\n\n#menu.hidden + main#content {\n  padding-left: 20vw;\n  padding-right: 20vw;\n}\n\n.tasks {\n  width: 100%;\n  height: 100%;\n  .task-card {\n    /* #region  priority based checkmark coloring */\n    &.p1 {\n      --checkbox-color: #a93d44;\n      --checkbox-bgc: #d8bdc2;\n      --checkbox-light-bgc: #e1d5d8;\n      --check-color-filter: invert(25%) sepia(67%) saturate(1617%)\n        hue-rotate(327deg) brightness(91%) contrast(81%);\n    }\n    &.p2 {\n      --checkbox-color: #fb8909;\n      --checkbox-bgc: #e9ddcd;\n      --checkbox-light-bgc: #eae4dd;\n      --check-color-filter: invert(71%) sepia(47%) saturate(7495%)\n        hue-rotate(10deg) brightness(106%) contrast(93%);\n    }\n    &.p3 {\n      --checkbox-color: #246fe0;\n      --checkbox-bgc: #c1d2ec;\n      --checkbox-light-bgc: #d2ddee;\n      --check-color-filter: invert(41%) sepia(56%) saturate(1480%)\n        hue-rotate(194deg) brightness(85%) contrast(108%);\n    }\n    &.pn {\n      --checkbox-color: #9ba1a7;\n      --checkbox-bgc: #d8dbdf;\n      --checkbox-light-bgc: #e1e5e8;\n      --check-color-filter: invert(65%) sepia(12%) saturate(166%)\n        hue-rotate(169deg) brightness(96%) contrast(90%);\n    }\n    /* #endregion */\n    position: relative;\n    width: 100%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid rgb(213, 213, 213);\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    transition: all 0.1s ease-out;\n    .icon {\n      display: none;\n      height: 30px;\n      padding: 2.5px;\n      border-radius: 5px;\n      cursor: pointer;\n\n      &:hover {\n        background-color: rgba($color: #000000, $alpha: 0.075);\n        filter: brightness(0) saturate(100%) invert(20%) sepia(5%)\n          saturate(1101%) hue-rotate(169deg) brightness(101%) contrast(94%);\n      }\n    }\n    &:hover .icon {\n      display: block;\n    }\n    .icons {\n      position: absolute;\n      display: flex;\n      flex-direction: row;\n      gap: 0;\n      right: 0;\n      top: 20px;\n    }\n    .checkbox {\n      position: relative;\n      flex-shrink: 0;\n      display: block;\n      box-sizing: border-box;\n      width: 25px;\n      height: 25px;\n      margin-top: 5px;\n      border-radius: 1000px;\n      border: 2px solid var(--checkbox-color);\n      background-color: var(--checkbox-light-bgc);\n      cursor: pointer;\n      transition: all 0.1s ease-out;\n      input {\n        appearance: none;\n        -webkit-appearance: none;\n        height: 0;\n        width: 0;\n      }\n      .check {\n        position: absolute;\n        width: 80%;\n        height: 80%;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        filter: var(--check-color-filter);\n        opacity: 0;\n        transition: opacity 0.1s ease-out;\n      }\n      &:hover {\n        background-color: var(--checkbox-bgc);\n        .check {\n          opacity: 1;\n        }\n      }\n    }\n    .data {\n      max-width: calc(100% - 120px);\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n      .title {\n        font-size: 1.5rem;\n        letter-spacing: 0.5px;\n        font-weight: bold;\n      }\n      .description {\n        flex: 0 0 auto;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        font-size: 1.2rem;\n        width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        color: #636262;\n      }\n      .due-date {\n        margin-top: 5px;\n        font-size: 1.3rem;\n        letter-spacing: 2px;\n      }\n    }\n  }\n  .add-task {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 20px;\n\n    font-size: 1.2rem;\n    color: #636262;\n    cursor: pointer;\n    .add-circle {\n      position: relative;\n      border-radius: 50%;\n      width: 25px;\n      height: 25px;\n    }\n    img.icon {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      height: 80%;\n      width: 80%;\n      filter: brightness(0) saturate(100%) invert(25%) sepia(67%)\n        saturate(1617%) hue-rotate(327deg) brightness(91%) contrast(81%);\n    }\n    &:hover {\n      color: #cc2530;\n      .add-circle {\n        background-color: #cd3e47;\n      }\n      img.icon {\n        filter: brightness(0) saturate(100%) invert(100%) sepia(100%)\n          saturate(0%) hue-rotate(20deg) brightness(103%) contrast(101%);\n      }\n    }\n  }\n}\n\n#menu.hidden + main#content {\n  margin-left: 0;\n  width: 100vw;\n}\n\n@media (max-width: 800px) {\n  main#content {\n    margin-left: 0;\n    gap: 10px;\n  }\n  #menu:not(.hidden) + main#content {\n    background-color: rgba(black, 0.5);\n    width: 100vw;\n    .tasks .task-card {\n      border-color: #5e5f63;\n    }\n  }\n  #menu.hidden + main#content {\n    padding-left: 10vw;\n    padding-right: 2vw;\n  }\n  .tasks .task-card {\n    padding-bottom: 10px;\n    .data {\n      gap: 7px;\n      .title {\n        font-size: 1.1rem;\n      }\n      .description {\n        font-size: 0.9rem;\n      }\n      .due-date {\n        font-size: 1rem;\n        margin-top: 10px;\n        letter-spacing: 1px;\n      }\n    }\n  }\n}\n","@use \"../abstracts\" as *;\n.task-popup-container {\n  display: none;\n  justify-content: center;\n  align-items: start;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 700;\n  &.visible {\n    display: flex;\n    .task-popup {\n      animation: show-popup var(--task-popup-snap-time) ease-out forwards;\n    }\n  }\n  &:not(.visible) {\n    .task-popup {\n      animation: hide-popup var(--task-popup-snap-time) ease-in forwards;\n    }\n  }\n}\n.task-popup {\n  box-sizing: border-box;\n  margin-top: 200px;\n  border-radius: 20px;\n\n  background-color: #fff;\n  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,\n    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;\n\n  .data {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    padding: 25px;\n    border-bottom: 1px solid #cecccc;\n    .title {\n      font-size: 1.6rem;\n      font-weight: 600;\n    }\n    .description {\n      width: 100%;\n      max-height: min(500px, calc(100vh - 470px));\n      font-size: 1.05rem;\n      overflow-x: hidden;\n      overflow-y: scroll;\n      resize: none;\n      margin-bottom: 15px;\n    }\n    .title,\n    .description {\n      padding: none;\n      border: none;\n      outline: none;\n      color: #171717;\n      &::placeholder {\n        color: #6f6f6f;\n      }\n    }\n  }\n  .extra-fields {\n    height: 30px;\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    color: #6f6f6f;\n    .flag-icon {\n      width: 22px;\n      height: 22px;\n      filter: var(--color-filter);\n    }\n    .dropdown-flag-icon {\n      width: 30px;\n      height: 30px;\n    }\n    .date-picker {\n      border-radius: 5px;\n      border: 1px solid #c1c1c1;\n      outline: none;\n      color: #636363;\n      font-size: 0.9rem;\n    }\n    .priority-select {\n      --color-filter: invert(52%) sepia(1%) saturate(0%) hue-rotate(278deg)\n        brightness(93%) contrast(85%);\n      position: relative;\n    }\n    .priority-button {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-left: 8px;\n      padding-right: 8px;\n      border-radius: 5px;\n      border: 1px solid #c1c1c1;\n      display: flex;\n      flex-direction: row;\n      gap: 5px;\n      align-items: center;\n      font-size: 0.9rem;\n      font-weight: 600;\n    }\n    .date-picker,\n    .priority-button {\n      cursor: pointer;\n      &:hover {\n        background-color: #ededed;\n      }\n    }\n    .priority-dropdown {\n      display: none;\n      overflow: hidden;\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      transform: translate(-25%, 100%);\n      z-index: 701;\n      &.visible {\n        width: 200px;\n        border: 1px solid #cecccc;\n        border-radius: 7.5px;\n        display: flex;\n        flex-direction: column;\n        background-color: #fff;\n      }\n      .dropdown-option {\n        box-sizing: border-box;\n        height: 50px;\n        padding: 15px;\n        display: flex;\n        flex-direction: row;\n        gap: 10px;\n\n        font-size: 1.1rem;\n        font-weight: bold;\n        color: black;\n        cursor: pointer;\n        &:hover {\n          background-color: #e2e2e2;\n        }\n        img.icon {\n          filter: var(--color-filter);\n        }\n      }\n    }\n  }\n  .bottom-ribbon {\n    height: 100px;\n    padding-left: 20px;\n    padding-right: 20px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n    .project-select {\n      position: relative;\n    }\n    .project-button {\n      padding: 10px;\n      border: none;\n      background-color: transparent;\n      border-radius: 7.5px;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      gap: 5px;\n      color: #777777;\n      font-size: 1.1rem;\n      font-weight: bold;\n      cursor: pointer;\n      img,\n      svg {\n        height: 20px;\n      }\n      &:hover {\n        color: black;\n        background-color: #e2e2e2;\n      }\n      &:active {\n        background-color: #d6d6d6;\n      }\n    }\n    .project-dropdown {\n      display: none;\n      overflow: scroll;\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      transform: translate(-22.5%, 100%);\n      max-height: 210px;\n      z-index: 701;\n      &.visible {\n        width: 200px;\n        border: 1px solid #cecccc;\n        border-radius: 7.5px;\n        display: flex;\n        flex-direction: column;\n        background-color: #fff;\n      }\n      .dropdown-option {\n        box-sizing: border-box;\n        height: 50px;\n        padding: 15px;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        gap: 10px;\n\n        font-size: 1.1rem;\n        font-weight: bold;\n        color: black;\n        cursor: pointer;\n        &:hover {\n          background-color: #e2e2e2;\n        }\n        .text {\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        img {\n          filter: var(--color-filter);\n          height: 25px;\n          width: 25px;\n        }\n      }\n    }\n    .submition-buttons {\n      display: flex;\n      flex-direction: row;\n      gap: 20px;\n      height: 50px;\n      button {\n        padding-left: 15px;\n        padding-right: 15px;\n        font-size: 1.3rem;\n        font-weight: bold;\n        border: none;\n        border-radius: 7.5px;\n        cursor: pointer;\n      }\n      .cancel {\n        background-color: #e2e2e2;\n        &:hover {\n          background-color: #d6d6d6;\n        }\n        &:active {\n          background-color: #c1c1c1;\n        }\n      }\n      .submit {\n        background-color: #c5444c;\n        color: white;\n        &:hover {\n          background-color: #a93d44;\n        }\n        &:active {\n          background-color: #a1363d;\n        }\n      }\n    }\n  }\n}\n.task-popup:invalid .bottom-ribbon .submition-buttons .submit {\n  background-color: #c5444da4;\n  cursor: not-allowed;\n}\n.p1 {\n  --color-filter: invert(32%) sepia(38%) saturate(1159%) hue-rotate(309deg)\n    brightness(92%) contrast(93%);\n}\n.p2 {\n  --color-filter: invert(52%) sepia(61%) saturate(1255%) hue-rotate(357deg)\n    brightness(101%) contrast(97%);\n}\n.p3 {\n  --color-filter: invert(40%) sepia(13%) saturate(5038%) hue-rotate(188deg)\n    brightness(94%) contrast(106%);\n}\n.pn {\n  --color-filter: invert(52%) sepia(1%) saturate(0%) hue-rotate(278deg)\n    brightness(93%) contrast(85%);\n}\n@media (max-width: 500px) {\n  .task-popup {\n    .bottom-ribbon {\n      padding-left: 15px;\n      padding-right: 15px;\n      .project-button {\n        box-sizing: border-box;\n        height: 50px;\n        padding: 8px;\n        gap: 5px;\n        .text {\n          max-width: 6ch;\n          overflow: hidden;\n        }\n      }\n      .project-dropdown {\n        transform: translate(-15%, 100%);\n      }\n      .submition-buttons {\n        gap: 10px;\n        button {\n          padding-left: 10px;\n          padding-right: 10px;\n          font-size: 1rem;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/content/style.scss":
/*!***************************************!*\
  !*** ./src/styles/content/style.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/content/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/assets/fonts/CodeNextBook.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/CodeNextBook.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "CodeNextBook.ttf";

/***/ }),

/***/ "./src/assets/fonts/CodeNextRegular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/CodeNextRegular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "CodeNextRegular.ttf";

/***/ }),

/***/ "./src/assets/images/check.svg":
/*!*************************************!*\
  !*** ./src/assets/images/check.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "check.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.961d29697e1757e0b076.js.map