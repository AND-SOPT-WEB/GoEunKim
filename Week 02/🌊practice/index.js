const list = document.querySelector('.todo-list');
const add_btn = document.querySelector('.add_btn');
const input = document.querySelector('input');

let todoList = JSON.parse(localStorage.getItem('todo-list') || '[]');

todoList.forEach((todo) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delete_button = document.createElement('button');

  span.textContent = todo;
  delete_button.textContent = '삭제';

  li.appendChild(span);
  li.appendChild(delete_button);
  list.appendChild(li);

  deletehandle(li);
});

add_btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delete_button = document.createElement('button');

    span.textContent = input.value;
    delete_button.textContent = '삭제';

    li.appendChild(span);
    li.appendChild(delete_button);
    list.appendChild(li);

    todoList.push(input.value);
    localStorage.setItem('todo-list', JSON.stringify(todoList));

    input.value = '';

    deletehandle(li);
  }
});

function deletehandle(li) {
  li.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    const removingOne = e.target.parentElement;

    const index = Array.from(list.children).indexOf(removingOne);
    todoList.splice(index, 1);
    localStorage.setItem('todo-list', JSON.stringify(todoList));

    removingOne.remove();
  });
}
