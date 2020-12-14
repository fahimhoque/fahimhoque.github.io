//Routing
var app = angular.module("scotchy", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/app/views/home.html"
    })
    .when("/about", {
        templateUrl : "/app/views/about.html"
    })
    .when("/contact", {
        templateUrl : "/app/views/contact.html"
    })
    .when("/blue", {
        templateUrl : "/app/views/about.html"
    });
});