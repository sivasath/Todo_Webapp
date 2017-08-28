angular.module("todoListApp", [])

//method chaining
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
})

.service('dataService',function($http){
  this.gettodos = function(callback){
    $http.get('mock/data.json').then(callback);    
    //then function is where the post processing is done
  };
  
  this.deleteTodo = function(todo, $index){
    console.log("The "+todo + "has been deleted");
   
  };
  
  this.saveTodo = function(todo, $index){
    console.log("The "+todo + "has been saved");
    
  };
});