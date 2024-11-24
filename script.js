document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('questions.json');
        const data = await response.json();
        
        const currentDate = new Date();
        const dayOfYear = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        
        const questionIndex = dayOfYear % data.questions.length;
        const question = data.questions[questionIndex].content;
        
        const questionDisplay = document.getElementById('question-display');
        questionDisplay.innerText = question;
    } catch (error) {
        console.error('Errore:', error);
        document.getElementById('question-display').innerText = 'Errore durante la generazione della domanda.';
    }
});