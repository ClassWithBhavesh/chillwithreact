import React, { useContext } from "react";
import Nav from "./Nav";
import "./CarCart.css"
import { CarContext } from "../context/CarContext";

function CarCart() {

  const {car} = useContext(CarContext);

  console.log("Car Cart : ", car);

  return (
    <>
      <Nav />
      <h1>Car Cart</h1>
      <div className="car-cart-list">
        {car.map((item, index) => (
        <div key={index} className="car-cart-item">
          <img src={item.image} alt={item.name} width="200px" />
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Engine: {item.cc} CC</p>
          <p>Mileage: {item.mileage} kmpl</p>
        </div>
        ))}
      </div>
    </>
  );
}

export default CarCart;
