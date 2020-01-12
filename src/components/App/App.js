import React from 'react'
import './App.css'
import { ContactList } from '../ContactList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'

const store = createStore(reducers)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ContactList />
        </div>
      </Provider>
    )
  }
}

export default App
