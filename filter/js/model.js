app.factory("myfactory",($http,$q)=>{
    var object={
        callServer(){
    console.log("factory run...")
    var url= "https://raw.githubusercontent.com/kundan4all/json/master/mobile.json";
    var deferedObject=$q.defer();
    $http.get(url).then(function(data){
    deferedObject.resolve(data.data);
    },
    function(Error){
        deferedObject.reject(Error);
    });
    return deferedObject.promise;
    }

}
    return object;
})
