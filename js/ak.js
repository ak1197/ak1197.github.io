var akApp = angular.module('akApp', []);
akApp.controller('ak', function ($scope) {
    $scope.save = function () {
        console.log($scope.visitorName, $scope.visitorEmail, $scope.visitorComment);
        Email.send({
            Host: "smtp.yourisp.com",
            Username: "username",
            Password: "password",
            To: 'them@website.com',
            From: "you@isp.com",
            Subject: "This is the subject",
            Body: "And this is the body"
        }).then(
            message => alert(message)
        );
    };
});
