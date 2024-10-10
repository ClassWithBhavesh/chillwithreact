import React from "react";
import CarCompo from "./CarCompo";
import "../App.css";
import Nav from "./Nav";

const cars = [
  {
    name: "BMW i8",
    price: "147500",
    cc: "1499",
    mileage: "47",
    image: "https://link-to-car-image.com/bmw-i8.jpg",
  },
  {
    name: "Audi R8",
    price: "169900",
    cc: "5204",
    mileage: "13",
    image: "https://link-to-car-image.com/audi-r8.jpg",
  },
  {
    name: "Mercedes AMG GT",
    price: "118600",
    cc: "3982",
    mileage: "19",
    image: "https://link-to-car-image.com/mercedes-amg-gt.jpg",
  },
  {
    name: "Porsche 911",
    price: "135000",
    cc: "2981",
    mileage: "21",
    image: "https://link-to-car-image.com/porsche-911.jpg",
  },
  {
    name: "Jaguar F-Type",
    price: "73000",
    cc: "5000",
    mileage: "15",
    image: "https://link-to-car-image.com/jaguar-f-type.jpg",
  },
  {
    name: "Ford Mustang",
    price: "55000",
    cc: "4951",
    mileage: "12",
    image: "https://link-to-car-image.com/ford-mustang.jpg",
  },
  {
    name: "Chevrolet Camaro",
    price: "62000",
    cc: "6200",
    mileage: "14",
    image: "https://link-to-car-image.com/chevrolet-camaro.jpg",
  },
  {
    name: "Nissan GT-R",
    price: "113540",
    cc: "3799",
    mileage: "16",
    image: "https://link-to-car-image.com/nissan-gt-r.jpg",
  },
  {
    name: "Lamborghini Huracan",
    price: "210000",
    cc: "5204",
    mileage: "15",
    image: "https://link-to-car-image.com/lamborghini-huracan.jpg",
  },
  {
    name: "Ferrari 488",
    price: "262000",
    cc: "3902",
    mileage: "18",
    image: "https://link-to-car-image.com/ferrari-488.jpg",
  },
  {
    name: "McLaren 720S",
    price: "299000",
    cc: "3994",
    mileage: "19",
    image: "https://link-to-car-image.com/mclaren-720s.jpg",
  },
  {
    name: "Aston Martin DB11",
    price: "205600",
    cc: "5204",
    mileage: "20",
    image: "https://link-to-car-image.com/aston-martin-db11.jpg",
  },
  {
    name: "Rolls-Royce Ghost",
    price: "315000",
    cc: "6750",
    mileage: "10",
    image: "https://link-to-car-image.com/rolls-royce-ghost.jpg",
  },
  {
    name: "Bentley Continental GT",
    price: "231800",
    cc: "5998",
    mileage: "15",
    image: "https://link-to-car-image.com/bentley-continental-gt.jpg",
  },
  {
    name: "Maserati Ghibli",
    price: "78000",
    cc: "2979",
    mileage: "18",
    image: "https://link-to-car-image.com/maserati-ghibli.jpg",
  },
  {
    name: "Tesla Model X",
    price: "89990",
    cc: "Electric",
    mileage: "93",
    image: "https://link-to-car-image.com/tesla-model-x.jpg",
  },
  {
    name: "Lexus LC 500",
    price: "93000",
    cc: "4969",
    mileage: "19",
    image: "https://link-to-car-image.com/lexus-lc-500.jpg",
  },
  {
    name: "Honda NSX",
    price: "157500",
    cc: "3493",
    mileage: "21",
    image: "https://link-to-car-image.com/honda-nsx.jpg",
  },
  {
    name: "Dodge Challenger SRT",
    price: "73000",
    cc: "6162",
    mileage: "12",
    image: "https://link-to-car-image.com/dodge-challenger-srt.jpg",
  },
  {
    name: "Kia Stinger",
    price: "51000",
    cc: "3342",
    mileage: "22",
    image: "https://link-to-car-image.com/kia-stinger.jpg",
  },
  {
    name: "Toyota Supra",
    price: "55000",
    cc: "2998",
    mileage: "24",
    image: "https://link-to-car-image.com/toyota-supra.jpg",
  },
];

function Home() {
  return (
    <>
      <Nav />
      <div className="App">
        <h1>Car Listings</h1>
        <div className="car-grid">
          {cars.map((car, index) => (
            <CarCompo key={index} car={car} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
