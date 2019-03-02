// --- Exercise 1 ---

// The todo class
class ToDo {
  constructor(title, id) { // The id is for Exercise 4
    this.title = title;
    this.id = id;
    this.status = false;
  }
}

// The place we store our todos
let todos = [];

// --- Exercise 2 ---
// The event handler
function handleForm(event) {
  event.preventDefault();

  let todoInput = document.querySelector('#todo-input');
  let title = todoInput.value;

  let id = todos.length; // This is for Exercise 4

  let newTodo = new ToDo(title, id);

  todos.push(newTodo);

  todoInput.value = '';

  // --- Exercise 3 ---
  let todoLi = document.createElement('li');
  let todoCheckbox = document.createElement('input');
  let todoLabel = document.createElement('label');

  todoCheckbox.type = 'checkbox'; // we need this to make it an actual checkbox
  todoLabel.innerText = newTodo.title;

  todoLi.appendChild(todoCheckbox);
  todoLi.appendChild(todoLabel);

  document.querySelector('ul').appendChild(todoLi);

  // --- Exercise 5 --- 
  todoCheckbox.addEventListener('change', function() {
    let checkedStatus = todoCheckbox.checked; // take the status of the checkbox first
    if (checkedStatus) {
      todoLi.classList.add('done');
      newTodo.status = true;
    } else {
      todoLi.classList.remove('done');
      newTodo.status = false;
    }
  });

  // --- Exercise 6 ---
  let todoDeleteButton = document.createElement('button');
  todoDeleteButton.innerText = "Delete";

  todoLi.appendChild(todoDeleteButton);

  todoDeleteButton.addEventListener('click', function() {
    // First, we need to remove the item from the array
    // Find the index of the ToDo we want to delete:
    let startIndex = todos.findIndex(function(todo) {
      if (todo.id === id) return true;
    });
    // And splice from that index, one element further
    todos.splice(startIndex, 1);
    // Then we want to remove the item from the DOM
    document.querySelector('ul').removeChild(todoLi);
  });
}

// Attach the event listener
document.querySelector('form').addEventListener('submit', handleForm);