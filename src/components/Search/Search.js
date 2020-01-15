import React from 'react'

const Search = props => {
  const { search, phrase } = props
  return (
    <div>
      <label>Search: </label>
      <input
        type="text"
        placeholder="Name or phone number"
        value={phrase}
        onChange={event => {
          search(event.target.value)
        }}
      ></input>
    </div>
  )
}

export default Search
