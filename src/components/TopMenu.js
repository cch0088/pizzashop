import React from "react";
import Pizza from "./Pizza";


function TopMenu({pizzas}) {


    return(

        <div className="lower-content">
        <div className="menuNav">
        {pizzas.map(pizza => {
                return (<Pizza
                key={pizza.id}
                type={pizza.type}
                toppings={pizza.toppings}
                image={pizza.image}
           />)
        })}
           </div>
            </div>
    )
}


export default TopMenu;