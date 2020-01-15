const initialFilter = { phrase: '' }

const contactsFilter = (state = initialFilter, action) => {
  switch (action.type) {
    case 'SET_CONTACTS_FILTER':
      return action.filter
    default:
      return state
  }
}

export default contactsFilter
