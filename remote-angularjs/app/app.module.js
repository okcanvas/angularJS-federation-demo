import angular from 'angular';

const sample = angular
  .module("angularApp",[])
  .controller("sampleModule", ['$scope', function($scope) {
    $scope.hello = "Hello from AngularJS";
  }]);
export default sample;