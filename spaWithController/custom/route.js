app.config(function($routeProvider ,$locationProvider){
    $locationProvider.hashPrefix('');

    $routeProvider.when('/home/:first/:last',{
        templateUrl: 'home.html',
        controller:'homectrl'
    }).when('/about',{
        templateUrl: 'about.html',
        controller:'myctrl'
    }).otherwise({redirectTo:'/'})
})