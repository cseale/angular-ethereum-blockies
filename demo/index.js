import angular from 'angular';
import angularjsEthereumidenticon from '../index';

import DemoComponent from './demo.js';

const App = angular
  .module('angularjs-identicon.demo', [
    angularjsEthereumidenticon
  ])
  .component('demo', DemoComponent)
  .name;

export default App;