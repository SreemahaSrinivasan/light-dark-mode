// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeButtonStatus = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  onChangeButtonText = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'Light Mode' : 'Dark Mode'
  }

  onChangeClassName = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'dark-mode' : 'light-mode'
  }

  render() {
    const buttonText = this.onChangeButtonText()
    const containerClassName = this.onChangeClassName()
    return (
      <div className="app-container">
        <div className={`container ${containerClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            type="button"
            className="button"
            onClick={this.onChangeButtonStatus}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
