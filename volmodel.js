// Получаем все 3D модели
const volmodels = document.querySelectorAll('.volmodel');

// todo: Сделать поворачивение 3D vоделей пользователем
// Переменные для хранения начальной позиции и угла
let startX = 0;
let startY = 0;
let startRotateY = -45; // Начальный угол поворота

// Функция для начала перетаскивания
function handleDragStart(event) {
    startX = event.clientX || event.touches[0].clientX;
    startY = event.clientY || event.touches[0].clientY;
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDragMove);
    document.addEventListener('touchend', handleDragEnd);
}

// Функция для перемещения при перетаскивании
function handleDragMove(event) {
    const currentX = event.clientX || event.touches[0].clientX;
    const currentY = event.clientY || event.touches[0].clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    const rotateY = startRotateY + deltaX * 0.5; // Изменение угла вращения

    // Проходимся по всем элементам модели и применяем изменения
    volmodels.forEach(volmodel => {
        volmodel.style.transform = `rotateX(-45deg) rotateY(${rotateY}deg)`;
        volmodel.style.cursor = 'grabbing';
    });
}

// Функция для окончания перетаскивания
function handleDragEnd() {
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
    document.removeEventListener('touchmove', handleDragMove);
    document.removeEventListener('touchend', handleDragEnd);

    // Возвращаем курсор к изначальному состоянию для всех элементов модели
    volmodels.forEach(volmodel => {
        volmodel.style.cursor = 'grab';
    });
}

// Добавляем обработчик события начала перетаскивания для каждой модели
volmodels.forEach(volmodel => {
    volmodel.addEventListener('mousedown', handleDragStart);
    volmodel.addEventListener('touchstart', handleDragStart);
});

// todo: Добавлять модификатор анимации
function addAnimationModifer(modiferName) {
    // Функция добавляет модификатор ко всем классам элемента
    function addClassWithModifer(element, modiferName) {
        // Получаем все классы элемента
        const classes = element.className.split(' ');
    
        // Добавляем модификатор к каждому классу
        classes.forEach((className) => {
            if (className.startsWith('volhuman__')) { // Проверяем, начинается ли класс с нужного префикса
                element.classList.add(`${className}--${modiferName}`);
            }
        });
    }
    // Добавляем модификатор ко всем элементам
    addClassWithModifer(head, modiferName);
    addClassWithModifer(body, modiferName);
    addClassWithModifer(handLeft, modiferName);
    addClassWithModifer(handRight, modiferName);
    addClassWithModifer(legLeft, modiferName);
    addClassWithModifer(legRight, modiferName);
}

// Меши 3D человека
const head = document.querySelector('.volhuman__head');
const body = document.querySelector('.volhuman__body');
const handLeft = document.querySelector('.volhuman__hand--left');
const handRight = document.querySelector('.volhuman__hand--right');
const legLeft = document.querySelector('.volhuman__leg--left');
const legRight = document.querySelector('.volhuman__leg--right');

// Применяю функцию анимации
addAnimationModifer('walking');