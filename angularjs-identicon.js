import angular from 'angular';
import Identicon from 'identicon.js';

const DEFAULT_SIZE = 32;

angular
  .module('angularjs-identicon', [])
  .directive('identicon', function() {
    return {
      restrict: 'E',
      template: '<img width={{size}} height={{size}} src="{{src}}">',
      replace: false,
      scope: {
        seed: '@',
        options: '='
      },
      link: function ($scope) {
        const options = $scope.options || {};
        const data = new Identicon($scope.seed, options || {size: DEFAULT_SIZE}).toString();
        const format = ($scope.options.format === 'svg') ? 'svg+xml' : 'png';

        // Render
        $scope.size = options.size || DEFAULT_SIZE;
        $scope.src = `data:image/${format};base64,${data}`;
      }
    };
  });


