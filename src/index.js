import './scss/main.scss';
import {formValidation} from "./scripts/form_validation";

const todoForm = document.getElementById('todoForm');

todoForm.addEventListener('submit', formValidation);