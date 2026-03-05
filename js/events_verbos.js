import * as logica from './logica_verbos.js';
import * as word from './words.js';

document.addEventListener('DOMContentLoaded', () => {

    const elements = {
        statsTableBody: document.getElementById("statsTableBody"),
        statsTableBodys: document.getElementById("statsTableBodys"),
        categoryButtons: document.querySelectorAll('.category-btn'),
    };



    // Inicialización por defecto
    logica.renderTable(word.words, word.wordsExamples, elements);
    elements.categoryButtons.forEach((btn, index) => {
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
                    dataToRender = word.Conectivos;
                    break;
                default:
                    dataToRender = word.words;
                    exampleToRender = word.wordsExamples;
            }
            let categorySelect = elements.categoryButtons[index].id;
            // Renderizar solo si hay datos
            if (dataToRender.length > 0 && categorySelect != 'btnConect') {
                document.getElementById("table-verbo").classList.remove('hidden');
                document.getElementById("table-conect").classList.add('hidden');
                logica.renderTable(dataToRender, exampleToRender, elements);
            }else if (dataToRender.length > 0 && categorySelect == 'btnConect') {
                document.getElementById("table-conect").classList.remove('hidden');
                document.getElementById("table-verbo").classList.add('hidden');
                logica.renderTableConectivo(dataToRender, elements);
            }else{
                console.log(categorySelect + "ni idea");
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