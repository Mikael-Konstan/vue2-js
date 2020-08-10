import compGlobal from './components/comp_global'


/* istanbul ignore next */
compGlobal.install = function(Vue) {
  Vue.component(compGlobal.name, compGlobal);
};

export default compGlobal;
