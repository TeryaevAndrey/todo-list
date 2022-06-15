export const saveTodoFavourite = (event) => {
    const todoListFavourite = document.querySelector('.todo__list-favourite');

    todoListFavourite.insertAdjacentHTML('beforeend', `<div class="todo__item">${event.target.parentElement.innerHTML}</div>`);

    alert('Успешно!');

    return localStorage.setItem('favouriteItems', todoListFavourite.innerHTML);
}
