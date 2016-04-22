;
(function() {
    'use strict';

    angular
        .module('victoriabooneApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$state', '$compile', '$scope', '$timeout', '$mdSidenav', '$log'];

    function MainController($state, $compile, $scope, $timeout, $mdSidenav, $log) {

        var _this = this;

        this.mainOptions = {
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            menu: '#menu'
        };
        this.slides = [{
            title: 'Simple',
            description: 'Easy to use. Configurable and customizable.',
            src: 'images/1.png'
        }, {
            title: 'Cool',
            description: 'It just looks cool. Impress everybody with a simple and modern web design!',
            src: 'images/2.png'
        }, {
            title: 'Compatible',
            description: 'Working in modern and old browsers too!',
            src: 'images/3.png'
        }];

        this.moog = function(merg) {
            hamburger.classList.toggle("is-active");
            console.log(merg);
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left').close()
                .then(function() {
                    $log.debug("close LEFT is done");
                });
        };

        this.addSlide = function() {
            _this.slides.push({
                title: 'New Slide',
                description: 'I made a new slide!',
                src: 'images/1.png'
            });

            //$compile(angular.element($('.slide')))($scope);
        };


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
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        $scope.keepOpen = !$scope.keepOpen;
                        if ($scope.keepOpen)
                            angular.element('md-backdrop.md-sidenav-backdrop-custom').removeClass('disabled');
                        else
                            angular.element('md-backdrop.md-sidenav-backdrop-custom').addClass('disabled');
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

        ///////////////////////// HAMBURGER
        // Look for .hamburger
        var hamburger = document.querySelector(".hamburger");
        // On click
        hamburger.addEventListener("click", function() {
            // Toggle class "is-active"
            hamburger.classList.toggle("is-active");
            // Do something else, like open/close menu
        });


        ///////////////////////// Material Design Background/Hamburger Function
        $scope.keepOpen = false;








    }

})();
