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
    { english: "Try", pron: "/trái/", spanish: "intentar" },

    // { english: "Breathe", pron: "brid", spanish: "Respirar" },
    // { english: "Brush", pron: "brash", spanish: "Cepillar" },
    // { english: "Bury", pron: "béri", spanish: "Enterrar" },
    { english: "Call", pron: "kol", spanish: "Llamar" },
    // { english: "Calculate", pron: "kálkiuleit", spanish: "Calcular" },
    // { english: "Camp", pron: "kamp", spanish: "Acampar" },
    { english: "Cancel", pron: "kánsel", spanish: "Cancelar" },
    // { english: "Care", pron: "ker", spanish: "Cuidar / Importar" },
    // { english: "Cause", pron: "koz", spanish: "Causar" },
    { english: "Challenge", pron: "chálindz", spanish: "Desafiar" },
    { english: "Change", pron: "chéindz", spanish: "Cambiar" },
    // { english: "Charge", pron: "chárdz", spanish: "Cargar (precio o energía)" },
    // { english: "Chase", pron: "chéis", spanish: "Perseguir" },
    { english: "Cheat", pron: "chit", spanish: "Engañar / Hacer trampa" },
    { english: "Check", pron: "chek", spanish: "Revisar / Comprobar" },
    // { english: "Cheer", pron: "chir", spanish: "Alegrar / Animar" },
    // { english: "Chew", pron: "chu", spanish: "Masticar" },
    // { english: "Claim", pron: "kleim", spanish: "Reclamar / Afirmar" },
    // { english: "Clap", pron: "kláp", spanish: "Aplaudir" },
    { english: "Clean", pron: "klin", spanish: "Limpiar" },
    { english: "Clear", pron: "klíar", spanish: "Aclarar / Despejar" },
    { english: "Close", pron: "klóus", spanish: "Cerrar" },
    { english: "Collect", pron: "kolekt", spanish: "Recoleccionar / Coleccionar" },
    // { english: "Comb", pron: "koum", spanish: "Peinar" },
    { english: "Compare", pron: "kompér", spanish: "Comparar" },
    { english: "Compete", pron: "kompít", spanish: "Competir" },
    { english: "Complain", pron: "kompléin", spanish: "Quejarse" },
    { english: "Complete", pron: "komplít", spanish: "Completar" }
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
    { english: "Lend", pron: "/lend/", spanish: "prestar" },
    //   { english: "Lie", pron: "/lai/", spanish: "mentir / tumbarse" },
      { english: "Mistake", pron: "/misteik/", spanish: "equivocarse" },
    //   { english: "Overcome", pron: "/overcom/", spanish: "superar" },
      { english: "Pay", pron: "/pei/", spanish: "pagar" },
      { english: "Quit", pron: "/kuit/", spanish: "dejar / abandonar" },
      { english: "Ride", pron: "/raid/", spanish: "montar / conducir" },
      { english: "Sew", pron: "/su/", spanish: "coser" },
      { english: "Spend", pron: "/spend/", spanish: "gastar / pasar (tiempo)" },
    //   { english: "Spread", pron: "/spred/", spanish: "extender / propagar" },
      { english: "Stand", pron: "/stend/", spanish: "pararse / soportar" },
      { english: "Tell", pron: "/tel/", spanish: "decir / contar" },
      { english: "Understand", pron: "/andersten/", spanish: "entender" },
      { english: "Wear", pron: "/uer/", spanish: "llevar puesto" }
];

