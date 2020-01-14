import { connect } from 'react-redux'
import { ContactList } from '../../components/ContactList'
import { removeContact, updateContact } from '../../actions'

const mapStateToProps = state => ({
  contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
  removeContact: id => dispatch(removeContact(id)),
  updateContact: contact => dispatch(updateContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
