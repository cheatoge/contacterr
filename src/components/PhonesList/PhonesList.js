import React from 'react'
import { Phone } from '../Phone'
import './PhonesList.css'

class PhonesList extends React.Component {
  render() {
    const { isEditing, phones, updatePhone, addPhone } = this.props

    const wrappedPhones = phones.map((phone, index) => {
      return (
        <li key={index}>
          <Phone
            isEditing={isEditing}
            phone={phone}
            updatePhone={updatePhone}
            index={index}
          />
        </li>
      )
    })

    return (
      <section className={'phones-container'}>
        {isEditing || phones.length > 0 ? (
          <>
            <span>Phones:</span>
            <ul className={'phones'}>
              {wrappedPhones}
              {isEditing && (
                <li>
                  <button onClick={addPhone}>addPhone</button>
                </li>
              )}
            </ul>
          </>
        ) : (
          <span>No phones defined</span>
        )}
      </section>
    )
  }
}

export default PhonesList
