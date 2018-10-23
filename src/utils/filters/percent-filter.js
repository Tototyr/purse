import Vue from 'vue';

Vue.filter('percent', function (value) {
  return `${parseFloat(value).toFixed(2)}%`;
});