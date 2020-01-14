import testContacts from '../testData/contacts'

const contacts = (state = testContacts, action) => {
  switch (action.type) {
    case 'REMOVE_CONTACT':
      return state.filter(contact => {
        return contact.id !== action.id
      })

    case 'UPDATE_CONTACT':
      const indexToUpdate = state.findIndex(contact => {
        return contact.id === action.id
      })

      if (indexToUpdate === -1) {
        return state
      }

      let newState = [...state]
      newState.splice(indexToUpdate, 1, action.contact)

      return newState

    default:
      return state
  }
}

export default contacts
