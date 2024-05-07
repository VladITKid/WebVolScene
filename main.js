// Получаем элемент модели
const model = document.querySelector('.volhuman');

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
    model.style.transform = `rotateX(-45deg) rotateY(${rotateY}deg)`; // Включение начального угла поворота
    model.style.cursor = 'grabbing'; // Возвращение курсора к изначальному состоянию
}

// Функция для окончания перетаскивания
function handleDragEnd() {
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
    document.removeEventListener('touchmove', handleDragMove);
    document.removeEventListener('touchend', handleDragEnd);
    model.style.cursor = 'grab'; // Возвращение курсора к изначальному состоянию
}

// Добавляем обработчик события начала перетаскивания
model.addEventListener('mousedown', handleDragStart);
model.addEventListener('touchstart', handleDragStart);