'use strict';

angular.module('victoriabooneApp', [
  'victoriabooneApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'fullPage.js'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $stateProvider
      .state({
        name: 'home',
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });

    $urlRouterProvider
      .otherwise('/home');

    $locationProvider.html5Mode(true);
  });
