function checkAnswers() {
    const result = document.getElementById('result');
    const answer = document.querySelector('input[name="q1"]:checked');
    
    if (answer) {
        if (answer.value === 'Paris') {
            result.textContent = 'Correct! Paris is the capital of France.';
            result.style.color = 'green';
        } else {
            result.textContent = 'Incorrect. The correct answer is Paris.';
            result.style.color = 'red';
        }
    } else {
        result.textContent = 'Please select an answer.';
        result.style.color = 'orange';
    }
}
