import { clothesData as examples } from '/src/data/clothes.js';
import { speak } from '/src/utils/speech.js';

function renderTable(containerId, limit = 0) {
    const tbody = document.getElementById(containerId);
    if (!tbody) return;

    const fragment = document.createDocumentFragment();
    const itemsToRender = limit > 0 ? examples.slice(0, limit) : examples;

    itemsToRender.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-indigo-50/30 transition-colors border-b border-gray-50';
        row.innerHTML = `
            <td class="px-6 py-4 text-base font-medium text-indigo-600">
                <div class="flex items-center gap-2">
                    <button class="speak-btn p-1.5 bg-indigo-100 hover:bg-indigo-200 rounded-full transition-colors" title="Escuchar">
                        <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                        </svg>
                    </button>
                    ${item.english}
                </div>
            </td>
            <td class="px-6 py-4 text-center">
                <span class="text-base text-gray-500 font-medium">${item.pron || '---'}</span>
            </td>
            <td class="px-6 py-4 text-center bg-blue-50/30">
                <span class="text-base font-bold text-blue-600">${item.spanish || '---'}</span>
            </td>
        `;
        row.querySelector('.speak-btn').addEventListener('click', () => speak(item.english));
        fragment.appendChild(row);
    });

    tbody.appendChild(fragment);
}

function init(containerId = 'statsTableBody', limitInputId = 'wordLimit') {
    renderTable(containerId);

    const limitInput = document.getElementById(limitInputId);
    if (limitInput) {
        limitInput.addEventListener('input', () => {
            const limit = parseInt(limitInput.value) || 0;
            const tbody = document.getElementById(containerId);
            tbody.innerHTML = '';
            renderTable(containerId, limit > 0 ? limit : 0);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    init('statsTableBody', 'wordLimit');
});

export { renderTable, init };