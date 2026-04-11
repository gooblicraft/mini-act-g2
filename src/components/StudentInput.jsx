import React, { useState } from 'react'

const StudentInput = () => {
    const [Name, setName] = useState("");
    const [StudentID, setStudentId] = useState("");
    const [email, setEmail] = useState("");
    const courses = [
      { id: 1, code: 'BSE' },
      { id: 2, code: 'BSIT' },
      { id: 3, code: 'BSPA' },
      { id: 4, code: 'BSSW' },
      { id: 5, code: 'BTVTED' },
      { id: 6, code: 'BSAIS' },
      { id: 7, code: 'BSA' },
      { id: 8, code: 'BAELS' },
      { id: 9, code: 'DHRS' }
    ];

  return (
    <div>
      <div>
        <label for='name'>Name: </label>
        <input type='text' id='name' placeholder='Input your name' onInput={(e) => setName(e.target.value)}></input>

        <label for='studentID'>Student ID: </label>
        <input type='text' id='studentID' placeholder='Input your Student ID' onInput={(e) => setStudentId(e.target.value)}></input>

        <label for='email'>Email: </label>
        <input type='text' id='email' placeholder='Input your Email' onInput={(e) => setEmail(e.target.value)}></input>

        <h2>Hello User {Name}</h2>
        <h2>Student ID {StudentID}</h2>
        <h2>Email:  {email}</h2>
      </div>
      
      <div>
        <select>
          {courses.map((course) =>(
            <option key={course.id} value={course.id}>
              {course.code}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default StudentInput