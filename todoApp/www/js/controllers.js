angular.module('todoApp.controllers', []).controller('TodoListController', ['$scope', 'Todo', function($scope, Todo) {

    Todo.getAll().success(function(data) {
        $scope.items = data.results;
    });

    $scope.onItemDelete = function(item) {
        Todo.delete(item.objectId);
        $scope.items.splice($scope.items.indexOf(item), 1);
    }

}]).controller('TodoCreationController', ['$scope', 'Todo', '$state', function($scope, Todo, $state) {

    $scope.todo = {};

    $scope.create = function() {
        Todo.create({
            content: $scope.todo.content
        }).success(function(data) {
            $state.go('todos');
        });
    }
}]).controller('TodoEditController', ['$scope', 'Todo', '$state', '$stateParams', function($scope, Todo, $state, $stateParams) {

    $scope.todo = {
        id: $stateParams.id,
        content: $stateParams.content
    };

    $scope.edit = function() {
        Todo.edit($scope.todo.id, {
            content: $scope.todo.content
        }).success(function(data) {
            $state.go('todos');
        });
    }

}]).controller('LoginController', ['$scope', function($scope) {
    $scope.login = function(user) {
        console.log(user);
    }
    $scope.loginFB = function() {
        Parse.FacebookUtils.logIn(null, {
            success: function(user) {
                if (!user.existed()) {
                    alert("User signed up and logged in through Facebook!");
                }
                else {
                    alert("User logged in through Facebook!");
                }
            },
            error: function(user, error) {
                alert("User cancelled the Facebook login or did not fully authorize.");
            }
        });
    }
}]);