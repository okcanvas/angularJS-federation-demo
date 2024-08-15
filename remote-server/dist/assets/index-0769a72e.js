import { importShared } from "./__federation_fn_import-f97b71f8.js";
import Section from "./__federation_expose_Remote-simple-section-7e8c944b.js";
import Button from "./__federation_expose_Remote-simple-button-6eb48d51.js";
import { normalizeComponent } from "./_plugin-vue2_normalizer-a68c2903.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "App",
  components: {
    Section,
    Button
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Section", [_c("Button")], 1);
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
const App = __component__.exports;
const Vue = await importShared("vue");
Vue.config.productionTip = false;
var vm = new Vue({
  render: (h) => h(App)
});
vm.$mount("#app");
