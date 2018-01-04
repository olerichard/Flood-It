export default function InitialState(){
  return {
    boardSize :5,  
    altColor: [
      ['red','blue','orange','purple','yellow','brown','green'],
      ['#FC726D','#2E4F6D','#35AE57','#F7931E','#FFCE55','#AF4175','#29CCC0'] 
    ],
    colors : [],  
    turn : 0,
    maxTurns: 0,
    difficulty: 3,
    winner: false,
    window:{width:300,height:750},
    showSettings:true
  }
}


