import React from 'react'

const Age_Sex_Height_Weight_Nationality = ({ age, setAge, sex, setSex, height, setHeight, weight, setWeight, nationality, setNationality, missingFields }) => {

    const handleAge = () => {
        try {
        const value = Number(age);

        if (Number.isNaN(value)) {
            throw new Error('Please enter a valid number.');
        }

        if (value < 17) {
            throw new Error('Age is invalid. Age must be 17 or greater.');
        }

        setAge(value);
        } catch (error) {
        window.alert(error.message);
        setAge("17");
        }
    };

    const handleHeight = () => {
        try {
        const value = Number(height);

        if (Number.isNaN(value)) {
            throw new Error('Please enter a valid number.');
        }

        if (value < 60) {
            throw new Error('Height is invalid. Height must be 60 or greater.');
        }

        setHeight(value);
        } catch (error) {
        window.alert(error.message);
        setHeight("60");
        }
    };

    const handleWeight = () => {
        try {
        const value = Number(weight);

        if (Number.isNaN(value)) {
            throw new Error('Please enter a valid number.');
        }

        if (value < 20) {
            throw new Error('Weight is invalid. Weight must be 20 or greater.');
        }

        setWeight(value);
        } catch (error) {
        window.alert(error.message);
        setWeight("20");
        }
    };
    
  return (
    <div className='flex flex-row gap-5'>
        <div>
            <label className='block mb-1 font-bold' for='age'>Age: </label>
            <input className={`rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10 ${missingFields.age ? 'ring-2 ring-red-500' : ''}`} type="number" min="17" max="100" placeholder='Input your Age' onInput={(e) => setAge(e.target.value)} onBlur={handleAge} value={age} id='age'/>
            {/* <h2>Age: {age}</h2> */}
        </div>
        
        <div>
            <label className='block mb-1 font-bold' for='sex'>Sex: </label>
            <select className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' onChange={(e) => setSex(e.target.value === 'male')} value={sex ? 'male' : 'female'} id='sex'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
            {/* <h2>Sex: {sex ? 'Male' : 'Female'}</h2> */}
        </div>

        <div>
            <label className='block mb-1 font-bold' for='height'>Height: </label>
            <input className={`rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10 ${missingFields.height ? 'ring-2 ring-red-500' : ''}`} type='number' placeholder='Input your Height' onChange={(e) => setHeight(e.target.value)} onBlur={handleHeight} value={height} id='height'></input>
            {/* <h2>Height: {height}cm</h2> */}
        </div>

        <div>
            <label className='block mb-1 font-bold' for='weight'>Weight: </label>
            <input className={`rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10 ${missingFields.weight ? 'ring-2 ring-red-500' : ''}`} type='number' placeholder='Input your Weight' onChange={(e) => setWeight(e.target.value)} onBlur={handleWeight} value={weight} id='weight'></input>
            {/* <h2>Weight: {weight}kg</h2> */}
        </div>

        <div>
            <label className='block mb-1 font-bold' for='nationality'>Nationality: </label>
            <input className={`rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10 ${missingFields.nationality ? 'ring-2 ring-red-500' : ''}`} type='text' placeholder='Input your Nationality' onChange={(e) => setNationality(e.target.value)} value={nationality} id='nationality'></input>

            {/* <h2>Nationality: {nationality}</h2> */}
        </div>
    </div>
  )
}

export default Age_Sex_Height_Weight_Nationality