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

        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
