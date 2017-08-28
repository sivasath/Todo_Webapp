angular.module("todoListApp")

.service('dataService',function($http){
  this.gettodos = function(callback){
    $http.get('mock/data.json').then(callback);    
    //then function is where the post processing is done
  };
  
  this.deleteTodo = function(todo, $index){
    console.log("The "+todo + "has been deleted");
   
  };
  
  this.saveTodos = function(todos){
    console.log(todos.length + "has been saved");
    
  };
});
