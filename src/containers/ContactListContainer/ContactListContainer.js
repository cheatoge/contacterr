import { connect } from 'react-redux'
import { ContactList } from '../../components/ContactList'
import { removeContact, updateContact, addContact } from '../../actions'

const mapStateToProps = state => ({
  contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact)),
  removeContact: id => dispatch(removeContact(id)),
  updateContact: contact => dispatch(updateContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
