angular.module("todoListApp")

.controller('mainCtrl', function($scope,dataService) {  //dataservice is included in the para to give access to the particular service
  $scope.addTodo = function() {    
    var todo={name: "This is a new todo!"}
    $scope.todos.push(todo);
  };
  
  dataService.gettodos(function(response){  //callback is necessary because of the asynchronous nature of javaScript, response contains the data returned by the url
    
    console.log(response.data);
    $scope.todos =  response.data;
    
    $scope.deleteTodo = function(todo, $index){
      dataService.deleteTodo(todo, $index);
      $scope.todos.splice($index,1);
    };
    
    $scope.saveTodo = function(todo, $index){
      dataService.saveTodo(todo, $index);
    };
  
  });
});