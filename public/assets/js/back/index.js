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
},{"./_descriptors":"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js","./_export":"/home/asus/web/web4/node_modules/core-js/library/modules/_export.js","./_object-dp":"/home/asus/web/web4/node_modules/core-js/library/modules/_object-dp.js"}],"/home/asus/web/web4/resources/assets/js/back/core.js":[function(require,module,exports){
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

new _core.Core(); /* eslint-disable no-new */

new _widget.Widget();
new _datatable.DataTable();

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

},{"./core":"/home/asus/web/web4/resources/assets/js/back/core.js","./datatable":"/home/asus/web/web4/resources/assets/js/back/datatable.js","./widget":"/home/asus/web/web4/resources/assets/js/back/widget.js"}],"/home/asus/web/web4/resources/assets/js/back/widget.js":[function(require,module,exports){
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

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}]},{},["/home/asus/web/web4/resources/assets/js/back/index.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL2NvcmUuanMiLCJyZXNvdXJjZXMvYXNzZXRzL2pzL2JhY2svZGF0YXRhYmxlLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL2luZGV4LmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrL3dpZGdldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QVBILEFBQTZCO0FBQUEsQUFDM0IsS0FERixBQVFHLE1BQU0sVUFBQSxBQUFTLEtBQUssQUFDckI7UUFBQSxBQUFJLEFBQ0w7QUFWRCxBQVlBOztJQUFBLEFBQUUsMkJBQUYsQUFBNkI7ZUFBUSxBQUN4QixBQUNYO1VBRm1DLEFBRTdCLEFBQ047ZUFIRixBQUFxQyxBQUd4QjtBQUh3QixBQUNuQyxLQURGLEFBSUcsTUFBTSxVQUFBLEFBQVMsS0FBSyxBQUNyQjtRQUFBLEFBQUksQUFDTDtBQU5ELEFBUUE7O0lBQUEsQUFBRSxlQUFGLEFBQWlCO1lBQWpCLEFBQThCLEFBQ3BCLEFBRVY7QUFIOEIsQUFDNUI7SUFFRixBQUFFLGlCQUFGLEFBQW1CLEFBRW5COztNQUFHLFNBQUEsQUFBUyxlQUFaLEFBQUcsQUFBd0IsbUJBQW1CLEFBQzVDO2FBQUEsQUFBUyxlQUFULEFBQXdCLGtCQUF4QixBQUEwQyxpQkFBMUMsQUFBMkQsU0FBUyxZQUFZLEFBQzlFO1VBQUksV0FBSixBQUFlLFNBQVMsQUFDdEI7bUJBQUEsQUFBVyxBQUNaO0FBQ0Y7QUFKRCxBQUtEO0FBQ0Y7QSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCJleHBvcnQgY2xhc3MgQ29yZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuICAgIHRoaXMubm90eURlZmF1bHQoKVxuICAgIHRoaXMuc2VyaWFsaXplRm9ybSgpXG4gICAgdGhpcy5zZXR1cEFqYXgoKVxuICAgIHRoaXMuc2V0dXBGb3JtKClcbiAgfVxuICBkaXNhYmxlICgpIHtcbiAgICAkLmZuLmV4dGVuZCh7XG4gICAgICBkaXNhYmxlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS5oaWRlKClcbiAgICAgICAgICAgICQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5maW5kKCcuYnRuLXByZWxvYWRlcicpLnNob3coKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS5zaG93KClcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignZGlzYWJsZWQnKS5maW5kKCcuYnRuLXByZWxvYWRlcicpLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG5vdHlEZWZhdWx0ICgpIHtcbiAgICAkLm5vdHkuZGVmYXVsdHMgPSB7XG4gICAgICBsYXlvdXQ6ICd0b3AnLFxuICAgICAgdGhlbWU6ICdyZWxheCcsXG4gICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgdGV4dDogJycsXG4gICAgICBkaXNtaXNzUXVldWU6IHRydWUsXG4gICAgICBmb3JjZTogZmFsc2UsXG4gICAgICBtYXhWaXNpYmxlOiA1LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwibm90eV9tZXNzYWdlXCI+PHNwYW4gY2xhc3M9XCJub3R5X3RleHRcIj48L3NwYW4+PGRpdiBjbGFzcz1cIm5vdHlfY2xvc2VcIj48L2Rpdj48L2Rpdj4nLFxuICAgICAgdGltZW91dDogNTAwMCxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBvcGVuOiAnYW5pbWF0ZWQgZmFkZUluRG93bicsXG4gICAgICAgIGNsb3NlOiAnYW5pbWF0ZWQgZmFkZU91dFVwJyxcbiAgICAgICAgZWFzaW5nOiAnc3dpbmcnLFxuICAgICAgICBzcGVlZDogNTAwXG4gICAgICB9LFxuICAgICAgY2xvc2VXaXRoOiBbJ2NsaWNrJ10sXG4gICAgICBtb2RhbDogZmFsc2UsXG4gICAgICBraWxsZXI6IGZhbHNlLFxuICAgICAgY2FsbGJhY2s6IHtcbiAgICAgICAgb25TaG93OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgYWZ0ZXJTaG93OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBvbkNsb3NlQ2xpY2s6IGZ1bmN0aW9uICgpIHt9XG4gICAgICB9LFxuICAgICAgYnV0dG9uczogZmFsc2VcbiAgICB9XG4gIH1cbiAgc2VyaWFsaXplRm9ybSAoKSB7XG4gICAgJC5mbi5zZXJpYWxpemVGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGRhdGEsIGxvb2t1cCwgcGFyc2UsIHNlbGVjdG9yXG4gICAgICBkYXRhID0gdm9pZCAwXG4gICAgICBsb29rdXAgPSB2b2lkIDBcbiAgICAgIHBhcnNlID0gdm9pZCAwXG4gICAgICBzZWxlY3RvciA9IHZvaWQgMFxuICAgICAgaWYgKHRoaXMubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGRhdGEgPSB7fVxuICAgICAgbG9va3VwID0gZGF0YVxuICAgICAgc2VsZWN0b3IgPSAnOmlucHV0W3R5cGUhPVwiY2hlY2tib3hcIl1bdHlwZSE9XCJyYWRpb1wiXSwgaW5wdXQ6Y2hlY2tlZCdcbiAgICAgIHBhcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsLCBjYXAsIGksIG5hbWVkXG4gICAgICAgICRlbCA9IHZvaWQgMFxuICAgICAgICBjYXAgPSB2b2lkIDBcbiAgICAgICAgaSA9IHZvaWQgMFxuICAgICAgICBuYW1lZCA9IHZvaWQgMFxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIG5hbWVkID0gdGhpcy5uYW1lLnJlcGxhY2UoL1xcWyhbXlxcXV0rKT9cXF0vZywgJywkMScpLnNwbGl0KCcsJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgICBjYXAgPSBuYW1lZC5sZW5ndGggLSAxXG4gICAgICAgICRlbCA9ICQodGhpcylcbiAgICAgICAgaWYgKG5hbWVkWzBdKSB7XG4gICAgICAgICAgaSA9IDBcbiAgICAgICAgICB3aGlsZSAoaSA8IGNhcCkge1xuICAgICAgICAgICAgbG9va3VwID0gbG9va3VwW25hbWVkW2ldXSA9IGxvb2t1cFtuYW1lZFtpXV0gfHwgKG5hbWVkW2kgKyAxXSA9PT0gJycgfHwgbmFtZWRbaSArIDFdID09PSAnMCcgPyBbXSA6IHt9KVxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsb29rdXAubGVuZ3RoICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGxvb2t1cC5wdXNoKCRlbC52YWwoKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9va3VwW25hbWVkW2NhcF1dID0gJGVsLnZhbCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGxvb2t1cCA9IGRhdGFcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXIoc2VsZWN0b3IpLmVhY2gocGFyc2UpXG4gICAgICB0aGlzLmZpbmQoc2VsZWN0b3IpLmVhY2gocGFyc2UpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cbiAgfVxuICBzZXR1cEFqYXggKCkge1xuICAgICQuYWpheFNldHVwKHtcbiAgICAgIHN0YXR1c0NvZGU6IHtcbiAgICAgICAgNDAzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnRm9yYmlkZGVuIENvbnRlbnQuJyxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIDQwNDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ1JvdXRlIG5vdCBmb3VuZC4nLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgNTAwOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnSW50ZXJuYWwgc2VydmVyIGVycm9yLicsXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyb3NzRG9tYWluOiBmYWxzZSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtQ1NSRi1Ub2tlbic6ICQoJ21ldGFbbmFtZT1cIl90XCJdJykuYXR0cignY29udGVudCcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBzZXR1cEZvcm0gKCkge1xuICAgIHZhciAkZm9ybXMgPSAkKCcuYWN0aW9uLWZvcm0nKVxuICAgIHZhciBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgdmFyIGFsbG93ZWRUeXBlcyA9IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ1BBVENIJywgJ0RFTEVURSddXG5cbiAgICAkZm9ybXMuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICRmb3JtID0gJCh0aGlzKVxuICAgICAgJGZvcm0ub24oJ2NsaWNrJywgJ1t0eXBlPXN1Ym1pdF0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICAgIGlmIChmb3JtUHJvY2Vzc2luZykge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnQSBmb3JtIHByb2Nlc3MgaXMgc3RpbGwgcnVubmluZy4nLFxuICAgICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaHR0cFR5cGUgPSAoJGZvcm0uYXR0cignaHR0cC10eXBlJykpLnRvVXBwZXJDYXNlKClcbiAgICAgICAgaWYgKGFsbG93ZWRUeXBlcy5pbmRleE9mKGh0dHBUeXBlKSA9PT0gLTEpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0hUVFAgdHlwZSBub3QgYWxsb3dlZC4nLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghJGZvcm0ucGFyc2xleSgpLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0ludmFsaWQgdmFsdWUgb24gZm9ybS4gQ2hlY2sgYWdhaW4uJyxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlybSgnU3VibWl0PycpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IHRydWVcbiAgICAgICAgICB2YXIgJGlucHV0ID0gJGZvcm0uZmluZCgnOmlucHV0JylcbiAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCB0cnVlKVxuICAgICAgICAgICR0aGlzLmRpc2FibGUodHJ1ZSlcblxuICAgICAgICAgIGxldCBmb3JtRGF0YSA9IHt9XG4gICAgICAgICAgZm9ybURhdGEuZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZUZvcm0oKVxuXG4gICAgICAgICAgJC5lYWNoKCRmb3JtLmRhdGEoKSwgZnVuY3Rpb24gKGksIHYpIHtcbiAgICAgICAgICAgIGlmIChpID09PSAnbmF0aW9uYWxpdHknKSB7XG4gICAgICAgICAgICAgIGlmICgkKCcjaW5wdXROYXRpb25hbGl0eScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9ICQoJyNpbnB1dE5hdGlvbmFsaXR5JykuZGF0YSgnZGRzbGljaycpXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuZGF0YS5uYXRpb25hbGl0eSA9IHZhbHVlLnNlbGVjdGVkRGF0YS52YWx1ZVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCQoJyNpbnB1dEJlbmVmaWNpYXJ5TmF0aW9uYWxpdHknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAkKCcjaW5wdXRCZW5lZmljaWFyeU5hdGlvbmFsaXR5JykuZGF0YSgnZGRzbGljaycpXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuZGF0YS5iZW5lZmljaWFyeV9uYXRpb25hbGl0eSA9IHZhbHVlLnNlbGVjdGVkRGF0YS52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBodHRwVHlwZSxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgdXJsOiAkZm9ybS5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIGZhbHNlKVxuICAgICAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuXG4gICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdzdWNjZXNzJyAmJiBlLnJlZGlyZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShlLnJlZGlyZWN0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIGZhbHNlKVxuICAgICAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERhdGFUYWJsZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB2YXIgJHRhYmxlcyA9ICQoJy50YWJsZS1ncmlkJylcbiAgICB2YXIgJG1vZGFsID0gJCgnI3Nob3dNb2RhbCcpXG4gICAgdmFyICRtb2RhbExvYWRlciA9ICRtb2RhbC5maW5kKCcubG9hZGluZycpXG4gICAgdmFyICRtb2RhbEVycm9yID0gJG1vZGFsLmZpbmQoJy5lcnJvcicpXG4gICAgdmFyICRtb2RhbENvbnRlbnQgPSAkbW9kYWwuZmluZCgnI21vZGFsQ29udGVudCcpXG4gICAgdmFyICRsb2FkZXIgPSAkKCcjcGFnZUxvYWRlcicpXG5cbiAgICAkdGFibGVzLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGFibGUgPSAkKHRoaXMpXG4gICAgICB2YXIgY29sdW1ucyA9IFtdXG5cbiAgICAgICR0YWJsZS5maW5kKCd0aCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgJHRoZWFkID0gJCh0aGlzKVxuICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSB7fVxuICAgICAgICBjb2x1bW5WYWx1ZVsnZGF0YSddID0gJHRoZWFkLmRhdGEoJ2lkJylcblxuICAgICAgICAkLmVhY2goJHRoZWFkLmRhdGEoKSwgZnVuY3Rpb24gKGksIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGkgIT09ICdpZCcpIHtcbiAgICAgICAgICAgIGNvbHVtblZhbHVlW2ldID0gdmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW5WYWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgICR0YWJsZS5kYXRhVGFibGUoe1xuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgICAgICBsYW5ndWFnZTogd2luZG93Ll9kYXRhVGFibGVzTGFuZyxcbiAgICAgICAgc2VhcmNoRGVsYXk6IDEwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIGFqYXg6ICR0YWJsZS5kYXRhKCd1cmwnKSxcbiAgICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgICAgb3JkZXI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgICdkZXNjJ1xuICAgICAgICBdXG4gICAgICB9KVxuXG4gICAgICAkdGFibGUub24oJ2NsaWNrJywgJy5idG4tc2hvdycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgICRtb2RhbExvYWRlci5zaG93KClcbiAgICAgICAgJG1vZGFsRXJyb3IuaGlkZSgpXG4gICAgICAgICRtb2RhbENvbnRlbnQuZW1wdHkoKVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXG4gICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJG1vZGFsTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgJG1vZGFsQ29udGVudC5odG1sKGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAkbW9kYWxMb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAkbW9kYWxFcnJvci5zaG93KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgJHRhYmxlLm9uKCdjbGljaycsICcuYnRuLWRlbGV0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAoY29uZmlybSgnUmVtb3ZlPycpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogZS50eXBlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICR0aGlzLnBhcmVudHMoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG5pbXBvcnQgeyBDb3JlIH0gZnJvbSAnLi9jb3JlJ1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICcuL2RhdGF0YWJsZSdcblxubmV3IENvcmUoKVxubmV3IFdpZGdldCgpXG5uZXcgRGF0YVRhYmxlKClcblxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgJCgnI2xvYWRpbmcnKS5mYWRlT3V0KDQwMCwgJ2xpbmVhcicpXG59LCAzMDApXG5cbiQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gIGJvZHlTaXplcigpXG59KVxuXG5ib2R5U2l6ZXIoKVxucGFnZVRyYW5zaXRpb25zKClcbiQuc2xpZGViYXJzKClcblxuJChcImRpdltpZD0nI2ZpeGVkLXNpZGViYXInXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInN3aXRjaC1vblwiKSkge1xuXG4gICAgdmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKVxuICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKCcjcGFnZS1oZWFkZXInKS5oZWlnaHQoKVxuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gaGVhZGVySGVpZ2h0XG5cbiAgICAkKCcjcGFnZS1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJy5zY3JvbGwtc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcblxuICAgICQoJy5zY3JvbGwtc2lkZWJhcicpLnNsaW1zY3JvbGwoe1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBjb2xvcjogJ3JnYmEoMTU1LCAxNjQsIDE2OSwgMC42OCknLFxuICAgICAgc2l6ZTogJzZweCdcbiAgICB9KVxuXG4gICAgdmFyIGhlYWRlckJnID0gJCgnI3BhZ2UtaGVhZGVyJykuYXR0cignY2xhc3MnKVxuICAgICQoJyNoZWFkZXItbG9nbycpLmFkZENsYXNzKGhlYWRlckJnKVxuXG4gIH0gZWxzZSB7XG5cbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KClcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnI3BhZ2UtaGVhZGVyJykuaGVpZ2h0KClcbiAgICB2YXIgY29udGVudEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIGhlYWRlckhlaWdodFxuXG4gICAgJCgnI3BhZ2Utc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcuc2Nyb2xsLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG5cbiAgICAkKFwiLnNjcm9sbC1zaWRlYmFyXCIpLnNsaW1TY3JvbGwoe1xuICAgICAgZGVzdHJveTogdHJ1ZVxuICAgIH0pXG5cbiAgICAkKCcjaGVhZGVyLWxvZ28nKS5yZW1vdmVDbGFzcygnYmctZ3JhZGllbnQtOScpXG5cbiAgfVxufSlcblxuJCgnLmRyb3Bkb3duJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5maXJzdCgpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVEb3duKClcbn0pXG5cbiQoJy5kcm9wZG93bicpLm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLmZpbmQoJy5kcm9wZG93bi1tZW51JykuZmlyc3QoKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlVXAoKVxufSlcblxuJChmdW5jdGlvbigpIHtcbiAgJCgnI3NpZGViYXItbWVudScpLnN1cGVyY2xpY2soe1xuICAgIGFuaW1hdGlvbjoge1xuICAgICAgaGVpZ2h0OiAnc2hvdydcbiAgICB9LFxuICAgIGFuaW1hdGlvbk91dDoge1xuICAgICAgaGVpZ2h0OiAnaGlkZSdcbiAgICB9XG4gIH0pXG4gIHZhciBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylcbiAgcGF0aCA9IHBhdGhbcGF0aC5sZW5ndGgtMV1cbiAgaWYgKHBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICQoXCIjc2lkZWJhci1tZW51XCIpLmZpbmQoXCJhW2hyZWYkPSdcIiArIHBhdGggKyBcIiddXCIpLmFkZENsYXNzKCdzZkFjdGl2ZScpXG4gICAgJChcIiNzaWRlYmFyLW1lbnVcIikuZmluZChcImFbaHJlZiQ9J1wiICsgcGF0aCArIFwiJ11cIikucGFyZW50cygpLmVxKDMpLnN1cGVyY2xpY2soJ3Nob3cnKVxuICB9XG5cbiAgJCgnI2Nsb3NlLXNpZGViYXInKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2Nsb3NlZC1zaWRlYmFyJylcbiAgICAkKCcuZ2x5cGgtaWNvbicsIHRoaXMpLnRvZ2dsZUNsYXNzKCdpY29uLWFuZ2xlLXJpZ2h0JykudG9nZ2xlQ2xhc3MoJ2ljb24tYW5nbGUtbGVmdCcpXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBib2R5U2l6ZXIoKSB7XG4gIHZhciB3aW5kb3dIZWlnaHQsIGhlYWRlckhlaWdodCwgY29udGVudEhlaWdodFxuXG4gIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2ZpeGVkLXNpZGViYXInKSkge1xuXG4gICAgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpXG4gICAgaGVhZGVySGVpZ2h0ID0gJCgnI3BhZ2UtaGVhZGVyJykuaGVpZ2h0KClcbiAgICBjb250ZW50SGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gaGVhZGVySGVpZ2h0XG4gICAgJCgnI3BhZ2Utc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcuc2Nyb2xsLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnI3BhZ2UtY29udGVudCcpLmNzcygnbWluLWhlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG5cbiAgfSBlbHNlIHtcblxuICAgIHdpbmRvd0hlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpXG4gICAgaGVhZGVySGVpZ2h0ID0gJCgnI3BhZ2UtaGVhZGVyJykuaGVpZ2h0KClcbiAgICBjb250ZW50SGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gaGVhZGVySGVpZ2h0XG4gICAgJCgnI3BhZ2Utc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcuc2Nyb2xsLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnI3BhZ2UtY29udGVudCcpLmNzcygnbWluLWhlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG5cbiAgfVxufVxuXG5mdW5jdGlvbiBwYWdlVHJhbnNpdGlvbnMoKSB7XG4gIHZhciB0cmFuc2l0aW9ucyA9IFsnLnB0LXBhZ2UtbW92ZUZyb21MZWZ0JywgJ3B0LXBhZ2UtbW92ZUZyb21SaWdodCcsICdwdC1wYWdlLW1vdmVGcm9tVG9wJywgJ3B0LXBhZ2UtbW92ZUZyb21Cb3R0b20nLCAncHQtcGFnZS1mYWRlJywgJ3B0LXBhZ2UtbW92ZUZyb21MZWZ0RmFkZScsICdwdC1wYWdlLW1vdmVGcm9tUmlnaHRGYWRlJywgJ3B0LXBhZ2UtbW92ZUZyb21Ub3BGYWRlJywgJ3B0LXBhZ2UtbW92ZUZyb21Cb3R0b21GYWRlJywgJ3B0LXBhZ2Utc2NhbGVVcCcsICdwdC1wYWdlLXNjYWxlVXBDZW50ZXInLCAncHQtcGFnZS1mbGlwSW5MZWZ0JywgJ3B0LXBhZ2UtZmxpcEluUmlnaHQnLCAncHQtcGFnZS1mbGlwSW5Cb3R0b20nLCAncHQtcGFnZS1mbGlwSW5Ub3AnLCAncHQtcGFnZS1yb3RhdGVQdWxsUmlnaHQnLCAncHQtcGFnZS1yb3RhdGVQdWxsTGVmdCcsICdwdC1wYWdlLXJvdGF0ZVB1bGxUb3AnLCAncHQtcGFnZS1yb3RhdGVQdWxsQm90dG9tJywgJ3B0LXBhZ2Utcm90YXRlVW5mb2xkTGVmdCcsICdwdC1wYWdlLXJvdGF0ZVVuZm9sZFJpZ2h0JywgJ3B0LXBhZ2Utcm90YXRlVW5mb2xkVG9wJywgJ3B0LXBhZ2Utcm90YXRlVW5mb2xkQm90dG9tJ11cbiAgZm9yICh2YXIgaSBpbiB0cmFuc2l0aW9ucykge1xuICAgIHZhciB0cmFuc2l0aW9uX25hbWUgPSB0cmFuc2l0aW9uc1tpXVxuICAgIGlmICgkKCcuYWRkLXRyYW5zaXRpb24nKS5oYXNDbGFzcyh0cmFuc2l0aW9uX25hbWUpKSB7XG4gICAgICAkKCcuYWRkLXRyYW5zaXRpb24nKS5hZGRDbGFzcyh0cmFuc2l0aW9uX25hbWUgKyAnLWluaXQgcGFnZS10cmFuc2l0aW9uJylcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5hZGQtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKHRyYW5zaXRpb25fbmFtZSArICcgJyArIHRyYW5zaXRpb25fbmFtZSArICctaW5pdCBwYWdlLXRyYW5zaXRpb24nKVxuICAgICAgfSwgMTIwMClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuXG5pZiAoJCgnI2V4Y2hhbmdlUmF0ZUNoYXJ0JykubGVuZ3RoKSB7XG4gICQud2hlbihcbiAgICAkLmdldFNjcmlwdCh3aW5kb3cuX3Jvb3QgKyAnL2xpYi9jaGFydC1jb3JlLmpzJyksXG4gICAgJC5EZWZlcnJlZChmdW5jdGlvbiAoZGVmZXJyZWQpIHtcbiAgICAgICQoZGVmZXJyZWQucmVzb2x2ZSlcbiAgICB9KVxuICApLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleGNoYWdlUmF0ZXMgPSB3aW5kb3cuX2V4Y2hhbmdlUmF0ZVxuICAgIHZhciBsYWJlbHMgPSBbXVxuICAgIHZhciBjaGFydERhdGFCdXkgPSBbXVxuICAgIHZhciBjaGFydERhdGFTZWxsID0gW11cblxuICAgICQuZWFjaChleGNoYWdlUmF0ZXMsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgIGxhYmVscy5wdXNoKGluZGV4ICsgXCIgKFwiICsgdmFsdWUuY3VycmVuY3kgKyBcIilcIilcbiAgICAgIGNoYXJ0RGF0YUJ1eS5wdXNoKHZhbHVlLmJ1eSlcbiAgICAgIGNoYXJ0RGF0YVNlbGwucHVzaCh2YWx1ZS5zZWxsKVxuICAgIH0pXG4gICAgdmFyIGNoYXJ0RGF0YSA9IHtcbiAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgIGxhYmVsOiAnQnV5JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsXG4gICAgICAgICAgZGF0YTogY2hhcnREYXRhQnV5LFxuICAgICAgICAgIGZpbGw6IGZhbHNlXG4gICAgICAgIH0se1xuICAgICAgICAgIGxhYmVsOiAnU2VsbCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDU0LCAxNjIsIDIzNSknLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDU0LCAxNjIsIDIzNSknLFxuICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YVNlbGwsXG4gICAgICAgICAgZmlsbDogZmFsc2VcbiAgICAgICAgfV0sXG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6e1xuICAgICAgICAgIGRpc3BsYXk6dHJ1ZSxcbiAgICAgICAgICB0ZXh0OiAnRXhjaGFuZ2UgUmF0ZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgbW9kZTogJ2luZGV4JyxcbiAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIG1vZGU6ICduZWFyZXN0JyxcbiAgICAgICAgICBpbnRlcnNlY3Q6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ0NvdW50cnknXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV0sXG4gICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ0JVWS9TRUxMIFZhbHVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgfVxuICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4Y2hhbmdlUmF0ZUNoYXJ0XCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguaGVpZ2h0ID0gNTAwO1xuICAgIG5ldyBDaGFydChjdHgsIGNoYXJ0RGF0YSlcbiAgfSkuZmFpbChmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KVxuICB9KVxufVxuIiwiZXhwb3J0IGNsYXNzIFdpZGdldCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAkKCdhW2hyZWY9XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9KVxuICAgIFxuICAgICQoXCIudG9kby1ib3ggbGkgaW5wdXRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCd0b2RvLWRvbmUnKVxuICAgIH0pXG4gICAgXG4gICAgdmFyIG92ZXJhbGxXaWR0aCA9IDBcbiAgICAkKCcudGltZWxpbmUtc2Nyb2xsIC50bC1yb3cnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtKSB7XG4gICAgICB2YXIgJGVsZW0gPSAkKGVsZW0pXG4gICAgICBvdmVyYWxsV2lkdGggKz0gJGVsZW0ub3V0ZXJXaWR0aCgpICsgcGFyc2VJbnQoJGVsZW0uY3NzKCdtYXJnaW4tbGVmdCcpLCAxMCkgKyBwYXJzZUludCgkZWxlbS5jc3MoJ21hcmdpbi1yaWdodCcpLCAxMClcbiAgICB9KVxuICAgICQoJy50aW1lbGluZS1ob3Jpem9udGFsJywgdGhpcykud2lkdGgob3ZlcmFsbFdpZHRoKVxuXG4gICAgJCgnLmlucHV0LXN3aXRjaC1hbHQnKS5zaW1wbGVDaGVja2JveCgpXG5cbiAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0uY3VzdG9tLWNoZWNrYm94JykudW5pZm9ybSgpXG4gICAgJCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdLmN1c3RvbS1yYWRpbycpLnVuaWZvcm0oKVxuICAgICQoJy5jdXN0b20tc2VsZWN0JykudW5pZm9ybSgpXG5cbiAgICAkKCcuc2VsZWN0b3InKS5hcHBlbmQoJzxpIGNsYXNzPVwiZ2x5cGgtaWNvbiBpY29uLWNhcmV0LWRvd25cIj48L2k+JylcblxuICAgICQoJy5jaGVja2VyIHNwYW4nKS5hcHBlbmQoJzxpIGNsYXNzPVwiZ2x5cGgtaWNvbiBpY29uLWNoZWNrXCI+PC9pPicpXG4gICAgJCgnLnJhZGlvIHNwYW4nKS5hcHBlbmQoJzxpIGNsYXNzPVwiZ2x5cGgtaWNvbiBpY29uLWNpcmNsZVwiPjwvaT4nKVxuICAgIFxuICAgICQoJy5zY3JvbGxhYmxlLXNsaW0nKS5zbGltU2Nyb2xsKHtcbiAgICAgIGNvbG9yOiAnIzhkYTBhYScsXG4gICAgICBzaXplOiAnMTBweCcsXG4gICAgICBhbHdheXNWaXNpYmxlOiB0cnVlXG4gICAgfSlcbiAgICBcbiAgICAkKCcuc2Nyb2xsYWJsZS1zbGltLXNpZGViYXInKS5zbGltU2Nyb2xsKHtcbiAgICAgIGNvbG9yOiAnIzhkYTBhYScsXG4gICAgICBzaXplOiAnMTBweCcsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGFsd2F5c1Zpc2libGU6IHRydWVcbiAgICB9KVxuICAgIFxuICAgICQoJy5zY3JvbGxhYmxlLXNsaW0tYm94Jykuc2xpbVNjcm9sbCh7XG4gICAgICBjb2xvcjogJyM4ZGEwYWEnLFxuICAgICAgc2l6ZTogJzZweCcsXG4gICAgICBhbHdheXNWaXNpYmxlOiBmYWxzZVxuICAgIH0pXG5cbiAgICAkKCcubG9hZGluZy1idXR0b24nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBidG4gPSAkKHRoaXMpXG4gICAgICBidG4uYnV0dG9uKCdsb2FkaW5nJylcbiAgICB9KVxuXG4gICAgJCgnLnRvb2x0aXAtYnV0dG9uJykudG9vbHRpcCh7XG4gICAgICBjb250YWluZXI6ICdib2R5J1xuICAgIH0pXG4gICAgXG4gICAgJCgnLmFsZXJ0LWNsb3NlLWJ0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZU91dERvd24nKVxuICAgIH0pXG4gICAgXG4gICAgJCgnLnBvcG92ZXItYnV0dG9uJykucG9wb3Zlcih7XG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGh0bWw6IHRydWUsXG4gICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICBjb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRhdGFJRCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpXG4gICAgICAgIHJldHVybiAkKGRhdGFJRCkuaHRtbCgpXG4gICAgICB9XG4gICAgfSkuY2xpY2soZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH0pXG5cbiAgICAkKCcucG9wb3Zlci1idXR0b24tZGVmYXVsdCcpLnBvcG92ZXIoe1xuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICBodG1sOiB0cnVlLFxuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfSkuY2xpY2soZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH0pXG5cbiAgICAkKCcuZGF0ZXBpY2tlcicpLmJzZGF0ZXBpY2tlcih7XG4gICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJ1xuICAgIH0pXG4gICAgJCgnLmlucHV0LXN3aXRjaCcpLmJvb3RzdHJhcFN3aXRjaCgpXG5cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbHNjcmVlbi1idG4nKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxzY3JlZW4tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY3JlZW5mdWxsLmVuYWJsZWQpIHtcbiAgICAgICAgICBzY3JlZW5mdWxsLnJlcXVlc3QoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufSJdfQ==
