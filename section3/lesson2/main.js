var app = angular.module('codecraft', []);

app.controller('ParentController', function ($scope, $rootScope) {

});

app.controller('ChildController', function ($scope, $rootScope) {
  $scope.reset = function () {
    $rootScope.name = "Reset by child";
  };
});
