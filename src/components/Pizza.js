import React from "react";

function Pizza({toppings, image, type, setToppings, setType, setImage}) {

    const handleClick = (e) => {
        setToppings(toppings);
        setType(type);
        setImage(image);
    }

    return(
        <div className="menuNav">
            <div className="navBar">
            <img src={image} alt={type} onClick={handleClick} style={{ "cursor":"pointer" }}/>
        </div>
        </div>
    )

}
export default Pizza;
