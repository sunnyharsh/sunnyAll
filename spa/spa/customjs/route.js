app.config(function($routeProvider , $locationProvider){
    
    $locationProvider.hashPrefix('');

    $routeProvider.when("/",{
        templateUrl: "index.html"
    }).when("/home",{
        templateUrl: "home.html"
    }).when("/about",{
        templateUrl:"about.html"

    }).when("/contact",{
        templateUrl:"contact.html"

    }).when("/gallery",{
        templateUrl:"gallery.html"

    })
    .otherwise({redirectTo:"/"});

})