import React from 'react'
import { connect } from 'react-redux'
import { Contact } from '../Contact'
import { removeContact } from '../../actions'
import './ContactList.css'

class ContactList extends React.Component {
  removeContact = id => {
    console.log('Got id: ' + id)
    this.props.dispatch(removeContact(id))
  }

  render() {
    let { contacts } = this.props
    contacts = contacts.map(contact => {
      return (
        <Contact
          key={contact.id}
          removeContact={this.removeContact}
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
