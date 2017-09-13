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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL2Fubm91bmNlbWVudC5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay9jb3JlLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL2RhdGF0YWJsZS5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay9pbmRleC5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay9wYWNrYWdlLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL3JlZ2lzdGVyLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL3NoYXJlcy5qcyIsInJlc291cmNlcy9hc3NldHMvanMvYmFjay93aWRnZXQuanMiLCJyZXNvdXJjZXMvYXNzZXRzL2pzL2JhY2svd2l0aGRyYXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUNGYSx1QixBQUFBLDJCQUNYOzBCQUFlO3dDQUNiOztRQUFJLEVBQUEsQUFBRSwyQkFBTixBQUFpQyxRQUFRLEFBQ3ZDO1dBQUEsQUFBSyxBQUNOO0FBRUQ7O1FBQUksRUFBQSxBQUFFLHlCQUFOLEFBQStCLFFBQVEsQUFDckM7V0FBQSxBQUFLLEFBQ047QUFDRjs7Ozs7NkJBQ1MsQUFDUjtVQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtVQUFJLGFBQVcsQUFBRSxhQUFGLEFBQWU7Z0JBQVcsQUFDL0IsQUFDUjs7eUJBQ2lCLHVCQUFBLEFBQVUsT0FBTyxBQUM5QjtnQkFBSSxNQUFBLEFBQU0sR0FBTixBQUFTLE9BQWIsQUFBb0IsU0FBUyxBQUMzQjtxQkFBTyxBQUNMO3NCQURHLEFBQ0csQUFDTjtzQkFGRixBQUFLLEFBRUcsQUFFVDtBQUpNO0FBRFAsdUJBTUUsTUFBQSxBQUFNLEdBQU4sQUFBUyxTQUFULEFBQWtCLGdCQUNsQixNQUFBLEFBQU0sR0FBTixBQUFTLFNBRkosQUFFYSxhQUNsQixBQUNBO3FCQUFPLEFBQ0w7c0JBREcsQUFDRyxBQUNOO3NCQUZGLEFBQUssQUFFRyxBQUVUO0FBSk07QUFKQSxhQUFBLE1BUUEsQUFDTDtrQkFBSSxPQUFPLElBRE4sQUFDTCxBQUFXLEFBQUksWUFBVyxBQUMxQjttQkFBQSxBQUFLLE9BQUwsQUFBWSxhQUFhLE1BQXpCLEFBQXlCLEFBQU0sQUFDL0I7Z0JBQUEsQUFBRTtzQkFBSyxBQUNDLEFBQ047c0JBRkssQUFFQyxBQUNOO3FCQUFLLE1BQUEsQUFBTSxLQUhOLEFBR0EsQUFBVyxBQUNoQjt1QkFKSyxBQUlFLEFBQ1A7NkJBTEssQUFLUSxBQUNiOzZCQU5LLEFBTVEsQUFDYjt5QkFBUyxpQkFBQSxBQUFVLEtBQUssQUFDdEI7c0JBQUksSUFBQSxBQUFJLFNBQVIsQUFBaUIsV0FBVyxBQUMxQjs2QkFBQSxBQUFTLFdBQVQsQUFBb0IsZUFBZSxJQUFuQyxBQUF1QyxBQUN4QztBQUZELHlCQUVPLEFBQ0w7MkJBQU8sQUFDTDs0QkFBTSxJQURILEFBQ08sQUFDVjs0QkFBTSxJQUZSLEFBQUssQUFFTyxBQUViO0FBSk07QUFLUjtBQWhCSCxBQUFPLEFBa0JSO0FBbEJRLEFBQ0w7QUFrQkw7QUF2Q0wsQUFBZSxBQUEwQixBQUU1QixBQXlDYjtBQXpDYSxBQUNUO0FBSHFDLEFBQ3ZDLE9BRGE7O1VBMkNYLGNBQVksQUFBRSxjQUFGLEFBQWdCO2dCQUFXLEFBQ2pDLEFBQ1I7O3lCQUNpQix1QkFBQSxBQUFVLE9BQU8sQUFDOUI7Z0JBQUksTUFBQSxBQUFNLEdBQU4sQUFBUyxPQUFiLEFBQW9CLFNBQVMsQUFDM0I7cUJBQU8sQUFDTDtzQkFERyxBQUNHLEFBQ047c0JBRkYsQUFBSyxBQUVHLEFBRVQ7QUFKTTtBQURQLHVCQU1FLE1BQUEsQUFBTSxHQUFOLEFBQVMsU0FBVCxBQUFrQixnQkFDbEIsTUFBQSxBQUFNLEdBQU4sQUFBUyxTQUZKLEFBRWEsYUFDbEIsQUFDQTtxQkFBTyxBQUNMO3NCQURHLEFBQ0csQUFDTjtzQkFGRixBQUFLLEFBRUcsQUFFVDtBQUpNO0FBSkEsYUFBQSxNQVFBLEFBQ0w7a0JBQUksT0FBTyxJQUROLEFBQ0wsQUFBVyxBQUFJLFlBQVcsQUFDMUI7bUJBQUEsQUFBSyxPQUFMLEFBQVksYUFBYSxNQUF6QixBQUF5QixBQUFNLEFBQy9CO2dCQUFBLEFBQUU7c0JBQUssQUFDQyxBQUNOO3NCQUZLLEFBRUMsQUFDTjtxQkFBSyxNQUFBLEFBQU0sS0FITixBQUdBLEFBQVcsQUFDaEI7dUJBSkssQUFJRSxBQUNQOzZCQUxLLEFBS1EsQUFDYjs2QkFOSyxBQU1RLEFBQ2I7eUJBQVMsaUJBQUEsQUFBVSxLQUFLLEFBQ3RCO3NCQUFJLElBQUEsQUFBSSxTQUFSLEFBQWlCLFdBQVcsQUFDMUI7OEJBQUEsQUFBVSxXQUFWLEFBQXFCLGVBQWUsSUFBcEMsQUFBd0MsQUFDekM7QUFGRCx5QkFFTyxBQUNMOzJCQUFPLEFBQ0w7NEJBQU0sSUFESCxBQUNPLEFBQ1Y7NEJBQU0sSUFGUixBQUFLLEFBRU8sQUFFYjtBQUpNO0FBS1I7QUFoQkgsQUFBTyxBQWtCUjtBQWxCUSxBQUNMO0FBa0JMO0FBdkNMLEFBQWdCLEFBQTJCLEFBRTlCLEFBeUNiO0FBekNhLEFBQ1Q7QUFIdUMsQUFDekMsT0FEYzs7VUEyQ1osY0FBWSxBQUFFLGNBQUYsQUFBZ0I7Z0JBQVcsQUFDakMsQUFDUjs7eUJBQ2lCLHVCQUFBLEFBQVUsT0FBTyxBQUM5QjtnQkFBSSxNQUFBLEFBQU0sR0FBTixBQUFTLE9BQWIsQUFBb0IsU0FBUyxBQUMzQjtxQkFBTyxBQUNMO3NCQURHLEFBQ0csQUFDTjtzQkFGRixBQUFLLEFBRUcsQUFFVDtBQUpNO0FBRFAsdUJBTUUsTUFBQSxBQUFNLEdBQU4sQUFBUyxTQUFULEFBQWtCLGdCQUNsQixNQUFBLEFBQU0sR0FBTixBQUFTLFNBRkosQUFFYSxhQUNsQixBQUNBO3FCQUFPLEFBQ0w7c0JBREcsQUFDRyxBQUNOO3NCQUZGLEFBQUssQUFFRyxBQUVUO0FBSk07QUFKQSxhQUFBLE1BUUEsQUFDTDtrQkFBSSxPQUFPLElBRE4sQUFDTCxBQUFXLEFBQUksWUFBVyxBQUMxQjttQkFBQSxBQUFLLE9BQUwsQUFBWSxhQUFhLE1BQXpCLEFBQXlCLEFBQU0sQUFDL0I7Z0JBQUEsQUFBRTtzQkFBSyxBQUNDLEFBQ047c0JBRkssQUFFQyxBQUNOO3FCQUFLLE1BQUEsQUFBTSxLQUhOLEFBR0EsQUFBVyxBQUNoQjt1QkFKSyxBQUlFLEFBQ1A7NkJBTEssQUFLUSxBQUNiOzZCQU5LLEFBTVEsQUFDYjt5QkFBUyxpQkFBQSxBQUFVLEtBQUssQUFDdEI7c0JBQUksSUFBQSxBQUFJLFNBQVIsQUFBaUIsV0FBVyxBQUMxQjs4QkFBQSxBQUFVLFdBQVYsQUFBcUIsZUFBZSxJQUFwQyxBQUF3QyxBQUN6QztBQUZELHlCQUVPLEFBQ0w7MkJBQU8sQUFDTDs0QkFBTSxJQURILEFBQ08sQUFDVjs0QkFBTSxJQUZSLEFBQUssQUFFTyxBQUViO0FBSk07QUFLUjtBQWhCSCxBQUFPLEFBa0JSO0FBbEJRLEFBQ0w7QUFrQkw7QUF2Q0wsQUFBZ0IsQUFBMkIsQUFFOUIsQUF5Q2I7QUF6Q2EsQUFDVDtBQUh1QyxBQUN6QyxPQURjOztVQTJDWixpQkFBSixBQUFxQixBQUNyQjtZQUFBLEFBQU0sR0FBTixBQUFTLFNBQVQsQUFBa0IsaUJBQWlCLFVBQUEsQUFBVSxHQUFHLEFBQzlDO1lBQUksUUFBUSxFQUFaLEFBQVksQUFBRSxBQUNkO1VBQUEsQUFBRSxBQUNGO1lBQUEsQUFBSSxnQkFBZ0IsQUFDbEI7aUJBQU8sQUFDTDtrQkFERyxBQUNHLEFBQ047a0JBRkYsQUFBSyxBQUVHLEFBRVI7QUFKSztpQkFJTCxBQUFPLEFBQ1I7QUFFRDs7WUFBSSxDQUFDLE1BQUEsQUFBTSxVQUFYLEFBQUssQUFBZ0IsWUFBWSxBQUMvQjtpQkFBTyxBQUNMO2tCQURHLEFBQ0csQUFDTjtrQkFGRixBQUFLLEFBRUcsQUFFUjtBQUpLO2lCQUlMLEFBQU8sQUFDUjtBQUVEOztZQUFJLFFBQUosQUFBSSxBQUFRLFlBQVksQUFBRTtBQUN4QjsyQkFBQSxBQUFpQixBQUNqQjtjQUFJLFNBQVMsTUFBQSxBQUFNLEtBQW5CLEFBQWEsQUFBVyxBQUN4QjtpQkFBQSxBQUFPLEtBQVAsQUFBWSxZQUFaLEFBQXdCLEFBQ3hCO2dCQUFBLEFBQU0sUUFBTixBQUFjLEFBRWQ7O1lBQUEsQUFBRSxLQUFLLE1BQUEsQUFBTSxLQUFiLEFBQU8sQUFBVztvQkFDUixNQURWLEFBQTBCLEFBQ2hCLEFBQU07QUFEVSxBQUN4QixhQURGLEFBRUcsS0FBSyxVQUFBLEFBQVUsR0FBRyxBQUNuQjs2QkFBQSxBQUFpQixBQUNqQjttQkFBQSxBQUFPLEtBQVAsQUFBWSxZQUFaLEFBQXdCLEFBQ3hCO2tCQUFBLEFBQU0sUUFBTixBQUFjLEFBQ2Q7O29CQUNRLEVBREgsQUFDSyxBQUNSO29CQUFNLEVBRlIsQUFBSyxBQUVLLEFBRVg7QUFKTSxBQUNIO0FBUEosYUFBQSxBQVVHLEtBQUssVUFBQSxBQUFVLEtBQVYsQUFBZSxRQUFmLEFBQXVCLEdBQUcsQUFDaEM7NkJBQUEsQUFBaUIsQUFDakI7bUJBQUEsQUFBTyxLQUFQLEFBQVksWUFBWixBQUF3QixBQUN4QjtrQkFBQSxBQUFNLFFBQU4sQUFBYyxBQUNkOztvQkFDUSxJQURILEFBQ08sQUFDVjtvQkFGRixBQUFLLEFBRUcsQUFFVDtBQUpNLEFBQ0g7QUFmSixBQW1CRDtBQUNGO0FBN0NELEFBOENEOzs7OzJCQUNPLEFBQ047VUFBSSxRQUFRLEVBQVosQUFBWSxBQUFFLEFBQ2Q7VUFBSSxhQUFXLEFBQUUsYUFBRixBQUFlO2dCQUFXLEFBQy9CLEFBQ1I7O3lCQUNpQix1QkFBQSxBQUFVLE9BQU8sQUFDOUI7Z0JBQUksTUFBQSxBQUFNLEdBQU4sQUFBUyxPQUFiLEFBQW9CLFNBQVMsQUFDM0I7cUJBQU8sQUFDTDtzQkFERyxBQUNHLEFBQ047c0JBRkYsQUFBSyxBQUVHLEFBRVQ7QUFKTTtBQURQLHVCQU1FLE1BQUEsQUFBTSxHQUFOLEFBQVMsU0FBVCxBQUFrQixnQkFDbEIsTUFBQSxBQUFNLEdBQU4sQUFBUyxTQUZKLEFBRWEsYUFDbEIsQUFDQTtxQkFBTyxBQUNMO3NCQURHLEFBQ0csQUFDTjtzQkFGRixBQUFLLEFBRUcsQUFFVDtBQUpNO0FBSkEsYUFBQSxNQVFBLEFBQ0w7a0JBQUksT0FBTyxJQUROLEFBQ0wsQUFBVyxBQUFJLFlBQVcsQUFDMUI7bUJBQUEsQUFBSyxPQUFMLEFBQVksYUFBYSxNQUF6QixBQUF5QixBQUFNLEFBQy9CO2dCQUFBLEFBQUU7c0JBQUssQUFDQyxBQUNOO3NCQUZLLEFBRUMsQUFDTjtxQkFBSyxNQUFBLEFBQU0sS0FITixBQUdBLEFBQVcsQUFDaEI7dUJBSkssQUFJRSxBQUNQOzZCQUxLLEFBS1EsQUFDYjs2QkFOSyxBQU1RLEFBQ2I7eUJBQVMsaUJBQUEsQUFBVSxLQUFLLEFBQ3RCO3NCQUFJLElBQUEsQUFBSSxTQUFSLEFBQWlCLFdBQVcsQUFDMUI7NkJBQUEsQUFBUyxXQUFULEFBQW9CLGVBQWUsSUFBbkMsQUFBdUMsQUFDeEM7QUFGRCx5QkFFTyxBQUNMOzJCQUFPLEFBQ0w7NEJBQU0sSUFESCxBQUNPLEFBQ1Y7NEJBQU0sSUFGUixBQUFLLEFBRU8sQUFFYjtBQUpNO0FBS1I7QUFoQkgsQUFBTyxBQWtCUjtBQWxCUSxBQUNMO0FBa0JMO0FBdkNMLEFBQWUsQUFBMEIsQUFFNUIsQUF5Q2I7QUF6Q2EsQUFDVDtBQUhxQyxBQUN2QyxPQURhOztVQTJDWCxjQUFZLEFBQUUsY0FBRixBQUFnQjtnQkFBVyxBQUNqQyxBQUNSOzt5QkFDaUIsdUJBQUEsQUFBVSxPQUFPLEFBQzlCO2dCQUFJLE1BQUEsQUFBTSxHQUFOLEFBQVMsT0FBYixBQUFvQixTQUFTLEFBQzNCO3FCQUFPLEFBQ0w7c0JBREcsQUFDRyxBQUNOO3NCQUZGLEFBQUssQUFFRyxBQUVUO0FBSk07QUFEUCx1QkFNRSxNQUFBLEFBQU0sR0FBTixBQUFTLFNBQVQsQUFBa0IsZ0JBQ2xCLE1BQUEsQUFBTSxHQUFOLEFBQVMsU0FGSixBQUVhLGFBQ2xCLEFBQ0E7cUJBQU8sQUFDTDtzQkFERyxBQUNHLEFBQ047c0JBRkYsQUFBSyxBQUVHLEFBRVQ7QUFKTTtBQUpBLGFBQUEsTUFRQSxBQUNMO2tCQUFJLE9BQU8sSUFETixBQUNMLEFBQVcsQUFBSSxZQUFXLEFBQzFCO21CQUFBLEFBQUssT0FBTCxBQUFZLGFBQWEsTUFBekIsQUFBeUIsQUFBTSxBQUMvQjtnQkFBQSxBQUFFO3NCQUFLLEFBQ0MsQUFDTjtzQkFGSyxBQUVDLEFBQ047cUJBQUssTUFBQSxBQUFNLEtBSE4sQUFHQSxBQUFXLEFBQ2hCO3VCQUpLLEFBSUUsQUFDUDs2QkFMSyxBQUtRLEFBQ2I7NkJBTkssQUFNUSxBQUNiO3lCQUFTLGlCQUFBLEFBQVUsS0FBSyxBQUN0QjtzQkFBSSxJQUFBLEFBQUksU0FBUixBQUFpQixXQUFXLEFBQzFCOzhCQUFBLEFBQVUsV0FBVixBQUFxQixlQUFlLElBQXBDLEFBQXdDLEFBQ3pDO0FBRkQseUJBRU8sQUFDTDsyQkFBTyxBQUNMOzRCQUFNLElBREgsQUFDTyxBQUNWOzRCQUFNLElBRlIsQUFBSyxBQUVPLEFBRWI7QUFKTTtBQUtSO0FBaEJILEFBQU8sQUFrQlI7QUFsQlEsQUFDTDtBQWtCTDtBQXZDTCxBQUFnQixBQUEyQixBQUU5QixBQXlDYjtBQXpDYSxBQUNUO0FBSHVDLEFBQ3pDLE9BRGM7O1VBMkNaLGNBQVksQUFBRSxjQUFGLEFBQWdCO2dCQUFXLEFBQ2pDLEFBQ1I7O3lCQUNpQix1QkFBQSxBQUFVLE9BQU8sQUFDOUI7Z0JBQUksTUFBQSxBQUFNLEdBQU4sQUFBUyxPQUFiLEFBQW9CLFNBQVMsQUFDM0I7cUJBQU8sQUFDTDtzQkFERyxBQUNHLEFBQ047c0JBRkYsQUFBSyxBQUVHLEFBRVQ7QUFKTTtBQURQLHVCQU1FLE1BQUEsQUFBTSxHQUFOLEFBQVMsU0FBVCxBQUFrQixnQkFDbEIsTUFBQSxBQUFNLEdBQU4sQUFBUyxTQUZKLEFBRWEsYUFDbEIsQUFDQTtxQkFBTyxBQUNMO3NCQURHLEFBQ0csQUFDTjtzQkFGRixBQUFLLEFBRUcsQUFFVDtBQUpNO0FBSkEsYUFBQSxNQVFBLEFBQ0w7a0JBQUksT0FBTyxJQUROLEFBQ0wsQUFBVyxBQUFJLFlBQVcsQUFDMUI7bUJBQUEsQUFBSyxPQUFMLEFBQVksYUFBYSxNQUF6QixBQUF5QixBQUFNLEFBQy9CO2dCQUFBLEFBQUU7c0JBQUssQUFDQyxBQUNOO3NCQUZLLEFBRUMsQUFDTjtxQkFBSyxNQUFBLEFBQU0sS0FITixBQUdBLEFBQVcsQUFDaEI7dUJBSkssQUFJRSxBQUNQOzZCQUxLLEFBS1EsQUFDYjs2QkFOSyxBQU1RLEFBQ2I7eUJBQVMsaUJBQUEsQUFBVSxLQUFLLEFBQ3RCO3NCQUFJLElBQUEsQUFBSSxTQUFSLEFBQWlCLFdBQVcsQUFDMUI7OEJBQUEsQUFBVSxXQUFWLEFBQXFCLGVBQWUsSUFBcEMsQUFBd0MsQUFDekM7QUFGRCx5QkFFTyxBQUNMOzJCQUFPLEFBQ0w7NEJBQU0sSUFESCxBQUNPLEFBQ1Y7NEJBQU0sSUFGUixBQUFLLEFBRU8sQUFFYjtBQUpNO0FBS1I7QUFoQkgsQUFBTyxBQWtCUjtBQWxCUSxBQUNMO0FBa0JMO0FBdkNMLEFBQWdCLEFBQTJCLEFBRTlCLEFBeUNiO0FBekNhLEFBQ1Q7QUFIdUMsQUFDekMsT0FEYzs7VUEyQ1osaUJBQUosQUFBcUIsQUFDckI7WUFBQSxBQUFNLEdBQU4sQUFBUyxTQUFULEFBQWtCLGlCQUFpQixVQUFBLEFBQVUsR0FBRyxBQUM5QztZQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtVQUFBLEFBQUUsQUFDRjtZQUFBLEFBQUksZ0JBQWdCLEFBQ2xCO2lCQUFPLEFBQ0w7a0JBREcsQUFDRyxBQUNOO2tCQUZGLEFBQUssQUFFRyxBQUVSO0FBSks7aUJBSUwsQUFBTyxBQUNSO0FBRUQ7O1lBQUksQ0FBQyxNQUFBLEFBQU0sVUFBWCxBQUFLLEFBQWdCLFlBQVksQUFDL0I7aUJBQU8sQUFDTDtrQkFERyxBQUNHLEFBQ047a0JBRkYsQUFBSyxBQUVHLEFBRVI7QUFKSztpQkFJTCxBQUFPLEFBQ1I7QUFFRDs7WUFBSSxRQUFKLEFBQUksQUFBUSxZQUFZLEFBQUU7QUFDeEI7MkJBQUEsQUFBaUIsQUFDakI7Y0FBSSxTQUFTLE1BQUEsQUFBTSxLQUFuQixBQUFhLEFBQVcsQUFDeEI7aUJBQUEsQUFBTyxLQUFQLEFBQVksWUFBWixBQUF3QixBQUN4QjtnQkFBQSxBQUFNLFFBQU4sQUFBYyxBQUVkOztZQUFBLEFBQUUsS0FBSyxNQUFBLEFBQU0sS0FBYixBQUFPLEFBQVc7b0JBQ1IsTUFEVixBQUEwQixBQUNoQixBQUFNO0FBRFUsQUFDeEIsYUFERixBQUVHLEtBQUssVUFBQSxBQUFVLEdBQUcsQUFDbkI7NkJBQUEsQUFBaUIsQUFDakI7bUJBQUEsQUFBTyxLQUFQLEFBQVksWUFBWixBQUF3QixBQUN4QjtrQkFBQSxBQUFNLFFBQU4sQUFBYyxBQUNkOztvQkFDUSxFQURILEFBQ0ssQUFDUjtvQkFBTSxFQUZSLEFBQUssQUFFSyxBQUVYO0FBSk0sQUFDSDtBQVBKLGFBQUEsQUFVRyxLQUFLLFVBQUEsQUFBVSxLQUFWLEFBQWUsUUFBZixBQUF1QixHQUFHLEFBQ2hDOzZCQUFBLEFBQWlCLEFBQ2pCO21CQUFBLEFBQU8sS0FBUCxBQUFZLFlBQVosQUFBd0IsQUFDeEI7a0JBQUEsQUFBTSxRQUFOLEFBQWMsQUFDZDs7b0JBQ1EsSUFESCxBQUNPLEFBQ1Y7b0JBRkYsQUFBSyxBQUVHLEFBRVQ7QUFKTSxBQUNIO0FBZkosQUFtQkQ7QUFDRjtBQTdDRCxBQThDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SSxBQy9XVSxlLEFBQUEsbUJBQ1g7a0JBQWU7d0NBQ2I7O1NBQUEsQUFBSyxBQUNMO1NBQUEsQUFBSyxBQUNMO1NBQUEsQUFBSyxBQUNMO1NBQUEsQUFBSyxBQUNMO1NBQUEsQUFBSyxBQUNOOzs7Ozs4QkFDVSxBQUNUO1FBQUEsQUFBRSxHQUFGLEFBQUs7aUJBQ00saUJBQUEsQUFBVSxPQUFPLEFBQ3hCO3NCQUFPLEFBQUssS0FBSyxZQUFZLEFBQzNCO2dCQUFBLEFBQUksT0FBTyxBQUNUO2dCQUFBLEFBQUUsTUFBRixBQUFRLEtBQVIsQUFBYSxRQUFiLEFBQXFCLEFBQ3JCO2dCQUFBLEFBQUUsTUFBRixBQUFRLEtBQVIsQUFBYSxZQUFiLEFBQXlCLFlBQXpCLEFBQXFDLEtBQXJDLEFBQTBDLGtCQUExQyxBQUE0RCxBQUM3RDtBQUhELG1CQUdPLEFBQ0w7Z0JBQUEsQUFBRSxNQUFGLEFBQVEsS0FBUixBQUFhLFFBQWIsQUFBcUIsQUFDckI7Z0JBQUEsQUFBRSxNQUFGLEFBQVEsV0FBUixBQUFtQixZQUFuQixBQUErQixLQUEvQixBQUFvQyxrQkFBcEMsQUFBc0QsQUFDdkQ7QUFDRjtBQVJELEFBQU8sQUFTUixXQVRRO0FBRlgsQUFBWSxBQWFiO0FBYmEsQUFDVjs7OztrQ0FhVyxBQUNiO1FBQUEsQUFBRSxLQUFGLEFBQU87Z0JBQVcsQUFDUixBQUNSO2VBRmdCLEFBRVQsQUFDUDtjQUhnQixBQUdWLEFBQ047Y0FKZ0IsQUFJVixBQUNOO3NCQUxnQixBQUtGLEFBQ2Q7ZUFOZ0IsQUFNVCxBQUNQO29CQVBnQixBQU9KLEFBQ1o7a0JBUmdCLEFBUU4sQUFDVjtpQkFUZ0IsQUFTUCxBQUNUOztnQkFBVyxBQUNILEFBQ047aUJBRlMsQUFFRixBQUNQO2tCQUhTLEFBR0QsQUFDUjtpQkFkYyxBQVVMLEFBSUYsQUFFVDtBQU5XLEFBQ1Q7bUJBS1MsQ0FoQkssQUFnQkwsQUFBQyxBQUNaO2VBakJnQixBQWlCVCxBQUNQO2dCQWxCZ0IsQUFrQlIsQUFDUjs7a0JBQ1Usa0JBQVksQUFBRSxDQURkLEFBRVI7cUJBQVcscUJBQVksQUFBRSxDQUZqQixBQUdSO21CQUFTLG1CQUFZLEFBQUUsQ0FIZixBQUlSO3NCQUFZLHNCQUFZLEFBQUUsQ0FKbEIsQUFLUjt3QkFBYyx3QkFBWSxBQUFFLENBeEJkLEFBbUJOLEFBT1Y7QUFQVSxBQUNSO2lCQXBCSixBQUFrQixBQTBCUCxBQUVaO0FBNUJtQixBQUNoQjs7OztvQ0E0QmEsQUFDZjtRQUFBLEFBQUUsR0FBRixBQUFLLGdCQUFnQixZQUFZLEFBQy9CO1lBQUEsQUFBSSxNQUFKLEFBQVUsUUFBVixBQUFrQixPQUFsQixBQUF5QixBQUN6QjtlQUFPLEtBQVAsQUFBWSxBQUNaO2lCQUFTLEtBQVQsQUFBYyxBQUNkO2dCQUFRLEtBQVIsQUFBYSxBQUNiO21CQUFXLEtBQVgsQUFBZ0IsQUFDaEI7WUFBSSxLQUFBLEFBQUssU0FBVCxBQUFrQixHQUFHLEFBQ25CO2lCQUFBLEFBQU8sQUFDUjtBQUNEO2VBQUEsQUFBTyxBQUNQO2lCQUFBLEFBQVMsQUFDVDttQkFBQSxBQUFXLEFBQ1g7Z0JBQVEsaUJBQVksQUFDbEI7Y0FBQSxBQUFJLEtBQUosQUFBUyxLQUFULEFBQWMsR0FBZCxBQUFpQixBQUNqQjtnQkFBTSxLQUFOLEFBQVcsQUFDWDtnQkFBTSxLQUFOLEFBQVcsQUFDWDtjQUFJLEtBQUosQUFBUyxBQUNUO2tCQUFRLEtBQVIsQUFBYSxBQUNiO2NBQUksS0FBSixBQUFTLFVBQVUsQUFDakI7QUFDRDtBQUNEO3VCQUFRLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0Isa0JBQWxCLEFBQW9DLE9BQXBDLEFBQTJDLE1BQTNDLEFBQWlELElBQXpELEFBQVEsQUFBc0Q7QUFBdEQsWUFDUixNQUFNLE1BQUEsQUFBTSxTQUFaLEFBQXFCLEFBQ3JCO2dCQUFNLEVBQU4sQUFBTSxBQUFFLEFBQ1I7Y0FBSSxNQUFKLEFBQUksQUFBTSxJQUFJLEFBQ1o7Z0JBQUEsQUFBSSxBQUNKO21CQUFPLElBQVAsQUFBVyxLQUFLLEFBQ2Q7dUJBQVMsT0FBTyxNQUFQLEFBQU8sQUFBTSxNQUFNLE9BQU8sTUFBUCxBQUFPLEFBQU0sUUFBUSxNQUFNLElBQU4sQUFBVSxPQUFWLEFBQWlCLE1BQU0sTUFBTSxJQUFOLEFBQVUsT0FBakMsQUFBd0MsTUFBeEMsQUFBOEMsS0FBL0YsQUFBNEIsQUFBd0UsQUFDcEc7QUFDRDtBQUNEO2dCQUFJLE9BQUEsQUFBTyxXQUFXLEtBQXRCLEFBQTJCLEdBQUcsQUFDNUI7cUJBQUEsQUFBTyxLQUFLLElBQVosQUFBWSxBQUFJLEFBQ2pCO0FBRkQsbUJBRU8sQUFDTDtxQkFBTyxNQUFQLEFBQU8sQUFBTSxRQUFRLElBQXJCLEFBQXFCLEFBQUksQUFDMUI7QUFDRDtxQkFBQSxBQUFTLEFBQ1Y7QUFDRjtBQXpCRCxBQTBCQTthQUFBLEFBQUssT0FBTCxBQUFZLFVBQVosQUFBc0IsS0FBdEIsQUFBMkIsQUFDM0I7YUFBQSxBQUFLLEtBQUwsQUFBVSxVQUFWLEFBQW9CLEtBQXBCLEFBQXlCLEFBQ3pCO2VBQUEsQUFBTyxBQUNSO0FBekNELEFBMENEOzs7O2dDQUNZLEFBQ1g7UUFBQSxBQUFFOztlQUVPLFdBQUEsQUFBVSxHQUFHLEFBQ2hCO21CQUFPLEFBQ0w7b0JBREcsQUFDRyxBQUNOO29CQUZGLEFBQUssQUFFRyxBQUVSO0FBSks7bUJBSUwsQUFBTyxBQUNSO0FBUFMsQUFRVjtlQUFLLFdBQUEsQUFBVSxHQUFHLEFBQ2hCO21CQUFPLEFBQ0w7b0JBREcsQUFDRyxBQUNOO29CQUZGLEFBQUssQUFFRyxBQUVSO0FBSks7bUJBSUwsQUFBTyxBQUNSO0FBZFMsQUFlVjtlQUFLLFdBQUEsQUFBVSxHQUFHLEFBQ2hCO21CQUFPLEFBQ0w7b0JBREcsQUFDRyxBQUNOO29CQUZGLEFBQUssQUFFRyxBQUVSO0FBSks7bUJBSUwsQUFBTyxBQUNSO0FBdEJPLEFBQ0UsQUF1Qlo7QUF2QlksQUFDVjtxQkFGUSxBQXdCRyxBQUNiO2tCQXpCVSxBQXlCQSxBQUNWO2VBMUJVLEFBMEJILEFBQ1A7OzBCQUNrQixFQUFBLEFBQUUsbUJBQUYsQUFBcUIsS0E1QnpDLEFBQVksQUEyQkQsQUFDUyxBQUEwQixBQUcvQztBQUpZLEFBQ1A7QUE1QlEsQUFDVjs7OztnQ0ErQlMsQUFDWDtVQUFJLFNBQVMsRUFBYixBQUFhLEFBQUUsQUFDZjtVQUFJLGlCQUFKLEFBQXFCLEFBQ3JCO1VBQUksZUFBZSxDQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVIsQUFBZ0IsT0FBaEIsQUFBdUIsU0FBMUMsQUFBbUIsQUFBZ0MsQUFFbkQ7O2FBQUEsQUFBTyxLQUFLLFVBQUEsQUFBVSxHQUFHLEFBQ3ZCO1lBQUksUUFBUSxFQUFaLEFBQVksQUFBRSxBQUNkO2NBQUEsQUFBTSxHQUFOLEFBQVMsU0FBVCxBQUFrQixpQkFBaUIsVUFBQSxBQUFVLEdBQUcsQUFDOUM7WUFBQSxBQUFFLEFBQ0Y7Y0FBSSxRQUFRLEVBQVosQUFBWSxBQUFFLEFBRWQ7O2NBQUEsQUFBSSxnQkFBZ0IsQUFDbEI7bUJBQU8sQUFDTDtvQkFERyxBQUNHLEFBQ047b0JBRkYsQUFBSyxBQUVHLEFBRVI7QUFKSzttQkFJTCxBQUFPLEFBQ1I7QUFFRDs7Y0FBSSxXQUFZLE1BQUEsQUFBTSxLQUFQLEFBQUMsQUFBVyxhQUEzQixBQUFlLEFBQTBCLEFBQ3pDO2NBQUksYUFBQSxBQUFhLFFBQWIsQUFBcUIsY0FBYyxDQUF2QyxBQUF3QyxHQUFHLEFBQ3pDO21CQUFPLEFBQ0w7b0JBREcsQUFDRyxBQUNOO29CQUZGLEFBQUssQUFFRyxBQUVSO0FBSks7bUJBSUwsQUFBTyxBQUNSO0FBRUQ7O2NBQUksQ0FBQyxNQUFBLEFBQU0sVUFBWCxBQUFLLEFBQWdCLFlBQVksQUFDL0I7bUJBQU8sQUFDTDtvQkFERyxBQUNHLEFBQ047b0JBRkYsQUFBSyxBQUVHLEFBRVI7QUFKSzttQkFJTCxBQUFPLEFBQ1I7QUFFRDs7Y0FBSSxRQUFKLEFBQUksQUFBUSxZQUFZLEFBQUU7QUFDeEI7NkJBQUEsQUFBaUIsQUFDakI7Z0JBQUksU0FBUyxNQUFBLEFBQU0sS0FBbkIsQUFBYSxBQUFXLEFBQ3hCO21CQUFBLEFBQU8sS0FBUCxBQUFZLFlBQVosQUFBd0IsQUFDeEI7a0JBQUEsQUFBTSxRQUFOLEFBQWMsQUFFZDs7Z0JBQUksV0FBSixBQUFlLEFBQ2Y7cUJBQUEsQUFBUyxPQUFPLE1BQWhCLEFBQWdCLEFBQU0sQUFFdEI7O2NBQUEsQUFBRSxLQUFLLE1BQVAsQUFBTyxBQUFNLFFBQVEsVUFBQSxBQUFVLEdBQVYsQUFBYSxHQUFHLEFBQ25DO2tCQUFJLE1BQUosQUFBVSxlQUFlLEFBQ3ZCO29CQUFJLEVBQUEsQUFBRSxxQkFBTixBQUEyQixRQUFRLEFBQ2pDO3NCQUFJLFFBQVEsRUFBQSxBQUFFLHFCQUFGLEFBQXVCLEtBQW5DLEFBQVksQUFBNEIsQUFDeEM7MkJBQUEsQUFBUyxLQUFULEFBQWMsY0FBYyxNQUFBLEFBQU0sYUFBbEMsQUFBK0MsQUFDaEQ7QUFFRDs7b0JBQUksRUFBQSxBQUFFLGdDQUFOLEFBQXNDLFFBQVEsQUFDNUM7c0JBQUksU0FBUSxFQUFBLEFBQUUsZ0NBQUYsQUFBa0MsS0FBOUMsQUFBWSxBQUF1QyxBQUNuRDsyQkFBQSxBQUFTLEtBQVQsQUFBYywwQkFBMEIsT0FBQSxBQUFNLGFBQTlDLEFBQTJELEFBQzVEO0FBQ0Y7QUFDRjtBQVpELEFBY0E7O2NBQUEsQUFBRTtvQkFBSyxBQUNDLEFBQ047b0JBRkssQUFFQyxBQUNOO21CQUFLLE1BQUEsQUFBTSxLQUhOLEFBR0EsQUFBVyxBQUNoQjt1QkFBUyxpQkFBQSxBQUFVLEdBQUcsQUFDcEI7dUJBQU8sQUFDTDt3QkFBTSxFQURILEFBQ0ssQUFDUjt3QkFBTSxFQUZSLEFBQUssQUFFSyxBQUVWO0FBSks7aUNBSUwsQUFBaUIsQUFDakI7dUJBQUEsQUFBTyxLQUFQLEFBQVksWUFBWixBQUF3QixBQUN4QjtzQkFBQSxBQUFNLFFBQU4sQUFBYyxBQUVkOztvQkFBSSxFQUFBLEFBQUUsU0FBRixBQUFXLGFBQWEsRUFBQSxBQUFFLGFBQTlCLEFBQTJDLFdBQVcsQUFDcEQ7eUJBQUEsQUFBTyxTQUFQLEFBQWdCLFFBQVEsRUFBeEIsQUFBMEIsQUFDM0I7QUFDRjtBQWhCSSxBQWlCTDtxQkFBTyxlQUFBLEFBQVUsS0FBVixBQUFlLFFBQWYsQUFBdUIsR0FBRyxBQUMvQjt1QkFBTyxBQUNMO3dCQUFNLElBREgsQUFDTyxBQUNWO3dCQUZGLEFBQUssQUFFRyxBQUVSO0FBSks7aUNBSUwsQUFBaUIsQUFDakI7dUJBQUEsQUFBTyxLQUFQLEFBQVksWUFBWixBQUF3QixBQUN4QjtzQkFBQSxBQUFNLFFBQU4sQUFBYyxBQUNmO0FBekJILEFBQU8sQUEyQlI7QUEzQlEsQUFDTDtBQTJCTDtBQWhGRCxBQWlGRDtBQW5GRCxBQW9GRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJLEFDM05VLG9CLEFBQUEsWUFDWCxxQkFBZTtzQ0FDYjs7TUFBSSxVQUFVLEVBQWQsQUFBYyxBQUFFLEFBQ2hCO01BQUksU0FBUyxFQUFiLEFBQWEsQUFBRSxBQUNmO01BQUksZUFBZSxPQUFBLEFBQU8sS0FBMUIsQUFBbUIsQUFBWSxBQUMvQjtNQUFJLGNBQWMsT0FBQSxBQUFPLEtBQXpCLEFBQWtCLEFBQVksQUFDOUI7TUFBSSxnQkFBZ0IsT0FBQSxBQUFPLEtBQTNCLEFBQW9CLEFBQVksQUFDaEM7TUFBSSxVQUFVLEVBQWQsQUFBYyxBQUFFLEFBRWhCOztVQUFBLEFBQVEsS0FBSyxVQUFBLEFBQVUsR0FBRyxBQUN4QjtRQUFJLFNBQVMsRUFBYixBQUFhLEFBQUUsQUFDZjtRQUFJLFVBQUosQUFBYyxBQUVkOztXQUFBLEFBQU8sS0FBUCxBQUFZLE1BQVosQUFBa0IsS0FBSyxZQUFZLEFBQ2pDO1VBQUksU0FBUyxFQUFiLEFBQWEsQUFBRSxBQUNmO1VBQUksY0FBSixBQUFrQixBQUNsQjtrQkFBQSxBQUFZLFVBQVUsT0FBQSxBQUFPLEtBQTdCLEFBQXNCLEFBQVksQUFFbEM7O1FBQUEsQUFBRSxLQUFLLE9BQVAsQUFBTyxBQUFPLFFBQVEsVUFBQSxBQUFVLEdBQVYsQUFBYSxPQUFPLEFBQ3hDO1lBQUksTUFBSixBQUFVLE1BQU0sQUFDZDtzQkFBQSxBQUFZLEtBQVosQUFBaUIsQUFDbEI7QUFDRjtBQUpELEFBS0E7Y0FBQSxBQUFRLEtBQVIsQUFBYSxBQUNkO0FBWEQsQUFhQTs7V0FBQSxBQUFPO2tCQUFVLEFBQ0gsQUFDWjtrQkFGZSxBQUVILEFBQ1o7Z0JBQVUsT0FISyxBQUdFLEFBQ2pCO21CQUplLEFBSUYsQUFDYjtrQkFMZSxBQUtILEFBQ1o7WUFBTSxPQUFBLEFBQU8sS0FORSxBQU1ULEFBQVksQUFDbEI7ZUFQZSxBQU9OLEFBQ1Q7YUFBTyxDQUFBLEFBQ0wsR0FUSixBQUFpQixBQVFSLEFBRUwsQUFJSjtBQWRpQixBQUNmOztXQWFGLEFBQU8sR0FBUCxBQUFVLFNBQVYsQUFBbUIsYUFBYSxVQUFBLEFBQVUsR0FBRyxBQUMzQztRQUFBLEFBQUUsQUFDRjtVQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDttQkFBQSxBQUFhLEFBQ2I7a0JBQUEsQUFBWSxBQUNaO29CQUFBLEFBQWMsQUFDZDtRQUFBLEFBQUU7Y0FBSyxBQUNDLEFBQ047a0JBRkssQUFFSyxBQUNWO2FBQUssTUFBQSxBQUFNLEtBSE4sQUFHQSxBQUFXLEFBQ2hCO2lCQUFTLGlCQUFBLEFBQVUsR0FBRyxBQUNwQjt1QkFBQSxBQUFhLEFBQ2I7d0JBQUEsQUFBYyxLQUFkLEFBQW1CLEFBQ3BCO0FBUEksQUFRTDtlQUFPLGVBQUEsQUFBVSxLQUFWLEFBQWUsUUFBZixBQUF1QixHQUFHLEFBQy9CO3VCQUFBLEFBQWEsQUFDYjtzQkFBQSxBQUFZLEFBQ1o7a0JBQUEsQUFBUSxJQUFJLElBQVosQUFBZ0IsQUFDakI7QUFaSCxBQUFPLEFBY1I7QUFkUSxBQUNMO0FBUEosQUFzQkE7O1dBQUEsQUFBTyxHQUFQLEFBQVUsU0FBVixBQUFtQixlQUFlLFVBQUEsQUFBVSxHQUFHLEFBQzdDO1FBQUEsQUFBRSxBQUNGO1VBQUksUUFBSixBQUFJLEFBQVEsWUFBWSxBQUFFO0FBQ3hCO2dCQUFBLEFBQVEsQUFDUjtZQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtVQUFBLEFBQUU7Z0JBQUssQUFDQyxBQUNOO2VBQUssTUFBQSxBQUFNLEtBRk4sQUFFQSxBQUFXLEFBQ2hCO21CQUFTLGlCQUFBLEFBQVUsR0FBRyxBQUNwQjtvQkFBQSxBQUFRLEFBQ1I7bUJBQU8sQUFDTDtvQkFBTSxFQURILEFBQ0ssQUFDUjtvQkFBTSxFQUZSLEFBQUssQUFFSyxBQUVWO0FBSks7Z0JBSUQsRUFBQSxBQUFFLFNBQU4sQUFBZSxXQUFXLEFBQ3hCO29CQUFBLEFBQU0sUUFBTixBQUFjLE1BQWQsQUFBb0IsQUFDckI7QUFDRjtBQVpJLEFBYUw7aUJBQU8sZUFBQSxBQUFVLEtBQVYsQUFBZSxRQUFmLEFBQXVCLEdBQUcsQUFDL0I7b0JBQUEsQUFBUSxBQUNSO21CQUFPLEFBQ0w7b0JBQU0sSUFESCxBQUNPLEFBQ1Y7b0JBRkYsQUFBSyxBQUVHLEFBRVQ7QUFKTTtBQWZULEFBQU8sQUFxQlI7QUFyQlEsQUFDTDtBQXFCTDtBQTNCRCxBQTRCRDtBQWpGRCxBQWtGRDtBOzs7OztBQ3pGSDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFUQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsWUFBVyxBQUNwQjtJQUFBLEFBQUUsWUFBRixBQUFjLFFBQWQsQUFBc0IsS0FBdEIsQUFBMkIsQUFDNUI7QUFGRCxHQUFBLEFBRUc7O0FBRUgsRUFBQSxBQUFFLFFBQUYsQUFBVSxHQUFWLEFBQWEsVUFBVSxZQUFXLEFBQ2hDO0FBQ0Q7QUFGRDs7QUFJQTtBQUNBO0FBQ0EsRUFBQSxBQUFFOztBQUVGLEVBQUEsQUFBRSw0QkFBRixBQUE4QixHQUE5QixBQUFpQyxTQUFTLFlBQVcsQUFFbkQ7O01BQUksRUFBQSxBQUFFLE1BQUYsQUFBUSxTQUFaLEFBQUksQUFBaUIsY0FBYyxBQUVqQzs7UUFBSSxlQUFlLEVBQUEsQUFBRSxRQUFyQixBQUFtQixBQUFVLEFBQzdCO1FBQUksZUFBZSxFQUFBLEFBQUUsZ0JBQXJCLEFBQW1CLEFBQWtCLEFBQ3JDO1FBQUksZ0JBQWdCLGVBQXBCLEFBQW1DLEFBRW5DOztNQUFBLEFBQUUsaUJBQUYsQUFBbUIsSUFBbkIsQUFBdUIsVUFBdkIsQUFBaUMsQUFDakM7TUFBQSxBQUFFLG1CQUFGLEFBQXFCLElBQXJCLEFBQXlCLFVBQXpCLEFBQW1DLEFBRW5DOztNQUFBLEFBQUUsbUJBQUYsQUFBcUI7Y0FBVyxBQUN0QixBQUNSO2FBRjhCLEFBRXZCLEFBQ1A7WUFIRixBQUFnQyxBQUd4QixBQUdSO0FBTmdDLEFBQzlCOztRQUtFLFdBQVcsRUFBQSxBQUFFLGdCQUFGLEFBQWtCLEtBQWpDLEFBQWUsQUFBdUIsQUFDdEM7TUFBQSxBQUFFLGdCQUFGLEFBQWtCLFNBQWxCLEFBQTJCLEFBRTVCO0FBbEJELFNBa0JPLEFBRUw7O1FBQUksZUFBZSxFQUFBLEFBQUUsVUFBckIsQUFBbUIsQUFBWSxBQUMvQjtRQUFJLGVBQWUsRUFBQSxBQUFFLGdCQUFyQixBQUFtQixBQUFrQixBQUNyQztRQUFJLGdCQUFnQixlQUFwQixBQUFtQyxBQUVuQzs7TUFBQSxBQUFFLGlCQUFGLEFBQW1CLElBQW5CLEFBQXVCLFVBQXZCLEFBQWlDLEFBQ2pDO01BQUEsQUFBRSxtQkFBRixBQUFxQixJQUFyQixBQUF5QixVQUF6QixBQUFtQyxBQUVuQzs7TUFBQSxBQUFFLG1CQUFGLEFBQXFCO2VBQXJCLEFBQWdDLEFBQ3JCLEFBR1g7QUFKZ0MsQUFDOUI7O01BR0YsQUFBRSxnQkFBRixBQUFrQixZQUFsQixBQUE4QixBQUUvQjtBQUNGO0FBcENEOztBQXNDQSxFQUFBLEFBQUUsYUFBRixBQUFlLEdBQWYsQUFBa0Isb0JBQW9CLFlBQVksQUFDaEQ7SUFBQSxBQUFFLE1BQUYsQUFBUSxLQUFSLEFBQWEsa0JBQWIsQUFBK0IsUUFBL0IsQUFBdUMsS0FBdkMsQUFBNEMsTUFBNUMsQUFBa0QsTUFBbEQsQUFBd0QsQUFDekQ7QUFGRDs7QUFJQSxFQUFBLEFBQUUsYUFBRixBQUFlLEdBQWYsQUFBa0Isb0JBQW9CLFlBQVksQUFDaEQ7SUFBQSxBQUFFLE1BQUYsQUFBUSxLQUFSLEFBQWEsa0JBQWIsQUFBK0IsUUFBL0IsQUFBdUMsS0FBdkMsQUFBNEMsTUFBNUMsQUFBa0QsTUFBbEQsQUFBd0QsQUFDekQ7QUFGRDs7QUFJQSxFQUFFLFlBQVcsQUFDWDtJQUFBLEFBQUUsaUJBQUYsQUFBbUI7O2NBQVcsQUFDakIsQUFDRCxBQUVWO0FBSFcsQUFDVDs7Y0FGSixBQUE4QixBQUlkLEFBQ0osQUFHWjtBQUpnQixBQUNaO0FBTDBCLEFBQzVCO01BT0UsT0FBTyxPQUFBLEFBQU8sU0FBUCxBQUFnQixTQUFoQixBQUF5QixNQUFwQyxBQUFXLEFBQStCLEFBQzFDO1NBQU8sS0FBSyxLQUFBLEFBQUssU0FBakIsQUFBTyxBQUFpQixBQUN4QjtNQUFJLFNBQUosQUFBYSxXQUFXLEFBQ3RCO01BQUEsQUFBRSxpQkFBRixBQUFtQixLQUFLLGNBQUEsQUFBYyxPQUF0QyxBQUE2QyxNQUE3QyxBQUFtRCxTQUFuRCxBQUE0RCxBQUM1RDtNQUFBLEFBQUUsaUJBQUYsQUFBbUIsS0FBSyxjQUFBLEFBQWMsT0FBdEMsQUFBNkMsTUFBN0MsQUFBbUQsVUFBbkQsQUFBNkQsR0FBN0QsQUFBZ0UsR0FBaEUsQUFBbUUsV0FBbkUsQUFBOEUsQUFDL0U7QUFFRDs7SUFBQSxBQUFFLGtCQUFGLEFBQW9CLE1BQU0sWUFBVyxBQUNuQztNQUFBLEFBQUUsUUFBRixBQUFVLFlBQVYsQUFBc0IsQUFDdEI7TUFBQSxBQUFFLGVBQUYsQUFBaUIsTUFBakIsQUFBdUIsWUFBdkIsQUFBbUMsb0JBQW5DLEFBQXVELFlBQXZELEFBQW1FLEFBQ3BFO0FBSEQsQUFJRDtBQXBCRDs7QUFzQkEsU0FBQSxBQUFTLFlBQVksQUFDbkI7TUFBQSxBQUFJLGNBQUosQUFBa0IsY0FBbEIsQUFBZ0MsQUFFaEM7O01BQUksRUFBQSxBQUFFLFFBQUYsQUFBVSxTQUFkLEFBQUksQUFBbUIsa0JBQWtCLEFBRXZDOzttQkFBZSxFQUFBLEFBQUUsUUFBakIsQUFBZSxBQUFVLEFBQ3pCO21CQUFlLEVBQUEsQUFBRSxnQkFBakIsQUFBZSxBQUFrQixBQUNqQztvQkFBZ0IsZUFBaEIsQUFBK0IsQUFDL0I7TUFBQSxBQUFFLGlCQUFGLEFBQW1CLElBQW5CLEFBQXVCLFVBQXZCLEFBQWlDLEFBQ2pDO01BQUEsQUFBRSxtQkFBRixBQUFxQixJQUFyQixBQUF5QixVQUF6QixBQUFtQyxBQUNuQztNQUFBLEFBQUUsaUJBQUYsQUFBbUIsSUFBbkIsQUFBdUIsY0FBdkIsQUFBcUMsQUFFdEM7QUFURCxTQVNPLEFBRUw7O21CQUFlLEVBQUEsQUFBRSxVQUFqQixBQUFlLEFBQVksQUFDM0I7bUJBQWUsRUFBQSxBQUFFLGdCQUFqQixBQUFlLEFBQWtCLEFBQ2pDO29CQUFnQixlQUFoQixBQUErQixBQUMvQjtNQUFBLEFBQUUsaUJBQUYsQUFBbUIsSUFBbkIsQUFBdUIsVUFBdkIsQUFBaUMsQUFDakM7TUFBQSxBQUFFLG1CQUFGLEFBQXFCLElBQXJCLEFBQXlCLFVBQXpCLEFBQW1DLEFBQ25DO01BQUEsQUFBRSxpQkFBRixBQUFtQixJQUFuQixBQUF1QixjQUF2QixBQUFxQyxBQUV0QztBQUNGOzs7QUFFRCxTQUFBLEFBQVMsa0JBQWtCLEFBQ3pCO01BQUksY0FBYyxDQUFBLEFBQUMseUJBQUQsQUFBMEIseUJBQTFCLEFBQW1ELHVCQUFuRCxBQUEwRSwwQkFBMUUsQUFBb0csZ0JBQXBHLEFBQW9ILDRCQUFwSCxBQUFnSiw2QkFBaEosQUFBNkssMkJBQTdLLEFBQXdNLDhCQUF4TSxBQUFzTyxtQkFBdE8sQUFBeVAseUJBQXpQLEFBQWtSLHNCQUFsUixBQUF3Uyx1QkFBeFMsQUFBK1Qsd0JBQS9ULEFBQXVWLHFCQUF2VixBQUE0VywyQkFBNVcsQUFBdVksMEJBQXZZLEFBQWlhLHlCQUFqYSxBQUEwYiw0QkFBMWIsQUFBc2QsNEJBQXRkLEFBQWtmLDZCQUFsZixBQUErZ0IsMkJBQWppQixBQUFrQixBQUEwaUIsQUFDNWpCO09BQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxhQUFhLEFBQ3pCO1FBQUksa0JBQWtCLFlBQXRCLEFBQXNCLEFBQVksQUFDbEM7UUFBSSxFQUFBLEFBQUUsbUJBQUYsQUFBcUIsU0FBekIsQUFBSSxBQUE4QixrQkFBa0IsQUFDbEQ7UUFBQSxBQUFFLG1CQUFGLEFBQXFCLFNBQVMsa0JBQTlCLEFBQWdELEFBQ2hEO2lCQUFXLFlBQVcsQUFDcEI7VUFBQSxBQUFFLG1CQUFGLEFBQXFCLFlBQVksa0JBQUEsQUFBa0IsTUFBbEIsQUFBd0Isa0JBQXpELEFBQTJFLEFBQzVFO0FBRkQsU0FBQSxBQUVHLEFBQ0g7QUFDRDtBQUNGO0FBQ0Y7OztBQUVELElBQUksRUFBQSxBQUFFLHNCQUFOLEFBQTRCLFFBQVEsQUFDbEM7SUFBQSxBQUFFLEtBQ0EsRUFBQSxBQUFFLFVBQVUsT0FBQSxBQUFPLFFBRHJCLEFBQ0UsQUFBMkIseUJBQzNCLEFBQUUsU0FBUyxVQUFBLEFBQVUsVUFBVSxBQUM3QjtNQUFFLFNBQUYsQUFBVyxBQUNaO0FBSkgsQUFFRSxHQUFBLEdBRkYsQUFLRSxLQUFLLFlBQVksQUFDakI7UUFBSSxlQUFlLE9BQW5CLEFBQTBCLEFBQzFCO1FBQUksU0FBSixBQUFhLEFBQ2I7UUFBSSxlQUFKLEFBQW1CLEFBQ25CO1FBQUksZ0JBQUosQUFBb0IsQUFFcEI7O01BQUEsQUFBRSxLQUFGLEFBQU8sY0FBYyxVQUFBLEFBQVUsT0FBVixBQUFpQixPQUFPLEFBQzNDO2FBQUEsQUFBTyxLQUFLLFFBQUEsQUFBUSxPQUFPLE1BQWYsQUFBcUIsV0FBakMsQUFBNEMsQUFDNUM7bUJBQUEsQUFBYSxLQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO29CQUFBLEFBQWMsS0FBSyxNQUFuQixBQUF5QixBQUMxQjtBQUpELEFBS0E7UUFBSTtZQUFZLEFBQ1IsQUFDTjs7Z0JBQU0sQUFDSSxBQUNSOztpQkFBVyxBQUNGLEFBQ1A7MkJBRlMsQUFFUSxBQUNqQjt1QkFIUyxBQUdJLEFBQ2I7Z0JBSlMsQUFJSCxBQUNOO2dCQUxRLEFBQUMsQUFLSDtBQUxHLEFBQ1QsU0FEUTtpQkFNUixBQUNPLEFBQ1A7MkJBRkEsQUFFaUIsQUFDakI7dUJBSEEsQUFHYSxBQUNiO2dCQUpBLEFBSU0sQUFDTjtnQkFmVSxBQUVSLEFBRU0sQUFNUixBQUtNLEFBR1Y7QUFSSSxBQUNBO0FBVEUsQUFDSjs7NkJBZU8sQUFDYyxBQUNyQjtvQkFGTyxBQUVLLEFBQ1o7O21CQUFNLEFBQ0ksQUFDUjtnQkFMSyxBQUdELEFBRUUsQUFFUjtBQUpNLEFBQ0o7O2dCQUdRLEFBQ0YsQUFDTjtxQkFUSyxBQU9HLEFBRUcsQUFFYjtBQUpVLEFBQ1I7O2dCQUdLLEFBQ0MsQUFDTjtxQkFiSyxBQVdBLEFBRU0sQUFFYjtBQUpPLEFBQ0w7OztxQkFJUSxBQUNHLEFBQ1Q7O3VCQUFZLEFBQ0QsQUFDVDsyQkFMRSxBQUNDLEFBQUMsQUFFTSxBQUVHLEFBR2pCO0FBTGMsQUFDVjtBQUhJLEFBQ04sV0FESzs7cUJBT0MsQUFDRyxBQUNUOzt1QkFBWSxBQUNELEFBQ1Q7MkJBN0NWLEFBQWdCLEFBa0JMLEFBZUMsQUFRQyxBQUFDLEFBRU0sQUFFRyxBQU12QjtBQVJvQixBQUNWO0FBSEksQUFDTixXQURLO0FBUkQsQUFDTjtBQWhCSyxBQUNQO0FBbkJZLEFBQ2Q7UUFrREUsTUFBTSxTQUFBLEFBQVMsZUFBVCxBQUF3QixxQkFBeEIsQUFBNkMsV0FBdkQsQUFBVSxBQUF3RCxBQUNsRTtRQUFBLEFBQUksU0FBSixBQUFhLEFBQ2I7UUFBQSxBQUFJLE1BQUosQUFBVSxLQUFWLEFBQWUsQUFDaEI7QUF0RUQsS0FBQSxBQXNFRyxLQUFLLFVBQUEsQUFBVSxLQUFWLEFBQWUsUUFBZixBQUF1QixHQUFHLEFBQ2hDO1lBQUEsQUFBUSxJQUFJLElBQVosQUFBZ0IsQUFDakI7QUF4RUQsQUF5RUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SSxBQ3BOWSxrQixBQUFBLFVBQ1gsbUJBQWU7c0NBQ2I7O01BQUksRUFBQSxBQUFFLHFCQUFOLEFBQTJCLFFBQVEsQUFDakM7UUFBSSxTQUFTLEVBQWIsQUFBYSxBQUFFLEFBQ2Y7UUFBSSxVQUFVLEVBQWQsQUFBYyxBQUFFLEFBQ2hCO1FBQUksYUFBSixBQUFpQixBQUVqQjs7V0FBQSxBQUFPLEdBQVAsQUFBVSxTQUFWLEFBQW1CLGlCQUFpQixVQUFBLEFBQVUsR0FBRyxBQUMvQztVQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtVQUFJLE9BQU8sTUFBQSxBQUFNLFFBQWpCLEFBQVcsQUFBYyxBQUV6Qjs7VUFBSSxRQUFKLEFBQUksQUFBUSxZQUFZLEFBQ3RCO1lBQUksQ0FBSixBQUFLLFlBQVksQUFDZjtrQkFBQSxBQUFRLEFBQ1I7dUJBQUEsQUFBYSxBQUViOztZQUFBLEFBQUU7a0JBQUssQUFDQyxBQUNOO2lCQUFLLE1BQUEsQUFBTSxLQUZOLEFBRUEsQUFBVyxBQUNoQjs7b0JBQ1EsS0FKSCxBQUdDLEFBQ0UsQUFBSyxBQUViO0FBSE0sQUFDSjtxQkFFTyxpQkFBQSxBQUFVLEdBQUcsQUFDcEI7c0JBQUEsQUFBUSxBQUNSOzJCQUFBLEFBQWEsQUFDYjs7c0JBQ1EsRUFESCxBQUNLLEFBQ1I7c0JBQU0sRUFGUixBQUFLLEFBRUssQUFFWDtBQUpNLEFBQ0g7QUFWQyxBQWNMO21CQUFPLGVBQUEsQUFBVSxLQUFWLEFBQWUsUUFBZixBQUF1QixHQUFHLEFBQy9CO3NCQUFBLEFBQVEsQUFDUjsyQkFBQSxBQUFhLEFBQ2I7O3NCQUFLLEFBQ0csQUFDTjtzQkFBTSxJQUZSLEFBQUssQUFFTyxBQUViO0FBSk0sQUFDSDtBQWxCTixBQUFPLEFBdUJSO0FBdkJRLEFBQ0w7QUFMSixlQTJCTyxBQUNMOztrQkFBSyxBQUNHLEFBQ047a0JBRkYsQUFBSyxBQUVHLEFBRVQ7QUFKTSxBQUNIO0FBSUw7QUFDRjtBQXZDRCxBQXdDRDtBQUNGO0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJLEFDaERVLG1CLEFBQUEsV0FDWCxvQkFBZTtzQ0FDYjs7TUFBSSxFQUFBLEFBQUUsaUJBQU4sQUFBdUIsUUFBUSxBQUM3QjtRQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtRQUFJLGlCQUFpQixNQUFBLEFBQU0sS0FBM0IsQUFBcUIsQUFBVyxBQUNoQztRQUFJLFNBQVMsRUFBYixBQUFhLEFBQUUsQUFDZjtRQUFJLGVBQWUsT0FBQSxBQUFPLEtBQTFCLEFBQW1CLEFBQVksQUFDL0I7UUFBSSxjQUFjLE9BQUEsQUFBTyxLQUF6QixBQUFrQixBQUFZLEFBQzlCO1FBQUksZ0JBQWdCLE9BQUEsQUFBTyxLQUEzQixBQUFvQixBQUFZLEFBQ2hDO21CQUFBLEFBQWUsR0FBZixBQUFrQixTQUFTLFVBQUEsQUFBVSxHQUFHLEFBQ3RDO1FBQUEsQUFBRSxBQUNGO1VBQUksUUFBUSxFQUFaLEFBQVksQUFBRSxBQUNkO21CQUFBLEFBQWEsQUFDYjtrQkFBQSxBQUFZLEFBQ1o7b0JBQUEsQUFBYyxBQUNkO1FBQUEsQUFBRTtjQUFLLEFBQ0MsQUFDTjtrQkFGSyxBQUVLLEFBQ1Y7YUFBSyxNQUFBLEFBQU0sS0FBTixBQUFXLFNBQVgsQUFBb0IsUUFBUSxNQUFBLEFBQU0sU0FBTixBQUFlLFFBQWYsQUFBdUIsZUFBdkIsQUFBc0MsS0FBdEMsQUFBMkMsaUJBSHZFLEFBRzRCLEFBQTRELEFBQzdGO2lCQUFTLGlCQUFBLEFBQVUsR0FBRyxBQUNwQjt1QkFBQSxBQUFhLEFBQ2I7d0JBQUEsQUFBYyxLQUFkLEFBQW1CLEFBQ3BCO0FBUEksQUFRTDtlQUFPLGVBQUEsQUFBVSxLQUFWLEFBQWUsUUFBZixBQUF1QixHQUFHLEFBQy9CO3VCQUFBLEFBQWEsQUFDYjtzQkFBQSxBQUFZLEFBQ1o7a0JBQUEsQUFBUSxJQUFJLElBQVosQUFBZ0IsQUFDakI7QUFaSCxBQUFPLEFBY1I7QUFkUSxBQUNMO0FBUEosQUFxQkQ7QUFDRjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUMvQlUsaUIsQUFBQSxxQkFDWDtvQkFBZTt3Q0FDYjs7UUFBSSxFQUFBLEFBQUUsb0JBQU4sQUFBMEIsUUFBUSxBQUNoQztXQUFBLEFBQUssQUFDTjtBQUVEOztRQUFJLEVBQUEsQUFBRSxvQkFBTixBQUEwQixRQUFRLEFBQ2hDO1dBQUEsQUFBSyxBQUNOO0FBRUQ7O1FBQUksRUFBQSxBQUFFLGNBQU4sQUFBb0IsUUFBUSxBQUMxQjtXQUFBLEFBQUssQUFDTjtBQUVEOztRQUFJLEVBQUEsQUFBRSwwQkFBTixBQUFnQyxRQUFRLEFBQ3RDO1dBQUEsQUFBSyxBQUNOO0FBRUQ7O1FBQUksRUFBQSxBQUFFLHVCQUFOLEFBQTZCLFFBQVEsQUFDbkM7V0FBQSxBQUFLLEFBQ047QUFFRDs7UUFBSSxFQUFBLEFBQUUsd0JBQU4sQUFBOEIsUUFBUSxBQUNwQztXQUFBLEFBQUssQUFDTjtBQUVEOztRQUFJLEVBQUEsQUFBRSwwQkFBTixBQUFnQyxRQUFRLEFBQ3RDO1dBQUEsQUFBSyxBQUNOO0FBQ0Y7Ozs7OzJCQUNPLEFBQ047VUFBSSxTQUFTLEVBQWIsQUFBYSxBQUFFLEFBQ2Y7VUFBSSxVQUFVLEVBQWQsQUFBYyxBQUFFLEFBQ2hCO1VBQUksYUFBSixBQUFpQixBQUVqQjs7YUFBQSxBQUFPLEdBQVAsQUFBVSxTQUFWLEFBQW1CLGlCQUFpQixVQUFBLEFBQVUsR0FBRyxBQUMvQztZQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtZQUFJLE9BQU8sTUFBQSxBQUFNLFFBQWpCLEFBQVcsQUFBYyxBQUV6Qjs7WUFBSSxRQUFKLEFBQUksQUFBUSxZQUFZLEFBQ3RCO2NBQUksQ0FBSixBQUFLLFlBQVksQUFDZjtvQkFBQSxBQUFRLEFBQ1I7eUJBQUEsQUFBYSxBQUViOztjQUFBLEFBQUU7b0JBQUssQUFDQyxBQUNOO21CQUFLLE1BQUEsQUFBTSxLQUZOLEFBRUEsQUFBVyxBQUNoQjs7c0JBQ1EsS0FKSCxBQUdDLEFBQ0UsQUFBSyxBQUViO0FBSE0sQUFDSjt1QkFFTyxpQkFBQSxBQUFVLEdBQUcsQUFDcEI7d0JBQUEsQUFBUSxBQUNSOzZCQUFBLEFBQWEsQUFDYjs7d0JBQ1EsRUFESCxBQUNLLEFBQ1I7d0JBQU0sRUFGUixBQUFLLEFBRUssQUFFWDtBQUpNLEFBQ0g7QUFWQyxBQWNMO3FCQUFPLGVBQUEsQUFBVSxLQUFWLEFBQWUsUUFBZixBQUF1QixHQUFHLEFBQy9CO3dCQUFBLEFBQVEsQUFDUjs2QkFBQSxBQUFhLEFBQ2I7O3dCQUFLLEFBQ0csQUFDTjt3QkFBTSxJQUZSLEFBQUssQUFFTyxBQUViO0FBSk0sQUFDSDtBQWxCTixBQUFPLEFBdUJSO0FBdkJRLEFBQ0w7QUFMSixpQkEyQk8sQUFDTDs7b0JBQUssQUFDRyxBQUNOO29CQUZGLEFBQUssQUFFRyxBQUVUO0FBSk0sQUFDSDtBQUlMO0FBQ0Y7QUF2Q0QsQUF3Q0Q7Ozs7a0NBQ2MsQUFDYjtVQUFJLFVBQVUsRUFBZCxBQUFjLEFBQUUsQUFDaEI7Y0FBQSxBQUFRLEdBQVIsQUFBVyxTQUFTLFlBQVksQUFDOUI7WUFBSSxRQUFKLEFBQUksQUFBUSw0QkFBNEIsQUFDdEM7Y0FBSSxRQUFRLEVBQVosQUFBWSxBQUFFLEFBQ2Q7Z0JBQUEsQUFBTSxRQUFOLEFBQWMsQUFFZDs7WUFBQSxBQUFFLEtBQUssTUFBQSxBQUFNLEtBQWIsQUFBTyxBQUFXLFFBQWxCLEFBQTBCLEtBQUssVUFBQSxBQUFVLEdBQUcsQUFDMUM7O29CQUNRLEVBREgsQUFDSyxBQUNSO29CQUFNLEVBRlIsQUFBSyxBQUVLLEFBRVY7QUFKSyxBQUNIO2tCQUdGLEFBQU0sUUFBTixBQUFjLEFBQ2Y7QUFORCxhQUFBLEFBTUcsS0FBSyxVQUFBLEFBQVUsS0FBVixBQUFlLFFBQWYsQUFBdUIsR0FBRyxBQUNoQzs7b0JBQ1EsSUFESCxBQUNPLEFBQ1Y7b0JBRkYsQUFBSyxBQUVHLEFBRVI7QUFKSyxBQUNIO2tCQUdGLEFBQU0sUUFBTixBQUFjLEFBQ2Y7QUFaRCxBQWFEO0FBQ0Y7QUFuQkQsQUFvQkQ7Ozs7NEJBQ1EsQUFDUDtVQUFJLGdCQUFnQixXQUFXLEVBQUEsQUFBRSxrQkFBakMsQUFBb0IsQUFBVyxBQUFvQixBQUNuRDtVQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtVQUFJLFdBQVcsTUFBQSxBQUFNLEtBQXJCLEFBQWUsQUFBVyxBQUMxQjtVQUFJLFdBQVcsTUFBQSxBQUFNLEtBQXJCLEFBQWUsQUFBVyxBQUUxQjs7ZUFBQSxBQUFTLEdBQVQsQUFBWSxTQUFTLFlBQVksQUFDL0I7WUFBSSxRQUFRLEVBQVosQUFBWSxBQUFFLEFBQ2Q7WUFBSSxVQUFVLGdCQUFnQixXQUFXLE1BQXpDLEFBQThCLEFBQVcsQUFBTSxBQUMvQztpQkFBQSxBQUFTLElBQUksUUFBQSxBQUFRLFFBQXJCLEFBQWEsQUFBZ0IsQUFDOUI7QUFKRCxBQUtEOzs7O2lDQUNhLEFBQ1o7VUFBSSxTQUFTLEVBQWIsQUFBYSxBQUFFLEFBQ2Y7VUFBSSxVQUFVLEVBQWQsQUFBYyxBQUFFLEFBQ2hCO1VBQUksYUFBSixBQUFpQixBQUVqQjs7YUFBQSxBQUFPLEdBQVAsQUFBVSxTQUFWLEFBQW1CLGVBQWUsVUFBQSxBQUFVLEdBQUcsQUFDN0M7WUFBSSxRQUFRLEVBQVosQUFBWSxBQUFFLEFBRWQ7O1lBQUksUUFBSixBQUFJLEFBQVEsWUFBWSxBQUN0QjtjQUFJLENBQUosQUFBSyxZQUFZLEFBQ2Y7b0JBQUEsQUFBUSxBQUNSO3lCQUFBLEFBQWEsQUFFYjs7Y0FBQSxBQUFFO29CQUFLLEFBQ0MsQUFDTjttQkFBSyxNQUFBLEFBQU0sS0FGTixBQUVBLEFBQVcsQUFDaEI7dUJBQVMsaUJBQUEsQUFBVSxHQUFHLEFBQ3BCO3dCQUFBLEFBQVEsQUFDUjs2QkFBQSxBQUFhLEFBQ2I7O3dCQUNRLEVBREgsQUFDSyxBQUNSO3dCQUFNLEVBRlIsQUFBSyxBQUVLLEFBRVg7QUFKTSxBQUNIO0FBUEMsQUFXTDtxQkFBTyxlQUFBLEFBQVUsS0FBVixBQUFlLFFBQWYsQUFBdUIsR0FBRyxBQUMvQjt3QkFBQSxBQUFRLEFBQ1I7NkJBQUEsQUFBYSxBQUNiOzt3QkFBSyxBQUNHLEFBQ047d0JBQU0sSUFGUixBQUFLLEFBRU8sQUFFYjtBQUpNLEFBQ0g7QUFmTixBQUFPLEFBb0JSO0FBcEJRLEFBQ0w7QUFMSixpQkF3Qk8sQUFDTDs7b0JBQUssQUFDRyxBQUNOO29CQUZGLEFBQUssQUFFRyxBQUVUO0FBSk0sQUFDSDtBQUlMO0FBQ0Y7QUFuQ0QsQUFxQ0E7O2FBQUEsQUFBTyxHQUFQLEFBQVUsU0FBVixBQUFtQixhQUFhLFVBQUEsQUFBVSxHQUFHLEFBQzNDO1lBQUksUUFBUSxFQUFaLEFBQVksQUFBRSxBQUNkO1lBQUksT0FBTyxNQUFBLEFBQU0sUUFBakIsQUFBVyxBQUFjLEFBQ3pCO1lBQUksUUFBSixBQUFJLEFBQVEsWUFBWSxBQUN0QjtjQUFJLENBQUosQUFBSyxZQUFZLEFBQ2Y7b0JBQUEsQUFBUSxBQUNSO3lCQUFBLEFBQWEsQUFFYjs7Y0FBQSxBQUFFO29CQUFLLEFBQ0MsQUFDTjttQkFBSyxNQUFBLEFBQU0sS0FGTixBQUVBLEFBQVcsQUFDaEI7O3NCQUNRLEtBSkgsQUFHQyxBQUNFLEFBQUssQUFFYjtBQUhNLEFBQ0o7dUJBRU8saUJBQUEsQUFBVSxHQUFHLEFBQ3BCO3dCQUFBLEFBQVEsQUFDUjs2QkFBQSxBQUFhLEFBQ2I7O3dCQUNRLEVBREgsQUFDSyxBQUNSO3dCQUFNLEVBRlIsQUFBSyxBQUVLLEFBRVg7QUFKTSxBQUNIO0FBVkMsQUFjTDtxQkFBTyxlQUFBLEFBQVUsS0FBVixBQUFlLFFBQWYsQUFBdUIsR0FBRyxBQUMvQjt3QkFBQSxBQUFRLEFBQ1I7NkJBQUEsQUFBYSxBQUNiOzt3QkFBSyxBQUNHLEFBQ047d0JBQU0sSUFGUixBQUFLLEFBRU8sQUFFYjtBQUpNLEFBQ0g7QUFsQk4sQUFBTyxBQXVCUjtBQXZCUSxBQUNMO0FBTEosaUJBMkJPLEFBQ0w7O29CQUFLLEFBQ0csQUFDTjtvQkFGRixBQUFLLEFBRUcsQUFFVDtBQUpNLEFBQ0g7QUFJTDtBQUNGO0FBdENELEFBdUNEOzs7OzhCQUNVLEFBQ1Q7VUFBSSxTQUFTLEVBQWIsQUFBYSxBQUFFLEFBQ2Y7VUFBSSxVQUFVLEVBQWQsQUFBYyxBQUFFLEFBQ2hCO1VBQUksYUFBSixBQUFpQixBQUVqQjs7YUFBQSxBQUFPLEdBQVAsQUFBVSxTQUFWLEFBQW1CLGFBQWEsVUFBQSxBQUFVLEdBQUcsQUFDM0M7WUFBSSxRQUFRLEVBQVosQUFBWSxBQUFFLEFBQ2Q7WUFBSSxPQUFPLE1BQUEsQUFBTSxRQUFqQixBQUFXLEFBQWMsQUFDekI7WUFBSSxRQUFKLEFBQUksQUFBUSxZQUFZLEFBQ3RCO2NBQUksQ0FBSixBQUFLLFlBQVksQUFDZjtvQkFBQSxBQUFRLEFBQ1I7eUJBQUEsQUFBYSxBQUViOztjQUFBLEFBQUU7b0JBQUssQUFDQyxBQUNOO21CQUFLLE1BQUEsQUFBTSxLQUZOLEFBRUEsQUFBVyxBQUNoQjs7c0JBQ1EsS0FKSCxBQUdDLEFBQ0UsQUFBSyxBQUViO0FBSE0sQUFDSjt1QkFFTyxpQkFBQSxBQUFVLEdBQUcsQUFDcEI7d0JBQUEsQUFBUSxBQUNSOzZCQUFBLEFBQWEsQUFDYjs7d0JBQ1EsRUFESCxBQUNLLEFBQ1I7d0JBQU0sRUFGUixBQUFLLEFBRUssQUFFWDtBQUpNLEFBQ0g7QUFWQyxBQWNMO3FCQUFPLGVBQUEsQUFBVSxLQUFWLEFBQWUsUUFBZixBQUF1QixHQUFHLEFBQy9CO3dCQUFBLEFBQVEsQUFDUjs2QkFBQSxBQUFhLEFBQ2I7O3dCQUFLLEFBQ0csQUFDTjt3QkFBTSxJQUZSLEFBQUssQUFFTyxBQUViO0FBSk0sQUFDSDtBQWxCTixBQUFPLEFBdUJSO0FBdkJRLEFBQ0w7QUFMSixpQkEyQk8sQUFDTDs7b0JBQUssQUFDRyxBQUNOO29CQUZGLEFBQUssQUFFRyxBQUVUO0FBSk0sQUFDSDtBQUlMO0FBQ0Y7QUF0Q0QsQUF1Q0Q7Ozs7K0JBQ1csQUFDVjtVQUFJLFNBQVMsRUFBYixBQUFhLEFBQUUsQUFDZjtVQUFJLFVBQVUsRUFBZCxBQUFjLEFBQUUsQUFDaEI7VUFBSSxhQUFKLEFBQWlCLEFBRWpCOzthQUFBLEFBQU8sR0FBUCxBQUFVLFNBQVYsQUFBbUIsYUFBYSxVQUFBLEFBQVUsR0FBRyxBQUMzQztZQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtZQUFJLE9BQU8sTUFBQSxBQUFNLFFBQWpCLEFBQVcsQUFBYyxBQUN6QjtZQUFJLFFBQUosQUFBSSxBQUFRLFlBQVksQUFDdEI7Y0FBSSxDQUFKLEFBQUssWUFBWSxBQUNmO29CQUFBLEFBQVEsQUFDUjt5QkFBQSxBQUFhLEFBRWI7O2NBQUEsQUFBRTtvQkFBSyxBQUNDLEFBQ047bUJBQUssTUFBQSxBQUFNLEtBRk4sQUFFQSxBQUFXLEFBQ2hCOztzQkFDUSxLQUpILEFBR0MsQUFDRSxBQUFLLEFBRWI7QUFITSxBQUNKO3VCQUVPLGlCQUFBLEFBQVUsR0FBRyxBQUNwQjt3QkFBQSxBQUFRLEFBQ1I7NkJBQUEsQUFBYSxBQUNiOzt3QkFDUSxFQURILEFBQ0ssQUFDUjt3QkFBTSxFQUZSLEFBQUssQUFFSyxBQUVYO0FBSk0sQUFDSDtBQVZDLEFBY0w7cUJBQU8sZUFBQSxBQUFVLEtBQVYsQUFBZSxRQUFmLEFBQXVCLEdBQUcsQUFDL0I7d0JBQUEsQUFBUSxBQUNSOzZCQUFBLEFBQWEsQUFDYjs7d0JBQUssQUFDRyxBQUNOO3dCQUFNLElBRlIsQUFBSyxBQUVPLEFBRWI7QUFKTSxBQUNIO0FBbEJOLEFBQU8sQUF1QlI7QUF2QlEsQUFDTDtBQUxKLGlCQTJCTyxBQUNMOztvQkFBSyxBQUNHLEFBQ047b0JBRkYsQUFBSyxBQUVHLEFBRVQ7QUFKTSxBQUNIO0FBSUw7QUFDRjtBQXRDRCxBQXVDRDs7OztpQ0FDYSxBQUNaO1VBQUksU0FBUyxFQUFiLEFBQWEsQUFBRSxBQUNmO1VBQUksVUFBVSxFQUFkLEFBQWMsQUFBRSxBQUNoQjtVQUFJLGFBQUosQUFBaUIsQUFFakI7O2FBQUEsQUFBTyxHQUFQLEFBQVUsU0FBVixBQUFtQixlQUFlLFVBQUEsQUFBVSxHQUFHLEFBQzdDO1lBQUksUUFBUSxFQUFaLEFBQVksQUFBRSxBQUVkOztZQUFJLFFBQUosQUFBSSxBQUFRLFlBQVksQUFDdEI7Y0FBSSxDQUFKLEFBQUssWUFBWSxBQUNmO29CQUFBLEFBQVEsQUFDUjt5QkFBQSxBQUFhLEFBRWI7O2NBQUEsQUFBRTtvQkFBSyxBQUNDLEFBQ047bUJBQUssTUFBQSxBQUFNLEtBRk4sQUFFQSxBQUFXLEFBQ2hCO3VCQUFTLGlCQUFBLEFBQVUsR0FBRyxBQUNwQjt3QkFBQSxBQUFRLEFBQ1I7NkJBQUEsQUFBYSxBQUNiOzt3QkFDUSxFQURILEFBQ0ssQUFDUjt3QkFBTSxFQUZSLEFBQUssQUFFSyxBQUVYO0FBSk0sQUFDSDtBQVBDLEFBV0w7cUJBQU8sZUFBQSxBQUFVLEtBQVYsQUFBZSxRQUFmLEFBQXVCLEdBQUcsQUFDL0I7d0JBQUEsQUFBUSxBQUNSOzZCQUFBLEFBQWEsQUFDYjs7d0JBQUssQUFDRyxBQUNOO3dCQUFNLElBRlIsQUFBSyxBQUVPLEFBRWI7QUFKTSxBQUNIO0FBZk4sQUFBTyxBQW9CUjtBQXBCUSxBQUNMO0FBTEosaUJBd0JPLEFBQ0w7O29CQUFLLEFBQ0csQUFDTjtvQkFGRixBQUFLLEFBRUcsQUFFVDtBQUpNLEFBQ0g7QUFJTDtBQUNGO0FBbkNELEFBb0NEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUNwVVUsaUIsQUFBQSxTQUNYLGtCQUFlO3NDQUNiOztJQUFBLEFBQUUsZUFBRixBQUFpQixNQUFNLFVBQUEsQUFBUyxPQUFPLEFBQ3JDO1VBQUEsQUFBTSxBQUNQO0FBRkQsQUFJQTs7SUFBQSxBQUFFLHNCQUFGLEFBQXdCLEdBQXhCLEFBQTJCLFNBQVMsWUFBVyxBQUM3QztNQUFBLEFBQUUsTUFBRixBQUFRLFNBQVIsQUFBaUIsWUFBakIsQUFBNkIsQUFDOUI7QUFGRCxBQUlBOztNQUFJLGVBQUosQUFBbUIsQUFDbkI7SUFBQSxBQUFFLDRCQUFGLEFBQThCLEtBQUssVUFBQSxBQUFTLE9BQVQsQUFBZ0IsTUFBTSxBQUN2RDtRQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtvQkFBZ0IsTUFBQSxBQUFNLGVBQWUsU0FBUyxNQUFBLEFBQU0sSUFBZixBQUFTLEFBQVUsZ0JBQXhDLEFBQXFCLEFBQW1DLE1BQU0sU0FBUyxNQUFBLEFBQU0sSUFBZixBQUFTLEFBQVUsaUJBQWpHLEFBQThFLEFBQW9DLEFBQ25IO0FBSEQsQUFJQTtJQUFBLEFBQUUsd0JBQUYsQUFBMEIsTUFBMUIsQUFBZ0MsTUFBaEMsQUFBc0MsQUFFdEM7O0lBQUEsQUFBRSxxQkFBRixBQUF1QixBQUV2Qjs7SUFBQSxBQUFFLDBDQUFGLEFBQTRDLEFBQzVDO0lBQUEsQUFBRSxvQ0FBRixBQUFzQyxBQUN0QztJQUFBLEFBQUUsa0JBQUYsQUFBb0IsQUFFcEI7O0lBQUEsQUFBRSxhQUFGLEFBQWUsT0FBZixBQUFzQixBQUV0Qjs7SUFBQSxBQUFFLGlCQUFGLEFBQW1CLE9BQW5CLEFBQTBCLEFBQzFCO0lBQUEsQUFBRSxlQUFGLEFBQWlCLE9BQWpCLEFBQXdCLEFBRXhCOztJQUFBLEFBQUUsb0JBQUYsQUFBc0I7V0FBVyxBQUN4QixBQUNQO1VBRitCLEFBRXpCLEFBQ047bUJBSEYsQUFBaUMsQUFHaEIsQUFHakI7QUFOaUMsQUFDL0I7O0lBS0YsQUFBRSw0QkFBRixBQUE4QjtXQUFXLEFBQ2hDLEFBQ1A7VUFGdUMsQUFFakMsQUFDTjtZQUh1QyxBQUcvQixBQUNSO21CQUpGLEFBQXlDLEFBSXhCLEFBR2pCO0FBUHlDLEFBQ3ZDOztJQU1GLEFBQUUsd0JBQUYsQUFBMEI7V0FBVyxBQUM1QixBQUNQO1VBRm1DLEFBRTdCLEFBQ047bUJBSEYsQUFBcUMsQUFHcEIsQUFHakI7QUFOcUMsQUFDbkM7O0lBS0YsQUFBRSxtQkFBRixBQUFxQixNQUFNLFlBQVcsQUFDcEM7UUFBSSxNQUFNLEVBQVYsQUFBVSxBQUFFLEFBQ1o7UUFBQSxBQUFJLE9BQUosQUFBVyxBQUNaO0FBSEQsQUFLQTs7SUFBQSxBQUFFLG1CQUFGLEFBQXFCO2VBQXJCLEFBQTZCLEFBQ2hCLEFBR2I7QUFKNkIsQUFDM0I7O0lBR0YsQUFBRSxvQkFBRixBQUFzQixNQUFNLFlBQVcsQUFDckM7TUFBQSxBQUFFLE1BQUYsQUFBUSxTQUFSLEFBQWlCLFNBQWpCLEFBQTBCLEFBQzNCO0FBRkQsQUFJQTs7SUFBQSxBQUFFLG1CQUFGLEFBQXFCO2VBQVEsQUFDaEIsQUFDWDtVQUYyQixBQUVyQixBQUNOO2VBSDJCLEFBR2hCLEFBQ1g7YUFBUyxtQkFBVyxBQUNsQjtVQUFJLFNBQVMsRUFBQSxBQUFFLE1BQUYsQUFBUSxLQUFyQixBQUFhLEFBQWEsQUFDMUI7YUFBTyxFQUFBLEFBQUUsUUFBVCxBQUFPLEFBQVUsQUFDbEI7QUFQSCxBQUE2QjtBQUFBLEFBQzNCLEtBREYsQUFRRyxNQUFNLFVBQUEsQUFBUyxLQUFLLEFBQ3JCO1FBQUEsQUFBSSxBQUNMO0FBVkQsQUFZQTs7SUFBQSxBQUFFLDJCQUFGLEFBQTZCO2VBQVEsQUFDeEIsQUFDWDtVQUZtQyxBQUU3QixBQUNOO2VBSEYsQUFBcUMsQUFHeEI7QUFId0IsQUFDbkMsS0FERixBQUlHLE1BQU0sVUFBQSxBQUFTLEtBQUssQUFDckI7UUFBQSxBQUFJLEFBQ0w7QUFORCxBQVFBOztJQUFBLEFBQUUsZUFBRixBQUFpQjtZQUFqQixBQUE4QixBQUNwQixBQUVWO0FBSDhCLEFBQzVCO0lBRUYsQUFBRSxpQkFBRixBQUFtQixBQUVuQjs7TUFBRyxTQUFBLEFBQVMsZUFBWixBQUFHLEFBQXdCLG1CQUFtQixBQUM1QzthQUFBLEFBQVMsZUFBVCxBQUF3QixrQkFBeEIsQUFBMEMsaUJBQTFDLEFBQTJELFNBQVMsWUFBWSxBQUM5RTtVQUFJLFdBQUosQUFBZSxTQUFTLEFBQ3RCO21CQUFBLEFBQVcsQUFDWjtBQUNGO0FBSkQsQUFLRDtBQUNGO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SSxBQzVGVSxtQixBQUFBLHVCQUNYO3NCQUFlO3dDQUNiOztRQUFJLEVBQUEsQUFBRSxzQkFBTixBQUE0QixRQUFRLEFBQ2xDO1dBQUEsQUFBSyxBQUNOO0FBQ0Y7Ozs7OzJCQUNPLEFBQ047VUFBSSxTQUFTLEVBQWIsQUFBYSxBQUFFLEFBQ2Y7VUFBSSxVQUFVLEVBQWQsQUFBYyxBQUFFLEFBRWhCOzthQUFBLEFBQU8sR0FBUCxBQUFVLFNBQVYsQUFBbUIsZ0JBQWdCLFlBQVksQUFDN0M7WUFBSSxRQUFRLEVBQVosQUFBWSxBQUFFLEFBQ2Q7WUFBSSxRQUFKLEFBQUksQUFBUSwyQkFBMkIsQUFBRTtBQUN2QztrQkFBQSxBQUFRLEFBQ1I7WUFBQSxBQUFFO2tCQUFLLEFBQ0MsQUFDTjtpQkFBSyxNQUFBLEFBQU0sS0FGTixBQUVBLEFBQVcsQUFDaEI7O3NCQUhLLEFBR0MsQUFDSSxBQUVWO0FBSE0sQUFDSjtxQkFFTyxpQkFBQSxBQUFVLEdBQUcsQUFDcEI7cUJBQU8sQUFDTDtzQkFBTSxFQURILEFBQ0ssQUFDUjtzQkFBTSxFQUZSLEFBQUssQUFFSyxBQUVWO0FBSks7c0JBSUwsQUFBUSxBQUNUO0FBWkksQUFhTDttQkFBTyxlQUFBLEFBQVUsS0FBSyxBQUNwQjtxQkFBTyxBQUNMO3NCQURHLEFBQ0csQUFDTjtzQkFBTSxJQUZSLEFBQUssQUFFTyxBQUVaO0FBSks7c0JBSUwsQUFBUSxBQUNUO0FBbkJILEFBQU8sQUFxQlI7QUFyQlEsQUFDTDtBQXFCTDtBQTFCRCxBQTRCQTs7YUFBQSxBQUFPLEdBQVAsQUFBVSxTQUFWLEFBQW1CLGVBQWUsWUFBWSxBQUM1QztZQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtZQUFJLFFBQUosQUFBSSxBQUFRLDBCQUEwQixBQUFFO0FBQ3RDO2tCQUFBLEFBQVEsQUFDUjtZQUFBLEFBQUU7a0JBQUssQUFDQyxBQUNOO2lCQUFLLE1BQUEsQUFBTSxLQUZOLEFBRUEsQUFBVyxBQUNoQjs7c0JBSEssQUFHQyxBQUNJLEFBRVY7QUFITSxBQUNKO3FCQUVPLGlCQUFBLEFBQVUsR0FBRyxBQUNwQjtxQkFBTyxBQUNMO3NCQUFNLEVBREgsQUFDSyxBQUNSO3NCQUFNLEVBRlIsQUFBSyxBQUVLLEFBRVY7QUFKSztzQkFJTCxBQUFRLEFBQ1Q7QUFaSSxBQWFMO21CQUFPLGVBQUEsQUFBVSxLQUFLLEFBQ3BCO3FCQUFPLEFBQ0w7c0JBREcsQUFDRyxBQUNOO3NCQUFNLElBRlIsQUFBSyxBQUVPLEFBRVo7QUFKSztzQkFJTCxBQUFRLEFBQ1Q7QUFuQkgsQUFBTyxBQXFCUjtBQXJCUSxBQUNMO0FBcUJMO0FBMUJELEFBMkJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pOyIsImV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCQoJyNjcmVhdGVBbm5vdW5jZW1lbnRGb3JtJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNyZWF0ZSgpXG4gICAgfVxuXG4gICAgaWYgKCQoJyNlZGl0QW5ub3VuY2VtZW50Rm9ybScpLmxlbmd0aCkge1xuICAgICAgdGhpcy5lZGl0KClcbiAgICB9XG4gIH1cbiAgY3JlYXRlICgpIHtcbiAgICB2YXIgJGZvcm0gPSAkKCcjY3JlYXRlQW5ub3VuY2VtZW50Rm9ybScpXG4gICAgdmFyIGVkaXRvckVOID0gJCgnI2VkaXRvckVOJykuc3VtbWVybm90ZSh7XG4gICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBvbkltYWdlVXBsb2FkOiBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgICBpZiAoZmlsZXNbMF0uc2l6ZSA+IDIwMDAwMDApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIHNtYWxsZXIgdGhhbiAyTWIuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL2pwZWcnICYmXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgbXVzdCBiZSBqcGcgb3IgcG5nLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ltYWdlRmlsZScsIGZpbGVzWzBdKVxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgICB1cmw6ICRmb3JtLmRhdGEoJ3VwbG9hZCcpLFxuICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgIGVkaXRvckVOLnN1bW1lcm5vdGUoJ2luc2VydEltYWdlJywgcmVzLnVybClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlcy50eXBlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdmFyIGVkaXRvckNIUyA9ICQoJyNlZGl0b3JDSFMnKS5zdW1tZXJub3RlKHtcbiAgICAgIGhlaWdodDogMzAwLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9uSW1hZ2VVcGxvYWQ6IGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICAgIGlmIChmaWxlc1swXS5zaXplID4gMjAwMDAwMCkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgc21hbGxlciB0aGFuIDJNYi4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvanBlZycgJiZcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9wbmcnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBtdXN0IGJlIGpwZyBvciBwbmcuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnaW1hZ2VGaWxlJywgZmlsZXNbMF0pXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICAgIHVybDogJGZvcm0uZGF0YSgndXBsb2FkJyksXG4gICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgZWRpdG9yQ0hTLnN1bW1lcm5vdGUoJ2luc2VydEltYWdlJywgcmVzLnVybClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlcy50eXBlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdmFyIGVkaXRvckNIVCA9ICQoJyNlZGl0b3JDSFQnKS5zdW1tZXJub3RlKHtcbiAgICAgIGhlaWdodDogMzAwLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9uSW1hZ2VVcGxvYWQ6IGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICAgIGlmIChmaWxlc1swXS5zaXplID4gMjAwMDAwMCkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgc21hbGxlciB0aGFuIDJNYi4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvanBlZycgJiZcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9wbmcnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBtdXN0IGJlIGpwZyBvciBwbmcuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnaW1hZ2VGaWxlJywgZmlsZXNbMF0pXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICAgIHVybDogJGZvcm0uZGF0YSgndXBsb2FkJyksXG4gICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgZWRpdG9yQ0hULnN1bW1lcm5vdGUoJ2luc2VydEltYWdlJywgcmVzLnVybClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlcy50eXBlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdmFyIGZvcm1Qcm9jZXNzaW5nID0gZmFsc2VcbiAgICAkZm9ybS5vbignY2xpY2snLCAnW3R5cGU9c3VibWl0XScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChmb3JtUHJvY2Vzc2luZykge1xuICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgIHRleHQ6ICdBIGZvcm0gcHJvY2VzcyBpcyBzdGlsbCBydW5uaW5nLicsXG4gICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJ1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKCEkZm9ybS5wYXJzbGV5KCkudmFsaWRhdGUoKSkge1xuICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgIHRleHQ6ICdJbnZhbGlkIHZhbHVlIG9uIGZvcm0uIENoZWNrIGFnYWluLicsXG4gICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlybSgnU3VibWl0PycpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSB0cnVlXG4gICAgICAgIHZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCc6aW5wdXQnKVxuICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCB0cnVlKVxuICAgICAgICAkdGhpcy5kaXNhYmxlKHRydWUpXG5cbiAgICAgICAgJC5wb3N0KCRmb3JtLmRhdGEoJ3VybCcpLCB7XG4gICAgICAgICAgJ2RhdGEnOiAkZm9ybS5zZXJpYWxpemVGb3JtKClcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGZvcm1Qcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCBmYWxzZSlcbiAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlLFxuICAgICAgICAgICAgdHlwZTogZS50eXBlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgZmFsc2UpXG4gICAgICAgICAgJHRoaXMuZGlzYWJsZShmYWxzZSlcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHQsXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGVkaXQgKCkge1xuICAgIHZhciAkZm9ybSA9ICQoJyNlZGl0QW5ub3VuY2VtZW50Rm9ybScpXG4gICAgdmFyIGVkaXRvckVOID0gJCgnI2VkaXRvckVOJykuc3VtbWVybm90ZSh7XG4gICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBvbkltYWdlVXBsb2FkOiBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgICBpZiAoZmlsZXNbMF0uc2l6ZSA+IDIwMDAwMDApIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHRleHQ6ICdGaWxlIHNtYWxsZXIgdGhhbiAyTWIuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgZmlsZXNbMF0udHlwZSAhPT0gJ2ltYWdlL2pwZWcnICYmXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgbXVzdCBiZSBqcGcgb3IgcG5nLicsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ltYWdlRmlsZScsIGZpbGVzWzBdKVxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgICB1cmw6ICRmb3JtLmRhdGEoJ3VwbG9hZCcpLFxuICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgIGVkaXRvckVOLnN1bW1lcm5vdGUoJ2luc2VydEltYWdlJywgcmVzLnVybClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlcy50eXBlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdmFyIGVkaXRvckNIUyA9ICQoJyNlZGl0b3JDSFMnKS5zdW1tZXJub3RlKHtcbiAgICAgIGhlaWdodDogMzAwLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9uSW1hZ2VVcGxvYWQ6IGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICAgIGlmIChmaWxlc1swXS5zaXplID4gMjAwMDAwMCkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgc21hbGxlciB0aGFuIDJNYi4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvanBlZycgJiZcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9wbmcnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBtdXN0IGJlIGpwZyBvciBwbmcuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnaW1hZ2VGaWxlJywgZmlsZXNbMF0pXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICAgIHVybDogJGZvcm0uZGF0YSgndXBsb2FkJyksXG4gICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgZWRpdG9yQ0hTLnN1bW1lcm5vdGUoJ2luc2VydEltYWdlJywgcmVzLnVybClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlcy50eXBlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdmFyIGVkaXRvckNIVCA9ICQoJyNlZGl0b3JDSFQnKS5zdW1tZXJub3RlKHtcbiAgICAgIGhlaWdodDogMzAwLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9uSW1hZ2VVcGxvYWQ6IGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICAgIGlmIChmaWxlc1swXS5zaXplID4gMjAwMDAwMCkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpbGUgc21hbGxlciB0aGFuIDJNYi4nLFxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBmaWxlc1swXS50eXBlICE9PSAnaW1hZ2UvanBlZycgJiZcbiAgICAgICAgICAgIGZpbGVzWzBdLnR5cGUgIT09ICdpbWFnZS9wbmcnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0ZXh0OiAnRmlsZSBtdXN0IGJlIGpwZyBvciBwbmcuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnaW1hZ2VGaWxlJywgZmlsZXNbMF0pXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICAgIHVybDogJGZvcm0uZGF0YSgndXBsb2FkJyksXG4gICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgZWRpdG9yQ0hULnN1bW1lcm5vdGUoJ2luc2VydEltYWdlJywgcmVzLnVybClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlcy50eXBlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdmFyIGZvcm1Qcm9jZXNzaW5nID0gZmFsc2VcbiAgICAkZm9ybS5vbignY2xpY2snLCAnW3R5cGU9c3VibWl0XScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChmb3JtUHJvY2Vzc2luZykge1xuICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgIHRleHQ6ICdBIGZvcm0gcHJvY2VzcyBpcyBzdGlsbCBydW5uaW5nLicsXG4gICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJ1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKCEkZm9ybS5wYXJzbGV5KCkudmFsaWRhdGUoKSkge1xuICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgIHRleHQ6ICdJbnZhbGlkIHZhbHVlIG9uIGZvcm0uIENoZWNrIGFnYWluLicsXG4gICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlybSgnU3VibWl0PycpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSB0cnVlXG4gICAgICAgIHZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCc6aW5wdXQnKVxuICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCB0cnVlKVxuICAgICAgICAkdGhpcy5kaXNhYmxlKHRydWUpXG5cbiAgICAgICAgJC5wb3N0KCRmb3JtLmRhdGEoJ3VybCcpLCB7XG4gICAgICAgICAgJ2RhdGEnOiAkZm9ybS5zZXJpYWxpemVGb3JtKClcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGZvcm1Qcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCBmYWxzZSlcbiAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlLFxuICAgICAgICAgICAgdHlwZTogZS50eXBlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgZmFsc2UpXG4gICAgICAgICAgJHRoaXMuZGlzYWJsZShmYWxzZSlcbiAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHQsXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29yZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuICAgIHRoaXMubm90eURlZmF1bHQoKVxuICAgIHRoaXMuc2VyaWFsaXplRm9ybSgpXG4gICAgdGhpcy5zZXR1cEFqYXgoKVxuICAgIHRoaXMuc2V0dXBGb3JtKClcbiAgfVxuICBkaXNhYmxlICgpIHtcbiAgICAkLmZuLmV4dGVuZCh7XG4gICAgICBkaXNhYmxlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS5oaWRlKClcbiAgICAgICAgICAgICQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5maW5kKCcuYnRuLXByZWxvYWRlcicpLnNob3coKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS5zaG93KClcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignZGlzYWJsZWQnKS5maW5kKCcuYnRuLXByZWxvYWRlcicpLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG5vdHlEZWZhdWx0ICgpIHtcbiAgICAkLm5vdHkuZGVmYXVsdHMgPSB7XG4gICAgICBsYXlvdXQ6ICd0b3AnLFxuICAgICAgdGhlbWU6ICdyZWxheCcsXG4gICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgdGV4dDogJycsXG4gICAgICBkaXNtaXNzUXVldWU6IHRydWUsXG4gICAgICBmb3JjZTogZmFsc2UsXG4gICAgICBtYXhWaXNpYmxlOiA1LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwibm90eV9tZXNzYWdlXCI+PHNwYW4gY2xhc3M9XCJub3R5X3RleHRcIj48L3NwYW4+PGRpdiBjbGFzcz1cIm5vdHlfY2xvc2VcIj48L2Rpdj48L2Rpdj4nLFxuICAgICAgdGltZW91dDogNTAwMCxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBvcGVuOiAnYW5pbWF0ZWQgZmFkZUluRG93bicsXG4gICAgICAgIGNsb3NlOiAnYW5pbWF0ZWQgZmFkZU91dFVwJyxcbiAgICAgICAgZWFzaW5nOiAnc3dpbmcnLFxuICAgICAgICBzcGVlZDogNTAwXG4gICAgICB9LFxuICAgICAgY2xvc2VXaXRoOiBbJ2NsaWNrJ10sXG4gICAgICBtb2RhbDogZmFsc2UsXG4gICAgICBraWxsZXI6IGZhbHNlLFxuICAgICAgY2FsbGJhY2s6IHtcbiAgICAgICAgb25TaG93OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgYWZ0ZXJTaG93OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBvbkNsb3NlQ2xpY2s6IGZ1bmN0aW9uICgpIHt9XG4gICAgICB9LFxuICAgICAgYnV0dG9uczogZmFsc2VcbiAgICB9XG4gIH1cbiAgc2VyaWFsaXplRm9ybSAoKSB7XG4gICAgJC5mbi5zZXJpYWxpemVGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGRhdGEsIGxvb2t1cCwgcGFyc2UsIHNlbGVjdG9yXG4gICAgICBkYXRhID0gdm9pZCAwXG4gICAgICBsb29rdXAgPSB2b2lkIDBcbiAgICAgIHBhcnNlID0gdm9pZCAwXG4gICAgICBzZWxlY3RvciA9IHZvaWQgMFxuICAgICAgaWYgKHRoaXMubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGRhdGEgPSB7fVxuICAgICAgbG9va3VwID0gZGF0YVxuICAgICAgc2VsZWN0b3IgPSAnOmlucHV0W3R5cGUhPVwiY2hlY2tib3hcIl1bdHlwZSE9XCJyYWRpb1wiXSwgaW5wdXQ6Y2hlY2tlZCdcbiAgICAgIHBhcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsLCBjYXAsIGksIG5hbWVkXG4gICAgICAgICRlbCA9IHZvaWQgMFxuICAgICAgICBjYXAgPSB2b2lkIDBcbiAgICAgICAgaSA9IHZvaWQgMFxuICAgICAgICBuYW1lZCA9IHZvaWQgMFxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIG5hbWVkID0gdGhpcy5uYW1lLnJlcGxhY2UoL1xcWyhbXlxcXV0rKT9cXF0vZywgJywkMScpLnNwbGl0KCcsJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgICBjYXAgPSBuYW1lZC5sZW5ndGggLSAxXG4gICAgICAgICRlbCA9ICQodGhpcylcbiAgICAgICAgaWYgKG5hbWVkWzBdKSB7XG4gICAgICAgICAgaSA9IDBcbiAgICAgICAgICB3aGlsZSAoaSA8IGNhcCkge1xuICAgICAgICAgICAgbG9va3VwID0gbG9va3VwW25hbWVkW2ldXSA9IGxvb2t1cFtuYW1lZFtpXV0gfHwgKG5hbWVkW2kgKyAxXSA9PT0gJycgfHwgbmFtZWRbaSArIDFdID09PSAnMCcgPyBbXSA6IHt9KVxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsb29rdXAubGVuZ3RoICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGxvb2t1cC5wdXNoKCRlbC52YWwoKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9va3VwW25hbWVkW2NhcF1dID0gJGVsLnZhbCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGxvb2t1cCA9IGRhdGFcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXIoc2VsZWN0b3IpLmVhY2gocGFyc2UpXG4gICAgICB0aGlzLmZpbmQoc2VsZWN0b3IpLmVhY2gocGFyc2UpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cbiAgfVxuICBzZXR1cEFqYXggKCkge1xuICAgICQuYWpheFNldHVwKHtcbiAgICAgIHN0YXR1c0NvZGU6IHtcbiAgICAgICAgNDAzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnRm9yYmlkZGVuIENvbnRlbnQuJyxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIDQwNDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ1JvdXRlIG5vdCBmb3VuZC4nLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgNTAwOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnSW50ZXJuYWwgc2VydmVyIGVycm9yLicsXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyb3NzRG9tYWluOiBmYWxzZSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtQ1NSRi1Ub2tlbic6ICQoJ21ldGFbbmFtZT1cIl90XCJdJykuYXR0cignY29udGVudCcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBzZXR1cEZvcm0gKCkge1xuICAgIHZhciAkZm9ybXMgPSAkKCcuYWN0aW9uLWZvcm0nKVxuICAgIHZhciBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgdmFyIGFsbG93ZWRUeXBlcyA9IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ1BBVENIJywgJ0RFTEVURSddXG5cbiAgICAkZm9ybXMuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICRmb3JtID0gJCh0aGlzKVxuICAgICAgJGZvcm0ub24oJ2NsaWNrJywgJ1t0eXBlPXN1Ym1pdF0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICAgIGlmIChmb3JtUHJvY2Vzc2luZykge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnQSBmb3JtIHByb2Nlc3MgaXMgc3RpbGwgcnVubmluZy4nLFxuICAgICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaHR0cFR5cGUgPSAoJGZvcm0uYXR0cignaHR0cC10eXBlJykpLnRvVXBwZXJDYXNlKClcbiAgICAgICAgaWYgKGFsbG93ZWRUeXBlcy5pbmRleE9mKGh0dHBUeXBlKSA9PT0gLTEpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0hUVFAgdHlwZSBub3QgYWxsb3dlZC4nLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghJGZvcm0ucGFyc2xleSgpLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0ludmFsaWQgdmFsdWUgb24gZm9ybS4gQ2hlY2sgYWdhaW4uJyxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlybSgnU3VibWl0PycpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IHRydWVcbiAgICAgICAgICB2YXIgJGlucHV0ID0gJGZvcm0uZmluZCgnOmlucHV0JylcbiAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCB0cnVlKVxuICAgICAgICAgICR0aGlzLmRpc2FibGUodHJ1ZSlcblxuICAgICAgICAgIGxldCBmb3JtRGF0YSA9IHt9XG4gICAgICAgICAgZm9ybURhdGEuZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZUZvcm0oKVxuXG4gICAgICAgICAgJC5lYWNoKCRmb3JtLmRhdGEoKSwgZnVuY3Rpb24gKGksIHYpIHtcbiAgICAgICAgICAgIGlmIChpID09PSAnbmF0aW9uYWxpdHknKSB7XG4gICAgICAgICAgICAgIGlmICgkKCcjaW5wdXROYXRpb25hbGl0eScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9ICQoJyNpbnB1dE5hdGlvbmFsaXR5JykuZGF0YSgnZGRzbGljaycpXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuZGF0YS5uYXRpb25hbGl0eSA9IHZhbHVlLnNlbGVjdGVkRGF0YS52YWx1ZVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCQoJyNpbnB1dEJlbmVmaWNpYXJ5TmF0aW9uYWxpdHknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAkKCcjaW5wdXRCZW5lZmljaWFyeU5hdGlvbmFsaXR5JykuZGF0YSgnZGRzbGljaycpXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuZGF0YS5iZW5lZmljaWFyeV9uYXRpb25hbGl0eSA9IHZhbHVlLnNlbGVjdGVkRGF0YS52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBodHRwVHlwZSxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgdXJsOiAkZm9ybS5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIGZhbHNlKVxuICAgICAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuXG4gICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdzdWNjZXNzJyAmJiBlLnJlZGlyZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShlLnJlZGlyZWN0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIGZhbHNlKVxuICAgICAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERhdGFUYWJsZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB2YXIgJHRhYmxlcyA9ICQoJy50YWJsZS1ncmlkJylcbiAgICB2YXIgJG1vZGFsID0gJCgnI3Nob3dNb2RhbCcpXG4gICAgdmFyICRtb2RhbExvYWRlciA9ICRtb2RhbC5maW5kKCcubG9hZGluZycpXG4gICAgdmFyICRtb2RhbEVycm9yID0gJG1vZGFsLmZpbmQoJy5lcnJvcicpXG4gICAgdmFyICRtb2RhbENvbnRlbnQgPSAkbW9kYWwuZmluZCgnI21vZGFsQ29udGVudCcpXG4gICAgdmFyICRsb2FkZXIgPSAkKCcjcGFnZUxvYWRlcicpXG5cbiAgICAkdGFibGVzLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGFibGUgPSAkKHRoaXMpXG4gICAgICB2YXIgY29sdW1ucyA9IFtdXG5cbiAgICAgICR0YWJsZS5maW5kKCd0aCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgJHRoZWFkID0gJCh0aGlzKVxuICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSB7fVxuICAgICAgICBjb2x1bW5WYWx1ZVsnZGF0YSddID0gJHRoZWFkLmRhdGEoJ2lkJylcblxuICAgICAgICAkLmVhY2goJHRoZWFkLmRhdGEoKSwgZnVuY3Rpb24gKGksIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGkgIT09ICdpZCcpIHtcbiAgICAgICAgICAgIGNvbHVtblZhbHVlW2ldID0gdmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW5WYWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgICR0YWJsZS5kYXRhVGFibGUoe1xuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgICAgICBsYW5ndWFnZTogd2luZG93Ll9kYXRhVGFibGVzTGFuZyxcbiAgICAgICAgc2VhcmNoRGVsYXk6IDEwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIGFqYXg6ICR0YWJsZS5kYXRhKCd1cmwnKSxcbiAgICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgICAgb3JkZXI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgICdkZXNjJ1xuICAgICAgICBdXG4gICAgICB9KVxuXG4gICAgICAkdGFibGUub24oJ2NsaWNrJywgJy5idG4tc2hvdycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgICRtb2RhbExvYWRlci5zaG93KClcbiAgICAgICAgJG1vZGFsRXJyb3IuaGlkZSgpXG4gICAgICAgICRtb2RhbENvbnRlbnQuZW1wdHkoKVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXG4gICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJG1vZGFsTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgJG1vZGFsQ29udGVudC5odG1sKGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAkbW9kYWxMb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAkbW9kYWxFcnJvci5zaG93KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgJHRhYmxlLm9uKCdjbGljaycsICcuYnRuLWRlbGV0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAoY29uZmlybSgnUmVtb3ZlPycpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogZS50eXBlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICR0aGlzLnBhcmVudHMoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG5pbXBvcnQgeyBDb3JlIH0gZnJvbSAnLi9jb3JlJ1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICcuL2RhdGF0YWJsZSdcbmltcG9ydCB7IEFubm91bmNlbWVudCB9IGZyb20gJy4vYW5ub3VuY2VtZW50J1xuaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gJy4vcGFja2FnZSdcbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3RlcidcbmltcG9ydCB7IFNoYXJlcyB9IGZyb20gJy4vc2hhcmVzJ1xuaW1wb3J0IHsgV2l0aGRyYXcgfSBmcm9tICcuL3dpdGhkcmF3J1xuXG5uZXcgQ29yZSgpXG5uZXcgV2lkZ2V0KClcbm5ldyBEYXRhVGFibGUoKVxubmV3IEFubm91bmNlbWVudCgpXG5uZXcgUGFja2FnZSgpXG5uZXcgUmVnaXN0ZXIoKVxubmV3IFNoYXJlcygpXG5uZXcgV2l0aGRyYXcoKVxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAkKCcjbG9hZGluZycpLmZhZGVPdXQoNDAwLCAnbGluZWFyJylcbn0sIDMwMClcblxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgYm9keVNpemVyKClcbn0pXG5cbmJvZHlTaXplcigpXG5wYWdlVHJhbnNpdGlvbnMoKVxuJC5zbGlkZWJhcnMoKVxuXG4kKFwiZGl2W2lkPScjZml4ZWQtc2lkZWJhciddXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwic3dpdGNoLW9uXCIpKSB7XG5cbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpXG4gICAgdmFyIGhlYWRlckhlaWdodCA9ICQoJyNwYWdlLWhlYWRlcicpLmhlaWdodCgpXG4gICAgdmFyIGNvbnRlbnRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBoZWFkZXJIZWlnaHRcblxuICAgICQoJyNwYWdlLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnLnNjcm9sbC1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuXG4gICAgJCgnLnNjcm9sbC1zaWRlYmFyJykuc2xpbXNjcm9sbCh7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGNvbG9yOiAncmdiYSgxNTUsIDE2NCwgMTY5LCAwLjY4KScsXG4gICAgICBzaXplOiAnNnB4J1xuICAgIH0pXG5cbiAgICB2YXIgaGVhZGVyQmcgPSAkKCcjcGFnZS1oZWFkZXInKS5hdHRyKCdjbGFzcycpXG4gICAgJCgnI2hlYWRlci1sb2dvJykuYWRkQ2xhc3MoaGVhZGVyQmcpXG5cbiAgfSBlbHNlIHtcblxuICAgIHZhciB3aW5kb3dIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKVxuICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKCcjcGFnZS1oZWFkZXInKS5oZWlnaHQoKVxuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gaGVhZGVySGVpZ2h0XG5cbiAgICAkKCcjcGFnZS1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJy5zY3JvbGwtc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcblxuICAgICQoXCIuc2Nyb2xsLXNpZGViYXJcIikuc2xpbVNjcm9sbCh7XG4gICAgICBkZXN0cm95OiB0cnVlXG4gICAgfSlcblxuICAgICQoJyNoZWFkZXItbG9nbycpLnJlbW92ZUNsYXNzKCdiZy1ncmFkaWVudC05JylcblxuICB9XG59KVxuXG4kKCcuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLmZpcnN0KCkuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZURvd24oKVxufSlcblxuJCgnLmRyb3Bkb3duJykub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5maXJzdCgpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVVcCgpXG59KVxuXG4kKGZ1bmN0aW9uKCkge1xuICAkKCcjc2lkZWJhci1tZW51Jykuc3VwZXJjbGljayh7XG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICBoZWlnaHQ6ICdzaG93J1xuICAgIH0sXG4gICAgYW5pbWF0aW9uT3V0OiB7XG4gICAgICBoZWlnaHQ6ICdoaWRlJ1xuICAgIH1cbiAgfSlcbiAgdmFyIHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVxuICBwYXRoID0gcGF0aFtwYXRoLmxlbmd0aC0xXVxuICBpZiAocGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgJChcIiNzaWRlYmFyLW1lbnVcIikuZmluZChcImFbaHJlZiQ9J1wiICsgcGF0aCArIFwiJ11cIikuYWRkQ2xhc3MoJ3NmQWN0aXZlJylcbiAgICAkKFwiI3NpZGViYXItbWVudVwiKS5maW5kKFwiYVtocmVmJD0nXCIgKyBwYXRoICsgXCInXVwiKS5wYXJlbnRzKCkuZXEoMykuc3VwZXJjbGljaygnc2hvdycpXG4gIH1cblxuICAkKCcjY2xvc2Utc2lkZWJhcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnY2xvc2VkLXNpZGViYXInKVxuICAgICQoJy5nbHlwaC1pY29uJywgdGhpcykudG9nZ2xlQ2xhc3MoJ2ljb24tYW5nbGUtcmlnaHQnKS50b2dnbGVDbGFzcygnaWNvbi1hbmdsZS1sZWZ0JylcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGJvZHlTaXplcigpIHtcbiAgdmFyIHdpbmRvd0hlaWdodCwgaGVhZGVySGVpZ2h0LCBjb250ZW50SGVpZ2h0XG5cbiAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnZml4ZWQtc2lkZWJhcicpKSB7XG5cbiAgICB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KClcbiAgICBoZWFkZXJIZWlnaHQgPSAkKCcjcGFnZS1oZWFkZXInKS5oZWlnaHQoKVxuICAgIGNvbnRlbnRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBoZWFkZXJIZWlnaHRcbiAgICAkKCcjcGFnZS1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJy5zY3JvbGwtc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcjcGFnZS1jb250ZW50JykuY3NzKCdtaW4taGVpZ2h0JywgY29udGVudEhlaWdodClcblxuICB9IGVsc2Uge1xuXG4gICAgd2luZG93SGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KClcbiAgICBoZWFkZXJIZWlnaHQgPSAkKCcjcGFnZS1oZWFkZXInKS5oZWlnaHQoKVxuICAgIGNvbnRlbnRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBoZWFkZXJIZWlnaHRcbiAgICAkKCcjcGFnZS1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJy5zY3JvbGwtc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcjcGFnZS1jb250ZW50JykuY3NzKCdtaW4taGVpZ2h0JywgY29udGVudEhlaWdodClcblxuICB9XG59XG5cbmZ1bmN0aW9uIHBhZ2VUcmFuc2l0aW9ucygpIHtcbiAgdmFyIHRyYW5zaXRpb25zID0gWycucHQtcGFnZS1tb3ZlRnJvbUxlZnQnLCAncHQtcGFnZS1tb3ZlRnJvbVJpZ2h0JywgJ3B0LXBhZ2UtbW92ZUZyb21Ub3AnLCAncHQtcGFnZS1tb3ZlRnJvbUJvdHRvbScsICdwdC1wYWdlLWZhZGUnLCAncHQtcGFnZS1tb3ZlRnJvbUxlZnRGYWRlJywgJ3B0LXBhZ2UtbW92ZUZyb21SaWdodEZhZGUnLCAncHQtcGFnZS1tb3ZlRnJvbVRvcEZhZGUnLCAncHQtcGFnZS1tb3ZlRnJvbUJvdHRvbUZhZGUnLCAncHQtcGFnZS1zY2FsZVVwJywgJ3B0LXBhZ2Utc2NhbGVVcENlbnRlcicsICdwdC1wYWdlLWZsaXBJbkxlZnQnLCAncHQtcGFnZS1mbGlwSW5SaWdodCcsICdwdC1wYWdlLWZsaXBJbkJvdHRvbScsICdwdC1wYWdlLWZsaXBJblRvcCcsICdwdC1wYWdlLXJvdGF0ZVB1bGxSaWdodCcsICdwdC1wYWdlLXJvdGF0ZVB1bGxMZWZ0JywgJ3B0LXBhZ2Utcm90YXRlUHVsbFRvcCcsICdwdC1wYWdlLXJvdGF0ZVB1bGxCb3R0b20nLCAncHQtcGFnZS1yb3RhdGVVbmZvbGRMZWZ0JywgJ3B0LXBhZ2Utcm90YXRlVW5mb2xkUmlnaHQnLCAncHQtcGFnZS1yb3RhdGVVbmZvbGRUb3AnLCAncHQtcGFnZS1yb3RhdGVVbmZvbGRCb3R0b20nXVxuICBmb3IgKHZhciBpIGluIHRyYW5zaXRpb25zKSB7XG4gICAgdmFyIHRyYW5zaXRpb25fbmFtZSA9IHRyYW5zaXRpb25zW2ldXG4gICAgaWYgKCQoJy5hZGQtdHJhbnNpdGlvbicpLmhhc0NsYXNzKHRyYW5zaXRpb25fbmFtZSkpIHtcbiAgICAgICQoJy5hZGQtdHJhbnNpdGlvbicpLmFkZENsYXNzKHRyYW5zaXRpb25fbmFtZSArICctaW5pdCBwYWdlLXRyYW5zaXRpb24nKVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLmFkZC10cmFuc2l0aW9uJykucmVtb3ZlQ2xhc3ModHJhbnNpdGlvbl9uYW1lICsgJyAnICsgdHJhbnNpdGlvbl9uYW1lICsgJy1pbml0IHBhZ2UtdHJhbnNpdGlvbicpXG4gICAgICB9LCAxMjAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG5cbmlmICgkKCcjZXhjaGFuZ2VSYXRlQ2hhcnQnKS5sZW5ndGgpIHtcbiAgJC53aGVuKFxuICAgICQuZ2V0U2NyaXB0KHdpbmRvdy5fcm9vdCArICcvbGliL2NoYXJ0LWNvcmUuanMnKSxcbiAgICAkLkRlZmVycmVkKGZ1bmN0aW9uIChkZWZlcnJlZCkge1xuICAgICAgJChkZWZlcnJlZC5yZXNvbHZlKVxuICAgIH0pXG4gICkuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4Y2hhZ2VSYXRlcyA9IHdpbmRvdy5fZXhjaGFuZ2VSYXRlXG4gICAgdmFyIGxhYmVscyA9IFtdXG4gICAgdmFyIGNoYXJ0RGF0YUJ1eSA9IFtdXG4gICAgdmFyIGNoYXJ0RGF0YVNlbGwgPSBbXVxuXG4gICAgJC5lYWNoKGV4Y2hhZ2VSYXRlcywgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgbGFiZWxzLnB1c2goaW5kZXggKyBcIiAoXCIgKyB2YWx1ZS5jdXJyZW5jeSArIFwiKVwiKVxuICAgICAgY2hhcnREYXRhQnV5LnB1c2godmFsdWUuYnV5KVxuICAgICAgY2hhcnREYXRhU2VsbC5wdXNoKHZhbHVlLnNlbGwpXG4gICAgfSlcbiAgICB2YXIgY2hhcnREYXRhID0ge1xuICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgbGFiZWw6ICdCdXknLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNTUsIDk5LCAxMzIpJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigyNTUsIDk5LCAxMzIpJyxcbiAgICAgICAgICBkYXRhOiBjaGFydERhdGFCdXksXG4gICAgICAgICAgZmlsbDogZmFsc2VcbiAgICAgICAgfSx7XG4gICAgICAgICAgbGFiZWw6ICdTZWxsJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTQsIDE2MiwgMjM1KScsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoNTQsIDE2MiwgMjM1KScsXG4gICAgICAgICAgZGF0YTogY2hhcnREYXRhU2VsbCxcbiAgICAgICAgICBmaWxsOiBmYWxzZVxuICAgICAgICB9XSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICB0aXRsZTp7XG4gICAgICAgICAgZGlzcGxheTp0cnVlLFxuICAgICAgICAgIHRleHQ6ICdFeGNoYW5nZSBSYXRlcydcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBtb2RlOiAnaW5kZXgnLFxuICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgbW9kZTogJ25lYXJlc3QnLFxuICAgICAgICAgIGludGVyc2VjdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnQ291bnRyeSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XSxcbiAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnQlVZL1NFTEwgVmFsdWUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgfSBcbiAgICB9XG4gICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhjaGFuZ2VSYXRlQ2hhcnRcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5oZWlnaHQgPSA1MDA7XG4gICAgbmV3IENoYXJ0KGN0eCwgY2hhcnREYXRhKVxuICB9KS5mYWlsKGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXG4gIH0pXG59XG4iLCJleHBvcnQgY2xhc3MgUGFja2FnZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoJCgnI3BhY2thZ2VMaXN0VGFibGUnKS5sZW5ndGgpIHtcbiAgICAgIHZhciAkdGFibGUgPSAkKCcjcGFja2FnZUxpc3RUYWJsZScpXG4gICAgICB2YXIgJGxvYWRlciA9ICQoJyNwYWdlTG9hZGVyJylcbiAgICAgIHZhciBwcm9jZXNzaW5nID0gZmFsc2VcblxuICAgICAgJHRhYmxlLm9uKCdjbGljaycsICdbdHlwZT1zdWJtaXRdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgICB2YXIgJHJvdyA9ICR0aGlzLmNsb3Nlc3QoJ3RyJylcblxuICAgICAgICBpZiAoY29uZmlybSgnU3VibWl0PycpKSB7XG4gICAgICAgICAgaWYgKCFwcm9jZXNzaW5nKSB7XG4gICAgICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAgICAgcHJvY2Vzc2luZyA9IHRydWVcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZGF0YTogJHJvdy5zZXJpYWxpemVGb3JtKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogZS50eXBlLFxuICAgICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgICB0ZXh0OiAnQSBwcm9jZXNzIGlzIHN0aWxsIG9uZ29pbmcuJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUmVnaXN0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCQoJyNyZWdpc3RlckZvcm0nKS5sZW5ndGgpIHtcbiAgICAgIGxldCAkZm9ybSA9ICQoJyNyZWdpc3RlckZvcm0nKVxuICAgICAgdmFyICRzaG93TWVtYmVyQnRuID0gJGZvcm0uZmluZCgnLmJ0bi1zaG93JylcbiAgICAgIHZhciAkbW9kYWwgPSAkKCcjc2hvd01vZGFsJylcbiAgICAgIHZhciAkbW9kYWxMb2FkZXIgPSAkbW9kYWwuZmluZCgnLmxvYWRpbmcnKVxuICAgICAgdmFyICRtb2RhbEVycm9yID0gJG1vZGFsLmZpbmQoJy5lcnJvcicpXG4gICAgICB2YXIgJG1vZGFsQ29udGVudCA9ICRtb2RhbC5maW5kKCcjbW9kYWxDb250ZW50JylcbiAgICAgICRzaG93TWVtYmVyQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgICRtb2RhbExvYWRlci5zaG93KClcbiAgICAgICAgJG1vZGFsRXJyb3IuaGlkZSgpXG4gICAgICAgICRtb2RhbENvbnRlbnQuZW1wdHkoKVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXG4gICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSArICc/dT0nICsgJHRoaXMucGFyZW50KCkuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5maW5kKCcuZm9ybS1jb250cm9sJykudmFsKCksXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICRtb2RhbExvYWRlci5oaWRlKClcbiAgICAgICAgICAgICRtb2RhbENvbnRlbnQuaHRtbChlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgJG1vZGFsTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgJG1vZGFsRXJyb3Iuc2hvdygpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hhcmVzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICgkKCcjc2hhcmVzTGlzdFRhYmxlJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxpc3QoKVxuICAgIH1cblxuICAgIGlmICgkKCcjcmVtb3ZlU2hhcmVzQnRuJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbW92ZVF1ZXVlKClcbiAgICB9XG5cbiAgICBpZiAoJCgnI3NwbGl0Rm9ybScpLmxlbmd0aCkge1xuICAgICAgdGhpcy5zcGxpdCgpXG4gICAgfVxuXG4gICAgaWYgKCQoJyNzaGFyZXNGcmVlemVMaXN0VGFibGUnKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZnJlZXplTGlzdCgpXG4gICAgfVxuXG4gICAgaWYgKCQoJyNzaGFyZXNCdXlMaXN0VGFibGUnKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYnV5TGlzdCgpXG4gICAgfVxuXG4gICAgaWYgKCQoJyNzaGFyZXNTZWxsTGlzdFRhYmxlJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNlbGxMaXN0KClcbiAgICB9XG5cbiAgICBpZiAoJCgnI3NoYXJlc0ZvbGxvd0xpc3RUYWJsZScpLmxlbmd0aCkge1xuICAgICAgdGhpcy5mb2xsb3dMaXN0KClcbiAgICB9XG4gIH1cbiAgbGlzdCAoKSB7XG4gICAgdmFyICR0YWJsZSA9ICQoJyNzaGFyZXNMaXN0VGFibGUnKVxuICAgIHZhciAkbG9hZGVyID0gJCgnI3BhZ2VMb2FkZXInKVxuICAgIHZhciBwcm9jZXNzaW5nID0gZmFsc2VcblxuICAgICR0YWJsZS5vbignY2xpY2snLCAnW3R5cGU9c3VibWl0XScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgJHJvdyA9ICR0aGlzLmNsb3Nlc3QoJ3RyJylcblxuICAgICAgaWYgKGNvbmZpcm0oJ1N1Ym1pdD8nKSkge1xuICAgICAgICBpZiAoIXByb2Nlc3NpbmcpIHtcbiAgICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAgIHByb2Nlc3NpbmcgPSB0cnVlXG5cbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZGF0YTogJHJvdy5zZXJpYWxpemVGb3JtKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgdHlwZTogZS50eXBlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgdGV4dDogJ0EgcHJvY2VzcyBpcyBzdGlsbCBvbmdvaW5nLidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZW1vdmVRdWV1ZSAoKSB7XG4gICAgdmFyICRidXR0b24gPSAkKCcjcmVtb3ZlU2hhcmVzQnRuJylcbiAgICAkYnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjb25maXJtKCdSZW1vdmU/IENhbm5vdCBiZSB1bmRvLicpKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgJHRoaXMuZGlzYWJsZSh0cnVlKVxuXG4gICAgICAgICQucG9zdCgkdGhpcy5kYXRhKCd1cmwnKSkuZG9uZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlLFxuICAgICAgICAgICAgdHlwZTogZS50eXBlXG4gICAgICAgICAgfSlcbiAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dCxcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICB9KVxuICAgICAgICAgICR0aGlzLmRpc2FibGUoZmFsc2UpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBzcGxpdCAoKSB7XG4gICAgdmFyIGN1cnJlbnRTaGFyZXMgPSBwYXJzZUZsb2F0KCQoJyNjdXJyZW50U2hhcmVzJykudGV4dCgpKVxuICAgIHZhciAkZm9ybSA9ICQoJyNzcGxpdEZvcm0nKVxuICAgIHZhciAkc3BsaXRUbyA9ICRmb3JtLmZpbmQoJ1tuYW1lPXNwbGl0X3RvXScpXG4gICAgdmFyICRzcGxpdEJ5ID0gJGZvcm0uZmluZCgnW25hbWU9c3BsaXRfYnldJylcblxuICAgICRzcGxpdFRvLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIHZhciBzcGxpdEJ5ID0gY3VycmVudFNoYXJlcyAvIHBhcnNlRmxvYXQoJHRoaXMudmFsKCkpXG4gICAgICAkc3BsaXRCeS52YWwoc3BsaXRCeS50b0ZpeGVkKDMpKVxuICAgIH0pXG4gIH1cbiAgZnJlZXplTGlzdCAoKSB7XG4gICAgdmFyICR0YWJsZSA9ICQoJyNzaGFyZXNGcmVlemVMaXN0VGFibGUnKVxuICAgIHZhciAkbG9hZGVyID0gJCgnI3BhZ2VMb2FkZXInKVxuICAgIHZhciBwcm9jZXNzaW5nID0gZmFsc2VcblxuICAgICR0YWJsZS5vbignY2xpY2snLCAnLmJ0bi11bmxvY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoY29uZmlybSgnVW5sb2NrPycpKSB7XG4gICAgICAgIGlmICghcHJvY2Vzc2luZykge1xuICAgICAgICAgICRsb2FkZXIuc2hvdygpXG4gICAgICAgICAgcHJvY2Vzc2luZyA9IHRydWVcblxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgIHRleHQ6ICdBIHByb2Nlc3MgaXMgc3RpbGwgb25nb2luZy4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAkdGFibGUub24oJ2NsaWNrJywgJy5idG4tZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgJHJvdyA9ICR0aGlzLmNsb3Nlc3QoJ3RyJylcbiAgICAgIGlmIChjb25maXJtKCdVcGRhdGU/JykpIHtcbiAgICAgICAgaWYgKCFwcm9jZXNzaW5nKSB7XG4gICAgICAgICAgJGxvYWRlci5zaG93KClcbiAgICAgICAgICBwcm9jZXNzaW5nID0gdHJ1ZVxuXG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJyksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGRhdGE6ICRyb3cuc2VyaWFsaXplRm9ybSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgIHRleHQ6ICdBIHByb2Nlc3MgaXMgc3RpbGwgb25nb2luZy4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgYnV5TGlzdCAoKSB7XG4gICAgdmFyICR0YWJsZSA9ICQoJyNzaGFyZXNCdXlMaXN0VGFibGUnKVxuICAgIHZhciAkbG9hZGVyID0gJCgnI3BhZ2VMb2FkZXInKVxuICAgIHZhciBwcm9jZXNzaW5nID0gZmFsc2VcblxuICAgICR0YWJsZS5vbignY2xpY2snLCAnLmJ0bi1lZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIHZhciAkcm93ID0gJHRoaXMuY2xvc2VzdCgndHInKVxuICAgICAgaWYgKGNvbmZpcm0oJ1VwZGF0ZT8nKSkge1xuICAgICAgICBpZiAoIXByb2Nlc3NpbmcpIHtcbiAgICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAgIHByb2Nlc3NpbmcgPSB0cnVlXG5cbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZGF0YTogJHJvdy5zZXJpYWxpemVGb3JtKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICAgICAgdHlwZTogZS50eXBlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgdGV4dDogJ0EgcHJvY2VzcyBpcyBzdGlsbCBvbmdvaW5nLidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBzZWxsTGlzdCAoKSB7XG4gICAgdmFyICR0YWJsZSA9ICQoJyNzaGFyZXNTZWxsTGlzdFRhYmxlJylcbiAgICB2YXIgJGxvYWRlciA9ICQoJyNwYWdlTG9hZGVyJylcbiAgICB2YXIgcHJvY2Vzc2luZyA9IGZhbHNlXG5cbiAgICAkdGFibGUub24oJ2NsaWNrJywgJy5idG4tZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgJHJvdyA9ICR0aGlzLmNsb3Nlc3QoJ3RyJylcbiAgICAgIGlmIChjb25maXJtKCdVcGRhdGU/JykpIHtcbiAgICAgICAgaWYgKCFwcm9jZXNzaW5nKSB7XG4gICAgICAgICAgJGxvYWRlci5zaG93KClcbiAgICAgICAgICBwcm9jZXNzaW5nID0gdHJ1ZVxuXG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJyksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGRhdGE6ICRyb3cuc2VyaWFsaXplRm9ybSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgIHRleHQ6ICdBIHByb2Nlc3MgaXMgc3RpbGwgb25nb2luZy4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZm9sbG93TGlzdCAoKSB7XG4gICAgdmFyICR0YWJsZSA9ICQoJyNzaGFyZXNGb2xsb3dMaXN0VGFibGUnKVxuICAgIHZhciAkbG9hZGVyID0gJCgnI3BhZ2VMb2FkZXInKVxuICAgIHZhciBwcm9jZXNzaW5nID0gZmFsc2VcblxuICAgICR0YWJsZS5vbignY2xpY2snLCAnLmJ0bi11bmxvY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoY29uZmlybSgnVW5sb2NrPycpKSB7XG4gICAgICAgIGlmICghcHJvY2Vzc2luZykge1xuICAgICAgICAgICRsb2FkZXIuc2hvdygpXG4gICAgICAgICAgcHJvY2Vzc2luZyA9IHRydWVcblxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBub3R5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgIHRleHQ6ICdBIHByb2Nlc3MgaXMgc3RpbGwgb25nb2luZy4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBXaWRnZXQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJCgnYVtocmVmPVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSlcbiAgICBcbiAgICAkKFwiLnRvZG8tYm94IGxpIGlucHV0XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygndG9kby1kb25lJylcbiAgICB9KVxuICAgIFxuICAgIHZhciBvdmVyYWxsV2lkdGggPSAwXG4gICAgJCgnLnRpbWVsaW5lLXNjcm9sbCAudGwtcm93JykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbSkge1xuICAgICAgdmFyICRlbGVtID0gJChlbGVtKVxuICAgICAgb3ZlcmFsbFdpZHRoICs9ICRlbGVtLm91dGVyV2lkdGgoKSArIHBhcnNlSW50KCRlbGVtLmNzcygnbWFyZ2luLWxlZnQnKSwgMTApICsgcGFyc2VJbnQoJGVsZW0uY3NzKCdtYXJnaW4tcmlnaHQnKSwgMTApXG4gICAgfSlcbiAgICAkKCcudGltZWxpbmUtaG9yaXpvbnRhbCcsIHRoaXMpLndpZHRoKG92ZXJhbGxXaWR0aClcblxuICAgICQoJy5pbnB1dC1zd2l0Y2gtYWx0Jykuc2ltcGxlQ2hlY2tib3goKVxuXG4gICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLmN1c3RvbS1jaGVja2JveCcpLnVuaWZvcm0oKVxuICAgICQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXS5jdXN0b20tcmFkaW8nKS51bmlmb3JtKClcbiAgICAkKCcuY3VzdG9tLXNlbGVjdCcpLnVuaWZvcm0oKVxuXG4gICAgJCgnLnNlbGVjdG9yJykuYXBwZW5kKCc8aSBjbGFzcz1cImdseXBoLWljb24gaWNvbi1jYXJldC1kb3duXCI+PC9pPicpXG5cbiAgICAkKCcuY2hlY2tlciBzcGFuJykuYXBwZW5kKCc8aSBjbGFzcz1cImdseXBoLWljb24gaWNvbi1jaGVja1wiPjwvaT4nKVxuICAgICQoJy5yYWRpbyBzcGFuJykuYXBwZW5kKCc8aSBjbGFzcz1cImdseXBoLWljb24gaWNvbi1jaXJjbGVcIj48L2k+JylcbiAgICBcbiAgICAkKCcuc2Nyb2xsYWJsZS1zbGltJykuc2xpbVNjcm9sbCh7XG4gICAgICBjb2xvcjogJyM4ZGEwYWEnLFxuICAgICAgc2l6ZTogJzEwcHgnLFxuICAgICAgYWx3YXlzVmlzaWJsZTogdHJ1ZVxuICAgIH0pXG4gICAgXG4gICAgJCgnLnNjcm9sbGFibGUtc2xpbS1zaWRlYmFyJykuc2xpbVNjcm9sbCh7XG4gICAgICBjb2xvcjogJyM4ZGEwYWEnLFxuICAgICAgc2l6ZTogJzEwcHgnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBhbHdheXNWaXNpYmxlOiB0cnVlXG4gICAgfSlcbiAgICBcbiAgICAkKCcuc2Nyb2xsYWJsZS1zbGltLWJveCcpLnNsaW1TY3JvbGwoe1xuICAgICAgY29sb3I6ICcjOGRhMGFhJyxcbiAgICAgIHNpemU6ICc2cHgnLFxuICAgICAgYWx3YXlzVmlzaWJsZTogZmFsc2VcbiAgICB9KVxuXG4gICAgJCgnLmxvYWRpbmctYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYnRuID0gJCh0aGlzKVxuICAgICAgYnRuLmJ1dHRvbignbG9hZGluZycpXG4gICAgfSlcblxuICAgICQoJy50b29sdGlwLWJ1dHRvbicpLnRvb2x0aXAoe1xuICAgICAgY29udGFpbmVyOiAnYm9keSdcbiAgICB9KVxuICAgIFxuICAgICQoJy5hbGVydC1jbG9zZS1idG4nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVPdXREb3duJylcbiAgICB9KVxuICAgIFxuICAgICQoJy5wb3BvdmVyLWJ1dHRvbicpLnBvcG92ZXIoe1xuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICBodG1sOiB0cnVlLFxuICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgY29udGVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkYXRhSUQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKVxuICAgICAgICByZXR1cm4gJChkYXRhSUQpLmh0bWwoKVxuICAgICAgfVxuICAgIH0pLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9KVxuXG4gICAgJCgnLnBvcG92ZXItYnV0dG9uLWRlZmF1bHQnKS5wb3BvdmVyKHtcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZVxuICAgIH0pLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9KVxuXG4gICAgJCgnLmRhdGVwaWNrZXInKS5ic2RhdGVwaWNrZXIoe1xuICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCdcbiAgICB9KVxuICAgICQoJy5pbnB1dC1zd2l0Y2gnKS5ib290c3RyYXBTd2l0Y2goKVxuXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxzY3JlZW4tYnRuJykpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsc2NyZWVuLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2NyZWVuZnVsbC5lbmFibGVkKSB7XG4gICAgICAgICAgc2NyZWVuZnVsbC5yZXF1ZXN0KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgV2l0aGRyYXcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCQoJyN3aXRoZHJhd0xpc3RUYWJsZScpLmxlbmd0aCkge1xuICAgICAgdGhpcy5saXN0KClcbiAgICB9XG4gIH1cbiAgbGlzdCAoKSB7XG4gICAgdmFyICR0YWJsZSA9ICQoJyN3aXRoZHJhd0xpc3RUYWJsZScpXG4gICAgdmFyICRsb2FkZXIgPSAkKCcjcGFnZUxvYWRlcicpXG5cbiAgICAkdGFibGUub24oJ2NsaWNrJywgJy5idG4tY29uZmlybScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRoaXMgd2l0aGRyYXc/JykpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHN0YXR1czogJ2RvbmUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgdHlwZTogZS50eXBlLFxuICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIpIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAkbG9hZGVyLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgJHRhYmxlLm9uKCdjbGljaycsICcuYnRuLXJlamVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIGlmIChjb25maXJtKCdSZWplY3QgdGhpcyB3aXRoZHJhdz8nKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICRsb2FkZXIuc2hvdygpXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJyksXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgc3RhdHVzOiAncmVqZWN0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyKSB7XG4gICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
