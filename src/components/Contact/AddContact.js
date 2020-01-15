import React from 'react'
import { PhonesList } from '../PhonesList'
import generateID from '../../util/generateID'
import './AddContact.css'
import './Contact.css'

/**
 * Some logic of this component is shared with Contact.js
 * and may be later moved to high order component or something
 */

const initialState = () => {
  return {
    isEditing: false,
    contact: undefined,
    fieldErrors: {}
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

  finishEditing = () => {
    this.setState(initialState())
  }

  saveNewContact = () => {
    const { contact } = this.state

    if (!contact.name) {
      this.setState(state => {
        return {
          fieldErrors: {
            ...state.fieldErrors,
            name: 'Field cannot be empty.'
          }
        }
      })

      return
    }

    this.props.addContact({ ...contact, id: generateID() })
    this.finishEditing()
  }

  editNewContact = () => {
    this.setState({
      isEditing: true,
      contact: blankContact()
    })
  }

  onNameChange = event => {
    const newName = event.target.value

    if (!newName) {
      this.setState(state => {
        return {
          fieldErrors: {
            ...state.fieldErrors,
            name: 'Field cannot be empty.'
          }
        }
      })
    } else {
      this.setState(state => {
        let newErrors = { ...state.fieldErrors }
        delete newErrors.name

        return { fieldErrors: newErrors }
      })
    }

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
    const { isEditing, contact, fieldErrors } = this.state

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
              {fieldErrors.name && (
                <div className="validation-error">* {fieldErrors.name}</div>
              )}
            </div>

            <PhonesList
              updatePhone={this.updatePhone}
              addPhone={this.addPhone}
              phones={contact.phones}
              isEditing={true}
            />

            <div className="filler"></div>
            <div className="contact-actions">
              <button onClick={() => this.finishEditing()}>Cancel</button>
              <button onClick={() => this.saveNewContact()}>Create</button>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default AddContact
