import React from 'react'
import './App.css'
import { ContactList } from '../ContactList'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Saul Goodman',
          phones: [
            {
              number: '600600600',
              isBusiness: false
            }
          ]
        },
        {
          id: 2,
          name: 'Mike Tyson',
          phones: [
            {
              number: '333343444'
            },
            {
              number: '636263634',
              isBusiness: true
            }
          ]
        }
      ]
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
