'use strict';

angular.module('victoriabooneApp')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarCtrl',
    controllerAs: 'nav'
  }));
