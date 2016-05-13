'use strict';

class NavbarCtrl {

    menuClick(merg) {
        console.log(merg);
    }

    /*Fullstack menu start-non-standard
    menu = [{
      'title': 'Home',
      'state': 'main'
    }];

    isCollapsed = true;
    //end-non-standard

    constructor() {
      } 
    */
}

angular.module('victoriabooneApp')
    .controller('NavbarCtrl', NavbarCtrl);
