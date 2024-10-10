import { createContext, useState } from "react";


export const CarContext = createContext();

export const CarProvider = (props) => {

    const [car, setCar] = useState([]);

    return <CarContext.Provider value={{car, setCar}}>
        {props.children}
    </CarContext.Provider>
}

