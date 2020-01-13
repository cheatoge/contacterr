import React from 'react'
import { connect } from 'react-redux'
import { Contact } from '../Contact'
import './ContactList.css'

class ContactList extends React.Component {
  render() {
    let { removeContact, contacts } = this.props
    contacts = contacts.map(contact => {
      return (
        <Contact
          key={contact.id}
          removeContact={removeContact}
          contact={contact}
        />
      )
    })

    return <div className={'contact-list'}>{contacts}</div>
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
})

export default connect(mapStateToProps)(ContactList)
