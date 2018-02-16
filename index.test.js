import angular from 'angular';
import 'angular-mocks';

import angularjsIdenticon from './index';

describe('angularjs-bytes', function () {
  beforeEach(angular.mock.module(angularjsIdenticon));

  describe('identicon', function () {
    it('should be defined correctly', function () {
      expect(angularjsIdenticon).toBe('angularjs-identicon');
    });
  });
});