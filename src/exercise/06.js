// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState()

  function handleChange(event) {
    const value = event.target.value

    const isValid = value === value.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const value = event.target.elements.username.value
    onSubmitUsername(value)
  }

  const errorMessage = error ? (
    <div role="alert" style={{color: 'red'}}>
      {error}
    </div>
  ) : null

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage}
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" onChange={handleChange} />
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
