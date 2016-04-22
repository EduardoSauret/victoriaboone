;
(function() {
    'use strict';

    angular
        .module('victoriabooneApp')
        .controller('LeftCtrl', LeftCtrl);

    LeftCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', '$log'];

    function LeftCtrl($scope, $timeout, $mdSidenav, $log) {

        $scope.keepOpen = false;

        var hamburger = document.querySelector(".hamburger");

        $scope.close = function() {
            hamburger.classList.toggle("is-active");
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left')
                .toggle()
                .then(function() {
                    $scope.keepOpen = !$scope.keepOpen;
                    if ($scope.keepOpen)
                        angular.element('md-backdrop.md-sidenav-backdrop-custom').removeClass('disabled');
                    else
                        angular.element('md-backdrop.md-sidenav-backdrop-custom').addClass('disabled');
                        $log.debug("close LEFT is done");
                });
        };

    }

})();
