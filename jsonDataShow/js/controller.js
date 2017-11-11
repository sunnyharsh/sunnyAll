app.controller("myctrl", mycontroller);

function mycontroller($scope, myfactory) {
    console.log("controller run.....");
    $scope.callMe = function () {
        var promise = myfactory.callServer();
        for (let i = 0; i < 10; i++) {
            console.log("data is print" + i);
        }
        promise.then(function (data) {
            // $scope.result = data;
            console.log("data comes");
            $scope.tempdata = data;
        }, function (err) {
            $scope.Error = err;
        })
    }
}
