app.controller("homectrl" ,function($scope , $routeParams){
    $scope.result=$routeParams.first + " " + $routeParams.last;
})