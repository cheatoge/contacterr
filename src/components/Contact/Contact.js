import React from 'react'
import './Contact.css'
import formatPhone from '../../util/formatPhone'

class Phone extends React.Component {
  onChange = event => {
    const { updatePhone, index, phone } = this.props
    let newValue
    if (event.target.type === 'checkbox') {
      newValue = !phone[event.target.name]
    } else {
      newValue = event.target.value || ''
      const digits = newValue.match(/\d/g)
      newValue = digits ? digits.join('') : ''
    }

    updatePhone(index, {
      ...phone,
      [event.target.name]: newValue
    })
  }

  render() {
    const defaultValue = {
      number: '',
      isBusiness: false
    }
    const { isEditing, phone, index, updatePhone } = this.props
    const { number, isBusiness } = phone || defaultValue

    return (
      <>
        {isEditing ? (
          <div className="phone-editing">
            <div>
              <input
                pattern="[0-9]*"
                name="number"
                value={number}
                onChange={this.onChange}
              ></input>
              <button onClick={() => updatePhone(index)}>x</button>
            </div>
            <div>
              <label>Business</label>
              <input
                name="isBusiness"
                type="checkbox"
                checked={isBusiness}
                onChange={this.onChange}
              />
            </div>
          </div>
        ) : (
          formatPhone(number)
        )}
      </>
    )
  }
}

class PhonesList extends React.Component {
  render() {
    const { isEditing, phones, updatePhone, addPhone } = this.props

    const wrappedPhones = phones.map((phone, index) => {
      const { isBusiness } = phone

      let style = 'phone'
      if (isBusiness) {
        style += ' phone-business'
      }

      return (
        <li key={index} className={style}>
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
        <span className={'phones-header'}>Phones:</span>
        <ul className={'phones'}>
          {wrappedPhones}
          {isEditing && (
            <li>
              <button onClick={addPhone}>addPhone</button>
            </li>
          )}
        </ul>
      </section>
    )
  }
}

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
        number: ''
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
        <div className={'contact-header'}>
          {isEditing ? (
            <input value={name} onChange={this.onNameChange}></input>
          ) : (
            name
          )}
        </div>

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
