import React, { Component } from 'react'
import '../styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      due: 0,
      paid: 0,
      adminFee: 0,
      timeConsumed: 0,
      totalRefund: 0
    }
  }

  _dueAmount = e => {
    e.preventDefault()
    this.setState({
      due: parseInt(e.target.value)
    })
  }

  _paid = e => {
    e.preventDefault()
    this.setState({
      paid: parseInt(e.target.value)
    })
  }

  _adminFee = e => {
    e.preventDefault()
    this.setState({
      adminFee: parseInt(e.target.value)
    })
  }

  _timeConsumed = e => {
    e.preventDefault()
    this.setState({
      timeConsumed: parseInt(e.target.value) / 100
    })
  }

  calculateRefund = e => {
    e.preventDefault()
    let refund = this.state.due - (this.state.due * this.state.timeConsumed + this.state.adminFee) - this.state.paid
    this.setState({
      totalRefund: refund
    })
  }

  render() {
    return (
      <div className="formWrap">
        <h2>
          Refund = ${this.state.totalRefund}
        </h2>
        <form id="form">
          <label>Total Amount Due </label>
          <input onChange={this._dueAmount} placeholder="Total Amount Due" />
          <label>Paid to Date</label>
          <input onChange={this._paid} placeholder="Paid to Date" />
          <label>Admin Fee</label>
          <input onChange={this._adminFee} placeholder="$250" />
          <label>Percentage of Time Consumed</label>
          <input onChange={this._timeConsumed} placeholder="Percentage of Time Consumed" />
          <button onClick={this.calculateRefund}>Go!</button>
        </form>
        <h4>OPTION 1</h4>
        <div className="option1">
          <p>
            <div id="anchor">
              For your time at Bloc, you owe ${`${this.state.due * this.state.timeConsumed} + $${this.state
                .adminFee}  `}
              <a href="http://www.bloc.io/faq">non-refundable fee</a>
              {` = $${this.state.due * this.state.timeConsumed + this.state.adminFee}`}. Since you’ve paid Bloc ${this.state.paid},
              you will receive a ${`${this.state.paid -
                (this.state.due * this.state.timeConsumed + this.state.adminFee)}
           refund within 5 business days back to the original account that was charged. Please confirm that everything looks good and I will complete your withdrawal.`}
            </div>
          </p>
        </div>
        <h4>OPTION 2</h4>
        <p>
          I have provided your refund details below. Please confirm that everything looks good and I will complete your
          withdrawal.
        </p>
        <p>
          ${this.state.due} total * {this.state.timeConsumed * 100}% time = ${`${this.state.due * this.state.timeConsumed} due`}
          <br />
          <div id="anchor">
            ${`${this.state.due * this.state.timeConsumed} + $${this.state.adminFee} `}
            <a href="http://www.bloc.io/faq">non-refundable fee</a> = ${`${this.state.due * this.state.timeConsumed +
              this.state.adminFee} total due`}
          </div>
          ${this.state.paid} paid - ${this.state.due * this.state.timeConsumed + this.state.adminFee} due = ${`${this.state.paid - this.state.due * this.state.timeConsumed - this.state.adminFee} total refund`}
        </p>
      </div>
    )
  }
}

export default App
