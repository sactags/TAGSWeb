'use strict';


var tagsApp = angular.module('TAGSWeb', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/members', {
        templateUrl: 'partials/members.htm',
        controller: TAGSWebController
      }).
       when('/donations', {
           templateUrl: 'partials/donations.htm',
           controller: TAGSWebController
       }).
       when('/projects', {
           templateUrl: 'partials/projects.htm',
           controller: TAGSWebController
       }).
       when('/visionmission', {
           templateUrl: 'partials/vision_mission.htm',
           controller: TAGSWebController
       }).       
       when('/shopping_cart', {
           templateUrl: 'partials/shopping_cart.htm',
           controller: TAGSWebController
       }).

      otherwise({
          redirectTo: '/members'
      });
  }]);
// create a data service t


tagsApp.factory("DataService", function () {

    //var myTagsData = new tagsdata();
  
    //return {
    //    tagsdata: myTagsData     

    //};

});


tagsApp.filter('unique', function () {
    return function (input, key) {
        var unique = {};
        var uniqueList = [];
        for (var i = 0; i < input.length; i++) {
            if (typeof unique[input[i][key]] == "undefined") {
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});


tagsApp.directive('myHref', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var url = $parse(attrs.myHref)(scope);
            element.attr('href', url);
        }
    }
});