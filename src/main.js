import Vue from 'vue';
import screen from '@/utils/screen';
import App from './App.vue';
import store from './store';
import './components';

import './assets/sass/index.scss';

Vue.config.productionTip = false;
Vue.prototype.$screen = screen;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
