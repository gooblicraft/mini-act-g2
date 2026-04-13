import React, {useState} from 'react'

const PlaceBirth_DateBirth_StudentType_Religion = () => {
    const [placeBirth, setPlaceBirth] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [religion, setReligion] = useState("");
    const [address, setAddress] = useState("");

    const studentTypes = [
      { id: 1, type: 'Regular' },
      { id: 2, type: 'Irregular' },
      { id: 3, type: 'FDA' }
      
    ];
  return (
    <div>
        <div className='flex flex-row gap-5'>
            <div>
                <label className='block mb-1' for='birthPlace'>DateBirth: (date)</label>
                <input className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' type='date' id='birthdate' placeholder='Your Date Birth' onInput={(e) => setDateBirth(e.target.value)}></input>

                {/* <h2>Datebirth: {dateBirth}</h2> */}
            </div>

            <div>
                <label className='block mb-1' for='typeStudent'>Student Type: </label>
                <select className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' id='typeStudent'>
                {studentTypes.map((studentType) =>(
                    <option key={studentType.id} value={studentType.id}>
                    {studentType.type}
                    </option>
                ))}
                </select>
            </div>

            <div>
                <label className='block mb-1' for='birthPlace'>PlaceBirth: </label>
                <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' id='birthPlace' placeholder='Your Place Birth' onInput={(e) => setPlaceBirth(e.target.value)}></input>

                {/* <h2>Placebirth: {placeBirth}</h2> */}
            </div>

            <div>
                <label className='block mb-1' for='religion'>Religion: </label>
                <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' id='religion' placeholder='Your Religion' onInput={(e) => setReligion(e.target.value)}></input>

                {/* <h2>Religion: {religion}</h2> */}
            </div>
        </div>
            <div>
                <label className='block mb-1' for='birthPlace'>Address: </label>
                <input className='rounded-lg bg-neutral-300 w-[1240px] px-4 py-2 h-10' type='text' id='address' placeholder='Your Religion' onInput={(e) => setAddress(e.target.value)}></input>
            </div>
    </div>
    
  )
}

export default PlaceBirth_DateBirth_StudentType_Religion