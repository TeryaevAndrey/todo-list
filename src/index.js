import './scss/main.scss';
import {formValidation} from "./scripts/form_validation";
import {clickTodoTabs} from "./scripts/todo_tabs";
import {saveTodoItems} from "./scripts/todo_items_save";
import {saveTodoFavourite} from "./scripts/todo_save_favourite";
import {saveTodoFavouriteItems} from "./scripts/todo_items_favourite_save";

const todoTabs = document.querySelector('.todo__tabs');
const todoForm = document.getElementById('todoForm');

todoForm.addEventListener('submit', formValidation);
todoTabs.addEventListener('click', clickTodoTabs);

saveTodoItems();

document.querySelectorAll('.todo__item-favourite').forEach(element => {
    element.addEventListener('click', saveTodoFavourite);
});

saveTodoFavouriteItems();
