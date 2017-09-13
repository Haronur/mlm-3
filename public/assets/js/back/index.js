(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/asus/web/web4/node_modules/babel-runtime/core-js/object/define-property.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":"/home/asus/web/web4/node_modules/core-js/library/fn/object/define-property.js"}],"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":"/home/asus/web/web4/node_modules/babel-runtime/core-js/object/define-property.js"}],"/home/asus/web/web4/node_modules/core-js/library/fn/object/define-property.js":[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":"/home/asus/web/web4/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.define-property":"/home/asus/web/web4/node_modules/core-js/library/modules/es6.object.define-property.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_a-function.js":[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_an-object.js":[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":"/home/asus/web/web4/node_modules/core-js/library/modules/_is-object.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_core.js":[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_ctx.js":[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":"/home/asus/web/web4/node_modules/core-js/library/modules/_a-function.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js":[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":"/home/asus/web/web4/node_modules/core-js/library/modules/_fails.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_dom-create.js":[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":"/home/asus/web/web4/node_modules/core-js/library/modules/_global.js","./_is-object":"/home/asus/web/web4/node_modules/core-js/library/modules/_is-object.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_export.js":[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":"/home/asus/web/web4/node_modules/core-js/library/modules/_core.js","./_ctx":"/home/asus/web/web4/node_modules/core-js/library/modules/_ctx.js","./_global":"/home/asus/web/web4/node_modules/core-js/library/modules/_global.js","./_hide":"/home/asus/web/web4/node_modules/core-js/library/modules/_hide.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_fails.js":[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_global.js":[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_hide.js":[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"/home/asus/web/web4/node_modules/core-js/library/modules/_object-dp.js","./_property-desc":"/home/asus/web/web4/node_modules/core-js/library/modules/_property-desc.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_ie8-dom-define.js":[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js","./_dom-create":"/home/asus/web/web4/node_modules/core-js/library/modules/_dom-create.js","./_fails":"/home/asus/web/web4/node_modules/core-js/library/modules/_fails.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_is-object.js":[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_object-dp.js":[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":"/home/asus/web/web4/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js","./_ie8-dom-define":"/home/asus/web/web4/node_modules/core-js/library/modules/_ie8-dom-define.js","./_to-primitive":"/home/asus/web/web4/node_modules/core-js/library/modules/_to-primitive.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_property-desc.js":[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_to-primitive.js":[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":"/home/asus/web/web4/node_modules/core-js/library/modules/_is-object.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/es6.object.define-property.js":[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js","./_export":"/home/asus/web/web4/node_modules/core-js/library/modules/_export.js","./_object-dp":"/home/asus/web/web4/node_modules/core-js/library/modules/_object-dp.js"}],"/home/asus/web/web4/resources/assets/js/back/announcement.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Announcement = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Announcement = exports.Announcement = function () {
  function Announcement() {
    (0, _classCallCheck3.default)(this, Announcement);

    if ($('#createAnnouncementForm').length) {
      this.create();
    }

    if ($('#editAnnouncementForm').length) {
      this.edit();
    }
  }

  (0, _createClass3.default)(Announcement, [{
    key: 'create',
    value: function create() {
      var $form = $('#createAnnouncementForm');
      var editorEN = $('#editorEN').summernote({
        height: 300,
        callbacks: {
          onImageUpload: function onImageUpload(files) {
            if (files[0].size > 2000000) {
              noty({ // eslint-disable-line no-undef
                text: 'File smaller than 2Mb.',
                type: 'error'
              });
            } else if (files[0].type !== 'image/jpeg' && files[0].type !== 'image/png') {
              noty({ // eslint-disable-line no-undef
                text: 'File must be jpg or png.',
                type: 'error'
              });
            } else {
              var data = new FormData(); // eslint-disable-line no-undef
              data.append('imageFile', files[0]);
              $.ajax({
                data: data,
                type: 'post',
                url: $form.data('upload'),
                cache: false,
                contentType: false,
                processData: false,
                success: function success(res) {
                  if (res.type === 'success') {
                    editorEN.summernote('insertImage', res.url);
                  } else {
                    noty({ // eslint-disable-line no-undef
                      text: res.message,
                      type: res.type
                    });
                  }
                }
              });
            }
          }
        }
      });

      var editorCHS = $('#editorCHS').summernote({
        height: 300,
        callbacks: {
          onImageUpload: function onImageUpload(files) {
            if (files[0].size > 2000000) {
              noty({ // eslint-disable-line no-undef
                text: 'File smaller than 2Mb.',
                type: 'error'
              });
            } else if (files[0].type !== 'image/jpeg' && files[0].type !== 'image/png') {
              noty({ // eslint-disable-line no-undef
                text: 'File must be jpg or png.',
                type: 'error'
              });
            } else {
              var data = new FormData(); // eslint-disable-line no-undef
              data.append('imageFile', files[0]);
              $.ajax({
                data: data,
                type: 'post',
                url: $form.data('upload'),
                cache: false,
                contentType: false,
                processData: false,
                success: function success(res) {
                  if (res.type === 'success') {
                    editorCHS.summernote('insertImage', res.url);
                  } else {
                    noty({ // eslint-disable-line no-undef
                      text: res.message,
                      type: res.type
                    });
                  }
                }
              });
            }
          }
        }
      });

      var editorCHT = $('#editorCHT').summernote({
        height: 300,
        callbacks: {
          onImageUpload: function onImageUpload(files) {
            if (files[0].size > 2000000) {
              noty({ // eslint-disable-line no-undef
                text: 'File smaller than 2Mb.',
                type: 'error'
              });
            } else if (files[0].type !== 'image/jpeg' && files[0].type !== 'image/png') {
              noty({ // eslint-disable-line no-undef
                text: 'File must be jpg or png.',
                type: 'error'
              });
            } else {
              var data = new FormData(); // eslint-disable-line no-undef
              data.append('imageFile', files[0]);
              $.ajax({
                data: data,
                type: 'post',
                url: $form.data('upload'),
                cache: false,
                contentType: false,
                processData: false,
                success: function success(res) {
                  if (res.type === 'success') {
                    editorCHT.summernote('insertImage', res.url);
                  } else {
                    noty({ // eslint-disable-line no-undef
                      text: res.message,
                      type: res.type
                    });
                  }
                }
              });
            }
          }
        }
      });

      var formProcessing = false;
      $form.on('click', '[type=submit]', function (e) {
        var $this = $(this);
        e.preventDefault();
        if (formProcessing) {
          noty({ // eslint-disable-line no-undef
            text: 'A form process is still running.',
            type: 'information'
          });
          return false;
        }

        if (!$form.parsley().validate()) {
          noty({ // eslint-disable-line no-undef
            text: 'Invalid value on form. Check again.',
            type: 'warning'
          });
          return false;
        }

        if (confirm('Submit?')) {
          // eslint-disable-line no-undef
          formProcessing = true;
          var $input = $form.find(':input');
          $input.prop('readonly', true);
          $this.disable(true);

          $.post($form.data('url'), {
            'data': $form.serializeForm()
          }).done(function (e) {
            formProcessing = false;
            $input.prop('readonly', false);
            $this.disable(false);
            noty({
              text: e.message,
              type: e.type
            });
          }).fail(function (xhr, status, e) {
            formProcessing = false;
            $input.prop('readonly', false);
            $this.disable(false);
            noty({
              text: xhr.responseText,
              type: 'error'
            });
          });
        }
      });
    }
  }, {
    key: 'edit',
    value: function edit() {
      var $form = $('#editAnnouncementForm');
      var editorEN = $('#editorEN').summernote({
        height: 300,
        callbacks: {
          onImageUpload: function onImageUpload(files) {
            if (files[0].size > 2000000) {
              noty({ // eslint-disable-line no-undef
                text: 'File smaller than 2Mb.',
                type: 'error'
              });
            } else if (files[0].type !== 'image/jpeg' && files[0].type !== 'image/png') {
              noty({ // eslint-disable-line no-undef
                text: 'File must be jpg or png.',
                type: 'error'
              });
            } else {
              var data = new FormData(); // eslint-disable-line no-undef
              data.append('imageFile', files[0]);
              $.ajax({
                data: data,
                type: 'post',
                url: $form.data('upload'),
                cache: false,
                contentType: false,
                processData: false,
                success: function success(res) {
                  if (res.type === 'success') {
                    editorEN.summernote('insertImage', res.url);
                  } else {
                    noty({ // eslint-disable-line no-undef
                      text: res.message,
                      type: res.type
                    });
                  }
                }
              });
            }
          }
        }
      });

      var editorCHS = $('#editorCHS').summernote({
        height: 300,
        callbacks: {
          onImageUpload: function onImageUpload(files) {
            if (files[0].size > 2000000) {
              noty({ // eslint-disable-line no-undef
                text: 'File smaller than 2Mb.',
                type: 'error'
              });
            } else if (files[0].type !== 'image/jpeg' && files[0].type !== 'image/png') {
              noty({ // eslint-disable-line no-undef
                text: 'File must be jpg or png.',
                type: 'error'
              });
            } else {
              var data = new FormData(); // eslint-disable-line no-undef
              data.append('imageFile', files[0]);
              $.ajax({
                data: data,
                type: 'post',
                url: $form.data('upload'),
                cache: false,
                contentType: false,
                processData: false,
                success: function success(res) {
                  if (res.type === 'success') {
                    editorCHS.summernote('insertImage', res.url);
                  } else {
                    noty({ // eslint-disable-line no-undef
                      text: res.message,
                      type: res.type
                    });
                  }
                }
              });
            }
          }
        }
      });

      var editorCHT = $('#editorCHT').summernote({
        height: 300,
        callbacks: {
          onImageUpload: function onImageUpload(files) {
            if (files[0].size > 2000000) {
              noty({ // eslint-disable-line no-undef
                text: 'File smaller than 2Mb.',
                type: 'error'
              });
            } else if (files[0].type !== 'image/jpeg' && files[0].type !== 'image/png') {
              noty({ // eslint-disable-line no-undef
                text: 'File must be jpg or png.',
                type: 'error'
              });
            } else {
              var data = new FormData(); // eslint-disable-line no-undef
              data.append('imageFile', files[0]);
              $.ajax({
                data: data,
                type: 'post',
                url: $form.data('upload'),
                cache: false,
                contentType: false,
                processData: false,
                success: function success(res) {
                  if (res.type === 'success') {
                    editorCHT.summernote('insertImage', res.url);
                  } else {
                    noty({ // eslint-disable-line no-undef
                      text: res.message,
                      type: res.type
                    });
                  }
                }
              });
            }
          }
        }
      });

      var formProcessing = false;
      $form.on('click', '[type=submit]', function (e) {
        var $this = $(this);
        e.preventDefault();
        if (formProcessing) {
          noty({ // eslint-disable-line no-undef
            text: 'A form process is still running.',
            type: 'information'
          });
          return false;
        }

        if (!$form.parsley().validate()) {
          noty({ // eslint-disable-line no-undef
            text: 'Invalid value on form. Check again.',
            type: 'warning'
          });
          return false;
        }

        if (confirm('Submit?')) {
          // eslint-disable-line no-undef
          formProcessing = true;
          var $input = $form.find(':input');
          $input.prop('readonly', true);
          $this.disable(true);

          $.post($form.data('url'), {
            'data': $form.serializeForm()
          }).done(function (e) {
            formProcessing = false;
            $input.prop('readonly', false);
            $this.disable(false);
            noty({
              text: e.message,
              type: e.type
            });
          }).fail(function (xhr, status, e) {
            formProcessing = false;
            $input.prop('readonly', false);
            $this.disable(false);
            noty({
              text: xhr.responseText,
              type: 'error'
            });
          });
        }
      });
    }
  }]);
  return Announcement;
}();

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js"}],"/home/asus/web/web4/resources/assets/js/back/core.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Core = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Core = exports.Core = function () {
  function Core() {
    (0, _classCallCheck3.default)(this, Core);

    this.disable();
    this.notyDefault();
    this.serializeForm();
    this.setupAjax();
    this.setupForm();
  }

  (0, _createClass3.default)(Core, [{
    key: 'disable',
    value: function disable() {
      $.fn.extend({
        disable: function disable(state) {
          return this.each(function () {
            if (state) {
              $(this).find('span').hide();
              $(this).attr('disabled', 'disabled').find('.btn-preloader').show();
            } else {
              $(this).find('span').show();
              $(this).removeAttr('disabled').find('.btn-preloader').hide();
            }
          });
        }
      });
    }
  }, {
    key: 'notyDefault',
    value: function notyDefault() {
      $.noty.defaults = {
        layout: 'top',
        theme: 'relax',
        type: 'alert',
        text: '',
        dismissQueue: true,
        force: false,
        maxVisible: 5,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        timeout: 5000,
        animation: {
          open: 'animated fadeInDown',
          close: 'animated fadeOutUp',
          easing: 'swing',
          speed: 500
        },
        closeWith: ['click'],
        modal: false,
        killer: false,
        callback: {
          onShow: function onShow() {},
          afterShow: function afterShow() {},
          onClose: function onClose() {},
          afterClose: function afterClose() {},
          onCloseClick: function onCloseClick() {}
        },
        buttons: false
      };
    }
  }, {
    key: 'serializeForm',
    value: function serializeForm() {
      $.fn.serializeForm = function () {
        var data, lookup, parse, selector;
        data = void 0;
        lookup = void 0;
        parse = void 0;
        selector = void 0;
        if (this.length < 1) {
          return false;
        }
        data = {};
        lookup = data;
        selector = ':input[type!="checkbox"][type!="radio"], input:checked';
        parse = function parse() {
          var $el, cap, i, named;
          $el = void 0;
          cap = void 0;
          i = void 0;
          named = void 0;
          if (this.disabled) {
            return;
          }
          named = this.name.replace(/\[([^\]]+)?\]/g, ',$1').split(',' // eslint-disable-line no-useless-escape
          );cap = named.length - 1;
          $el = $(this);
          if (named[0]) {
            i = 0;
            while (i < cap) {
              lookup = lookup[named[i]] = lookup[named[i]] || (named[i + 1] === '' || named[i + 1] === '0' ? [] : {});
              i++;
            }
            if (lookup.length !== void 0) {
              lookup.push($el.val());
            } else {
              lookup[named[cap]] = $el.val();
            }
            lookup = data;
          }
        };
        this.filter(selector).each(parse);
        this.find(selector).each(parse);
        return data;
      };
    }
  }, {
    key: 'setupAjax',
    value: function setupAjax() {
      $.ajaxSetup({
        statusCode: {
          403: function _(e) {
            noty({ // eslint-disable-line no-undef
              text: 'Forbidden Content.',
              type: 'warning'
            });
            return false;
          },
          404: function _(e) {
            noty({ // eslint-disable-line no-undef
              text: 'Route not found.',
              type: 'warning'
            });
            return false;
          },
          500: function _(e) {
            noty({ // eslint-disable-line no-undef
              text: 'Internal server error.',
              type: 'error'
            });
            return false;
          }
        },
        crossDomain: false,
        dataType: 'json',
        cache: true,
        headers: {
          'X-CSRF-Token': $('meta[name="_t"]').attr('content')
        }
      });
    }
  }, {
    key: 'setupForm',
    value: function setupForm() {
      var $forms = $('.action-form');
      var formProcessing = false;
      var allowedTypes = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

      $forms.each(function (e) {
        var $form = $(this);
        $form.on('click', '[type=submit]', function (e) {
          e.preventDefault();
          var $this = $(this);

          if (formProcessing) {
            noty({ // eslint-disable-line no-undef
              text: 'A form process is still running.',
              type: 'information'
            });
            return false;
          }

          var httpType = $form.attr('http-type').toUpperCase();
          if (allowedTypes.indexOf(httpType) === -1) {
            noty({ // eslint-disable-line no-undef
              text: 'HTTP type not allowed.',
              type: 'warning'
            });
            return false;
          }

          if (!$form.parsley().validate()) {
            noty({ // eslint-disable-line no-undef
              text: 'Invalid value on form. Check again.',
              type: 'warning'
            });
            return false;
          }

          if (confirm('Submit?')) {
            // eslint-disable-line no-undef
            formProcessing = true;
            var $input = $form.find(':input');
            $input.prop('readonly', true);
            $this.disable(true);

            var formData = {};
            formData.data = $form.serializeForm();

            $.each($form.data(), function (i, v) {
              if (i === 'nationality') {
                if ($('#inputNationality').length) {
                  var value = $('#inputNationality').data('ddslick');
                  formData.data.nationality = value.selectedData.value;
                }

                if ($('#inputBeneficiaryNationality').length) {
                  var _value = $('#inputBeneficiaryNationality').data('ddslick');
                  formData.data.beneficiary_nationality = _value.selectedData.value;
                }
              }
            });

            $.ajax({
              type: httpType,
              data: formData,
              url: $form.data('url'),
              success: function success(e) {
                noty({ // eslint-disable-line no-undef
                  text: e.message,
                  type: e.type
                });
                formProcessing = false;
                $input.prop('readonly', false);
                $this.disable(false);

                if (e.type === 'success' && e.redirect !== undefined) {
                  window.location.replace(e.redirect);
                }
              },
              error: function error(xhr, status, e) {
                noty({ // eslint-disable-line no-undef
                  text: xhr.responseText,
                  type: 'error'
                });
                formProcessing = false;
                $input.prop('readonly', false);
                $this.disable(false);
              }
            });
          }
        });
      });
    }
  }]);
  return Core;
}();

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js"}],"/home/asus/web/web4/resources/assets/js/back/datatable.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTable = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DataTable = exports.DataTable = function DataTable() {
  (0, _classCallCheck3.default)(this, DataTable);

  var $tables = $('.table-grid');
  var $modal = $('#showModal');
  var $modalLoader = $modal.find('.loading');
  var $modalError = $modal.find('.error');
  var $modalContent = $modal.find('#modalContent');
  var $loader = $('#pageLoader');

  $tables.each(function (e) {
    var $table = $(this);
    var columns = [];

    $table.find('th').each(function () {
      var $thead = $(this);
      var columnValue = {};
      columnValue['data'] = $thead.data('id');

      $.each($thead.data(), function (i, value) {
        if (i !== 'id') {
          columnValue[i] = value;
        }
      });
      columns.push(columnValue);
    });

    $table.dataTable({
      serverSide: true,
      processing: true,
      language: window._dataTablesLang,
      searchDelay: 1000,
      responsive: true,
      ajax: $table.data('url'),
      columns: columns,
      order: [0, 'desc']
    });

    $table.on('click', '.btn-show', function (e) {
      e.preventDefault();
      var $this = $(this);
      $modalLoader.show();
      $modalError.hide();
      $modalContent.empty();
      $.ajax({
        type: 'get',
        dataType: 'html',
        url: $this.data('url'),
        success: function success(e) {
          $modalLoader.hide();
          $modalContent.html(e);
        },
        error: function error(xhr, status, e) {
          $modalLoader.hide();
          $modalError.show();
          console.log(xhr.responseText);
        }
      });
    });

    $table.on('click', '.btn-delete', function (e) {
      e.preventDefault();
      if (confirm('Remove?')) {
        // eslint-disable-line no-undef
        $loader.show();
        var $this = $(this);
        $.ajax({
          type: 'delete',
          url: $this.data('url'),
          success: function success(e) {
            $loader.hide();
            noty({ // eslint-disable-line no-undef
              text: e.message,
              type: e.type
            });
            if (e.type === 'success') {
              $this.parents('tr').remove();
            }
          },
          error: function error(xhr, status, e) {
            $loader.hide();
            noty({ // eslint-disable-line no-undef
              text: xhr.responseText,
              type: 'error'
            });
          }
        });
      }
    });
  });
};

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/home/asus/web/web4/resources/assets/js/back/index.js":[function(require,module,exports){
'use strict';

var _core = require('./core');

var _widget = require('./widget');

var _datatable = require('./datatable');

var _announcement = require('./announcement');

var _package = require('./package');

var _register = require('./register');

var _shares = require('./shares');

var _withdraw = require('./withdraw');

/* eslint-disable no-new */

new _core.Core();
new _widget.Widget();
new _datatable.DataTable();
new _announcement.Announcement();
new _package.Package();
new _register.Register();
new _shares.Shares();
new _withdraw.Withdraw();

setTimeout(function () {
  $('#loading').fadeOut(400, 'linear');
}, 300);

$(window).on('resize', function () {
  bodySizer();
});

bodySizer();
pageTransitions();
$.slidebars();

$("div[id='#fixed-sidebar']").on('click', function () {

  if ($(this).hasClass("switch-on")) {

    var windowHeight = $(window).height();
    var headerHeight = $('#page-header').height();
    var contentHeight = windowHeight - headerHeight;

    $('#page-sidebar').css('height', contentHeight);
    $('.scroll-sidebar').css('height', contentHeight);

    $('.scroll-sidebar').slimscroll({
      height: '100%',
      color: 'rgba(155, 164, 169, 0.68)',
      size: '6px'
    });

    var headerBg = $('#page-header').attr('class');
    $('#header-logo').addClass(headerBg);
  } else {

    var windowHeight = $(document).height();
    var headerHeight = $('#page-header').height();
    var contentHeight = windowHeight - headerHeight;

    $('#page-sidebar').css('height', contentHeight);
    $('.scroll-sidebar').css('height', contentHeight);

    $(".scroll-sidebar").slimScroll({
      destroy: true
    });

    $('#header-logo').removeClass('bg-gradient-9');
  }
});

$('.dropdown').on('show.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

$(function () {
  $('#sidebar-menu').superclick({
    animation: {
      height: 'show'
    },
    animationOut: {
      height: 'hide'
    }
  });
  var path = window.location.pathname.split('/');
  path = path[path.length - 1];
  if (path !== undefined) {
    $("#sidebar-menu").find("a[href$='" + path + "']").addClass('sfActive');
    $("#sidebar-menu").find("a[href$='" + path + "']").parents().eq(3).superclick('show');
  }

  $('#close-sidebar').click(function () {
    $('body').toggleClass('closed-sidebar');
    $('.glyph-icon', this).toggleClass('icon-angle-right').toggleClass('icon-angle-left');
  });
});

function bodySizer() {
  var windowHeight, headerHeight, contentHeight;

  if ($('body').hasClass('fixed-sidebar')) {

    windowHeight = $(window).height();
    headerHeight = $('#page-header').height();
    contentHeight = windowHeight - headerHeight;
    $('#page-sidebar').css('height', contentHeight);
    $('.scroll-sidebar').css('height', contentHeight);
    $('#page-content').css('min-height', contentHeight);
  } else {

    windowHeight = $(document).height();
    headerHeight = $('#page-header').height();
    contentHeight = windowHeight - headerHeight;
    $('#page-sidebar').css('height', contentHeight);
    $('.scroll-sidebar').css('height', contentHeight);
    $('#page-content').css('min-height', contentHeight);
  }
}

function pageTransitions() {
  var transitions = ['.pt-page-moveFromLeft', 'pt-page-moveFromRight', 'pt-page-moveFromTop', 'pt-page-moveFromBottom', 'pt-page-fade', 'pt-page-moveFromLeftFade', 'pt-page-moveFromRightFade', 'pt-page-moveFromTopFade', 'pt-page-moveFromBottomFade', 'pt-page-scaleUp', 'pt-page-scaleUpCenter', 'pt-page-flipInLeft', 'pt-page-flipInRight', 'pt-page-flipInBottom', 'pt-page-flipInTop', 'pt-page-rotatePullRight', 'pt-page-rotatePullLeft', 'pt-page-rotatePullTop', 'pt-page-rotatePullBottom', 'pt-page-rotateUnfoldLeft', 'pt-page-rotateUnfoldRight', 'pt-page-rotateUnfoldTop', 'pt-page-rotateUnfoldBottom'];
  for (var i in transitions) {
    var transition_name = transitions[i];
    if ($('.add-transition').hasClass(transition_name)) {
      $('.add-transition').addClass(transition_name + '-init page-transition');
      setTimeout(function () {
        $('.add-transition').removeClass(transition_name + ' ' + transition_name + '-init page-transition');
      }, 1200);
      return;
    }
  }
}

if ($('#exchangeRateChart').length) {
  $.when($.getScript(window._root + '/lib/chart-core.js'), $.Deferred(function (deferred) {
    $(deferred.resolve);
  })).done(function () {
    var exchageRates = window._exchangeRate;
    var labels = [];
    var chartDataBuy = [];
    var chartDataSell = [];

    $.each(exchageRates, function (index, value) {
      labels.push(index + " (" + value.currency + ")");
      chartDataBuy.push(value.buy);
      chartDataSell.push(value.sell);
    });
    var chartData = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Buy',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: chartDataBuy,
          fill: false
        }, {
          label: 'Sell',
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgb(54, 162, 235)',
          data: chartDataSell,
          fill: false
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: true,
          text: 'Exchange Rates'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Country'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'BUY/SELL Value'
            }
          }]
        }
      }
    };
    var ctx = document.getElementById("exchangeRateChart").getContext("2d");
    ctx.height = 500;
    new Chart(ctx, chartData);
  }).fail(function (xhr, status, e) {
    console.log(xhr.responseText);
  });
}

},{"./announcement":"/home/asus/web/web4/resources/assets/js/back/announcement.js","./core":"/home/asus/web/web4/resources/assets/js/back/core.js","./datatable":"/home/asus/web/web4/resources/assets/js/back/datatable.js","./package":"/home/asus/web/web4/resources/assets/js/back/package.js","./register":"/home/asus/web/web4/resources/assets/js/back/register.js","./shares":"/home/asus/web/web4/resources/assets/js/back/shares.js","./widget":"/home/asus/web/web4/resources/assets/js/back/widget.js","./withdraw":"/home/asus/web/web4/resources/assets/js/back/withdraw.js"}],"/home/asus/web/web4/resources/assets/js/back/package.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Package = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Package = exports.Package = function Package() {
  (0, _classCallCheck3.default)(this, Package);

  if ($('#packageListTable').length) {
    var $table = $('#packageListTable');
    var $loader = $('#pageLoader');
    var processing = false;

    $table.on('click', '[type=submit]', function (e) {
      var $this = $(this);
      var $row = $this.closest('tr');

      if (confirm('Submit?')) {
        if (!processing) {
          $loader.show();
          processing = true;

          $.ajax({
            type: 'post',
            url: $this.data('url'),
            data: {
              data: $row.serializeForm()
            },
            success: function success(e) {
              $loader.hide();
              processing = false;
              noty({
                type: e.type,
                text: e.message
              });
            },
            error: function error(xhr, status, e) {
              $loader.hide();
              processing = false;
              noty({
                type: 'error',
                text: xhr.responseText
              });
            }
          });
        } else {
          noty({
            type: 'information',
            text: 'A process is still ongoing.'
          });
        }
      }
    });
  }
};

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/home/asus/web/web4/resources/assets/js/back/register.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Register = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Register = exports.Register = function Register() {
  (0, _classCallCheck3.default)(this, Register);

  if ($('#registerForm').length) {
    var $form = $('#registerForm');
    var $showMemberBtn = $form.find('.btn-show');
    var $modal = $('#showModal');
    var $modalLoader = $modal.find('.loading');
    var $modalError = $modal.find('.error');
    var $modalContent = $modal.find('#modalContent');
    $showMemberBtn.on('click', function (e) {
      e.preventDefault();
      var $this = $(this);
      $modalLoader.show();
      $modalError.hide();
      $modalContent.empty();
      $.ajax({
        type: 'get',
        dataType: 'html',
        url: $this.data('url') + '?u=' + $this.parent().closest('.form-group').find('.form-control').val(),
        success: function success(e) {
          $modalLoader.hide();
          $modalContent.html(e);
        },
        error: function error(xhr, status, e) {
          $modalLoader.hide();
          $modalError.show();
          console.log(xhr.responseText);
        }
      });
    });
  }
};

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/home/asus/web/web4/resources/assets/js/back/shares.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shares = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Shares = exports.Shares = function () {
  function Shares() {
    (0, _classCallCheck3.default)(this, Shares);

    if ($('#sharesListTable').length) {
      this.list();
    }

    if ($('#removeSharesBtn').length) {
      this.removeQueue();
    }

    if ($('#splitForm').length) {
      this.split();
    }

    if ($('#sharesFreezeListTable').length) {
      this.freezeList();
    }

    if ($('#sharesBuyListTable').length) {
      this.buyList();
    }

    if ($('#sharesSellListTable').length) {
      this.sellList();
    }
  }

  (0, _createClass3.default)(Shares, [{
    key: 'list',
    value: function list() {
      var $table = $('#sharesListTable');
      var $loader = $('#pageLoader');
      var processing = false;

      $table.on('click', '[type=submit]', function (e) {
        var $this = $(this);
        var $row = $this.closest('tr');

        if (confirm('Submit?')) {
          if (!processing) {
            $loader.show();
            processing = true;

            $.ajax({
              type: 'post',
              url: $this.data('url'),
              data: {
                data: $row.serializeForm()
              },
              success: function success(e) {
                $loader.hide();
                processing = false;
                noty({
                  type: e.type,
                  text: e.message
                });
              },
              error: function error(xhr, status, e) {
                $loader.hide();
                processing = false;
                noty({
                  type: 'error',
                  text: xhr.responseText
                });
              }
            });
          } else {
            noty({
              type: 'information',
              text: 'A process is still ongoing.'
            });
          }
        }
      });
    }
  }, {
    key: 'removeQueue',
    value: function removeQueue() {
      var $button = $('#removeSharesBtn');
      $button.on('click', function () {
        if (confirm('Remove? Cannot be undo.')) {
          var $this = $(this);
          $this.disable(true);

          $.post($this.data('url')).done(function (e) {
            noty({
              text: e.message,
              type: e.type
            });
            $this.disable(false);
          }).fail(function (xhr, status, e) {
            noty({
              text: xhr.responseText,
              type: 'error'
            });
            $this.disable(false);
          });
        }
      });
    }
  }, {
    key: 'split',
    value: function split() {
      var currentShares = parseFloat($('#currentShares').text());
      var $form = $('#splitForm');
      var $splitTo = $form.find('[name=split_to]');
      var $splitBy = $form.find('[name=split_by]');

      $splitTo.on('input', function () {
        var $this = $(this);
        var splitBy = currentShares / parseFloat($this.val());
        $splitBy.val(splitBy.toFixed(3));
      });
    }
  }, {
    key: 'freezeList',
    value: function freezeList() {
      var $table = $('#sharesFreezeListTable');
      var $loader = $('#pageLoader');
      var processing = false;

      $table.on('click', '.btn-unlock', function (e) {
        var $this = $(this);

        if (confirm('Unlock?')) {
          if (!processing) {
            $loader.show();
            processing = true;

            $.ajax({
              type: 'post',
              url: $this.data('url'),
              success: function success(e) {
                $loader.hide();
                processing = false;
                noty({
                  type: e.type,
                  text: e.message
                });
              },
              error: function error(xhr, status, e) {
                $loader.hide();
                processing = false;
                noty({
                  type: 'error',
                  text: xhr.responseText
                });
              }
            });
          } else {
            noty({
              type: 'information',
              text: 'A process is still ongoing.'
            });
          }
        }
      });

      $table.on('click', '.btn-edit', function (e) {
        var $this = $(this);
        var $row = $this.closest('tr');
        if (confirm('Update?')) {
          if (!processing) {
            $loader.show();
            processing = true;

            $.ajax({
              type: 'post',
              url: $this.data('url'),
              data: {
                data: $row.serializeForm()
              },
              success: function success(e) {
                $loader.hide();
                processing = false;
                noty({
                  type: e.type,
                  text: e.message
                });
              },
              error: function error(xhr, status, e) {
                $loader.hide();
                processing = false;
                noty({
                  type: 'error',
                  text: xhr.responseText
                });
              }
            });
          } else {
            noty({
              type: 'information',
              text: 'A process is still ongoing.'
            });
          }
        }
      });
    }
  }, {
    key: 'buyList',
    value: function buyList() {
      var $table = $('#sharesBuyListTable');
      var $loader = $('#pageLoader');
      var processing = false;

      $table.on('click', '.btn-edit', function (e) {
        var $this = $(this);
        var $row = $this.closest('tr');
        if (confirm('Update?')) {
          if (!processing) {
            $loader.show();
            processing = true;

            $.ajax({
              type: 'post',
              url: $this.data('url'),
              data: {
                data: $row.serializeForm()
              },
              success: function success(e) {
                $loader.hide();
                processing = false;
                noty({
                  type: e.type,
                  text: e.message
                });
              },
              error: function error(xhr, status, e) {
                $loader.hide();
                processing = false;
                noty({
                  type: 'error',
                  text: xhr.responseText
                });
              }
            });
          } else {
            noty({
              type: 'information',
              text: 'A process is still ongoing.'
            });
          }
        }
      });
    }
  }, {
    key: 'sellList',
    value: function sellList() {
      var $table = $('#sharesSellListTable');
      var $loader = $('#pageLoader');
      var processing = false;

      $table.on('click', '.btn-edit', function (e) {
        var $this = $(this);
        var $row = $this.closest('tr');
        if (confirm('Update?')) {
          if (!processing) {
            $loader.show();
            processing = true;

            $.ajax({
              type: 'post',
              url: $this.data('url'),
              data: {
                data: $row.serializeForm()
              },
              success: function success(e) {
                $loader.hide();
                processing = false;
                noty({
                  type: e.type,
                  text: e.message
                });
              },
              error: function error(xhr, status, e) {
                $loader.hide();
                processing = false;
                noty({
                  type: 'error',
                  text: xhr.responseText
                });
              }
            });
          } else {
            noty({
              type: 'information',
              text: 'A process is still ongoing.'
            });
          }
        }
      });
    }
  }]);
  return Shares;
}();

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js"}],"/home/asus/web/web4/resources/assets/js/back/widget.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Widget = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Widget = exports.Widget = function Widget() {
  (0, _classCallCheck3.default)(this, Widget);

  $('a[href="#"]').click(function (event) {
    event.preventDefault();
  });

  $(".todo-box li input").on('click', function () {
    $(this).parent().toggleClass('todo-done');
  });

  var overallWidth = 0;
  $('.timeline-scroll .tl-row').each(function (index, elem) {
    var $elem = $(elem);
    overallWidth += $elem.outerWidth() + parseInt($elem.css('margin-left'), 10) + parseInt($elem.css('margin-right'), 10);
  });
  $('.timeline-horizontal', this).width(overallWidth);

  $('.input-switch-alt').simpleCheckbox();

  $('input[type="checkbox"].custom-checkbox').uniform();
  $('input[type="radio"].custom-radio').uniform();
  $('.custom-select').uniform();

  $('.selector').append('<i class="glyph-icon icon-caret-down"></i>');

  $('.checker span').append('<i class="glyph-icon icon-check"></i>');
  $('.radio span').append('<i class="glyph-icon icon-circle"></i>');

  $('.scrollable-slim').slimScroll({
    color: '#8da0aa',
    size: '10px',
    alwaysVisible: true
  });

  $('.scrollable-slim-sidebar').slimScroll({
    color: '#8da0aa',
    size: '10px',
    height: '100%',
    alwaysVisible: true
  });

  $('.scrollable-slim-box').slimScroll({
    color: '#8da0aa',
    size: '6px',
    alwaysVisible: false
  });

  $('.loading-button').click(function () {
    var btn = $(this);
    btn.button('loading');
  });

  $('.tooltip-button').tooltip({
    container: 'body'
  });

  $('.alert-close-btn').click(function () {
    $(this).parent().addClass('animated fadeOutDown');
  });

  $('.popover-button').popover({
    container: 'body',
    html: true,
    animation: true,
    content: function content() {
      var dataID = $(this).attr('data-id');
      return $(dataID).html();
    }
  }).click(function (evt) {
    evt.preventDefault();
  });

  $('.popover-button-default').popover({
    container: 'body',
    html: true,
    animation: true
  }).click(function (evt) {
    evt.preventDefault();
  });

  $('.datepicker').bsdatepicker({
    format: 'yyyy-mm-dd'
  });
  $('.input-switch').bootstrapSwitch();

  if (document.getElementById('fullscreen-btn')) {
    document.getElementById('fullscreen-btn').addEventListener('click', function () {
      if (screenfull.enabled) {
        screenfull.request();
      }
    });
  }
};

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/home/asus/web/web4/resources/assets/js/back/withdraw.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Withdraw = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Withdraw = exports.Withdraw = function () {
  function Withdraw() {
    (0, _classCallCheck3.default)(this, Withdraw);

    if ($('#withdrawListTable').length) {
      this.list();
    }
  }

  (0, _createClass3.default)(Withdraw, [{
    key: 'list',
    value: function list() {
      var $table = $('#withdrawListTable');
      var $loader = $('#pageLoader');

      $table.on('click', '.btn-confirm', function () {
        var $this = $(this);
        if (confirm('Confirm this withdraw?')) {
          // eslint-disable-line no-undef
          $loader.show();
          $.ajax({
            type: 'post',
            url: $this.data('url'),
            data: {
              status: 'done'
            },
            success: function success(e) {
              noty({ // eslint-disable-line no-undef
                type: e.type,
                text: e.message
              });
              $loader.hide();
            },
            error: function error(xhr) {
              noty({ // eslint-disable-line no-undef
                type: 'error',
                text: xhr.responseText
              });
              $loader.hide();
            }
          });
        }
      });

      $table.on('click', '.btn-reject', function () {
        var $this = $(this);
        if (confirm('Reject this withdraw?')) {
          // eslint-disable-line no-undef
          $loader.show();
          $.ajax({
            type: 'post',
            url: $this.data('url'),
            data: {
              status: 'reject'
            },
            success: function success(e) {
              noty({ // eslint-disable-line no-undef
                type: e.type,
                text: e.message
              });
              $loader.hide();
            },
            error: function error(xhr) {
              noty({ // eslint-disable-line no-undef
                type: 'error',
                text: xhr.responseText
              });
              $loader.hide();
            }
          });
        }
      });
    }
  }]);
  return Withdraw;
}();

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js"}]},{},["/home/asus/web/web4/resources/assets/js/back/index.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL2Fubm91bmNlbWVudC5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay9jb3JlLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL2RhdGF0YWJsZS5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay9pbmRleC5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay9wYWNrYWdlLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL3JlZ2lzdGVyLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL3NoYXJlcy5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay93aWRnZXQuanMiLCJyZXNvdXJjZXMvYXNzZXRzL2pzL2JhY2svd2l0aGRyYXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUNGYSx1QixBQUFBLDJCQUNYOzBCQUFlO3dDQUNiOztRQUFJLEVBQUEsQUFBRSwyQkFBTixBQUFpQyxRQUFRLEFBQ3ZDO1dBQUEsQUFBSyxBQUNOO0FBRUQ7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LEFBQVUsR0FBRyxBQUNwQjtxQkFBTyxBQUNMO3NCQUFNLEVBREgsQUFDSyxBQUNSO3NCQUFNLEVBRlIsQUFBSyxBQUVLLEFBRVY7QUFKSztzQkFJTCxBQUFRLEFBQ1Q7QUFaSSxBQWFMO21CQUFPLGVBQUEsQUFBVSxLQUFLLEFBQ3BCO3FCQUFPLEFBQ0w7c0JBREcsQUFDRyxBQUNOO3NCQUFNLElBRlIsQUFBSyxBQUVPLEFBRVo7QUFKSztzQkFJTCxBQUFRLEFBQ1Q7QUFuQkgsQUFBTyxBQXFCUjtBQXJCUSxBQUNMO0FBcUJMO0FBMUJELEFBNEJBOzthQUFBLEFBQU8sR0FBUCxBQUFVLFNBQVYsQUFBbUIsZUFBZSxZQUFZLEFBQzVDO1lBQUksUUFBUSxFQUFaLEFBQVksQUFBRSxBQUNkO1lBQUksUUFBSixBQUFJLEFBQVEsMEJBQTBCLEFBQUU7QUFDdEM7a0JBQUEsQUFBUSxBQUNSO1lBQUEsQUFBRTtrQkFBSyxBQUNDLEFBQ047aUJBQUssTUFBQSxBQUFNLEtBRk4sQUFFQSxBQUFXLEFBQ2hCOztzQkFISyxBQUdDLEFBQ0ksQUFFVjtBQUhNLEFBQ0o7cUJBRU8saUJBQUEsQUFBVSxHQUFHLEFBQ3BCO3FCQUFPLEFBQ0w7c0JBQU0sRUFESCxBQUNLLEFBQ1I7c0JBQU0sRUFGUixBQUFLLEFBRUssQUFFVjtBQUpLO3NCQUlMLEFBQVEsQUFDVDtBQVpJLEFBYUw7bUJBQU8sZUFBQSxBQUFVLEtBQUssQUFDcEI7cUJBQU8sQUFDTDtzQkFERyxBQUNHLEFBQ047c0JBQU0sSUFGUixBQUFLLEFBRU8sQUFFWjtBQUpLO3NCQUlMLEFBQVEsQUFDVDtBQW5CSCxBQUFPLEFBcUJSO0FBckJRLEFBQ0w7QUFxQkw7QUExQkQsQUEyQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7IiwiZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoJCgnI2NyZWF0ZUFubm91bmNlbWVudEZvcm0nKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3JlYXRlKClcbiAgICB9XG5cbiAgICBpZiAoJCgnI2VkaXRBbm5vdW5jZW1lbnRGb3JtJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVkaXQoKVxuICAgIH1cbiAgfVxuICBjcmVhdGUgKCkge1xuICAgIHZhciAkZm9ybSA9ICQoJyNjcmVhdGVBbm5vdW5jZW1lbnRGb3JtJylcbiAgICB2YXIgZWRpdG9yRU4gPSAkKCcjZWRpdG9yRU4nKS5zdW1tZXJub3RlKHtcbiAgICAgIGhlaWdodDogMzAwLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9uSW1hZ2VVcGxvYWQ6IGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICAgIGlmIChmaWxlc1swXS5zaXplID4gMjAwMDAwMCkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgc21hbGxlciB0aGFuIDJNYi4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvanBlZycgJiZcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9wbmcnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBtdXN0IGJlIGpwZyBvciBwbmcuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnaW1hZ2VGaWxlJywgZmlsZXNbMF0pXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICAgIHVybDogJGZvcm0uZGF0YSgndXBsb2FkJyksXG4gICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgZWRpdG9yRU4uc3VtbWVybm90ZSgnaW5zZXJ0SW1hZ2UnLCByZXMudXJsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzLnR5cGVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB2YXIgZWRpdG9yQ0hTID0gJCgnI2VkaXRvckNIUycpLnN1bW1lcm5vdGUoe1xuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb25JbWFnZVVwbG9hZDogZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICAgaWYgKGZpbGVzWzBdLnNpemUgPiAyMDAwMDAwKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBzbWFsbGVyIHRoYW4gMk1iLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9qcGVnJyAmJlxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL3BuZydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIG11c3QgYmUganBnIG9yIHBuZy4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdpbWFnZUZpbGUnLCBmaWxlc1swXSlcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgICAgdXJsOiAkZm9ybS5kYXRhKCd1cGxvYWQnKSxcbiAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0b3JDSFMuc3VtbWVybm90ZSgnaW5zZXJ0SW1hZ2UnLCByZXMudXJsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzLnR5cGVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB2YXIgZWRpdG9yQ0hUID0gJCgnI2VkaXRvckNIVCcpLnN1bW1lcm5vdGUoe1xuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb25JbWFnZVVwbG9hZDogZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICAgaWYgKGZpbGVzWzBdLnNpemUgPiAyMDAwMDAwKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBzbWFsbGVyIHRoYW4gMk1iLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9qcGVnJyAmJlxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL3BuZydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIG11c3QgYmUganBnIG9yIHBuZy4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdpbWFnZUZpbGUnLCBmaWxlc1swXSlcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgICAgdXJsOiAkZm9ybS5kYXRhKCd1cGxvYWQnKSxcbiAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0b3JDSFQuc3VtbWVybm90ZSgnaW5zZXJ0SW1hZ2UnLCByZXMudXJsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzLnR5cGVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB2YXIgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICRmb3JtLm9uKCdjbGljaycsICdbdHlwZT1zdWJtaXRdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGZvcm1Qcm9jZXNzaW5nKSB7XG4gICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgdGV4dDogJ0EgZm9ybSBwcm9jZXNzIGlzIHN0aWxsIHJ1bm5pbmcuJyxcbiAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoISRmb3JtLnBhcnNsZXkoKS52YWxpZGF0ZSgpKSB7XG4gICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgdGV4dDogJ0ludmFsaWQgdmFsdWUgb24gZm9ybS4gQ2hlY2sgYWdhaW4uJyxcbiAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maXJtKCdTdWJtaXQ/JykpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IHRydWVcbiAgICAgICAgdmFyICRpbnB1dCA9ICRmb3JtLmZpbmQoJzppbnB1dCcpXG4gICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIHRydWUpXG4gICAgICAgICR0aGlzLmRpc2FibGUodHJ1ZSlcblxuICAgICAgICAkLnBvc3QoJGZvcm0uZGF0YSgndXJsJyksIHtcbiAgICAgICAgICAnZGF0YSc6ICRmb3JtLnNlcmlhbGl6ZUZvcm0oKVxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIGZhbHNlKVxuICAgICAgICAgICR0aGlzLmRpc2FibGUoZmFsc2UpXG4gICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2UsXG4gICAgICAgICAgICB0eXBlOiBlLnR5cGVcbiAgICAgICAgICB9KVxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgIGZvcm1Qcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCBmYWxzZSlcbiAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dCxcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZWRpdCAoKSB7XG4gICAgdmFyICRmb3JtID0gJCgnI2VkaXRBbm5vdW5jZW1lbnRGb3JtJylcbiAgICB2YXIgZWRpdG9yRU4gPSAkKCcjZWRpdG9yRU4nKS5zdW1tZXJub3RlKHtcbiAgICAgIGhlaWdodDogMzAwLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9uSW1hZ2VVcGxvYWQ6IGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICAgIGlmIChmaWxlc1swXS5zaXplID4gMjAwMDAwMCkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgc21hbGxlciB0aGFuIDJNYi4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvanBlZycgJiZcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9wbmcnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBtdXN0IGJlIGpwZyBvciBwbmcuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnaW1hZ2VGaWxlJywgZmlsZXNbMF0pXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICAgIHVybDogJGZvcm0uZGF0YSgndXBsb2FkJyksXG4gICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgZWRpdG9yRU4uc3VtbWVybm90ZSgnaW5zZXJ0SW1hZ2UnLCByZXMudXJsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzLnR5cGVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB2YXIgZWRpdG9yQ0hTID0gJCgnI2VkaXRvckNIUycpLnN1bW1lcm5vdGUoe1xuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb25JbWFnZVVwbG9hZDogZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICAgaWYgKGZpbGVzWzBdLnNpemUgPiAyMDAwMDAwKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBzbWFsbGVyIHRoYW4gMk1iLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9qcGVnJyAmJlxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL3BuZydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIG11c3QgYmUganBnIG9yIHBuZy4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdpbWFnZUZpbGUnLCBmaWxlc1swXSlcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgICAgdXJsOiAkZm9ybS5kYXRhKCd1cGxvYWQnKSxcbiAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0b3JDSFMuc3VtbWVybm90ZSgnaW5zZXJ0SW1hZ2UnLCByZXMudXJsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzLnR5cGVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB2YXIgZWRpdG9yQ0hUID0gJCgnI2VkaXRvckNIVCcpLnN1bW1lcm5vdGUoe1xuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb25JbWFnZVVwbG9hZDogZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICAgaWYgKGZpbGVzWzBdLnNpemUgPiAyMDAwMDAwKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBzbWFsbGVyIHRoYW4gMk1iLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9qcGVnJyAmJlxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL3BuZydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIG11c3QgYmUganBnIG9yIHBuZy4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdpbWFnZUZpbGUnLCBmaWxlc1swXSlcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgICAgdXJsOiAkZm9ybS5kYXRhKCd1cGxvYWQnKSxcbiAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0b3JDSFQuc3VtbWVybm90ZSgnaW5zZXJ0SW1hZ2UnLCByZXMudXJsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzLnR5cGVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB2YXIgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICRmb3JtLm9uKCdjbGljaycsICdbdHlwZT1zdWJtaXRdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGZvcm1Qcm9jZXNzaW5nKSB7XG4gICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgdGV4dDogJ0EgZm9ybSBwcm9jZXNzIGlzIHN0aWxsIHJ1bm5pbmcuJyxcbiAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoISRmb3JtLnBhcnNsZXkoKS52YWxpZGF0ZSgpKSB7XG4gICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgdGV4dDogJ0ludmFsaWQgdmFsdWUgb24gZm9ybS4gQ2hlY2sgYWdhaW4uJyxcbiAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maXJtKCdTdWJtaXQ/JykpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IHRydWVcbiAgICAgICAgdmFyICRpbnB1dCA9ICRmb3JtLmZpbmQoJzppbnB1dCcpXG4gICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIHRydWUpXG4gICAgICAgICR0aGlzLmRpc2FibGUodHJ1ZSlcblxuICAgICAgICAkLnBvc3QoJGZvcm0uZGF0YSgndXJsJyksIHtcbiAgICAgICAgICAnZGF0YSc6ICRmb3JtLnNlcmlhbGl6ZUZvcm0oKVxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIGZhbHNlKVxuICAgICAgICAgICR0aGlzLmRpc2FibGUoZmFsc2UpXG4gICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2UsXG4gICAgICAgICAgICB0eXBlOiBlLnR5cGVcbiAgICAgICAgICB9KVxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgIGZvcm1Qcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCBmYWxzZSlcbiAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dCxcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDb3JlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZGlzYWJsZSgpXG4gICAgdGhpcy5ub3R5RGVmYXVsdCgpXG4gICAgdGhpcy5zZXJpYWxpemVGb3JtKClcbiAgICB0aGlzLnNldHVwQWpheCgpXG4gICAgdGhpcy5zZXR1cEZvcm0oKVxuICB9XG4gIGRpc2FibGUgKCkge1xuICAgICQuZm4uZXh0ZW5kKHtcbiAgICAgIGRpc2FibGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnc3BhbicpLmhpZGUoKVxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpLmZpbmQoJy5idG4tcHJlbG9hZGVyJykuc2hvdygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnc3BhbicpLnNob3coKVxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpLmZpbmQoJy5idG4tcHJlbG9hZGVyJykuaGlkZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgbm90eURlZmF1bHQgKCkge1xuICAgICQubm90eS5kZWZhdWx0cyA9IHtcbiAgICAgIGxheW91dDogJ3RvcCcsXG4gICAgICB0aGVtZTogJ3JlbGF4JyxcbiAgICAgIHR5cGU6ICdhbGVydCcsXG4gICAgICB0ZXh0OiAnJyxcbiAgICAgIGRpc21pc3NRdWV1ZTogdHJ1ZSxcbiAgICAgIGZvcmNlOiBmYWxzZSxcbiAgICAgIG1heFZpc2libGU6IDUsXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJub3R5X21lc3NhZ2VcIj48c3BhbiBjbGFzcz1cIm5vdHlfdGV4dFwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwibm90eV9jbG9zZVwiPjwvZGl2PjwvZGl2PicsXG4gICAgICB0aW1lb3V0OiA1MDAwLFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIG9wZW46ICdhbmltYXRlZCBmYWRlSW5Eb3duJyxcbiAgICAgICAgY2xvc2U6ICdhbmltYXRlZCBmYWRlT3V0VXAnLFxuICAgICAgICBlYXNpbmc6ICdzd2luZycsXG4gICAgICAgIHNwZWVkOiA1MDBcbiAgICAgIH0sXG4gICAgICBjbG9zZVdpdGg6IFsnY2xpY2snXSxcbiAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgIGtpbGxlcjogZmFsc2UsXG4gICAgICBjYWxsYmFjazoge1xuICAgICAgICBvblNob3c6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBhZnRlclNob3c6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgYWZ0ZXJDbG9zZTogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIG9uQ2xvc2VDbGljazogZnVuY3Rpb24gKCkge31cbiAgICAgIH0sXG4gICAgICBidXR0b25zOiBmYWxzZVxuICAgIH1cbiAgfVxuICBzZXJpYWxpemVGb3JtICgpIHtcbiAgICAkLmZuLnNlcmlhbGl6ZUZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGF0YSwgbG9va3VwLCBwYXJzZSwgc2VsZWN0b3JcbiAgICAgIGRhdGEgPSB2b2lkIDBcbiAgICAgIGxvb2t1cCA9IHZvaWQgMFxuICAgICAgcGFyc2UgPSB2b2lkIDBcbiAgICAgIHNlbGVjdG9yID0gdm9pZCAwXG4gICAgICBpZiAodGhpcy5sZW5ndGggPCAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgZGF0YSA9IHt9XG4gICAgICBsb29rdXAgPSBkYXRhXG4gICAgICBzZWxlY3RvciA9ICc6aW5wdXRbdHlwZSE9XCJjaGVja2JveFwiXVt0eXBlIT1cInJhZGlvXCJdLCBpbnB1dDpjaGVja2VkJ1xuICAgICAgcGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWwsIGNhcCwgaSwgbmFtZWRcbiAgICAgICAgJGVsID0gdm9pZCAwXG4gICAgICAgIGNhcCA9IHZvaWQgMFxuICAgICAgICBpID0gdm9pZCAwXG4gICAgICAgIG5hbWVkID0gdm9pZCAwXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbmFtZWQgPSB0aGlzLm5hbWUucmVwbGFjZSgvXFxbKFteXFxdXSspP1xcXS9nLCAnLCQxJykuc3BsaXQoJywnKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgICAgIGNhcCA9IG5hbWVkLmxlbmd0aCAtIDFcbiAgICAgICAgJGVsID0gJCh0aGlzKVxuICAgICAgICBpZiAobmFtZWRbMF0pIHtcbiAgICAgICAgICBpID0gMFxuICAgICAgICAgIHdoaWxlIChpIDwgY2FwKSB7XG4gICAgICAgICAgICBsb29rdXAgPSBsb29rdXBbbmFtZWRbaV1dID0gbG9va3VwW25hbWVkW2ldXSB8fCAobmFtZWRbaSArIDFdID09PSAnJyB8fCBuYW1lZFtpICsgMV0gPT09ICcwJyA/IFtdIDoge30pXG4gICAgICAgICAgICBpKytcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGxvb2t1cC5sZW5ndGggIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgbG9va3VwLnB1c2goJGVsLnZhbCgpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb29rdXBbbmFtZWRbY2FwXV0gPSAkZWwudmFsKClcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9va3VwID0gZGF0YVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmZpbHRlcihzZWxlY3RvcikuZWFjaChwYXJzZSlcbiAgICAgIHRoaXMuZmluZChzZWxlY3RvcikuZWFjaChwYXJzZSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuICB9XG4gIHNldHVwQWpheCAoKSB7XG4gICAgJC5hamF4U2V0dXAoe1xuICAgICAgc3RhdHVzQ29kZToge1xuICAgICAgICA0MDM6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIHRleHQ6ICdGb3JiaWRkZW4gQ29udGVudC4nLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgNDA0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnUm91dGUgbm90IGZvdW5kLicsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICA1MDA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIHRleHQ6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IuJyxcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY3Jvc3NEb21haW46IGZhbHNlLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnWC1DU1JGLVRva2VuJzogJCgnbWV0YVtuYW1lPVwiX3RcIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHNldHVwRm9ybSAoKSB7XG4gICAgdmFyICRmb3JtcyA9ICQoJy5hY3Rpb24tZm9ybScpXG4gICAgdmFyIGZvcm1Qcm9jZXNzaW5nID0gZmFsc2VcbiAgICB2YXIgYWxsb3dlZFR5cGVzID0gWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnUEFUQ0gnLCAnREVMRVRFJ11cblxuICAgICRmb3Jtcy5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJGZvcm0gPSAkKHRoaXMpXG4gICAgICAkZm9ybS5vbignY2xpY2snLCAnW3R5cGU9c3VibWl0XScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICAgICAgaWYgKGZvcm1Qcm9jZXNzaW5nKSB7XG4gICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIHRleHQ6ICdBIGZvcm0gcHJvY2VzcyBpcyBzdGlsbCBydW5uaW5nLicsXG4gICAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBodHRwVHlwZSA9ICgkZm9ybS5hdHRyKCdodHRwLXR5cGUnKSkudG9VcHBlckNhc2UoKVxuICAgICAgICBpZiAoYWxsb3dlZFR5cGVzLmluZGV4T2YoaHR0cFR5cGUpID09PSAtMSkge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnSFRUUCB0eXBlIG5vdCBhbGxvd2VkLicsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEkZm9ybS5wYXJzbGV5KCkudmFsaWRhdGUoKSkge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnSW52YWxpZCB2YWx1ZSBvbiBmb3JtLiBDaGVjayBhZ2Fpbi4nLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maXJtKCdTdWJtaXQ/JykpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgIGZvcm1Qcm9jZXNzaW5nID0gdHJ1ZVxuICAgICAgICAgIHZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCc6aW5wdXQnKVxuICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIHRydWUpXG4gICAgICAgICAgJHRoaXMuZGlzYWJsZSh0cnVlKVxuXG4gICAgICAgICAgbGV0IGZvcm1EYXRhID0ge31cbiAgICAgICAgICBmb3JtRGF0YS5kYXRhID0gJGZvcm0uc2VyaWFsaXplRm9ybSgpXG5cbiAgICAgICAgICAkLmVhY2goJGZvcm0uZGF0YSgpLCBmdW5jdGlvbiAoaSwgdikge1xuICAgICAgICAgICAgaWYgKGkgPT09ICduYXRpb25hbGl0eScpIHtcbiAgICAgICAgICAgICAgaWYgKCQoJyNpbnB1dE5hdGlvbmFsaXR5JykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gJCgnI2lucHV0TmF0aW9uYWxpdHknKS5kYXRhKCdkZHNsaWNrJylcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5kYXRhLm5hdGlvbmFsaXR5ID0gdmFsdWUuc2VsZWN0ZWREYXRhLnZhbHVlXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoJCgnI2lucHV0QmVuZWZpY2lhcnlOYXRpb25hbGl0eScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9ICQoJyNpbnB1dEJlbmVmaWNpYXJ5TmF0aW9uYWxpdHknKS5kYXRhKCdkZHNsaWNrJylcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5kYXRhLmJlbmVmaWNpYXJ5X25hdGlvbmFsaXR5ID0gdmFsdWUuc2VsZWN0ZWREYXRhLnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6IGh0dHBUeXBlLFxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgICAgICB1cmw6ICRmb3JtLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogZS50eXBlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGZvcm1Qcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgZmFsc2UpXG4gICAgICAgICAgICAgICR0aGlzLmRpc2FibGUoZmFsc2UpXG5cbiAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ3N1Y2Nlc3MnICYmIGUucmVkaXJlY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGUucmVkaXJlY3QpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGZvcm1Qcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgZmFsc2UpXG4gICAgICAgICAgICAgICR0aGlzLmRpc2FibGUoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGF0YVRhYmxlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHZhciAkdGFibGVzID0gJCgnLnRhYmxlLWdyaWQnKVxuICAgIHZhciAkbW9kYWwgPSAkKCcjc2hvd01vZGFsJylcbiAgICB2YXIgJG1vZGFsTG9hZGVyID0gJG1vZGFsLmZpbmQoJy5sb2FkaW5nJylcbiAgICB2YXIgJG1vZGFsRXJyb3IgPSAkbW9kYWwuZmluZCgnLmVycm9yJylcbiAgICB2YXIgJG1vZGFsQ29udGVudCA9ICRtb2RhbC5maW5kKCcjbW9kYWxDb250ZW50JylcbiAgICB2YXIgJGxvYWRlciA9ICQoJyNwYWdlTG9hZGVyJylcblxuICAgICR0YWJsZXMuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0YWJsZSA9ICQodGhpcylcbiAgICAgIHZhciBjb2x1bW5zID0gW11cblxuICAgICAgJHRhYmxlLmZpbmQoJ3RoJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCAkdGhlYWQgPSAkKHRoaXMpXG4gICAgICAgIGxldCBjb2x1bW5WYWx1ZSA9IHt9XG4gICAgICAgIGNvbHVtblZhbHVlWydkYXRhJ10gPSAkdGhlYWQuZGF0YSgnaWQnKVxuXG4gICAgICAgICQuZWFjaCgkdGhlYWQuZGF0YSgpLCBmdW5jdGlvbiAoaSwgdmFsdWUpIHtcbiAgICAgICAgICBpZiAoaSAhPT0gJ2lkJykge1xuICAgICAgICAgICAgY29sdW1uVmFsdWVbaV0gPSB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtblZhbHVlKVxuICAgICAgfSlcblxuICAgICAgJHRhYmxlLmRhdGFUYWJsZSh7XG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXG4gICAgICAgIGxhbmd1YWdlOiB3aW5kb3cuX2RhdGFUYWJsZXNMYW5nLFxuICAgICAgICBzZWFyY2hEZWxheTogMTAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgYWpheDogJHRhYmxlLmRhdGEoJ3VybCcpLFxuICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICBvcmRlcjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgJ2Rlc2MnXG4gICAgICAgIF1cbiAgICAgIH0pXG5cbiAgICAgICR0YWJsZS5vbignY2xpY2snLCAnLmJ0bi1zaG93JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgJG1vZGFsTG9hZGVyLnNob3coKVxuICAgICAgICAkbW9kYWxFcnJvci5oaWRlKClcbiAgICAgICAgJG1vZGFsQ29udGVudC5lbXB0eSgpXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkbW9kYWxMb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAkbW9kYWxDb250ZW50Lmh0bWwoZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICRtb2RhbExvYWRlci5oaWRlKClcbiAgICAgICAgICAgICRtb2RhbEVycm9yLnNob3coKVxuICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICAkdGFibGUub24oJ2NsaWNrJywgJy5idG4tZGVsZXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmIChjb25maXJtKCdSZW1vdmU/JykpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICRsb2FkZXIuc2hvdygpXG4gICAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnZGVsZXRlJyxcbiAgICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJyksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBlLnR5cGVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMucGFyZW50cygndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5cbmltcG9ydCB7IENvcmUgfSBmcm9tICcuL2NvcmUnXG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCdcbmltcG9ydCB7IERhdGFUYWJsZSB9IGZyb20gJy4vZGF0YXRhYmxlJ1xuaW1wb3J0IHsgQW5ub3VuY2VtZW50IH0gZnJvbSAnLi9hbm5vdW5jZW1lbnQnXG5pbXBvcnQgeyBQYWNrYWdlIH0gZnJvbSAnLi9wYWNrYWdlJ1xuaW1wb3J0IHsgUmVnaXN0ZXIgfSBmcm9tICcuL3JlZ2lzdGVyJ1xuaW1wb3J0IHsgU2hhcmVzIH0gZnJvbSAnLi9zaGFyZXMnXG5pbXBvcnQgeyBXaXRoZHJhdyB9IGZyb20gJy4vd2l0aGRyYXcnXG5cbm5ldyBDb3JlKClcbm5ldyBXaWRnZXQoKVxubmV3IERhdGFUYWJsZSgpXG5uZXcgQW5ub3VuY2VtZW50KClcbm5ldyBQYWNrYWdlKClcbm5ldyBSZWdpc3RlcigpXG5uZXcgU2hhcmVzKClcbm5ldyBXaXRoZHJhdygpXG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICQoJyNsb2FkaW5nJykuZmFkZU91dCg0MDAsICdsaW5lYXInKVxufSwgMzAwKVxuXG4kKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICBib2R5U2l6ZXIoKVxufSlcblxuYm9keVNpemVyKClcbnBhZ2VUcmFuc2l0aW9ucygpXG4kLnNsaWRlYmFycygpXG5cbiQoXCJkaXZbaWQ9JyNmaXhlZC1zaWRlYmFyJ11cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJzd2l0Y2gtb25cIikpIHtcblxuICAgIHZhciB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KClcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnI3BhZ2UtaGVhZGVyJykuaGVpZ2h0KClcbiAgICB2YXIgY29udGVudEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIGhlYWRlckhlaWdodFxuXG4gICAgJCgnI3BhZ2Utc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcuc2Nyb2xsLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG5cbiAgICAkKCcuc2Nyb2xsLXNpZGViYXInKS5zbGltc2Nyb2xsKHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgY29sb3I6ICdyZ2JhKDE1NSwgMTY0LCAxNjksIDAuNjgpJyxcbiAgICAgIHNpemU6ICc2cHgnXG4gICAgfSlcblxuICAgIHZhciBoZWFkZXJCZyA9ICQoJyNwYWdlLWhlYWRlcicpLmF0dHIoJ2NsYXNzJylcbiAgICAkKCcjaGVhZGVyLWxvZ28nKS5hZGRDbGFzcyhoZWFkZXJCZylcblxuICB9IGVsc2Uge1xuXG4gICAgdmFyIHdpbmRvd0hlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpXG4gICAgdmFyIGhlYWRlckhlaWdodCA9ICQoJyNwYWdlLWhlYWRlcicpLmhlaWdodCgpXG4gICAgdmFyIGNvbnRlbnRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBoZWFkZXJIZWlnaHRcblxuICAgICQoJyNwYWdlLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnLnNjcm9sbC1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuXG4gICAgJChcIi5zY3JvbGwtc2lkZWJhclwiKS5zbGltU2Nyb2xsKHtcbiAgICAgIGRlc3Ryb3k6IHRydWVcbiAgICB9KVxuXG4gICAgJCgnI2hlYWRlci1sb2dvJykucmVtb3ZlQ2xhc3MoJ2JnLWdyYWRpZW50LTknKVxuXG4gIH1cbn0pXG5cbiQoJy5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLmZpbmQoJy5kcm9wZG93bi1tZW51JykuZmlyc3QoKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlRG93bigpXG59KVxuXG4kKCcuZHJvcGRvd24nKS5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLmZpcnN0KCkuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVVwKClcbn0pXG5cbiQoZnVuY3Rpb24oKSB7XG4gICQoJyNzaWRlYmFyLW1lbnUnKS5zdXBlcmNsaWNrKHtcbiAgICBhbmltYXRpb246IHtcbiAgICAgIGhlaWdodDogJ3Nob3cnXG4gICAgfSxcbiAgICBhbmltYXRpb25PdXQ6IHtcbiAgICAgIGhlaWdodDogJ2hpZGUnXG4gICAgfVxuICB9KVxuICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpXG4gIHBhdGggPSBwYXRoW3BhdGgubGVuZ3RoLTFdXG4gIGlmIChwYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKFwiI3NpZGViYXItbWVudVwiKS5maW5kKFwiYVtocmVmJD0nXCIgKyBwYXRoICsgXCInXVwiKS5hZGRDbGFzcygnc2ZBY3RpdmUnKVxuICAgICQoXCIjc2lkZWJhci1tZW51XCIpLmZpbmQoXCJhW2hyZWYkPSdcIiArIHBhdGggKyBcIiddXCIpLnBhcmVudHMoKS5lcSgzKS5zdXBlcmNsaWNrKCdzaG93JylcbiAgfVxuXG4gICQoJyNjbG9zZS1zaWRlYmFyJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdjbG9zZWQtc2lkZWJhcicpXG4gICAgJCgnLmdseXBoLWljb24nLCB0aGlzKS50b2dnbGVDbGFzcygnaWNvbi1hbmdsZS1yaWdodCcpLnRvZ2dsZUNsYXNzKCdpY29uLWFuZ2xlLWxlZnQnKVxuICB9KVxufSlcblxuZnVuY3Rpb24gYm9keVNpemVyKCkge1xuICB2YXIgd2luZG93SGVpZ2h0LCBoZWFkZXJIZWlnaHQsIGNvbnRlbnRIZWlnaHRcblxuICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdmaXhlZC1zaWRlYmFyJykpIHtcblxuICAgIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKVxuICAgIGhlYWRlckhlaWdodCA9ICQoJyNwYWdlLWhlYWRlcicpLmhlaWdodCgpXG4gICAgY29udGVudEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIGhlYWRlckhlaWdodFxuICAgICQoJyNwYWdlLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnLnNjcm9sbC1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJyNwYWdlLWNvbnRlbnQnKS5jc3MoJ21pbi1oZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuXG4gIH0gZWxzZSB7XG5cbiAgICB3aW5kb3dIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKVxuICAgIGhlYWRlckhlaWdodCA9ICQoJyNwYWdlLWhlYWRlcicpLmhlaWdodCgpXG4gICAgY29udGVudEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIGhlYWRlckhlaWdodFxuICAgICQoJyNwYWdlLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnLnNjcm9sbC1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJyNwYWdlLWNvbnRlbnQnKS5jc3MoJ21pbi1oZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuXG4gIH1cbn1cblxuZnVuY3Rpb24gcGFnZVRyYW5zaXRpb25zKCkge1xuICB2YXIgdHJhbnNpdGlvbnMgPSBbJy5wdC1wYWdlLW1vdmVGcm9tTGVmdCcsICdwdC1wYWdlLW1vdmVGcm9tUmlnaHQnLCAncHQtcGFnZS1tb3ZlRnJvbVRvcCcsICdwdC1wYWdlLW1vdmVGcm9tQm90dG9tJywgJ3B0LXBhZ2UtZmFkZScsICdwdC1wYWdlLW1vdmVGcm9tTGVmdEZhZGUnLCAncHQtcGFnZS1tb3ZlRnJvbVJpZ2h0RmFkZScsICdwdC1wYWdlLW1vdmVGcm9tVG9wRmFkZScsICdwdC1wYWdlLW1vdmVGcm9tQm90dG9tRmFkZScsICdwdC1wYWdlLXNjYWxlVXAnLCAncHQtcGFnZS1zY2FsZVVwQ2VudGVyJywgJ3B0LXBhZ2UtZmxpcEluTGVmdCcsICdwdC1wYWdlLWZsaXBJblJpZ2h0JywgJ3B0LXBhZ2UtZmxpcEluQm90dG9tJywgJ3B0LXBhZ2UtZmxpcEluVG9wJywgJ3B0LXBhZ2Utcm90YXRlUHVsbFJpZ2h0JywgJ3B0LXBhZ2Utcm90YXRlUHVsbExlZnQnLCAncHQtcGFnZS1yb3RhdGVQdWxsVG9wJywgJ3B0LXBhZ2Utcm90YXRlUHVsbEJvdHRvbScsICdwdC1wYWdlLXJvdGF0ZVVuZm9sZExlZnQnLCAncHQtcGFnZS1yb3RhdGVVbmZvbGRSaWdodCcsICdwdC1wYWdlLXJvdGF0ZVVuZm9sZFRvcCcsICdwdC1wYWdlLXJvdGF0ZVVuZm9sZEJvdHRvbSddXG4gIGZvciAodmFyIGkgaW4gdHJhbnNpdGlvbnMpIHtcbiAgICB2YXIgdHJhbnNpdGlvbl9uYW1lID0gdHJhbnNpdGlvbnNbaV1cbiAgICBpZiAoJCgnLmFkZC10cmFuc2l0aW9uJykuaGFzQ2xhc3ModHJhbnNpdGlvbl9uYW1lKSkge1xuICAgICAgJCgnLmFkZC10cmFuc2l0aW9uJykuYWRkQ2xhc3ModHJhbnNpdGlvbl9uYW1lICsgJy1pbml0IHBhZ2UtdHJhbnNpdGlvbicpXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuYWRkLXRyYW5zaXRpb24nKS5yZW1vdmVDbGFzcyh0cmFuc2l0aW9uX25hbWUgKyAnICcgKyB0cmFuc2l0aW9uX25hbWUgKyAnLWluaXQgcGFnZS10cmFuc2l0aW9uJylcbiAgICAgIH0sIDEyMDApXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbn1cblxuaWYgKCQoJyNleGNoYW5nZVJhdGVDaGFydCcpLmxlbmd0aCkge1xuICAkLndoZW4oXG4gICAgJC5nZXRTY3JpcHQod2luZG93Ll9yb290ICsgJy9saWIvY2hhcnQtY29yZS5qcycpLFxuICAgICQuRGVmZXJyZWQoZnVuY3Rpb24gKGRlZmVycmVkKSB7XG4gICAgICAkKGRlZmVycmVkLnJlc29sdmUpXG4gICAgfSlcbiAgKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXhjaGFnZVJhdGVzID0gd2luZG93Ll9leGNoYW5nZVJhdGVcbiAgICB2YXIgbGFiZWxzID0gW11cbiAgICB2YXIgY2hhcnREYXRhQnV5ID0gW11cbiAgICB2YXIgY2hhcnREYXRhU2VsbCA9IFtdXG5cbiAgICAkLmVhY2goZXhjaGFnZVJhdGVzLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICBsYWJlbHMucHVzaChpbmRleCArIFwiIChcIiArIHZhbHVlLmN1cnJlbmN5ICsgXCIpXCIpXG4gICAgICBjaGFydERhdGFCdXkucHVzaCh2YWx1ZS5idXkpXG4gICAgICBjaGFydERhdGFTZWxsLnB1c2godmFsdWUuc2VsbClcbiAgICB9KVxuICAgIHZhciBjaGFydERhdGEgPSB7XG4gICAgICB0eXBlOiAnbGluZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICBsYWJlbDogJ0J1eScsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YUJ1eSxcbiAgICAgICAgICBmaWxsOiBmYWxzZVxuICAgICAgICB9LHtcbiAgICAgICAgICBsYWJlbDogJ1NlbGwnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig1NCwgMTYyLCAyMzUpJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYig1NCwgMTYyLCAyMzUpJyxcbiAgICAgICAgICBkYXRhOiBjaGFydERhdGFTZWxsLFxuICAgICAgICAgIGZpbGw6IGZhbHNlXG4gICAgICAgIH1dLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIHRpdGxlOntcbiAgICAgICAgICBkaXNwbGF5OnRydWUsXG4gICAgICAgICAgdGV4dDogJ0V4Y2hhbmdlIFJhdGVzJ1xuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIG1vZGU6ICdpbmRleCcsXG4gICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBtb2RlOiAnbmVhcmVzdCcsXG4gICAgICAgICAgaW50ZXJzZWN0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdDb3VudHJ5J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1dLFxuICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdCVVkvU0VMTCBWYWx1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICB9IFxuICAgIH1cbiAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGNoYW5nZVJhdGVDaGFydFwiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmhlaWdodCA9IDUwMDtcbiAgICBuZXcgQ2hhcnQoY3R4LCBjaGFydERhdGEpXG4gIH0pLmZhaWwoZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dClcbiAgfSlcbn1cbiIsImV4cG9ydCBjbGFzcyBQYWNrYWdlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICgkKCcjcGFja2FnZUxpc3RUYWJsZScpLmxlbmd0aCkge1xuICAgICAgdmFyICR0YWJsZSA9ICQoJyNwYWNrYWdlTGlzdFRhYmxlJylcbiAgICAgIHZhciAkbG9hZGVyID0gJCgnI3BhZ2VMb2FkZXInKVxuICAgICAgdmFyIHByb2Nlc3NpbmcgPSBmYWxzZVxuXG4gICAgICAkdGFibGUub24oJ2NsaWNrJywgJ1t0eXBlPXN1Ym1pdF0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgIHZhciAkcm93ID0gJHRoaXMuY2xvc2VzdCgndHInKVxuXG4gICAgICAgIGlmIChjb25maXJtKCdTdWJtaXQ/JykpIHtcbiAgICAgICAgICBpZiAoIXByb2Nlc3NpbmcpIHtcbiAgICAgICAgICAgICRsb2FkZXIuc2hvdygpXG4gICAgICAgICAgICBwcm9jZXNzaW5nID0gdHJ1ZVxuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJyksXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBkYXRhOiAkcm93LnNlcmlhbGl6ZUZvcm0oKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbicsXG4gICAgICAgICAgICAgIHRleHQ6ICdBIHByb2Nlc3MgaXMgc3RpbGwgb25nb2luZy4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBSZWdpc3RlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoJCgnI3JlZ2lzdGVyRm9ybScpLmxlbmd0aCkge1xuICAgICAgbGV0ICRmb3JtID0gJCgnI3JlZ2lzdGVyRm9ybScpXG4gICAgICB2YXIgJHNob3dNZW1iZXJCdG4gPSAkZm9ybS5maW5kKCcuYnRuLXNob3cnKVxuICAgICAgdmFyICRtb2RhbCA9ICQoJyNzaG93TW9kYWwnKVxuICAgICAgdmFyICRtb2RhbExvYWRlciA9ICRtb2RhbC5maW5kKCcubG9hZGluZycpXG4gICAgICB2YXIgJG1vZGFsRXJyb3IgPSAkbW9kYWwuZmluZCgnLmVycm9yJylcbiAgICAgIHZhciAkbW9kYWxDb250ZW50ID0gJG1vZGFsLmZpbmQoJyNtb2RhbENvbnRlbnQnKVxuICAgICAgJHNob3dNZW1iZXJCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgJG1vZGFsTG9hZGVyLnNob3coKVxuICAgICAgICAkbW9kYWxFcnJvci5oaWRlKClcbiAgICAgICAgJG1vZGFsQ29udGVudC5lbXB0eSgpXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpICsgJz91PScgKyAkdGhpcy5wYXJlbnQoKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmZpbmQoJy5mb3JtLWNvbnRyb2wnKS52YWwoKSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJG1vZGFsTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgJG1vZGFsQ29udGVudC5odG1sKGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAkbW9kYWxMb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAkbW9kYWxFcnJvci5zaG93KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTaGFyZXMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCQoJyNzaGFyZXNMaXN0VGFibGUnKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGlzdCgpXG4gICAgfVxuXG4gICAgaWYgKCQoJyNyZW1vdmVTaGFyZXNCdG4nKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVtb3ZlUXVldWUoKVxuICAgIH1cblxuICAgIGlmICgkKCcjc3BsaXRGb3JtJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNwbGl0KClcbiAgICB9XG5cbiAgICBpZiAoJCgnI3NoYXJlc0ZyZWV6ZUxpc3RUYWJsZScpLmxlbmd0aCkge1xuICAgICAgdGhpcy5mcmVlemVMaXN0KClcbiAgICB9XG5cbiAgICBpZiAoJCgnI3NoYXJlc0J1eUxpc3RUYWJsZScpLmxlbmd0aCkge1xuICAgICAgdGhpcy5idXlMaXN0KClcbiAgICB9XG5cbiAgICBpZiAoJCgnI3NoYXJlc1NlbGxMaXN0VGFibGUnKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2VsbExpc3QoKVxuICAgIH1cbiAgfVxuICBsaXN0ICgpIHtcbiAgICB2YXIgJHRhYmxlID0gJCgnI3NoYXJlc0xpc3RUYWJsZScpXG4gICAgdmFyICRsb2FkZXIgPSAkKCcjcGFnZUxvYWRlcicpXG4gICAgdmFyIHByb2Nlc3NpbmcgPSBmYWxzZVxuXG4gICAgJHRhYmxlLm9uKCdjbGljaycsICdbdHlwZT1zdWJtaXRdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIHZhciAkcm93ID0gJHRoaXMuY2xvc2VzdCgndHInKVxuXG4gICAgICBpZiAoY29uZmlybSgnU3VibWl0PycpKSB7XG4gICAgICAgIGlmICghcHJvY2Vzc2luZykge1xuICAgICAgICAgICRsb2FkZXIuc2hvdygpXG4gICAgICAgICAgcHJvY2Vzc2luZyA9IHRydWVcblxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBkYXRhOiAkcm93LnNlcmlhbGl6ZUZvcm0oKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbicsXG4gICAgICAgICAgICB0ZXh0OiAnQSBwcm9jZXNzIGlzIHN0aWxsIG9uZ29pbmcuJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJlbW92ZVF1ZXVlICgpIHtcbiAgICB2YXIgJGJ1dHRvbiA9ICQoJyNyZW1vdmVTaGFyZXNCdG4nKVxuICAgICRidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNvbmZpcm0oJ1JlbW92ZT8gQ2Fubm90IGJlIHVuZG8uJykpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgICAkdGhpcy5kaXNhYmxlKHRydWUpXG5cbiAgICAgICAgJC5wb3N0KCR0aGlzLmRhdGEoJ3VybCcpKS5kb25lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2UsXG4gICAgICAgICAgICB0eXBlOiBlLnR5cGVcbiAgICAgICAgICB9KVxuICAgICAgICAgICR0aGlzLmRpc2FibGUoZmFsc2UpXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0LFxuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgJHRoaXMuZGlzYWJsZShmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHNwbGl0ICgpIHtcbiAgICB2YXIgY3VycmVudFNoYXJlcyA9IHBhcnNlRmxvYXQoJCgnI2N1cnJlbnRTaGFyZXMnKS50ZXh0KCkpXG4gICAgdmFyICRmb3JtID0gJCgnI3NwbGl0Rm9ybScpXG4gICAgdmFyICRzcGxpdFRvID0gJGZvcm0uZmluZCgnW25hbWU9c3BsaXRfdG9dJylcbiAgICB2YXIgJHNwbGl0QnkgPSAkZm9ybS5maW5kKCdbbmFtZT1zcGxpdF9ieV0nKVxuXG4gICAgJHNwbGl0VG8ub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgdmFyIHNwbGl0QnkgPSBjdXJyZW50U2hhcmVzIC8gcGFyc2VGbG9hdCgkdGhpcy52YWwoKSlcbiAgICAgICRzcGxpdEJ5LnZhbChzcGxpdEJ5LnRvRml4ZWQoMykpXG4gICAgfSlcbiAgfVxuICBmcmVlemVMaXN0ICgpIHtcbiAgICB2YXIgJHRhYmxlID0gJCgnI3NoYXJlc0ZyZWV6ZUxpc3RUYWJsZScpXG4gICAgdmFyICRsb2FkZXIgPSAkKCcjcGFnZUxvYWRlcicpXG4gICAgdmFyIHByb2Nlc3NpbmcgPSBmYWxzZVxuXG4gICAgJHRhYmxlLm9uKCdjbGljaycsICcuYnRuLXVubG9jaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICAgIGlmIChjb25maXJtKCdVbmxvY2s/JykpIHtcbiAgICAgICAgaWYgKCFwcm9jZXNzaW5nKSB7XG4gICAgICAgICAgJGxvYWRlci5zaG93KClcbiAgICAgICAgICBwcm9jZXNzaW5nID0gdHJ1ZVxuXG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJyksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgdHlwZTogZS50eXBlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgdGV4dDogJ0EgcHJvY2VzcyBpcyBzdGlsbCBvbmdvaW5nLidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgICR0YWJsZS5vbignY2xpY2snLCAnLmJ0bi1lZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIHZhciAkcm93ID0gJHRoaXMuY2xvc2VzdCgndHInKVxuICAgICAgaWYgKGNvbmZpcm0oJ1VwZGF0ZT8nKSkge1xuICAgICAgICBpZiAoIXByb2Nlc3NpbmcpIHtcbiAgICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAgIHByb2Nlc3NpbmcgPSB0cnVlXG5cbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZGF0YTogJHJvdy5zZXJpYWxpemVGb3JtKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgdHlwZTogZS50eXBlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgdGV4dDogJ0EgcHJvY2VzcyBpcyBzdGlsbCBvbmdvaW5nLidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBidXlMaXN0ICgpIHtcbiAgICB2YXIgJHRhYmxlID0gJCgnI3NoYXJlc0J1eUxpc3RUYWJsZScpXG4gICAgdmFyICRsb2FkZXIgPSAkKCcjcGFnZUxvYWRlcicpXG4gICAgdmFyIHByb2Nlc3NpbmcgPSBmYWxzZVxuXG4gICAgJHRhYmxlLm9uKCdjbGljaycsICcuYnRuLWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgdmFyICRyb3cgPSAkdGhpcy5jbG9zZXN0KCd0cicpXG4gICAgICBpZiAoY29uZmlybSgnVXBkYXRlPycpKSB7XG4gICAgICAgIGlmICghcHJvY2Vzc2luZykge1xuICAgICAgICAgICRsb2FkZXIuc2hvdygpXG4gICAgICAgICAgcHJvY2Vzc2luZyA9IHRydWVcblxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBkYXRhOiAkcm93LnNlcmlhbGl6ZUZvcm0oKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbicsXG4gICAgICAgICAgICB0ZXh0OiAnQSBwcm9jZXNzIGlzIHN0aWxsIG9uZ29pbmcuJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHNlbGxMaXN0ICgpIHtcbiAgICB2YXIgJHRhYmxlID0gJCgnI3NoYXJlc1NlbGxMaXN0VGFibGUnKVxuICAgIHZhciAkbG9hZGVyID0gJCgnI3BhZ2VMb2FkZXInKVxuICAgIHZhciBwcm9jZXNzaW5nID0gZmFsc2VcblxuICAgICR0YWJsZS5vbignY2xpY2snLCAnLmJ0bi1lZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIHZhciAkcm93ID0gJHRoaXMuY2xvc2VzdCgndHInKVxuICAgICAgaWYgKGNvbmZpcm0oJ1VwZGF0ZT8nKSkge1xuICAgICAgICBpZiAoIXByb2Nlc3NpbmcpIHtcbiAgICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAgIHByb2Nlc3NpbmcgPSB0cnVlXG5cbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZGF0YTogJHJvdy5zZXJpYWxpemVGb3JtKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgdHlwZTogZS50eXBlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgdGV4dDogJ0EgcHJvY2VzcyBpcyBzdGlsbCBvbmdvaW5nLidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFdpZGdldCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAkKCdhW2hyZWY9XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9KVxuICAgIFxuICAgICQoXCIudG9kby1ib3ggbGkgaW5wdXRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCd0b2RvLWRvbmUnKVxuICAgIH0pXG4gICAgXG4gICAgdmFyIG92ZXJhbGxXaWR0aCA9IDBcbiAgICAkKCcudGltZWxpbmUtc2Nyb2xsIC50bC1yb3cnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtKSB7XG4gICAgICB2YXIgJGVsZW0gPSAkKGVsZW0pXG4gICAgICBvdmVyYWxsV2lkdGggKz0gJGVsZW0ub3V0ZXJXaWR0aCgpICsgcGFyc2VJbnQoJGVsZW0uY3NzKCdtYXJnaW4tbGVmdCcpLCAxMCkgKyBwYXJzZUludCgkZWxlbS5jc3MoJ21hcmdpbi1yaWdodCcpLCAxMClcbiAgICB9KVxuICAgICQoJy50aW1lbGluZS1ob3Jpem9udGFsJywgdGhpcykud2lkdGgob3ZlcmFsbFdpZHRoKVxuXG4gICAgJCgnLmlucHV0LXN3aXRjaC1hbHQnKS5zaW1wbGVDaGVja2JveCgpXG5cbiAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0uY3VzdG9tLWNoZWNrYm94JykudW5pZm9ybSgpXG4gICAgJCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdLmN1c3RvbS1yYWRpbycpLnVuaWZvcm0oKVxuICAgICQoJy5jdXN0b20tc2VsZWN0JykudW5pZm9ybSgpXG5cbiAgICAkKCcuc2VsZWN0b3InKS5hcHBlbmQoJzxpIGNsYXNzPVwiZ2x5cGgtaWNvbiBpY29uLWNhcmV0LWRvd25cIj48L2k+JylcblxuICAgICQoJy5jaGVja2VyIHNwYW4nKS5hcHBlbmQoJzxpIGNsYXNzPVwiZ2x5cGgtaWNvbiBpY29uLWNoZWNrXCI+PC9pPicpXG4gICAgJCgnLnJhZGlvIHNwYW4nKS5hcHBlbmQoJzxpIGNsYXNzPVwiZ2x5cGgtaWNvbiBpY29uLWNpcmNsZVwiPjwvaT4nKVxuICAgIFxuICAgICQoJy5zY3JvbGxhYmxlLXNsaW0nKS5zbGltU2Nyb2xsKHtcbiAgICAgIGNvbG9yOiAnIzhkYTBhYScsXG4gICAgICBzaXplOiAnMTBweCcsXG4gICAgICBhbHdheXNWaXNpYmxlOiB0cnVlXG4gICAgfSlcbiAgICBcbiAgICAkKCcuc2Nyb2xsYWJsZS1zbGltLXNpZGViYXInKS5zbGltU2Nyb2xsKHtcbiAgICAgIGNvbG9yOiAnIzhkYTBhYScsXG4gICAgICBzaXplOiAnMTBweCcsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGFsd2F5c1Zpc2libGU6IHRydWVcbiAgICB9KVxuICAgIFxuICAgICQoJy5zY3JvbGxhYmxlLXNsaW0tYm94Jykuc2xpbVNjcm9sbCh7XG4gICAgICBjb2xvcjogJyM4ZGEwYWEnLFxuICAgICAgc2l6ZTogJzZweCcsXG4gICAgICBhbHdheXNWaXNpYmxlOiBmYWxzZVxuICAgIH0pXG5cbiAgICAkKCcubG9hZGluZy1idXR0b24nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBidG4gPSAkKHRoaXMpXG4gICAgICBidG4uYnV0dG9uKCdsb2FkaW5nJylcbiAgICB9KVxuXG4gICAgJCgnLnRvb2x0aXAtYnV0dG9uJykudG9vbHRpcCh7XG4gICAgICBjb250YWluZXI6ICdib2R5J1xuICAgIH0pXG4gICAgXG4gICAgJCgnLmFsZXJ0LWNsb3NlLWJ0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZU91dERvd24nKVxuICAgIH0pXG4gICAgXG4gICAgJCgnLnBvcG92ZXItYnV0dG9uJykucG9wb3Zlcih7XG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGh0bWw6IHRydWUsXG4gICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICBjb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRhdGFJRCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpXG4gICAgICAgIHJldHVybiAkKGRhdGFJRCkuaHRtbCgpXG4gICAgICB9XG4gICAgfSkuY2xpY2soZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH0pXG5cbiAgICAkKCcucG9wb3Zlci1idXR0b24tZGVmYXVsdCcpLnBvcG92ZXIoe1xuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICBodG1sOiB0cnVlLFxuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfSkuY2xpY2soZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH0pXG5cbiAgICAkKCcuZGF0ZXBpY2tlcicpLmJzZGF0ZXBpY2tlcih7XG4gICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJ1xuICAgIH0pXG4gICAgJCgnLmlucHV0LXN3aXRjaCcpLmJvb3RzdHJhcFN3aXRjaCgpXG5cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbHNjcmVlbi1idG4nKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxzY3JlZW4tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY3JlZW5mdWxsLmVuYWJsZWQpIHtcbiAgICAgICAgICBzY3JlZW5mdWxsLnJlcXVlc3QoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufSIsImV4cG9ydCBjbGFzcyBXaXRoZHJhdyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoJCgnI3dpdGhkcmF3TGlzdFRhYmxlJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxpc3QoKVxuICAgIH1cbiAgfVxuICBsaXN0ICgpIHtcbiAgICB2YXIgJHRhYmxlID0gJCgnI3dpdGhkcmF3TGlzdFRhYmxlJylcbiAgICB2YXIgJGxvYWRlciA9ICQoJyNwYWdlTG9hZGVyJylcblxuICAgICR0YWJsZS5vbignY2xpY2snLCAnLmJ0bi1jb25maXJtJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdGhpcyB3aXRoZHJhdz8nKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICRsb2FkZXIuc2hvdygpXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJyksXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgc3RhdHVzOiAnZG9uZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhocikge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAkdGFibGUub24oJ2NsaWNrJywgJy5idG4tcmVqZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgaWYgKGNvbmZpcm0oJ1JlamVjdCB0aGlzIHdpdGhkcmF3PycpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgJGxvYWRlci5zaG93KClcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdyZWplY3QnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdHlwZTogZS50eXBlLFxuICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIpIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
