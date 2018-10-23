import Vue from 'vue';
import {breakNumberOnRanks} from '../helpers';

Vue.filter('currency', function (value, type) {
  if (type === '$') {
    return `$${breakNumberOnRanks(parseFloat(value).toFixed(2))}`;
  }
});