app.controller("myctrl", mycontroller);

function mycontroller($scope, myfactory) {
    console.log("controller run");
    $scope.callMe = function () {
        var promise = myfactory.callServer();
        promise.then(function (data) {
            // $scope.result = data;
            console.log("data comes");
            $scope.tempdata = data;
        }, function (err) {
            $scope.Error = err;
        })
    }
}
