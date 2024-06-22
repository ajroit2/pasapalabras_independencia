const questions = [
    {"letter": "A", "question": "Apellido del Director Supremo que asumió en 1815. Ignacio .......... Thomas", "answer": "Alvarez"},
    {"letter": "B", "question": "Apellido de uno de los revolucionarios que reclamaron la formación de una nueva junta, con miembros Criollos. Domingo French y Antonio...", "answer": "Berutti"},
    {"letter": "C", "question": "Apellido del Virrey a cargo durante la Revolución de Mayo", "answer": "Cisneros"},
    {"letter": "D", "question": "Gobierno de una sola persona creado en 1814", "answer": "Directorio"},
    {"letter": "E (contiene)", "question": "¿Cómo se conoció a la asamblea creada por el Segundo Triunvirato? (Asamble del Año.......)", "answer": "Trece"},
    {"letter": "F", "question": "Nombre de la dueña de la casa de Tucumán. Doña ....... Bazán de Laguna", "answer": "Francisca"},
    {"letter": "G", "question": "Nombre que recibió la Junta de Gobierno al sumarse representantes de otras ciudades", "answer": "Grande"},
    {"letter": "H", "question": "Canción patria adoptada en la Asamblea del Año XIII", "answer": "Himno"},
    {"letter": "I", "question": "Lo que se declaró el 9 de julio de 1816", "answer": "Independencia"},
    {"letter": "J", "question": "Apellido de un integrante del Segundo Triunvirato. Antonio Alvarez .......", "answer": "Jonte"},
    {"letter": "L", "question": "Apellido de un integrante de la Primera Junta. Juan ......", "answer": "Larrea"},
    {"letter": "M", "question": "Apellido del secretario de la Primera Junta. Mariano...", "answer": "Moreno"},
    {"letter": "N", "question": "Emperador de Francia, consquitador de España en 1808", "answer": "Napoleon"},
    {"letter": "P", "question": "Apellido del Primer Director Supremo del Directorio. Gervasio Antonio de ...........", "answer": "Posadas"},
    {"letter": "R", "question": "Cuerpo militar creado por San Martín", "answer": "Regimiento"},
    {"letter": "S", "question": "Ciudad donde se ubicaba la Junta Central que decidió destituir a Liniers de su cargo de Virrey ", "answer": "Sevilla"},
    {"letter": "T", "question": "Gobierno de tres personas que sucedió a la Junta Grande", "answer": "Triunvirato"},
    {"letter": "U (contiene)", "question": "Que nombre tenía la máxima autoridad del Directorio? Director.....", "answer": "Supremo"},
    {"letter": "V", "question": "Título que tenía la máxima autoridad del Virreynato antes de la Revolución de Mayo", "answer": "Virrey"},
    {"letter": "X (contiene)", "question": "Nombre que recibió la gesta heróica al retirarse los ciudadanos de Jujuy de sus hogares", "answer": "Exodo"},
    {"letter": "Contiene Y", "question": "Nombre de la publicación de Mariano Moreno. La Gazeta de Buenos......", "answer": "Ayres"},
    {"letter": "Contiene Z", "question": "Miembro de la primera junta. Miguel de...", "answer": "Azcuenaga"},
];

let currentQuestionIndex = 0;
let score = 0;
let playerName = '';
let skippedQuestions = [];

const startButton = document.getElementById('start-button');
const playerNameInput = document.getElementById('player-name');
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const questionLetter = document.getElementById('question-letter');
const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const skipButton = document.getElementById('skip-button');
const scoreDisplay = document.getElementById('score');

startButton.addEventListener('click', startGame);
submitButton.addEventListener('click', submitAnswer);
skipButton.addEventListener('click', skipQuestion);

function startGame() {
    playerName = playerNameInput.value;
    if (playerName.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }
    welcomeScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionLetter.textContent = `Letra ${question.letter}`;
        questionText.textContent = question.question;
    } else {
        endGame();
    }
}

function submitAnswer() {
    const answer = answerInput.value.trim().toLowerCase();
    const question = questions[currentQuestionIndex];

    if (answer === question.answer.toLowerCase()) {
        alert('¡Correcto!');
        score++;
    } else {
        alert(`Incorrecto. La respuesta correcta es: ${question.answer}`);
    }

    scoreDisplay.textContent = score;
    answerInput.value = '';
    currentQuestionIndex++;
    showQuestion();
}


function skipQuestion() {
    const question = questions[currentQuestionIndex];
    skippedQuestions.push(question);
    answerInput.value = '';
    currentQuestionIndex++;
    showQuestion();
}

function endGame() {
    if (skippedQuestions.length > 0) {
        alert('Vamos a repetir las preguntas que saltaste.');
        questions.length = 0;
        questions.push(...skippedQuestions);
        skippedQuestions = [];
        currentQuestionIndex = 0;
        showQuestion();
    } else {
        alert(`¡Juego terminado, ${playerName}! Sos un verdadero patriota con un puntaje final de: ${score} / Fallaste: ${questions.length} respuestas`);
        location.reload();
    }
}
