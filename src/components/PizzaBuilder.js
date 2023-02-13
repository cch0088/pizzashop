import React from 'react';
function PizzaBuilder({toppings, type, image}) {

    return (
            <div className="picture">
                <img className="pizza-display" src={image} alt={type} />
            </div>
    );
}
export default PizzaBuilder;
