import React, { useState } from 'react'

const Controlled = () => {
  const [user, setUser] = useState('') // holding the state
  const validateInput = (event) => {
    if (!user) { alert('User must be provided'); event.preventDefault() }
  } // value comes from the state hook
  return (
    <form method="POST" target="/login" onSubmit={validateInput}>
      <label>
        User <input type="text" name="user" value={user} // populating the value
            onChange={(event) => setUser(event.target.value)} />{/* updating state */}
      </label>
      <input type="submit" value="Submit"/>{user}
    </form>         
  )
}

export default Controlled
