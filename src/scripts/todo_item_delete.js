export const deleteTodoItem = (event) => {
    event.preventDefault();

    const todoList = document.querySelector('.todo__list');
    const todoListFavourite = document.querySelector('.todo__list-favourite');

    localStorage.removeItem('todoItems');
    localStorage.removeItem('favouriteItems');

    event.target.parentElement.remove();

    localStorage.setItem('todoItems', todoList.innerHTML);
    localStorage.setItem('favouriteItems', todoListFavourite.innerHTML);
}