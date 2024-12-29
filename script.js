const gameContainer = document.getElementById('game-container');
const predictBtn = document.getElementById('predict-btn');
const resetBtn = document.getElementById('reset-btn');
const loadingSpinner = document.getElementById('loading-spinner');

let currentRows = 0;
const maxRows = 4; // Ограничиваем до 4 строк

function createRow(activeIndex) {
  const row = document.createElement('div');
  row.className = 'row';

  for (let i = 0; i < 4; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (i === activeIndex) {
      cell.classList.add('active');
    }
    row.appendChild(cell);
  }

  return row;
}

function addRow() {
  if (currentRows < maxRows) {
    const activeIndex = Math.floor(Math.random() * 4);
    const newRow = createRow(activeIndex);
    gameContainer.appendChild(newRow);
    currentRows++;
  }

  if (currentRows >= maxRows) {
    predictBtn.disabled = true;
  }
}

function resetGame() {
  gameContainer.innerHTML = '';
  currentRows = 0;
  predictBtn.disabled = false;
}

predictBtn.addEventListener('click', () => {
  predictBtn.disabled = true;
  loadingSpinner.style.visibility = 'visible';

  setTimeout(() => {
    addRow();
    loadingSpinner.style.visibility = 'hidden';
    predictBtn.disabled = currentRows >= maxRows;
  }, 1500);
});

resetBtn.addEventListener('click', resetGame);
