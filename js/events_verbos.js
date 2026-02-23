import * as logica from './logica_verbos.js';
import * as word from './words.js';

document.addEventListener('DOMContentLoaded', () => {
    
    const elements = {
        statsTableBody: document.getElementById("statsTableBody"),
        categoryButtons: document.querySelectorAll('.category-btn'),
    };

    // Inicialización por defecto
    logica.renderTable(word.words, word.wordsExamples, elements);

    elements.categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            
            updateCategoryStyles(elements.categoryButtons, e.currentTarget);
            
            let dataToRender = [];
            let exampleToRender = [];

            // Lógica de filtrado corregida
            switch (category) {
                case 'reg':
                    dataToRender = word.words; 
                    exampleToRender = word.wordsExamples; 
                    break;
                case 'irreg':
                    dataToRender = word.wordsRegular; 
                    exampleToRender = word.examplesRegular; 
                    break;
                case 'ambos':
                    // Unimos ambos arreglos de forma plana
                    dataToRender = [...word.words, ...word.wordsRegular];
                    exampleToRender = [...word.wordsExamples, ...word.examplesRegular]; 
                    break;
                case 'conect':
                    // dataToRender = word.Conectivos;
                    // exampleToRender = word.ConectivosExamples;
                    break;
                default:
                    dataToRender = word.words;
                    exampleToRender = word.wordsExamples;
            }

            // Renderizar solo si hay datos
            if (dataToRender.length > 0) {
                logica.renderTable(dataToRender, exampleToRender, elements);
            }
        });
    });
});

function updateCategoryStyles(allButtons, activeBtn) {
    const activeClasses = ['bg-indigo-600', 'text-white', 'shadow-md'];
    const inactiveClasses = ['bg-white', 'text-gray-600', 'border-gray-200'];

    allButtons.forEach(btn => {
        btn.classList.remove(...activeClasses);
        btn.classList.add(...inactiveClasses);
    });

    activeBtn.classList.remove(...inactiveClasses);
    activeBtn.classList.add(...activeClasses);
}