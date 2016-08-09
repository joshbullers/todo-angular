angular.module('todoApp').controller('mainController', ['$scope', 'homeService', function ($scope, homeService) {
    $scope.formData = {};

    homeService.getTodos().success(function (data) {
        console.log(data);
        $scope.formData = {};
        $scope.todos = data;
    });

    $scope.createTodo = function () {
        if (!$.isEmptyObject($scope.formData)) {
            homeService.createTodo($scope.formData).success(function (data) {
                console.log(data);
                $scope.formData = {};
                $scope.todos = data;
            });
        }
    };

    $scope.deleteTodo = function (id) {
        homeService.deleteTodo(id).success(function (data) {
            $scope.todos = data;
        });
    };



    // $scope.createTodo = function () {
    //     $http.post('/api/todos', $scope.formData)
    //         .success(function (data) {
    //             $scope.formData = {};
    //             $scope.todos = data;
    //             console.log(data);
    //         })
    //         .error(function () {
    //             console.log('Error: ', data);
    //         });
    // };

    // $scope.deleteTodo = function (id) {
    //     $http.delete('api/todos/' + id)
    //         .success(function (data) {
    //             $scope.todos = data;
    //             console.log(data);
    //         })
    //         .error(function (data) {
    //             console.log('Error: ' + data);
    //         });
    // };
}]);