export const formValidation = (event) => {
    event.preventDefault();

    for(let input of document.getElementById('todoForm').elements) {
        if(input.classList.contains('validation')) {
            if(input.value === '' || input.value === null) {
                input.previousElementSibling.style.display = 'block';
                input.previousElementSibling.textContent = 'Вы не заполнили поле!';
            } else {
                input.previousElementSibling.style.display = 'none';
            }
        }
    }
}