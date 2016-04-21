;
(function() {
    'use strict';

    angular
        .module('victoriabooneApp')
        .controller('LeftCtrl', LeftCtrl);

    LeftCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', '$log'];

    function LeftCtrl($scope, $timeout, $mdSidenav, $log) {

        $scope.close = function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left').close()
                .then(function() {
                    $log.debug("close LEFT is done");
                });
        };

    }

})();
