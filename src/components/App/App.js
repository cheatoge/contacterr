import React from 'react'
import './App.css'
import { ContactList } from '../ContactList'
import { contacts } from '../../util/TestData'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: contacts
    }
  }

  render() {
    return (
      <div className="App">
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App
