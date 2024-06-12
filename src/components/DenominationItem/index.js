import {Component} from 'react'

class DenominationItem extends Component {
  render() {
    const {denomination, OnChangeAmount} = this.props
    const {value, id} = denomination

    const OnSubtract = () => {
      OnChangeAmount(id)
    }

    return (
      <li>
        <button type="button" onClick={OnSubtract}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
