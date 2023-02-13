import React from "react";
import PizzaBuilder from "./PizzaBuilder";

function Pizza({toppings, image, type}) {

    const handleClick = (e) => {
        console.log(type, image, toppings);
    }

    return(
        <div className="menuNav">
            <img src={image} alt={type} onClick={handleClick} style={{ "cursor":"pointer" }}/>
        </div>
    )

}
export default Pizza;
