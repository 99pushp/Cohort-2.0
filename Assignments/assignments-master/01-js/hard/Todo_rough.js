/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

let todoList = [];

class Todo {


//clear: deletes all todos
clear(){
    todoList=[];
}



//- get(indexOfTodo): returns todo at given index
get(indexOfTodo){
    return todoList[indexOfTodo];
}


//- getAll: returns all todos
getAll(){
    return todoList;
}


//- update(index, updatedTodo): update todo at given index
update(index, updatedTodo){
    if(index<todoList.length)
    {todoList[index]=updatedTodo};
}

//add(todo): adds todo to list of todos
add(todoItem) {
    todoList.push(todoItem);
 }
//remove(indexOfTodo): remove todo from list of todos
remove(indexOfTodo){
    todoList.splice(indexOfTodo,1);
}


}

const task1 = new Todo();

/*task1.add('task 1');
task1.add('task 2');
task1.add('task 3');
console.log(task1.getAll());
task1.remove(1);
console.log(task1.getAll());
task1.remove(0);
console.log(task1.getAll());
task1.remove(2);
console.log(task1.getAll());
*/

task1.add('Task 1');
task1.add('Task 2');

task1.update(3, 'dd');

console.log(task1.getAll());


