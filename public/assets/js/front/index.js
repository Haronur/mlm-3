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

new _core.Core(); /* eslint-disable no-new */

new _widget.Widget();
new _datatable.DataTable();
new _register.Register();
new _shares.Shares();

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

},{"./core":"/home/asus/web/web4/resources/assets/js/front/core.js","./datatable":"/home/asus/web/web4/resources/assets/js/front/datatable.js","./register":"/home/asus/web/web4/resources/assets/js/front/register.js","./shares":"/home/asus/web/web4/resources/assets/js/front/shares.js","./widget":"/home/asus/web/web4/resources/assets/js/front/widget.js"}],"/home/asus/web/web4/resources/assets/js/front/register.js":[function(require,module,exports){
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
};

},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}]},{},["/home/asus/web/web4/resources/assets/js/front/index.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9mcm9udC9jb3JlLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9mcm9udC9kYXRhdGFibGUuanMiLCJyZXNvdXJjZXMvYXNzZXRzL2pzL2Zyb250L2luZGV4LmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9mcm9udC9yZWdpc3Rlci5qcyIsInJlc291cmNlcy9hc3NldHMvanMvZnJvbnQvc2hhcmVzLmpzIiwicmVzb3VyY2VzL2Fzc2V0cy9qcy9mcm9udC93aWRnZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUNGYSxlLEFBQUEsbUJBQ1g7a0JBQWU7d0NBQ2I7O1NBQUEsQUFBSyxBQUNMO1NBQUEsQUFBSyxBQUNMO1NBQUEsQUFBSyxBQUNMO1NBQUEsQUFBSyxBQUNMO1NBQUEsQUFBSyxBQUNOOzs7Ozs4QkFDVSxBQUNUO1FBQUEsQUFBRSxHQUFGLEFBQUs7aUJBQ00saUJBQUEsQUFBVSxPQUFPLEFBQ3hCO3NCQUFPLEFBQUssS0FBSyxZQUFZLEFBQzNCO2dCQUFBLEFBQUksT0FBTyxBQUNUO2dCQUFBLEFBQUUsTUFBRixBQUFRLEtBQVIsQUFBYSxRQUFiLEFBQXFCLEFBQ3JCO2dCQUFBLEFBQUUsTUFBRixBQUFRLEtBQVIsQUFBYSxZQUFiLEFBQXlCLFlBQXpCLEFBQXFDLEtBQXJDLEFBQTBDLGtCQUExQyxBQUE0RCxBQUM3RDtBQUhELG1CQUdPLEFBQ0w7Z0JBQUEsQUFBRSxNQUFGLEFBQVEsS0FBUixBQUFhLFFBQWIsQUFBcUIsQUFDckI7Z0JBQUEsQUFBRSxNQUFGLEFBQVEsV0FBUixBQUFtQixZQUFuQixBQUErQixLQUEvQixBQUFvQyxrQkFBcEMsQUFBc0QsQUFDdkQ7QUFDRjtBQVJELEFBQU8sQUFTUixXQVRRO0FBRlgsQUFBWSxBQWFiO0FBYmEsQUFDVjs7OztrQ0FhVyxBQUNiO1FBQUEsQUFBRSxLQUFGLEFBQU87Z0JBQVcsQUFDUixBQUNSO2VBRmdCLEFBRVQsQUFDUDtjQUhnQixBQUdWLEFBQ047Y0FKZ0IsQUFJVixBQUNOO3NCQUxnQixBQUtGLEFBQ2Q7ZUFOZ0IsQUFNVCxBQUNQO29CQVBnQixBQU9KLEFBQ1o7a0JBUmdCLEFBUU4sQUFDVjtpQkFUZ0IsQUFTUCxBQUNUOztnQkFBVyxBQUNILEFBQ047aUJBRlMsQUFFRixBQUNQO2tCQUhTLEFBR0QsQUFDUjtpQkFkYyxBQVVMLEFBSUYsQUFFVDtBQU5XLEFBQ1Q7bUJBS1MsQ0FoQkssQUFnQkwsQUFBQyxBQUNaO2VBakJnQixBQWlCVCxBQUNQO2dCQWxCZ0IsQUFrQlIsQUFDUjs7a0JBQ1Usa0JBQVksQUFBRSxDQURkLEFBRVI7cUJBQVcscUJBQVksQUFBRSxDQUZqQixBQUdSO21CQUFTLG1CQUFZLEFBQUUsQ0FIZixBQUlSO3NCQUFZLHNCQUFZLEFBQUUsQ0FKbEIsQUFLUjt3QkFBYyx3QkFBWSxBQUFFLENBeEJkLEFBbUJOLEFBT1Y7QUFQVSxBQUNSO2lCQXBCSixBQUFrQixBQTBCUCxBQUVaO0FBNUJtQixBQUNoQjs7OztvQ0E0QmEsQUFDZjtRQUFBLEFBQUUsR0FBRixBQUFLLGdCQUFnQixZQUFZLEFBQy9CO1lBQUEsQUFBSSxNQUFKLEFBQVUsUUFBVixBQUFrQixPQUFsQixBQUF5QixBQUN6QjtlQUFPLEtBQVAsQUFBWSxBQUNaO2lCQUFTLEtBQVQsQUFBYyxBQUNkO2dCQUFRLEtBQVIsQUFBYSxBQUNiO21CQUFXLEtBQVgsQUFBZ0IsQUFDaEI7WUFBSSxLQUFBLEFBQUssU0FBVCxBQUFrQixHQUFHLEFBQ25CO2lCQUFBLEFBQU8sQUFDUjtBQUNEO2VBQUEsQUFBTyxBQUNQO2lCQUFBLEFBQVMsQUFDVDttQkFBQSxBQUFXLEFBQ1g7Z0JBQVEsaUJBQVksQUFDbEI7Y0FBQSxBQUFJLEtBQUosQUFBUyxLQUFULEFBQWMsR0FBZCxBQUFpQixBQUNqQjtnQkFBTSxLQUFOLEFBQVcsQUFDWDtnQkFBTSxLQUFOLEFBQVcsQUFDWDtjQUFJLEtBQUosQUFBUyxBQUNUO2tCQUFRLEtBQVIsQUFBYSxBQUNiO2NBQUksS0FBSixBQUFTLFVBQVUsQUFDakI7QUFDRDtBQUNEO3VCQUFRLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0Isa0JBQWxCLEFBQW9DLE9BQXBDLEFBQTJDLE1BQTNDLEFBQWlELElBQXpELEFBQVEsQUFBc0Q7QUFBdEQsWUFDUixNQUFNLE1BQUEsQUFBTSxTQUFaLEFBQXFCLEFBQ3JCO2dCQUFNLEVBQU4sQUFBTSxBQUFFLEFBQ1I7Y0FBSSxNQUFKLEFBQUksQUFBTSxJQUFJLEFBQ1o7Z0JBQUEsQUFBSSxBQUNKO21CQUFPLElBQVAsQUFBVyxLQUFLLEFBQ2Q7dUJBQVMsT0FBTyxNQUFQLEFBQU8sQUFBTSxNQUFNLE9BQU8sTUFBUCxBQUFPLEFBQU0sUUFBUSxNQUFNLElBQU4sQUFBVSxPQUFWLEFBQWlCLE1BQU0sTUFBTSxJQUFOLEFBQVUsT0FBakMsQUFBd0MsTUFBeEMsQUFBOEMsS0FBL0YsQUFBNEIsQUFBd0UsQUFDcEc7QUFDRDtBQUNEO2dCQUFJLE9BQUEsQUFBTyxXQUFXLEtBQXRCLEFBQTJCLEdBQUcsQUFDNUI7cUJBQUEsQUFBTyxLQUFLLElBQVosQUFBWSxBQUFJLEFBQ2pCO0FBRkQsbUJBRU8sQUFDTDtxQkFBTyxNQUFQLEFBQU8sQUFBTSxRQUFRLElBQXJCLEFBQXFCLEFBQUksQUFDMUI7QUFDRDtxQkFBQSxBQUFTLEFBQ1Y7QUFDRjtBQXpCRCxBQTBCQTthQUFBLEFBQUssT0FBTCxBQUFZLFVBQVosQUFBc0IsS0FBdEIsQUFBMkIsQUFDM0I7YUFBQSxBQUFLLEtBQUwsQUFBVSxVQUFWLEFBQW9CLEtBQXBCLEFBQXlCLEFBQ3pCO2VBQUEsQUFBTyxBQUNSO0FBekNELEFBMENEOzs7O2dDQUNZLEFBQ1g7UUFBQSxBQUFFOztlQUVPLFdBQUEsQUFBVSxHQUFHLEFBQ2hCO21CQUFPLEFBQ0w7b0JBREcsQUFDRyxBQUNOO29CQUZGLEFBQUssQUFFRyxBQUVSO0FBSks7bUJBSUwsQUFBTyxBQUNSO0FBUFMsQUFRVjtlQUFLLFdBQUEsQUFBVSxHQUFHLEFBQ2hCO21CQUFPLEFBQ0w7b0JBREcsQUFDRyxBQUNOO29CQUZGLEFBQUssQUFFRyxBQUVSO0FBSks7bUJBSUwsQUFBTyxBQUNSO0FBZFMsQUFlVjtlQUFLLFdBQUEsQUFBVSxHQUFHLEFBQ2hCO21CQUFPLEFBQ0w7b0JBREcsQUFDRyxBQUNOO29CQUZGLEFBQUssQUFFRyxBQUVSO0FBSks7bUJBSUwsQUFBTyxBQUNSO0FBdEJPLEFBQ0UsQUF1Qlo7QUF2QlksQUFDVjtxQkFGUSxBQXdCRyxBQUNiO2tCQXpCVSxBQXlCQSxBQUNWO2VBMUJVLEFBMEJILEFBQ1A7OzBCQUNrQixFQUFBLEFBQUUsbUJBQUYsQUFBcUIsS0E1QnpDLEFBQVksQUEyQkQsQUFDUyxBQUEwQixBQUcvQztBQUpZLEFBQ1A7QUE1QlEsQUFDVjs7OztnQ0ErQlMsQUFDWDtVQUFJLFNBQVMsRUFBYixBQUFhLEFBQUUsQUFDZjtVQUFJLGlCQUFKLEFBQXFCLEFBQ3JCO1VBQUksZUFBZSxDQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVIsQUFBZ0IsT0FBaEIsQUFBdUIsU0FBMUMsQUFBbUIsQUFBZ0MsQUFFbkQ7O2FBQUEsQUFBTyxLQUFLLFVBQUEsQUFBVSxHQUFHLEFBQ3ZCO1lBQUksUUFBUSxFQUFaLEFBQVksQUFBRSxBQUNkO2NBQUEsQUFBTSxHQUFOLEFBQVMsU0FBVCxBQUFrQixpQkFBaUIsVUFBQSxBQUFVLEdBQUcsQUFDOUM7WUFBQSxBQUFFLEFBQ0Y7Y0FBSSxRQUFRLEVBQVosQUFBWSxBQUFFLEFBRWQ7O2NBQUEsQUFBSSxnQkFBZ0IsQUFDbEI7bUJBQU8sQUFDTDtvQkFERyxBQUNHLEFBQ047b0JBRkYsQUFBSyxBQUVHLEFBRVI7QUFKSzttQkFJTCxBQUFPLEFBQ1I7QUFFRDs7Y0FBSSxXQUFZLE1BQUEsQUFBTSxLQUFQLEFBQUMsQUFBVyxhQUEzQixBQUFlLEFBQTBCLEFBQ3pDO2NBQUksYUFBQSxBQUFhLFFBQWIsQUFBcUIsY0FBYyxDQUF2QyxBQUF3QyxHQUFHLEFBQ3pDO21CQUFPLEFBQ0w7b0JBREcsQUFDRyxBQUNOO29CQUZGLEFBQUssQUFFRyxBQUVSO0FBSks7bUJBSUwsQUFBTyxBQUNSO0FBRUQ7O2NBQUksQ0FBQyxNQUFBLEFBQU0sVUFBWCxBQUFLLEFBQWdCLFlBQVksQUFDL0I7bUJBQU8sQUFDTDtvQkFERyxBQUNHLEFBQ047b0JBRkYsQUFBSyxBQUVHLEFBRVI7QUFKSzttQkFJTCxBQUFPLEFBQ1I7QUFFRDs7Y0FBSSxRQUFKLEFBQUksQUFBUSxZQUFZLEFBQUU7QUFDeEI7NkJBQUEsQUFBaUIsQUFDakI7Z0JBQUksU0FBUyxNQUFBLEFBQU0sS0FBbkIsQUFBYSxBQUFXLEFBQ3hCO21CQUFBLEFBQU8sS0FBUCxBQUFZLFlBQVosQUFBd0IsQUFDeEI7a0JBQUEsQUFBTSxRQUFOLEFBQWMsQUFFZDs7Z0JBQUksV0FBSixBQUFlLEFBQ2Y7cUJBQUEsQUFBUyxPQUFPLE1BQWhCLEFBQWdCLEFBQU0sQUFFdEI7O2NBQUEsQUFBRSxLQUFLLE1BQVAsQUFBTyxBQUFNLFFBQVEsVUFBQSxBQUFVLEdBQVYsQUFBYSxHQUFHLEFBQ25DO2tCQUFJLE1BQUosQUFBVSxlQUFlLEFBQ3ZCO29CQUFJLEVBQUEsQUFBRSxxQkFBTixBQUEyQixRQUFRLEFBQ2pDO3NCQUFJLFFBQVEsRUFBQSxBQUFFLHFCQUFGLEFBQXVCLEtBQW5DLEFBQVksQUFBNEIsQUFDeEM7MkJBQUEsQUFBUyxLQUFULEFBQWMsY0FBYyxNQUFBLEFBQU0sYUFBbEMsQUFBK0MsQUFDaEQ7QUFFRDs7b0JBQUksRUFBQSxBQUFFLGdDQUFOLEFBQXNDLFFBQVEsQUFDNUM7c0JBQUksU0FBUSxFQUFBLEFBQUUsZ0NBQUYsQUFBa0MsS0FBOUMsQUFBWSxBQUF1QyxBQUNuRDsyQkFBQSxBQUFTLEtBQVQsQUFBYywwQkFBMEIsT0FBQSxBQUFNLGFBQTlDLEFBQTJELEFBQzVEO0FBQ0Y7QUFDRjtBQVpELEFBY0E7O2NBQUEsQUFBRTtvQkFBSyxBQUNDLEFBQ047b0JBRkssQUFFQyxBQUNOO21CQUFLLE1BQUEsQUFBTSxLQUhOLEFBR0EsQUFBVyxBQUNoQjt1QkFBUyxpQkFBQSxBQUFVLEdBQUcsQUFDcEI7dUJBQU8sQUFDTDt3QkFBTSxFQURILEFBQ0ssQUFDUjt3QkFBTSxFQUZSLEFBQUssQUFFSyxBQUVWO0FBSks7aUNBSUwsQUFBaUIsQUFDakI7dUJBQUEsQUFBTyxLQUFQLEFBQVksWUFBWixBQUF3QixBQUN4QjtzQkFBQSxBQUFNLFFBQU4sQUFBYyxBQUVkOztvQkFBSSxFQUFBLEFBQUUsU0FBRixBQUFXLGFBQWEsRUFBQSxBQUFFLGFBQTlCLEFBQTJDLFdBQVcsQUFDcEQ7eUJBQUEsQUFBTyxTQUFQLEFBQWdCLFFBQVEsRUFBeEIsQUFBMEIsQUFDM0I7QUFDRjtBQWhCSSxBQWlCTDtxQkFBTyxlQUFBLEFBQVUsS0FBVixBQUFlLFFBQWYsQUFBdUIsR0FBRyxBQUMvQjt1QkFBTyxBQUNMO3dCQUFNLElBREgsQUFDTyxBQUNWO3dCQUZGLEFBQUssQUFFRyxBQUVSO0FBSks7aUNBSUwsQUFBaUIsQUFDakI7dUJBQUEsQUFBTyxLQUFQLEFBQVksWUFBWixBQUF3QixBQUN4QjtzQkFBQSxBQUFNLFFBQU4sQUFBYyxBQUNmO0FBekJILEFBQU8sQUEyQlI7QUEzQlEsQUFDTDtBQTJCTDtBQWhGRCxBQWlGRDtBQW5GRCxBQW9GRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJLEFDM05VLG9CLEFBQUEsWUFDWCxxQkFBZTtzQ0FDYjs7TUFBSSxVQUFVLEVBQWQsQUFBYyxBQUFFLEFBQ2hCO01BQUksU0FBUyxFQUFiLEFBQWEsQUFBRSxBQUNmO01BQUksZUFBZSxPQUFBLEFBQU8sS0FBMUIsQUFBbUIsQUFBWSxBQUMvQjtNQUFJLGNBQWMsT0FBQSxBQUFPLEtBQXpCLEFBQWtCLEFBQVksQUFDOUI7TUFBSSxnQkFBZ0IsT0FBQSxBQUFPLEtBQTNCLEFBQW9CLEFBQVksQUFDaEM7TUFBSSxVQUFVLEVBQWQsQUFBYyxBQUFFLEFBRWhCOztVQUFBLEFBQVEsS0FBSyxVQUFBLEFBQVUsR0FBRyxBQUN4QjtRQUFJLFNBQVMsRUFBYixBQUFhLEFBQUUsQUFDZjtRQUFJLFVBQUosQUFBYyxBQUVkOztXQUFBLEFBQU8sS0FBUCxBQUFZLE1BQVosQUFBa0IsS0FBSyxZQUFZLEFBQ2pDO1VBQUksU0FBUyxFQUFiLEFBQWEsQUFBRSxBQUNmO1VBQUksY0FBSixBQUFrQixBQUNsQjtrQkFBQSxBQUFZLFVBQVUsT0FBQSxBQUFPLEtBQTdCLEFBQXNCLEFBQVksQUFFbEM7O1FBQUEsQUFBRSxLQUFLLE9BQVAsQUFBTyxBQUFPLFFBQVEsVUFBQSxBQUFVLEdBQVYsQUFBYSxPQUFPLEFBQ3hDO1lBQUksTUFBSixBQUFVLE1BQU0sQUFDZDtzQkFBQSxBQUFZLEtBQVosQUFBaUIsQUFDbEI7QUFDRjtBQUpELEFBS0E7Y0FBQSxBQUFRLEtBQVIsQUFBYSxBQUNkO0FBWEQsQUFhQTs7V0FBQSxBQUFPO2tCQUFVLEFBQ0gsQUFDWjtrQkFGZSxBQUVILEFBQ1o7Z0JBQVUsT0FISyxBQUdFLEFBQ2pCO21CQUplLEFBSUYsQUFDYjtrQkFMZSxBQUtILEFBQ1o7WUFBTSxPQUFBLEFBQU8sS0FORSxBQU1ULEFBQVksQUFDbEI7ZUFQZSxBQU9OLEFBQ1Q7YUFBTyxDQUFBLEFBQ0wsR0FUSixBQUFpQixBQVFSLEFBRUwsQUFJSjtBQWRpQixBQUNmOztXQWFGLEFBQU8sR0FBUCxBQUFVLFNBQVYsQUFBbUIsYUFBYSxVQUFBLEFBQVUsR0FBRyxBQUMzQztRQUFBLEFBQUUsQUFDRjtVQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDttQkFBQSxBQUFhLEFBQ2I7a0JBQUEsQUFBWSxBQUNaO29CQUFBLEFBQWMsQUFDZDtRQUFBLEFBQUU7Y0FBSyxBQUNDLEFBQ047a0JBRkssQUFFSyxBQUNWO2FBQUssTUFBQSxBQUFNLEtBSE4sQUFHQSxBQUFXLEFBQ2hCO2lCQUFTLGlCQUFBLEFBQVUsR0FBRyxBQUNwQjt1QkFBQSxBQUFhLEFBQ2I7d0JBQUEsQUFBYyxLQUFkLEFBQW1CLEFBQ3BCO0FBUEksQUFRTDtlQUFPLGVBQUEsQUFBVSxLQUFWLEFBQWUsUUFBZixBQUF1QixHQUFHLEFBQy9CO3VCQUFBLEFBQWEsQUFDYjtzQkFBQSxBQUFZLEFBQ1o7a0JBQUEsQUFBUSxJQUFJLElBQVosQUFBZ0IsQUFDakI7QUFaSCxBQUFPLEFBY1I7QUFkUSxBQUNMO0FBUEosQUFzQkE7O1dBQUEsQUFBTyxHQUFQLEFBQVUsU0FBVixBQUFtQixlQUFlLFVBQUEsQUFBVSxHQUFHLEFBQzdDO1FBQUEsQUFBRSxBQUNGO1VBQUksUUFBSixBQUFJLEFBQVEsWUFBWSxBQUFFO0FBQ3hCO2dCQUFBLEFBQVEsQUFDUjtZQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtVQUFBLEFBQUU7Z0JBQUssQUFDQyxBQUNOO2VBQUssTUFBQSxBQUFNLEtBRk4sQUFFQSxBQUFXLEFBQ2hCO21CQUFTLGlCQUFBLEFBQVUsR0FBRyxBQUNwQjtvQkFBQSxBQUFRLEFBQ1I7bUJBQU8sQUFDTDtvQkFBTSxFQURILEFBQ0ssQUFDUjtvQkFBTSxFQUZSLEFBQUssQUFFSyxBQUVWO0FBSks7Z0JBSUQsRUFBQSxBQUFFLFNBQU4sQUFBZSxXQUFXLEFBQ3hCO29CQUFBLEFBQU0sUUFBTixBQUFjLE1BQWQsQUFBb0IsQUFDckI7QUFDRjtBQVpJLEFBYUw7aUJBQU8sZUFBQSxBQUFVLEtBQVYsQUFBZSxRQUFmLEFBQXVCLEdBQUcsQUFDL0I7b0JBQUEsQUFBUSxBQUNSO21CQUFPLEFBQ0w7b0JBQU0sSUFESCxBQUNPLEFBQ1Y7b0JBRkYsQUFBSyxBQUVHLEFBRVQ7QUFKTTtBQWZULEFBQU8sQUFxQlI7QUFyQlEsQUFDTDtBQXFCTDtBQTNCRCxBQTRCRDtBQWpGRCxBQWtGRDtBOzs7OztBQ3pGSDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxVLFFBUkE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxZQUFXLEFBQ3BCO0lBQUEsQUFBRSxZQUFGLEFBQWMsUUFBZCxBQUFzQixLQUF0QixBQUEyQixBQUM1QjtBQUZELEdBQUEsQUFFRzs7QUFFSCxFQUFBLEFBQUUsUUFBRixBQUFVLEdBQVYsQUFBYSxVQUFVLFlBQVcsQUFDaEM7QUFDRDtBQUZEOztBQUlBO0FBQ0E7QUFDQSxFQUFBLEFBQUU7O0FBRUYsRUFBQSxBQUFFLDRCQUFGLEFBQThCLEdBQTlCLEFBQWlDLFNBQVMsWUFBVyxBQUVuRDs7TUFBSSxFQUFBLEFBQUUsTUFBRixBQUFRLFNBQVosQUFBSSxBQUFpQixjQUFjLEFBRWpDOztRQUFJLGVBQWUsRUFBQSxBQUFFLFFBQXJCLEFBQW1CLEFBQVUsQUFDN0I7UUFBSSxlQUFlLEVBQUEsQUFBRSxnQkFBckIsQUFBbUIsQUFBa0IsQUFDckM7UUFBSSxnQkFBZ0IsZUFBcEIsQUFBbUMsQUFFbkM7O01BQUEsQUFBRSxpQkFBRixBQUFtQixJQUFuQixBQUF1QixVQUF2QixBQUFpQyxBQUNqQztNQUFBLEFBQUUsbUJBQUYsQUFBcUIsSUFBckIsQUFBeUIsVUFBekIsQUFBbUMsQUFFbkM7O01BQUEsQUFBRSxtQkFBRixBQUFxQjtjQUFXLEFBQ3RCLEFBQ1I7YUFGOEIsQUFFdkIsQUFDUDtZQUhGLEFBQWdDLEFBR3hCLEFBR1I7QUFOZ0MsQUFDOUI7O1FBS0UsV0FBVyxFQUFBLEFBQUUsZ0JBQUYsQUFBa0IsS0FBakMsQUFBZSxBQUF1QixBQUN0QztNQUFBLEFBQUUsZ0JBQUYsQUFBa0IsU0FBbEIsQUFBMkIsQUFFNUI7QUFsQkQsU0FrQk8sQUFFTDs7UUFBSSxlQUFlLEVBQUEsQUFBRSxVQUFyQixBQUFtQixBQUFZLEFBQy9CO1FBQUksZUFBZSxFQUFBLEFBQUUsZ0JBQXJCLEFBQW1CLEFBQWtCLEFBQ3JDO1FBQUksZ0JBQWdCLGVBQXBCLEFBQW1DLEFBRW5DOztNQUFBLEFBQUUsaUJBQUYsQUFBbUIsSUFBbkIsQUFBdUIsVUFBdkIsQUFBaUMsQUFDakM7TUFBQSxBQUFFLG1CQUFGLEFBQXFCLElBQXJCLEFBQXlCLFVBQXpCLEFBQW1DLEFBRW5DOztNQUFBLEFBQUUsbUJBQUYsQUFBcUI7ZUFBckIsQUFBZ0MsQUFDckIsQUFHWDtBQUpnQyxBQUM5Qjs7TUFHRixBQUFFLGdCQUFGLEFBQWtCLFlBQWxCLEFBQThCLEFBRS9CO0FBQ0Y7QUFwQ0Q7O0FBc0NBLEVBQUEsQUFBRSxhQUFGLEFBQWUsR0FBZixBQUFrQixvQkFBb0IsWUFBWSxBQUNoRDtJQUFBLEFBQUUsTUFBRixBQUFRLEtBQVIsQUFBYSxrQkFBYixBQUErQixRQUEvQixBQUF1QyxLQUF2QyxBQUE0QyxNQUE1QyxBQUFrRCxNQUFsRCxBQUF3RCxBQUN6RDtBQUZEOztBQUlBLEVBQUEsQUFBRSxhQUFGLEFBQWUsR0FBZixBQUFrQixvQkFBb0IsWUFBWSxBQUNoRDtJQUFBLEFBQUUsTUFBRixBQUFRLEtBQVIsQUFBYSxrQkFBYixBQUErQixRQUEvQixBQUF1QyxLQUF2QyxBQUE0QyxNQUE1QyxBQUFrRCxNQUFsRCxBQUF3RCxBQUN6RDtBQUZEOztBQUlBLEVBQUUsWUFBVyxBQUNYO0lBQUEsQUFBRSxpQkFBRixBQUFtQjs7Y0FBVyxBQUNqQixBQUNELEFBRVY7QUFIVyxBQUNUOztjQUZKLEFBQThCLEFBSWQsQUFDSixBQUdaO0FBSmdCLEFBQ1o7QUFMMEIsQUFDNUI7TUFPRSxPQUFPLE9BQUEsQUFBTyxTQUFQLEFBQWdCLFNBQWhCLEFBQXlCLE1BQXBDLEFBQVcsQUFBK0IsQUFDMUM7U0FBTyxLQUFLLEtBQUEsQUFBSyxTQUFqQixBQUFPLEFBQWlCLEFBQ3hCO01BQUksU0FBSixBQUFhLFdBQVcsQUFDdEI7TUFBQSxBQUFFLGlCQUFGLEFBQW1CLEtBQUssY0FBQSxBQUFjLE9BQXRDLEFBQTZDLE1BQTdDLEFBQW1ELFNBQW5ELEFBQTRELEFBQzVEO01BQUEsQUFBRSxpQkFBRixBQUFtQixLQUFLLGNBQUEsQUFBYyxPQUF0QyxBQUE2QyxNQUE3QyxBQUFtRCxVQUFuRCxBQUE2RCxHQUE3RCxBQUFnRSxHQUFoRSxBQUFtRSxXQUFuRSxBQUE4RSxBQUMvRTtBQUVEOztJQUFBLEFBQUUsa0JBQUYsQUFBb0IsTUFBTSxZQUFXLEFBQ25DO01BQUEsQUFBRSxRQUFGLEFBQVUsWUFBVixBQUFzQixBQUN0QjtNQUFBLEFBQUUsZUFBRixBQUFpQixNQUFqQixBQUF1QixZQUF2QixBQUFtQyxvQkFBbkMsQUFBdUQsWUFBdkQsQUFBbUUsQUFDcEU7QUFIRCxBQUlEO0FBcEJEOztBQXNCQSxTQUFBLEFBQVMsWUFBWSxBQUNuQjtNQUFBLEFBQUksY0FBSixBQUFrQixjQUFsQixBQUFnQyxBQUVoQzs7TUFBSSxFQUFBLEFBQUUsUUFBRixBQUFVLFNBQWQsQUFBSSxBQUFtQixrQkFBa0IsQUFFdkM7O21CQUFlLEVBQUEsQUFBRSxRQUFqQixBQUFlLEFBQVUsQUFDekI7bUJBQWUsRUFBQSxBQUFFLGdCQUFqQixBQUFlLEFBQWtCLEFBQ2pDO29CQUFnQixlQUFoQixBQUErQixBQUMvQjtNQUFBLEFBQUUsaUJBQUYsQUFBbUIsSUFBbkIsQUFBdUIsVUFBdkIsQUFBaUMsQUFDakM7TUFBQSxBQUFFLG1CQUFGLEFBQXFCLElBQXJCLEFBQXlCLFVBQXpCLEFBQW1DLEFBQ25DO01BQUEsQUFBRSxpQkFBRixBQUFtQixJQUFuQixBQUF1QixjQUF2QixBQUFxQyxBQUV0QztBQVRELFNBU08sQUFFTDs7bUJBQWUsRUFBQSxBQUFFLFVBQWpCLEFBQWUsQUFBWSxBQUMzQjttQkFBZSxFQUFBLEFBQUUsZ0JBQWpCLEFBQWUsQUFBa0IsQUFDakM7b0JBQWdCLGVBQWhCLEFBQStCLEFBQy9CO01BQUEsQUFBRSxpQkFBRixBQUFtQixJQUFuQixBQUF1QixVQUF2QixBQUFpQyxBQUNqQztNQUFBLEFBQUUsbUJBQUYsQUFBcUIsSUFBckIsQUFBeUIsVUFBekIsQUFBbUMsQUFDbkM7TUFBQSxBQUFFLGlCQUFGLEFBQW1CLElBQW5CLEFBQXVCLGNBQXZCLEFBQXFDLEFBRXRDO0FBQ0Y7OztBQUVELFNBQUEsQUFBUyxrQkFBa0IsQUFDekI7TUFBSSxjQUFjLENBQUEsQUFBQyx5QkFBRCxBQUEwQix5QkFBMUIsQUFBbUQsdUJBQW5ELEFBQTBFLDBCQUExRSxBQUFvRyxnQkFBcEcsQUFBb0gsNEJBQXBILEFBQWdKLDZCQUFoSixBQUE2SywyQkFBN0ssQUFBd00sOEJBQXhNLEFBQXNPLG1CQUF0TyxBQUF5UCx5QkFBelAsQUFBa1Isc0JBQWxSLEFBQXdTLHVCQUF4UyxBQUErVCx3QkFBL1QsQUFBdVYscUJBQXZWLEFBQTRXLDJCQUE1VyxBQUF1WSwwQkFBdlksQUFBaWEseUJBQWphLEFBQTBiLDRCQUExYixBQUFzZCw0QkFBdGQsQUFBa2YsNkJBQWxmLEFBQStnQiwyQkFBamlCLEFBQWtCLEFBQTBpQixBQUM1akI7T0FBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLGFBQWEsQUFDekI7UUFBSSxrQkFBa0IsWUFBdEIsQUFBc0IsQUFBWSxBQUNsQztRQUFJLEVBQUEsQUFBRSxtQkFBRixBQUFxQixTQUF6QixBQUFJLEFBQThCLGtCQUFrQixBQUNsRDtRQUFBLEFBQUUsbUJBQUYsQUFBcUIsU0FBUyxrQkFBOUIsQUFBZ0QsQUFDaEQ7aUJBQVcsWUFBVyxBQUNwQjtVQUFBLEFBQUUsbUJBQUYsQUFBcUIsWUFBWSxrQkFBQSxBQUFrQixNQUFsQixBQUF3QixrQkFBekQsQUFBMkUsQUFDNUU7QUFGRCxTQUFBLEFBRUcsQUFDSDtBQUNEO0FBQ0Y7QUFDRjs7O0FBRUQsSUFBSSxFQUFBLEFBQUUsc0JBQU4sQUFBNEIsUUFBUSxBQUNsQztJQUFBLEFBQUUsS0FDQSxFQUFBLEFBQUUsVUFBVSxPQUFBLEFBQU8sUUFEckIsQUFDRSxBQUEyQix5QkFDM0IsQUFBRSxTQUFTLFVBQUEsQUFBVSxVQUFVLEFBQzdCO01BQUUsU0FBRixBQUFXLEFBQ1o7QUFKSCxBQUVFLEdBQUEsR0FGRixBQUtFLEtBQUssWUFBWSxBQUNqQjtRQUFJLGVBQWUsT0FBbkIsQUFBMEIsQUFDMUI7UUFBSSxTQUFKLEFBQWEsQUFDYjtRQUFJLGVBQUosQUFBbUIsQUFDbkI7UUFBSSxnQkFBSixBQUFvQixBQUVwQjs7TUFBQSxBQUFFLEtBQUYsQUFBTyxjQUFjLFVBQUEsQUFBVSxPQUFWLEFBQWlCLE9BQU8sQUFDM0M7YUFBQSxBQUFPLEtBQUssUUFBQSxBQUFRLE9BQU8sTUFBZixBQUFxQixXQUFqQyxBQUE0QyxBQUM1QzttQkFBQSxBQUFhLEtBQUssTUFBbEIsQUFBd0IsQUFDeEI7b0JBQUEsQUFBYyxLQUFLLE1BQW5CLEFBQXlCLEFBQzFCO0FBSkQsQUFLQTtRQUFJO1lBQVksQUFDUixBQUNOOztnQkFBTSxBQUNJLEFBQ1I7O2lCQUFXLEFBQ0YsQUFDUDsyQkFGUyxBQUVRLEFBQ2pCO3VCQUhTLEFBR0ksQUFDYjtnQkFKUyxBQUlILEFBQ047Z0JBTFEsQUFBQyxBQUtIO0FBTEcsQUFDVCxTQURRO2lCQU1SLEFBQ08sQUFDUDsyQkFGQSxBQUVpQixBQUNqQjt1QkFIQSxBQUdhLEFBQ2I7Z0JBSkEsQUFJTSxBQUNOO2dCQWZVLEFBRVIsQUFFTSxBQU1SLEFBS00sQUFHVjtBQVJJLEFBQ0E7QUFURSxBQUNKOzs2QkFlTyxBQUNjLEFBQ3JCO29CQUZPLEFBRUssQUFDWjs7bUJBQU0sQUFDSSxBQUNSO2dCQUxLLEFBR0QsQUFFRSxBQUVSO0FBSk0sQUFDSjs7Z0JBR1EsQUFDRixBQUNOO3FCQVRLLEFBT0csQUFFRyxBQUViO0FBSlUsQUFDUjs7Z0JBR0ssQUFDQyxBQUNOO3FCQWJLLEFBV0EsQUFFTSxBQUViO0FBSk8sQUFDTDs7O3FCQUlRLEFBQ0csQUFDVDs7dUJBQVksQUFDRCxBQUNUOzJCQUxFLEFBQ0MsQUFBQyxBQUVNLEFBRUcsQUFHakI7QUFMYyxBQUNWO0FBSEksQUFDTixXQURLOztxQkFPQyxBQUNHLEFBQ1Q7O3VCQUFZLEFBQ0QsQUFDVDsyQkE3Q1YsQUFBZ0IsQUFrQkwsQUFlQyxBQVFDLEFBQUMsQUFFTSxBQUVHLEFBTXZCO0FBUm9CLEFBQ1Y7QUFISSxBQUNOLFdBREs7QUFSRCxBQUNOO0FBaEJLLEFBQ1A7QUFuQlksQUFDZDtRQWtERSxNQUFNLFNBQUEsQUFBUyxlQUFULEFBQXdCLHFCQUF4QixBQUE2QyxXQUF2RCxBQUFVLEFBQXdELEFBQ2xFO1FBQUEsQUFBSSxTQUFKLEFBQWEsQUFDYjtRQUFBLEFBQUksTUFBSixBQUFVLEtBQVYsQUFBZSxBQUNoQjtBQXRFRCxLQUFBLEFBc0VHLEtBQUssVUFBQSxBQUFVLEtBQVYsQUFBZSxRQUFmLEFBQXVCLEdBQUcsQUFDaEM7WUFBQSxBQUFRLElBQUksSUFBWixBQUFnQixBQUNqQjtBQXhFRCxBQXlFRDs7O0FBRUQsSUFBSSxFQUFBLEFBQUUsaUJBQU4sQUFBdUIsUUFBUSxBQUM3QjtJQUFBLEFBQUUsS0FDQSxFQUFBLEFBQUUsVUFBVSxPQUFBLEFBQU8sUUFEckIsQUFDRSxBQUEyQix1QkFDM0IsQUFBRSxTQUFTLFVBQUEsQUFBVSxVQUFVLEFBQzdCO01BQUUsU0FBRixBQUFXLEFBQ1o7QUFKSCxBQUVFLEdBQUEsR0FGRixBQUtFLEtBQUssWUFBWSxBQUNqQjtNQUFBLEFBQUUsaUJBQUYsQUFBbUI7Z0JBQWEsQUFDcEIsQUFDVjtrQkFGOEIsQUFFbEIsQUFDWjtrQkFIOEIsQUFHbEIsQUFDWjtlQUo4QixBQUlyQixBQUNUO2NBQVEsQ0FMc0IsQUFLckIsQUFDVDtpQkFOOEIsQUFNbkIsQUFDWDtZQVA4QixBQU94QixBQUNOO2VBUkYsQUFBZ0MsQUFRckIsQUFFWjtBQVZpQyxBQUM5QjtBQVBKLEFBaUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUNsT1ksbUIsQUFBQSxXQUNYLG9CQUFlO3NDQUNiOztNQUFJLEVBQUEsQUFBRSxpQkFBTixBQUF1QixRQUFRLEFBQzdCO1FBQUksUUFBUSxFQUFaLEFBQVksQUFBRSxBQUNkO1FBQUksV0FBVyxNQUFBLEFBQU0sS0FBckIsQUFBZSxBQUFXLEFBQzFCO1FBQUksYUFBYSxNQUFBLEFBQU0sS0FBdkIsQUFBaUIsQUFBVyxBQUU1Qjs7VUFBQSxBQUFNLEtBQU4sQUFBVyxlQUFYLEFBQTBCLEdBQTFCLEFBQTZCLFVBQVUsWUFBWSxBQUNqRDtVQUFJLGVBQWUsRUFBQSxBQUFFLE1BQUYsQUFBUSxLQUFSLEFBQWEsbUJBQWhDLEFBQW1CLEFBQWdDLEFBQ25EO1VBQUksYUFBYSxNQUFqQixBQUF1QixBQUN2QjtVQUFJLFdBQVcsTUFBQSxBQUFNLEtBQU4sQUFBVyxxQ0FBWCxBQUFnRCxLQUEvRCxBQUFlLEFBQXFELEFBQ3BFO2VBQUEsQUFBUyxLQUFLLENBQUMsYUFBQSxBQUFhLE1BQWQsQUFBb0IsVUFBcEIsQUFBOEIsUUFBNUMsQUFBYyxBQUFzQyxBQUNwRDtpQkFBQSxBQUFXLEtBQUssQ0FBQyxlQUFBLEFBQWUsTUFBaEIsQUFBc0IsVUFBdEIsQUFBZ0MsUUFBaEQsQUFBZ0IsQUFBd0MsQUFDekQ7QUFORCxBQVFBOztVQUFBLEFBQU0sS0FBTixBQUFXLHFCQUFYLEFBQWdDLEdBQWhDLEFBQW1DLFVBQVUsWUFBWSxBQUN2RDtVQUFJLGVBQWUsRUFBQSxBQUFFLGVBQUYsQUFBaUIsS0FBakIsQUFBc0IsbUJBQXpDLEFBQW1CLEFBQXlDLEFBQzVEO1VBQUksYUFBYSxNQUFqQixBQUF1QixBQUN2QjtVQUFJLFdBQVcsRUFBQSxBQUFFLE1BQUYsQUFBUSxLQUFSLEFBQWEsbUJBQWIsQUFBZ0MsS0FBL0MsQUFBZSxBQUFxQyxBQUNwRDtlQUFBLEFBQVMsS0FBSyxDQUFDLGFBQUEsQUFBYSxNQUFkLEFBQW9CLFVBQXBCLEFBQThCLFFBQTVDLEFBQWMsQUFBc0MsQUFDcEQ7aUJBQUEsQUFBVyxLQUFLLENBQUMsZUFBQSxBQUFlLE1BQWhCLEFBQXNCLFVBQXRCLEFBQWdDLFFBQWhELEFBQWdCLEFBQXdDLEFBQ3pEO0FBTkQsQUFRQTs7UUFBSSxpQkFBaUIsTUFBQSxBQUFNLEtBQTNCLEFBQXFCLEFBQVcsQUFDaEM7UUFBSSxTQUFTLEVBQWIsQUFBYSxBQUFFLEFBQ2Y7UUFBSSxlQUFlLE9BQUEsQUFBTyxLQUExQixBQUFtQixBQUFZLEFBQy9CO1FBQUksY0FBYyxPQUFBLEFBQU8sS0FBekIsQUFBa0IsQUFBWSxBQUM5QjtRQUFJLGdCQUFnQixPQUFBLEFBQU8sS0FBM0IsQUFBb0IsQUFBWSxBQUNoQzttQkFBQSxBQUFlLEdBQWYsQUFBa0IsU0FBUyxVQUFBLEFBQVUsR0FBRyxBQUN0QztRQUFBLEFBQUUsQUFDRjtVQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDttQkFBQSxBQUFhLEFBQ2I7a0JBQUEsQUFBWSxBQUNaO29CQUFBLEFBQWMsQUFDZDtRQUFBLEFBQUU7Y0FBSyxBQUNDLEFBQ047a0JBRkssQUFFSyxBQUNWO2FBQUssTUFBQSxBQUFNLEtBQU4sQUFBVyxTQUFYLEFBQW9CLFFBQVEsTUFBQSxBQUFNLFNBQU4sQUFBZSxRQUFmLEFBQXVCLGVBQXZCLEFBQXNDLEtBQXRDLEFBQTJDLGlCQUh2RSxBQUc0QixBQUE0RCxBQUM3RjtpQkFBUyxpQkFBQSxBQUFVLEdBQUcsQUFDcEI7dUJBQUEsQUFBYSxBQUNiO3dCQUFBLEFBQWMsS0FBZCxBQUFtQixBQUNwQjtBQVBJLEFBUUw7ZUFBTyxlQUFBLEFBQVUsS0FBVixBQUFlLFFBQWYsQUFBdUIsR0FBRyxBQUMvQjt1QkFBQSxBQUFhLEFBQ2I7c0JBQUEsQUFBWSxBQUNaO2tCQUFBLEFBQVEsSUFBSSxJQUFaLEFBQWdCLEFBQ2pCO0FBWkgsQUFBTyxBQWNSO0FBZFEsQUFDTDtBQVBKLEFBcUJEO0FBQ0Y7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJLEFDbERVLGlCLEFBQUEscUJBQ1g7b0JBQWU7d0NBQ2I7O1FBQUksRUFBQSxBQUFFLGlCQUFOLEFBQXVCLFFBQVEsQUFDN0I7V0FBQSxBQUFLLEFBQ047QUFDRDtRQUFJLEVBQUEsQUFBRSxtQkFBTixBQUF5QixRQUFRLEFBQy9CO1VBQUksWUFBWSxFQUFoQixBQUFnQixBQUFFLEFBQ2xCO2dCQUFBLEFBQVUsS0FBVixBQUFlLG1CQUFmLEFBQWtDLEdBQWxDLEFBQXFDLFNBQVMsWUFBWSxBQUN4RDtZQUFJLFFBQVEsRUFBQSxBQUFFLE1BQUYsQUFBUSxRQUFwQixBQUFZLEFBQWdCLEFBQzVCO1lBQUksUUFBUSxNQUFBLEFBQU0sS0FBTixBQUFXLGdDQUFYLEFBQTJDLFFBQVEsRUFBQSxBQUFFLE1BQWpFLEFBQStELEFBQVEsQUFDdkU7Y0FBQSxBQUFNLEtBQU4sQUFBVyxlQUFYLEFBQTBCLEtBQUssTUFBQSxBQUFNLFFBQXJDLEFBQStCLEFBQWMsQUFDN0M7WUFBSSxXQUFXLFFBQVMsTUFBeEIsQUFBOEIsQUFDOUI7Y0FBQSxBQUFNLEtBQU4sQUFBVyxtQkFBWCxBQUE4QixLQUFLLFNBQUEsQUFBUyxRQUE1QyxBQUFtQyxBQUFpQixBQUNyRDtBQU5ELEFBUUE7O2dCQUFBLEFBQVUsS0FBVixBQUFlLGdCQUFmLEFBQStCLEdBQS9CLEFBQWtDLFVBQVUsWUFBWSxBQUN0RDtZQUFJLFFBQVEsRUFBQSxBQUFFLE1BQUYsQUFBUSxRQUFwQixBQUFZLEFBQWdCLEFBQzVCO1lBQUksUUFBUSxFQUFBLEFBQUUsTUFBRixBQUFRLEtBQVIsQUFBYSxhQUFiLEFBQTBCLFFBQVEsRUFBQSxBQUFFLG1CQUFoRCxBQUE4QyxBQUFxQixBQUNuRTtjQUFBLEFBQU0sS0FBTixBQUFXLGVBQVgsQUFBMEIsS0FBSyxNQUFBLEFBQU0sUUFBckMsQUFBK0IsQUFBYyxBQUM3QztZQUFJLFdBQVcsUUFBUyxNQUF4QixBQUE4QixBQUM5QjtjQUFBLEFBQU0sS0FBTixBQUFXLG1CQUFYLEFBQThCLEtBQUssU0FBQSxBQUFTLFFBQTVDLEFBQW1DLEFBQWlCLEFBQ3JEO0FBTkQsQUFPRDtBQUVEOztRQUFJLEVBQUEsQUFBRSxrQkFBTixBQUF3QixRQUFRLEFBQzlCO1VBQUksV0FBVyxFQUFmLEFBQWUsQUFBRSxBQUNqQjtnQkFBQSxBQUFVLEtBQVYsQUFBZSxtQkFBZixBQUFrQyxHQUFsQyxBQUFxQyxTQUFTLFlBQVksQUFDeEQ7WUFBSSxRQUFRLEVBQUEsQUFBRSxNQUFGLEFBQVEsUUFBcEIsQUFBWSxBQUFnQixBQUM1QjtZQUFJLFFBQVEsTUFBQSxBQUFNLEtBQU4sQUFBVyxnQ0FBWCxBQUEyQyxRQUFRLEVBQUEsQUFBRSxNQUFqRSxBQUErRCxBQUFRLEFBQ3ZFO2NBQUEsQUFBTSxLQUFOLEFBQVcsZUFBWCxBQUEwQixLQUFLLE1BQUEsQUFBTSxRQUFyQyxBQUErQixBQUFjLEFBQzlDO0FBSkQsQUFNQTs7ZUFBQSxBQUFTLEtBQVQsQUFBYyxnQkFBZCxBQUE4QixHQUE5QixBQUFpQyxVQUFVLFlBQVksQUFDckQ7WUFBSSxRQUFRLEVBQUEsQUFBRSxNQUFGLEFBQVEsUUFBcEIsQUFBWSxBQUFnQixBQUM1QjtZQUFJLFFBQVEsRUFBQSxBQUFFLE1BQUYsQUFBUSxLQUFSLEFBQWEsYUFBYixBQUEwQixRQUFRLEVBQUEsQUFBRSxtQkFBaEQsQUFBOEMsQUFBcUIsQUFDbkU7Y0FBQSxBQUFNLEtBQU4sQUFBVyxlQUFYLEFBQTBCLEtBQUssTUFBQSxBQUFNLFFBQXJDLEFBQStCLEFBQWMsQUFDOUM7QUFKRCxBQUtEO0FBQ0Y7Ozs7OytCQUNXLEFBQ1Y7VUFBSSxRQUFRLEVBQVosQUFBWSxBQUFFLEFBQ2Q7VUFBSSxpQkFBaUIsTUFBQSxBQUFNLEtBQTNCLEFBQXFCLEFBQVcsQUFDaEM7VUFBSSxTQUFTLEVBQWIsQUFBYSxBQUFFLEFBQ2Y7VUFBSSxlQUFlLE9BQUEsQUFBTyxLQUExQixBQUFtQixBQUFZLEFBQy9CO1VBQUksY0FBYyxPQUFBLEFBQU8sS0FBekIsQUFBa0IsQUFBWSxBQUM5QjtVQUFJLGdCQUFnQixPQUFBLEFBQU8sS0FBM0IsQUFBb0IsQUFBWSxBQUNoQztxQkFBQSxBQUFlLEdBQWYsQUFBa0IsU0FBUyxVQUFBLEFBQVUsR0FBRyxBQUN0QztVQUFBLEFBQUUsQUFDRjtZQUFJLFFBQVEsRUFBWixBQUFZLEFBQUUsQUFDZDtxQkFBQSxBQUFhLEFBQ2I7b0JBQUEsQUFBWSxBQUNaO3NCQUFBLEFBQWMsQUFDZDtVQUFBLEFBQUU7Z0JBQUssQUFDQyxBQUNOO29CQUZLLEFBRUssQUFDVjtlQUFLLE1BQUEsQUFBTSxLQUFOLEFBQVcsU0FBWCxBQUFvQixRQUFRLE1BQUEsQUFBTSxTQUFOLEFBQWUsUUFBZixBQUF1QixlQUF2QixBQUFzQyxLQUF0QyxBQUEyQyxpQkFIdkUsQUFHNEIsQUFBNEQsQUFDN0Y7bUJBQVMsaUJBQUEsQUFBVSxHQUFHLEFBQ3BCO3lCQUFBLEFBQWEsQUFDYjswQkFBQSxBQUFjLEtBQWQsQUFBbUIsQUFDcEI7QUFQSSxBQVFMO2lCQUFPLGVBQUEsQUFBVSxLQUFWLEFBQWUsUUFBZixBQUF1QixHQUFHLEFBQy9CO3lCQUFBLEFBQWEsQUFDYjt3QkFBQSxBQUFZLEFBQ1o7b0JBQUEsQUFBUSxJQUFJLElBQVosQUFBZ0IsQUFDakI7QUFaSCxBQUFPLEFBY1I7QUFkUSxBQUNMO0FBUEosQUFxQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SSxBQ25FVSxpQixBQUFBLFNBQ1gsa0JBQWU7c0NBQ2I7O0lBQUEsQUFBRSxlQUFGLEFBQWlCLE1BQU0sVUFBQSxBQUFTLE9BQU8sQUFDckM7VUFBQSxBQUFNLEFBQ1A7QUFGRCxBQUlBOztJQUFBLEFBQUUsc0JBQUYsQUFBd0IsR0FBeEIsQUFBMkIsU0FBUyxZQUFXLEFBQzdDO01BQUEsQUFBRSxNQUFGLEFBQVEsU0FBUixBQUFpQixZQUFqQixBQUE2QixBQUM5QjtBQUZELEFBSUE7O01BQUksZUFBSixBQUFtQixBQUNuQjtJQUFBLEFBQUUsNEJBQUYsQUFBOEIsS0FBSyxVQUFBLEFBQVMsT0FBVCxBQUFnQixNQUFNLEFBQ3ZEO1FBQUksUUFBUSxFQUFaLEFBQVksQUFBRSxBQUNkO29CQUFnQixNQUFBLEFBQU0sZUFBZSxTQUFTLE1BQUEsQUFBTSxJQUFmLEFBQVMsQUFBVSxnQkFBeEMsQUFBcUIsQUFBbUMsTUFBTSxTQUFTLE1BQUEsQUFBTSxJQUFmLEFBQVMsQUFBVSxpQkFBakcsQUFBOEUsQUFBb0MsQUFDbkg7QUFIRCxBQUlBO0lBQUEsQUFBRSx3QkFBRixBQUEwQixNQUExQixBQUFnQyxNQUFoQyxBQUFzQyxBQUV0Qzs7SUFBQSxBQUFFLHFCQUFGLEFBQXVCLEFBRXZCOztJQUFBLEFBQUUsMENBQUYsQUFBNEMsQUFDNUM7SUFBQSxBQUFFLG9DQUFGLEFBQXNDLEFBQ3RDO0lBQUEsQUFBRSxrQkFBRixBQUFvQixBQUVwQjs7SUFBQSxBQUFFLGFBQUYsQUFBZSxPQUFmLEFBQXNCLEFBRXRCOztJQUFBLEFBQUUsaUJBQUYsQUFBbUIsT0FBbkIsQUFBMEIsQUFDMUI7SUFBQSxBQUFFLGVBQUYsQUFBaUIsT0FBakIsQUFBd0IsQUFFeEI7O0lBQUEsQUFBRSxvQkFBRixBQUFzQjtXQUFXLEFBQ3hCLEFBQ1A7VUFGK0IsQUFFekIsQUFDTjttQkFIRixBQUFpQyxBQUdoQixBQUdqQjtBQU5pQyxBQUMvQjs7SUFLRixBQUFFLDRCQUFGLEFBQThCO1dBQVcsQUFDaEMsQUFDUDtVQUZ1QyxBQUVqQyxBQUNOO1lBSHVDLEFBRy9CLEFBQ1I7bUJBSkYsQUFBeUMsQUFJeEIsQUFHakI7QUFQeUMsQUFDdkM7O0lBTUYsQUFBRSx3QkFBRixBQUEwQjtXQUFXLEFBQzVCLEFBQ1A7VUFGbUMsQUFFN0IsQUFDTjttQkFIRixBQUFxQyxBQUdwQixBQUdqQjtBQU5xQyxBQUNuQzs7SUFLRixBQUFFLG1CQUFGLEFBQXFCLE1BQU0sWUFBVyxBQUNwQztRQUFJLE1BQU0sRUFBVixBQUFVLEFBQUUsQUFDWjtRQUFBLEFBQUksT0FBSixBQUFXLEFBQ1o7QUFIRCxBQUtBOztJQUFBLEFBQUUsbUJBQUYsQUFBcUI7ZUFBckIsQUFBNkIsQUFDaEIsQUFHYjtBQUo2QixBQUMzQjs7SUFHRixBQUFFLG9CQUFGLEFBQXNCLE1BQU0sWUFBVyxBQUNyQztNQUFBLEFBQUUsTUFBRixBQUFRLFNBQVIsQUFBaUIsU0FBakIsQUFBMEIsQUFDM0I7QUFGRCxBQUlBOztJQUFBLEFBQUUsbUJBQUYsQUFBcUI7ZUFBUSxBQUNoQixBQUNYO1VBRjJCLEFBRXJCLEFBQ047ZUFIMkIsQUFHaEIsQUFDWDthQUFTLG1CQUFXLEFBQ2xCO1VBQUksU0FBUyxFQUFBLEFBQUUsTUFBRixBQUFRLEtBQXJCLEFBQWEsQUFBYSxBQUMxQjthQUFPLEVBQUEsQUFBRSxRQUFULEFBQU8sQUFBVSxBQUNsQjtBQVBILEFBQTZCO0FBQUEsQUFDM0IsS0FERixBQVFHLE1BQU0sVUFBQSxBQUFTLEtBQUssQUFDckI7UUFBQSxBQUFJLEFBQ0w7QUFWRCxBQVlBOztJQUFBLEFBQUUsMkJBQUYsQUFBNkI7ZUFBUSxBQUN4QixBQUNYO1VBRm1DLEFBRTdCLEFBQ047ZUFIRixBQUFxQyxBQUd4QjtBQUh3QixBQUNuQyxLQURGLEFBSUcsTUFBTSxVQUFBLEFBQVMsS0FBSyxBQUNyQjtRQUFBLEFBQUksQUFDTDtBQU5ELEFBUUE7O0lBQUEsQUFBRSxlQUFGLEFBQWlCO1lBQWpCLEFBQThCLEFBQ3BCLEFBRVY7QUFIOEIsQUFDNUI7SUFFRixBQUFFLGlCQUFGLEFBQW1CLEFBRW5COztNQUFHLFNBQUEsQUFBUyxlQUFaLEFBQUcsQUFBd0IsbUJBQW1CLEFBQzVDO2FBQUEsQUFBUyxlQUFULEFBQXdCLGtCQUF4QixBQUEwQyxpQkFBMUMsQUFBMkQsU0FBUyxZQUFZLEFBQzlFO1VBQUksV0FBSixBQUFlLFNBQVMsQUFDdEI7bUJBQUEsQUFBVyxBQUNaO0FBQ0Y7QUFKRCxBQUtEO0FBQ0Y7QSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCJleHBvcnQgY2xhc3MgQ29yZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuICAgIHRoaXMubm90eURlZmF1bHQoKVxuICAgIHRoaXMuc2VyaWFsaXplRm9ybSgpXG4gICAgdGhpcy5zZXR1cEFqYXgoKVxuICAgIHRoaXMuc2V0dXBGb3JtKClcbiAgfVxuICBkaXNhYmxlICgpIHtcbiAgICAkLmZuLmV4dGVuZCh7XG4gICAgICBkaXNhYmxlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS5oaWRlKClcbiAgICAgICAgICAgICQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5maW5kKCcuYnRuLXByZWxvYWRlcicpLnNob3coKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS5zaG93KClcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignZGlzYWJsZWQnKS5maW5kKCcuYnRuLXByZWxvYWRlcicpLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG5vdHlEZWZhdWx0ICgpIHtcbiAgICAkLm5vdHkuZGVmYXVsdHMgPSB7XG4gICAgICBsYXlvdXQ6ICd0b3AnLFxuICAgICAgdGhlbWU6ICdyZWxheCcsXG4gICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgdGV4dDogJycsXG4gICAgICBkaXNtaXNzUXVldWU6IHRydWUsXG4gICAgICBmb3JjZTogZmFsc2UsXG4gICAgICBtYXhWaXNpYmxlOiA1LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwibm90eV9tZXNzYWdlXCI+PHNwYW4gY2xhc3M9XCJub3R5X3RleHRcIj48L3NwYW4+PGRpdiBjbGFzcz1cIm5vdHlfY2xvc2VcIj48L2Rpdj48L2Rpdj4nLFxuICAgICAgdGltZW91dDogNTAwMCxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBvcGVuOiAnYW5pbWF0ZWQgZmFkZUluRG93bicsXG4gICAgICAgIGNsb3NlOiAnYW5pbWF0ZWQgZmFkZU91dFVwJyxcbiAgICAgICAgZWFzaW5nOiAnc3dpbmcnLFxuICAgICAgICBzcGVlZDogNTAwXG4gICAgICB9LFxuICAgICAgY2xvc2VXaXRoOiBbJ2NsaWNrJ10sXG4gICAgICBtb2RhbDogZmFsc2UsXG4gICAgICBraWxsZXI6IGZhbHNlLFxuICAgICAgY2FsbGJhY2s6IHtcbiAgICAgICAgb25TaG93OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgYWZ0ZXJTaG93OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBvbkNsb3NlQ2xpY2s6IGZ1bmN0aW9uICgpIHt9XG4gICAgICB9LFxuICAgICAgYnV0dG9uczogZmFsc2VcbiAgICB9XG4gIH1cbiAgc2VyaWFsaXplRm9ybSAoKSB7XG4gICAgJC5mbi5zZXJpYWxpemVGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGRhdGEsIGxvb2t1cCwgcGFyc2UsIHNlbGVjdG9yXG4gICAgICBkYXRhID0gdm9pZCAwXG4gICAgICBsb29rdXAgPSB2b2lkIDBcbiAgICAgIHBhcnNlID0gdm9pZCAwXG4gICAgICBzZWxlY3RvciA9IHZvaWQgMFxuICAgICAgaWYgKHRoaXMubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGRhdGEgPSB7fVxuICAgICAgbG9va3VwID0gZGF0YVxuICAgICAgc2VsZWN0b3IgPSAnOmlucHV0W3R5cGUhPVwiY2hlY2tib3hcIl1bdHlwZSE9XCJyYWRpb1wiXSwgaW5wdXQ6Y2hlY2tlZCdcbiAgICAgIHBhcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsLCBjYXAsIGksIG5hbWVkXG4gICAgICAgICRlbCA9IHZvaWQgMFxuICAgICAgICBjYXAgPSB2b2lkIDBcbiAgICAgICAgaSA9IHZvaWQgMFxuICAgICAgICBuYW1lZCA9IHZvaWQgMFxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIG5hbWVkID0gdGhpcy5uYW1lLnJlcGxhY2UoL1xcWyhbXlxcXV0rKT9cXF0vZywgJywkMScpLnNwbGl0KCcsJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgICBjYXAgPSBuYW1lZC5sZW5ndGggLSAxXG4gICAgICAgICRlbCA9ICQodGhpcylcbiAgICAgICAgaWYgKG5hbWVkWzBdKSB7XG4gICAgICAgICAgaSA9IDBcbiAgICAgICAgICB3aGlsZSAoaSA8IGNhcCkge1xuICAgICAgICAgICAgbG9va3VwID0gbG9va3VwW25hbWVkW2ldXSA9IGxvb2t1cFtuYW1lZFtpXV0gfHwgKG5hbWVkW2kgKyAxXSA9PT0gJycgfHwgbmFtZWRbaSArIDFdID09PSAnMCcgPyBbXSA6IHt9KVxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsb29rdXAubGVuZ3RoICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGxvb2t1cC5wdXNoKCRlbC52YWwoKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9va3VwW25hbWVkW2NhcF1dID0gJGVsLnZhbCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGxvb2t1cCA9IGRhdGFcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXIoc2VsZWN0b3IpLmVhY2gocGFyc2UpXG4gICAgICB0aGlzLmZpbmQoc2VsZWN0b3IpLmVhY2gocGFyc2UpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cbiAgfVxuICBzZXR1cEFqYXggKCkge1xuICAgICQuYWpheFNldHVwKHtcbiAgICAgIHN0YXR1c0NvZGU6IHtcbiAgICAgICAgNDAzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnRm9yYmlkZGVuIENvbnRlbnQuJyxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIDQwNDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ1JvdXRlIG5vdCBmb3VuZC4nLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgNTAwOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnSW50ZXJuYWwgc2VydmVyIGVycm9yLicsXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyb3NzRG9tYWluOiBmYWxzZSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtQ1NSRi1Ub2tlbic6ICQoJ21ldGFbbmFtZT1cIl90XCJdJykuYXR0cignY29udGVudCcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBzZXR1cEZvcm0gKCkge1xuICAgIHZhciAkZm9ybXMgPSAkKCcuYWN0aW9uLWZvcm0nKVxuICAgIHZhciBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgdmFyIGFsbG93ZWRUeXBlcyA9IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ1BBVENIJywgJ0RFTEVURSddXG5cbiAgICAkZm9ybXMuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICRmb3JtID0gJCh0aGlzKVxuICAgICAgJGZvcm0ub24oJ2NsaWNrJywgJ1t0eXBlPXN1Ym1pdF0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICAgIGlmIChmb3JtUHJvY2Vzc2luZykge1xuICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICB0ZXh0OiAnQSBmb3JtIHByb2Nlc3MgaXMgc3RpbGwgcnVubmluZy4nLFxuICAgICAgICAgICAgdHlwZTogJ2luZm9ybWF0aW9uJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaHR0cFR5cGUgPSAoJGZvcm0uYXR0cignaHR0cC10eXBlJykpLnRvVXBwZXJDYXNlKClcbiAgICAgICAgaWYgKGFsbG93ZWRUeXBlcy5pbmRleE9mKGh0dHBUeXBlKSA9PT0gLTEpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0hUVFAgdHlwZSBub3QgYWxsb3dlZC4nLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghJGZvcm0ucGFyc2xleSgpLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgdGV4dDogJ0ludmFsaWQgdmFsdWUgb24gZm9ybS4gQ2hlY2sgYWdhaW4uJyxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlybSgnU3VibWl0PycpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IHRydWVcbiAgICAgICAgICB2YXIgJGlucHV0ID0gJGZvcm0uZmluZCgnOmlucHV0JylcbiAgICAgICAgICAkaW5wdXQucHJvcCgncmVhZG9ubHknLCB0cnVlKVxuICAgICAgICAgICR0aGlzLmRpc2FibGUodHJ1ZSlcblxuICAgICAgICAgIGxldCBmb3JtRGF0YSA9IHt9XG4gICAgICAgICAgZm9ybURhdGEuZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZUZvcm0oKVxuXG4gICAgICAgICAgJC5lYWNoKCRmb3JtLmRhdGEoKSwgZnVuY3Rpb24gKGksIHYpIHtcbiAgICAgICAgICAgIGlmIChpID09PSAnbmF0aW9uYWxpdHknKSB7XG4gICAgICAgICAgICAgIGlmICgkKCcjaW5wdXROYXRpb25hbGl0eScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9ICQoJyNpbnB1dE5hdGlvbmFsaXR5JykuZGF0YSgnZGRzbGljaycpXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuZGF0YS5uYXRpb25hbGl0eSA9IHZhbHVlLnNlbGVjdGVkRGF0YS52YWx1ZVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCQoJyNpbnB1dEJlbmVmaWNpYXJ5TmF0aW9uYWxpdHknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAkKCcjaW5wdXRCZW5lZmljaWFyeU5hdGlvbmFsaXR5JykuZGF0YSgnZGRzbGljaycpXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuZGF0YS5iZW5lZmljaWFyeV9uYXRpb25hbGl0eSA9IHZhbHVlLnNlbGVjdGVkRGF0YS52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBodHRwVHlwZSxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgdXJsOiAkZm9ybS5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIG5vdHkoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIGZhbHNlKVxuICAgICAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuXG4gICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdzdWNjZXNzJyAmJiBlLnJlZGlyZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShlLnJlZGlyZWN0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgICBub3R5KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBmb3JtUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsIGZhbHNlKVxuICAgICAgICAgICAgICAkdGhpcy5kaXNhYmxlKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERhdGFUYWJsZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB2YXIgJHRhYmxlcyA9ICQoJy50YWJsZS1ncmlkJylcbiAgICB2YXIgJG1vZGFsID0gJCgnI3Nob3dNb2RhbCcpXG4gICAgdmFyICRtb2RhbExvYWRlciA9ICRtb2RhbC5maW5kKCcubG9hZGluZycpXG4gICAgdmFyICRtb2RhbEVycm9yID0gJG1vZGFsLmZpbmQoJy5lcnJvcicpXG4gICAgdmFyICRtb2RhbENvbnRlbnQgPSAkbW9kYWwuZmluZCgnI21vZGFsQ29udGVudCcpXG4gICAgdmFyICRsb2FkZXIgPSAkKCcjcGFnZUxvYWRlcicpXG5cbiAgICAkdGFibGVzLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGFibGUgPSAkKHRoaXMpXG4gICAgICB2YXIgY29sdW1ucyA9IFtdXG5cbiAgICAgICR0YWJsZS5maW5kKCd0aCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgJHRoZWFkID0gJCh0aGlzKVxuICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSB7fVxuICAgICAgICBjb2x1bW5WYWx1ZVsnZGF0YSddID0gJHRoZWFkLmRhdGEoJ2lkJylcblxuICAgICAgICAkLmVhY2goJHRoZWFkLmRhdGEoKSwgZnVuY3Rpb24gKGksIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGkgIT09ICdpZCcpIHtcbiAgICAgICAgICAgIGNvbHVtblZhbHVlW2ldID0gdmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW5WYWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgICR0YWJsZS5kYXRhVGFibGUoe1xuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgICAgICBsYW5ndWFnZTogd2luZG93Ll9kYXRhVGFibGVzTGFuZyxcbiAgICAgICAgc2VhcmNoRGVsYXk6IDEwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIGFqYXg6ICR0YWJsZS5kYXRhKCd1cmwnKSxcbiAgICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgICAgb3JkZXI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgICdkZXNjJ1xuICAgICAgICBdXG4gICAgICB9KVxuXG4gICAgICAkdGFibGUub24oJ2NsaWNrJywgJy5idG4tc2hvdycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgICRtb2RhbExvYWRlci5zaG93KClcbiAgICAgICAgJG1vZGFsRXJyb3IuaGlkZSgpXG4gICAgICAgICRtb2RhbENvbnRlbnQuZW1wdHkoKVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXG4gICAgICAgICAgdXJsOiAkdGhpcy5kYXRhKCd1cmwnKSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJG1vZGFsTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgJG1vZGFsQ29udGVudC5odG1sKGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAkbW9kYWxMb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAkbW9kYWxFcnJvci5zaG93KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgJHRhYmxlLm9uKCdjbGljaycsICcuYnRuLWRlbGV0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAoY29uZmlybSgnUmVtb3ZlPycpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAkbG9hZGVyLnNob3coKVxuICAgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogZS50eXBlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICR0aGlzLnBhcmVudHMoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAgICAgJGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgICAgbm90eSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG5pbXBvcnQgeyBDb3JlIH0gZnJvbSAnLi9jb3JlJ1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICcuL2RhdGF0YWJsZSdcbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3RlcidcbmltcG9ydCB7IFNoYXJlcyB9IGZyb20gJy4vc2hhcmVzJ1xuXG5uZXcgQ29yZSgpXG5uZXcgV2lkZ2V0KClcbm5ldyBEYXRhVGFibGUoKVxubmV3IFJlZ2lzdGVyKClcbm5ldyBTaGFyZXMoKVxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAkKCcjbG9hZGluZycpLmZhZGVPdXQoNDAwLCAnbGluZWFyJylcbn0sIDMwMClcblxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgYm9keVNpemVyKClcbn0pXG5cbmJvZHlTaXplcigpXG5wYWdlVHJhbnNpdGlvbnMoKVxuJC5zbGlkZWJhcnMoKVxuXG4kKFwiZGl2W2lkPScjZml4ZWQtc2lkZWJhciddXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwic3dpdGNoLW9uXCIpKSB7XG5cbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpXG4gICAgdmFyIGhlYWRlckhlaWdodCA9ICQoJyNwYWdlLWhlYWRlcicpLmhlaWdodCgpXG4gICAgdmFyIGNvbnRlbnRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBoZWFkZXJIZWlnaHRcblxuICAgICQoJyNwYWdlLXNpZGViYXInKS5jc3MoJ2hlaWdodCcsIGNvbnRlbnRIZWlnaHQpXG4gICAgJCgnLnNjcm9sbC1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuXG4gICAgJCgnLnNjcm9sbC1zaWRlYmFyJykuc2xpbXNjcm9sbCh7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGNvbG9yOiAncmdiYSgxNTUsIDE2NCwgMTY5LCAwLjY4KScsXG4gICAgICBzaXplOiAnNnB4J1xuICAgIH0pXG5cbiAgICB2YXIgaGVhZGVyQmcgPSAkKCcjcGFnZS1oZWFkZXInKS5hdHRyKCdjbGFzcycpXG4gICAgJCgnI2hlYWRlci1sb2dvJykuYWRkQ2xhc3MoaGVhZGVyQmcpXG5cbiAgfSBlbHNlIHtcblxuICAgIHZhciB3aW5kb3dIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKVxuICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKCcjcGFnZS1oZWFkZXInKS5oZWlnaHQoKVxuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gaGVhZGVySGVpZ2h0XG5cbiAgICAkKCcjcGFnZS1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJy5zY3JvbGwtc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcblxuICAgICQoXCIuc2Nyb2xsLXNpZGViYXJcIikuc2xpbVNjcm9sbCh7XG4gICAgICBkZXN0cm95OiB0cnVlXG4gICAgfSlcblxuICAgICQoJyNoZWFkZXItbG9nbycpLnJlbW92ZUNsYXNzKCdiZy1ncmFkaWVudC05JylcblxuICB9XG59KVxuXG4kKCcuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLmZpcnN0KCkuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZURvd24oKVxufSlcblxuJCgnLmRyb3Bkb3duJykub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5maXJzdCgpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVVcCgpXG59KVxuXG4kKGZ1bmN0aW9uKCkge1xuICAkKCcjc2lkZWJhci1tZW51Jykuc3VwZXJjbGljayh7XG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICBoZWlnaHQ6ICdzaG93J1xuICAgIH0sXG4gICAgYW5pbWF0aW9uT3V0OiB7XG4gICAgICBoZWlnaHQ6ICdoaWRlJ1xuICAgIH1cbiAgfSlcbiAgdmFyIHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVxuICBwYXRoID0gcGF0aFtwYXRoLmxlbmd0aC0xXVxuICBpZiAocGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgJChcIiNzaWRlYmFyLW1lbnVcIikuZmluZChcImFbaHJlZiQ9J1wiICsgcGF0aCArIFwiJ11cIikuYWRkQ2xhc3MoJ3NmQWN0aXZlJylcbiAgICAkKFwiI3NpZGViYXItbWVudVwiKS5maW5kKFwiYVtocmVmJD0nXCIgKyBwYXRoICsgXCInXVwiKS5wYXJlbnRzKCkuZXEoMykuc3VwZXJjbGljaygnc2hvdycpXG4gIH1cblxuICAkKCcjY2xvc2Utc2lkZWJhcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnY2xvc2VkLXNpZGViYXInKVxuICAgICQoJy5nbHlwaC1pY29uJywgdGhpcykudG9nZ2xlQ2xhc3MoJ2ljb24tYW5nbGUtcmlnaHQnKS50b2dnbGVDbGFzcygnaWNvbi1hbmdsZS1sZWZ0JylcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGJvZHlTaXplcigpIHtcbiAgdmFyIHdpbmRvd0hlaWdodCwgaGVhZGVySGVpZ2h0LCBjb250ZW50SGVpZ2h0XG5cbiAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnZml4ZWQtc2lkZWJhcicpKSB7XG5cbiAgICB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KClcbiAgICBoZWFkZXJIZWlnaHQgPSAkKCcjcGFnZS1oZWFkZXInKS5oZWlnaHQoKVxuICAgIGNvbnRlbnRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBoZWFkZXJIZWlnaHRcbiAgICAkKCcjcGFnZS1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJy5zY3JvbGwtc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcjcGFnZS1jb250ZW50JykuY3NzKCdtaW4taGVpZ2h0JywgY29udGVudEhlaWdodClcblxuICB9IGVsc2Uge1xuXG4gICAgd2luZG93SGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KClcbiAgICBoZWFkZXJIZWlnaHQgPSAkKCcjcGFnZS1oZWFkZXInKS5oZWlnaHQoKVxuICAgIGNvbnRlbnRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBoZWFkZXJIZWlnaHRcbiAgICAkKCcjcGFnZS1zaWRlYmFyJykuY3NzKCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0KVxuICAgICQoJy5zY3JvbGwtc2lkZWJhcicpLmNzcygnaGVpZ2h0JywgY29udGVudEhlaWdodClcbiAgICAkKCcjcGFnZS1jb250ZW50JykuY3NzKCdtaW4taGVpZ2h0JywgY29udGVudEhlaWdodClcblxuICB9XG59XG5cbmZ1bmN0aW9uIHBhZ2VUcmFuc2l0aW9ucygpIHtcbiAgdmFyIHRyYW5zaXRpb25zID0gWycucHQtcGFnZS1tb3ZlRnJvbUxlZnQnLCAncHQtcGFnZS1tb3ZlRnJvbVJpZ2h0JywgJ3B0LXBhZ2UtbW92ZUZyb21Ub3AnLCAncHQtcGFnZS1tb3ZlRnJvbUJvdHRvbScsICdwdC1wYWdlLWZhZGUnLCAncHQtcGFnZS1tb3ZlRnJvbUxlZnRGYWRlJywgJ3B0LXBhZ2UtbW92ZUZyb21SaWdodEZhZGUnLCAncHQtcGFnZS1tb3ZlRnJvbVRvcEZhZGUnLCAncHQtcGFnZS1tb3ZlRnJvbUJvdHRvbUZhZGUnLCAncHQtcGFnZS1zY2FsZVVwJywgJ3B0LXBhZ2Utc2NhbGVVcENlbnRlcicsICdwdC1wYWdlLWZsaXBJbkxlZnQnLCAncHQtcGFnZS1mbGlwSW5SaWdodCcsICdwdC1wYWdlLWZsaXBJbkJvdHRvbScsICdwdC1wYWdlLWZsaXBJblRvcCcsICdwdC1wYWdlLXJvdGF0ZVB1bGxSaWdodCcsICdwdC1wYWdlLXJvdGF0ZVB1bGxMZWZ0JywgJ3B0LXBhZ2Utcm90YXRlUHVsbFRvcCcsICdwdC1wYWdlLXJvdGF0ZVB1bGxCb3R0b20nLCAncHQtcGFnZS1yb3RhdGVVbmZvbGRMZWZ0JywgJ3B0LXBhZ2Utcm90YXRlVW5mb2xkUmlnaHQnLCAncHQtcGFnZS1yb3RhdGVVbmZvbGRUb3AnLCAncHQtcGFnZS1yb3RhdGVVbmZvbGRCb3R0b20nXVxuICBmb3IgKHZhciBpIGluIHRyYW5zaXRpb25zKSB7XG4gICAgdmFyIHRyYW5zaXRpb25fbmFtZSA9IHRyYW5zaXRpb25zW2ldXG4gICAgaWYgKCQoJy5hZGQtdHJhbnNpdGlvbicpLmhhc0NsYXNzKHRyYW5zaXRpb25fbmFtZSkpIHtcbiAgICAgICQoJy5hZGQtdHJhbnNpdGlvbicpLmFkZENsYXNzKHRyYW5zaXRpb25fbmFtZSArICctaW5pdCBwYWdlLXRyYW5zaXRpb24nKVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLmFkZC10cmFuc2l0aW9uJykucmVtb3ZlQ2xhc3ModHJhbnNpdGlvbl9uYW1lICsgJyAnICsgdHJhbnNpdGlvbl9uYW1lICsgJy1pbml0IHBhZ2UtdHJhbnNpdGlvbicpXG4gICAgICB9LCAxMjAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG5cbmlmICgkKCcjZXhjaGFuZ2VSYXRlQ2hhcnQnKS5sZW5ndGgpIHtcbiAgJC53aGVuKFxuICAgICQuZ2V0U2NyaXB0KHdpbmRvdy5fcm9vdCArICcvbGliL2NoYXJ0LWNvcmUuanMnKSxcbiAgICAkLkRlZmVycmVkKGZ1bmN0aW9uIChkZWZlcnJlZCkge1xuICAgICAgJChkZWZlcnJlZC5yZXNvbHZlKVxuICAgIH0pXG4gICkuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4Y2hhZ2VSYXRlcyA9IHdpbmRvdy5fZXhjaGFuZ2VSYXRlXG4gICAgdmFyIGxhYmVscyA9IFtdXG4gICAgdmFyIGNoYXJ0RGF0YUJ1eSA9IFtdXG4gICAgdmFyIGNoYXJ0RGF0YVNlbGwgPSBbXVxuXG4gICAgJC5lYWNoKGV4Y2hhZ2VSYXRlcywgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgbGFiZWxzLnB1c2goaW5kZXggKyBcIiAoXCIgKyB2YWx1ZS5jdXJyZW5jeSArIFwiKVwiKVxuICAgICAgY2hhcnREYXRhQnV5LnB1c2godmFsdWUuYnV5KVxuICAgICAgY2hhcnREYXRhU2VsbC5wdXNoKHZhbHVlLnNlbGwpXG4gICAgfSlcbiAgICB2YXIgY2hhcnREYXRhID0ge1xuICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgbGFiZWw6ICdCdXknLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNTUsIDk5LCAxMzIpJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigyNTUsIDk5LCAxMzIpJyxcbiAgICAgICAgICBkYXRhOiBjaGFydERhdGFCdXksXG4gICAgICAgICAgZmlsbDogZmFsc2VcbiAgICAgICAgfSx7XG4gICAgICAgICAgbGFiZWw6ICdTZWxsJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTQsIDE2MiwgMjM1KScsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoNTQsIDE2MiwgMjM1KScsXG4gICAgICAgICAgZGF0YTogY2hhcnREYXRhU2VsbCxcbiAgICAgICAgICBmaWxsOiBmYWxzZVxuICAgICAgICB9XSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICB0aXRsZTp7XG4gICAgICAgICAgZGlzcGxheTp0cnVlLFxuICAgICAgICAgIHRleHQ6ICdFeGNoYW5nZSBSYXRlcydcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBtb2RlOiAnaW5kZXgnLFxuICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgbW9kZTogJ25lYXJlc3QnLFxuICAgICAgICAgIGludGVyc2VjdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnQ291bnRyeSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XSxcbiAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnQlVZL1NFTEwgVmFsdWUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgfSBcbiAgICB9XG4gICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhjaGFuZ2VSYXRlQ2hhcnRcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5oZWlnaHQgPSA1MDA7XG4gICAgbmV3IENoYXJ0KGN0eCwgY2hhcnREYXRhKVxuICB9KS5mYWlsKGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZSkge1xuICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXG4gIH0pXG59XG5cbmlmICgkKCcjc2hhcmVOZXh0UGllJykubGVuZ3RoKSB7XG4gICQud2hlbihcbiAgICAkLmdldFNjcmlwdCh3aW5kb3cuX3Jvb3QgKyAnL2xpYi9waWVnYXVnZS5qcycpLFxuICAgICQuRGVmZXJyZWQoZnVuY3Rpb24gKGRlZmVycmVkKSB7XG4gICAgICAkKGRlZmVycmVkLnJlc29sdmUpXG4gICAgfSlcbiAgKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjc2hhcmVOZXh0UGllJykuZWFzeVBpZUNoYXJ0KHtcbiAgICAgIGJhckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwyNTUuNCknLFxuICAgICAgdHJhY2tDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC4xKScsXG4gICAgICBzY2FsZUNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgIHJvdGF0ZTogLTkwLFxuICAgICAgbGluZVdpZHRoOiA0LFxuICAgICAgc2l6ZTogMTAwLFxuICAgICAgYW5pbWF0ZTogMTAwMCxcbiAgICB9KVxuICB9KVxufVxuIiwiZXhwb3J0IGNsYXNzIFJlZ2lzdGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICgkKCcjcmVnaXN0ZXJGb3JtJykubGVuZ3RoKSB7XG4gICAgICBsZXQgJGZvcm0gPSAkKCcjcmVnaXN0ZXJGb3JtJylcbiAgICAgIGxldCAkcmVnVGV4dCA9ICRmb3JtLmZpbmQoJyNyZWdpc3RlclBvaW50VmFsdWUnKVxuICAgICAgbGV0ICRwcm9tb1RleHQgPSAkZm9ybS5maW5kKCcjcHJvbW90aW9uUG9pbnRWYWx1ZScpXG5cbiAgICAgICRmb3JtLmZpbmQoJyNpbnB1dFBvaW50Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHByb21vUGVyY2VudCA9ICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKClcbiAgICAgICAgbGV0IHJlZ1BlcmNlbnQgPSAxMDAgLSBwcm9tb1BlcmNlbnRcbiAgICAgICAgbGV0ICRwYWNrYWdlID0gJGZvcm0uZmluZCgnW25hbWU9cGFja2FnZV9pZF0gb3B0aW9uOnNlbGVjdGVkJykuZGF0YSgndmFsdWUnKVxuICAgICAgICAkcmVnVGV4dC50ZXh0KChyZWdQZXJjZW50IC8gMTAwICogJHBhY2thZ2UpLnRvRml4ZWQoMikpXG4gICAgICAgICRwcm9tb1RleHQudGV4dCgocHJvbW9QZXJjZW50IC8gMTAwICogJHBhY2thZ2UpLnRvRml4ZWQoMikpXG4gICAgICB9KVxuXG4gICAgICAkZm9ybS5maW5kKCdbbmFtZT1wYWNrYWdlX2lkXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBwcm9tb1BlcmNlbnQgPSAkKCcjaW5wdXRQb2ludCcpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpXG4gICAgICAgIGxldCByZWdQZXJjZW50ID0gMTAwIC0gcHJvbW9QZXJjZW50XG4gICAgICAgIGxldCAkcGFja2FnZSA9ICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuZGF0YSgndmFsdWUnKVxuICAgICAgICAkcmVnVGV4dC50ZXh0KChyZWdQZXJjZW50IC8gMTAwICogJHBhY2thZ2UpLnRvRml4ZWQoMikpXG4gICAgICAgICRwcm9tb1RleHQudGV4dCgocHJvbW9QZXJjZW50IC8gMTAwICogJHBhY2thZ2UpLnRvRml4ZWQoMikpXG4gICAgICB9KVxuXG4gICAgICB2YXIgJHNob3dNZW1iZXJCdG4gPSAkZm9ybS5maW5kKCcuYnRuLXNob3cnKVxuICAgICAgdmFyICRtb2RhbCA9ICQoJyNzaG93TW9kYWwnKVxuICAgICAgdmFyICRtb2RhbExvYWRlciA9ICRtb2RhbC5maW5kKCcubG9hZGluZycpXG4gICAgICB2YXIgJG1vZGFsRXJyb3IgPSAkbW9kYWwuZmluZCgnLmVycm9yJylcbiAgICAgIHZhciAkbW9kYWxDb250ZW50ID0gJG1vZGFsLmZpbmQoJyNtb2RhbENvbnRlbnQnKVxuICAgICAgJHNob3dNZW1iZXJCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgJG1vZGFsTG9hZGVyLnNob3coKVxuICAgICAgICAkbW9kYWxFcnJvci5oaWRlKClcbiAgICAgICAgJG1vZGFsQ29udGVudC5lbXB0eSgpXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpICsgJz91PScgKyAkdGhpcy5wYXJlbnQoKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmZpbmQoJy5mb3JtLWNvbnRyb2wnKS52YWwoKSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJG1vZGFsTG9hZGVyLmhpZGUoKVxuICAgICAgICAgICAgJG1vZGFsQ29udGVudC5odG1sKGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICAkbW9kYWxMb2FkZXIuaGlkZSgpXG4gICAgICAgICAgICAkbW9kYWxFcnJvci5zaG93KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTaGFyZXMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCQoJyN0cmFuc2ZlckZvcm0nKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMudHJhbnNmZXIoKVxuICAgIH1cbiAgICBpZiAoJCgnI3NoYXJlc1NlbGxGb3JtJykubGVuZ3RoKSB7XG4gICAgICB2YXIgJHNlbGxGb3JtID0gJCgnI3NoYXJlc1NlbGxGb3JtJylcbiAgICAgICRzZWxsRm9ybS5maW5kKCdbbmFtZT1xdWFudGl0eV0nKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCAkZm9ybSA9ICQodGhpcykucGFyZW50cygnZm9ybScpXG4gICAgICAgIGxldCB0b3RhbCA9ICRmb3JtLmZpbmQoJ1tuYW1lPXByaWNlXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSAqICQodGhpcykudmFsKClcbiAgICAgICAgJGZvcm0uZmluZCgnLnRvdGFsLXRleHQnKS50ZXh0KHRvdGFsLnRvRml4ZWQoMykpXG4gICAgICAgIGxldCBuZXRUb3RhbCA9IHRvdGFsIC0gKDAuMSAqIHRvdGFsKVxuICAgICAgICAkZm9ybS5maW5kKCcubmV0LXRvdGFsLXRleHQnKS50ZXh0KG5ldFRvdGFsLnRvRml4ZWQoMykpXG4gICAgICB9KVxuXG4gICAgICAkc2VsbEZvcm0uZmluZCgnW25hbWU9cHJpY2VdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0ICRmb3JtID0gJCh0aGlzKS5wYXJlbnRzKCdmb3JtJylcbiAgICAgICAgbGV0IHRvdGFsID0gJCh0aGlzKS5maW5kKCc6c2VsZWN0ZWQnKS52YWwoKSAqICQoJ1tuYW1lPXF1YW50aXR5XScpLnZhbCgpXG4gICAgICAgICRmb3JtLmZpbmQoJy50b3RhbC10ZXh0JykudGV4dCh0b3RhbC50b0ZpeGVkKDMpKVxuICAgICAgICBsZXQgbmV0VG90YWwgPSB0b3RhbCAtICgwLjEgKiB0b3RhbClcbiAgICAgICAgJGZvcm0uZmluZCgnLm5ldC10b3RhbC10ZXh0JykudGV4dChuZXRUb3RhbC50b0ZpeGVkKDMpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoJCgnI3NoYXJlc0J1eUZvcm0nKS5sZW5ndGgpIHtcbiAgICAgIHZhciAkYnV5Rm9ybSA9ICQoJyNzaGFyZXNCdXlGb3JtJylcbiAgICAgICRzZWxsRm9ybS5maW5kKCdbbmFtZT1xdWFudGl0eV0nKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCAkZm9ybSA9ICQodGhpcykucGFyZW50cygnZm9ybScpXG4gICAgICAgIGxldCB0b3RhbCA9ICRmb3JtLmZpbmQoJ1tuYW1lPXByaWNlXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSAqICQodGhpcykudmFsKClcbiAgICAgICAgJGZvcm0uZmluZCgnLnRvdGFsLXRleHQnKS50ZXh0KHRvdGFsLnRvRml4ZWQoMykpXG4gICAgICB9KVxuXG4gICAgICAkYnV5Rm9ybS5maW5kKCdbbmFtZT1wcmljZV0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgJGZvcm0gPSAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0nKVxuICAgICAgICBsZXQgdG90YWwgPSAkKHRoaXMpLmZpbmQoJzpzZWxlY3RlZCcpLnZhbCgpICogJCgnW25hbWU9cXVhbnRpdHldJykudmFsKClcbiAgICAgICAgJGZvcm0uZmluZCgnLnRvdGFsLXRleHQnKS50ZXh0KHRvdGFsLnRvRml4ZWQoMykpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICB0cmFuc2ZlciAoKSB7XG4gICAgdmFyICRmb3JtID0gJCgnI3RyYW5zZmVyRm9ybScpXG4gICAgdmFyICRzaG93TWVtYmVyQnRuID0gJGZvcm0uZmluZCgnLmJ0bi1zaG93JylcbiAgICB2YXIgJG1vZGFsID0gJCgnI3Nob3dNb2RhbCcpXG4gICAgdmFyICRtb2RhbExvYWRlciA9ICRtb2RhbC5maW5kKCcubG9hZGluZycpXG4gICAgdmFyICRtb2RhbEVycm9yID0gJG1vZGFsLmZpbmQoJy5lcnJvcicpXG4gICAgdmFyICRtb2RhbENvbnRlbnQgPSAkbW9kYWwuZmluZCgnI21vZGFsQ29udGVudCcpXG4gICAgJHNob3dNZW1iZXJCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgJG1vZGFsTG9hZGVyLnNob3coKVxuICAgICAgJG1vZGFsRXJyb3IuaGlkZSgpXG4gICAgICAkbW9kYWxDb250ZW50LmVtcHR5KClcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpICsgJz91PScgKyAkdGhpcy5wYXJlbnQoKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmZpbmQoJy5mb3JtLWNvbnRyb2wnKS52YWwoKSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAkbW9kYWxMb2FkZXIuaGlkZSgpXG4gICAgICAgICAgJG1vZGFsQ29udGVudC5odG1sKGUpXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGUpIHtcbiAgICAgICAgICAkbW9kYWxMb2FkZXIuaGlkZSgpXG4gICAgICAgICAgJG1vZGFsRXJyb3Iuc2hvdygpXG4gICAgICAgICAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgV2lkZ2V0IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICQoJ2FbaHJlZj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0pXG4gICAgXG4gICAgJChcIi50b2RvLWJveCBsaSBpbnB1dFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ3RvZG8tZG9uZScpXG4gICAgfSlcbiAgICBcbiAgICB2YXIgb3ZlcmFsbFdpZHRoID0gMFxuICAgICQoJy50aW1lbGluZS1zY3JvbGwgLnRsLXJvdycpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW0pIHtcbiAgICAgIHZhciAkZWxlbSA9ICQoZWxlbSlcbiAgICAgIG92ZXJhbGxXaWR0aCArPSAkZWxlbS5vdXRlcldpZHRoKCkgKyBwYXJzZUludCgkZWxlbS5jc3MoJ21hcmdpbi1sZWZ0JyksIDEwKSArIHBhcnNlSW50KCRlbGVtLmNzcygnbWFyZ2luLXJpZ2h0JyksIDEwKVxuICAgIH0pXG4gICAgJCgnLnRpbWVsaW5lLWhvcml6b250YWwnLCB0aGlzKS53aWR0aChvdmVyYWxsV2lkdGgpXG5cbiAgICAkKCcuaW5wdXQtc3dpdGNoLWFsdCcpLnNpbXBsZUNoZWNrYm94KClcblxuICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXS5jdXN0b20tY2hlY2tib3gnKS51bmlmb3JtKClcbiAgICAkKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0uY3VzdG9tLXJhZGlvJykudW5pZm9ybSgpXG4gICAgJCgnLmN1c3RvbS1zZWxlY3QnKS51bmlmb3JtKClcblxuICAgICQoJy5zZWxlY3RvcicpLmFwcGVuZCgnPGkgY2xhc3M9XCJnbHlwaC1pY29uIGljb24tY2FyZXQtZG93blwiPjwvaT4nKVxuXG4gICAgJCgnLmNoZWNrZXIgc3BhbicpLmFwcGVuZCgnPGkgY2xhc3M9XCJnbHlwaC1pY29uIGljb24tY2hlY2tcIj48L2k+JylcbiAgICAkKCcucmFkaW8gc3BhbicpLmFwcGVuZCgnPGkgY2xhc3M9XCJnbHlwaC1pY29uIGljb24tY2lyY2xlXCI+PC9pPicpXG4gICAgXG4gICAgJCgnLnNjcm9sbGFibGUtc2xpbScpLnNsaW1TY3JvbGwoe1xuICAgICAgY29sb3I6ICcjOGRhMGFhJyxcbiAgICAgIHNpemU6ICcxMHB4JyxcbiAgICAgIGFsd2F5c1Zpc2libGU6IHRydWVcbiAgICB9KVxuICAgIFxuICAgICQoJy5zY3JvbGxhYmxlLXNsaW0tc2lkZWJhcicpLnNsaW1TY3JvbGwoe1xuICAgICAgY29sb3I6ICcjOGRhMGFhJyxcbiAgICAgIHNpemU6ICcxMHB4JyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYWx3YXlzVmlzaWJsZTogdHJ1ZVxuICAgIH0pXG4gICAgXG4gICAgJCgnLnNjcm9sbGFibGUtc2xpbS1ib3gnKS5zbGltU2Nyb2xsKHtcbiAgICAgIGNvbG9yOiAnIzhkYTBhYScsXG4gICAgICBzaXplOiAnNnB4JyxcbiAgICAgIGFsd2F5c1Zpc2libGU6IGZhbHNlXG4gICAgfSlcblxuICAgICQoJy5sb2FkaW5nLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJ0biA9ICQodGhpcylcbiAgICAgIGJ0bi5idXR0b24oJ2xvYWRpbmcnKVxuICAgIH0pXG5cbiAgICAkKCcudG9vbHRpcC1idXR0b24nKS50b29sdGlwKHtcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknXG4gICAgfSlcbiAgICBcbiAgICAkKCcuYWxlcnQtY2xvc2UtYnRuJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlT3V0RG93bicpXG4gICAgfSlcbiAgICBcbiAgICAkKCcucG9wb3Zlci1idXR0b24nKS5wb3BvdmVyKHtcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGF0YUlEID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJylcbiAgICAgICAgcmV0dXJuICQoZGF0YUlEKS5odG1sKClcbiAgICAgIH1cbiAgICB9KS5jbGljayhmdW5jdGlvbihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSlcblxuICAgICQoJy5wb3BvdmVyLWJ1dHRvbi1kZWZhdWx0JykucG9wb3Zlcih7XG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGh0bWw6IHRydWUsXG4gICAgICBhbmltYXRpb246IHRydWVcbiAgICB9KS5jbGljayhmdW5jdGlvbihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSlcblxuICAgICQoJy5kYXRlcGlja2VyJykuYnNkYXRlcGlja2VyKHtcbiAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnXG4gICAgfSlcbiAgICAkKCcuaW5wdXQtc3dpdGNoJykuYm9vdHN0cmFwU3dpdGNoKClcblxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsc2NyZWVuLWJ0bicpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbHNjcmVlbi1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xuICAgICAgICAgIHNjcmVlbmZ1bGwucmVxdWVzdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59Il19
