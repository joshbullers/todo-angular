angular.module('todoApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            console.log("hit state provider");
            $stateProvider
                .state('home', {
                    url:'/',
                    templateUrl: './home/home.html',
                    controller: 'mainController'
                });
        }
    ]);