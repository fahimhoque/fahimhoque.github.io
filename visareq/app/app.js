//Routing
var app = angular.module("scotchy", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/app/views/home.html"
    })
    .when("/about", {
        templateUrl : "fahimhoque.github.io/visareq/app/views/about.html"
    })
    .when("/contact", {
        templateUrl : "fahimhoque.github.io/visareq/app/views/contact.html"
    })
    .when("/blue", {
        templateUrl : "fahimhoque.github.io/visareq/app/views/about.html"
    });
});
