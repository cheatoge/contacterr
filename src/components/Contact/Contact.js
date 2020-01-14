import React from 'react'
import { PhonesList } from '../PhonesList'
import './Contact.css'

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      editedContact: undefined
    }
  }

  editContact = contact => {
    this.setState({
      isEditing: true,
      editedContact: contact
    })
  }

  finishEditing = () => {
    this.setState({
      isEditing: false,
      editedContact: undefined
    })
  }

  saveEdits = () => {
    const contact = this.props.contact

    const { id, phones, name } = this.state.editedContact
    const filteredPhones = phones.filter(function(phone) {
      return phone.number
    })

    this.props.updateContact({
      id: id,
      name: name || contact.name,
      phones: filteredPhones
    })
    this.finishEditing()
  }

  onNameChange = event => {
    const newName = event.target.value

    this.setState(state => {
      return {
        editedContact: {
          ...state.editedContact,
          name: newName
        }
      }
    })
  }

  updatePhone = (indexToUpdate, newPhone) => {
    this.setState(state => {
      const contact = state.editedContact
      let newPhones = [...contact.phones]
      if (newPhone) {
        newPhones.splice(indexToUpdate, 1, newPhone)
      } else {
        newPhones.splice(indexToUpdate, 1)
      }

      return {
        editedContact: {
          ...contact,
          phones: newPhones
        }
      }
    })
  }

  addPhone = () => {
    this.setState(state => {
      const contact = state.editedContact
      const blankPhone = {
        number: '',
        isBusiness: false
      }
      return {
        editedContact: {
          ...contact,
          phones: [...contact.phones, blankPhone]
        }
      }
    })
  }

  render() {
    const { isEditing, editedContact } = this.state
    let { removeContact, contact } = this.props

    if (editedContact) {
      contact = editedContact
    }

    let { id, name, phones } = contact

    return (
      <div className={'contact'}>
        {isEditing ? (
          <div>
            <label>Name:</label>{' '}
            <input value={name} onChange={this.onNameChange}></input>
          </div>
        ) : (
          <div className={'contact-header'}>{name}</div>
        )}

        <PhonesList
          updatePhone={this.updatePhone}
          addPhone={this.addPhone}
          phones={phones}
          isEditing={isEditing}
        />

        <div className="filler"></div>
        <div className="contact-actions">
          {isEditing ? (
            <>
              <button onClick={() => removeContact(id)}>Remove</button>
              <button onClick={() => this.finishEditing()}>Cancel</button>
              <button onClick={() => this.saveEdits(id)}>Save</button>
            </>
          ) : (
            <button onClick={() => this.editContact(contact)}>Edit</button>
          )}
        </div>
      </div>
    )
  }
}

export default Contact
