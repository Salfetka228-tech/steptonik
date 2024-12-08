const gameContainer = document.getElementById('game-container');
const predictBtn = document.getElementById('predict-btn');
const resetBtn = document.getElementById('reset-btn');
const loadingSpinner = document.getElementById('loading-spinner');

let currentRows = 0; // Счётчик текущих строк
let maxRows = 0; // Максимальное количество строк для текущего цикла

// Функция для создания строки
function createRow() {
  const row = document.createElement('div');
  row.className = 'row';

  // Создаем 4 ячейки в строке
  for (let i = 0; i < 4; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    row.appendChild(cell);
  }

  return row;
}

// Функция "предсказания" с задержкой и анимацией
function predict() {
  if (currentRows >= maxRows) {
    return; // Если достигнут максимум строк для текущего цикла, не добавляем новые
  }

  // Показываем индикатор загрузки
  loadingSpinner.style.visibility = 'visible';

  // Задержка перед добавлением строки
  setTimeout(() => {
    // Убираем индикатор загрузки
    loadingSpinner.style.visibility = 'hidden';

    // Создаем новую строку
    const row = createRow();

    // Добавляем строку в начало контейнера
    gameContainer.prepend(row);

    // Выбираем случайную ячейку в строке
    const randomIndex = Math.floor(Math.random() * 4);
    row.children[randomIndex].classList.add('active');

    currentRows++; // Увеличиваем счётчик текущих строк
  }, 1500); // Задержка 1.5 секунды
}

// Функция сброса игры
function resetGame() {
  gameContainer.innerHTML = ''; // Очищаем контейнер
  currentRows = 0; // Сбрасываем количество строк
  maxRows = Math.floor(Math.random() * 3) + 4; // Генерируем случайный максимум от 4 до 6
}

// Привязка событий к кнопкам
predictBtn.addEventListener('click', predict);
resetBtn.addEventListener('click', resetGame);

// Сразу после загрузки игры устанавливаем случайное максимальное количество строк
resetGame();
