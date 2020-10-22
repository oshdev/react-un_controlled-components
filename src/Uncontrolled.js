import React, { useRef } from 'react'

const Uncontrolled = () => {
  const userRef = useRef()
  const validateInput = (event) => {
    if (!userRef.current.value) { alert('User must be provided'); event.preventDefault() }
  }
  return (
    <form method="POST" target="/login" onSubmit={validateInput}>
      <label>
        User <input type="text" name="user" ref={userRef}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Uncontrolled;
