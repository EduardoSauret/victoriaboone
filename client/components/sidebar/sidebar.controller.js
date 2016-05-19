;
(function() {
    'use strict';

    angular
        .module('victoriabooneApp')
        .controller('SidebarCtrl', SidebarCtrl);

    SidebarCtrl.$inject = ['$state', '$compile', '$scope', '$timeout', '$mdSidenav', '$log'];

    function SidebarCtrl($state, $compile, $scope, $timeout, $mdSidenav, $log) {


        ///////////////////////// SIDENAV

        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function() {
            return $mdSidenav('right').isOpen();
        };
        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = this,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function() {
                ///////////////////////// HAMBURGER
                hamburger.classList.toggle("is-active");
                $log.debug("Hamburger toggle" + hamburger.classList + " is done");                       
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
        }

        function buildToggler(navID) {
            return function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }
        
        ///////////////////////// md-backdrop
        $scope.isSidenavOpen = false;

        $scope.$watch('isSidenavOpen', function(isSidenavOpen) {
            $log.debug('watch sidenav is ' + (isSidenavOpen ? 'open' : 'closed'));
        });


        var hamburger = document.querySelector(".hamburger");
        var navfade = document.querySelector(".navFade");
        $scope.close = close;

        function close() {
            navfade.classList.toggle("fadeOut");
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


        $scope.backdropToggle = function (){
            if(true){
                close();
                $log.debug("backdropToggle is done");
            }
        };


    }

})();
