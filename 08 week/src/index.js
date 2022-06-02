const input = document.querySelector(".js-todo-input");
let todoItems=[];
function fetchData() { 
  return fetch('http://localhost:3000/todos')
.then(response => response.json()) //asta transforma datele intrun format usor de citit
.then((data) => {renderList(data)})
.catch(err => console.log(err))
}


function addTodo(name) {
  const todo = {
    name,
    completed: false,
    id: Date.now()
  };

  return todo;

}

const renderList = (todos) => {
  todoItems = todos
  console.log(todoItems)
  const list = document.querySelector(".js-todo-list");
  todos.forEach(todo => (
    list.insertAdjacentHTML(
      "beforeend",
      `
      <li class="todo-item ${todo.completed && 'done'}" data-key="${todo.id} data-checked=${todo.completed}">
        <input id="${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.name}</span>
        <button class="delete-todo js-delete-todo">
          <svg><use href="#delete-icon"></use></svg>
        </button>
      </li>
    `
    )
  ))
  
}



function toggleDone(key) {
  const id =  key.split(" ")[0]
  
  const index = todoItems.findIndex(item => item.id === id);

  todoItems[index].completed = !todoItems[index].completed;
  const item = document.querySelector(`[data-key='${key}']`);

  fetch(`http://localhost:3000/todos/${id}`,{
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify({
      'completed': todoItems[index].completed
    })
  })

  if (todoItems[index].completed) {
    item.classList.add("done");
  } else {
    item.classList.remove("done");
  }
}

function deleteTodo(key) {
fetch(`${"http://localhost:3000/todos"}/${key}`,{
method: "DELETE",
}).then(function () {
  location.reload();
})

}

const form = document.querySelector(".js-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  
  const name = input.value.trim();
  
  if (name !== "") {
    addTodo(name);
    input.value = "";
    input.focus();

    fetch('http://localhost:3000/todos',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(addTodo(name))
    })
    .then(fetchData()) 
  }
  location.reload()
});

const list = document.querySelector(".js-todo-list");
list.addEventListener("click", event => {
  event.preventDefault()
  if (event.target.classList.contains("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (event.target.classList.contains("js-delete-todo")) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});


fetchData()
