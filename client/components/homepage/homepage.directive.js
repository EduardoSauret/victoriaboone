'use strict';

angular.module('victoriabooneApp')
  .directive('homePage', () => ({
    templateUrl: 'components/homepage/homepage.html',
    restrict: 'E',
    controller: 'FullpageCtrl',
    controllerAs: 'vm'
  }));
