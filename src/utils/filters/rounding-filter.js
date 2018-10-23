import Vue from 'vue';
import {roundingNumber} from '../helpers';

Vue.filter('rounding', function (value) {
  return `${roundingNumber(value)}`;
});