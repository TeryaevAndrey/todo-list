export const saveTodoFavourite = (event) => {
    event.preventDefault();

    const todoListFavourite = document.querySelector('.todo__list-favourite');

    todoListFavourite.insertAdjacentHTML('beforeend', `<div class="todo__item">${event.target.parentElement.innerHTML}</div>`);

    alert('Успешно!');

    localStorage.setItem('favouriteItems', todoListFavourite.innerHTML);

    location.reload();
}
