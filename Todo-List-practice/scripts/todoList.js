
const todoList = JSON.parse(localStorage.getItem('.js-todo-list')) || [];

renderTodoList();


document.querySelector('.js-add-btn').addEventListener('click', () => {
  addTodo();
})



function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="btn-delete js-delete-btn">Delete</button> `;
    todoListHTML += html
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-btn').forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', () => {
      deleteTodo(index)
    })
  })
  
  /*for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        deleteTodo(${i})
        " class="btn-delete"
      >Delete</button> 
    `;
    todoListHTML += html
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;*/
}

function addTodo(){
  const inputNameElement = document.querySelector('.js-input-name');
  const name = inputNameElement.value;

  const inputDateElement = document.querySelector('.js-input-date');
  const dueDate = inputDateElement.value;

  if(name && dueDate){
    todoList.push({
      name,
      dueDate
    });
    localStorage.setItem('.js-todo-list', JSON.stringify(todoList))

    inputNameElement.value = '';
    inputDateElement.value = '';
    
    renderTodoList();

  }else {
    alert('Please fill in both input');
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem('.js-todo-list', JSON.stringify(todoList));
  renderTodoList();
}