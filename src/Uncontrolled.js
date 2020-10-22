import React, { useRef } from 'react'

const Uncontrolled = () => {
  const userRef = useRef() // create a reference
  const validateInput = (event) => {
    if (!userRef.current.value) { alert('User must be provided'); event.preventDefault() }
  } // value comes from the DOM
  return (
    <form method="POST" target="/login" onSubmit={validateInput}>
      <label>
        User <input type="text" name="user" ref={userRef}/>{/* reference the element */}
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Uncontrolled;
