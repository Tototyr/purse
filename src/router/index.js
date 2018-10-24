import Vue from 'vue';
import Router from 'vue-router';
import MarketTable from '@/components/market-table/market-table';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MarketTable',
      component: MarketTable
    }
  ]
});
