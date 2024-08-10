document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: 'What is the full form of HTML',
            options: ['Hyper Text Mark Language', 'Hyper Text Magnetic Language', 'Hyper Text Markup Language', 'None'],
            answer: 'Hyper Text Markup Language'
        },
        {
            question: 'What is the full form of CSS',
            options: ['Cascading Style Sheet', 'Cascade style star', 'Custom style sheet', 'None'],
            answer: 'Cascading Style Sheet'
        },
        {
            question: 'What is the full form of JS',
            options: ['Java Style', 'Java Script', 'Jacobian Script', 'None'],
            answer: 'Java Script'
        },
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionContainer = document.getElementById('question-container');
    const nextButton = document.getElementById('next-button');
    const scoreElement = document.getElementById('score');

    function loadQuestion() {
        const question = questions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <h2>${question.question}</h2>
            ${question.options.map(option => `<div class="option" data-answer="${option}">${option}</div>`).join('')}
        `;

        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => {
                if (option.dataset.answer === question.answer) {
                    score++;
                    scoreElement.textContent = score;
                }
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    loadQuestion();
                } else {
                    questionContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your final score is ${score} out of ${questions.length}</p>`;
                    nextButton.style.display = 'none';
                }
            });
        });
    }

    nextButton.addEventListener('click', () => {
        loadQuestion();
    });

    loadQuestion(); 
});
