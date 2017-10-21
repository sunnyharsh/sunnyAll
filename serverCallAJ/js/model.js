app.factory("myfactory", ($http, $q) => {
    var object = {
        callServer() {
            console.log("model run");
            var url = "https://raw.githubusercontent.com/sunnyharsh/sunnyAll/master/pumaJsonGender.json";
            var defererdObject = $q.defer();
            $http.get(url).then(function (data) {
                console.log("Response is Success...");
                defererdObject.resolve(data.data);

            }, function (Error) {
                console.log("Error is Come...");
                defererdObject.reject(error);
            });
            console.log("Server Called....");
            return defererdObject.promise;
        }
    }
    return object;
})
