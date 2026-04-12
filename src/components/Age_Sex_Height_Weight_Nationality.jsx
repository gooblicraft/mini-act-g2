import React, {useState} from 'react'

const Age_Sex_Height_Weight_Nationality = () => {
    const [age, setAge] = useState(17);
    const [sex, setSex] = useState(true);
    const [height, setHeight] = useState("60");
    const [weight, setWeight] = useState("20");
    const [nationality, setNationality] = useState("Filipino");

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
    <div>
        <div>
            <input type="number" min="17" max="100" placeholder='Input your Age' onInput={(e) => setAge(e.target.value)} onBlur={handleAge} value={age}/>
            <h2>Age: {age}</h2>
        </div>
        <div>
          <select onChange={(e) => setSex(e.target.value === 'male')} value={sex ? 'male' : 'female'}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <h2>Sex: {sex ? 'Male' : 'Female'}</h2>
        </div>

        <div>
          <input type='number' placeholder='Input your Height' onChange={(e) => setHeight(e.target.value)} onBlur={handleHeight} value={height}></input>
            <h2>Height: {height}cm</h2>
        </div>

        <div>
          <input type='number' placeholder='Input your Weight' onChange={(e) => setWeight(e.target.value)} onBlur={handleWeight} value={weight}></input>
            <h2>Weight: {weight}kg</h2>
        </div>

        <div>
            <input type='text' placeholder='Input your Nationality' onChange={(e) => setNationality(e.target.value)}></input>

            <h2>Nationality: {nationality}</h2>
        </div>
    </div>
  )
}

export default Age_Sex_Height_Weight_Nationality