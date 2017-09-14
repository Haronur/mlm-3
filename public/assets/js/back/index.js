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

    if ($('#sharesFollowListTable').length) {
      this.followList();
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
  }, {
    key: 'followList',
    value: function followList() {
      var $table = $('#sharesFollowListTable');
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

  if ($('.dd-icon').length) {
    $('.dd-icon').each(function () {
      $(this).ddslick({
        width: '100%',
        defaultSelectedIndex: $(this).prop('selectedIndex')
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL2Fubm91bmNlbWVudC5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay9jb3JlLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL2RhdGF0YWJsZS5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay9pbmRleC5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay9wYWNrYWdlLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL3JlZ2lzdGVyLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL3NoYXJlcy5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay93aWRnZXQuanMiLCJyZXNvdXJjZXMvYXNzZXRzL2pzL2JhY2svd2l0aGRyYXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUNGYSx1QixBQUFBLDJCQUNYOzBCQUFlO3dDQUNiOztRQUFJLEVBQUEsQUFBRSwyQkFBTixBQUFpQyxRQUFRLEFBQ3ZDO1dBQUEsQUFBSyxBQUNOO0FBRUQ7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Rk4sQUFFQSxBQUFXLEFBQ2hCOztzQkFISyxBQUdDLEFBQ0ksQUFFVjtBQUhNLEFBQ0o7cUJBRU8saUJBQUEsQUFBVSxHQUFHLEFBQ3BCO3FCQUFPLEFBQ0w7c0JBQU0sRUFESCxBQUNLLEFBQ1I7c0JBQU0sRUFGUixBQUFLLEFBRUssQUFFVjtBQUpLO3NCQUlMLEFBQVEsQUFDVDtBQVpJLEFBYUw7bUJBQU8sZUFBQSxBQUFVLEtBQUssQUFDcEI7cUJBQU8sQUFDTDtzQkFERyxBQUNHLEFBQ047c0JBQU0sSUFGUixBQUFLLEFBRU8sQUFFWjtBQUpLO3NCQUlMLEFBQVEsQUFDVDtBQW5CSCxBQUFPLEFBcUJSO0FBckJRLEFBQ0w7QUFxQkw7QUExQkQsQUE0QkE7O2FBQUEsQUFBTyxHQUFQLEFBQVUsU0FBVixBQUFtQixlQUFlLFlBQVksQUFDNUM7WUFBSSxRQUFRLEVBQVosQUFBWSxBQUFFLEFBQ2Q7WUFBSSxRQUFKLEFBQUksQUFBUSwwQkFBMEIsQUFBRTtBQUN0QztrQkFBQSxBQUFRLEFBQ1I7WUFBQSxBQUFFO2tCQUFLLEFBQ0MsQUFDTjtpQkFBSyxNQUFBLEFBQU0sS0FGTixBQUVBLEFBQVcsQUFDaEI7O3NCQUhLLEFBR0MsQUFDSSxBQUVWO0FBSE0sQUFDSjtxQkFFTyxpQkFBQSxBQUFVLEdBQUcsQUFDcEI7cUJBQU8sQUFDTDtzQkFBTSxFQURILEFBQ0ssQUFDUjtzQkFBTSxFQUZSLEFBQUssQUFFSyxBQUVWO0FBSks7c0JBSUwsQUFBUSxBQUNUO0FBWkksQUFhTDttQkFBTyxlQUFBLEFBQVUsS0FBSyxBQUNwQjtxQkFBTyxBQUNMO3NCQURHLEFBQ0csQUFDTjtzQkFBTSxJQUZSLEFBQUssQUFFTyxBQUVaO0FBSks7c0JBSUwsQUFBUSxBQUNUO0FBbkJILEFBQU8sQUFxQlI7QUFyQlEsQUFDTDtBQXFCTDtBQTFCRCxBQTJCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCJleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICgkKCcjY3JlYXRlQW5ub3VuY2VtZW50Rm9ybScpLmxlbmd0aCkge1xuICAgICAgdGhpcy5jcmVhdGUoKVxuICAgIH1cblxuICAgIGlmICgkKCcjZWRpdEFubm91bmNlbWVudEZvcm0nKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZWRpdCgpXG4gICAgfVxuICB9XG4gIGNyZWF0ZSAoKSB7XG4gICAgdmFyICRmb3JtID0gJCgnI2NyZWF0ZUFubm91bmNlbWVudEZvcm0nKVxuICAgIHZhciBlZGl0b3JFTiA9ICQoJyNlZGl0b3JFTicpLnN1bW1lcm5vdGUoe1xuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb25JbWFnZVVwbG9hZDogZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICAgaWYgKGZpbGVzWzBdLnNpemUgPiAyMDAwMDAwKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBzbWFsbGVyIHRoYW4gMk1iLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9qcGVnJyAmJlxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL3BuZydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIG11c3QgYmUganBnIG9yIHBuZy4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdpbWFnZUZpbGUnLCBmaWxlc1swXSlcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgICAgdXJsOiAkZm9ybS5kYXRhKCd1cGxvYWQnKSxcbiAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0b3JFTi5zdW1tZXJub3RlKCdpbnNlcnRJbWFnZScsIHJlcy51cmwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXMudHlwZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHZhciBlZGl0b3JDSFMgPSAkKCcjZWRpdG9yQ0hTJykuc3VtbWVybm90ZSh7XG4gICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBvbkltYWdlVXBsb2FkOiBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgICBpZiAoZmlsZXNbMF0uc2l6ZSA+IDIwMDAwMDApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIHNtYWxsZXIgdGhhbiAyTWIuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL2pwZWcnICYmXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgbXVzdCBiZSBqcGcgb3IgcG5nLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ltYWdlRmlsZScsIGZpbGVzWzBdKVxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgICB1cmw6ICRmb3JtLmRhdGEoJ3VwbG9hZCcpLFxuICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgIGVkaXRvckNIUy5zdW1tZXJub3RlKCdpbnNlcnRJbWFnZScsIHJlcy51cmwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXMudHlwZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHZhciBlZGl0b3JDSFQgPSAkKCcjZWRpdG9yQ0hUJykuc3VtbWVybm90ZSh7XG4gICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBvbkltYWdlVXBsb2FkOiBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgICBpZiAoZmlsZXNbMF0uc2l6ZSA+IDIwMDAwMDApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIHNtYWxsZXIgdGhhbiAyTWIuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL2pwZWcnICYmXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgbXVzdCBiZSBqcGcgb3IgcG5nLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ltYWdlRmlsZScsIGZpbGVzWzBdKVxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgICB1cmw6ICRmb3JtLmRhdGEoJ3VwbG9hZCcpLFxuICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgIGVkaXRvckNIVC5zdW1tZXJub3RlKCdpbnNlcnRJbWFnZScsIHJlcy51cmwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXMudHlwZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHZhciBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgJGZvcm0ub24oJ2NsaWNrJywgJ1t0eXBlPXN1Ym1pdF0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZm9ybVByb2Nlc3NpbmcpIHtcbiAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICB0ZXh0OiAnQSBmb3JtIHByb2Nlc3MgaXMgc3RpbGwgcnVubmluZy4nLFxuICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbidcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICghJGZvcm0ucGFyc2xleSgpLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICB0ZXh0OiAnSW52YWxpZCB2YWx1ZSBvbiBmb3JtLiBDaGVjayBhZ2Fpbi4nLFxuICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpcm0oJ1N1Ym1pdD8nKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgIGZvcm1Qcm9jZXNzaW5nID0gdHJ1ZVxuICAgICAgICB2YXIgJGlucHV0ID0gJGZvcm0uZmluZCgnOmlucHV0JylcbiAgICAgICAgJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgdHJ1ZSlcbiAgICAgICAgJHRoaXMuZGlzYWJsZSh0cnVlKVxuXG4gICAgICAgICQucG9zdCgkZm9ybS5kYXRhKCd1cmwnKSwge1xuICAgICAgICAgICdkYXRhJzogJGZvcm0uc2VyaWFsaXplRm9ybSgpXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgZmFsc2UpXG4gICAgICAgICAgJHRoaXMuZGlzYWJsZShmYWxzZSlcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZSxcbiAgICAgICAgICAgIHR5cGU6IGUudHlwZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIGZhbHNlKVxuICAgICAgICAgICR0aGlzLmRpc2FibGUoZmFsc2UpXG4gICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0LFxuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBlZGl0ICgpIHtcbiAgICB2YXIgJGZvcm0gPSAkKCcjZWRpdEFubm91bmNlbWVudEZvcm0nKVxuICAgIHZhciBlZGl0b3JFTiA9ICQoJyNlZGl0b3JFTicpLnN1bW1lcm5vdGUoe1xuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb25JbWFnZVVwbG9hZDogZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICAgaWYgKGZpbGVzWzBdLnNpemUgPiAyMDAwMDAwKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBzbWFsbGVyIHRoYW4gMk1iLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9qcGVnJyAmJlxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL3BuZydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIG11c3QgYmUganBnIG9yIHBuZy4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdpbWFnZUZpbGUnLCBmaWxlc1swXSlcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgICAgdXJsOiAkZm9ybS5kYXRhKCd1cGxvYWQnKSxcbiAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0b3JFTi5zdW1tZXJub3RlKCdpbnNlcnRJbWFnZScsIHJlcy51cmwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXMudHlwZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHZhciBlZGl0b3JDSFMgPSAkKCcjZWRpdG9yQ0hTJykuc3VtbWVybm90ZSh7XG4gICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBvbkltYWdlVXBsb2FkOiBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgICBpZiAoZmlsZXNbMF0uc2l6ZSA+IDIwMDAwMDApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIHNtYWxsZXIgdGhhbiAyTWIuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL2pwZWcnICYmXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgbXVzdCBiZSBqcGcgb3IgcG5nLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ltYWdlRmlsZScsIGZpbGVzWzBdKVxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgICB1cmw6ICRmb3JtLmRhdGEoJ3VwbG9hZCcpLFxuICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgIGVkaXRvckNIUy5zdW1tZXJub3RlKCdpbnNlcnRJbWFnZScsIHJlcy51cmwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXMudHlwZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHZhciBlZGl0b3JDSFQgPSAkKCcjZWRpdG9yQ0hUJykuc3VtbWVybm90ZSh7XG4gICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBvbkltYWdlVXBsb2FkOiBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgICBpZiAoZmlsZXNbMF0uc2l6ZSA+IDIwMDAwMDApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIHNtYWxsZXIgdGhhbiAyTWIuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL2pwZWcnICYmXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgbXVzdCBiZSBqcGcgb3IgcG5nLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ltYWdlRmlsZScsIGZpbGVzWzBdKVxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgICB1cmw6ICRmb3JtLmRhdGEoJ3VwbG9hZCcpLFxuICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgIGVkaXRvckNIVC5zdW1tZXJub3RlKCdpbnNlcnRJbWFnZScsIHJlcy51cmwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXMudHlwZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHZhciBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgJGZvcm0ub24oJ2NsaWNrJywgJ1t0eXBlPXN1Ym1pdF0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZm9ybVByb2Nlc3NpbmcpIHtcbiAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICB0ZXh0OiAnQSBmb3JtIHByb2Nlc3MgaXMgc3RpbGwgcnVubmluZy4nLFxuICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbidcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICghJGZvcm0ucGFyc2xleSgpLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICB0ZXh0OiAnSW52YWxpZCB2YWx1ZSBvbiBmb3JtLiBDaGVjayBhZ2Fpbi4nLFxuICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpcm0oJ1N1Ym1pdD8nKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgIGZvcm1Qcm9jZXNzaW5nID0gdHJ1ZVxuICAgICAgICB2YXIgJGlucHV0ID0gJGZvcm0uZmluZCgnOmlucHV0JylcbiAgICAgICAgJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgdHJ1ZSlcbiAgICAgICAgJHRoaXMuZGlzYWJsZSh0cnVlKVxuXG4gICAgICAgICQucG9zdCgkZm9ybS5kYXRhKCd1cmwnKSwge1xuICAgICAgICAgICdkYXRhJzogJGZvcm0uc2VyaWFsaXplRm9ybSgpXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgZmFsc2UpXG4gICAgICAgICAgJHRoaXMuZGlzYWJsZShmYWxzZSlcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZSxcbiAgICAgICAgICAgIHR5cGU6IGUudHlwZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIGZhbHNlKVxuICAgICAgICAgICR0aGlzLmRpc2FibGUoZmFsc2UpXG4gICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0LFxuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kaXNhYmxlKClcbiAgICB0aGlzLm5vdHlEZWZhdWx0KClcbiAgICB0aGlzLnNlcmlhbGl6ZUZvcm0oKVxuICAgIHRoaXMuc2V0dXBBamF4KClcbiAgICB0aGlzLnNldHVwRm9ybSgpXG4gIH1cbiAgZGlzYWJsZSAoKSB7XG4gICAgJC5mbi5leHRlbmQoe1xuICAgICAgZGlzYWJsZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzcGFuJykuaGlkZSgpXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJykuZmluZCgnLmJ0bi1wcmVsb2FkZXInKS5zaG93KClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzcGFuJykuc2hvdygpXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJykuZmluZCgnLmJ0bi1wcmVsb2FkZXInKS5oaWRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBub3R5RGVmYXVsdCAoKSB7XG4gICAgJC5ub3R5LmRlZmF1bHRzID0ge1xuICAgICAgbGF5b3V0OiAndG9wJyxcbiAgICAgIHRoZW1lOiAncmVsYXgnLFxuICAgICAgdHlwZTogJ2FsZXJ0JyxcbiAgICAgIHRleHQ6ICcnLFxuICAgICAgZGlzbWlzc1F1ZXVlOiB0cnVlLFxuICAgICAgZm9yY2U6IGZhbHNlLFxuICAgICAgbWF4VmlzaWJsZTogNSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cIm5vdHlfbWVzc2FnZVwiPjxzcGFuIGNsYXNzPVwibm90eV90ZXh0XCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJub3R5X2Nsb3NlXCI+PC9kaXY+PC9kaXY+JyxcbiAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgb3BlbjogJ2FuaW1hdGVkIGZhZGVJbkRvd24nLFxuICAgICAgICBjbG9zZTogJ2FuaW1hdGVkIGZhZGVPdXRVcCcsXG4gICAgICAgIGVhc2luZzogJ3N3aW5nJyxcbiAgICAgICAgc3BlZWQ6IDUwMFxuICAgICAgfSxcbiAgICAgIGNsb3NlV2l0aDogWydjbGljayddLFxuICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAga2lsbGVyOiBmYWxzZSxcbiAgICAgIGNhbGxiYWNrOiB7XG4gICAgICAgIG9uU2hvdzogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIGFmdGVyU2hvdzogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBhZnRlckNsb3NlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgb25DbG9zZUNsaWNrOiBmdW5jdGlvbiAoKSB7fVxuICAgICAgfSxcbiAgICAgIGJ1dHRvbnM6IGZhbHNlXG4gICAgfVxuICB9XG4gIHNlcmlhbGl6ZUZvcm0gKCkge1xuICAgICQuZm4uc2VyaWFsaXplRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkYXRhLCBsb29rdXAsIHBhcnNlLCBzZWxlY3RvclxuICAgICAgZGF0YSA9IHZvaWQgMFxuICAgICAgbG9va3VwID0gdm9pZCAwXG4gICAgICBwYXJzZSA9IHZvaWQgMFxuICAgICAgc2VsZWN0b3IgPSB2b2lkIDBcbiAgICAgIGlmICh0aGlzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBkYXRhID0ge31cbiAgICAgIGxvb2t1cCA9IGRhdGFcbiAgICAgIHNlbGVjdG9yID0gJzppbnB1dFt0eXBlIT1cImNoZWNrYm94XCJdW3R5cGUhPVwicmFkaW9cIl0sIGlucHV0OmNoZWNrZWQnXG4gICAgICBwYXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRlbCwgY2FwLCBpLCBuYW1lZFxuICAgICAgICAkZWwgPSB2b2lkIDBcbiAgICAgICAgY2FwID0gdm9pZCAwXG4gICAgICAgIGkgPSB2b2lkIDBcbiAgICAgICAgbmFtZWQgPSB2b2lkIDBcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBuYW1lZCA9IHRoaXMubmFtZS5yZXBsYWNlKC9cXFsoW15cXF1dKyk/XFxdL2csICcsJDEnKS5zcGxpdCgnLCcpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgICAgY2FwID0gbmFtZWQubGVuZ3RoIC0gMVxuICAgICAgICAkZWwgPSAkKHRoaXMpXG4gICAgICAgIGlmIChuYW1lZFswXSkge1xuICAgICAgICAgIGkgPSAwXG4gICAgICAgICAgd2hpbGUgKGkgPCBjYXApIHtcbiAgICAgICAgICAgIGxvb2t1cCA9IGxvb2t1cFtuYW1lZFtpXV0gPSBsb29rdXBbbmFtZWRbaV1dIHx8IChuYW1lZFtpICsgMV0gPT09ICcnIHx8IG5hbWVkW2kgKyAxXSA9PT0gJzAnID8gW10gOiB7fSlcbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobG9va3VwLmxlbmd0aCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBsb29rdXAucHVzaCgkZWwudmFsKCkpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvb2t1cFtuYW1lZFtjYXBdXSA9ICRlbC52YWwoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBsb29rdXAgPSBkYXRhXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVyKHNlbGVjdG9yKS5lYWNoKHBhcnNlKVxuICAgICAgdGhpcy5maW5kKHNlbGVjdG9yKS5lYWNoKHBhcnNlKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gIH1cbiAgc2V0dXBBamF4ICgpIHtcbiAgICAkLmFqYXhTZXR1cCh7XG4gICAgICBzdGF0dXNDb2RlOiB7XG4gICAgICAgIDQwMzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0ZvcmJpZGRlbiBDb250ZW50LicsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICA0MDQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIHRleHQ6ICdSb3V0ZSBub3QgZm91bmQuJyxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIDUwMDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0ludGVybmFsIHNlcnZlciBlcnJvci4nLFxuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcm9zc0RvbWFpbjogZmFsc2UsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY2FjaGU6IHRydWUsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdYLUNTUkYtVG9rZW4nOiAkKCdtZXRhW25hbWU9XCJfdFwiXScpLmF0dHIoJ2NvbnRlbnQnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgc2V0dXBGb3JtICgpIHtcbiAgICB2YXIgJGZvcm1zID0gJCgnLmFjdGlvbi1mb3JtJylcbiAgICB2YXIgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgIHZhciBhbGxvd2VkVHlwZXMgPSBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdQQVRDSCcsICdERUxFVEUnXVxuXG4gICAgJGZvcm1zLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkZm9ybSA9ICQodGhpcylcbiAgICAgICRmb3JtLm9uKCdjbGljaycsICdbdHlwZT1zdWJtaXRdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcblxuICAgICAgICBpZiAoZm9ybVByb2Nlc3NpbmcpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0EgZm9ybSBwcm9jZXNzIGlzIHN0aWxsIHJ1bm5pbmcuJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbidcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGh0dHBUeXBlID0gKCRmb3JtLmF0dHIoJ2h0dHAtdHlwZScpKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIGlmIChhbGxvd2VkVHlwZXMuaW5kZXhPZihodHRwVHlwZSkgPT09IC0xKSB7XG4gICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIHRleHQ6ICdIVFRQIHR5cGUgbm90IGFsbG93ZWQuJyxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISRmb3JtLnBhcnNsZXkoKS52YWxpZGF0ZSgpKSB7XG4gICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIHRleHQ6ICdJbnZhbGlkIHZhbHVlIG9uIGZvcm0uIENoZWNrIGFnYWluLicsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpcm0oJ1N1Ym1pdD8nKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSB0cnVlXG4gICAgICAgICAgdmFyICRpbnB1dCA9ICRmb3JtLmZpbmQoJzppbnB1dCcpXG4gICAgICAgICAgJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgdHJ1ZSlcbiAgICAgICAgICAkdGhpcy5kaXNhYmxlKHRydWUpXG5cbiAgICAgICAgICBsZXQgZm9ybURhdGEgPSB7fVxuICAgICAgICAgIGZvcm1EYXRhLmRhdGEgPSAkZm9ybS5zZXJpYWxpemVGb3JtKClcblxuICAgICAgICAgICQuZWFjaCgkZm9ybS5kYXRhKCksIGZ1bmN0aW9uIChpLCB2KSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gJ25hdGlvbmFsaXR5Jykge1xuICAgICAgICAgICAgICBpZiAoJCgnI2lucHV0TmF0aW9uYWxpdHknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAkKCcjaW5wdXROYXRpb25hbGl0eScpLmRhdGEoJ2Rkc2xpY2snKVxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRhdGEubmF0aW9uYWxpdHkgPSB2YWx1ZS5zZWxlY3RlZERhdGEudmFsdWVcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgkKCcjaW5wdXRCZW5lZmljaWFyeU5hdGlvbmFsaXR5JykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gJCgnI2lucHV0QmVuZWZpY2lhcnlOYXRpb25hbGl0eScpLmRhdGEoJ2Rkc2xpY2snKVxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRhdGEuYmVuZWZpY2lhcnlfbmF0aW9uYWxpdHkgPSB2YWx1ZS5zZWxlY3RlZERhdGEudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogaHR0cFR5cGUsXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgICAgIHVybDogJGZvcm0uZGF0YSgndXJsJyksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBlLnR5cGVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCBmYWxzZSlcbiAgICAgICAgICAgICAgJHRoaXMuZGlzYWJsZShmYWxzZSlcblxuICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSAnc3VjY2VzcycgJiYgZS5yZWRpcmVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoZS5yZWRpcmVjdClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCBmYWxzZSlcbiAgICAgICAgICAgICAgJHRoaXMuZGlzYWJsZShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEYXRhVGFibGUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdmFyICR0YWJsZXMgPSAkKCcudGFibGUtZ3JpZCcpXG4gICAgdmFyICRtb2RhbCA9ICQoJyNzaG93TW9kYWwnKVxuICAgIHZhciAkbW9kYWxMb2FkZXIgPSAkbW9kYWwuZmluZCgnLmxvYWRpbmcnKVxuICAgIHZhciAkbW9kYWxFcnJvciA9ICRtb2RhbC5maW5kKCcuZXJyb3InKVxuICAgIHZhciAkbW9kYWxDb250ZW50ID0gJG1vZGFsLmZpbmQoJyNtb2RhbENvbnRlbnQnKVxuICAgIHZhciAkbG9hZGVyID0gJCgnI3BhZ2VMb2FkZXInKVxuXG4gICAgJHRhYmxlcy5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRhYmxlID0gJCh0aGlzKVxuICAgICAgdmFyIGNvbHVtbnMgPSBbXVxuXG4gICAgICAkdGFibGUuZmluZCgndGgnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0ICR0aGVhZCA9ICQodGhpcylcbiAgICAgICAgbGV0IGNvbHVtblZhbHVlID0ge31cbiAgICAgICAgY29sdW1uVmFsdWVbJ2RhdGEnXSA9ICR0aGVhZC5kYXRhKCdpZCcpXG5cbiAgICAgICAgJC5lYWNoKCR0aGVhZC5kYXRhKCksIGZ1bmN0aW9uIChpLCB2YWx1ZSkge1xuICAgICAgICAgIGlmIChpICE9PSAnaWQnKSB7XG4gICAgICAgICAgICBjb2x1bW5WYWx1ZVtpXSA9IHZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb2x1bW5zLnB1c2goY29sdW1uVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICAkdGFibGUuZGF0YVRhYmxlKHtcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgbGFuZ3VhZ2U6IHdpbmRvdy5fZGF0YVRhYmxlc0xhbmcsXG4gICAgICAgIHNlYXJjaERlbGF5OiAxMDAwLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBhamF4OiAkdGFibGUuZGF0YSgndXJsJyksXG4gICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAgIG9yZGVyOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAnZGVzYydcbiAgICAgICAgXVxuICAgICAgfSlcblxuICAgICAgJHRhYmxlLm9uKCdjbGljaycsICcuYnRuLXNob3cnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgICAkbW9kYWxMb2FkZXIuc2hvdygpXG4gICAgICAgICRtb2RhbEVycm9yLmhpZGUoKVxuICAgICAgICAkbW9kYWxDb250ZW50LmVtcHR5KClcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJyksXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICRtb2RhbExvYWRlci5oaWRlKClcbiAgICAgICAgICAgICRtb2RhbENvbnRlbnQuaHRtbChlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgJG1vZGFsTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgJG1vZGFsRXJyb3Iuc2hvdygpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgICR0YWJsZS5vbignY2xpY2snLCAnLmJ0bi1kZWxldGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKGNvbmZpcm0oJ1JlbW92ZT8nKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgJGxvYWRlci5zaG93KClcbiAgICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdkZWxldGUnLFxuICAgICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5wYXJlbnRzKCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cblxuaW1wb3J0IHsgQ29yZSB9IGZyb20gJy4vY29yZSdcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0J1xuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAnLi9kYXRhdGFibGUnXG5pbXBvcnQgeyBBbm5vdW5jZW1lbnQgfSBmcm9tICcuL2Fubm91bmNlbWVudCdcbmltcG9ydCB7IFBhY2thZ2UgfSBmcm9tICcuL3BhY2thZ2UnXG5pbXBvcnQgeyBSZWdpc3RlciB9IGZyb20gJy4vcmVnaXN0ZXInXG5pbXBvcnQgeyBTaGFyZXMgfSBmcm9tICcuL3NoYXJlcydcbmltcG9ydCB7IFdpdGhkcmF3IH0gZnJvbSAnLi93aXRoZHJhdydcblxubmV3IENvcmUoKVxubmV3IFdpZGdldCgpXG5uZXcgRGF0YVRhYmxlKClcbm5ldyBBbm5vdW5jZW1lbnQoKVxubmV3IFBhY2thZ2UoKVxubmV3IFJlZ2lzdGVyKClcbm5ldyBTaGFyZXMoKVxubmV3IFdpdGhkcmF3KClcblxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgJCgnI2xvYWRpbmcnKS5mYWRlT3V0KDQwMCwgJ2xpbmVhcicpXG59LCAzMDApXG5cbiQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gIGJvZHlTaXplcigpXG59KVxuXG5ib2R5U2l6ZXIoKVxucGFnZVRyYW5zaXRpb25zKClcbiQuc2xpZGViYXJzKClcblxuJChcImRpdltpZD0nI2ZpeGVkLXNpZGViYXInXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInN3aXRjaC1vblwiKSkge1xuXG4gICAgdmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKVxuICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKCcjcGFnZS1oZWFkZXInKS5oZWlnaHQoKVxuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gaGVhZGVySGVpZ2h0XG5cbiAgICAkKCcjcGFnZS1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJy5zY3JvbGwtc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcblxuICAgICQoJy5zY3JvbGwtc2lkZWJhcicpLnNsaW1zY3JvbGwoe1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBjb2xvcjogJ3JnYmEoMTU1LCAxNjQsIDE2OSwgMC42OCknLFxuICAgICAgc2l6ZTogJzZweCdcbiAgICB9KVxuXG4gICAgdmFyIGhlYWRlckJnID0gJCgnI3BhZ2UtaGVhZGVyJykuYXR0cignY2xhc3MnKVxuICAgICQoJyNoZWFkZXItbG9nbycpLmFkZENsYXNzKGhlYWRlckJnKVxuXG4gIH0gZWxzZSB7XG5cbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KClcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnI3BhZ2UtaGVhZGVyJykuaGVpZ2h0KClcbiAgICB2YXIgY29udGVudEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIGhlYWRlckhlaWdodFxuXG4gICAgJCgnI3BhZ2Utc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcuc2Nyb2xsLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG5cbiAgICAkKFwiLnNjcm9sbC1zaWRlYmFyXCIpLnNsaW1TY3JvbGwoe1xuICAgICAgZGVzdHJveTogdHJ1ZVxuICAgIH0pXG5cbiAgICAkKCcjaGVhZGVyLWxvZ28nKS5yZW1vdmVDbGFzcygnYmctZ3JhZGllbnQtOScpXG5cbiAgfVxufSlcblxuJCgnLmRyb3Bkb3duJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5maXJzdCgpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVEb3duKClcbn0pXG5cbiQoJy5kcm9wZG93bicpLm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLmZpbmQoJy5kcm9wZG93bi1tZW51JykuZmlyc3QoKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlVXAoKVxufSlcblxuJChmdW5jdGlvbigpIHtcbiAgJCgnI3NpZGViYXItbWVudScpLnN1cGVyY2xpY2soe1xuICAgIGFuaW1hdGlvbjoge1xuICAgICAgaGVpZ2h0OiAnc2hvdydcbiAgICB9LFxuICAgIGFuaW1hdGlvbk91dDoge1xuICAgICAgaGVpZ2h0OiAnaGlkZSdcbiAgICB9XG4gIH0pXG4gIHZhciBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylcbiAgcGF0aCA9IHBhdGhbcGF0aC5sZW5ndGgtMV1cbiAgaWYgKHBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICQoXCIjc2lkZWJhci1tZW51XCIpLmZpbmQoXCJhW2hyZWYkPSdcIiArIHBhdGggKyBcIiddXCIpLmFkZENsYXNzKCdzZkFjdGl2ZScpXG4gICAgJChcIiNzaWRlYmFyLW1lbnVcIikuZmluZChcImFbaHJlZiQ9J1wiICsgcGF0aCArIFwiJ11cIikucGFyZW50cygpLmVxKDMpLnN1cGVyY2xpY2soJ3Nob3cnKVxuICB9XG5cbiAgJCgnI2Nsb3NlLXNpZGViYXInKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2Nsb3NlZC1zaWRlYmFyJylcbiAgICAkKCcuZ2x5cGgtaWNvbicsIHRoaXMpLnRvZ2dsZUNsYXNzKCdpY29uLWFuZ2xlLXJpZ2h0JykudG9nZ2xlQ2xhc3MoJ2ljb24tYW5nbGUtbGVmdCcpXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBib2R5U2l6ZXIoKSB7XG4gIHZhciB3aW5kb3dIZWlnaHQsIGhlYWRlckhlaWdodCwgY29udGVudEhlaWdodFxuXG4gIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2ZpeGVkLXNpZGViYXInKSkge1xuXG4gICAgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpXG4gICAgaGVhZGVySGVpZ2h0ID0gJCgnI3BhZ2UtaGVhZGVyJykuaGVpZ2h0KClcbiAgICBjb250ZW50SGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gaGVhZGVySGVpZ2h0XG4gICAgJCgnI3BhZ2Utc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcuc2Nyb2xsLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnI3BhZ2UtY29udGVudCcpLmNzcygnbWluLWhlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG5cbiAgfSBlbHNlIHtcblxuICAgIHdpbmRvd0hlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpXG4gICAgaGVhZGVySGVpZ2h0ID0gJCgnI3BhZ2UtaGVhZGVyJykuaGVpZ2h0KClcbiAgICBjb250ZW50SGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gaGVhZGVySGVpZ2h0XG4gICAgJCgnI3BhZ2Utc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcuc2Nyb2xsLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnI3BhZ2UtY29udGVudCcpLmNzcygnbWluLWhlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG5cbiAgfVxufVxuXG5mdW5jdGlvbiBwYWdlVHJhbnNpdGlvbnMoKSB7XG4gIHZhciB0cmFuc2l0aW9ucyA9IFsnLnB0LXBhZ2UtbW92ZUZyb21MZWZ0JywgJ3B0LXBhZ2UtbW92ZUZyb21SaWdodCcsICdwdC1wYWdlLW1vdmVGcm9tVG9wJywgJ3B0LXBhZ2UtbW92ZUZyb21Cb3R0b20nLCAncHQtcGFnZS1mYWRlJywgJ3B0LXBhZ2UtbW92ZUZyb21MZWZ0RmFkZScsICdwdC1wYWdlLW1vdmVGcm9tUmlnaHRGYWRlJywgJ3B0LXBhZ2UtbW92ZUZyb21Ub3BGYWRlJywgJ3B0LXBhZ2UtbW92ZUZyb21Cb3R0b21GYWRlJywgJ3B0LXBhZ2Utc2NhbGVVcCcsICdwdC1wYWdlLXNjYWxlVXBDZW50ZXInLCAncHQtcGFnZS1mbGlwSW5MZWZ0JywgJ3B0LXBhZ2UtZmxpcEluUmlnaHQnLCAncHQtcGFnZS1mbGlwSW5Cb3R0b20nLCAncHQtcGFnZS1mbGlwSW5Ub3AnLCAncHQtcGFnZS1yb3RhdGVQdWxsUmlnaHQnLCAncHQtcGFnZS1yb3RhdGVQdWxsTGVmdCcsICdwdC1wYWdlLXJvdGF0ZVB1bGxUb3AnLCAncHQtcGFnZS1yb3RhdGVQdWxsQm90dG9tJywgJ3B0LXBhZ2Utcm90YXRlVW5mb2xkTGVmdCcsICdwdC1wYWdlLXJvdGF0ZVVuZm9sZFJpZ2h0JywgJ3B0LXBhZ2Utcm90YXRlVW5mb2xkVG9wJywgJ3B0LXBhZ2Utcm90YXRlVW5mb2xkQm90dG9tJ11cbiAgZm9yICh2YXIgaSBpbiB0cmFuc2l0aW9ucykge1xuICAgIHZhciB0cmFuc2l0aW9uX25hbWUgPSB0cmFuc2l0aW9uc1tpXVxuICAgIGlmICgkKCcuYWRkLXRyYW5zaXRpb24nKS5oYXNDbGFzcyh0cmFuc2l0aW9uX25hbWUpKSB7XG4gICAgICAkKCcuYWRkLXRyYW5zaXRpb24nKS5hZGRDbGFzcyh0cmFuc2l0aW9uX25hbWUgKyAnLWluaXQgcGFnZS10cmFuc2l0aW9uJylcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5hZGQtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKHRyYW5zaXRpb25fbmFtZSArICcgJyArIHRyYW5zaXRpb25fbmFtZSArICctaW5pdCBwYWdlLXRyYW5zaXRpb24nKVxuICAgICAgfSwgMTIwMClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuXG5pZiAoJCgnI2V4Y2hhbmdlUmF0ZUNoYXJ0JykubGVuZ3RoKSB7XG4gICQud2hlbihcbiAgICAkLmdldFNjcmlwdCh3aW5kb3cuX3Jvb3QgKyAnL2xpYi9jaGFydC1jb3JlLmpzJyksXG4gICAgJC5EZWZlcnJlZChmdW5jdGlvbiAoZGVmZXJyZWQpIHtcbiAgICAgICQoZGVmZXJyZWQucmVzb2x2ZSlcbiAgICB9KVxuICApLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleGNoYWdlUmF0ZXMgPSB3aW5kb3cuX2V4Y2hhbmdlUmF0ZVxuICAgIHZhciBsYWJlbHMgPSBbXVxuICAgIHZhciBjaGFydERhdGFCdXkgPSBbXVxuICAgIHZhciBjaGFydERhdGFTZWxsID0gW11cblxuICAgICQuZWFjaChleGNoYWdlUmF0ZXMsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgIGxhYmVscy5wdXNoKGluZGV4ICsgXCIgKFwiICsgdmFsdWUuY3VycmVuY3kgKyBcIilcIilcbiAgICAgIGNoYXJ0RGF0YUJ1eS5wdXNoKHZhbHVlLmJ1eSlcbiAgICAgIGNoYXJ0RGF0YVNlbGwucHVzaCh2YWx1ZS5zZWxsKVxuICAgIH0pXG4gICAgdmFyIGNoYXJ0RGF0YSA9IHtcbiAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgIGxhYmVsOiAnQnV5JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsXG4gICAgICAgICAgZGF0YTogY2hhcnREYXRhQnV5LFxuICAgICAgICAgIGZpbGw6IGZhbHNlXG4gICAgICAgIH0se1xuICAgICAgICAgIGxhYmVsOiAnU2VsbCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDU0LCAxNjIsIDIzNSknLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDU0LCAxNjIsIDIzNSknLFxuICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YVNlbGwsXG4gICAgICAgICAgZmlsbDogZmFsc2VcbiAgICAgICAgfV0sXG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6e1xuICAgICAgICAgIGRpc3BsYXk6dHJ1ZSxcbiAgICAgICAgICB0ZXh0OiAnRXhjaGFuZ2UgUmF0ZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgbW9kZTogJ2luZGV4JyxcbiAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIG1vZGU6ICduZWFyZXN0JyxcbiAgICAgICAgICBpbnRlcnNlY3Q6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ0NvdW50cnknXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV0sXG4gICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ0JVWS9TRUxMIFZhbHVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgfVxuICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4Y2hhbmdlUmF0ZUNoYXJ0XCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguaGVpZ2h0ID0gNTAwO1xuICAgIG5ldyBDaGFydChjdHgsIGNoYXJ0RGF0YSlcbiAgfSkuZmFpbChmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KVxuICB9KVxufVxuIiwiZXhwb3J0IGNsYXNzIFBhY2thZ2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCQoJyNwYWNrYWdlTGlzdFRhYmxlJykubGVuZ3RoKSB7XG4gICAgICB2YXIgJHRhYmxlID0gJCgnI3BhY2thZ2VMaXN0VGFibGUnKVxuICAgICAgdmFyICRsb2FkZXIgPSAkKCcjcGFnZUxvYWRlcicpXG4gICAgICB2YXIgcHJvY2Vzc2luZyA9IGZhbHNlXG5cbiAgICAgICR0YWJsZS5vbignY2xpY2snLCAnW3R5cGU9c3VibWl0XScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgdmFyICRyb3cgPSAkdGhpcy5jbG9zZXN0KCd0cicpXG5cbiAgICAgICAgaWYgKGNvbmZpcm0oJ1N1Ym1pdD8nKSkge1xuICAgICAgICAgIGlmICghcHJvY2Vzc2luZykge1xuICAgICAgICAgICAgJGxvYWRlci5zaG93KClcbiAgICAgICAgICAgIHByb2Nlc3NpbmcgPSB0cnVlXG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGRhdGE6ICRyb3cuc2VyaWFsaXplRm9ybSgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0EgcHJvY2VzcyBpcyBzdGlsbCBvbmdvaW5nLidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFJlZ2lzdGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICgkKCcjcmVnaXN0ZXJGb3JtJykubGVuZ3RoKSB7XG4gICAgICBsZXQgJGZvcm0gPSAkKCcjcmVnaXN0ZXJGb3JtJylcbiAgICAgIHZhciAkc2hvd01lbWJlckJ0biA9ICRmb3JtLmZpbmQoJy5idG4tc2hvdycpXG4gICAgICB2YXIgJG1vZGFsID0gJCgnI3Nob3dNb2RhbCcpXG4gICAgICB2YXIgJG1vZGFsTG9hZGVyID0gJG1vZGFsLmZpbmQoJy5sb2FkaW5nJylcbiAgICAgIHZhciAkbW9kYWxFcnJvciA9ICRtb2RhbC5maW5kKCcuZXJyb3InKVxuICAgICAgdmFyICRtb2RhbENvbnRlbnQgPSAkbW9kYWwuZmluZCgnI21vZGFsQ29udGVudCcpXG4gICAgICAkc2hvd01lbWJlckJ0bi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgICAkbW9kYWxMb2FkZXIuc2hvdygpXG4gICAgICAgICRtb2RhbEVycm9yLmhpZGUoKVxuICAgICAgICAkbW9kYWxDb250ZW50LmVtcHR5KClcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJykgKyAnP3U9JyArICR0aGlzLnBhcmVudCgpLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuZmluZCgnLmZvcm0tY29udHJvbCcpLnZhbCgpLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkbW9kYWxMb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAkbW9kYWxDb250ZW50Lmh0bWwoZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICRtb2RhbExvYWRlci5oaWRlKClcbiAgICAgICAgICAgICRtb2RhbEVycm9yLnNob3coKVxuICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoYXJlcyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoJCgnI3NoYXJlc0xpc3RUYWJsZScpLmxlbmd0aCkge1xuICAgICAgdGhpcy5saXN0KClcbiAgICB9XG5cbiAgICBpZiAoJCgnI3JlbW92ZVNoYXJlc0J0bicpLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW1vdmVRdWV1ZSgpXG4gICAgfVxuXG4gICAgaWYgKCQoJyNzcGxpdEZvcm0nKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3BsaXQoKVxuICAgIH1cblxuICAgIGlmICgkKCcjc2hhcmVzRnJlZXplTGlzdFRhYmxlJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmZyZWV6ZUxpc3QoKVxuICAgIH1cblxuICAgIGlmICgkKCcjc2hhcmVzQnV5TGlzdFRhYmxlJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmJ1eUxpc3QoKVxuICAgIH1cblxuICAgIGlmICgkKCcjc2hhcmVzU2VsbExpc3RUYWJsZScpLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZWxsTGlzdCgpXG4gICAgfVxuXG4gICAgaWYgKCQoJyNzaGFyZXNGb2xsb3dMaXN0VGFibGUnKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZm9sbG93TGlzdCgpXG4gICAgfVxuICB9XG4gIGxpc3QgKCkge1xuICAgIHZhciAkdGFibGUgPSAkKCcjc2hhcmVzTGlzdFRhYmxlJylcbiAgICB2YXIgJGxvYWRlciA9ICQoJyNwYWdlTG9hZGVyJylcbiAgICB2YXIgcHJvY2Vzc2luZyA9IGZhbHNlXG5cbiAgICAkdGFibGUub24oJ2NsaWNrJywgJ1t0eXBlPXN1Ym1pdF0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgdmFyICRyb3cgPSAkdGhpcy5jbG9zZXN0KCd0cicpXG5cbiAgICAgIGlmIChjb25maXJtKCdTdWJtaXQ/JykpIHtcbiAgICAgICAgaWYgKCFwcm9jZXNzaW5nKSB7XG4gICAgICAgICAgJGxvYWRlci5zaG93KClcbiAgICAgICAgICBwcm9jZXNzaW5nID0gdHJ1ZVxuXG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJyksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGRhdGE6ICRyb3cuc2VyaWFsaXplRm9ybSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgIHRleHQ6ICdBIHByb2Nlc3MgaXMgc3RpbGwgb25nb2luZy4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmVtb3ZlUXVldWUgKCkge1xuICAgIHZhciAkYnV0dG9uID0gJCgnI3JlbW92ZVNoYXJlc0J0bicpXG4gICAgJGJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY29uZmlybSgnUmVtb3ZlPyBDYW5ub3QgYmUgdW5kby4nKSkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgICR0aGlzLmRpc2FibGUodHJ1ZSlcblxuICAgICAgICAkLnBvc3QoJHRoaXMuZGF0YSgndXJsJykpLmRvbmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZSxcbiAgICAgICAgICAgIHR5cGU6IGUudHlwZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgJHRoaXMuZGlzYWJsZShmYWxzZSlcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHQsXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgfSlcbiAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgc3BsaXQgKCkge1xuICAgIHZhciBjdXJyZW50U2hhcmVzID0gcGFyc2VGbG9hdCgkKCcjY3VycmVudFNoYXJlcycpLnRleHQoKSlcbiAgICB2YXIgJGZvcm0gPSAkKCcjc3BsaXRGb3JtJylcbiAgICB2YXIgJHNwbGl0VG8gPSAkZm9ybS5maW5kKCdbbmFtZT1zcGxpdF90b10nKVxuICAgIHZhciAkc3BsaXRCeSA9ICRmb3JtLmZpbmQoJ1tuYW1lPXNwbGl0X2J5XScpXG5cbiAgICAkc3BsaXRUby5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgc3BsaXRCeSA9IGN1cnJlbnRTaGFyZXMgLyBwYXJzZUZsb2F0KCR0aGlzLnZhbCgpKVxuICAgICAgJHNwbGl0QnkudmFsKHNwbGl0QnkudG9GaXhlZCgzKSlcbiAgICB9KVxuICB9XG4gIGZyZWV6ZUxpc3QgKCkge1xuICAgIHZhciAkdGFibGUgPSAkKCcjc2hhcmVzRnJlZXplTGlzdFRhYmxlJylcbiAgICB2YXIgJGxvYWRlciA9ICQoJyNwYWdlTG9hZGVyJylcbiAgICB2YXIgcHJvY2Vzc2luZyA9IGZhbHNlXG5cbiAgICAkdGFibGUub24oJ2NsaWNrJywgJy5idG4tdW5sb2NrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcblxuICAgICAgaWYgKGNvbmZpcm0oJ1VubG9jaz8nKSkge1xuICAgICAgICBpZiAoIXByb2Nlc3NpbmcpIHtcbiAgICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAgIHByb2Nlc3NpbmcgPSB0cnVlXG5cbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbicsXG4gICAgICAgICAgICB0ZXh0OiAnQSBwcm9jZXNzIGlzIHN0aWxsIG9uZ29pbmcuJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgJHRhYmxlLm9uKCdjbGljaycsICcuYnRuLWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgdmFyICRyb3cgPSAkdGhpcy5jbG9zZXN0KCd0cicpXG4gICAgICBpZiAoY29uZmlybSgnVXBkYXRlPycpKSB7XG4gICAgICAgIGlmICghcHJvY2Vzc2luZykge1xuICAgICAgICAgICRsb2FkZXIuc2hvdygpXG4gICAgICAgICAgcHJvY2Vzc2luZyA9IHRydWVcblxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBkYXRhOiAkcm93LnNlcmlhbGl6ZUZvcm0oKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbicsXG4gICAgICAgICAgICB0ZXh0OiAnQSBwcm9jZXNzIGlzIHN0aWxsIG9uZ29pbmcuJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGJ1eUxpc3QgKCkge1xuICAgIHZhciAkdGFibGUgPSAkKCcjc2hhcmVzQnV5TGlzdFRhYmxlJylcbiAgICB2YXIgJGxvYWRlciA9ICQoJyNwYWdlTG9hZGVyJylcbiAgICB2YXIgcHJvY2Vzc2luZyA9IGZhbHNlXG5cbiAgICAkdGFibGUub24oJ2NsaWNrJywgJy5idG4tZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgJHJvdyA9ICR0aGlzLmNsb3Nlc3QoJ3RyJylcbiAgICAgIGlmIChjb25maXJtKCdVcGRhdGU/JykpIHtcbiAgICAgICAgaWYgKCFwcm9jZXNzaW5nKSB7XG4gICAgICAgICAgJGxvYWRlci5zaG93KClcbiAgICAgICAgICBwcm9jZXNzaW5nID0gdHJ1ZVxuXG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJyksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGRhdGE6ICRyb3cuc2VyaWFsaXplRm9ybSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgIHRleHQ6ICdBIHByb2Nlc3MgaXMgc3RpbGwgb25nb2luZy4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgc2VsbExpc3QgKCkge1xuICAgIHZhciAkdGFibGUgPSAkKCcjc2hhcmVzU2VsbExpc3RUYWJsZScpXG4gICAgdmFyICRsb2FkZXIgPSAkKCcjcGFnZUxvYWRlcicpXG4gICAgdmFyIHByb2Nlc3NpbmcgPSBmYWxzZVxuXG4gICAgJHRhYmxlLm9uKCdjbGljaycsICcuYnRuLWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgdmFyICRyb3cgPSAkdGhpcy5jbG9zZXN0KCd0cicpXG4gICAgICBpZiAoY29uZmlybSgnVXBkYXRlPycpKSB7XG4gICAgICAgIGlmICghcHJvY2Vzc2luZykge1xuICAgICAgICAgICRsb2FkZXIuc2hvdygpXG4gICAgICAgICAgcHJvY2Vzc2luZyA9IHRydWVcblxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBkYXRhOiAkcm93LnNlcmlhbGl6ZUZvcm0oKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbicsXG4gICAgICAgICAgICB0ZXh0OiAnQSBwcm9jZXNzIGlzIHN0aWxsIG9uZ29pbmcuJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGZvbGxvd0xpc3QgKCkge1xuICAgIHZhciAkdGFibGUgPSAkKCcjc2hhcmVzRm9sbG93TGlzdFRhYmxlJylcbiAgICB2YXIgJGxvYWRlciA9ICQoJyNwYWdlTG9hZGVyJylcbiAgICB2YXIgcHJvY2Vzc2luZyA9IGZhbHNlXG5cbiAgICAkdGFibGUub24oJ2NsaWNrJywgJy5idG4tdW5sb2NrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcblxuICAgICAgaWYgKGNvbmZpcm0oJ1VubG9jaz8nKSkge1xuICAgICAgICBpZiAoIXByb2Nlc3NpbmcpIHtcbiAgICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAgIHByb2Nlc3NpbmcgPSB0cnVlXG5cbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbicsXG4gICAgICAgICAgICB0ZXh0OiAnQSBwcm9jZXNzIGlzIHN0aWxsIG9uZ29pbmcuJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgV2lkZ2V0IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICQoJ2FbaHJlZj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0pXG4gICAgXG4gICAgJChcIi50b2RvLWJveCBsaSBpbnB1dFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ3RvZG8tZG9uZScpXG4gICAgfSlcbiAgICBcbiAgICB2YXIgb3ZlcmFsbFdpZHRoID0gMFxuICAgICQoJy50aW1lbGluZS1zY3JvbGwgLnRsLXJvdycpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW0pIHtcbiAgICAgIHZhciAkZWxlbSA9ICQoZWxlbSlcbiAgICAgIG92ZXJhbGxXaWR0aCArPSAkZWxlbS5vdXRlcldpZHRoKCkgKyBwYXJzZUludCgkZWxlbS5jc3MoJ21hcmdpbi1sZWZ0JyksIDEwKSArIHBhcnNlSW50KCRlbGVtLmNzcygnbWFyZ2luLXJpZ2h0JyksIDEwKVxuICAgIH0pXG4gICAgJCgnLnRpbWVsaW5lLWhvcml6b250YWwnLCB0aGlzKS53aWR0aChvdmVyYWxsV2lkdGgpXG5cbiAgICAkKCcuaW5wdXQtc3dpdGNoLWFsdCcpLnNpbXBsZUNoZWNrYm94KClcblxuICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXS5jdXN0b20tY2hlY2tib3gnKS51bmlmb3JtKClcbiAgICAkKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0uY3VzdG9tLXJhZGlvJykudW5pZm9ybSgpXG4gICAgJCgnLmN1c3RvbS1zZWxlY3QnKS51bmlmb3JtKClcblxuICAgICQoJy5zZWxlY3RvcicpLmFwcGVuZCgnPGkgY2xhc3M9XCJnbHlwaC1pY29uIGljb24tY2FyZXQtZG93blwiPjwvaT4nKVxuXG4gICAgJCgnLmNoZWNrZXIgc3BhbicpLmFwcGVuZCgnPGkgY2xhc3M9XCJnbHlwaC1pY29uIGljb24tY2hlY2tcIj48L2k+JylcbiAgICAkKCcucmFkaW8gc3BhbicpLmFwcGVuZCgnPGkgY2xhc3M9XCJnbHlwaC1pY29uIGljb24tY2lyY2xlXCI+PC9pPicpXG4gICAgXG4gICAgJCgnLnNjcm9sbGFibGUtc2xpbScpLnNsaW1TY3JvbGwoe1xuICAgICAgY29sb3I6ICcjOGRhMGFhJyxcbiAgICAgIHNpemU6ICcxMHB4JyxcbiAgICAgIGFsd2F5c1Zpc2libGU6IHRydWVcbiAgICB9KVxuICAgIFxuICAgICQoJy5zY3JvbGxhYmxlLXNsaW0tc2lkZWJhcicpLnNsaW1TY3JvbGwoe1xuICAgICAgY29sb3I6ICcjOGRhMGFhJyxcbiAgICAgIHNpemU6ICcxMHB4JyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYWx3YXlzVmlzaWJsZTogdHJ1ZVxuICAgIH0pXG4gICAgXG4gICAgJCgnLnNjcm9sbGFibGUtc2xpbS1ib3gnKS5zbGltU2Nyb2xsKHtcbiAgICAgIGNvbG9yOiAnIzhkYTBhYScsXG4gICAgICBzaXplOiAnNnB4JyxcbiAgICAgIGFsd2F5c1Zpc2libGU6IGZhbHNlXG4gICAgfSlcblxuICAgICQoJy5sb2FkaW5nLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJ0biA9ICQodGhpcylcbiAgICAgIGJ0bi5idXR0b24oJ2xvYWRpbmcnKVxuICAgIH0pXG5cbiAgICAkKCcudG9vbHRpcC1idXR0b24nKS50b29sdGlwKHtcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknXG4gICAgfSlcbiAgICBcbiAgICAkKCcuYWxlcnQtY2xvc2UtYnRuJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlT3V0RG93bicpXG4gICAgfSlcbiAgICBcbiAgICAkKCcucG9wb3Zlci1idXR0b24nKS5wb3BvdmVyKHtcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGF0YUlEID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJylcbiAgICAgICAgcmV0dXJuICQoZGF0YUlEKS5odG1sKClcbiAgICAgIH1cbiAgICB9KS5jbGljayhmdW5jdGlvbihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSlcblxuICAgICQoJy5wb3BvdmVyLWJ1dHRvbi1kZWZhdWx0JykucG9wb3Zlcih7XG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGh0bWw6IHRydWUsXG4gICAgICBhbmltYXRpb246IHRydWVcbiAgICB9KS5jbGljayhmdW5jdGlvbihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSlcblxuICAgICQoJy5kYXRlcGlja2VyJykuYnNkYXRlcGlja2VyKHtcbiAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnXG4gICAgfSlcbiAgICAkKCcuaW5wdXQtc3dpdGNoJykuYm9vdHN0cmFwU3dpdGNoKClcblxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsc2NyZWVuLWJ0bicpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbHNjcmVlbi1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xuICAgICAgICAgIHNjcmVlbmZ1bGwucmVxdWVzdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCQoJy5kZC1pY29uJykubGVuZ3RoKSB7XG4gICAgICAkKCcuZGQtaWNvbicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuZGRzbGljayh7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRJbmRleDogJCh0aGlzKS5wcm9wKCdzZWxlY3RlZEluZGV4JylcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGNsYXNzIFdpdGhkcmF3IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICgkKCcjd2l0aGRyYXdMaXN0VGFibGUnKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGlzdCgpXG4gICAgfVxuICB9XG4gIGxpc3QgKCkge1xuICAgIHZhciAkdGFibGUgPSAkKCcjd2l0aGRyYXdMaXN0VGFibGUnKVxuICAgIHZhciAkbG9hZGVyID0gJCgnI3BhZ2VMb2FkZXInKVxuXG4gICAgJHRhYmxlLm9uKCdjbGljaycsICcuYnRuLWNvbmZpcm0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICBpZiAoY29uZmlybSgnQ29uZmlybSB0aGlzIHdpdGhkcmF3PycpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgJGxvYWRlci5zaG93KClcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdkb25lJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgICR0YWJsZS5vbignY2xpY2snLCAnLmJ0bi1yZWplY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICBpZiAoY29uZmlybSgnUmVqZWN0IHRoaXMgd2l0aGRyYXc/JykpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHN0YXR1czogJ3JlamVjdCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhocikge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
