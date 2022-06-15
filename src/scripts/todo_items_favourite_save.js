export const saveTodoFavouriteItems = () => {
    const todoListFavourite = document.getElementById('favourite');

    return todoListFavourite.innerHTML = localStorage.getItem('favouriteItems');
}
