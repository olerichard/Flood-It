export default function CreateBoard(y,x){
    return Array(y).fill().map(()=>Array(x).fill().map(()=>color()))
  }
  
  
  function color (){
    return  { 
        color: Math.floor(Math.random() * 7),
        collected: false
      }
  }