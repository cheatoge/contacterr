import React from 'react'
import './AddContact.css'

class AddContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      contact: undefined
    }
  }

  cancel = () => {}

  saveEdits = () => {}

  editNewContact = () => {}

  render() {
    const { isEditing } = this.state
    return (
      <div className="add-contact">
        {!isEditing && (
          <div className="center-content">
            <button className="add-button" onClick={this.editNewContact}>
              Add Contact
            </button>
          </div>
        )}
        {isEditing && (
          <div>
            <button onClick={() => this.cancel()}>Cancel</button>
            <button onClick={() => this.saveEdits()}>Save</button>
          </div>
        )}
      </div>
    )
  }
}

export default AddContact
