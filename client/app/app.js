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
    .config(function($urlRouterProvider, $locationProvider, $stateProvider) {

        $stateProvider
            .state({
                name: 'test',
                url: '/test',
                templateUrl: 'components/fullpage/fullpage.html',
                controller: 'MainController',
                controllerAs: 'vm'
            });

        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
