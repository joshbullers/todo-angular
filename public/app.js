angular.module('todoApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', 'authProvider',
        function ($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {
            authProvider.init({
                domain: 'joshbullers.auth0.com',
                clientID: 'Zq1bW1lrtrbXprPdUhL76wsHpWdAUxE4',
                loginUrl: '/login'
            });
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