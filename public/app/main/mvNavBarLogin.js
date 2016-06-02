angular.module('app').controller('mvNavBarLoginCtrl',function($scope,$http){
	$scope.signin=function(username,password){
		$http.post('/login',{username:username,password:password}).then(function(response){
			if(response.data.sucess){
				console.log('Login in')
			}
			else{
				console.log('failed');
			}
		})
	}
})