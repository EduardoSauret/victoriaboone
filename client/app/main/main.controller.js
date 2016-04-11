'use strict';

(function() {


    class MainController {

        constructor($http) {
            this.$http = $http;
            this.awesomeThings = [];
        }

        $onInit() {
            this.$http.get('/api/things').then(response => {
                this.awesomeThings = response.data;
            });
        }

        addThing() {
            if (this.newThing) {
                this.$http.post('/api/things', { name: this.newThing });
                this.newThing = '';
            }
        }

        deleteThing(thing) {
            this.$http.delete('/api/things/' + thing._id);
        }

        MainController.$inject = ['$state', '$compile', '$scope'];

        fullPagejs($state, $compile, $scope) {
            this.mainOptions = {
                sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
                menu: '#menu'
            };

            this.moog = function(merg) { console.log(merg); };

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

            this.addSlide = function() {
                _this.slides.push({
                    title: 'New Slide',
                    description: 'I made a new slide!',
                    src: 'images/1.png'
                });

                //$compile(angular.element($('.slide')))($scope);
            };
        }

    }

    angular.module('victoriabooneApp')
        .component('main', {
            templateUrl: 'app/main/main.html',
            controller: MainController
        });

})();

MainController.$inject = ['$state', '$compile', '$scope'];

function MainController($state, $compile, $scope) {

    var _this = this;

    this.mainOptions = {
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu'
    };

    this.moog = function(merg) { console.log(merg); };

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

    this.addSlide = function() {
        _this.slides.push({
            title: 'New Slide',
            description: 'I made a new slide!',
            src: 'images/1.png'
        });

        //$compile(angular.element($('.slide')))($scope);
    };

}
