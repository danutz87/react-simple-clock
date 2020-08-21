import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.ticTac()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  ticTac() {
    this.setState({ time: new Date() })
  }

  getTime() {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }

    return this.state.time.toLocaleTimeString('en-GB', options)
  }

  render() {
    return (
      <div className='clock'>
        <span className='time'>{this.getTime()}</span>
      </div>
    )
  }
}

export default Clock;
