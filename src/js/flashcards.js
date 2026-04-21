import { getVerbsByCategory, getWordsByCategory } from '../data/index.js';
import { storage, shuffleArray, createResultRow, getRandomItem, speak } from '../utils/index.js';
import { updateCategoryStyles, activeClasses, inactiveClasses } from '../utils/helpers.js';
import { adverbsData, commonWordsData } from '../data/index.js';

adverbsData; commonWordsData;


let gameState = {
  wordsCopy: [],
  currentWord: null,
  currentCategory: 'reg',
  start: false,
  good: 0,
  bad: 0,
  wordLimit: 0
};

export function initFlashcards(elements) {
  gameState.currentCategory = storage.getLastCategory();
  loadCategory(gameState.currentCategory, elements);
  setupEventListeners(elements);
  setupKeyboardShortcuts(elements);
}

function updateSelectCategory(elements) {
  elements.categoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.category;
      updateCategoryStyles(elements.categoryButtons, e.currentTarget);
    });
  });
}

function loadCategory(category, elements) {
  const limitSelect = document.getElementById('wordLimit');
  const wordLimit = limitSelect ? parseInt(limitSelect.value) : 20;
  gameState.wordLimit = wordLimit;
  
  const words = getWordsByCategory(category);
  let selectedWords = [...words];
  
  if (wordLimit > 0 && selectedWords.length > wordLimit) {
    selectedWords = selectedWords.slice(0, wordLimit);
  }
  
  gameState.wordsCopy = shuffleArray(selectedWords);
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
  const { 
    btnBegin, btnShow, btnNext, correctBtn, wrongBtn, 
    btnReset, categoryButtons, contCorrect, contIncorrect, allResult 
  } = elements;

  // 0. Selector de límite de palabras
  const wordLimitSelect = document.getElementById('wordLimit');
  if (wordLimitSelect) {
    wordLimitSelect.addEventListener('change', () => {
      loadCategory(gameState.currentCategory, elements);
    });
  }

  // 1. Acciones simples (Agrupadas para lectura rápida)
  btnBegin.onclick = () => startGame(elements);
  btnShow.onclick  = () => { if (gameState.start && gameState.wordsCopy.length > 0) showAnswer(elements); };
  btnNext.onclick  = () => loadQuestion(elements);
  btnReset.onclick = () => resetGame(elements);

  // 2. Registro de resultados (Acierto/Fallo) - solo si juego activo
  correctBtn.onclick = () => { if (gameState.start && gameState.wordsCopy.length > 0) recordResult(true, elements); };
  wrongBtn.onclick   = () => { if (gameState.start && gameState.wordsCopy.length > 0) recordResult(false, elements); };

  // 3. Selección de Categoría con actualización visual
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedBtn = e.currentTarget;
      const category = selectedBtn.dataset.category;

      // Lógica de datos
      loadCategory(category, elements);
    });
  });

  updateSelectCategory(elements);

  // 4. Filtros de resultados
  contCorrect.onclick   = () => filterResults(true, elements);
  contIncorrect.onclick = () => filterResults(false, elements);
  allResult.onclick = () => showAllResult(elements);
}

function setupKeyboardShortcuts(elements) {
  const { btnShow, correctBtn, wrongBtn } = elements;

  document.addEventListener('keydown', (e) => {
    if (!gameState.start || gameState.wordsCopy.length === 0) return;

    const key = e.key.toLowerCase();

    if (key === 'm' && !btnShow.classList.contains('hidden')) {
      e.preventDefault();
      btnShow.click();
    }

    if (key === 'b' && !correctBtn.classList.contains('hidden')) {
      e.preventDefault();
      correctBtn.click();
    }

    if (key === 'x' && !wrongBtn.classList.contains('hidden')) {
      e.preventDefault();
      wrongBtn.click();
    }
  });
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

  elements.translation.style.cursor = 'pointer';
  elements.translation.onclick = () => speak(elements.translation.textContent);

  elements.pronunciation.textContent = gameState.currentWord.pron_pre || gameState.currentWord.pron || '';
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
  elements.btnReset.classList.add('hidden');
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

function showAllResult(elements) {
  const rows = Array.from(elements.statsTableBody.rows);
  rows.forEach(row => {
    row.classList.remove('hidden');
  });
}

export function getState() {
  return gameState;
}
