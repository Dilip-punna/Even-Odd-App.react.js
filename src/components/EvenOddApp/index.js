// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandom = () => Math.ceil(Math.random() * 100)

  onButton = () => {
    const randomNum = this.getRandom()
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div>
        <h1>
          Count<span>{count}</span>
        </h1>
        <p>Count is {displayText}</p>
        <button type="button" onClick={this.onButton}>
          Increment
        </button>
        <p>*Increase by Random number between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
