// @ts-nocheck

const translations = {
    it: {
        title: 'Domande di Cultura Generale',
        reveal: 'Mostra',
        back: 'Indietro',
        error: 'Errore durante la generazione delle domande.'
    },
    en: {
        title: 'General Culture Questions',
        reveal: 'Reveal',
        back: 'Back',
        error: 'Error generating questions.'
    },
    es: {
        title: 'Preguntas de Cultura General',
        reveal: 'Mostrar',
        back: 'Atrás',
        error: 'Error al generar preguntas.'
    },
    pt: {
        title: 'Perguntas de Cultura Geral',
        reveal: 'Mostrar',
        back: 'Voltar',
        error: 'Erro ao gerar perguntas.'
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('questions.json');
        const data = await response.json();
        
        const questionsContainer = document.getElementById('questions');
        
        data.questions.forEach((question, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            
            const cardFront = document.createElement('div');
            cardFront.className = 'card-front card-content';
            cardFront.innerHTML = `<p>${question.content}</p><button onclick="flipCard(${index})">${translations[getCurrentLanguage()].reveal}</button>`;
            
            const cardBack = document.createElement('div');
            cardBack.className = 'card-back card-content';
            cardBack.innerHTML = `<p>${question.answer}</p><button onclick="flipCard(${index})">${translations[getCurrentLanguage()].back}</button>`;
            
            card.appendChild(cardFront);
            card.appendChild(cardBack);
            questionsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Errore:', error);
        document.getElementById('questions').innerText = translations[getCurrentLanguage()].error;
    }
});

function flipCard(index) {
    const card = document.getElementsByClassName('card')[index];
    card.classList.toggle('flipped');
}

function switchLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelector('title').innerText = translations[lang].title;
    document.querySelector('h1').innerText = translations[lang].title;
    updateButtonsText();
}

function getCurrentLanguage() {
    return document.documentElement.lang || 'it';
}

function updateButtonsText() {
    const cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const frontButton = card.querySelector('.card-front button');
        const backButton = card.querySelector('.card-back button');
        frontButton.innerText = translations[getCurrentLanguage()].reveal;
        backButton.innerText = translations[getCurrentLanguage()].back;
    }
}


translate_questions = () => {
    const lang = document.getElementById("lang").value;
    switchLanguage(lang);
}