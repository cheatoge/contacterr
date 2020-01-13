import testContacts from '../testData/contacts'

const contacts = (state = testContacts, action) => {
  switch (action.type) {
    case 'REMOVE_CONTACT':
      return state.filter(contact => {
        return contact.id !== action.id
      })

    default:
      return state
  }
}

export default contacts
