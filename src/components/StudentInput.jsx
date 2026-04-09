import React, { useState } from 'react'

const StudentInput = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  return (
    <div>
        <input type='text' placeholder='Input your first name' onInput={(e) => setFirstName(e.target.value)}></input>
        <input type='text' placeholder='Input your last name' onInput={(e) => setLastName(e.target.value)}></input>
        <h2>Hello User {firstName} {lastName}</h2>
    </div>
  )
}

export default StudentInput