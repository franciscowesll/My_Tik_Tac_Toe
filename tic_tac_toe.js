

const btn = document.getElementById("btn")
const game = document.querySelector(".container")
const sequence_win = [
                [0,3,6], 
                [0,1,2], 
                [3,4,5], 
                [6,7,8],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6],
            ]

//create the 9 position
var columns_rows = ["","","","","","","","",""]

var gameOver = false



btn.addEventListener("click", () => {
   
    draw(1)
})


function draw(valor){

    let content = ""
    if (valor == 1){
        columns_rows = ["","","","","","","","",""]
        gameOver = false
        flag = 0
     
    }


    for (i in columns_rows){
            content+="<div onclick='clickButton("+i+")'>"+columns_rows[i]+"</div>"
            game.innerHTML = content
        }
   
} 
draw() 


var playerX = document.getElementById('playerX')
var playerO = document.getElementById('playerO')
var winPlayerX = 0
var winPlayerO = 0
playerX.innerHTML = winPlayerX
playerO.innerHTML = winPlayerO 

//Cheking who won
function check_win(){
    
    for (i in sequence_win){
    if(
        columns_rows[sequence_win[i][0]] == 'X' &&
        columns_rows[sequence_win[i][1]] == 'X' && 
        columns_rows[sequence_win[i][2]] == 'X'){
        gameOver = true
        alert('Game Over o vencedor é o player X')
        winPlayerX += 1
        playerX.innerHTML = winPlayerX
    } 
      else if(
          columns_rows[sequence_win[i][0]] == 'O' &&
          columns_rows[sequence_win[i][1]] == 'O' && 
          columns_rows[sequence_win[i][2]] == 'O'){
          gameOver = true
          alert('Game Over o vencedor é o player O')
          winPlayerO += 1
          playerO.innerHTML = winPlayerO
      }
      setTimeout(function(){
       if(gameOver === false && flag === 9){
            alert('Deu Velha')
            gameOver = true
      }},100)
          
    }

    if (gameOver === true){
        btn.disabled = false
    }else {
        btn.disabled = true
    }
console.log(gameOver)
}
   


//Let's go to define when will be put X or O
var x_0 = true
var flag = 0

function clickButton(position){
    
    if (columns_rows[position]=="" && x_0 == true){
       columns_rows[position] = 'X'
        flag += 1
        x_0 = false
      
       
    }
    else if (columns_rows[position] == "" && x_0 == false){
        columns_rows[position] = 'O'
        flag += 1
        x_0 = true
      
        
    } else{
      alert("Tic Tac Toe, Player has already entered!")
    }
    // redesenha e verifica a situação do jogo ao click
    if (gameOver === false){
        draw() 
        setTimeout(function(){
            check_win()
        },50)
    } else {
        alert("Jogo concluído!! Clique no botão abaixo para recomeçar")
    }
  
    
      
    
}




