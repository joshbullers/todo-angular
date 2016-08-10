angular.module('todoApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', 'authProvider',
        function ($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {
            authProvider.init({
                domain: '',
                clientID: '',
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