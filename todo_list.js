

let todoList = document.getElementById('todo__list');

function createTask() {

    let todoInput = document.getElementById('todo__input').value;
    let item = document.createElement('li');
    item.textContent = todoInput;
    todoList.append(item);
}

todoList.addEventListener('click', function (evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('task_done');
    }
});

