export default function MakeMove(color,state){  
  const newState = state
  const board = newState.board

  for (let r = 0; r < board.length; r++) {
    for (let t= 0; t < board[r].length; t++) {
      if(board[r][t].collected === true){
        if(t-1 >= 0){
          if(board[r][t-1].color === color) 
            board[r][t-1].collected = true
        }
        if(t+1 < board[r].length){
          if(board[r][t+1].color === color) 
            board[r][t+1].collected = true
        }
        
        if(r+1 < board.length){
          if(board[r+1][t].color === color)
            board[r+1][t].collected = true
        }
        if(r-1 >= 0){
          if(board[r-1][t].color === color){ 
            if( board[r-1][t].collected !== true){
              board[r-1][t].collected = true
              r = r > 1 ? r-2 : 0
              break
            }
          }
        }
      }
    }
  }
  board.map((r)=>r.map((l)=> l.color = l.collected === true ? color : l.color  ))
  
  newState.winner = "won"
  for (let r = 0; r < board.length; r++) {
    for (let t= 0; t < board[r].length; t++) {
      if (board[r][t].collected === false){
        newState.winner = false
        break;
      }

    }
  }
    
  newState.turn++ 
  if(newState.turn >= newState.maxTurns && newState.winner === false)
    newState.winner = "lost"
  

  return newState; 
}

