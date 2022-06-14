import './scss/main.scss';
import {formValidation} from "./scripts/form_validation";
import {clickTodoTabs} from "./scripts/todo_tabs";
import {todoItemsSave} from "./scripts/todo_items_save";

const todoTabs = document.querySelector('.todo__tabs');
const todoForm = document.getElementById('todoForm');

todoForm.addEventListener('submit', formValidation);
todoTabs.addEventListener('click', clickTodoTabs);

todoItemsSave();