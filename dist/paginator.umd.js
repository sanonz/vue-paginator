(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Paginator = factory());
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

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
  var script = {
    props: {
      page: {
        type: Number,
        required: true
      },
      size: {
        type: Number,
        default: 20
      },
      total: {
        type: Number,
        required: true
      },
      range: {
        type: Number,
        default: 2
      },
      prevText: {
        type: [String, Number],
        default: '上一页'
      },
      nextText: {
        type: [String, Number],
        default: '下一页'
      }
    },
    data: function data() {
      return {};
    },
    computed: {
      count: function count() {
        return Math.ceil(this.total / this.size);
      },
      left: function left() {
        return this.page - this.range;
      },
      right: function right() {
        return this.page + this.range;
      },
      loop: function loop() {
        var result = Math.min(this.right, this.count) - this.left + 1;
        return result < 0 ? 0 : result;
      }
    },
    methods: {
      onChange: function onChange(page) {
        this.router(page);
        this.$emit('change', page);
      },
      router: function router(page) {
        var path = [this.$route.path, this.paramsSerializer(_objectSpread({}, this.$route.query, {
          page: page
        }))];
        this.$router.replace(path.join('?'));
      },
      paramsSerializer: function paramsSerializer(params) {
        var result = [];

        for (var key in params) {
          result.push(key + '=' + encodeURIComponent(params[key]));
        }

        return result.join('&');
      }
    }
  };

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.total || _vm.count > 1 ? _c("ul", {
      staticClass: "paginator"
    }, [_c("li", {
      staticClass: "paginator-item"
    }, [_vm.page !== 1 ? _c("a", {
      staticClass: "paginator-row",
      on: {
        click: function click($event) {
          _vm.onChange(_vm.page - 1);
        }
      }
    }, [_vm._v(_vm._s(_vm.prevText))]) : _c("span", {
      staticClass: "paginator-row"
    }, [_vm._v(_vm._s(_vm.prevText))])]), _vm._v(" "), _vm.page > _vm.range + 1 ? [_c("li", {
      staticClass: "paginator-item"
    }, [_c("a", {
      staticClass: "paginator-row",
      on: {
        click: function click($event) {
          _vm.onChange(1);
        }
      }
    }, [_vm._v("1")])]), _vm._v(" "), _vm._m(0)] : _vm._e(), _vm._v(" "), _vm._l(_vm.loop, function (v) {
      return v + _vm.left - 1 > 0 ? _c("li", {
        key: v,
        class: (_obj = {}, _obj["paginator-item"] = true, _obj["paginator-active"] = v + _vm.left - 1 === _vm.page, _obj)
      }, [_c("a", {
        staticClass: "paginator-row",
        on: {
          click: function click($event) {
            _vm.onChange(v + _vm.left - 1);
          }
        }
      }, [_vm._v(_vm._s(v + _vm.left - 1))])]) : _vm._e();

      var _obj;
    }), _vm._v(" "), _vm.right < _vm.count ? [_vm._m(1), _vm._v(" "), _c("li", {
      staticClass: "paginator-item"
    }, [_c("a", {
      staticClass: "paginator-row",
      on: {
        click: function click($event) {
          _vm.onChange(_vm.count);
        }
      }
    }, [_vm._v(_vm._s(_vm.count))])])] : _vm._e(), _vm._v(" "), _c("li", {
      staticClass: "paginator-item"
    }, [_vm.page !== _vm.count ? _c("a", {
      staticClass: "paginator-row",
      on: {
        click: function click($event) {
          _vm.onChange(_vm.page + 1);
        }
      }
    }, [_vm._v(_vm._s(_vm.nextText))]) : _c("span", {
      staticClass: "paginator-row"
    }, [_vm._v(_vm._s(_vm.nextText))])])], 2) : _vm._e();
  };

  var __vue_staticRenderFns__ = [function () {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("li", {
      staticClass: "paginator-item"
    }, [_c("span", {
      staticClass: "paginator-row"
    }, [_vm._v("...")])]);
  }, function () {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("li", {
      staticClass: "paginator-item"
    }, [_c("span", {
      staticClass: "paginator-row"
    }, [_vm._v("...")])]);
  }];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__ = undefined;
  /* scoped */

  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* component normalizer */

  function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {}; // For security concerns, we use only base name in production mode.

    component.__file = "E:\\MyProjects\\htdocs\\demo\\vue-paginate\\src\\Paginator.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component;
  }
  /* style inject */

  /* style inject SSR */


  var Paginator = __vue_normalize__({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

  return Paginator;

})));
