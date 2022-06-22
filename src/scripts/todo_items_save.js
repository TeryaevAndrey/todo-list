export const saveTodoItems = () => {
    const todoList = document.getElementById('todoList');

    return todoList.innerHTML = localStorage.getItem('todoItems');
}
