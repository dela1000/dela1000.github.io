angular.module('home', [
  'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/about/about.html'
    })
    .when('/contact', {
      templateUrl: 'app/contact/contact.html'
    })
})
