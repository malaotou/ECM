angular.module('app').controller('mvNavBarLoginCtrl',function($scope, $http, mvAuth,$location) {
	//$scope.identity = mvIdentity;
   $scope.signin = function(username, password) {
    mvAuth.authenticateUser(username, password).then(function(success) {
      if(success) {
        console.log('sucess');
        //mvNotifier.notify('You have successfully signed in!');
      } else {
       //mvNotifier.notify('Username/Password combination incorrect');
        console.log('failed');
      }
    });
  }

  $scope.signout = function() {
    mvAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
     // mvNotifier.notify('You have successfully signed out!');
      $location.path('/');
    })
  }
})