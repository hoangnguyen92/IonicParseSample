{"filter":false,"title":"controllers.js","tooltip":"/todoApp/www/js/controllers.js","undoManager":{"mark":50,"position":50,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["angular.module('todoApp.controllers',[]).controller('TodoListController',['$scope','Todo',function($scope,Todo){","","    Todo.getAll().success(function(data){","        $scope.items=data.results;","    });","","    $scope.onItemDelete=function(item){","        Todo.delete(item.objectId);","        $scope.items.splice($scope.items.indexOf(item),1);","    }","","}]);"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":3},"end":{"row":20,"column":4},"action":"insert","lines":[".controller('TodoCreationController',['$scope','Todo','$state',function($scope,Todo,$state){","","    $scope.todo={};","","    $scope.create=function(){","        Todo.create({content:$scope.todo.content}).success(function(data){","            $state.go('todos');","        });","    }","}]);"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":3},"end":{"row":20,"column":4},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":3},"end":{"row":20,"column":4},"action":"remove","lines":[";"]},{"start":{"row":20,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":[".controller('TodoEditController',['$scope','Todo','$state','$stateParams',function($scope,Todo,$state,$stateParams){","","    $scope.todo={id:$stateParams.id,content:$stateParams.content};","","    $scope.edit=function(){","        Todo.edit($scope.todo.id,{content:$scope.todo.content}).success(function(data){","            $state.go('todos');","        });","    }","","}]);"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":3},"end":{"row":40,"column":3},"action":"insert","lines":[".controller('TodoEditController',['$scope','Todo','$state','$stateParams',function($scope,Todo,$state,$stateParams){","","    $scope.todo={id:$stateParams.id,content:$stateParams.content};","","    $scope.edit=function(){","        Todo.edit($scope.todo.id,{content:$scope.todo.content}).success(function(data){","            $state.go('todos');","        });","    }","","}])"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":16},"end":{"row":30,"column":34},"action":"remove","lines":["TodoEditController"]},{"start":{"row":30,"column":16},"end":{"row":30,"column":31},"action":"insert","lines":["LoginController"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":42},"end":{"row":30,"column":73},"action":"remove","lines":[",'Todo','$state','$stateParams'"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":58},"end":{"row":30,"column":83},"action":"remove","lines":[",Todo,$state,$stateParams"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["    $scope.todo={id:$stateParams.id,content:$stateParams.content};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["    $scope.edit=function(){",""]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["        Todo.edit($scope.todo.id,{content:$scope.todo.content}).success(function(data){",""]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["            $state.go('todos');",""]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["        });",""]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["    }",""]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":4},"end":{"row":31,"column":5},"action":"insert","lines":["%"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":5},"end":{"row":31,"column":6},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":6},"end":{"row":31,"column":7},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":7},"end":{"row":31,"column":8},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":9},"end":{"row":31,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":9},"end":{"row":31,"column":10},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":7},"end":{"row":31,"column":8},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":6},"end":{"row":31,"column":7},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":5},"end":{"row":31,"column":6},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":4},"end":{"row":31,"column":5},"action":"remove","lines":["%"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":4},"end":{"row":31,"column":5},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":5},"end":{"row":31,"column":6},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":4},"end":{"row":31,"column":6},"action":"remove","lines":["$s"]},{"start":{"row":31,"column":4},"end":{"row":31,"column":10},"action":"insert","lines":["$scope"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":10},"end":{"row":31,"column":11},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":11},"end":{"row":31,"column":16},"action":"insert","lines":["login"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":17},"end":{"row":31,"column":20},"action":"remove","lines":["fun"]},{"start":{"row":31,"column":17},"end":{"row":33,"column":5},"action":"insert","lines":["function function_name(argument) {","        // body...","    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":26},"end":{"row":31,"column":39},"action":"remove","lines":["function_name"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":25},"end":{"row":31,"column":26},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":26},"end":{"row":31,"column":34},"action":"remove","lines":["argument"]},{"start":{"row":31,"column":26},"end":{"row":31,"column":27},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":27},"end":{"row":31,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":28},"end":{"row":31,"column":29},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":29},"end":{"row":31,"column":30},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":8},"end":{"row":32,"column":18},"action":"remove","lines":["// body..."]},{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"remove","lines":["c"]},{"start":{"row":32,"column":8},"end":{"row":32,"column":22},"action":"insert","lines":["console.log();"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":20},"end":{"row":32,"column":21},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":21},"end":{"row":32,"column":22},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":22},"end":{"row":32,"column":23},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":23},"end":{"row":32,"column":24},"action":"insert","lines":["r"]}]}]]},"ace":{"folds":[],"scrolltop":167,"scrollleft":0,"selection":{"start":{"row":32,"column":24},"end":{"row":32,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1427186577709,"hash":"a3af2f95370c5ca520a559151882b423eb177183"}