const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption =document.querySelector('.filter-todo');

//event for button
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodos);

//functions

function addTodo(event){
    event.preventDefault();
    //todoDIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);

    const compleButton = document.createElement('button');
    compleButton.innerHTML = '<i class="fas fa-check"></i>';
    compleButton.classList.add('comple');
    todoDiv.appendChild(compleButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add('delete');
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);

    //list clear;
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0]==="delete"){
        const Todo = item.parentElement;
        Todo.classList.add("flal");
        Todo.addEventListener('transitionend',function(){
            Todo.remove();
        });
    }

    if(item.classList[0]==="comple"){
        const Todo = item.parentElement;
        Todo.classList.toggle("completed");
    }
}
function filterTodos(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all" :
                break;
            case "completed" :
                if(todos.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display='none';
                }
        }
             
    });
}
