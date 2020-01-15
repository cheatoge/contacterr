import React from 'react'
import { connect } from 'react-redux'
import { Contact } from '../Contact'
import { AddContact } from '../Contact'
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

    return <div className={'contact-list'}>{contacts}</div>
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
})

export default connect(mapStateToProps)(ContactList)
