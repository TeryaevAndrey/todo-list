export const saveTodoFavouriteItems = () => {
    const todoListFavourite = document.querySelector('.todo__list-favourite');

    return todoListFavourite.innerHTML = localStorage.getItem('favouriteItems');
}
