angular.module('habitizer', [
  'habitizer.myCommitments',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/myCommitments', {
      templateUrl: 'app/myCommitments/myCommitmentsTemplate.html',
      controller: 'myCommitmentsController'
    })
    .otherwise({
      redirectTo: '/myCommitments'
    });


})

.run(function ($rootScope, $location) {

});
