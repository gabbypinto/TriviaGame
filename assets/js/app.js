let trivia = [
    {
        question: `Which superhero is a spoof of Deathstroke?`,
        answers: [
            {
                name: 'qOne',
                ans: 'Spiderman',
                val: 1,
                cor: false,
            },
            {
                name: 'qTwo',
                ans: 'Deadpool',
                val: 2,
                cor: true,
            },
            {
                name: 'qThree',
                ans: 'Doctor Strange',
                val: 3,
                cor: false,
            },
            {
                name: 'qFour',
                ans: 'Superman',
                val: 4,
                cor: false,
            }
        ]
    },
    {
        question: `What is Spiderman's real name?`,
        answers: [
            {
                name: 'qOne',
                ans: 'Peter Parker',
                val: 1,
                cor: true,
            },
            {
                name: 'qTwo',
                ans: 'Tony Starker',
                val: 2,
                cor: false,
            },
            {
                name: 'qThree',
                ans: 'Whitney Peterson',
                val: 3,
                cor: false,
            },
            {
                name: 'qFour',
                ans: 'Peter Johnson',
                val: 4,
                cor: false,
            }
        ]
    },
    {
        question: `How many played Spider-Man on the big screen in the US before Tom Holland?`,
        answers: [
            {
                name: 'qOne',
                ans: 'Three',
                val: 1,
                cor: false,
            },
            {
                name: 'qTwo',
                ans: 'One',
                val: 2,
                cor: false,
            },
            {
                name: 'qThree',
                ans: 'Four',
                val: 3,
                cor: false,
            },
            {
                name: 'qFour',
                ans: 'Two',
                val: 4,
                cor: true,
            }
        ]
    },
    {
        question: `In Guardians of the Galaxy, what is the name of the dog in the Collector Taneleer Tivans museum`,
        answers: [
            {
                name: 'qOne',
                ans: 'Cosmo',
                val: 1,
                cor: true,
            },
            {
                name: 'qTwo',
                ans: 'Astro',
                val: 2,
                cor: false,
            },
            {
                name: 'qThree',
                ans: 'Sparkly',
                val: 3,
                cor: false,
            },
            {
                name: 'qFour',
                ans: 'Spud',
                val: 4,
                cor: false,
            }
        ]
    },
    {
        question: `How many versions of the Iron Man armor has Tony Stark made?`,
        answers: [
            {
                name: 'qOne',
                ans: '11',
                val: 1,
                cor: false,
            },
            {
                name: 'qTwo',
                ans: '63',
                val: 2,
                cor: false,
            },
            {
                name: 'qThree',
                ans: '29',
                val: 3,
                cor: false,
            },
            {
                name: 'qFour',
                ans: '47',
                val: 4,
                cor: true,
            }
        ]
    },
    {
        question: `What alien race is Gamora?`,
        answers: [
            {
                name: 'qOne',
                ans: 'Luphomoids',
                val: 1,
                cor: false,
            },
            {
                name: 'qTwo',
                ans: 'Badoon',
                val: 2,
                cor: false,
            },
            {
                name: 'qThree',
                ans: 'Zen-Whoberis',
                val: 3,
                cor: true,
            },
            {
                name: 'qFour',
                ans: 'Centaurian',
                val: 4,
                cor: false,
            }
        ]
    },
    {
        question: `How many Infinity Stones are there in the MCU?`,
        answers: [
            {
                name: 'qOne',
                ans: 'Ten',
                val: 1,
                cor: false,
            },
            {
                name: 'qTwo',
                ans: 'Eight',
                val: 2,
                cor: false,
            },
            {
                name: 'qThree',
                ans: 'Five',
                val: 3,
                cor: false,
            },
            {
                name: 'qFour',
                ans: 'Six',
                val: 4,
                cor: true,
            }
        ]
    },
    {
        question: `What kind of doctor is Jane Foster?`,
        answers: [
            {
                name: 'qOne',
                ans: 'Psychologist',
                val: 1,
                cor: false,
            },
            {
                name: 'qTwo',
                ans: 'Geologist',
                val: 2,
                cor: false,
            },
            {
                name: 'qThree',
                ans: 'Astrophysicist',
                val: 3,
                cor: true,
            },
            {
                name: 'qFour',
                ans: 'Surgeon',
                val: 4,
                cor: false,
            }
        ]
    },
    {
        question: `What is the name of Star-Lord's ship in Guardians of the Galaxy?`,
        answers: [
            {
                name: 'qOne',
                ans: 'Milano',
                val: 1,
                cor: true,
            },
            {
                name: 'qTwo',
                ans: 'Freedom',
                val: 2,
                cor: false,
            },
            {
                name: 'qThree',
                ans: 'Firebird',
                val: 3,
                cor: false,
            },
            {
                name: 'qFour',
                ans: 'Jefferson Starship',
                val: 4,
                cor: false,
            }
        ]
    },
    {
        question: `What movie did Thanos first appear in?`,
        answers: [
            {
                name: 'qOne',
                ans: 'Avenger Age of Ultron',
                val: 1,
                cor: false,
            },
            {
                name: 'qTwo',
                ans: 'Guardians of the Galaxy',
                val: 2,
                cor: true,
            },
            {
                name: 'qThree',
                ans: 'Avengers',
                val: 3,
                cor: true,
            },
            {
                name: 'qFour',
                ans: 'Iron Man',
                val: 4,
                cor: false,
            }
        ]
    },
    
]


