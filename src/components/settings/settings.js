import React from 'react'
import "./settings.css"

const Settings = ({state}) => {

  return ( 
    <div className="settings">
      <div className="boardSize">
        <div>5</div>
        <div>10</div>
        <div>20</div>
      </div>
      <div className="colorScheme">
        <div>Colors</div>
      </div>

      <div className="difficulty">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>


    </div>
  )  
}

export default Settings