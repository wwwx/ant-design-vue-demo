import Button from './button/index.vue';
const components = [Button];
const prefix = 'hw';
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(`${prefix}-${component.name}`, component);
  });
};

export default install;

