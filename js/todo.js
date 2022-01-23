const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDO(event){
    const li = event.target.parentNode;
    const liId = li.id;
    toDoList.removeChild(li);

    toDos = toDos.filter(toDo => toDo.id !== Number(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodo.id;
    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo.text;
    button.innerText = "X";
    button.addEventListener("click",deleteToDO);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    toDos.push(newTodoObj);

    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("Hello,", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}