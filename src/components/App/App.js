import React from 'react'
import './App.css'
import { ContactListContainer } from '../../containers/ContactListContainer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'

const store = createStore(reducers)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="app-header">CONTACTERR</div>
          <ContactListContainer />
        </div>
      </Provider>
    )
  }
}

export default App
