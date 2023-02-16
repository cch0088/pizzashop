import React from "react";
import PizzaList from "./PizzaList";
import Filters from "./Filters";

function TopMenu({filters, setFilters, pizzas}) {
    return(
        <div className="content">
            <div className="pizza-list">
                <Filters filters={filters} setFilters={setFilters} />
                {pizzas.map(pizza => {
                    return <PizzaList key={pizza.id} {...pizza} />
                })}
            </div>
        </div>
    )
}

export default TopMenu;
