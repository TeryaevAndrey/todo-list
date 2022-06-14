export const todoItemsSave = () => {
    const todoList = document.getElementById('todoList');

    return todoList.innerHTML = localStorage.getItem('todoItems');
}