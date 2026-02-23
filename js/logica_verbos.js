export function renderTable(data, examples, elements) {
    const fragment = document.createDocumentFragment();
    elements.statsTableBody.textContent = '';

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = "hover:bg-indigo-50/30 transition-colors border-b border-gray-50";

        // Obtenemos el objeto de ejemplo de forma segura
        const ex = examples[index] || {};

        row.innerHTML = `
            <td class="px-6 py-4 text-base font-medium text-indigo-600">
                <details name="verb-details" class="group cursor-pointer">
                    <summary class="list-none outline-none font-bold hover:text-indigo-800 transition-colors flex items-center justify-start gap-2">
                        <svg class="w-3 h-3 transform group-open:rotate-90 transition-transform text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path>
                        </svg>
                        ${item.english} 
                    </summary>
                    <div class="mt-2 p-3 bg-indigo-50/50 border-l-2 border-indigo-400 rounded-r-lg text-left text-gray-600 animate-in slide-in-from-top-1 duration-200">
                        <p class="text-sm"><strong>Pres:</strong> "${ex.present || ''}"</p>
                        <p class="text-sm"><strong>Past:</strong> "${ex.past || ''}"</p>
                        <p class="text-sm"><strong>Ger:</strong> "${ex.gerund || ''}"</p>
                    </div>
                </details>
            </td>

            <td class="px-6 py-4 text-center">
                <div class="flex flex-col">
                    <span class="text-base text-gray-600 font-medium">${item.third_person}</span>
                    <span class="text-[14px] text-stone-400 font-normal">(${item.pron_thp})</span>
                </div>
            </td>

            <td class="px-6 py-4 text-center">
                <div class="flex flex-col">
                    <span class="text-base text-gray-600 font-medium">${item.past}</span>
                    <span class="text-[14px] text-stone-400 font-normal">(${item.pron_past || '---'})</span>
                </div>
            </td>

            <td class="px-6 py-4 text-center">
                <div class="flex flex-col">
                    <span class="text-base text-gray-500 font-medium">${item.gerundio}</span>
                    <span class="text-[14px] text-stone-400 font-normal">(${item.pron_ger || '---'})</span>
                </div>
            </td>

            <td class="px-6 py-4 text-center bg-blue-50/30">
                <div class="flex flex-col">
                    <span class="text-base font-bold text-blue-600">${item.spanish}</span>
                </div>
            </td>
        `;

        fragment.appendChild(row);
    });

    elements.statsTableBody.appendChild(fragment);
}