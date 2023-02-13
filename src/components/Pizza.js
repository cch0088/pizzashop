import React from "react";

function Pizza({toppings, image, type, setToppings, setType, setImage}) {

    const handleClick = (e) => {
        setToppings(toppings);
        setType(type);
        setImage(image);
    }

    return(
        <div className="menuNav">
            <img src={image} alt={type} onClick={handleClick} style={{ "cursor":"pointer" }}/>
        </div>
    )

}
export default Pizza;
