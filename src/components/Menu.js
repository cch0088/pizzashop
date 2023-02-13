
import React from 'react';
import Pizza from "./Pizza"

function Menu({pizzas, setPizzas}) {

  return (
    <div className="lower-content">
     <div className="menuNav">

        {pizzas.map(pizza => {
            return <Pizza
            key={pizza.id}
            {...pizza}
            />
        })}
    </div>
    </div>
  )
}

export default Menu;