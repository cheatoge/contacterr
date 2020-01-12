import React from 'react'
import { Contact } from '../Contact'
import './ContactList.css'

class ContactList extends React.Component {
  render() {
    let { contacts } = this.props
    contacts = contacts.map(contact => {
      return <Contact key={contact.id} contact={contact} />
    })

    return <div className={'contact-list'}>{contacts}</div>
  }
}

export default ContactList