export const conectivos = [
    { english: "In fact", pron: "In fact", spanish: "De hecho" },
    { english: "In general", pron: "In yeneral", spanish: "En general" },
    { english: "Besides", pron: "Bisais", spanish: "Ademas" },
    { english: "By the way", pron: "Bai da uei", spanish: "Cambiando el tema" },
    { english: "So", pron: "So", spanish: "Y, entonces" },
    { english: "Although", pron: "Aldou", spanish: "Aunque" },
    { english: "Then", pron: "Den", spanish: "Entonces" },
    { english: "So then", pron: "So den", spanish: "Y entonces" },
    { english: "Therefore", pron: "Derfor", spanish: "Por eso" },
    { english: "That's right", pron: "Dats rait", spanish: "Por eso" },
    { english: "However", pron: "Jauever", spanish: "Sin embargo" },
    { english: "At least", pron: "At list", spanish: "Por lo menos" },
    { english: "In other words", pron: "Inoder uords", spanish: "En otras palabras" },
    { english: "Little by little", pron: "Lirol bai Lirol", spanish: "Poco a poco" },
    { english: "Step by step", pron: "Step bai step", spanish: "Paso a Paso" },
    { english: "For example", pron: "Forexsampol", spanish: "Por ejemplo" },
    { english: "According to", pron: "Acordin tu", spanish: "Según" },
    { english: "Without a doubt", pron: "Uidaradaut", spanish: "Sin duda" },
    { english: "Hands down", pron: "Jen daun", spanish: "Sin duda" },
    { english: "Unless", pron: "Anles", spanish: "A menos que" },
    { english: "Somehow", pron: "Som jau", spanish: "De alguna manera" },
      { english: "I agree", pron: "Ai agri", spanish: "Estoy de acuerdo" },
      { english: "Kidding", pron: "Kirin", spanish: "Bromeando" },
      { english: "I know what you mean", pron: "Ai nou uat iu min", spanish: "Se a lo que te refieres" },
      { english: "On second thought", pron: "On second zot", spanish: "Pensándolo mejor" },
      { english: "Afford", pron: "Aford", spanish: "Costear" },
      { english: "By any chance", pron: "Bai eni chens", spanish: "Por casualidad" },
      { english: "In the meantime", pron: "In da min taim", spanish: "Mientras tanto" },
      { english: "Meanwhile", pron: "Min uail", spanish: "Mientras tanto" },
      { english: "While", pron: "Uail", spanish: "Mientras" },
      { english: "Instead", pron: "Insted", spanish: "En vez de" },
      { english: "Instead of", pron: "Insterof", spanish: "En vez de" },
    //   { english: "On you", pron: "On iu", spanish: "Tu pagas" },
    //   { english: "Let me get this straight", pron: "Let mi get distreit", spanish: "Dejame ver si entiendo" },
    //   { english: "It's a good thing", pron: "Itsa gud zin", spanish: "Menos mal" },
    //   { english: "Changed my mind", pron: "Chench mai maind", spanish: "Cambie de idea" },
    //   { english: "What I'd give to", pron: "Uarai giv tu", spanish: "Lo que daria por" },
    //   { english: "Allow me", pron: "Alou mi", spanish: "Permiteme" },
    //   { english: "I'm afraid yes", pron: "Aimafreid ies", spanish: "Me temo que si" },
    //   { english: "I'm afraid not", pron: "Aimafreid nat", spanish: "Me temo que no" },
    //   { english: "I'm afraid", pron: "Aimafreid", spanish: "Me temo" },
    //   { english: "Among", pron: "Among", spanish: "Entre" },
    //   { english: "Between", pron: "Bituin", spanish: "Entre" },
    //   { english: "Odds", pron: "Ods", spanish: "Probabilidades" },
    //   { english: "Toward", pron: "Touard", spanish: "Hacia" },
    //   { english: "Despite", pron: "Dispait", spanish: "A pesar de" },
    //   { english: "Due to", pron: "Du tu", spanish: "Debido a" },
    //   { english: "Nevertheless", pron: "Never da les", spanish: "No obstante" },
    //   { english: "On other hand", pron: "On other jend", spanish: "Por otra parte" },
    //   { english: "Otherwise", pron: "Oder uais", spanish: "Por otra parte" },
    //   { english: "Speechless", pron: "Spichles", spanish: "Sin palabras" },
    //   { english: "Yet again", pron: "iet Aguen", spanish: "Una vez más" },
    //   { english: "For good", pron: "For gud", spanish: "Por si acaso / Para siempre" },
    //   { english: "It takes me", pron: "It teiks mi", spanish: "Esto me lleva" },
    //   { english: "Fortunately", pron: "Forchenli", spanish: "Afortunadamente" },
    //   { english: "Happily", pron: "Japli", spanish: "Afortunadamente felizmente" },
    //   { english: "Unfortunately", pron: "Anforchenli", spanish: "Desafortunadamente" },
    //   { english: "Sadly", pron: "Sadli", spanish: "Desafortunadamente / Desgraciadamente / Tristemente" },
    //   { english: "Obviously", pron: "Obiusli", spanish: "Obviamente" },
    //   { english: "Undoubtedly", pron: "Andaurebli", spanish: "Indudablemente" },
    //   { english: "Surely", pron: "Shurli", spanish: "Seguramente" },
    //   { english: "Indeed", pron: "Indid", spanish: "Verdaderamente / En efecto / En realidad" },
    //   { english: "Apparently", pron: "Aperenli", spanish: "Aparentemente / Al parecer" },
    //   { english: "Possibly", pron: "Posibli", spanish: "Posiblemente" },
    //   { english: "Currently", pron: "Kurrentli", spanish: "Actualmente" },
    //   { english: "Actually", pron: "Acshuli", spanish: "Realmente / De hecho" },
    //   { english: "Mostly", pron: "Moszli", spanish: "Prácticamente / Normalmente" },
    //   { english: "Practicaly", pron: "Practicli", spanish: "Prácticamente" },
    //   { english: "All in all", pron: "Olin ol", spanish: "Después de todo / En definitiva" },
    //   { english: "To sum up", pron: "Tu samap", spanish: "En resumen / para resumir" },
    //   { english: "Eventually", pron: "Evenshuali", spanish: "Eventualmente" },
    //   { english: "Now a day", pron: "Nauadei", spanish: "Hoy en día" },
    //   { english: "Last but not least", pron: "Last bat nat list", spanish: "Por último pero no menos importante" },
    //   { english: "From now on", pron: "From nauon", spanish: "De ahora en adelante" },
    //   { english: "Once in a while", pron: "Uansinauail", spanish: "De vez en cuando" },
    //   { english: "That's why", pron: "Dats uay", spanish: "Por eso" },
    //   { english: "Just in case", pron: "Yost in keis", spanish: "Por si acaso" },
    //   { english: "In spite of", pron: "In spairof", spanish: "A pesar de" },
    //   { english: "That being said", pron: "Dat bin sed", spanish: "Dicho esto" },
    //   { english: "Uncalled for", pron: "Ancaled for", spanish: "Fuera de lugar" },
    //   { english: "By all means", pron: "Bai ol mins", spanish: "Sin duda" },
    //   { english: "By no means", pron: "Bai no mins", spanish: "De ninguna manera" },
      { english: "From what I see", pron: "From uarai si", spanish: "Por lo que veo" }
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
    else if (cat === 'ambos') state.wordsCopy = [...wordsRegular, ...words];
    else if (cat === 'conect') state.wordsCopy = [...conectivos];


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