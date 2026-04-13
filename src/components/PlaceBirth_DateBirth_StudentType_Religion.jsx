import React from 'react'

const PlaceBirth_DateBirth_StudentType_Religion = ({ placeBirth, setPlaceBirth, dateBirth, setDateBirth, studentType, setStudentType, religion, setReligion, address, setAddress, missingFields }) => {

    const studentTypes = [
      { id: 1, type: 'Regular' },
      { id: 2, type: 'Irregular' },
      { id: 3, type: 'FDA' }
      
    ];
  return (
        <div className='flex flex-col gap-5'>
        <div className='flex flex-row gap-5'>
            <div>
                <label className='block mb-1 font-bold' for='birthPlace'>DateBirth: (date)</label>
                <input className={`rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10 ${missingFields.dateBirth ? 'ring-2 ring-red-500' : ''}`} type='date' id='birthdate' placeholder='Your Date Birth' value={dateBirth} onChange={(e) => setDateBirth(e.target.value)}></input>

                {/* <h2>Datebirth: {dateBirth}</h2> */}
            </div>

            <div>
                <label className='block mb-1 font-bold' for='typeStudent'>Student Type: </label>
                <select className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' id='typeStudent' value={studentType} onChange={(e) => setStudentType(e.target.value)}>
                {studentTypes.map((studentType) =>(
                    <option key={studentType.id} value={studentType.type}>
                    {studentType.type}
                    </option>
                ))}
                </select>
            </div>

            <div>
                <label className='block mb-1 font-bold' for='birthPlace'>PlaceBirth: </label>
                <input className={`rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10 ${missingFields.placeBirth ? 'ring-2 ring-red-500' : ''}`} type='text' id='birthPlace' placeholder='Your Place Birth' value={placeBirth} onChange={(e) => setPlaceBirth(e.target.value)}></input>

                {/* <h2>Placebirth: {placeBirth}</h2> */}
            </div>

            <div>
                <label className='block mb-1 font-bold' for='religion'>Religion: </label>
                <input className={`rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10 ${missingFields.religion ? 'ring-2 ring-red-500' : ''}`} type='text' id='religion' placeholder='Your Religion' value={religion} onChange={(e) => setReligion(e.target.value)}></input>

                {/* <h2>Religion: {religion}</h2> */}
            </div>
        </div>
            <div>
                <label className='block mb-1 font-bold' for='address'>Address: </label>
                <input className={`rounded-lg bg-neutral-300 w-[1240px] px-4 py-2 h-10 ${missingFields.address ? 'ring-2 ring-red-500' : ''}`} type='text' id='address' placeholder='Your Address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
            </div>
    </div>
    
  )
}

export default PlaceBirth_DateBirth_StudentType_Religion