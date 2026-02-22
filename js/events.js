// events.js
import * as logica from './logica.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mapeo de elementos del DOM
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
        radios: document.querySelectorAll('input[name="opcion"]')
    };

    // 2. Evento: Iniciar Juego
    elements.btnBegin.addEventListener("click", () => {
        logica.starGame(elements);
    });

    // 3. Evento: Mostrar Respuesta
    elements.btnShow.addEventListener("click", () => {
        logica.showAnswer(elements);
    });

    // 4. Evento: Siguiente Palabra (Modo no evaluación)
    elements.btnNext.addEventListener("click", () => {
        logica.loadQuestion(elements);
    });

    // 5. Eventos: Evaluación (Bien / Mal)
    elements.correctBtn.addEventListener("click", () => {
        logica.recordResult(true, elements);
    });

    elements.wrongBtn.addEventListener("click", () => {
        logica.recordResult(false, elements);
    });

    // 6. Evento: Reiniciar (Recargar página)
    elements.btnReset.addEventListener("click", () => {
        location.reload();
    });

    // 7. Eventos: Cambio de Categoría
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;

            // Actualizar Estilos Visuales
            updateCategoryStyles(categoryButtons, e.currentTarget);

            // Llamar a la lógica de cambio
            logica.changeCategory(category, elements);
        });
    });

    // 8. Eventos: Seleccionamos todos los radio buttons con el nombre "opcion"
    const radios = document.querySelectorAll('input[name="opcion"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                logica.changeMode(elements);
            }
        });
    });
});

/**
 * Función auxiliar para gestionar la apariencia de los botones de categoría
 */
function updateCategoryStyles(allButtons, activeBtn) {
    allButtons.forEach(btn => {
        btn.classList.remove('bg-[#46608B]', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-600','hover:bg-gray-300','transition-all', 'active:scale-95');
    });

    activeBtn.classList.remove('bg-gray-200', 'text-gray-600','hover:bg-gray-300', 'transition-all', 'active:scale-95');
    activeBtn.classList.add('bg-[#46608B]', 'text-white');
}

