// Получаем все элементы модели
const volmodels = document.querySelectorAll('.volmodel');

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
