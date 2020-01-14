import React from 'react'
import formatPhone from '../../util/formatPhone'
import './Phone.css'

class Phone extends React.Component {
  onChange = event => {
    const { updatePhone, index, phone } = this.props
    let newValue
    if (event.target.type === 'checkbox') {
      newValue = !phone[event.target.name]
    } else {
      newValue = event.target.value || ''
      const digits = newValue.match(/\d/g)
      newValue = digits ? digits.join('') : ''
    }

    updatePhone(index, {
      ...phone,
      [event.target.name]: newValue
    })
  }

  render() {
    const defaultValue = {
      number: '',
      isBusiness: false
    }
    const { isEditing, phone, index, updatePhone } = this.props
    const { number, isBusiness } = phone || defaultValue

    let style = 'phone-editing'
    if (isBusiness) {
      style += ' phone-business'
    }

    return (
      <>
        {isEditing ? (
          <div className={style}>
            <div>
              <input
                pattern="[0-9]*"
                name="number"
                value={number}
                onChange={this.onChange}
              ></input>
              <button onClick={() => updatePhone(index)}>x</button>
            </div>
            <div>
              <label>Business</label>
              <input
                name="isBusiness"
                type="checkbox"
                checked={isBusiness}
                onChange={this.onChange}
              />
            </div>
          </div>
        ) : (
          <span className={style}>{formatPhone(number)}</span>
        )}
      </>
    )
  }
}

export default Phone
