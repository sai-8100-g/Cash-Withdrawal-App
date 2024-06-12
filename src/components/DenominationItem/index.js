import {Component} from 'react'

class DenominationItem extends Component {
  render() {
    const {denomination} = this.props

    return (
      <li>
        <button type="button">{denomination}</button>
      </li>
    )
  }
}

export default DenominationItem
