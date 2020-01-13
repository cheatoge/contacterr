import { connect } from 'react-redux'
import { ContactList } from '../../components/ContactList'
import { removeContact } from '../../actions'

const mapStateToProps = state => ({
  contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
  removeContact: id => dispatch(removeContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
