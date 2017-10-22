app.controller("myctrl",($scope,$filter)=>{
    $scope.fullname ="";
    $scope.call=function(){
        $scope.fullname = $scope.name +" Kumar";
        //$scope.myresult = $filter('initcap')($scope.name,'A','B');
        //$scope.myresult2 =$filter('repeat')($scope.name,'1','10');
    }
})