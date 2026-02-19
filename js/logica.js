// logica.js

// 1. Base de Datos de Palabras
export const words = [
    { english: "Accept", pron: "/acépt/", spanish: "aceptar" },
    { english: "Add", pron: "/ad/", spanish: "añadir / sumar" },
    { english: "Admire", pron: "/admaiar/", spanish: "admirar" },
    { english: "Admit", pron: "/admint/", spanish: "admitir" },
    { english: "Advise", pron: "/advais/", spanish: "aconsejar" },
    { english: "Afford", pron: "/aford/", spanish: "permitirse (económicamente)" },
    { english: "Agree", pron: "/agri/", spanish: "estar de acuerdo" },
    { english: "Alert", pron: "/alert/", spanish: "alertar" },
    { english: "Allow", pron: "/alou/", spanish: "permitir" },
    { english: "Amuse", pron: "/amius/", spanish: "divertir / entretener" },
    { english: "Analyse", pron: "/enalais/", spanish: "analizar" },
    { english: "Announce", pron: "/anauns/", spanish: "anunciar" },
    { english: "Annoy", pron: "/anoi/", spanish: "molestar / fastidiar" },
    { english: "Answer", pron: "/enser/", spanish: "responder / contestar" },
    { english: "Apologise", pron: "/apoloyais/", spanish: "disculparse" },
    { english: "Appear", pron: "/apíer/", spanish: "aparecer" },
    { english: "Applaud", pron: "/aplad/", spanish: "aplaudir" },
    { english: "Approve", pron: "/aprút/", spanish: "aprobar" },
    { english: "Arrange", pron: "/arréindch/", spanish: "arreglar / organizar" },
    { english: "Arrest", pron: "/arrést/", spanish: "arrestar / detener" },
    { english: "Arrive", pron: "/arráif/", spanish: "llegar" },
    { english: "Ask", pron: "/ask/", spanish: "preguntar / pedir" },
    { english: "Attack", pron: "/atáck/", spanish: "atacar" },
    { english: "Attempt", pron: "/atémpt/", spanish: "intentar / tratar de" },
    { english: "Attend", pron: "/aténd/", spanish: "asistir / atender" },
    { english: "Attract", pron: "/atráct/", spanish: "atraer" },
    { english: "Avoid", pron: "/avóid/", spanish: "evitar" },
    { english: "Bake", pron: "/béik/", spanish: "hornear" },
    { english: "Balance", pron: "/bálans/", spanish: "equilibrar" },
    { english: "Bathe", pron: "/béid baz/", spanish: "bañar(se)" },
    { english: "Beg", pron: "/beg/", spanish: "suplicar / rogar" },
    { english: "Behave", pron: "/bijéiv/", spanish: "comportarse" },
    { english: "Belong", pron: "/bilóng/", spanish: "pertenecer" },
    { english: "Bless", pron: "/bles/", spanish: "bendecir" },
    { english: "Blind", pron: "/bláind/", spanish: "cegar" },
    { english: "Blink", pron: "/blenk/", spanish: "parpadear" },
    { english: "Blush", pron: "/blash/", spanish: "sonrojarse" },
    { english: "Book", pron: "/buk/", spanish: "reservar" },
    { english: "Bore", pron: "/bor/", spanish: "aburrir" },
    { english: "Borrow", pron: "/bórróu/", spanish: "pedir prestado" },
    { english: "Bounce", pron: "/báuns/", spanish: "rebotar / saltar" },
    { english: "Call", pron: "/kol/", spanish: "llamar" },
    { english: "Encourage", pron: "/incorch/", spanish: "animar / alentar" },
    { english: "Expect", pron: "/ekspékt/", spanish: "esperar" },
    { english: "Improve", pron: "/imprúv/", spanish: "mejorar" },
    { english: "Marry", pron: "/márri/", spanish: "casarse" },
    { english: "Suspect", pron: "/saspékt/", spanish: "sospechar" },
    { english: "Travel", pron: "/trável/", spanish: "viajar" },
    { english: "Try", pron: "/trái/", spanish: "intentar" }
];

