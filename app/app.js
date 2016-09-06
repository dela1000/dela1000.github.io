angular.module('home', [
  'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
  .state('home', {
      url: '/home',
      templateUrl: 'app/about/about.html'
  })

  .state('contact', {
    url: '/contact',
    templateUrl: 'app/contact/contact.html'
  })
})
