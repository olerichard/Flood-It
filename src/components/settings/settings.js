import React, { Component } from 'react'
import "./settings.css";
import StdButton from '../stdButton/stdButton';
import ColorButton from '../colorButton/colorButton';
import InputRange from 'react-input-range';


export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = props.state
    this.updateSetting = this.updateSetting.bind(this)
    this.saveClick = props.save
  }

  updateSetting = (state, settingName, newValue) => {
    if (state[settingName] !== newValue) {
      state[settingName] = newValue
      this.setState(state)
    }
  }

  render() {
    return (
      <div className="settings">

        <div className="boardSize columns">
          <div className="boardSizeHeader">BOARD SIZE</div>
          <div className="boardSizeSettings">
            <StdButton text="5" toggle={this.state.boardSize === 5 ? true : false} click={this.updateSetting.bind(null, this.state, "boardSize", 5)} />
            <StdButton text="10" toggle={this.state.boardSize === 10 ? true : false} click={this.updateSetting.bind(null, this.state, "boardSize", 10)} />
            <StdButton text="20" toggle={this.state.boardSize === 20 ? true : false} click={this.updateSetting.bind(null, this.state, "boardSize", 20)} />
          </div>
        </div>

        <div className="colorScheme columns">
          <div className="colorSchemeHeader">COLORS</div>
          <div className="colorSchemeSettings">
            <ColorButton text="" toggle={this.state.chosenColor === 1 ? true : false} colors={this.state.colorTemplates[1]} click={this.updateSetting.bind(null, this.state, "chosenColor", 1)} />
            <ColorButton text="" toggle={this.state.chosenColor === 0 ? true : false} colors={this.state.colorTemplates[0]} click={this.updateSetting.bind(null, this.state, "chosenColor", 0)} />
          </div>
        </div>

        <div className="colorCount">
          <div className="colorCountHeader">COLOR COUNT</div>
          <div className="colorCountRange">
            <InputRange
              maxValue={7}
              minValue={3}
              value={this.state.colorCount}
              onChange={value => this.setState({ colorCount: value })} />
          </div>
        </div>

        <div className="save columns">
          <StdButton text="SAVE" click={this.saveClick.bind(null, this.state)} />
        </div>
      </div >
    )
  }
}