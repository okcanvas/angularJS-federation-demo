import { normalizeComponent } from "./_plugin-vue2_normalizer-a68c2903.js";
const section = "_section_52r3k_1";
const styleSection = {
  section
};
const h1 = "_h1_100ba_1";
const styleCommon = {
  h1
};
const _sfc_main = {
  name: "Section",
  computed: {
    $style() {
      return Object.assign(styleSection, styleCommon);
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("section", { class: _vm.$style.section }, [_c("h1", { class: _vm.$style.h1 }, [_vm._v("This is a section from /remote-simple.")]), _vm._t("default")], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const Section = __component__.exports;
export {
  Section as default
};
