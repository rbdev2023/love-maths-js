// Get all the buttons and add event listeners to them
document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button')

    for(let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'submit'){
                alert('You clicked submit')
            } else{
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    runGame('addition')
})

/**
 * Displays 2 random numbers
 */
function runGame(gameType){
    let num1 = Math.floor(Math.random() * 25 + 1)
    let num2 = Math.floor(Math.random() * 25 + 1)

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2)
    } else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkScore(){
    
}

function checkCorrectAnswer(){
    
}

function incrementCorrectAnswer(){
    
}

function incrementIncorrectAnswer(){
    
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1
    document.getElementById('operand2').textContent = operand2
    document.getElementById('operator').textContent = '+'
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}

