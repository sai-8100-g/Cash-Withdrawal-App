import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 2000,
      list: props.denominationsList,
    }
  }

  OnChangeAmount = id => {
    const {list, amount} = this.state
    const filteredObj = list.filter(eachObj => eachObj.id === id)
    console.log(filteredObj)
    const changedAmount = amount - filteredObj[0].value
    console.log(changedAmount)
    this.setState({amount: changedAmount})
  }

  render() {
    const {amount, list} = this.state

    return (
      <div className="withdrawal-container">
        <div className="name-container">
          <p>
            <span>S</span> Sai kumar
          </p>
        </div>
        <div className="balance-container">
          <p>Your Balance</p>
          <div className="cash">
            <p className="amount">{amount}</p>
            <p>In Rupees</p>
          </div>
        </div>
        <p className="withdrawal-heading">Withdrawal</p>
        <p className="withdrawal-para">CHOOSE SUM (IN RUPEES)</p>
        <ul className="cash-container">
          {list.map(eachObj => (
            <DenominationItem
              OnChangeAmount={this.OnChangeAmount}
              denomination={eachObj}
              key={eachObj.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
