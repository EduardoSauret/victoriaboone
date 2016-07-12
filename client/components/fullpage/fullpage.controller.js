;
(function() {
    'use strict';

    angular
        .module('victoriabooneApp')
        .controller('FullpageCtrl', FullpageCtrl);

    FullpageCtrl.$inject = ['$state', '$compile', '$scope', '$timeout', '$mdSidenav', '$log'];

    function FullpageCtrl($state, $compile, $scope, $timeout, $mdSidenav, $log) {

    	var _this = this;

        this.mainOptions = {
            sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
            anchors: ['home', 'spring-01', 'spring-02', 'whoweare'],
            menu: '.active-link'
        };
        this.slides = [{
            title: 'Simple',
            description: 'Easy to use. Configurable and customizable.',
            //src: 'assets/images/spring01/IMG_01.jpg'
        }, {
            title: 'Cool',
            description: 'It just looks cool. Impress everybody with a simple and modern web design!',
            //src: 'images/2.png'
        }, {
            title: 'Compatible',
            description: 'Working in modern and old browsers too!',
            //src: 'images/3.png'
        }];

        this.moog = function(merg) {
            //hamburger.classList.toggle("is-active");
            console.log(merg);
            // Component lookup should always be available since we are not using `ng-if`

        };

        this.menuClick = function(merg) {
            console.log(merg);
        }

        this.addSlide = function() {
            _this.slides.push({
                title: 'New Slide',
                description: 'I made a new slide!',
                src: 'images/1.png'
            });

            //$compile(angular.element($('.slide')))($scope);
        };


    }

})();
