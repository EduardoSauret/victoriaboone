;
(function() {
    'use strict';

    angular
        .module('victoriabooneApp')
        .controller('FullpageCtrl', FullpageCtrl);

    FullpageCtrl.$inject = ['$state', '$compile', '$scope', '$timeout', '$mdSidenav', '$log', '$http'];

    function FullpageCtrl($state, $compile, $scope, $timeout, $mdSidenav, $log, $http) {

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

        this.spring01 = [{
            id: 'spring01-01',
            title: ''
        },{
            id: 'spring01-02',
            title: ''
        },{
            id: 'spring01-03',
            title: ''
        },{
            id: 'spring01-04',
            title: ''
        },{
            id: 'spring01-05',
            title: ''
        },{
            id: 'spring01-06',
            title: ''
        },{
            id: 'spring01-07',
            title: ''
        },{
            id: 'spring01-08',
            title: ''
        },{
            id: 'spring01-09',
            title: ''
        },{
            id: 'spring01-10',
            title: ''
        },{
            id: 'spring01-11',
            title: ''
        },{
            id: 'spring01-12',
            title: ''
        },{
            id: 'spring01-13',
            title: ''
        },];

        this.spring02 = [{
            id: 'spring02-01'
        }, {
            id: 'spring02-02'
        }, {
            id: 'spring02-03'
        }, {
            id: 'spring02-04'
        }, {
            id: 'spring02-05'
        }, {
            id: 'spring02-06'
        }, {
            id: 'spring02-07'
        }, {
            id: 'spring02-08'
        }, {
            id: 'spring02-09'
        }, {
            id: 'spring02-10'
        }, {
            id: 'spring02-11'
        }, {
            id: 'spring02-12'
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
