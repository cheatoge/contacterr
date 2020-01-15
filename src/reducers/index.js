import { combineReducers } from 'redux'
import contacts from './contacts'
import contactsFilter from './contactsFilter'

export default combineReducers({
  contacts,
  contactsFilter
})
