// Get all the buttons and add event listeners to them
document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button')

    for(let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'submit'){
                alert('You clicked submit')
            } else{
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`)
            }
        })
    }
})

/**
 * Displays 2 random numbers
 */
function runGame(){
    let num1 = Math.floor(Math.random() * 25 + 1)
    let num2 = Math.floor(Math.random() * 25 + 1)
}

function checkScore(){
    
}

function checkCorrectAnswer(){
    
}

function incrementCorrectAnswer(){
    
}

function incrementIncorrectAnswer(){
    
}

function displayAdditionQuestion(){
    
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}

