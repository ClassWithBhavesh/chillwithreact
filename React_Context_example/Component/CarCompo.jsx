import React, { useContext } from 'react';
import './CarCompo.css'; // Assuming you want some CSS for styling
import { CarContext } from '../context/CarContext';

// CarCard Component
const CarCompo = ({ car }) => {

  const {car: carItems, setCar} = useContext(CarContext);

  const addToCart = () => {

    const isCarExist = carItems.some((carItem) => carItem.name === car.name);

    if(!isCarExist){
      setCar([...carItems, car]);
    }else{
      alert("This car is already been added in you Cart!");
    }
    setCar([...carItems, car])
  }

  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.image} alt={car.name} />
      </div>
      <div className="car-info">
        <h2 className="car-name">{car.name}</h2>
        <p className="car-price">Price: ${car.price}</p>
        <p className="car-cc">Engine: {car.cc} CC</p>
        <p className="car-mileage">Mileage: {car.mileage} kmpl</p>
        <button className="add-to-cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Sample Car List Component
export default CarCompo
