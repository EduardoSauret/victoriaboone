'use strict';

angular.module('victoriabooneApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
                name: 'main',
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
      });
  });
