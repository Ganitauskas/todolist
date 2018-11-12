/* global $ */
$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch(function(err){
        console.log(err);
    });
});

function addTodos(todos){
    //add todos to page here
    todos.forEach(function(todo){
        var newTodo = $('<li>' + todo.name + '</li>');
        newTodo.addClass('task');
        
        if(todo.completed){
            newTodo.addClass('done');
        }
        
        $('.list').append(newTodo);
    });
}