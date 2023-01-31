import { useState } from 'react';
import React from 'react';

export function ArraysEx() {
  //array opf colors and array of pets
  const [colors, setColors] = useState<string[]>(["red", "orange", "purple", "blue"]);

  const [pets, setPets] = useState<Pet[]>([
    { name: "Fluffer Nutters", type: "Cat", id: 1 },
    { name: "Mocha", type: "Dog", id: 2 },
    { name: "Sophie", type: "Hamster", id: 3 }])
    


  //spread operator creates new array
  function addColor(color: string): void {
    setColors([...colors, color]);
    //colors.push(color);CAN'T mutate the array by method push that changes the orig array
  }
  return (
    <div>
      {/* <h3>Colors</h3> */}
      <ol>
        
        {colors.map((color, index) => <li key={index}>{color}</li>)}
      </ol>
      <button onClick={() => addColor('Violet')}>Add Violet</button>
      <button onClick={() => addColor('Green')}>Add Green</button>
      <button onClick={() => addColor('Blue')}>Add Blue</button>

      <table>
        <thead>
          <tr>
            <th>Pets</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => <tr key={pet.id}>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            </tr>
          </tbody>
      </table>
    </div>
  )
}