// events_index.js
import * as logica from './logica_index.js';

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mapeo centralizado de elementos del DOM
    const elements = {
        btnBegin: document.getElementById("btnBegin"),
        btnShow: document.getElementById("btnShow"),
        btnNext: document.getElementById("btnNext"),
        btnReset: document.getElementById("btnReset"),
        areaText: document.getElementById("areaText"),
        areaEnser: document.getElementById("areaEnser"),
        areaTest: document.getElementById("evaluationButtons"),
        translation: document.getElementById("translation"),
        pronunciation: document.getElementById("pronunciation"),
        statsTableBody: document.getElementById("statsTableBody"),
        contCorrect: document.getElementById("contCorrect"),
        contIncorrect: document.getElementById("contIncorrect"),
        correctBtn: document.getElementById("correctBtn"),
        wrongBtn: document.getElementById("wrongBtn"),
        checkMode: document.getElementById("checkMode"),
        contenerCategory: document.getElementById('contenerButtonCategory'),
        radios: document.querySelectorAll('input[name="opcion"]'),
        contCorrect: document.getElementById("contCorrect"),
        contIncorrect: document.getElementById("contIncorrect")
    };

    // 2. Inicialización de Juego
    elements.btnBegin.addEventListener("click", () => {
        logica.starGame(elements);
    });

    // 3. Control de Respuesta y Navegación
    elements.btnShow.addEventListener("click", () => {
        logica.showAnswer(elements);
    });

    elements.btnNext.addEventListener("click", () => {
        logica.loadQuestion(elements);
    });

    // 4. Sistema de Evaluación (Feedback del usuario)
    elements.correctBtn.addEventListener("click", () => {
        logica.recordResult(true, elements);
    });

    elements.wrongBtn.addEventListener("click", () => {
        logica.recordResult(false, elements);
    });

    // 5. Gestión de Categorías
    const categoryButtons = document.querySelectorAll('.category-btn');

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;

            // Actualizar UI de botones
            updateCategoryStyles(categoryButtons, e.currentTarget);
            console.log(category)
            // Cambiar lógica de datos
            logica.changeCategory(category, elements);
        });
    });

    // 6. Configuración de Idioma (Español <-> Inglés)
    elements.radios.forEach(radio => {
        radio.addEventListener('change', () => {
            logica.changeMode(elements);
        });
    });

    // 7. Reiniciar Juego
    elements.btnReset.addEventListener("click", () => {
        // Podrías usar location.reload() o llamar a changeCategory con la actual
        location.reload();
    });

    elements.contIncorrect.addEventListener('click', () => {
        const tbody = Array.from(elements.statsTableBody.rows);
        tbody.forEach(item =>{
            let valor = item.cells[1].textContent.trim();
            if(valor !== '✕'){
                item.classList.add('hidden');
            }else{
                item.classList.remove('hidden');
            }
        });
    });
        elements.contCorrect.addEventListener('click', () => {
        const tbody = Array.from(elements.statsTableBody.rows);
        tbody.forEach(item =>{
            let valor = item.cells[1].textContent.trim();
            if(valor === '✕'){
                item.classList.add('hidden');
            }else{
                item.classList.remove('hidden');
            }
        });
    });
});



/**
 * Gestiona visualmente qué categoría está seleccionada
 */
function updateCategoryStyles(allButtons, activeBtn) {
    const activeClasses = ['bg-indigo-600', 'text-white', 'shadow-md'];
    const inactiveClasses = ['bg-gray-200', 'text-gray-600', 'hover:bg-gray-300', 'transition-all', 'active:scale-95'];

    allButtons.forEach(btn => {
        btn.classList.remove(...activeClasses);
        btn.classList.add(...inactiveClasses);
    });

    activeBtn.classList.remove(...inactiveClasses);
    activeBtn.classList.add(...activeClasses);
}