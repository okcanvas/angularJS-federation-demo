import angular from 'angular';

console.log('====', 1)

const app = angular.module("angularApp", [])


app.controller("ctrl1", ['$scope', function($scope) {
  $scope.hello = "Hello from AngularJS sampleComponent";
  $scope.click = function() {
    alert("버튼 클릭");
  }
}]);

app.controller("ctrl2", ['$scope', function($scope) {
  $scope.txt = "ctrl2 컨트롤러입니다.";
  $scope.click = function() {
  	alert("ctrl2 컨트롤러입니다.");
  }
}]);

export default app;



/*
import angular from 'angular';

const sample = angular
  .module("simpleApp",[])
  .controller("simpleAppController", ['$scope', function($scope) {
    $scope.hello = "Hello from AngularJS";
  }]);
export default sample;
*/

  