import React from 'react'
import './Contact.css'
import formatPhone from '../../util/formatPhone'

class Contact extends React.Component {
  render() {
    let { name, phones } = this.props.contact

    phones = phones.map(phone => {
      const { number, isBusiness } = phone

      let style = 'phone'
      if (isBusiness) {
        style += ' phone-business'
      }

      return (
        <li key={name + number} className={style}>
          {formatPhone(number)}
        </li>
      )
    })

    return (
      <div className={'contact'}>
        <div className={'contact-header'}>{name}</div>
        <section className={'phones-container'}>
          <span className={'phones-header'}>Phones:</span>
          <ul className={'phones'}>{phones}</ul>
        </section>
      </div>
    )
  }
}

export default Contact
