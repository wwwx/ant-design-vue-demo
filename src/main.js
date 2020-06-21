import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import antDesignComponents from './antDesignComponents';

Vue.config.productionTip = false;
Vue.use(antDesignComponents);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
