import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props

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
            <p className="amount">2000</p>
            <p>In Rupees</p>
          </div>
        </div>
        <h1 className="withdrawal-heading">Withdrawal</h1>
        <p className="withdrawal-para">CHOOSE SUM (IN RUPEES)</p>
        <ul className="cash-container">
          {denominationsList.map(eachObj => (
            <DenominationItem denomination={eachObj} key={eachObj.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
