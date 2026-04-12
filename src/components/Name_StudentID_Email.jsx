import React, { useState } from 'react'

const Name_StudentID_Email = () => {
    const [Name, setName] = useState("");
    const [StudentID, setStudentId] = useState("");
    const [email, setEmail] = useState("");
    

  return (
    <div>
      <div className='flex flex-row gap-5'>
        <div>
          <label className='block mb-1' for='name'>Name: </label>
          <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' id='name' placeholder='Input your name' onInput={(e) => setName(e.target.value)}></input>
        </div>

        <div>
          <label className='block mb-1' for='studentID'>Student ID: </label>
          <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' id='studentID' placeholder='Input your Student ID' onInput={(e) => setStudentId(e.target.value)}></input>
        </div>

        <div>
          <label className='block mb-1' for='email'>Email: </label>
          <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' id='email' placeholder='Input your Email' onInput={(e) => setEmail(e.target.value)}></input>
        </div>
      </div>
      
      {/* <h2>Hello User {Name}</h2>
      <h2>Student ID {StudentID}</h2>
      <h2>Email:  {email}</h2> */}
    </div>
  )
}

export default Name_StudentID_Email