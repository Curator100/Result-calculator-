// Pool of questions with scaling descriptions
const questions = [
    {
        question: "How many hours did you study this week?",
        scale: "0-2 hours = 1\n2-4 hours = 2\n4-6 hours = 3\n6-8 hours = 4\n8-10 hours = 5\n10-12 hours = 6\n12-14 hours = 7\n14-16 hours = 8\n16-18 hours = 9\n18+ hours = 10"
    },
    {
        question: "How much did you enjoy your classes this week?",
        scale: "On a scale from 0 (not at all) to 10 (loved it)"
    },
    {
        question: "How many assignments did you finish this week?",
        scale: "0 = 0 assignments\n1-2 = 1\n3-4 = 2\n5-6 = 3\n7-8 = 4\n9-10 = 5\n11-12 = 6\n13-14 = 7\n15-16 = 8\n17-18 = 9\n19+ = 10"
    },
    {
        question: "How many classes did you attend this week?",
        scale: "0-1 = 1\n2-3 = 2\n4-5 = 3\n6-7 = 4\n8-9 = 5\n10-11 = 6\n12-13 = 7\n14-15 = 8\n16-17 = 9\n18+ = 10"
    }
];

// Total questions limit for the quiz
const totalQuestions = 10;

// Track the current question and total score
let currentQuestionIndex = 0;
let totalScore = 0;

// Get elements
const questionElement = document.getElementById('question');
const scaleElement = document.getElementById('scale');
const answerElement = document.getElementById('answer');
const resultContainer = document.getElementById('result');
const percentageDisplay = document.getElementById('percentage');
const noteDisplay = document.getElementById('note');

// Show the first question
function showQuestion() {
    // Reset the answer box
    answerElement.value = '';

    // Display the question and scale
    questionElement.textContent = questions[currentQuestionIndex].question;
    scaleElement.textContent = questions[currentQuestionIndex].scale.replace(/\n/g, '\n');
}

// Move to the next question
function nextQuestion() {
    const answer = parseInt(answerElement.value);

    // Validate input
    if (answer >= 0 && answer <= 10) {
        // Add to the total score
        totalScore += answer;
        currentQuestionIndex++;

        // If there are more questions, show the next one
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            calculateResult();
        }
    } else {
        alert('Please enter a number between 0 and 10.');
    }
}

// Calculate the final score and show the result
function calculateResult() {
    const percentage = (totalScore / (questions.length * 10)) * 100;

    percentageDisplay.textContent = `Your score is: ${percentage.toFixed(2)}%`;

    // Fun note based on the result
    let note = '';
    if (percentage >= 90) {
        note = "You're a superhero in your studies!";
    } else if (percentage >= 70) {
        note = "Great job! You're almost there!";
    } else if (percentage >= 50) {
        note = "Good effort, keep it up!";
    } else {
        note = "You need more training, hero!";
    }

    noteDisplay.textContent = note;

    // Show result and hide question container
    resultContainer.classList.remove('hidden');
    document.getElementById('question-container').classList.add('hidden');
}

// Start the quiz
showQuestion();
