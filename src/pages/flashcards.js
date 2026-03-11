import { getVerbsByCategory, categories } from '../data/index.js';
import { storage, shuffleArray, createResultRow, getRandomItem } from '../utils/index.js';

let gameState = {
  wordsCopy: [],
  currentWord: null,
  currentCategory: 'reg',
  start: false,
  good: 0,
  bad: 0
};

export function initFlashcards(elements) {
  gameState.currentCategory = storage.getLastCategory();
  loadCategory(gameState.currentCategory, elements);
  setupEventListeners(elements);
}

function loadCategory(category, elements) {
  const verbs = getVerbsByCategory(category);
  gameState.wordsCopy = shuffleArray([...verbs]);
  gameState.currentCategory = category;
  gameState.good = 0;
  gameState.bad = 0;
  gameState.start = false;

  storage.setCategory(category);

  elements.contCorrect.textContent = '✓ Correctas: 0';
  elements.contIncorrect.textContent = '✕ Incorrectas: 0';
  elements.statsTableBody.innerHTML = '';
  
  elements.btnBegin.classList.remove('hidden');
  elements.btnShow.classList.add('hidden');
  elements.btnNext.classList.add('hidden');
  elements.areaEnser.classList.add('hidden');
  elements.evaluationButtons.classList.add('hidden');
  elements.areaText.textContent = '¿Empezamos?';
  elements.contenerCategory.classList.remove('hidden');
}

function setupEventListeners(elements) {
  elements.btnBegin.addEventListener('click', () => startGame(elements));
  elements.btnShow.addEventListener('click', () => showAnswer(elements));
  elements.btnNext.addEventListener('click', () => loadQuestion(elements));
  elements.correctBtn.addEventListener('click', () => recordResult(true, elements));
  elements.wrongBtn.addEventListener('click', () => recordResult(false, elements));
  elements.btnReset.addEventListener('click', () => resetGame(elements));

  elements.categoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.category;
      loadCategory(category, elements);
    });
  });

  elements.contCorrect.addEventListener('click', () => filterResults(true, elements));
  elements.contIncorrect.addEventListener('click', () => filterResults(false, elements));
}

function startGame(elements) {
  gameState.start = true;
  elements.btnBegin.classList.add('hidden');
  elements.contenerCategory.classList.add('hidden');
  loadQuestion(elements);
}

function loadQuestion(elements) {
  if (gameState.wordsCopy.length === 0) {
    elements.areaText.textContent = '¡Completado! 🎉';
    elements.btnShow.classList.add('hidden');
    elements.btnNext.classList.add('hidden');
    elements.evaluationButtons.classList.add('hidden');
    elements.areaEnser.classList.add('hidden');
    elements.btnReset.classList.remove('hidden');
    return;
  }

  gameState.currentWord = getRandomItem(gameState.wordsCopy);
  
  const selectedLang = document.querySelector('input[name="opcion"]:checked')?.value || 'es';
  
  if (selectedLang === 'es') {
    elements.areaText.textContent = `¿Cómo se dice "${gameState.currentWord.spanish}"?`;
  } else {
    elements.areaText.textContent = `¿Qué significa "${gameState.currentWord.english}" en inglés?`;
  }

  elements.areaEnser.classList.add('hidden');
  elements.evaluationButtons.classList.add('hidden');
  elements.btnNext.classList.add('hidden');
  elements.btnShow.classList.remove('hidden');
  elements.btnReset.classList.add('hidden');
}

function showAnswer(elements) {
  const selectedLang = document.querySelector('input[name="opcion"]:checked')?.value || 'es';
  
  if (selectedLang === 'es') {
    elements.translation.textContent = gameState.currentWord.english;
  } else {
    elements.translation.textContent = gameState.currentWord.spanish;
  }
  
  elements.pronunciation.textContent = gameState.currentWord.pron_pre || '';
  elements.areaEnser.classList.remove('hidden');
  elements.btnShow.classList.add('hidden');

  const isEvalMode = document.getElementById('checkMode')?.checked;
  
  if (isEvalMode) {
    elements.evaluationButtons.classList.remove('hidden');
  } else {
    elements.btnNext.classList.remove('hidden');
    gameState.wordsCopy = gameState.wordsCopy.filter(w => w !== gameState.currentWord);
  }
}

function recordResult(isCorrect, elements) {
  if (isCorrect) {
    gameState.good++;
    elements.contCorrect.textContent = `✓ Correctas: ${gameState.good}`;
  } else {
    gameState.bad++;
    elements.contIncorrect.textContent = `✕ Incorrectas: ${gameState.bad}`;
  }

  storage.updateScore(isCorrect, gameState.currentWord);

  const row = createResultRow(gameState.currentWord, isCorrect);
  elements.statsTableBody.prepend(row);

  gameState.wordsCopy = gameState.wordsCopy.filter(w => w !== gameState.currentWord);
  loadQuestion(elements);
}

function resetGame(elements) {
  loadCategory(gameState.currentCategory, elements);
}

function filterResults(showCorrect, elements) {
  const rows = Array.from(elements.statsTableBody.rows);
  rows.forEach(row => {
    const isCorrect = row.cells[1]?.textContent.trim() === '✓';
    if (showCorrect) {
      row.classList.toggle('hidden', !isCorrect);
    } else {
      row.classList.toggle('hidden', isCorrect);
    }
  });
}

export function getState() {
  return gameState;
}
