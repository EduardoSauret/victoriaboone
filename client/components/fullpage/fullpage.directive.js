'use strict';

angular.module('victoriabooneApp')
    .directive('fullPage', function() {
        return {
            templateUrl: 'components/fullpage/fullpage.html',
            restrict: 'E',
            controller: FullpageController,
            controllerAs: 'vm'
        };
    });







