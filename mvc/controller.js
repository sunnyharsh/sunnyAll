  // step 2 controller create
  app.controller("myctrl", mycontroller);

  function mycontroller($scope, myfactroy) {
      $scope.result = 0;
      console.log("controller start");
      $scope.compute = function () {
          console.log("compute start");
          $scope.result = myfactroy.computeAmount($scope.pr, $scope.qt);
    
      }
  }
