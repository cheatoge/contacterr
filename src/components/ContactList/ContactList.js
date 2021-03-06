import React from 'react'
import { Contact } from '../Contact'
import { AddContact } from '../Contact'
import { ContactSearch } from '../../containers/ContactSearch'
import './ContactList.css'

class ContactList extends React.Component {
  render() {
    let { addContact, removeContact, updateContact, contacts } = this.props
    contacts = contacts.map(contact => {
      return (
        <Contact
          key={contact.id}
          removeContact={removeContact}
          updateContact={updateContact}
          contact={contact}
        />
      )
    })

    contacts = [<AddContact addContact={addContact} key={-1} />, ...contacts]

    return (
      <div>
        <div className="contact-list-toolstrip">
          <ContactSearch />
        </div>
        <div className="contact-list">{contacts}</div>
      </div>
    )
  }
}

export default ContactList
