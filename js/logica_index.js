// logica.js

// 1. Base de Datos de Palabras
import * as word from './words.js';
// 2. Estado del Juego
export let state = {
    wordsCopy: [...word.words],
    currentWord: null,
    randomIndex: null,
    start: 0,
    good: 0,
    bad: 0
};

// 3. Funciones Principales
export function loadQuestion(elements) {
    if (state.wordsCopy.length === 0) {
        elements.areaText.textContent = "¡Completado! 🎉";
        elements.btnShow.classList.add('hidden');
        elements.btnNext.classList.add('hidden');
        elements.areaTest.classList.add('hidden');
        elements.areaEnser.classList.add('hidden');
        elements.btnReset.classList.remove('hidden');
        return;
    }

    state.randomIndex = Math.floor(Math.random() * state.wordsCopy.length);
    state.currentWord = state.wordsCopy[state.randomIndex];

    elements.radios.forEach(element => {
        if (element.value === "es" && element.checked) {
            elements.areaText.textContent = `¿Cómo se dice "${state.currentWord.spanish}"?`;
        } else if (element.value === "en" & element.checked) {
            elements.areaText.textContent = `¿Que segnifica "${state.currentWord.english}" en ingles?`;
        }
    });


    elements.areaEnser.classList.add('hidden');
    elements.areaTest.classList.add('hidden');
    elements.btnNext.classList.add('hidden');
    elements.btnShow.classList.remove('hidden');
}

export function starGame(elements) {
    if (state.start === 0) {
        state.start = 1;
        elements.btnBegin.classList.add('hidden');
        elements.contenerCategory.classList.add('hidden');
        loadQuestion(elements);
    }
}

function obtenerResultado() {
    const seleccionado = document.querySelector('input[name="opcion"]:checked');

    if (seleccionado) {
        alert("Seleccionaste: " + seleccionado.value);
    }
}

export function showAnswer(elements) {

    elements.radios.forEach(element => {
        if (element.value === "es" && element.checked) {
            elements.translation.textContent = state.currentWord.english;
        } else if (element.value === "en" & element.checked) {
            elements.translation.textContent = state.currentWord.spanish;
        }
    });
    elements.pronunciation.textContent = state.currentWord.pron_pre;
    elements.areaEnser.classList.remove('hidden');
    elements.btnShow.classList.add('hidden');

    const isEvalMode = document.getElementById('checkMode').checked;
    if (isEvalMode) {
        elements.areaTest.classList.remove('hidden');
    } else {
        elements.btnNext.classList.remove('hidden');
        state.wordsCopy.splice(state.randomIndex, 1);
    }
}

export function recordResult(isCorrect, elements) {
    // Actualizar contadores
    if (isCorrect) {
        state.good++;
        elements.contCorrect.textContent = `✓ Correctas: ${state.good}`;
    } else {
        state.bad++;
        elements.contIncorrect.textContent = `✕ Incorrectas: ${state.bad}`;
    }

    // Añadir a la tabla de resultados
    const row = document.createElement('tr');
    row.className = "hover:bg-gray-50 transition-colors";
    row.innerHTML = `
            <td class="px-4 py-2 font-medium text-indigo-600">
                <details class="cursor-pointer">
                    <summary class="list-none outline-none">${state.currentWord.english}</summary>
                    <div class="mt-2 text-sm text-gray-500 italic">
                        Traducción: ${state.currentWord.spanish} (${state.currentWord.pron_pre})
                    </div>
                </details>
            </td>
            <td class="px-4 py-2 text-center text-xl font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}">
            ${isCorrect ? '✓' : '✕'}
            </td>
    `;
    elements.statsTableBody.prepend(row);

    // Eliminar palabra usada y cargar siguiente
    state.wordsCopy.splice(state.randomIndex, 1);
    loadQuestion(elements);
}

export function changeCategory(cat, elements) {
    // 1. Filtrar lista
    if (cat === 'reg') state.wordsCopy = [...word.words];
    else if (cat === 'irreg') state.wordsCopy = [...word.wordsRegular];
    else if (cat === 'ambos') state.wordsCopy = [...word.wordsRegular, ...word.words];
    else if (cat === 'conect') state.wordsCopy = [...word.Conectivos];


    // 2. Resetear estadísticas visuales y de estado
    state.good = 0;
    state.bad = 0;
    elements.contCorrect.textContent = `✓ Correctas: 0`;
    elements.contIncorrect.textContent = `✕ Incorrectas: 0`;
    elements.statsTableBody.innerHTML = '';

    // 3. Reiniciar interfaz
    state.start = 0;
    elements.btnBegin.classList.remove('hidden');
    elements.btnShow.classList.add('hidden');
    elements.btnNext.classList.add('hidden');
    elements.areaEnser.classList.add('hidden');
    elements.areaText.textContent = "¿Empezamos?";
}