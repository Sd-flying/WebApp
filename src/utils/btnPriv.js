import Vue from 'vue'
import {Priv} from '@/utils/Priv'

/** 权限指令**/
Vue.directive('priv', {
  bind: function(el, binding) {
    if (!Vue.prototype.$_hasPriv(binding.value)) {
      // el.parentNode.removeChild(el);
      el.style['display'] = 'none';
    }
  },
  inserted: function(el, binding) {
    if (!Vue.prototype.$_hasPriv(binding.value)) {
      // el.parentNode.removeChild(el);
      el.style['display'] = 'none';
    }
  },
  update: function(el, binding, vnode, oldVnode) {
    if (!Vue.prototype.$_hasPriv(binding.value)) {
      // el.parentNode.removeChild(el);
      el.style['display'] = 'none';
    }
  }
});
// 权限检查方法
Vue.prototype.$_hasPriv = function(privId) {
  return Priv.hasPriv(privId);
};
