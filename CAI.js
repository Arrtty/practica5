// Función para generar un número aleatorio entre 0 y max (exclusivo)
const getRandomNumber = (max) => Math.floor(Math.random() * max);

// Función para mostrar un mensaje aleatorio de motivación
const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];

// PASO 1: Generar la pregunta
const n1 = getRandomNumber(10);
const n2 = getRandomNumber(10);
const problemInWords = `What is ${n1} + ${n2}?`;

// PASO 2: Obtener la respuesta del usuario
let userResponse = Number(prompt(problemInWords));

// PASO 3: Procesar la respuesta
const correctAnswer = n1 + n2;
while (userResponse !== correctAnswer) {
    console.log("Wrong answer! Try again.");
    userResponse = Number(prompt(problemInWords));
}

// PASO 4: Mostrar un mensaje motivador
const messages = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
const motivationalMessage = getRandomMessage(messages);
console.log(motivationalMessage);
alert(motivationalMessage);