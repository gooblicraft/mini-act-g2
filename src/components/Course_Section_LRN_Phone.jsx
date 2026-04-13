import React from 'react'

const Course_Section_LRN_Phone = ({ course, setCourse, section, setSection, lrn, setLrn, phoneNum, setPhoneNum, missingFields }) => {
  const inputClass400 = 'rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10';
  const selectClass190 = 'rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10';
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
    const sections = [
      { id: 1, code: '1A' },
      { id: 2, code: '2A' },
      { id: 3, code: '3A' },
      { id: 4, code: '4A' },
      { id: 5, code: '1B' },
      { id: 6, code: '2B' },
      { id: 7, code: '3B' },
      { id: 8, code: '4B' },
      { id: 9, code: '1C' },
      { id: 10, code: '2C' },
      { id: 11, code: '3C' },
      { id: 12, code: '4C' },
      { id: 13, code: '1D' },
      { id: 14, code: '2D' },
      { id: 15, code: '3D' },
      { id: 16, code: '4D' },
    ];
  return (
    <div className='flex flex-row gap-5'>
        <div>
          <label className='block mb-1 font-bold' for='course'>Course: </label>
            <select className={selectClass190} id='course' value={course} onChange={(e) => setCourse(e.target.value)}>
            {courses.map((course) =>(
                <option key={course.id} value={course.code}>
                {course.code}
                </option>
            ))}
            </select>
        </div>

        <div>
          <label className='block mb-1 font-bold' for='section'>Section: </label>
            <select className={selectClass190} id='section' value={section} onChange={(e) => setSection(e.target.value)}>
            {sections.map((section) =>(
                <option key={section.id} value={section.code}>
                {section.code}
                </option>
            ))}
            </select>
        </div>
        
        <div>
          <label className='block mb-1 font-bold' for='lrn'>Learner's Reference Number: </label>
          <input className={`${inputClass400} ${missingFields.lrn ? 'ring-2 ring-red-500' : ''}`} type='text' id='lrn' placeholder='Input your LRN' value={lrn} onChange={(e) => setLrn(e.target.value)}></input>
          {/* <h2>Your LRN: {LRN}</h2> */}
        </div>

        <div>
          <label className='block mb-1 font-bold' for='phoneNumber'>Phone Number: </label>
          <input className={`${inputClass400} ${missingFields.phoneNum ? 'ring-2 ring-red-500' : ''}`} type='text' id='phoneNumber' placeholder='Input your Phone Number' value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}></input>
          {/* <h2>YOUR Phone Number: {phoneNum}</h2> */}
        </div>
    </div>
  )
}

export default Course_Section_LRN_Phone