// Global Variables
let numCorrect, numIncorrect, myTimer, time, isAnswered, isTimeOut, j, gameOver

// Initializing the setup and HTML
const init = () => {
    numCorrect = 0
    numIncorrect = 0
    time = 20
    isAnswered = false
    isTimeOut = false
    gameOver = false
    clearContent()
    document.querySelector('.time6Div').innerHTML = '00s'
}
//displays everything
const displayAll = () => {
    clearContent()
    //resets timer
    
}
//displays question
const displayQ = (content) => {
    let newQ = document.createElement('p')
    newQ.setAttribute('class', 'currentQ')
    newQ.textContent = content
    document.querySelector('.questionDiv').append(newQ)
}
// displays answer
const displayA = (content, itsCor, itsVal) => {
    let newA = document.createElement('p')
    newA.setAttribute('id', `currentA${itsVal}`)
    newA.setAttribute('class', 'currentA')
    newA.setAttribute('data-value', itsVal)
    newA.setAttribute('data-correct', itsCor)
    newA.textContent = content
    document.querySelector('.answerDiv').append(newA)
}
// clears content
const clearContent = () => {
    document.querySelector(`.qDiv`).innerHTML = ''
    document.querySelector(`.aDiv`).innerHTML = ''
    document.querySelector('.status').innerHTML = ''
}
//count time
const stopwatch= (seconds) => {
    
}
//display timer
const timer = () => {
    myTimer = setInterval(() => {
        document.querySelector('.timerDiv').innerHTML = '00s'
        time--
        if (time === 0) {
            //player runs out of rime
        } else {
            //call stopwatch until time ==0
        }
    }, 1000)
}

//select an answer
const answerSel = (content) => {
    // I have no idea how to change multiple elements' className with one line.
    // repeated four times to make it work for now.
    document.querySelector('.currentA').className = 'answeredA'
    document.querySelector('.currentA').className = 'answeredA'
    document.querySelector('.currentA').className = 'answeredA'
    document.querySelector('.currentA').className = 'answeredA'
    //if answer is true, numcorrect increases
    if (content === 'true') {
        numCorrect++
        document.querySelector('.status').innerHTML = "Correct!"
        clearInterval(myTimer)
        runGame()
    } else {
        numIncorrect++
        document.querySelector('.status').innerHTML = "Incorrect!"
        clearInterval(myTimer)
        runGame()
    }
}
//run game
const runGame = () => {
    if (gameOver === false) {
        if (isAnswered === false && isTimeOut === false) {
            displayAll()
        } else if (isAnswered === true && isTimeOut === false) {
            isAnswered = false
            j++
            time = 31
            setTimeout(() => {
                displayAll()
            }, 5000)
        } else if (isAnswered === false && isTimeOut === true) {
            isTimeOut = false
            j++
            time = 31
            setTimeout(() => {
                displayAll()
            }, 5000)
        }
    } else {
        clearContent()
        document.querySelector('.timerDiv').innerHTML = ''
        document.querySelector('.status').innerHTML = `
            <p>GAME OVER</p>
            <p>You got ${numCorrect} right</p>
            <p>You got ${numIncorrect} incorrect</p>
        `
    }
}


// to start a new game
document.addEventListener('click', e => {

    if (e.target.className === 'startGame') {
        init()
        runGame()
    }
    if (e.target.className === 'currentA') {
        // answerSel(e.target)
        answered = true
        answerSel(e.target.dataset.correct)
    }
})

init()