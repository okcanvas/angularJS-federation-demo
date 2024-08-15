import { normalizeComponent } from "./_plugin-vue2_normalizer-a68c2903.js";
const button = "_button_10o1z_2";
const style0 = {
  button
};
const _sfc_main = {
  name: "Button",
  data: function() {
    return {
      count: 0
    };
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("button", { class: _vm.$style.button, attrs: { "id": "btn-remote" }, on: { "click": function($event) {
    _vm.count++;
  } } }, [_vm._t("default", function() {
    return [_vm._v("remote-simple's Button: " + _vm._s(_vm.count))];
  })], 2);
};
var _sfc_staticRenderFns = [];
const __cssModules = {
  "$style": style0
};
function _sfc_injectStyles(ctx) {
  for (var key in __cssModules) {
    this[key] = __cssModules[key];
  }
}
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  _sfc_injectStyles,
  null,
  null,
  null
);
const Button = __component__.exports;
export {
  Button as default
};