export const wordsRegular = [
  { english: "Arise", pron: "/arais/", spanish: "surgir / levantarse" },
  { english: "Bear", pron: "/verr/", spanish: "soportar / dar a luz" },
  { english: "Beat", pron: "/bit/", spanish: "golpear / vencer" },
  { english: "Become", pron: "/bicom/", spanish: "convertirse / volverse" },
  { english: "Begin", pron: "/begin/", spanish: "comenzar / empezar" },
  { english: "Bite", pron: "/bait/", spanish: "morder" },
  { english: "Bleed", pron: "/blid/", spanish: "sangrar" },
  { english: "Blow", pron: "/blou/", spanish: "soplar" },
  { english: "Break", pron: "/breik/", spanish: "romper" },
  { english: "Breed", pron: "/brid/", spanish: "criar" },
  { english: "Bring", pron: "/bring/", spanish: "traer" },
  { english: "Build", pron: "/bild/", spanish: "construir" },
  { english: "Burn", pron: "/bern/", spanish: "quemar" },
  { english: "Buy", pron: "/bai/", spanish: "comprar" },
  { english: "Catch", pron: "/kech / cach/", spanish: "atrapar / coger" },
  { english: "Can", pron: "/ken/", spanish: "poder" },
  { english: "Choose", pron: "/shus/", spanish: "elegir" },
  { english: "Creep", pron: "/crip/", spanish: "arrastrarse" },
  { english: "Cling", pron: "/cling/", spanish: "aferrarse" },
  { english: "Come", pron: "/com/", spanish: "venir" },
  { english: "Cost", pron: "/cost/", spanish: "costar" },
  { english: "Cut", pron: "/cat/", spanish: "cortar" },
  { english: "Deal", pron: "/dil/", spanish: "trato / repartir / dar" },
  { english: "Dig", pron: "/dig/", spanish: "cavar" },
  { english: "Do", pron: "/du/", spanish: "hacer" },
  { english: "Draw", pron: "/dra/", spanish: "dibujar" },
  { english: "Dream", pron: "/drim/", spanish: "soñar" },
  { english: "Drink", pron: "/drink/", spanish: "beber / tomar" },
  { english: "Drive", pron: "/draiv/", spanish: "conducir" },
  { english: "Eat", pron: "/it/", spanish: "comer" },
  { english: "Fall", pron: "/fol/", spanish: "caer" },
  { english: "Feed", pron: "/fid/", spanish: "alimentar" },
  { english: "Feel", pron: "/fil/", spanish: "sentir" },
  { english: "Fight", pron: "/fait/", spanish: "pelear / luchar" },
  { english: "Find", pron: "/faind/", spanish: "encontrar" },
  { english: "Fly", pron: "/flai/", spanish: "volar" },
  { english: "Forbid", pron: "/forbid/", spanish: "prohibir" },
  { english: "Forget", pron: "/forget/", spanish: "olvidar" },
  { english: "Forgive", pron: "/forgiv/", spanish: "perdonar" },
  { english: "Forsake", pron: "/forsek/", spanish: "abandonar" },
  { english: "Hide", pron: "/jaid/", spanish: "esconder" },
  { english: "Hit", pron: "/jit/", spanish: "golpear" },
  { english: "Hold", pron: "/jold/", spanish: "sostener / aguantar" },
  { english: "Hurt", pron: "/jert/", spanish: "herir" },
  { english: "Keep", pron: "/kip/", spanish: "mantener / guardar" },
  { english: "Know", pron: "/nou/", spanish: "saber / conocer" },
  { english: "Lend", pron: "/lend/", spanish: "prestar" }
//   { english: "Lie", pron: "/lai/", spanish: "mentir / tumbarse" },
//   { english: "Mistake", pron: "/misteik/", spanish: "equivocarse" },
//   { english: "Overcome", pron: "/overcom/", spanish: "superar" },
//   { english: "Pay", pron: "/pei/", spanish: "pagar" },
//   { english: "Quit", pron: "/kuit/", spanish: "dejar / abandonar" },
//   { english: "Ride", pron: "/raid/", spanish: "montar / conducir" },
//   { english: "Sew", pron: "/su/", spanish: "coser" },
//   { english: "Spend", pron: "/spend/", spanish: "gastar / pasar (tiempo)" },
//   { english: "Spread", pron: "/spred/", spanish: "extender / propagar" },
//   { english: "Stand", pron: "/stend/", spanish: "pararse / soportar" },
//   { english: "Tell", pron: "/tel/", spanish: "decir / contar" },
//   { english: "Understand", pron: "/andersten/", spanish: "entender" },
//   { english: "Wear", pron: "/uer/", spanish: "llevar puesto" }
];

// 2. Estado del Juego
export let state = {
    wordsCopy: [...words],
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
    
    elements.areaText.textContent = `¿Cómo se dice "${state.currentWord.english}"?`;
    elements.areaEnser.classList.add('hidden');
    elements.areaTest.classList.add('hidden');
    elements.btnNext.classList.add('hidden');
    elements.btnShow.classList.remove('hidden');
}

export function starGame(elements) {
    if (state.start === 0) {
        state.start = 1;
        elements.btnBegin.classList.add('hidden');
        loadQuestion(elements);
    }
}

export function showAnswer(elements) {
    elements.translation.textContent = state.currentWord.spanish;
    elements.pronunciation.textContent = state.currentWord.pron;
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
        <td class="px-4 py-2 font-medium text-indigo-600">${state.currentWord.english}</td>
        <td class="px-4 py-2 text-center">${isCorrect ? '✓' : '✕'}</td>
    `;
    elements.statsTableBody.prepend(row);

    // Eliminar palabra usada y cargar siguiente
    state.wordsCopy.splice(state.randomIndex, 1);
    loadQuestion(elements);
}

export function changeCategory(cat, elements) {
    // 1. Filtrar lista
    if (cat === 'reg') state.wordsCopy = [...words];
    else if (cat === 'irreg') state.wordsCopy = [...wordsRegular];
    else state.wordsCopy = [...words, ...wordsRegular];

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