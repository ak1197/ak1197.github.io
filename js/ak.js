var app = angular.module('akApp', []);
app.controller('ak', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    console.log($scope);
});
