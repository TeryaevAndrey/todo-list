export const sendForm = () => {
    const todoList = document.getElementById('todoList');
    const todoFormName = document.querySelector('.todo__form-input').value;
    const todoFormText = document.querySelector('.todo__form-text').value;
    const todoFormSelect = document.querySelector('.todo__form-select').value;

    let todoItemHTML = `
                    <div class="todo__item">
                        <h2 class="todo__item-name">${todoFormName}</h2>
                        <div class="todo__item-option">${todoFormSelect}</div>
                        <div class="todo__item-content">
                            <p class="todo__item-text">${todoFormText}</p>
                        </div>
                        <a class="todo__item-favourite" href="#">Добавить в избранное</a>
                        <div class="todo__item-date-time">
                            <p class="todo__item-date">${getDate()}</p>
                            <p class="todo__item-time">${getTime()}</p>
                        </div>
                    </div>
    `;

    todoList.insertAdjacentHTML('beforeend', todoItemHTML);

    location.reload();

    alert('Успешно');

    return localStorage.setItem('todoItems', todoList.innerHTML);
}

const getDate = () => {
    return new Date().toLocaleDateString();
}

const getTime = () => {
    const dateNow = new Date();

    const dateInfo = {
        hours: String(dateNow.getHours()),
        minutes: String(dateNow.getMinutes())
    };

    if(dateInfo.hours.length === 1) {
        dateInfo.hours = '0' + dateInfo.hours;
    }

    if(dateInfo.minutes.length === 1) {
        dateInfo.minutes = '0' + dateInfo.minutes;
    }

    return `${dateInfo.hours}:${dateInfo.minutes}`;
}

