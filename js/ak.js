var app = angular.module('akApp', ['$scope']);
app.controller('ak', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    console.log($scope);
});
