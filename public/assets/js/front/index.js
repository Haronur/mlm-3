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
},{"./_descriptors":"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js","./_export":"/home/asus/web/web4/node_modules/core-js/library/modules/_export.js","./_object-dp":"/home/asus/web/web4/node_modules/core-js/library/modules/_object-dp.js"}],"/home/asus/web/web4/resources/assets/js/front/core.js":[function(require,module,exports){
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
              $(this).find('.icon-spin').show();
              $(this).attr('disabled', 'disabled').find('.btn-preloader').show();
            } else {
              $(this).find('span').show();
              $(this).find('.icon-spin').hide();
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

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js"}],"/home/asus/web/web4/resources/assets/js/front/datatable.js":[function(require,module,exports){
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

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/home/asus/web/web4/resources/assets/js/front/index.js":[function(require,module,exports){
'use strict';

var _core = require('./core');

var _widget = require('./widget');

var _datatable = require('./datatable');

var _register = require('./register');

var _shares = require('./shares');

var _network = require('./network');

/* eslint-disable no-new */

new _core.Core();
new _widget.Widget();
new _datatable.DataTable();
new _register.Register();
new _shares.Shares();
new _network.Network();

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

if ($('#shareNextPie').length) {
  $.when($.getScript(window._root + '/lib/piegauge.js'), $.Deferred(function (deferred) {
    $(deferred.resolve);
  })).done(function () {
    $('#shareNextPie').easyPieChart({
      barColor: 'rgba(255,255,255,255.4)',
      trackColor: 'rgba(255,255,255,0.1)',
      scaleColor: 'transparent',
      lineCap: 'round',
      rotate: -90,
      lineWidth: 4,
      size: 100,
      animate: 1000
    });
  });
}

},{"./core":"/home/asus/web/web4/resources/assets/js/front/core.js","./datatable":"/home/asus/web/web4/resources/assets/js/front/datatable.js","./network":"/home/asus/web/web4/resources/assets/js/front/network.js","./register":"/home/asus/web/web4/resources/assets/js/front/register.js","./shares":"/home/asus/web/web4/resources/assets/js/front/shares.js","./widget":"/home/asus/web/web4/resources/assets/js/front/widget.js"}],"/home/asus/web/web4/resources/assets/js/front/network.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Network = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Network = exports.Network = function () {
  function Network() {
    (0, _classCallCheck3.default)(this, Network);

    if ($('#unilevelNetwork').length) {
      this.unilevel();
    }

    if ($('#unilevelForm').length) {
      var $form = $('#unilevelForm');
      var searchUrl = $form.data('url');
      var $loader = $('#pageLoader');
      $form.on('click', '[type=submit]', function () {
        if (confirm('Search?')) {
          var $this = $(this);
          var $input = $form.find(':input');
          $input.prop('readonly', true);
          $this.disable(true);

          $.ajax({
            type: 'post',
            url: searchUrl,
            data: {
              data: $form.serializeForm()
            },
            success: function success(e) {
              $input.prop('readonly', false);
              $this.disable(false);
              if (e.type === 'error') {
                noty({
                  text: e.message,
                  type: e.type
                });
              } else {
                window.location.replace(e.redirect);
              }
            }
          });
        }
      });
    }
  }

  (0, _createClass3.default)(Network, [{
    key: 'unilevel',
    value: function unilevel() {
      var $network = $('#unilevelNetwork');
      var linkElem = document.createElement('link');
      document.getElementsByTagName('head')[0].appendChild(linkElem);
      linkElem.rel = 'stylesheet';
      linkElem.type = 'text/css';
      linkElem.href = window._root + '/lib/vis.css';

      $.when($.getScript(window._root + '/lib/vis.js'), $.Deferred(function (deferred) {
        $(deferred.resolve);
      })).done(function () {
        var container = document.getElementById('unilevelNetwork');
        var options = {
          height: '600px',
          nodes: {
            shape: 'dot',
            size: 36,
            font: {
              size: 24,
              color: '#333'
            },
            borderWidth: 2
          },
          edges: {
            width: 2
          },
          layout: {
            hierarchical: {
              direction: 'Up-Down'
            }
          },
          groups: {
            icons: {
              shape: 'icon',
              icon: {
                face: 'FontAwesome',
                code: '\uF007',
                size: 75,
                color: 'orange'
              }
            },
            source: {
              color: {
                border: 'white'
              }
            }
          }
        };
        $.post($network.data('url')).done(function (data) {
          console.log(data);
          new vis.Network(container, data, options);
        });
      });
    }
  }]);
  return Network;
}();

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js"}],"/home/asus/web/web4/resources/assets/js/front/register.js":[function(require,module,exports){
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
    var $regText = $form.find('#registerPointValue');
    var $promoText = $form.find('#promotionPointValue');

    var promoPercent = $('#inputPoint').find('option:selected').val();
    var regPercent = 100 - promoPercent;
    var $package = $form.find('[name=package_id] option:selected').data('value');
    $regText.text((regPercent / 100 * $package).toFixed(2));
    $promoText.text((promoPercent / 100 * $package).toFixed(2));

    $form.find('#inputPoint').on('change', function () {
      var promoPercent = $(this).find('option:selected').val();
      var regPercent = 100 - promoPercent;
      var $package = $form.find('[name=package_id] option:selected').data('value');
      $regText.text((regPercent / 100 * $package).toFixed(2));
      $promoText.text((promoPercent / 100 * $package).toFixed(2));
    });

    $form.find('[name=package_id]').on('change', function () {
      var promoPercent = $('#inputPoint').find('option:selected').val();
      var regPercent = 100 - promoPercent;
      var $package = $(this).find('option:selected').data('value');
      $regText.text((regPercent / 100 * $package).toFixed(2));
      $promoText.text((promoPercent / 100 * $package).toFixed(2));
    });

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

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/home/asus/web/web4/resources/assets/js/front/shares.js":[function(require,module,exports){
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

    if ($('#transferForm').length) {
      this.transfer();
    }
    if ($('#sharesSellForm').length) {
      var $sellForm = $('#sharesSellForm');
      $sellForm.find('[name=quantity]').on('input', function () {
        var $form = $(this).parents('form');
        var total = $form.find('[name=price] option:selected').val() * $(this).val();
        $form.find('.total-text').text(total.toFixed(3));
        var netTotal = total - 0.1 * total;
        $form.find('.net-total-text').text(netTotal.toFixed(3));
      });

      $sellForm.find('[name=price]').on('change', function () {
        var $form = $(this).parents('form');
        var total = $(this).find(':selected').val() * $('[name=quantity]').val();
        $form.find('.total-text').text(total.toFixed(3));
        var netTotal = total - 0.1 * total;
        $form.find('.net-total-text').text(netTotal.toFixed(3));
      });
    }

    if ($('#sharesBuyForm').length) {
      var $buyForm = $('#sharesBuyForm');
      $sellForm.find('[name=quantity]').on('input', function () {
        var $form = $(this).parents('form');
        var total = $form.find('[name=price] option:selected').val() * $(this).val();
        $form.find('.total-text').text(total.toFixed(3));
      });

      $buyForm.find('[name=price]').on('change', function () {
        var $form = $(this).parents('form');
        var total = $(this).find(':selected').val() * $('[name=quantity]').val();
        $form.find('.total-text').text(total.toFixed(3));
      });
    }
  }

  (0, _createClass3.default)(Shares, [{
    key: 'transfer',
    value: function transfer() {
      var $form = $('#transferForm');
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
  }]);
  return Shares;
}();

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js"}],"/home/asus/web/web4/resources/assets/js/front/widget.js":[function(require,module,exports){
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

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}]},{},["/home/asus/web/web4/resources/assets/js/front/index.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9mcm9udC9jb3JlLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9mcm9udC9kYXRhdGFibGUuanMiLCJyZXNvdXJjZXMvYXNzZXRzL2pzL2Zyb250L2luZGV4LmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9mcm9udC9uZXR3b3JrLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9mcm9udC9yZWdpc3Rlci5qcyIsInJlc291cmNlcy9hc3NldHMvanMvZnJvbnQvc2hhcmVzLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9mcm9udC93aWRnZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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UUE7O0dBQUEsQUFBRSxlQUFGLEFBQWlCO1VBQWpCLEFBQThCLEFBQ3JCLEFBRVQ7QUFIOEIsQUFDN0I7R0FFRCxBQUFFLGlCQUFGLEFBQW1CLEFBRW5COztLQUFHLFNBQUEsQUFBUyxlQUFaLEFBQUcsQUFBd0IsbUJBQW1CLEFBQzdDO1dBQUEsQUFBUyxlQUFULEFBQXdCLGtCQUF4QixBQUEwQyxpQkFBMUMsQUFBMkQsU0FBUyxZQUFZLEFBQy9FO09BQUksV0FBSixBQUFlLFNBQVMsQUFDdkI7ZUFBQSxBQUFXLEFBQ1g7QUFDRDtBQUpELEFBS0E7QUFFRDs7S0FBSSxFQUFBLEFBQUUsWUFBTixBQUFrQixRQUFRLEFBQ3pCO0lBQUEsQUFBRSxZQUFGLEFBQWMsS0FBSyxZQUFXLEFBQzdCO0tBQUEsQUFBRSxNQUFGLEFBQVE7V0FBUSxBQUNSLEFBQ1A7MEJBQXNCLEVBQUEsQUFBRSxNQUFGLEFBQVEsS0FGL0IsQUFBZ0IsQUFFTyxBQUFhLEFBRXBDO0FBSmdCLEFBQ2Y7QUFGRixBQU1BO0FBQ0Q7QSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCJleHBvcnQgY2xhc3MgQ29yZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuICAgIHRoaXMubm90eURlZmF1bHQoKVxuICAgIHRoaXMuc2VyaWFsaXplRm9ybSgpXG4gICAgdGhpcy5zZXR1cEFqYXgoKVxuICAgIHRoaXMuc2V0dXBGb3JtKClcbiAgfVxuICBkaXNhYmxlICgpIHtcbiAgICAkLmZuLmV4dGVuZCh7XG4gICAgICBkaXNhYmxlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS5oaWRlKClcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLmljb24tc3BpbicpLnNob3coKVxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpLmZpbmQoJy5idG4tcHJlbG9hZGVyJykuc2hvdygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnc3BhbicpLnNob3coKVxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuaWNvbi1zcGluJykuaGlkZSgpXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJykuZmluZCgnLmJ0bi1wcmVsb2FkZXInKS5oaWRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBub3R5RGVmYXVsdCAoKSB7XG4gICAgJC5ub3R5LmRlZmF1bHRzID0ge1xuICAgICAgbGF5b3V0OiAndG9wJyxcbiAgICAgIHRoZW1lOiAncmVsYXgnLFxuICAgICAgdHlwZTogJ2FsZXJ0JyxcbiAgICAgIHRleHQ6ICcnLFxuICAgICAgZGlzbWlzc1F1ZXVlOiB0cnVlLFxuICAgICAgZm9yY2U6IGZhbHNlLFxuICAgICAgbWF4VmlzaWJsZTogNSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cIm5vdHlfbWVzc2FnZVwiPjxzcGFuIGNsYXNzPVwibm90eV90ZXh0XCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJub3R5X2Nsb3NlXCI+PC9kaXY+PC9kaXY+JyxcbiAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgb3BlbjogJ2FuaW1hdGVkIGZhZGVJbkRvd24nLFxuICAgICAgICBjbG9zZTogJ2FuaW1hdGVkIGZhZGVPdXRVcCcsXG4gICAgICAgIGVhc2luZzogJ3N3aW5nJyxcbiAgICAgICAgc3BlZWQ6IDUwMFxuICAgICAgfSxcbiAgICAgIGNsb3NlV2l0aDogWydjbGljayddLFxuICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAga2lsbGVyOiBmYWxzZSxcbiAgICAgIGNhbGxiYWNrOiB7XG4gICAgICAgIG9uU2hvdzogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIGFmdGVyU2hvdzogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBhZnRlckNsb3NlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgb25DbG9zZUNsaWNrOiBmdW5jdGlvbiAoKSB7fVxuICAgICAgfSxcbiAgICAgIGJ1dHRvbnM6IGZhbHNlXG4gICAgfVxuICB9XG4gIHNlcmlhbGl6ZUZvcm0gKCkge1xuICAgICQuZm4uc2VyaWFsaXplRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkYXRhLCBsb29rdXAsIHBhcnNlLCBzZWxlY3RvclxuICAgICAgZGF0YSA9IHZvaWQgMFxuICAgICAgbG9va3VwID0gdm9pZCAwXG4gICAgICBwYXJzZSA9IHZvaWQgMFxuICAgICAgc2VsZWN0b3IgPSB2b2lkIDBcbiAgICAgIGlmICh0aGlzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBkYXRhID0ge31cbiAgICAgIGxvb2t1cCA9IGRhdGFcbiAgICAgIHNlbGVjdG9yID0gJzppbnB1dFt0eXBlIT1cImNoZWNrYm94XCJdW3R5cGUhPVwicmFkaW9cIl0sIGlucHV0OmNoZWNrZWQnXG4gICAgICBwYXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRlbCwgY2FwLCBpLCBuYW1lZFxuICAgICAgICAkZWwgPSB2b2lkIDBcbiAgICAgICAgY2FwID0gdm9pZCAwXG4gICAgICAgIGkgPSB2b2lkIDBcbiAgICAgICAgbmFtZWQgPSB2b2lkIDBcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBuYW1lZCA9IHRoaXMubmFtZS5yZXBsYWNlKC9cXFsoW15cXF1dKyk/XFxdL2csICcsJDEnKS5zcGxpdCgnLCcpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgICAgY2FwID0gbmFtZWQubGVuZ3RoIC0gMVxuICAgICAgICAkZWwgPSAkKHRoaXMpXG4gICAgICAgIGlmIChuYW1lZFswXSkge1xuICAgICAgICAgIGkgPSAwXG4gICAgICAgICAgd2hpbGUgKGkgPCBjYXApIHtcbiAgICAgICAgICAgIGxvb2t1cCA9IGxvb2t1cFtuYW1lZFtpXV0gPSBsb29rdXBbbmFtZWRbaV1dIHx8IChuYW1lZFtpICsgMV0gPT09ICcnIHx8IG5hbWVkW2kgKyAxXSA9PT0gJzAnID8gW10gOiB7fSlcbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobG9va3VwLmxlbmd0aCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBsb29rdXAucHVzaCgkZWwudmFsKCkpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvb2t1cFtuYW1lZFtjYXBdXSA9ICRlbC52YWwoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBsb29rdXAgPSBkYXRhXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVyKHNlbGVjdG9yKS5lYWNoKHBhcnNlKVxuICAgICAgdGhpcy5maW5kKHNlbGVjdG9yKS5lYWNoKHBhcnNlKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gIH1cbiAgc2V0dXBBamF4ICgpIHtcbiAgICAkLmFqYXhTZXR1cCh7XG4gICAgICBzdGF0dXNDb2RlOiB7XG4gICAgICAgIDQwMzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0ZvcmJpZGRlbiBDb250ZW50LicsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICA0MDQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIHRleHQ6ICdSb3V0ZSBub3QgZm91bmQuJyxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIDUwMDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0ludGVybmFsIHNlcnZlciBlcnJvci4nLFxuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcm9zc0RvbWFpbjogZmFsc2UsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY2FjaGU6IHRydWUsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdYLUNTUkYtVG9rZW4nOiAkKCdtZXRhW25hbWU9XCJfdFwiXScpLmF0dHIoJ2NvbnRlbnQnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgc2V0dXBGb3JtICgpIHtcbiAgICB2YXIgJGZvcm1zID0gJCgnLmFjdGlvbi1mb3JtJylcbiAgICB2YXIgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgIHZhciBhbGxvd2VkVHlwZXMgPSBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdQQVRDSCcsICdERUxFVEUnXVxuXG4gICAgJGZvcm1zLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkZm9ybSA9ICQodGhpcylcbiAgICAgICRmb3JtLm9uKCdjbGljaycsICdbdHlwZT1zdWJtaXRdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcblxuICAgICAgICBpZiAoZm9ybVByb2Nlc3NpbmcpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0EgZm9ybSBwcm9jZXNzIGlzIHN0aWxsIHJ1bm5pbmcuJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbidcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGh0dHBUeXBlID0gKCRmb3JtLmF0dHIoJ2h0dHAtdHlwZScpKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIGlmIChhbGxvd2VkVHlwZXMuaW5kZXhPZihodHRwVHlwZSkgPT09IC0xKSB7XG4gICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIHRleHQ6ICdIVFRQIHR5cGUgbm90IGFsbG93ZWQuJyxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISRmb3JtLnBhcnNsZXkoKS52YWxpZGF0ZSgpKSB7XG4gICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIHRleHQ6ICdJbnZhbGlkIHZhbHVlIG9uIGZvcm0uIENoZWNrIGFnYWluLicsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpcm0oJ1N1Ym1pdD8nKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSB0cnVlXG4gICAgICAgICAgdmFyICRpbnB1dCA9ICRmb3JtLmZpbmQoJzppbnB1dCcpXG4gICAgICAgICAgJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgdHJ1ZSlcbiAgICAgICAgICAkdGhpcy5kaXNhYmxlKHRydWUpXG5cbiAgICAgICAgICBsZXQgZm9ybURhdGEgPSB7fVxuICAgICAgICAgIGZvcm1EYXRhLmRhdGEgPSAkZm9ybS5zZXJpYWxpemVGb3JtKClcblxuICAgICAgICAgICQuZWFjaCgkZm9ybS5kYXRhKCksIGZ1bmN0aW9uIChpLCB2KSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gJ25hdGlvbmFsaXR5Jykge1xuICAgICAgICAgICAgICBpZiAoJCgnI2lucHV0TmF0aW9uYWxpdHknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAkKCcjaW5wdXROYXRpb25hbGl0eScpLmRhdGEoJ2Rkc2xpY2snKVxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRhdGEubmF0aW9uYWxpdHkgPSB2YWx1ZS5zZWxlY3RlZERhdGEudmFsdWVcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgkKCcjaW5wdXRCZW5lZmljaWFyeU5hdGlvbmFsaXR5JykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gJCgnI2lucHV0QmVuZWZpY2lhcnlOYXRpb25hbGl0eScpLmRhdGEoJ2Rkc2xpY2snKVxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRhdGEuYmVuZWZpY2lhcnlfbmF0aW9uYWxpdHkgPSB2YWx1ZS5zZWxlY3RlZERhdGEudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogaHR0cFR5cGUsXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgICAgIHVybDogJGZvcm0uZGF0YSgndXJsJyksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgIHRleHQ6IGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBlLnR5cGVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCBmYWxzZSlcbiAgICAgICAgICAgICAgJHRoaXMuZGlzYWJsZShmYWxzZSlcblxuICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSAnc3VjY2VzcycgJiYgZS5yZWRpcmVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoZS5yZWRpcmVjdClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgZm9ybVByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCBmYWxzZSlcbiAgICAgICAgICAgICAgJHRoaXMuZGlzYWJsZShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEYXRhVGFibGUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdmFyICR0YWJsZXMgPSAkKCcudGFibGUtZ3JpZCcpXG4gICAgdmFyICRtb2RhbCA9ICQoJyNzaG93TW9kYWwnKVxuICAgIHZhciAkbW9kYWxMb2FkZXIgPSAkbW9kYWwuZmluZCgnLmxvYWRpbmcnKVxuICAgIHZhciAkbW9kYWxFcnJvciA9ICRtb2RhbC5maW5kKCcuZXJyb3InKVxuICAgIHZhciAkbW9kYWxDb250ZW50ID0gJG1vZGFsLmZpbmQoJyNtb2RhbENvbnRlbnQnKVxuICAgIHZhciAkbG9hZGVyID0gJCgnI3BhZ2VMb2FkZXInKVxuXG4gICAgJHRhYmxlcy5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRhYmxlID0gJCh0aGlzKVxuICAgICAgdmFyIGNvbHVtbnMgPSBbXVxuXG4gICAgICAkdGFibGUuZmluZCgndGgnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0ICR0aGVhZCA9ICQodGhpcylcbiAgICAgICAgbGV0IGNvbHVtblZhbHVlID0ge31cbiAgICAgICAgY29sdW1uVmFsdWVbJ2RhdGEnXSA9ICR0aGVhZC5kYXRhKCdpZCcpXG5cbiAgICAgICAgJC5lYWNoKCR0aGVhZC5kYXRhKCksIGZ1bmN0aW9uIChpLCB2YWx1ZSkge1xuICAgICAgICAgIGlmIChpICE9PSAnaWQnKSB7XG4gICAgICAgICAgICBjb2x1bW5WYWx1ZVtpXSA9IHZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb2x1bW5zLnB1c2goY29sdW1uVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICAkdGFibGUuZGF0YVRhYmxlKHtcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgbGFuZ3VhZ2U6IHdpbmRvdy5fZGF0YVRhYmxlc0xhbmcsXG4gICAgICAgIHNlYXJjaERlbGF5OiAxMDAwLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBhamF4OiAkdGFibGUuZGF0YSgndXJsJyksXG4gICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAgIG9yZGVyOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAnZGVzYydcbiAgICAgICAgXVxuICAgICAgfSlcblxuICAgICAgJHRhYmxlLm9uKCdjbGljaycsICcuYnRuLXNob3cnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgICAkbW9kYWxMb2FkZXIuc2hvdygpXG4gICAgICAgICRtb2RhbEVycm9yLmhpZGUoKVxuICAgICAgICAkbW9kYWxDb250ZW50LmVtcHR5KClcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICAgIHVybDogJHRoaXMuZGF0YSgndXJsJyksXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICRtb2RhbExvYWRlci5oaWRlKClcbiAgICAgICAgICAgICRtb2RhbENvbnRlbnQuaHRtbChlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgJG1vZGFsTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgJG1vZGFsRXJyb3Iuc2hvdygpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgICR0YWJsZS5vbignY2xpY2snLCAnLmJ0bi1kZWxldGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKGNvbmZpcm0oJ1JlbW92ZT8nKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgJGxvYWRlci5zaG93KClcbiAgICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdkZWxldGUnLFxuICAgICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5wYXJlbnRzKCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAgICRsb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgdGV4dDogeGhyLnJlc3BvbnNlVGV4dCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cblxuaW1wb3J0IHsgQ29yZSB9IGZyb20gJy4vY29yZSdcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0J1xuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAnLi9kYXRhdGFibGUnXG5pbXBvcnQgeyBSZWdpc3RlciB9IGZyb20gJy4vcmVnaXN0ZXInXG5pbXBvcnQgeyBTaGFyZXMgfSBmcm9tICcuL3NoYXJlcydcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICcuL25ldHdvcmsnXG5cbm5ldyBDb3JlKClcbm5ldyBXaWRnZXQoKVxubmV3IERhdGFUYWJsZSgpXG5uZXcgUmVnaXN0ZXIoKVxubmV3IFNoYXJlcygpXG5uZXcgTmV0d29yaygpXG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICQoJyNsb2FkaW5nJykuZmFkZU91dCg0MDAsICdsaW5lYXInKVxufSwgMzAwKVxuXG4kKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICBib2R5U2l6ZXIoKVxufSlcblxuYm9keVNpemVyKClcbnBhZ2VUcmFuc2l0aW9ucygpXG4kLnNsaWRlYmFycygpXG5cbiQoXCJkaXZbaWQ9JyNmaXhlZC1zaWRlYmFyJ11cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJzd2l0Y2gtb25cIikpIHtcblxuICAgIHZhciB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KClcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnI3BhZ2UtaGVhZGVyJykuaGVpZ2h0KClcbiAgICB2YXIgY29udGVudEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIGhlYWRlckhlaWdodFxuXG4gICAgJCgnI3BhZ2Utc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcuc2Nyb2xsLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG5cbiAgICAkKCcuc2Nyb2xsLXNpZGViYXInKS5zbGltc2Nyb2xsKHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgY29sb3I6ICdyZ2JhKDE1NSwgMTY0LCAxNjksIDAuNjgpJyxcbiAgICAgIHNpemU6ICc2cHgnXG4gICAgfSlcblxuICAgIHZhciBoZWFkZXJCZyA9ICQoJyNwYWdlLWhlYWRlcicpLmF0dHIoJ2NsYXNzJylcbiAgICAkKCcjaGVhZGVyLWxvZ28nKS5hZGRDbGFzcyhoZWFkZXJCZylcblxuICB9IGVsc2Uge1xuXG4gICAgdmFyIHdpbmRvd0hlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpXG4gICAgdmFyIGhlYWRlckhlaWdodCA9ICQoJyNwYWdlLWhlYWRlcicpLmhlaWdodCgpXG4gICAgdmFyIGNvbnRlbnRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBoZWFkZXJIZWlnaHRcblxuICAgICQoJyNwYWdlLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnLnNjcm9sbC1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuXG4gICAgJChcIi5zY3JvbGwtc2lkZWJhclwiKS5zbGltU2Nyb2xsKHtcbiAgICAgIGRlc3Ryb3k6IHRydWVcbiAgICB9KVxuXG4gICAgJCgnI2hlYWRlci1sb2dvJykucmVtb3ZlQ2xhc3MoJ2JnLWdyYWRpZW50LTknKVxuXG4gIH1cbn0pXG5cbiQoJy5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLmZpbmQoJy5kcm9wZG93bi1tZW51JykuZmlyc3QoKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlRG93bigpXG59KVxuXG4kKCcuZHJvcGRvd24nKS5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLmZpcnN0KCkuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVVwKClcbn0pXG5cbiQoZnVuY3Rpb24oKSB7XG4gICQoJyNzaWRlYmFyLW1lbnUnKS5zdXBlcmNsaWNrKHtcbiAgICBhbmltYXRpb246IHtcbiAgICAgIGhlaWdodDogJ3Nob3cnXG4gICAgfSxcbiAgICBhbmltYXRpb25PdXQ6IHtcbiAgICAgIGhlaWdodDogJ2hpZGUnXG4gICAgfVxuICB9KVxuICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpXG4gIHBhdGggPSBwYXRoW3BhdGgubGVuZ3RoLTFdXG4gIGlmIChwYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKFwiI3NpZGViYXItbWVudVwiKS5maW5kKFwiYVtocmVmJD0nXCIgKyBwYXRoICsgXCInXVwiKS5hZGRDbGFzcygnc2ZBY3RpdmUnKVxuICAgICQoXCIjc2lkZWJhci1tZW51XCIpLmZpbmQoXCJhW2hyZWYkPSdcIiArIHBhdGggKyBcIiddXCIpLnBhcmVudHMoKS5lcSgzKS5zdXBlcmNsaWNrKCdzaG93JylcbiAgfVxuXG4gICQoJyNjbG9zZS1zaWRlYmFyJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdjbG9zZWQtc2lkZWJhcicpXG4gICAgJCgnLmdseXBoLWljb24nLCB0aGlzKS50b2dnbGVDbGFzcygnaWNvbi1hbmdsZS1yaWdodCcpLnRvZ2dsZUNsYXNzKCdpY29uLWFuZ2xlLWxlZnQnKVxuICB9KVxufSlcblxuZnVuY3Rpb24gYm9keVNpemVyKCkge1xuICB2YXIgd2luZG93SGVpZ2h0LCBoZWFkZXJIZWlnaHQsIGNvbnRlbnRIZWlnaHRcblxuICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdmaXhlZC1zaWRlYmFyJykpIHtcblxuICAgIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKVxuICAgIGhlYWRlckhlaWdodCA9ICQoJyNwYWdlLWhlYWRlcicpLmhlaWdodCgpXG4gICAgY29udGVudEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIGhlYWRlckhlaWdodFxuICAgICQoJyNwYWdlLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnLnNjcm9sbC1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJyNwYWdlLWNvbnRlbnQnKS5jc3MoJ21pbi1oZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuXG4gIH0gZWxzZSB7XG5cbiAgICB3aW5kb3dIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKVxuICAgIGhlYWRlckhlaWdodCA9ICQoJyNwYWdlLWhlYWRlcicpLmhlaWdodCgpXG4gICAgY29udGVudEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIGhlYWRlckhlaWdodFxuICAgICQoJyNwYWdlLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnLnNjcm9sbC1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJyNwYWdlLWNvbnRlbnQnKS5jc3MoJ21pbi1oZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuXG4gIH1cbn1cblxuZnVuY3Rpb24gcGFnZVRyYW5zaXRpb25zKCkge1xuICB2YXIgdHJhbnNpdGlvbnMgPSBbJy5wdC1wYWdlLW1vdmVGcm9tTGVmdCcsICdwdC1wYWdlLW1vdmVGcm9tUmlnaHQnLCAncHQtcGFnZS1tb3ZlRnJvbVRvcCcsICdwdC1wYWdlLW1vdmVGcm9tQm90dG9tJywgJ3B0LXBhZ2UtZmFkZScsICdwdC1wYWdlLW1vdmVGcm9tTGVmdEZhZGUnLCAncHQtcGFnZS1tb3ZlRnJvbVJpZ2h0RmFkZScsICdwdC1wYWdlLW1vdmVGcm9tVG9wRmFkZScsICdwdC1wYWdlLW1vdmVGcm9tQm90dG9tRmFkZScsICdwdC1wYWdlLXNjYWxlVXAnLCAncHQtcGFnZS1zY2FsZVVwQ2VudGVyJywgJ3B0LXBhZ2UtZmxpcEluTGVmdCcsICdwdC1wYWdlLWZsaXBJblJpZ2h0JywgJ3B0LXBhZ2UtZmxpcEluQm90dG9tJywgJ3B0LXBhZ2UtZmxpcEluVG9wJywgJ3B0LXBhZ2Utcm90YXRlUHVsbFJpZ2h0JywgJ3B0LXBhZ2Utcm90YXRlUHVsbExlZnQnLCAncHQtcGFnZS1yb3RhdGVQdWxsVG9wJywgJ3B0LXBhZ2Utcm90YXRlUHVsbEJvdHRvbScsICdwdC1wYWdlLXJvdGF0ZVVuZm9sZExlZnQnLCAncHQtcGFnZS1yb3RhdGVVbmZvbGRSaWdodCcsICdwdC1wYWdlLXJvdGF0ZVVuZm9sZFRvcCcsICdwdC1wYWdlLXJvdGF0ZVVuZm9sZEJvdHRvbSddXG4gIGZvciAodmFyIGkgaW4gdHJhbnNpdGlvbnMpIHtcbiAgICB2YXIgdHJhbnNpdGlvbl9uYW1lID0gdHJhbnNpdGlvbnNbaV1cbiAgICBpZiAoJCgnLmFkZC10cmFuc2l0aW9uJykuaGFzQ2xhc3ModHJhbnNpdGlvbl9uYW1lKSkge1xuICAgICAgJCgnLmFkZC10cmFuc2l0aW9uJykuYWRkQ2xhc3ModHJhbnNpdGlvbl9uYW1lICsgJy1pbml0IHBhZ2UtdHJhbnNpdGlvbicpXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuYWRkLXRyYW5zaXRpb24nKS5yZW1vdmVDbGFzcyh0cmFuc2l0aW9uX25hbWUgKyAnICcgKyB0cmFuc2l0aW9uX25hbWUgKyAnLWluaXQgcGFnZS10cmFuc2l0aW9uJylcbiAgICAgIH0sIDEyMDApXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbn1cblxuaWYgKCQoJyNleGNoYW5nZVJhdGVDaGFydCcpLmxlbmd0aCkge1xuICAkLndoZW4oXG4gICAgJC5nZXRTY3JpcHQod2luZG93Ll9yb290ICsgJy9saWIvY2hhcnQtY29yZS5qcycpLFxuICAgICQuRGVmZXJyZWQoZnVuY3Rpb24gKGRlZmVycmVkKSB7XG4gICAgICAkKGRlZmVycmVkLnJlc29sdmUpXG4gICAgfSlcbiAgKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXhjaGFnZVJhdGVzID0gd2luZG93Ll9leGNoYW5nZVJhdGVcbiAgICB2YXIgbGFiZWxzID0gW11cbiAgICB2YXIgY2hhcnREYXRhQnV5ID0gW11cbiAgICB2YXIgY2hhcnREYXRhU2VsbCA9IFtdXG5cbiAgICAkLmVhY2goZXhjaGFnZVJhdGVzLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICBsYWJlbHMucHVzaChpbmRleCArIFwiIChcIiArIHZhbHVlLmN1cnJlbmN5ICsgXCIpXCIpXG4gICAgICBjaGFydERhdGFCdXkucHVzaCh2YWx1ZS5idXkpXG4gICAgICBjaGFydERhdGFTZWxsLnB1c2godmFsdWUuc2VsbClcbiAgICB9KVxuICAgIHZhciBjaGFydERhdGEgPSB7XG4gICAgICB0eXBlOiAnbGluZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICBsYWJlbDogJ0J1eScsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YUJ1eSxcbiAgICAgICAgICBmaWxsOiBmYWxzZVxuICAgICAgICB9LHtcbiAgICAgICAgICBsYWJlbDogJ1NlbGwnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig1NCwgMTYyLCAyMzUpJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYig1NCwgMTYyLCAyMzUpJyxcbiAgICAgICAgICBkYXRhOiBjaGFydERhdGFTZWxsLFxuICAgICAgICAgIGZpbGw6IGZhbHNlXG4gICAgICAgIH1dLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIHRpdGxlOntcbiAgICAgICAgICBkaXNwbGF5OnRydWUsXG4gICAgICAgICAgdGV4dDogJ0V4Y2hhbmdlIFJhdGVzJ1xuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIG1vZGU6ICdpbmRleCcsXG4gICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBtb2RlOiAnbmVhcmVzdCcsXG4gICAgICAgICAgaW50ZXJzZWN0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdDb3VudHJ5J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1dLFxuICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdCVVkvU0VMTCBWYWx1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICB9IFxuICAgIH1cbiAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGNoYW5nZVJhdGVDaGFydFwiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmhlaWdodCA9IDUwMDtcbiAgICBuZXcgQ2hhcnQoY3R4LCBjaGFydERhdGEpXG4gIH0pLmZhaWwoZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dClcbiAgfSlcbn1cblxuaWYgKCQoJyNzaGFyZU5leHRQaWUnKS5sZW5ndGgpIHtcbiAgJC53aGVuKFxuICAgICQuZ2V0U2NyaXB0KHdpbmRvdy5fcm9vdCArICcvbGliL3BpZWdhdWdlLmpzJyksXG4gICAgJC5EZWZlcnJlZChmdW5jdGlvbiAoZGVmZXJyZWQpIHtcbiAgICAgICQoZGVmZXJyZWQucmVzb2x2ZSlcbiAgICB9KVxuICApLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICQoJyNzaGFyZU5leHRQaWUnKS5lYXN5UGllQ2hhcnQoe1xuICAgICAgYmFyQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDI1NS40KScsXG4gICAgICB0cmFja0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjEpJyxcbiAgICAgIHNjYWxlQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBsaW5lQ2FwOiAncm91bmQnLFxuICAgICAgcm90YXRlOiAtOTAsXG4gICAgICBsaW5lV2lkdGg6IDQsXG4gICAgICBzaXplOiAxMDAsXG4gICAgICBhbmltYXRlOiAxMDAwLFxuICAgIH0pXG4gIH0pXG59XG4iLCJleHBvcnQgY2xhc3MgTmV0d29yayB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoJCgnI3VuaWxldmVsTmV0d29yaycpLmxlbmd0aCkge1xuICAgICAgdGhpcy51bmlsZXZlbCgpXG4gICAgfVxuXG4gICAgaWYgKCQoJyN1bmlsZXZlbEZvcm0nKS5sZW5ndGgpIHtcbiAgICAgIHZhciAkZm9ybSA9ICQoJyN1bmlsZXZlbEZvcm0nKVxuICAgICAgdmFyIHNlYXJjaFVybCA9ICRmb3JtLmRhdGEoJ3VybCcpXG4gICAgICB2YXIgJGxvYWRlciA9ICQoJyNwYWdlTG9hZGVyJylcbiAgICAgICRmb3JtLm9uKCdjbGljaycsICdbdHlwZT1zdWJtaXRdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29uZmlybSgnU2VhcmNoPycpKSB7XG4gICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgICAgIHZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCc6aW5wdXQnKVxuICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIHRydWUpXG4gICAgICAgICAgJHRoaXMuZGlzYWJsZSh0cnVlKVxuXG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogc2VhcmNoVXJsLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBkYXRhOiAkZm9ybS5zZXJpYWxpemVGb3JtKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCBmYWxzZSlcbiAgICAgICAgICAgICAgJHRoaXMuZGlzYWJsZShmYWxzZSlcbiAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgdHlwZTogZS50eXBlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShlLnJlZGlyZWN0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgdW5pbGV2ZWwgKCkge1xuICAgIHZhciAkbmV0d29yayA9ICQoJyN1bmlsZXZlbE5ldHdvcmsnKVxuICAgIHZhciBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobGlua0VsZW0pXG4gICAgbGlua0VsZW0ucmVsID0gJ3N0eWxlc2hlZXQnXG4gICAgbGlua0VsZW0udHlwZSA9ICd0ZXh0L2NzcydcbiAgICBsaW5rRWxlbS5ocmVmID0gd2luZG93Ll9yb290ICsgJy9saWIvdmlzLmNzcydcblxuICAgICQud2hlbihcbiAgICAgICQuZ2V0U2NyaXB0KHdpbmRvdy5fcm9vdCArICcvbGliL3Zpcy5qcycpLFxuICAgICAgJC5EZWZlcnJlZChmdW5jdGlvbiAoZGVmZXJyZWQpIHtcbiAgICAgICAgJChkZWZlcnJlZC5yZXNvbHZlKVxuICAgICAgfSlcbiAgICApLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bmlsZXZlbE5ldHdvcmsnKVxuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGhlaWdodDogJzYwMHB4JyxcbiAgICAgICAgbm9kZXM6IHtcbiAgICAgICAgICBzaGFwZTogJ2RvdCcsXG4gICAgICAgICAgc2l6ZTogMzYsXG4gICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgc2l6ZTogMjQsXG4gICAgICAgICAgICBjb2xvcjogJyMzMzMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxuICAgICAgICB9LFxuICAgICAgICBlZGdlczoge1xuICAgICAgICAgIHdpZHRoOiAyXG4gICAgICAgIH0sXG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgIGhpZXJhcmNoaWNhbDoge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnVXAtRG93bidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3Vwczoge1xuICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICBzaGFwZTogJ2ljb24nLFxuICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICBmYWNlOiAnRm9udEF3ZXNvbWUnLFxuICAgICAgICAgICAgICBjb2RlOiAnXFx1ZjAwNycsXG4gICAgICAgICAgICAgIHNpemU6IDc1LFxuICAgICAgICAgICAgICBjb2xvcjogJ29yYW5nZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgYm9yZGVyOid3aGl0ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICQucG9zdCgkbmV0d29yay5kYXRhKCd1cmwnKSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBuZXcgdmlzLk5ldHdvcmsoY29udGFpbmVyLCBkYXRhLCBvcHRpb25zKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUmVnaXN0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCQoJyNyZWdpc3RlckZvcm0nKS5sZW5ndGgpIHtcbiAgICAgIGxldCAkZm9ybSA9ICQoJyNyZWdpc3RlckZvcm0nKVxuICAgICAgbGV0ICRyZWdUZXh0ID0gJGZvcm0uZmluZCgnI3JlZ2lzdGVyUG9pbnRWYWx1ZScpXG4gICAgICBsZXQgJHByb21vVGV4dCA9ICRmb3JtLmZpbmQoJyNwcm9tb3Rpb25Qb2ludFZhbHVlJylcblxuICAgICAgbGV0IHByb21vUGVyY2VudCA9ICQoJyNpbnB1dFBvaW50JykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKClcbiAgICAgIGxldCByZWdQZXJjZW50ID0gMTAwIC0gcHJvbW9QZXJjZW50XG4gICAgICBsZXQgJHBhY2thZ2UgPSAkZm9ybS5maW5kKCdbbmFtZT1wYWNrYWdlX2lkXSBvcHRpb246c2VsZWN0ZWQnKS5kYXRhKCd2YWx1ZScpXG4gICAgICAkcmVnVGV4dC50ZXh0KChyZWdQZXJjZW50IC8gMTAwICogJHBhY2thZ2UpLnRvRml4ZWQoMikpXG4gICAgICAkcHJvbW9UZXh0LnRleHQoKHByb21vUGVyY2VudCAvIDEwMCAqICRwYWNrYWdlKS50b0ZpeGVkKDIpKVxuXG4gICAgICAkZm9ybS5maW5kKCcjaW5wdXRQb2ludCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBwcm9tb1BlcmNlbnQgPSAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpXG4gICAgICAgIGxldCByZWdQZXJjZW50ID0gMTAwIC0gcHJvbW9QZXJjZW50XG4gICAgICAgIGxldCAkcGFja2FnZSA9ICRmb3JtLmZpbmQoJ1tuYW1lPXBhY2thZ2VfaWRdIG9wdGlvbjpzZWxlY3RlZCcpLmRhdGEoJ3ZhbHVlJylcbiAgICAgICAgJHJlZ1RleHQudGV4dCgocmVnUGVyY2VudCAvIDEwMCAqICRwYWNrYWdlKS50b0ZpeGVkKDIpKVxuICAgICAgICAkcHJvbW9UZXh0LnRleHQoKHByb21vUGVyY2VudCAvIDEwMCAqICRwYWNrYWdlKS50b0ZpeGVkKDIpKVxuICAgICAgfSlcblxuICAgICAgJGZvcm0uZmluZCgnW25hbWU9cGFja2FnZV9pZF0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcHJvbW9QZXJjZW50ID0gJCgnI2lucHV0UG9pbnQnKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKVxuICAgICAgICBsZXQgcmVnUGVyY2VudCA9IDEwMCAtIHByb21vUGVyY2VudFxuICAgICAgICBsZXQgJHBhY2thZ2UgPSAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmRhdGEoJ3ZhbHVlJylcbiAgICAgICAgJHJlZ1RleHQudGV4dCgocmVnUGVyY2VudCAvIDEwMCAqICRwYWNrYWdlKS50b0ZpeGVkKDIpKVxuICAgICAgICAkcHJvbW9UZXh0LnRleHQoKHByb21vUGVyY2VudCAvIDEwMCAqICRwYWNrYWdlKS50b0ZpeGVkKDIpKVxuICAgICAgfSlcblxuICAgICAgdmFyICRzaG93TWVtYmVyQnRuID0gJGZvcm0uZmluZCgnLmJ0bi1zaG93JylcbiAgICAgIHZhciAkbW9kYWwgPSAkKCcjc2hvd01vZGFsJylcbiAgICAgIHZhciAkbW9kYWxMb2FkZXIgPSAkbW9kYWwuZmluZCgnLmxvYWRpbmcnKVxuICAgICAgdmFyICRtb2RhbEVycm9yID0gJG1vZGFsLmZpbmQoJy5lcnJvcicpXG4gICAgICB2YXIgJG1vZGFsQ29udGVudCA9ICRtb2RhbC5maW5kKCcjbW9kYWxDb250ZW50JylcbiAgICAgICRzaG93TWVtYmVyQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgICRtb2RhbExvYWRlci5zaG93KClcbiAgICAgICAgJG1vZGFsRXJyb3IuaGlkZSgpXG4gICAgICAgICRtb2RhbENvbnRlbnQuZW1wdHkoKVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXG4gICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSArICc/dT0nICsgJHRoaXMucGFyZW50KCkuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5maW5kKCcuZm9ybS1jb250cm9sJykudmFsKCksXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICRtb2RhbExvYWRlci5oaWRlKClcbiAgICAgICAgICAgICRtb2RhbENvbnRlbnQuaHRtbChlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgJG1vZGFsTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgJG1vZGFsRXJyb3Iuc2hvdygpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hhcmVzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICgkKCcjdHJhbnNmZXJGb3JtJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRyYW5zZmVyKClcbiAgICB9XG4gICAgaWYgKCQoJyNzaGFyZXNTZWxsRm9ybScpLmxlbmd0aCkge1xuICAgICAgdmFyICRzZWxsRm9ybSA9ICQoJyNzaGFyZXNTZWxsRm9ybScpXG4gICAgICAkc2VsbEZvcm0uZmluZCgnW25hbWU9cXVhbnRpdHldJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgJGZvcm0gPSAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0nKVxuICAgICAgICBsZXQgdG90YWwgPSAkZm9ybS5maW5kKCdbbmFtZT1wcmljZV0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgKiAkKHRoaXMpLnZhbCgpXG4gICAgICAgICRmb3JtLmZpbmQoJy50b3RhbC10ZXh0JykudGV4dCh0b3RhbC50b0ZpeGVkKDMpKVxuICAgICAgICBsZXQgbmV0VG90YWwgPSB0b3RhbCAtICgwLjEgKiB0b3RhbClcbiAgICAgICAgJGZvcm0uZmluZCgnLm5ldC10b3RhbC10ZXh0JykudGV4dChuZXRUb3RhbC50b0ZpeGVkKDMpKVxuICAgICAgfSlcblxuICAgICAgJHNlbGxGb3JtLmZpbmQoJ1tuYW1lPXByaWNlXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCAkZm9ybSA9ICQodGhpcykucGFyZW50cygnZm9ybScpXG4gICAgICAgIGxldCB0b3RhbCA9ICQodGhpcykuZmluZCgnOnNlbGVjdGVkJykudmFsKCkgKiAkKCdbbmFtZT1xdWFudGl0eV0nKS52YWwoKVxuICAgICAgICAkZm9ybS5maW5kKCcudG90YWwtdGV4dCcpLnRleHQodG90YWwudG9GaXhlZCgzKSlcbiAgICAgICAgbGV0IG5ldFRvdGFsID0gdG90YWwgLSAoMC4xICogdG90YWwpXG4gICAgICAgICRmb3JtLmZpbmQoJy5uZXQtdG90YWwtdGV4dCcpLnRleHQobmV0VG90YWwudG9GaXhlZCgzKSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCQoJyNzaGFyZXNCdXlGb3JtJykubGVuZ3RoKSB7XG4gICAgICB2YXIgJGJ1eUZvcm0gPSAkKCcjc2hhcmVzQnV5Rm9ybScpXG4gICAgICAkc2VsbEZvcm0uZmluZCgnW25hbWU9cXVhbnRpdHldJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgJGZvcm0gPSAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0nKVxuICAgICAgICBsZXQgdG90YWwgPSAkZm9ybS5maW5kKCdbbmFtZT1wcmljZV0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgKiAkKHRoaXMpLnZhbCgpXG4gICAgICAgICRmb3JtLmZpbmQoJy50b3RhbC10ZXh0JykudGV4dCh0b3RhbC50b0ZpeGVkKDMpKVxuICAgICAgfSlcblxuICAgICAgJGJ1eUZvcm0uZmluZCgnW25hbWU9cHJpY2VdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0ICRmb3JtID0gJCh0aGlzKS5wYXJlbnRzKCdmb3JtJylcbiAgICAgICAgbGV0IHRvdGFsID0gJCh0aGlzKS5maW5kKCc6c2VsZWN0ZWQnKS52YWwoKSAqICQoJ1tuYW1lPXF1YW50aXR5XScpLnZhbCgpXG4gICAgICAgICRmb3JtLmZpbmQoJy50b3RhbC10ZXh0JykudGV4dCh0b3RhbC50b0ZpeGVkKDMpKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgdHJhbnNmZXIgKCkge1xuICAgIHZhciAkZm9ybSA9ICQoJyN0cmFuc2ZlckZvcm0nKVxuICAgIHZhciAkc2hvd01lbWJlckJ0biA9ICRmb3JtLmZpbmQoJy5idG4tc2hvdycpXG4gICAgdmFyICRtb2RhbCA9ICQoJyNzaG93TW9kYWwnKVxuICAgIHZhciAkbW9kYWxMb2FkZXIgPSAkbW9kYWwuZmluZCgnLmxvYWRpbmcnKVxuICAgIHZhciAkbW9kYWxFcnJvciA9ICRtb2RhbC5maW5kKCcuZXJyb3InKVxuICAgIHZhciAkbW9kYWxDb250ZW50ID0gJG1vZGFsLmZpbmQoJyNtb2RhbENvbnRlbnQnKVxuICAgICRzaG93TWVtYmVyQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGxldCAkdGhpcyA9ICQodGhpcylcbiAgICAgICRtb2RhbExvYWRlci5zaG93KClcbiAgICAgICRtb2RhbEVycm9yLmhpZGUoKVxuICAgICAgJG1vZGFsQ29udGVudC5lbXB0eSgpXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSArICc/dT0nICsgJHRoaXMucGFyZW50KCkuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5maW5kKCcuZm9ybS1jb250cm9sJykudmFsKCksXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgJG1vZGFsTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICRtb2RhbENvbnRlbnQuaHRtbChlKVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgJG1vZGFsTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICRtb2RhbEVycm9yLnNob3coKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFdpZGdldCB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHQkKCdhW2hyZWY9XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHR9KVxuXHRcdFxuXHRcdCQoXCIudG9kby1ib3ggbGkgaW5wdXRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCd0b2RvLWRvbmUnKVxuXHRcdH0pXG5cdFx0XG5cdFx0dmFyIG92ZXJhbGxXaWR0aCA9IDBcblx0XHQkKCcudGltZWxpbmUtc2Nyb2xsIC50bC1yb3cnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtKSB7XG5cdFx0XHR2YXIgJGVsZW0gPSAkKGVsZW0pXG5cdFx0XHRvdmVyYWxsV2lkdGggKz0gJGVsZW0ub3V0ZXJXaWR0aCgpICsgcGFyc2VJbnQoJGVsZW0uY3NzKCdtYXJnaW4tbGVmdCcpLCAxMCkgKyBwYXJzZUludCgkZWxlbS5jc3MoJ21hcmdpbi1yaWdodCcpLCAxMClcblx0XHR9KVxuXHRcdCQoJy50aW1lbGluZS1ob3Jpem9udGFsJywgdGhpcykud2lkdGgob3ZlcmFsbFdpZHRoKVxuXG5cdFx0JCgnLmlucHV0LXN3aXRjaC1hbHQnKS5zaW1wbGVDaGVja2JveCgpXG5cblx0XHQkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0uY3VzdG9tLWNoZWNrYm94JykudW5pZm9ybSgpXG5cdFx0JCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdLmN1c3RvbS1yYWRpbycpLnVuaWZvcm0oKVxuXHRcdCQoJy5jdXN0b20tc2VsZWN0JykudW5pZm9ybSgpXG5cblx0XHQkKCcuc2VsZWN0b3InKS5hcHBlbmQoJzxpIGNsYXNzPVwiZ2x5cGgtaWNvbiBpY29uLWNhcmV0LWRvd25cIj48L2k+JylcblxuXHRcdCQoJy5jaGVja2VyIHNwYW4nKS5hcHBlbmQoJzxpIGNsYXNzPVwiZ2x5cGgtaWNvbiBpY29uLWNoZWNrXCI+PC9pPicpXG5cdFx0JCgnLnJhZGlvIHNwYW4nKS5hcHBlbmQoJzxpIGNsYXNzPVwiZ2x5cGgtaWNvbiBpY29uLWNpcmNsZVwiPjwvaT4nKVxuXHRcdFxuXHRcdCQoJy5zY3JvbGxhYmxlLXNsaW0nKS5zbGltU2Nyb2xsKHtcblx0XHRcdGNvbG9yOiAnIzhkYTBhYScsXG5cdFx0XHRzaXplOiAnMTBweCcsXG5cdFx0XHRhbHdheXNWaXNpYmxlOiB0cnVlXG5cdFx0fSlcblx0XHRcblx0XHQkKCcuc2Nyb2xsYWJsZS1zbGltLXNpZGViYXInKS5zbGltU2Nyb2xsKHtcblx0XHRcdGNvbG9yOiAnIzhkYTBhYScsXG5cdFx0XHRzaXplOiAnMTBweCcsXG5cdFx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRcdGFsd2F5c1Zpc2libGU6IHRydWVcblx0XHR9KVxuXHRcdFxuXHRcdCQoJy5zY3JvbGxhYmxlLXNsaW0tYm94Jykuc2xpbVNjcm9sbCh7XG5cdFx0XHRjb2xvcjogJyM4ZGEwYWEnLFxuXHRcdFx0c2l6ZTogJzZweCcsXG5cdFx0XHRhbHdheXNWaXNpYmxlOiBmYWxzZVxuXHRcdH0pXG5cblx0XHQkKCcubG9hZGluZy1idXR0b24nKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdHZhciBidG4gPSAkKHRoaXMpXG5cdFx0XHRidG4uYnV0dG9uKCdsb2FkaW5nJylcblx0XHR9KVxuXG5cdFx0JCgnLnRvb2x0aXAtYnV0dG9uJykudG9vbHRpcCh7XG5cdFx0XHRjb250YWluZXI6ICdib2R5J1xuXHRcdH0pXG5cdFx0XG5cdFx0JCgnLmFsZXJ0LWNsb3NlLWJ0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZU91dERvd24nKVxuXHRcdH0pXG5cdFx0XG5cdFx0JCgnLnBvcG92ZXItYnV0dG9uJykucG9wb3Zlcih7XG5cdFx0XHRjb250YWluZXI6ICdib2R5Jyxcblx0XHRcdGh0bWw6IHRydWUsXG5cdFx0XHRhbmltYXRpb246IHRydWUsXG5cdFx0XHRjb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGRhdGFJRCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpXG5cdFx0XHRcdHJldHVybiAkKGRhdGFJRCkuaHRtbCgpXG5cdFx0XHR9XG5cdFx0fSkuY2xpY2soZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRldnQucHJldmVudERlZmF1bHQoKVxuXHRcdH0pXG5cblx0XHQkKCcucG9wb3Zlci1idXR0b24tZGVmYXVsdCcpLnBvcG92ZXIoe1xuXHRcdFx0Y29udGFpbmVyOiAnYm9keScsXG5cdFx0XHRodG1sOiB0cnVlLFxuXHRcdFx0YW5pbWF0aW9uOiB0cnVlXG5cdFx0fSkuY2xpY2soZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRldnQucHJldmVudERlZmF1bHQoKVxuXHRcdH0pXG5cblx0XHQkKCcuZGF0ZXBpY2tlcicpLmJzZGF0ZXBpY2tlcih7XG5cdFx0XHRmb3JtYXQ6ICd5eXl5LW1tLWRkJ1xuXHRcdH0pXG5cdFx0JCgnLmlucHV0LXN3aXRjaCcpLmJvb3RzdHJhcFN3aXRjaCgpXG5cblx0XHRpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbHNjcmVlbi1idG4nKSkge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxzY3JlZW4tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmIChzY3JlZW5mdWxsLmVuYWJsZWQpIHtcblx0XHRcdFx0XHRzY3JlZW5mdWxsLnJlcXVlc3QoKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGlmICgkKCcuZGQtaWNvbicpLmxlbmd0aCkge1xuXHRcdFx0JCgnLmRkLWljb24nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLmRkc2xpY2soe1xuXHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdFx0ZGVmYXVsdFNlbGVjdGVkSW5kZXg6ICQodGhpcykucHJvcCgnc2VsZWN0ZWRJbmRleCcpXG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufSJdfQ==
