const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))

let currentQ = {}
let acceptinA = true
let questionCount = 0
let avquest = []
let score = 0

let questions = [
    {
    question: 'Commonly used data types DO Not Include: ',
    choice1: 'strings',
    choice2: 'booleans',
    choice3: 'alerts',
    choice4: 'numbers',
    answer: 3,
    },

    {
    question: 'The condition in an if/else statement is enclosed with _______. ',
    choice1: 'quotes',
    choice2: 'curly brackets',
    choice3: 'parenthesis',
    choice4: 'square brackets',
    answer: 4,
    },

    {
    question: 'Arrays in Javascript can be used to store _______.',
    choice1: 'numbers and strings',
    choice2: 'other arrays',
    choice3: 'booleans',
    choice4: 'all of the above',
    answer: 4,
    },

    {
    question: 'String values must be enclosed within _____ when being assigned to variables. ',
    choice1: 'commas',
    choice2: 'curly brackets',
    choice3: 'quotes',
    choice4: 'parenthesis',
    answer: 2,
    },
    
    {
    question: 'A very useful tool used during development and debugging for prinmting content to the debugger is: ',
    choice1: 'Javascript',
    choice2: 'terminal/bash',
    choice3: 'for loops',
    choice4: 'console log',
    answer: 4,
    },
]

var seconds = 1000 * 60
var min = seconds * 60

const MAX_Q = 5 

startgame = () => {
    questionCount = 0
    avquest = [...questions]
    getnewq()
}

//timer
const startmin = 1;
let time = startmin * 60;
const countdEl = document.getElementById('countdown');
setInterval(updateCD, 1000);

function updateCD(){
    const min = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 1 ? '0' + seconds : seconds;
    countdEl.innerHTML = `${min}: ${seconds}`;
    time--;
}

getnewq = () => {
    if(avquest.length === 0 || questionCount > MAX_Q){
        return window.location.assign('/scores.html')

    }
    questionCount++
    const questindex = Math.floor(Math.random() * avquest.length)
    currentQ = avquest[questindex]
    question.innerText = currentQ.question
    
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQ['choice' + number]

    })

    avquest.splice(questindex, 1)

    acceptinA = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptinA) return

        acceptinA = false
        const selCho = e.target
        const selAn = selCho.dataset['number']

        let classToApply = selAn == currentQ.answer ? 'correct' : "incorrect"
        if(classToApply === 'correct') {
            score === score + 1
            console.log(score)
        }

        selCho.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selCho.parentElement.classList.remove(classToApply)
            getnewq()
        }, 1000)
    })
})

startgame()