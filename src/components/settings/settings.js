import React, { useState } from 'react'
import "./settings.css";
import StdButton from '../stdButton/stdButton';
import ColorButton from '../colorButton/colorButton';
import InputRange from 'react-input-range';

export default function Settings(props) {

  const [boardSize, setBoardSize] = useState(props.boardSize);
  const [chosenColor, setChosenColor] = useState(props.chosenColor);
  const [colorCount, setColorCount] = useState(props.colorCount);

  return (
    <div className="settings">
      <div className="boardSize columns">
        <div className="boardSizeHeader">BOARD SIZE</div>
        <div className="boardSizeSettings">
          <StdButton text="5" toggle={boardSize === 5} click={() => setBoardSize(5)} />
          <StdButton text="10" toggle={boardSize === 10} click={() => setBoardSize(10)} />
          <StdButton text="20" toggle={boardSize === 20} click={() => setBoardSize(20)} />
        </div>
      </div>

      <div className="colorScheme columns">
        <div className="colorSchemeHeader">COLORS</div>
        <div className="colorSchemeSettings">
          <ColorButton text="" toggle={chosenColor === 1} colors={props.colorTemplates[1]} click={() => setChosenColor(1)} />
          <ColorButton text="" toggle={chosenColor === 0} colors={props.colorTemplates[0]} click={() => setChosenColor(0)} />
        </div>
      </div>

      <div className="colorCount">
        <div className="colorCountHeader">COLOR COUNT</div>
        <div className="colorCountRange">
          <InputRange
            maxValue={7}
            minValue={3}
            value={colorCount}
            onChange={value => setColorCount(value)} />
        </div>
      </div>

      <div className="save columns">
        <StdButton text="SAVE" click={props.save.bind(null, boardSize, chosenColor, colorCount)} />
      </div>
    </div >
  )
}
