app.factory("myfactory", ($http, $q) => {
    var object = {

        callServer() {
            console.log("model run....");
            var url = "https://raw.githubusercontent.com/kundan4all/json/master/mobile.json";
            //var url = "http://api.wordnik.com:80/v4/word.json/${word}/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
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
