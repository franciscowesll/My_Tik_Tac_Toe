
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
const columns_rows = ["","","","","","","","",""]
    
function draw(){
    let content = ""

    for (i in columns_rows){
        content+= "<div onclick=clickButton("+i+")>"+columns_rows[i]+"</div>"
        game.innerHTML = content
    
    }

  
} 
draw() 

//Cheking if the

function check_win(){
    var gameOver = false
    for (i in sequence_win){
    if(
        columns_rows[sequence_win[i][0]] == 'X' &&
        columns_rows[sequence_win[i][1]] == 'X' && 
        columns_rows[sequence_win[i][2]] == 'X'){
        gameOver = true
        alert('Game Over o vencedor é o player X')
        
    } 
      else if(
          columns_rows[sequence_win[i][0]] == 'O' &&
          columns_rows[sequence_win[i][1]] == 'O' && 
          columns_rows[sequence_win[i][2]] == 'O'){
          gameOver = true
          alert('Game Over o vencedor é o player O')
       
      }
      setTimeout(function(){
       if(gameOver === false && flag === 8){
            alert('Deu Velha')
            gameOver = true
      }},100)
          
    }

}
   


//Aqui vamos definir quando será colocado X ou O
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
     draw() 
     setTimeout(function(){
        check_win()
      
    },50)
}



