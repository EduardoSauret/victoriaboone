'use strict';

angular.module('victoriabooneApp')
  .directive('sidebar', () => ({
    templateUrl: 'components/sidebar/sidebar.html',
    restrict: 'E',
    controller: 'SidebarCtrl',
    controllerAs: 'sidebar'
  }));
