const x_class = 'x'
const o_class = 'o'
const win_combi = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartBtn = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-text-message]')
const turn = document.getElementById('indicator');


let circleTurn
let newGame = true
let boardArray = [];
let previousMoveArray = [];



const turnX = document.getElementById('X');
const turnO = document.getElementById('O');
const turnContainer = document.getElementById('turnContainer');
const btnHistory = document.getElementById('btnHistory');
const reset = document.getElementById('reset');

startGame()

// restartBtn.addEventListener('click', startGame)

restartBtn.addEventListener('click', function(){
    // turnContainer.style.display = "flex";
    // board.style.visibility = "hidden";
    // newGame = true;
    // winningMessageElement.style.display = "none";
    window.location.reload()
})

if (startGame) {
    turnContainer.style.display = "flex";
    board.style.visibility = "hidden";
    btnHistory.style.visibility = "hidden";
} else {
    turnContainer.style.display = "none";
    board.style.visibility = "visible";
}

turnX.addEventListener('click', function() {
    newGame = false;
    turn.textContent = `X's Turn`;
    turnContainer.style.display = "none";
    board.style.visibility = "visible";
})

turnO.addEventListener('click', function() {
    newGame = false;
    turn.textContent = `O's Turn`;
    swapTurns()
    setBoardHoverClass()
    turnContainer.style.display = "none";
    board.style.visibility = "visible";
})

function startGame() {    
    circleTurn = false    
    cellElements.forEach(cell => {
        cell.classList.remove(x_class)
        cell.classList.remove(o_class)
        cell.addEventListener('click', handleClick, { once: true})
    })    
    setBoardHoverClass()
    winningMessageElement.classList.remove('show') 
}


function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? o_class : x_class

    if(currentClass == o_class ){
        turn.textContent = `X's Turn`;
    }
    else{
      turn.textContent = `O's Turn`;
    }

    placeMark(cell, currentClass)
    

    if (checkWin(currentClass)){
        endGame(false)
    } else if (isDraw()){
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }   
}

function endGame(draw) {
    if (draw) {
      winningMessageTextElement.innerText = 'Draw!'
      turn.textContent = 'Draw!'
    } else {
      winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
      turn.innerText = `${circleTurn ? "O" : "X"}'s Wins!`
    }
    winningMessageElement.classList.add('show')
    
  }


function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(x_class) || 
        cell.classList.contains(o_class)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
    let saveMove = {}
    saveMove.cell = cell;
    saveMove.cellClass = currentClass;
    boardArray.push(saveMove)
    console.log('history', boardArray)
    console.log('boardArray',saveMove)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(x_class)
    board.classList.remove(o_class)
    if (circleTurn) {
        board.classList.add(o_class)
    } else {
        board.classList.add(x_class)
    }
}

// function checkWin(currentClass) {
//     return win_combi.some(combination => {
//         return combination.every(index => {
//             return cellElements[index].classList.contains(currentClass)
//         })
//     })
// }



function checkWin(currentClass) {
    const isWin = win_combi.some((combination) => {
      return combination.every((index) => {
        return cellElements[index].classList.contains(currentClass);
      });
    });
    if (isWin) {
      cellElements.forEach((element) =>
        element.removeEventListener("click", handleClick)
        
      );
      board.classList.remove(x_class);
      board.classList.remove(o_class);
      return true;
    } else {
      return false;
    }
  }

// game history section

const gameBtn = document.getElementById('gameHistory');
const back = document.getElementById('previous');
const next = document.getElementById('next');

gameBtn.addEventListener('click', function(){
    btnHistory.style.visibility = "visible";
    next.style.visibility = "hidden";
    winningMessageElement.classList.remove('show')
    // turn.style.visibility = "hidden";
    
})

reset.addEventListener('click', function(){
    window.location.reload()
})

back.addEventListener('click', function() {
    next.style.visibility = "visible";
    if (boardArray.length != 0) {
        let lastMove = boardArray[boardArray.length - 1]; 
        console.log('back-boardArray', boardArray)
        previousMoveArray.push(lastMove);
        boardArray.pop();
        lastMove.cell.classList.remove(lastMove.cellClass)
        
    } else {
        back.style.visibility = 'hidden';
    }

})

next.addEventListener('click', function() {
    if (previousMoveArray.length != 0) {
        let lastMove = previousMoveArray[previousMoveArray.length - 1];
        boardArray.push(lastMove);        
        previousMoveArray.pop();        
        lastMove.cell.classList.add(lastMove.cellClass)
    } else {
        next.style.visibility = 'hidden';
        back.style.visibility = 'visible';
    }
})
