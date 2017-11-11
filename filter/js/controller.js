app.controller("myctrl",($scope,myfactory)=>{
    console.log(`controller run ....`);
    var promise=myfactory.callServer();
promise.then(function(data){
    $scope.tempdata=data;
    console.log(tempdata);
},
function(err){
    $scope.Error=err;
}
)
});