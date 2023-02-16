import React from "react";
import { useHistory } from "react-router-dom";

function PizzaList({toppings, image, type, setToppings, setType, setImage}) {

    const history = useHistory();

    const handleClick = (e) => {
        setToppings(toppings);
        setType(type);
        setImage(image);
        history.push("/options");
    }

    return(
        <div className="pizza-menu-item">
            <div className="pizza-menu-image-container">
                <img className="pizza-menu-image" src={image} alt={type} onClick={handleClick} />
            </div>
            <div className="pizza-menu-description">
                <div className="pizza-menu-name">
                    {type.charAt(0).toUpperCase() + type.slice(1)} Pizza
                </div>
                <div className="pizza-menu-topping-list">
                    <ul>
                        {toppings.map((topping, index) => {
                            return <li key={index}>{topping.charAt(0).toUpperCase() + topping.slice(1)}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default PizzaList;
