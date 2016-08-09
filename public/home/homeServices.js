angular.module('todoApp').service('homeService', ['$http', function ($http) {
    this.getTodos = function () {
        return $http.get('/api/todos');
    };

    this.createTodo = function (formData) {
        return $http.post('/api/todos', formData);
    };

    this.deleteTodo = function (id) {
        return $http.delete('/api/todos/' + id);
    };
}]);