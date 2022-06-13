export const clickTodoTabs = (event) => {
    const tabID = event.target.dataset.tab;
    const currentTab = document.getElementById(tabID);
    const todoTabsBtn = document.querySelectorAll('.todo__tabs-btn');
    const todoContentItems = document.querySelectorAll('.todo__content-item');

    todoTabsBtn.forEach(element => {
        todoContentItems.forEach(element => {
            element.style.display = 'none';
        });
        element.classList.remove('active');
    });

    if(!event.target.classList.contains('active')) {
        event.target.classList.add('active');
        currentTab.style.display = 'block';
    }
}