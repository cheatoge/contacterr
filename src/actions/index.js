export const addContact = contact => {
  return {
    type: 'ADD_CONTACT',
    id: contact.id,
    contact: contact
  }
}

export const removeContact = id => {
  return {
    type: 'REMOVE_CONTACT',
    id: id
  }
}

export const updateContact = contact => {
  return {
    type: 'UPDATE_CONTACT',
    id: contact.id,
    contact: contact
  }
}
