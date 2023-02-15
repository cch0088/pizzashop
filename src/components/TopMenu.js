import React from "react";
import PizzaList from "./PizzaList";


function TopMenu({pizzas}) {
    return(
        <div className="content">
            <div className="pizza-list">
                {pizzas.map(pizza => {
                    return <PizzaList
                    key={pizza.id}
                    {...pizza} />
                })}
            </div>
        </div>
    )
}


export default TopMenu;