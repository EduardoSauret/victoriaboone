'use strict';

angular.module('victoriabooneApp')
  .directive('fullpage', () => ({
    templateUrl: 'components/fullpage/fullpage.html',
    restrict: 'E',
    controller: 'FullpageCtrl',
    controllerAs: 'vm'
  }));
