import { connect } from 'react-redux'
import { Search } from '../../components/Search'
import { setContactsFilter } from '../../actions'

const mapStateToProps = state => {
  return {
    phrase: state.contactsFilter.phrase || ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: phrase => {
      dispatch(
        setContactsFilter({
          phrase: phrase
        })
      )
    }
  }
}

const ContactSearch = connect(mapStateToProps, mapDispatchToProps)(Search)
export default ContactSearch
