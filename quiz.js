function checkAnswer () {
    const correctAnswer = '4';
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    const feedbackElement = document.getElementById('feedback');

    if(userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct Answer. Good Job!'
    } else {
        feedbackElement.textContent = 'Wrong Answer. Try again'
    };
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);