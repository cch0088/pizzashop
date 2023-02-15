import React from "react";

function Pizza({toppings, image, type, setToppings, setType, setImage}) {

    const handleClick = (e) => {
        setToppings(toppings);
        setType(type);
        setImage(image);
    }

    return(
        <div>
            <img className="pizza-select" src={image} alt={type} onClick={handleClick} />
        </div>
    )

}
export default Pizza;
