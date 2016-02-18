angular.module("CoffeNowApp", ["ngRoute", "angular-flexslider"])
    .config(function ($routeProvider, $locationProvider) {   //設定 ngRoute 
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    //hashPrefix: '!',
        //    //requireBase: false  
        //});
        //$locationProvider.html5Mode(true);
        $routeProvider.when("#", {
            //templateUrl: "/Views/Video.html"
            templateUrl: "/Views/Home.html"
        });

        $routeProvider.when("#/about", {
            templateUrl: "/Views/AboutUs.html"
        });

        $routeProvider.when("#/coffee", {
            templateUrl: "/Views/OurCoffee.html"
        });

        $routeProvider.when("#/producers", {
            templateUrl: "/Views/Producers.html"
        });

        $routeProvider.when("#/shopping", {
            templateUrl: "/Views/Shopping.html"
        });

        $routeProvider.when("#/contact", {
            templateUrl: "/Views/ContactUs.html"
        });

        $routeProvider.otherwise({
            //templateUrl: "/Views/Video.html"
            templateUrl: "/Views/Home.html"
        });
    })
    //.run(function($rootScope,$location){
    //    $rootScope.$location = $location;
    //})
    .directive('showtab', function () {
        return {
            link: function (scope, element, attrs) {
                element.click(function (e) {
                    e.preventDefault();
                    $(element).tab('show');
                });
            }
        };
    })
    .controller("defaultCtrl", function ($scope, $element, $location, $route) {
        //console.log("URL = " + $location.path());
        $scope.imgList = [
            "../images/01.jpg",
            "../images/02.jpg",
            "../images/03.jpg",
            "../images/04.jpg",
            "../images/05.jpg",
            "../images/06.jpg",
            "../images/07.jpg",
            "../images/08.jpg"
        ];

        //$scope.menuStat = false;

        //$scope.showMenu = function () {
        //    console.log("Menu icon is clicked." + $scope.menuStat);
        //    if ($scope.menuStat === false) {
        //        $scope.menuStat = true;
        //    }
        //};

        $scope.hideMenu = function () {
            var elem = document.getElementById("menuList");
            var menuItem = angular.element(elem);
            //console.log(menuItem.hasClass("in"));
            if (menuItem.hasClass("in") === true) {
                menuItem.removeClass("in");
            }
            //$scope.menuStat = false;
        };

    });