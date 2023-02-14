import React from "react";
import Pizza from "./Pizza";


function TopMenu({pizzas}) {
    return(
        <div className="content">
        {pizzas.map(pizza => {
            return <Pizza
            key={pizza.id}
            {...pizza} />
        })}
        </div>
    )
}


export default TopMenu;