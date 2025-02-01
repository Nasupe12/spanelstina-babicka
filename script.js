let correctAnswers = 0;
let incorrectAnswers = 0;
let currentWord = '';
let currentAnswer = '';

function startGame(spanish, czech) {
    currentWord = spanish;
    currentAnswer = czech;

    document.getElementById("question").innerText = `Přeložte: ${currentWord}`;
    document.getElementById("feedback").innerText = '';
    document.getElementById("answer").value = '';
    document.getElementById("results").style.display = 'none';
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();

    if (userAnswer.toLowerCase() === currentAnswer.toLowerCase()) {
        document.getElementById("feedback").innerText = 'Správně!';
        document.getElementById("feedback").className = 'correct';
        correctAnswers++;
    } else {
        document.getElementById("feedback").innerText = `Špatně! Správně: ${currentAnswer}`;
        document.getElementById("feedback").className = 'incorrect';
        incorrectAnswers++;
    }

    document.getElementById("answer").disabled = true;

    setTimeout(function () {
        document.getElementById("answer").disabled = false;
        document.getElementById("answer").value = '';
    }, 1000);
}

function resetGame() {
    document.getElementById("correctCount").innerText = `Správně: ${correctAnswers}`;
    document.getElementById("incorrectCount").innerText = `Špatně: ${incorrectAnswers}`;
    document.getElementById("results").style.display = 'block';
}
