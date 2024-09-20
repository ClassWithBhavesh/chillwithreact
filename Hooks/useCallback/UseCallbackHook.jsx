import React, { useCallback, useState } from "react";
import SearchCompo from "./SearchCompo";

const carArray = [
    "BMW",
    "Mercedes",
    "Porsche",
    "Buggati",
    "Ferrai",
    "Supra",
    "Audi",
    "RR",
    "Bentley",
    "Aston Martin",
  ];

function UseCallbackHook() {

  const [cars, setCars] = useState(carArray);

  const shuffleFunc = (arr) => {
    let shuffledArray = [...arr];
    for(let i = shuffledArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }
    return shuffledArray;
  }

  const handleShuffle = () => {
    setCars(shuffleFunc(cars));
  }

  const hnadleSearch = useCallback((userText) => {
    const filteredCar = carArray.filter((car) =>{
      return car.includes(userText);
    })
    setCars(filteredCar);
  }, [cars]);

  return (
    <div>
        <button onClick={handleShuffle}>Shuffle</button>
        <SearchCompo onChange={hnadleSearch} />
      <ul>
        {cars.map((car, ind) => ( <li key={ind}>{car}</li> ))}
      </ul>
    </div>
  );
}

export default UseCallbackHook;
