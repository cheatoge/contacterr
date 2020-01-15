import { connect } from 'react-redux'
import { ContactList } from '../../components/ContactList'
import {
  removeContact,
  updateContact,
  addContact,
  setContactsFilter
} from '../../actions'

const phonesContainNumber = (phones, number) => {
  const noSpaces = number.replace(/\s/g, '')
  if (isNaN(noSpaces)) {
    return false
  }

  return !!phones.find(phone => phone.number.includes(noSpaces))
}

const textContainPhrase = (text, phrase) => {
  return text.toLowerCase().includes(phrase.toLowerCase())
}

const checkContactContainPhrase = (contact, phrase) => {
  return (
    phonesContainNumber(contact.phones, phrase) ||
    textContainPhrase(contact.name, phrase)
  )
}

const filterContacts = (contacts, filter) => {
  if (!filter) {
    return contacts
  }

  const filteredContacts = contacts.filter(contact => {
    const { phrase } = filter
    let isValid = true

    if (phrase) {
      isValid = checkContactContainPhrase(contact, phrase)
    }

    return isValid
  })

  return filteredContacts
}

const mapStateToProps = state => ({
  contacts: filterContacts(state.contacts, state.contactsFilter)
})

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact)),
  removeContact: id => dispatch(removeContact(id)),
  updateContact: contact => dispatch(updateContact(contact)),
  searchContact: contactsFilter => dispatch(setContactsFilter(contactsFilter))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
