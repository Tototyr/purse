//Core
import Vue from 'vue';

// Components
import App from './App';
import router from './router';

// Filters
import Filters from './utils/filters';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
