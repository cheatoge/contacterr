import React from 'react'
import { PhonesList } from '../PhonesList'
import './AddContact.css'
import './Contact.css'

/**
 * Some logic of this component is shared with Contact.js
 * and may be later moved to high order component or something
 */

const initialState = () => {
  return {
    isEditing: false,
    contact: undefined
  }
}

const blankContact = () => {
  return {
    name: '',
    phones: [
      {
        number: '',
        isBusiness: false
      }
    ]
  }
}

class AddContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState()
  }

  cancel = () => {
    this.setState(initialState())
  }

  createNewContact = () => {}

  editNewContact = () => {
    this.setState({
      isEditing: true,
      contact: blankContact()
    })
  }

  onNameChange = event => {
    const newName = event.target.value

    this.setState(state => {
      return {
        contact: {
          ...state.contact,
          name: newName
        }
      }
    })
  }

  updatePhone = (indexToUpdate, newPhone) => {
    this.setState(state => {
      const contact = state.contact
      let newPhones = [...contact.phones]
      if (newPhone) {
        newPhones.splice(indexToUpdate, 1, newPhone)
      } else {
        newPhones.splice(indexToUpdate, 1)
      }

      return {
        contact: {
          ...contact,
          phones: newPhones
        }
      }
    })
  }

  addPhone = () => {
    this.setState(state => {
      const contact = state.contact
      const blankPhone = {
        number: '',
        isBusiness: false
      }
      return {
        contact: {
          ...contact,
          phones: [...contact.phones, blankPhone]
        }
      }
    })
  }

  render() {
    const { isEditing, contact } = this.state

    return (
      <div className="contact">
        {!isEditing && (
          <div className="center-content">
            <button className="add-button" onClick={this.editNewContact}>
              Add Contact
            </button>
          </div>
        )}
        {isEditing && (
          <>
            <div>
              <label>Name:</label>{' '}
              <input value={contact.name} onChange={this.onNameChange}></input>
            </div>

            <PhonesList
              updatePhone={this.updatePhone}
              addPhone={this.addPhone}
              phones={contact.phones}
              isEditing={true}
            />

            <div className="filler"></div>
            <div className="contact-actions">
              <button onClick={() => this.cancel()}>Cancel</button>
              <button onClick={() => this.createNewContact()}>Create</button>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default AddContact
