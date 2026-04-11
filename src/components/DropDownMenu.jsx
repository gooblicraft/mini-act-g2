import React, {useState} from 'react'

function DropdownMenu() {
  const options = ["Apple", "Banana", "Cherry", "Date"];
  const [selected, setSelected] = useState("");

  return (
    <div>
      <label>Choose a fruit: </label>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="" disabled>Select an option</option>
        
        {/* Mapping the array to menu options */}
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <p>You selected: {selected}</p>
    </div>
  );
}

export default DropdownMenu