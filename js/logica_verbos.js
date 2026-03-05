function speak(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const ziraVoice = voices.find(voice => voice.name.includes('Zira'));
    if (ziraVoice) {
        utterance.voice = ziraVoice;
    } else {
        // Backup: Buscar cualquier voz que diga "female" si no estás en Windows
        const femaleBackup = voices.find(voice => voice.name.includes('Female') && voice.lang.includes('en'));
        if (femaleBackup) utterance.voice = femaleBackup;
    }

    utterance.lang = 'en-US';
    utterance.rate = 0.6;
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);
}

// IMPORTANTE: Chrome y otros navegadores cargan las voces asíncronamente.
// Esta línea es necesaria para que la lista de voces esté lista.
window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();

export function renderTable(data, examples, elements) {
    const fragment = document.createDocumentFragment();
    elements.statsTableBody.textContent = '';

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = "hover:bg-indigo-50/30 transition-colors border-b border-gray-50";

        const ex = examples[index] || {};

        row.innerHTML = `
            <td class="px-6 py-4 text-base font-medium text-indigo-600">
                <div class="flex items-center gap-2">
                    <button class="speak-btn p-1.5 bg-indigo-100 hover:bg-indigo-200 rounded-full transition-colors group" title="Escuchar">
                        <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                        </svg>
                    </button>

                    <details name="verb-details" class="group cursor-pointer">
                        <summary class=" list-none outline-none font-bold hover:text-indigo-800 transition-colors flex items-center justify-start gap-2">
                            <svg class="w-3 h-3 transform group-open:rotate-90 transition-transform text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path>
                            </svg>
                            <div class="flex flex-col">
                                ${item.english}
                                <span class="text-[14px] text-stone-400 font-normal">(${item.pron_pre || '---'})</span>
                            </div>
                        </summary>
                        <div class="mt-2 p-3 bg-indigo-50/50 border-l-2 border-indigo-400 rounded-r-lg text-left text-gray-600 animate-in slide-in-from-top-1 duration-200">
                            <p class="text-sm pron_present"><strong>Pres:</strong> "${ex.present || ''}"</p>
                            <p class="text-sm pron_past"><strong>Past:</strong> "${ex.past || ''}"</p>
                            <p class="text-sm pron_gerun"><strong>Ger:</strong> "${ex.gerund || ''}"</p>
                        </div>
                    </details>
                </div>
            </td>

            <td class="sounds px-6 py-4 text-center">
                <div class="flex flex-col">
                    <span class="text-base text-gray-600 font-medium">${item.third_person}</span>
                    <span class="text-[14px] text-stone-400 font-normal">(${item.pron_thp})</span>
                </div>
            </td>

            <td class="soundss px-6 py-4 text-center">
                <div class="flex flex-col">
                    <span class="text-base text-gray-600 font-medium">${item.past}</span>
                    <span class="text-[14px] text-stone-400 font-normal">(${item.pron_past || '---'})</span>
                </div>
            </td>

            <td class="soundsss px-6 py-4 text-center">
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

        // AGREGAR EL EVENTO DESPUÉS DE CREAR EL HTML
        row.querySelector('.speak-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se abra el acordeón al hacer clic solo en el botón
            speak(item.english);
        });

        row.querySelector('.pron_present').addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se abra el acordeón al hacer clic solo en el botón
            speak(ex.present);
        });

        row.querySelector('.pron_past').addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se abra el acordeón al hacer clic solo en el botón
            speak(ex.past);
        });

        row.querySelector('.pron_gerun').addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se abra el acordeón al hacer clic solo en el botón
            speak(ex.gerund);
        });

        row.querySelector('.sounds').addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se abra el acordeón al hacer clic solo en el botón
            const textToSpeak = e.currentTarget.querySelector('.text-base').textContent;
            speak(textToSpeak);
        });

        
        row.querySelector('.soundss').addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se abra el acordeón al hacer clic solo en el botón
            const textToSpeak = e.currentTarget.querySelector('.text-base').textContent;
            speak(textToSpeak);
        });


        
        row.querySelector('.soundsss').addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se abra el acordeón al hacer clic solo en el botón
            const textToSpeak = e.currentTarget.querySelector('.text-base').textContent;
            speak(textToSpeak);
        });


        fragment.appendChild(row);
    });

    elements.statsTableBody.appendChild(fragment);
}

export function renderTableConectivo(data, elements) {
    const fragment = document.createDocumentFragment();
    elements.statsTableBodys.textContent = '';

    data.forEach((item) => {
        const row = document.createElement('tr');
        row.className = "hover:bg-indigo-50/30 transition-colors border-b border-gray-50";

        row.innerHTML = `
            <td class="px-6 py-4 text-base font-medium text-indigo-600">
                <div class="flex items-center gap-2">
                    <button class="speak-btn p-1.5 bg-indigo-100 hover:bg-indigo-200 rounded-full transition-colors group" title="Escuchar">
                        <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                        </svg>
                    </button>

                    <details name="verb-details" class="group cursor-pointer">
                        <summary class="list-none outline-none font-bold hover:text-indigo-800 transition-colors flex items-center justify-start gap-2">
                            <svg class="w-3 h-3 transform group-open:rotate-90 transition-transform text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path>
                            </svg>
                            <div class="flex flex-col">
                                ${item.english}
                                <span class="text-[14px] text-stone-400 font-normal">(${item.pron || '---'})</span>
                            </div>
                        </summary>
                        <div class="mt-2 p-3 bg-indigo-50/50 border-l-2 border-indigo-400 rounded-r-lg text-left text-gray-600 animate-in slide-in-from-top-1 duration-200">
                            <p class="text-sm pron_present"><strong>Pres:</strong> "${item.example || ''}"</p>
                        </div>
                    </details>
                </div>
            </td>

            <td class="px-6 py-4 text-center bg-blue-50/30">
                <div class="flex flex-col">
                    <span class="text-base font-bold text-blue-600">${item.spanish}</span>
                </div>
            </td>
        `;

        // AGREGAR EL EVENTO DESPUÉS DE CREAR EL HTML
        row.querySelector('.speak-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se abra el acordeón al hacer clic solo en el botón
            speak(item.english);

        });

        row.querySelector('.pron_present').addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se abra el acordeón al hacer clic solo en el botón
            speak(item.example);

        });

        fragment.appendChild(row);
    });

    elements.statsTableBodys.appendChild(fragment);
}